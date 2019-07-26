import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';
import {IQuestion} from '../IQuestion';
import {ITestResult} from '../ITestResult';
import {IQuestionAnswer} from '../IQuestionAnswer';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  choicesArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  errorMessage = '';
  questions: IQuestion[] = [];
  result: ITestResult;
  email: '';
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.getQuestions().subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => (this.errorMessage = error as any)
    );
  }

  submit() {
    const answers = this.questions.map((question) => {
      return {questionId: question._id, answer: question.answer} as IQuestionAnswer;
    });

    this.testService.postQuestionsAnswers({email: this.email, answers}).subscribe(
      (result) => {
        this.result = result;
      },
      (error) => (this.errorMessage = error as any)
    );
  }
}
