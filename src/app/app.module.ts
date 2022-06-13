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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCompComponent,
    AboutComponent
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
