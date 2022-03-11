import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCreateComponent } from './card-create/card-create.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'cards', component: CardListComponent},
  {path:'cards/:id', component: CardDetailsComponent},
  {path:'create', component: CardCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
