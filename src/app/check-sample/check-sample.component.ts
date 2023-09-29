import {
  Component, OnInit,
  DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  quantidade: number = 0

  adicionar() {
    this.quantidade += 1
  }

  decrementar() {
    this.quantidade -= 1
  }

  constructor() {
    console.log("constructor")
  }
 
  ngAfterContentInit(): void {
    //Quando o primeiro conteúdo é iniciado
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    //após alguma alteração ele verifica o conteúdo
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    //depois da iniacilização da view
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    // após alguma alteração verifica a view
    console.log("ngAfterViewChecked");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  //checked -> content -> view

  ngOnDestroy(): void {
    console.log("Component Died");
  }

}
