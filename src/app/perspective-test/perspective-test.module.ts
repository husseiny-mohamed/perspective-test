import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { EmailComponent } from './email/email.component';



@NgModule({
  declarations: [QuestionComponent, QuestionListComponent, EmailComponent],
  imports: [
    CommonModule
  ]
})
export class PerspectiveTestModule { }
