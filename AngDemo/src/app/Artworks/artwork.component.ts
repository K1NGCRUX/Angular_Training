import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'artwork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.css',
})
export class ArtworkComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('btnChange') btnChange!: ElementRef;

  showTable: boolean = false;
  showInfo: boolean = false;
  artworks: any;
  private data?: Subscription;

  constructor(private http: HttpClient) {}
  ngAfterViewInit(): void {
    // console.log('button after click: ' + this?.btnChange);
    // this.btnChange.nativeElement.innerHtml = 'Close data';
  }

  ngOnInit(): void {
    this.data = this.http
      .get('https://api.artic.edu/api/v1/artworks/search')
      .subscribe((response) => {
        console.log(response);
        this.artworks = response;
      });
  }

  viewData(): void {
    this.showTable = !this.showTable;
  }

  viewInfo(): void {
    this.showInfo = !this.showInfo;
  }

  ngOnDestroy(): void {
    if (this.data) this.data.unsubscribe();
    console.log('The api has been closed');
  }
}
