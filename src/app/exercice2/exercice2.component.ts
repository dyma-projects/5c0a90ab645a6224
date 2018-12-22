import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {

  @ViewChild('inputText') htmlElement;

  valeur: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  onChange() {
    this.valeur = this.htmlElement.nativeElement.value;
  }

}
