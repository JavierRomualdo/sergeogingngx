import { Component, OnInit } from '@angular/core';
import { Horario } from 'src/app/clasess/horario/horario';
import { Ls } from '../../ls/ls';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public horarios: Horario[] = Ls.horarios;
  
  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje() {
    console.log('MENSAJE ENVIAR')
  }

}
