import {Component, OnInit} from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result = '';
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.result = this.testService.testResult;
    this.testService.testResult = '';
  }
}
