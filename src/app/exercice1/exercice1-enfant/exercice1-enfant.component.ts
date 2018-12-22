import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() compteur: number;
  @Output() increment: EventEmitter<number>;

  constructor() {
    this.increment = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  onClick(value: number) {
    this.increment.emit(value)
  }

}
