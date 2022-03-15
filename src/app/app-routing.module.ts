import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Componente3Component } from './components/componente3/componente3.component';
import { Componente4Component } from './components/componente4/componente4.component';
import { Componente5Component } from './components/componente5/componente5.component';

const routes: Routes = [
  {path:'', component: Componente1Component, pathMatch: 'full'},
  {path:'c2', component: Componente2Component},
  {path:'c3', component: Componente3Component},
  {path:'c4', component: Componente4Component},
  {path:'c5', component: Componente5Component},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
