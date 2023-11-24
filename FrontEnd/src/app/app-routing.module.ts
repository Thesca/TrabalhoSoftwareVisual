import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OficinaComponent } from './components/oficina/oficina.component';
import { MensalistaComponent } from './components/mensalista/mensalista.component';

const routes: Routes = [
  { path: 'oficina', component:OficinaComponent },
  { path: 'mensalista', component:MensalistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

