import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-timeline',
  templateUrl: './work-timeline.component.html',
  styleUrls: ['./work-timeline.component.scss'],
})
export class WorkTimelineComponent implements OnInit {
  @Input() employerArr = [];
  constructor() {}

  ngOnInit(): void {}
}
