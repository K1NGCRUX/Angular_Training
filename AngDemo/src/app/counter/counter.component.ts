import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletContext } from '@angular/router';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit, OnChanges{

  @Input() data?: number;
  @Input() data2?: boolean;
  @Input() Details?: {name : string, age : number};
  @Input() title?: string;

  @Output() myData = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    // console.log('The component has been initialized.');
  }

  ngAfterContentInit(): void {
    // console.log('After Content init ' + this.title);
  }
  ngAfterContentChecked(): void {
    // console.log('After Content check ' + this.title);
  }

  ngDoCheck(): void {
    // console.log(this.Details);
  }

  public btnClicked() : void{
    this.myData.emit('This is a message from the child component');
  }
}



