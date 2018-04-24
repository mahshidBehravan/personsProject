import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonContainerComponent } from './persons/containers/person-container.component';

const routes: Routes = [
  {path: '', component: PersonContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
