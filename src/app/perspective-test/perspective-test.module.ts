import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';
import { PerspectiveTestRoutingModule } from './perspective-test-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ResultComponent, TestComponent],
  imports: [
    CommonModule,
    FormsModule,
    PerspectiveTestRoutingModule
  ]
})
export class PerspectiveTestModule { }
