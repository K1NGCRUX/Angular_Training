import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent implements OnInit, OnDestroy {
  formTData: boolean = false;
  ageT: number = 0;
  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];
  defaultGender = 'Male';
  private apiCallSubscription: Subscription | undefined;
  UserTDetails: any;
  detailsTView: boolean = false;

  constructor(private http: HttpClient) {}

  // @ViewChild('myForm') form ?: NgForm;

  showTDetails() {
    this.detailsTView = !this.detailsTView;
  }

  ngOnInit() {
    this.http
      .get(
        'https://my-angular-project-502c9-default-rtdb.asia-southeast1.firebasedatabase.app/Templatedetails.json'
      )
      .subscribe((response) => {
        this.UserTDetails = response;
        console.log(this.UserTDetails);
      });
  }

  get dataKeys(): string[] {
    return Object.keys(this.UserTDetails);
  }

  showTForm() {
    this.formTData = !this.formTData;
  }

  onSubmitT(form: NgForm) {
    console.log(form.value);
    try {
      this.apiCallSubscription = this.http
        .post(
          'https://my-angular-project-502c9-default-rtdb.asia-southeast1.firebasedatabase.app/Templatedetails.json',
          form.value
        )
        .subscribe((response) => {
          console.log(response);
          alert('The data was successfully pushed');
        });
    } catch {
      alert('There was an error with the database, please try again');
    }
  }

  ngOnDestroy(): void {
    if (this.apiCallSubscription) this.apiCallSubscription.unsubscribe();
    console.log('The Template form has been destroyed');
  }
}
