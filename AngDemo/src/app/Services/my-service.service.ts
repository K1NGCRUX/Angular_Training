import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {

  data1: string[] = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
  data2: string[] = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
  data3: string[] = ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit'];

  constructor() {}

  getData1() : string[] {
    return this.data1;
  }

  getData2() : string[] {
    return this.data2;
  }

  getData3() : string[] {
    return this.data3;
  }
}
