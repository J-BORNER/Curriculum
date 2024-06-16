import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'; // Añadir esto si estás usando decoradores
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { SkillsComponent } from './skills/skills.component';
import { StudiesComponent } from './studies/studies.component';
import { ExperienceComponent } from './experience/experience.component';

// Aquí se definen las rutas de tu aplicación
const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'datos-personales', component: PersonalDataComponent },
  { path: 'habilidades', component: SkillsComponent },
  { path: 'estudios', component: StudiesComponent },
  { path: 'experiencia-laboral', component: ExperienceComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true})

// Exportar el módulo de rutas configurado
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routes = [
  {
    path: '/',
    component: HomeComponent,
  },

];


