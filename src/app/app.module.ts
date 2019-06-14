import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { ConfimacaoIndividualComponent } from './confimacao-individual/confimacao-individual.component';
import { ConfimacaoCasalComponent } from './confimacao-casal/confimacao-casal.component';
import { ConfimacaoFamiliaComponent } from './confimacao-familia/confimacao-familia.component';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, CollapseModule, WavesModule } from 'angular-bootstrap-md';
import { LocalizacaoComponent } from './localizacao/localizacao.component';

const rotas: Routes = [
  {path:'confirmacao-individual', component: ConfimacaoIndividualComponent},
  {path:'confirmacao-casal', component: ConfimacaoCasalComponent},
  {path:'confirmacao-familia', component: ConfimacaoFamiliaComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ConfimacaoIndividualComponent,
    ConfimacaoCasalComponent,
    ConfimacaoFamiliaComponent,
    LocalizacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rotas, {preloadingStrategy: PreloadAllModules}),
    NgbModule.forRoot(),
    HttpClientModule,
    MDBBootstrapModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXqhISErKzM7zNrYa8bjO0JHDvwdxfzhM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
