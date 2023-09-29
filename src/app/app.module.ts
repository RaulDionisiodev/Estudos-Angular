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
  imports: [ // módulos do angular
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
