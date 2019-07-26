import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { IQuestion } from './IQuestion';
import { environment } from 'src/environments/environment';
import { IQuestionAnswer } from './IQuestionAnswer';
import { ITestResult } from './ITestResult';
import { ITestAnswer } from './ITestAnswer';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(`${environment.apiUrl}/questions`).pipe(
      tap((questions) => {
        console.log(JSON.stringify(questions));
      }),
      catchError(this.handleError)
    );
  }

  postQuestionsAnswers(testAnswer: ITestAnswer): Observable<ITestResult> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ITestResult>(`${environment.apiUrl}/users/answers`, testAnswer, { headers })
      .pipe(
        tap(result => console.log('result: ' + JSON.stringify(result))),
        catchError(this.handleError)
      );
  }
  handleError(err) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred ${err.error.message}`;
    } else {
      errorMessage = `Server returned code " ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
