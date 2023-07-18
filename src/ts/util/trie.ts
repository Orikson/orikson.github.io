export class TrieNode {
  key: string;
  parent: TrieNode | null = null;
  children: { [key: string]: TrieNode } = {};
  isWord = false;

  constructor(key: string) {
    this.key = key;
  }
}

export class Trie {
  root: TrieNode = new TrieNode("");

  insert(word: string) {
    let node = this.root;

    for (const c of word) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode(c);
        node.children[c].parent = node;
      }

      node = node.children[c];
    }

    node.isWord = true;
  }

  contains(word: string) {
    let node = this.root;

    for (const c of word) {
      if (!node.children[c]) {
        return false;
      }
      node = node.children[c];
    }

    return node.isWord;
  }

  findAllWithPrefix(prefix: string): string[] {
    let node = this.root;

    for (const c of prefix) {
      if (!node.children[c]) {
        return [];
      }
      node = node.children[c];
    }

    return this.findAllWords(node, prefix);
  }

  private findAllWords(node: TrieNode, pref: string): string[] {
    const ret = [];
    if (node.isWord) {
      ret.push(pref);
    }
    for (const child in node.children) {
      ret.push(...this.findAllWords(node.children[child], pref + child));
    }
    return ret;
  }
}
