export class Terminal {
  user: string;

  private currentDirectory: string;

  constructor(user: string) {
    this.user = user;
    this.currentDirectory = "/";
  }

  get header() {
    return `${this.user}:${this.currentDirectory}$ `;
  }

  // Takes the input command as a string, parses it, processes it, and returns the output as a string
  processInput(input: string): string {
    if (input.length == 0) {
      return "";
    }
    return `Received input of length ${input.length}: ${input}\n`;
  }
}
