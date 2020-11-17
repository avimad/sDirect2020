import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css'],
})
export class TestCompComponent implements OnInit, OnChanges {
  @Input() testInput = 'Test';
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('on changes hits');
  }

  ngOnInit(): void {
    console.log('on Init hits');
  }
}
