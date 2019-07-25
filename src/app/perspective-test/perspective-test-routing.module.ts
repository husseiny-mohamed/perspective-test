import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'perspective-test', component: TestComponent},
      {path: 'result', component: ResultComponent},
    ]),
  ]
})
export class PerspectiveTestRoutingModule { }
