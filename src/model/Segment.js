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
}
