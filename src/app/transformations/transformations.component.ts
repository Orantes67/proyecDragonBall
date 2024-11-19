
import { Component, OnInit } from '@angular/core';
import { TransformationsService } from '../transformations.service';
import { DoublyLinkedList } from '../lista/ListaDoblementeEnlazada';

@Component({
  selector: 'transformations',
  templateUrl: './transformations.component.html',
  styleUrl: './transformations.component.css'
})
export class TransformationsComponent implements OnInit{
  characters = ['Goku', 'Vegeta', 'Piccolo', 'Freezer', 'Gohan'];
  transformationsList = new Map<string, DoublyLinkedList>();

  constructor(private transformationsService: TransformationsService) {}

  ngOnInit(): void {
    this.loadTransformations();
  }

  loadTransformations(): void {
    this.characters.forEach((character) => {
      this.transformationsService
        .getTransformations(character)
        .subscribe((transformations) => {
          const list = new DoublyLinkedList();

          transformations.forEach((transformation) => {
            list.append(transformation);
          });

          this.transformationsList.set(character, list);

          console.log(`Transformaciones de ${character}:`);
          list.printList(); 
        });
    });
  }
}

