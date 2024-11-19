import { Node } from "./Node";
import { personajesTransformations } from "../interfaces/transformations";
export class DoublyLinkedList {

    head: Node | null = null;
    tail: Node | null = null;
  
    append(transformation: personajesTransformations): void {
      const newNode = new Node(transformation);
  
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
      }
    }
  
   
    printList(): void {
      let current = this.head;
      while (current) {
        console.log(current.transformation);
        current = current.next;
      }
    }
  }
  