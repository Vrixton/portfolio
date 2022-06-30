import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './utils/header/header.component';
import { LogoComponent } from './utils/logo/logo.component';
import { HomeComponent } from './pages/home/home.component';
import { MobileMenuComponent } from './utils/mobile-menu/mobile-menu.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HeaderAboutComponent } from './utils/header-about/header-about.component';
import { PokemonTeamComponent } from './utils/pokemon-team/pokemon-team.component';
import { LinksComponent } from './utils/links/links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { SkillsComponent } from './utils/skills/skills.component';
import { WorkExperienceComponent } from './utils/work-experience/work-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LogoComponent,
    HomeComponent,
    MobileMenuComponent,
    AboutMeComponent,
    HeaderAboutComponent,
    PokemonTeamComponent,
    LinksComponent,
    SkillsComponent,
    WorkExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
