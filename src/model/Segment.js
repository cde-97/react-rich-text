import { Node } from "./Node";
import generatorID from "../utils/id-generator";

export class Segment extends Node {
  static create(json) {
    const { id, style, text } = json;
    return new Segment(id, style, text);
  }
  constructor(id = generatorID("segment"), style = {}, text = "") {
    super(id, "segment");
    this.style = { ...style };
    this.text = text;
  }
  split(offset, endOffSet) {
    const before = this.text.slice(0, offset);
    const after = this.text.slice(offset);

    if (endOffSet) {
      const center = this.text.slice(offset, endOffSet);
      const after = this.text.slice(endOffSet);
      this.text = before;
      return [
        this,
        Segment.create({
          text: center,
          style: this.style,
        }),
        Segment.create({
          text: after,
          style: this.style,
        }),
      ];
    }

    this.text = before;
    return [
      this,
      Segment.create({
        text: after,
        style: this.style,
      }),
    ];
  }

  addStyle(name, value) {
    if (!name) {
      return;
    }
    if (!value) {
      delete this.style[name];
    }
    this.style = {
      ...this.style,
      [name]: value,
    };
  }
}
