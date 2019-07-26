import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';
import {IQuestion} from '../IQuestion';
import {ITestResult} from '../ITestResult';
import {IQuestionAnswer} from '../IQuestionAnswer';
import {Router} from '@angular/router';
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
  email = '';
  loading = false;
  submitted = false;
  constructor(private testService: TestService, private router: Router) {}

  ngOnInit() {
    this.testService.getQuestions().subscribe(
      (questions) => {
        this.questions = questions;
      },
      (error) => (this.errorMessage = error as any)
    );
  }

  submit(testForm) {
    this.submitted = true;
    
    if (!testForm.valid) {
      return;
    }

    const answers = this.questions.map((question) => {
      return {questionId: question._id, answer: question.answer} as IQuestionAnswer;
    });

    this.loading = true;
    this.testService.postQuestionsAnswers({email: this.email, answers}).subscribe(
      (data) => {
        this.result = data;
        this.loading = false;
        this.testService.testResult = data.result;
        this.router.navigate(['/result']);
      },
      (error) => {
        this.errorMessage = error as any;
        this.loading = false;
      }
    );
  }
}
