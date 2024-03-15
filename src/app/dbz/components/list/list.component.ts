import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  // @Output() onDeleteCharacter: EventEmitter<number> = new EventEmitter;
  @Output() onDeleteCharacter = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  // onDeleteCharacter (index: number): void {
  //   console.log({index});
  // }

  onDelete(id: string): void {
    this.onDeleteCharacter.emit(id);
  }

}
