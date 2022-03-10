import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCardMTGComponent } from './list-cards/list-cards.component';
import { FormulaireComponent } from './partage/formulaire/formulaire.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component: HomeComponent},
  {path:'listCards', component: ListCardMTGComponent},
  {path:'ajouterCards', component: FormulaireComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
