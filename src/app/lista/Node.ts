import { personajesTransformations } from "../interfaces/transformations";

export class Node {
    transformation: personajesTransformations;
    next: Node | null = null;
    prev: Node | null = null;
  
    constructor(transformation: personajesTransformations) {
      this.transformation = transformation;
    }
  }
  