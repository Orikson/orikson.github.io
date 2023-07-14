export interface Item {
  name: string;
}

export interface File extends Item {
  actions: (() => void)[];
}

export interface Folder extends Item {
  children: Map<string, Item>;
}

export function isFile(obj: any): obj is File {
  return "actions" in obj;
}
export function isFolder(obj: any): obj is Folder {
  return "children" in obj;
}

// About file
const about: File = {
  name: "about",
  actions: [],
};

// Projects folder
const projects: Folder = {
  name: "Projects",
  children: new Map<string, Item>(),
};

export const Directories: Folder = {
  name: "root",
  children: new Map([
    ["about", about as Item],
    ["projects", projects as Item],
  ]),
};
