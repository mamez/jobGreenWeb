import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { PrPublicoComponent } from './pages/pr-publico/pr-publico.component';
import { PromicionComponent } from './pages/promicion/promicion.component';
import { TipoReciclajeComponent } from './pages/tipo-reciclaje/tipo-reciclaje.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
import { StorageService } from './services/storage.service';
import { PruebaService } from './services/prueba.service';
import { GmapsComponent } from './componentes/gmaps/gmaps.component';
import { DataTableComponent } from './componentes/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TipsComponent,
    PrPublicoComponent,
    PromicionComponent,
    TipoReciclajeComponent,
    GmapsComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [
    StorageService,
    PruebaService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
