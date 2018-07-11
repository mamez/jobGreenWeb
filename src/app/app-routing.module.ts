import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { PrPublicoComponent } from './pages/pr-publico/pr-publico.component';
import { PromicionComponent } from './pages/promicion/promicion.component';
import { TipoReciclajeComponent } from './pages/tipo-reciclaje/tipo-reciclaje.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pages', component: HomeComponent,
          children: [
            { path: 'tips', component: TipsComponent},
            { path: 'pr-publico', component: PrPublicoComponent},
            { path: 'promociones', component: PromicionComponent},
            { path: 'tipo-reciclaje', component: TipoReciclajeComponent}
          ] },
  { path: '**', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
