interface String {
  replaceAt(index: number, replacement: string): string;
}

String.prototype.replaceAt = function (index: number, replacement: string) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};
