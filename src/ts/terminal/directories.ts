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

// Experience file
const experience: File = {
  name: "experience",
  actions: [],
};

// Quibbit file
const quibbit: File = {
  name: "quibbit",
  actions: [],
};

// Streamline CFD file
const streamline: File = {
  name: "streamline",
  actions: [],
};

// 2D/3D Physics Engine file
const physics: File = {
  name: "physics",
  actions: [],
};

// 2D/3D Fluid Dynamics simulation file
const fluids: File = {
  name: "fluids",
  actions: [],
};

// Projects folder
const projects: Folder = {
  name: "Projects",
  children: new Map<string, Item>([
    ["streamline", streamline as Item],
    ["quibbit", quibbit as Item],
    ["physics", physics as Item],
    ["fluids", fluids as Item],
  ]),
};

export const Directories: Folder = {
  name: "root",
  children: new Map([
    ["about", about as Item],
    ["experience", experience as Item],
    ["projects", projects as Item],
  ]),
};

export const PageIndices: { [key: string]: number } = {
  about: 0,
  experience: 1,
  streamline: 2,
  quibbit: 3,
  physics: 4,
  fluids: 5,
};
