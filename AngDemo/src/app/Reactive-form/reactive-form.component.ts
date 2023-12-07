import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { noNameSpaceValidator } from '../Custom Validators/NameSpace';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  age: number = 0;
  UserDetails: any;
  formData: boolean = false;
  detailsView: boolean = false;
  private apiCallSubscription: Subscription | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(
        'https://my-angular-project-502c9-default-rtdb.asia-southeast1.firebasedatabase.app/details.json'
      )
      .subscribe((response) => {
        this.UserDetails = response;
        console.log(this.UserDetails);
      });
  }

  get dataKeys(): string[] {
    return Object.keys(this.UserDetails);
  }

  showForm() {
    this.formData = !this.formData;
  }

  showDetails() {
    this.detailsView = !this.detailsView;
  }

  reactiveForm: FormGroup = new FormGroup({
    fname: new FormControl(null, [Validators.required, noNameSpaceValidator]), //You can enter default value inside the brackets
    lname: new FormControl(null, [Validators.required, noNameSpaceValidator]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(18),
      Validators.max(55),
    ]),
    gender: new FormControl(null, Validators.required),
    branch: new FormControl('chennai', Validators.required),
  });

  onSubmit(Details: any) {
    Details = JSON.stringify(Details);

    try {
      this.apiCallSubscription = this.http
        .post(
          'https://my-angular-project-502c9-default-rtdb.asia-southeast1.firebasedatabase.app/details.json',
          Details
        )
        .subscribe((response) => {
          console.log(response);
          this.reactiveForm.reset();
          alert('The data was successfully pushed');
        });
    } catch {
      alert('There was an error with the database, please try again');
    }
  }

  ngOnDestroy() {
    if (this.apiCallSubscription) this.apiCallSubscription.unsubscribe();
    console.log('The Reactive form is destroyed');
  }
}
