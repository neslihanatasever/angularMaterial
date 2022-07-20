import {Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private formBuilder: FormBuilder) {}

  profileForm = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    address: [''],
    dob: [''],
    gender: ['']
  });
  saveForm() {
    console.log('Form data is ', this.profileForm.value);
  }
}
