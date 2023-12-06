import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArtworkComponent } from './Artworks Component/artwork.component';
import { CounterComponent } from './Counter Componenet/counter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomPipePipe } from './Pipes/custom-pipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDirective } from './Directives/custom.directive';
import { ReactiveFormComponent } from './Reactive-form/reactive-form.component';

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
    FormsModule,
    CustomDirective,
    ReactiveFormsModule,
    ReactiveFormComponent
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
  public showPreDefined: boolean = false;
  public choice: number | string = 0;
  public colorChanged: boolean = false;
  @ViewChild('btnCounter') btnCounter?: ElementRef;

  title = 'AngDemo';
  inputValue: number = 0;
  Value: string | number = 0;
  
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
  showPipeDefined() {
    this.showPreDefined = !this.showPreDefined;
  }
  submitChoice() {
    console.log(this.inputValue);
    console.log(typeof this.inputValue);
  }
  changeColor() {
    this.colorChanged = !this.colorChanged;
  }
}
