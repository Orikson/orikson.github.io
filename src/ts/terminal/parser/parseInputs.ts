import { DirectoryType, FileType } from "./commandTypes";

const DirectoryFail = [
  {
    absolutePath: "",
  },
  false,
] as [DirectoryType, boolean];

/**
 * Parses an input to check if it is in the correct directory format,
 *  and reduces the path to an absolute path
 * @param word Input to parse
 * @param curDirectory Current directory, used for relative paths
 * @returns Absolute path to the specified directory
 */
export function parseDirectory(
  word: string,
  curDirectory: string
): [DirectoryType, boolean] {
  if (word.length == 0) {
    return DirectoryFail;
  }

  const isRelative = word[0] != "/";

  if (isRelative) {
    word = curDirectory + "/" + word;
  }
  const directories = word.split(/[\\/]/);

  const stack: string[] = [];
  for (const dir of directories) {
    if (dir == "" || dir == ".") {
      continue;
    } else if (dir == "..") {
      const res = stack.pop();
      if (res == undefined) {
        return DirectoryFail;
      }
    } else {
      stack.push(dir);
    }
  }

  let path = "";
  for (const dir of stack) {
    path += "/" + dir;
  }
  if (path == "") {
    path = "/";
  }

  return [
    {
      absolutePath: path,
    },
    true,
  ];
}

export function parseFile(word: string): FileType {
  return {
    absolutePath: "",
    fileName: "",
  };
}

export function parseNumber(word: string): number {
  return 0;
}

export function parseString(word: string): string {
  return "";
}
