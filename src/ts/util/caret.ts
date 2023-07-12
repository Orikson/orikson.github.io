// Given an HTML input field, returns the cursor position
export class InputWrapper {
  public input: HTMLInputElement | HTMLTextAreaElement;
  private _text: string;
  public prepend = "";

  set text(s: string) {
    this._text = s;
    console.log(s);
  }

  get text() {
    return this._text;
  }

  constructor(input: HTMLInputElement | HTMLTextAreaElement) {
    this.input = input;
    this._text = "";
  }

  private focus() {
    if (!document.activeElement || document.activeElement != this.input) {
      this.input.focus();
    }
  }

  get depth() {
    const target = this.input;

    if (target.isContentEditable) {
      this.focus();
      const selection = window.getSelection();
      // Opera 12 check
      if (!selection || !selection.rangeCount) {
        return 0;
      }
      const range1 = selection.getRangeAt(0),
        range2 = range1.cloneRange();
      range2.selectNodeContents(target);
      range2.setEnd(range1.endContainer, range1.endOffset);
      return range2.toString().length;
    }

    return target.selectionStart ?? 0;
  }

  set depth(pos: number) {
    const target = this.input;

    if (pos == -1) {
      pos = target.value.length - 1;
    }

    if (target.isContentEditable) {
      this.focus();
      window.getSelection()!.collapse(target.firstChild, pos);
    } else target.setSelectionRange(pos, pos);
  }
}
