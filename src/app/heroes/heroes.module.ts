import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListaComponent } from "./lista/lista.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    HeroComponent,
    ListaComponent
  ],
  exports: [
    HeroComponent,
    ListaComponent
  ],
  imports:[BrowserModule]
})
export class HeroesModule { }
