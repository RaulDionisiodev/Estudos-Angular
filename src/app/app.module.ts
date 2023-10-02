import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CheckSampleComponent } from './check-sample/check-sample.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ // componentes, diretivas e pipes
    AppComponent,
    TitleComponent,
    CheckSampleComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [ //Outros módulos do angular ou submódulos da aplicação
    BrowserModule,
    FormsModule
  ],
  exports: [], // Tudo o que eu quero permitir que seja importado em outros módulos
  providers: [], // services que, por exemplo, fazem contato com apis
  bootstrap: [AppComponent]  // define quais são os componentes principais do módulo
})
export class AppModule { }
