import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor() {
    console.log("construtor")
  }

  ngOnChanges(): void {
    // acontece quando há alguma alteração de dados no componente
    console.log("onchange")
  }

  ngOnInit(): void {

    // acontece quando inicia o componente
    console.log("onInit")
  }

}
