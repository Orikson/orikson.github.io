<template>
  <div style="padding-left: 1%; width: 100%; height: calc(100% - 40px)">
    <div id="output"></div>
    <span style="width: 100%; width: 100%; height: 100%">
      <div id="input" style="position: relative; width: 100%; height: 100%">
        <div class="caret-underscore" style="position: absolute; height: 100%">
          <p id="caret" ref="caret"></p>
        </div>
        <textarea
          id="input"
          spellcheck="false"
          type="text"
          style="
            color: rgb(200, 200, 200);
            caret-color: transparent;
            width: 100%;
            position: absolute;
          "
          ref="terminalInput"
        />
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "@vue/runtime-core";
import { InputWrapper } from "@/ts/util/caret";
import { Terminal } from "@/ts/terminal/terminal";

function replaceAt(s: string, index: number, replacement: string) {
  return (
    s.substring(0, index) +
    replacement +
    s.substring(index + replacement.length)
  );
}

const delim = document.createElement("span");
delim.id = "delim";
delim.innerHTML = "&nbsp;";

const text2 = document.createElement("span");
text2.id = "text2";
text2.innerHTML = "";

const registeredObservers: ((x: number) => void)[] = [];
let pos = 0;
let lastValue = "";
let terminalInputWrapper: InputWrapper;

export const terminal = new Terminal("eron@github");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function updatePosition(e: any) {
  const nextValue = terminalInputWrapper.input.value;
  if (lastValue !== nextValue) {
    addDirectory();
    lastValue = nextValue;
  }

  // Process input
  if (e.type == "keydown") {
    if (e.key == "Enter") {
      const input = terminalInputWrapper.input.value.substring(
        terminalInputWrapper.prepend.length
      );
      terminalInputWrapper.prepend =
        terminalInputWrapper.input.value +
        "\n" +
        terminal.processInput(input) +
        terminal.header;
      addDirectory();
      lastValue = terminalInputWrapper.input.value;
      terminalInputWrapper.input.scrollTop =
        terminalInputWrapper.input.scrollHeight;
      terminal.resetHistory();
    } else if (e.key == "ArrowUp") {
      const next = terminal.incHistory();
      if (next) {
        terminalInputWrapper.input.value = terminalInputWrapper.prepend + next;
      }
    } else if (e.key == "ArrowDown") {
      const next = terminal.decHistory();
      if (next) {
        terminalInputWrapper.input.value = terminalInputWrapper.prepend + next;
      }
    }
  }
  if (e.type == "keypress" && e.key == "Enter") {
    e.preventDefault();
  }

  // Update cerat position
  const depth = terminalInputWrapper.depth;
  if (depth !== pos || depth < terminalInputWrapper.prepend.length) {
    // Update observables here
    pos = depth;
    if (pos < terminalInputWrapper.prepend.length) {
      pos = terminalInputWrapper.prepend.length;
      terminalInputWrapper.depth = pos;
    }

    for (const observer of registeredObservers) {
      observer(pos);
    }
  }
}

function addDirectory() {
  const curValue = terminalInputWrapper.input.value;
  const prepLen = terminalInputWrapper.prepend.length;
  if (curValue.length < prepLen) {
    terminalInputWrapper.input.value = terminalInputWrapper.prepend;
  } else {
    if (curValue.substring(0, prepLen) !== terminalInputWrapper.prepend) {
      terminalInputWrapper.input.value = replaceAt(
        terminalInputWrapper.input.value,
        0,
        terminalInputWrapper.prepend
      );
    }
  }
}

export default {
  name: "CommandLine",
  setup() {
    const terminalInput = ref<HTMLTextAreaElement | null>(null);
    const caret = ref<HTMLSpanElement | null>(null);
    onMounted(() => {
      if (terminalInput.value) {
        terminalInputWrapper = new InputWrapper(terminalInput.value);
        terminalInputWrapper.prepend = terminal.header;
        terminalInputWrapper.depth = terminalInputWrapper.prepend.length;
        if (caret.value) {
          caret.value.textContent = terminalInputWrapper.prepend;
          caret.value.insertAdjacentElement("beforeend", delim);
          caret.value.insertAdjacentElement("beforeend", text2);
        }

        addDirectory();

        terminalInput.value.addEventListener("keypress", updatePosition); // Every character written
        terminalInput.value.addEventListener("keydown", updatePosition); // Arrowkeys
        terminalInput.value.addEventListener("keyup", updatePosition); // Arrowkeys
        terminalInput.value.addEventListener("mousedown", updatePosition); // Click down
        terminalInput.value.addEventListener("touchstart", updatePosition); // Mobile
        //terminalInput.value.addEventListener("input", addDirectory); // Other input events
        terminalInput.value.addEventListener("input", updatePosition); // Other input events
        terminalInput.value.addEventListener("paste", updatePosition); // Clipboard actions
        terminalInput.value.addEventListener("cut", updatePosition);
        terminalInput.value.addEventListener("mousemove", updatePosition); // Selection, dragging text
        terminalInput.value.addEventListener("select", updatePosition); // Some browsers support this event
        terminalInput.value.addEventListener("selectstart", updatePosition); // Some browsers support this event

        terminalInput.value.addEventListener("scroll", () => {
          if (caret.value && terminalInput.value) {
            caret.value.scrollTop = terminalInput.value.scrollTop;
          }
        });

        registeredObservers.push((x) => {
          if (caret.value && terminalInput.value) {
            caret.value.childNodes[0].nodeValue =
              terminalInput.value.value.substring(0, x);
            caret.value.childNodes[2].textContent =
              terminalInput.value.value.substring(x + 2);
            caret.value.scrollTop = terminalInput.value.scrollTop;
          }
        });
      }
    });

    return { terminalInput, caret };
  },
  components: {},
  data() {
    return {
      text: "",
      directory: "",
      commands: [],
    };
  },
};
</script>

<style>
::selection {
  color: rgb(100, 100, 100);
  background: rgb(50, 50, 50);
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #999;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  background: #666;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #444;
}

#input {
  outline: none;
  overflow: auto;
  overscroll-behavior: contain;
  resize: none;
  word-break: break-all;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

#caret {
  overflow: hidden;
  width: 100%;
  height: 100%;
  word-break: break-all;
  color: transparent;
  white-space: pre-wrap;
}

#text2 {
  overflow: hidden;
  width: 100%;
  height: 100%;
  word-break: break-all;
  color: transparent;
  white-space: pre-wrap;
}

#delim {
  animation: blink 1s step-end infinite;
  border-bottom: 4px solid white;
  white-space: pre;
}

.caret-underscore {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
}
</style>
