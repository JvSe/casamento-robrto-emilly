import { Component, OnInit } from '@angular/core';
import { CasamentoService } from '../casamento.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-confimacao-familia',
  templateUrl: './confimacao-familia.component.html',
  styleUrls: ['./confimacao-familia.component.css']
})
export class ConfimacaoFamiliaComponent implements OnInit {
  qtd = 0;
  nome = [];
  nome1 = null;
  nome2 = null;
  nome3 = null;
  nome4 = null;
  nome5 = null;
  nome6 = null;
  email = null;
  faixa_etaria = ['Adulto','Adolescente','Criança']
  grupo_pessoa = ['Família','Faculdade','Igreja','Trabalho']
  
  constructor(public _email: CasamentoService) { }

  criarConfirmacao (forms) {
    if (this.qtd === 3){
      this.nome.push(this.nome1,this.nome2,this.nome3);
    }
    else if (this.qtd === 4){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4);
    }
    else if (this.qtd === 5){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4,this.nome5);
    }
    else if (this.qtd === 6){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4,this.nome5,this.nome6);
    }
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

  mudarQTD(num){
    this.qtd = num;
  }

  adicionarLista(){
    if (this.qtd === 3){
      this.nome.push(this.nome1,this.nome2,this.nome3);
    }
    else if (this.qtd === 4){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4);
    }
    else if (this.qtd === 5){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4,this.nome5);
    }
    else if (this.qtd === 6){
      this.nome.push(this.nome1,this.nome2,this.nome3,this.nome4,this.nome5,this.nome6);
    }
  }
} 
