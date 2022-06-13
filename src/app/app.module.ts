import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CharactersViewModule } from './characters-view/characters-view.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { CharactersViewComponent } from './characters-view/characters-view/characters-view.component';
import { AboutComponent } from './about/about.component';
import { AddCharacterComponent } from './conponents/add-character/add-character.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCompComponent,
    AboutComponent,
    AddCharacterComponent,
    CharacterDetailsComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersViewModule,
    RouterModule.forRoot([
      {path: '', component: HomeCompComponent},
      {path: 'characters', component: CharactersViewComponent},
      {path: 'about', component: AboutComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
