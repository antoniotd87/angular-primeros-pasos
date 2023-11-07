import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public heroNames: string[] = [
    "Spiderman",
    "Ironman",
    "Dr Strange",
    "Hulk",
  ]

  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
