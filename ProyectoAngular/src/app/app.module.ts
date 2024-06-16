import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./component/sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';

import { APP_ROUTING } from "./app.routes";

import { DatosService } from "../service/datos.service";


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    PersonalDataComponent,
    SkillsComponent,
    StudiesComponent,
    ExperienceComponent,
  ],

  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],

  providers: [
    DatosService
   ],

  bootstrap: [AppComponent]
})
export class AppModule { }



