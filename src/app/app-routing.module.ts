import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test01Component } from './test/test01/test01.component';
import { Test02Component } from './test/test02/test02.component';
import { Test03Component } from './test/test03/test03.component';
import { New1Component } from './newtest/new1/new1.component';
import { New2Component } from './newtest/new2/new2.component';
import { New3Component } from './newtest/new3/new3.component';
import { New4Component } from './newtest/new4/new4.component';
import { New5Component } from './newtest/new5/new5.component';
import { ErrComponent } from './newtest/err/err.component';

// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'test01'},
//   { path: 'test01', component: Test01Component },
//   { path: 'test02', component: Test02Component },
//   { path: 'test03', component: Test03Component },
//   { path: '**', redirectTo: 'test01'},
// ];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'new1'},
  { path: 'new1', component: New1Component },
  { path: 'new2', component: New2Component },
  { path: 'new3', component: New3Component },
  { path: 'new4', component: New4Component },
  { path: 'new5', component: New5Component },
  { path: '**', component: ErrComponent },
  // { path: '**', redirectTo: 'new1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
