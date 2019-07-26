import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  choicesArray: Array<number> = [1, 2, 3, 4, 5, 6, 7];

  questions = [
    {
      id: '1',
      text: 'You find it takes effort to introduce yourself to other people.',
      answer: 0
    },
    {
      id: '2',
      text: 'You consider yourself more practical than creative.',
      answer: 0
    },
    {
      id: '3',
      text: 'Winning a debate matters less to you than making sure no one gets upset.',
      answer: 0
    },
    {
      id: '4',
      text: 'You get energized going to social events that involve many interactions.',
      answer: 0
    },
    {
      id: '5',
      text: 'You often spend time exploring unrealistic and impractical yet intriguing ideas.',
      answer: 0
    }
  ];

  constructor() {}

  ngOnInit() {}

  save() {}
}
