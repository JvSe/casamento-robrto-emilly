import { Component, OnInit } from '@angular/core';
import { CasamentoService } from '../casamento.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-confimacao-individual',
  templateUrl: './confimacao-individual.component.html',
  styleUrls: ['./confimacao-individual.component.css']
})
export class ConfimacaoIndividualComponent implements OnInit {

  nome = null;
  email = null;
  faixa_etaria = ['Adulto','Adolescente','Criança']
  grupo_pessoa = ['Família','Faculdade','Igreja','Trabalho']

  constructor(public _email: CasamentoService) { }

  criarConfirmacao (forms) {
    const confirmacao = {
      nomes: this.nome,
      email: this.email
    }

    this.enviarEmail(confirmacao) 
  }

  enviarEmail(valor) {
    this._email.trocarConfirmar();
    this._email.sendEmail(valor).subscribe(() => {
      swal("Confirmação Efetuada!", "Parabéns! Sua confirmação foi efetuada com sucesso. Será encaminhado um e-mail com o local do casamento!", 'success');
    });
  }
  
  ngOnInit() {
  }
  

}
