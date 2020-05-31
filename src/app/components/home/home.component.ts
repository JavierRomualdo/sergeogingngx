import { Component, OnInit } from '@angular/core';
import { Ls } from '../../ls/ls';
import { Colaborador } from 'src/app/clasess/colaborador/colaborador';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public colaboradores: Colaborador[] = Ls.colaborades;
  
  constructor() { }

  ngOnInit(): void {
  }

}
