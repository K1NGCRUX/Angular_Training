import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ArtworkComponent } from './Artworks/artwork.component';
import { CounterComponent } from "./counter/counter.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ArtworkComponent, CounterComponent, HttpClientModule, RouterLink]
})
export class AppComponent {
  public count : number = 0;
  public test : boolean = true;
  public Details : {name : string, age : number} = {name : 'Rohit', age : 22};
  public AfterCheck : string = "Hi this is a test";
  public ChildString?: string;

  @ViewChild('btnCounter') btnCounter? : ElementRef;

  title = 'AngDemo';

  public counter() : void{
    this.count++;
    this.test = !this.test;
    this.Details.age = this.count;
    this.AfterCheck = this.AfterCheck + this.count;
  }

  public childComponent($event : any) : void {
    console.log($event);
    this.ChildString = $event;
  }
}
