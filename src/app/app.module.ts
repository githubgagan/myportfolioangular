import { TagsService } from './service/tags.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TypingComponent } from './typing/typing.component';
import { CrossIconComponent } from './ui/cross-icon/cross-icon.component';
import { BackIconComponent } from './ui/back-icon/back-icon.component';
import { KeySkillBtnsComponent } from './key-skill-btns/key-skill-btns.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileCardComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    DpLogoComponent,
    NavigatorComponent,
    LandingPageComponent,
    TypingComponent,
    CrossIconComponent,
    BackIconComponent,
    KeySkillBtnsComponent,
    ProjectsComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    TagsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
