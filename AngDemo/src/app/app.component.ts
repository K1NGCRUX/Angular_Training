import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArtworkComponent } from './Artworks/artwork.component';
import { CounterComponent } from './counter/counter.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from './custom-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ArtworkComponent,
    CounterComponent,
    HttpClientModule,
    RouterLink,
    CustomPipePipe,
  ],
})
export class AppComponent {
  public count: number = 0;
  public test: boolean = true;
  public Details: { name: string; age: number } = { name: 'Rohit', age: 22 };
  public AfterCheck: string = 'Hi this is a test';
  public ChildString?: string;
  public amount: number = 2;
  public date: number = Date.now();
  public Before: string = 'HI THIS IS A TEST FOR LOWER CASE';
  public befDec: number = 12345.6789;
  public perce: number = 0.04;
  public myArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public showPipe: boolean = false;
  public isClicked: boolean = false;
  @ViewChild('btnCounter') btnCounter?: ElementRef;

  title = 'AngDemo';

  public counter(): void {
    this.count++;
    this.test = !this.test;
    this.Details.age = this.count;
    this.AfterCheck = this.AfterCheck + this.count;
  }

  public childComponent($event: any): void {
    console.log($event);
    this.ChildString = $event;
  }

  showPipeExample() {
    this.showPipe = !this.showPipe;
  }

  TimeStart() {
    this.isClicked = true;
  }
  ArtworksClicked() {
    this.isClicked = false;
  }
}
