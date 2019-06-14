import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasamentoService {
  confirmar = false;
  constructor(private _http: HttpClient) { }

  sendEmail(body) {
    return this._http.post(`https://backend-casamento.herokuapp.com/formulario`, body);
  }

  trocarConfirmar(){
    this.confirmar = true;
  }
}
