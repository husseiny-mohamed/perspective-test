import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { EmailComponent } from './email/email.component';
import { ResultComponent } from './result/result.component';
import { TestComponent } from './test/test.component';
import { PerspectiveTestRoutingModule } from './perspective-test-routing.module';



@NgModule({
  declarations: [QuestionComponent, QuestionListComponent, EmailComponent, ResultComponent, TestComponent],
  imports: [
    CommonModule,
    PerspectiveTestRoutingModule
  ]
})
export class PerspectiveTestModule { }
