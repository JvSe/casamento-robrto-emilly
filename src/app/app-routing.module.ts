import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfimacaoIndividualComponent } from './confimacao-individual/confimacao-individual.component';
import { ConfimacaoCasalComponent } from './confimacao-casal/confimacao-casal.component';
import { ConfimacaoFamiliaComponent } from './confimacao-familia/confimacao-familia.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';


const rotas: Routes = [
  {path:'confirmacao-individual', component: ConfimacaoIndividualComponent},
  {path:'confirmacao-casal', component: ConfimacaoCasalComponent},
  {path:'confirmacao-familia', component: ConfimacaoFamiliaComponent},
  {path:'', component: LocalizacaoComponent, outlet: "local"}
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
