import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Test01Component } from './test/test01/test01.component';
import { Test02Component } from './test/test02/test02.component';
import { Test03Component } from './test/test03/test03.component';
import { RouterModule, } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavService } from './services/test.service';
import { NewtestComponent } from './newtest/newtest.component';
import { New1Component } from './newtest/new1/new1.component';
import { New2Component } from './newtest/new2/new2.component';
import { New3Component } from './newtest/new3/new3.component';
import { New4Component } from './newtest/new4/new4.component';
import { New5Component } from './newtest/new5/new5.component';
import { ErrComponent } from './newtest/err/err.component';

@NgModule({
  declarations: [
    AppComponent,
    Test01Component,
    Test02Component,
    Test03Component,
    NewtestComponent,
    New1Component,
    New2Component,
    New3Component,
    New4Component,
    New5Component,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
