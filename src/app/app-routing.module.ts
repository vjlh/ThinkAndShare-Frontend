import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistaPrincipalComponent }      from './vista-principal/vista-principal.component';
import { IdeaComponent }      from './idea/idea.component';
import { VistaAdministradorComponent} from "./vista-administrador/vista-administrador.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'idea/:id', component: IdeaComponent },
  { path: 'home', component: VistaPrincipalComponent },
  { path: 'homeAdmin', component: VistaAdministradorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
