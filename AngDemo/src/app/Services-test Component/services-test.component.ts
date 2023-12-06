import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServiceService } from '../Services/my-service.service';

@Component({
  selector: 'app-services-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-test.component.html',
  styleUrl: './services-test.component.css'
})
export class ServicesTestComponent {

  ServiceData1 : string[] = []
  ServiceData2 : string[] = []
  ServiceData3 : string[] = []

  showdata1 : boolean = false;
  showdata2 : boolean = false;
  showdata3 : boolean = false;

  constructor(public myService : MyServiceService) {}

  getInfo1(){
    this.ServiceData1 = this.myService.getData1()
    this.showdata1 = !this.showdata1;
  }

  getInfo2(){
    this.ServiceData2 = this.myService.getData2()
    this.showdata2 = !this.showdata2;
  }

  getInfo3(){
    this.ServiceData3 = this.myService.getData3()
    this.showdata3 = !this.showdata3;
  }
}
