import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { CoursesComponent } from './courses/courses.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'', redirectTo: '/accueil', pathMatch: 'full' },
  {path:'accueil', component: AccueilComponent},
  {path:'apropos', component: AproposComponent},
  {path:'courses', component: CoursesComponent},
  {path:'evenement', component: EvenementComponent},
  {path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
