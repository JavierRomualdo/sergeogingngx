import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/clasess/servicio/servicio';
import { Ls } from '../../ls/ls';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  public servicios: Servicio[] = Ls.servicios;
  
  constructor() { }

  ngOnInit(): void {
  }

}
