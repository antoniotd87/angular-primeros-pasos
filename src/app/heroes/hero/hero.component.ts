import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public hero: string = "ironman"
  public name: string = "Tony Stark"
  public age: number = 54

  get capitalizeName(): string {
    return this.hero.toUpperCase()
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.hero = "spiderman"
    this.name = "Peter Parker"
  }
  changeAge(): void {
    this.age = 3
  }
  resetForm(): void {
    this.hero = "ironman"
    this.name = "Tony Starks"
    this.age = 45
  }
}
