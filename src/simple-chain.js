const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  str: [],

  getLength() {
    return chainMaker.arr.length;
  },
  addLink(value) {
    this.arr.push(`(${value})`);
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position != "number") {
      this.str = "";
      return new Error("You can't remove incorrect link!");
    }
    if (this.str.length > 0) {
      this.str = this.str.split("~~");
      if (position - 1 < 0 || position > this.str.length) {
        this.str = "";
        return new Error("You can't remove incorrect link!");
      }
      this.str.splice(position - 1, 1);
      this.str = this.str.join("~~");
      return this;
    }
  },
  reverseChain() {
    this.str = this.str.split("~~").reverseChain().join("~~");
    return this;
  },
  finishChain() {
    let result;
    result = this.str;
    this.str = "";
    return result;
  },
};

module.exports = {
  chainMaker,
};
