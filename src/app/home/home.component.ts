import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificado:boolean;
  public casado:boolean;

  constructor() { 
    this.identificado=false;
    this.casado=false;
  }

  ngOnInit(): void {
  }

  setIdentificado(){
    this.identificado=true;
  }
  unsetIdentificado(){
    this.identificado=false;
  }

  setCasarse(){
    this.casado=true;
  }
  setDivorciarse(){
    this.casado=false;
  }

}
