import { Component, OnInit } from '@angular/core';
import { CasamentoService } from '../casamento.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-confimacao-casal',
  templateUrl: './confimacao-casal.component.html',
  styleUrls: ['./confimacao-casal.component.css']
})
export class ConfimacaoCasalComponent implements OnInit {

  nome = [];
  nome1 = null;
  nome2 = null;
  email = null;
  faixa_etaria = ['Adulto','Adolescente','Criança']
  grupo_pessoa = ['Família','Faculdade','Igreja','Trabalho']

  constructor(public _email: CasamentoService) { }

  criarConfirmacao (forms) {
    this.nome.push(this.nome1, this.nome2);
    const confirmacao = {
      nomes: this.nome,
      email: this.email
    }

    this.enviarEmail(confirmacao)
    this.nome = [] 
  }
  enviarEmail(valor) {
    this._email.sendEmail(valor).subscribe(() => {
      swal("Confirmação Efetuada!", "Parabéns! Sua confirmação foi efetuada com sucesso. Será encaminhado um e-mail com o local do casamento!", 'success');
    });
  }

  ngOnInit() {
  }

  adicionarLista() {
    this.nome.push(this.nome1,this.nome2);
  }

}
