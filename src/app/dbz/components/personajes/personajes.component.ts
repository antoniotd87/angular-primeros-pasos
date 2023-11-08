import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  @Output()
  onDeleteByID: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [
    { name: "", power: 0 }
  ]

  onDeleteCharacter(ID: string): void {
    // TODO: Emitir el ID del Personaje
    console.log("ID",ID);
    this.onDeleteByID.emit(ID);
  }
}
