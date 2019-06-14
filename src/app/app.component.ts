import { Component } from '@angular/core';
import { CasamentoService } from './casamento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  verificar_presente = null;
  botaoApertado = false;  

  constructor(public casamento: CasamentoService){ }

  trocarBoo(valor){
    this.botaoApertado = valor;
  }
}
