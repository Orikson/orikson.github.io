<template>
  <div style="padding: 0% 1%">
    <div id="output"></div>
    <span>
      <div id="input" style="position: inherit">
        <div class="caret-underscore" style="width: 100%; position: absolute">
          <span id="caret" ref="caret"></span>
          <span id="delim">&nbsp;</span>
        </div>
        <textarea
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

function replaceAt(s: string, index: number, replacement: string) {
  return (
    s.substring(0, index) +
    replacement +
    s.substring(index + replacement.length)
  );
}

const registeredObservers: ((x: number) => void)[] = [];
let pos = 0;
let lastValue = "";
let terminalInputWrapper: InputWrapper;
function updatePosition(e: any) {
  const nextValue = terminalInputWrapper.input.value;
  console.log(nextValue, lastValue);
  if (lastValue !== nextValue) {
    addDirectory();
    lastValue = nextValue;
  }

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
    console.log(
      "prepend",
      curValue.substring(0, prepLen),
      terminalInputWrapper.prepend,
      curValue.substring(0, prepLen) !== terminalInputWrapper.prepend
    );
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
        terminalInputWrapper.prepend = "C:\\Users\\eron>";
        terminalInputWrapper.depth = terminalInputWrapper.prepend.length;
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

        registeredObservers.push((x) => {
          if (caret.value && terminalInput.value) {
            caret.value.textContent = terminalInput.value.value.substring(0, x);
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
  methods: {
    updateText() {
      console.log(this);
    },
  },
};
</script>

<style>
::selection {
  color: rgb(100, 100, 100);
  background: rgb(50, 50, 50);
}

textarea {
  outline: none;
  resize: none;
  height: 100%;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

#caret {
  color: transparent;
  white-space: pre;
}

.caret-underscore > #delim {
  animation: blink 1s step-end infinite;
  border-bottom: 4px solid white;
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
