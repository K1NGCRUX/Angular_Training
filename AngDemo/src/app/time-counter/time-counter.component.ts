import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './time-counter.component.html',
  styleUrl: './time-counter.component.css',
})
export class TimeCounterComponent implements OnInit, OnDestroy{

  counter: number = 0;
  IntervalID : any;

  ngOnInit() {
    this.IntervalID = setInterval(() => {
      this.counter++;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.IntervalID);
    console.log('The timer has been destroyed');
  }
}
