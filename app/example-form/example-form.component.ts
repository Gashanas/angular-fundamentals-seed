import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/form.model';

@Component({
  selector: 'app-example-form',
  templateUrl: 'example-form.component.html',
  styleUrls: ['example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  exampleForm: FormGroup;
  formModel: User;

  constructor(
      private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.exampleForm = this.fb.group({
      'firstName': ['', [Validators.required, Validators.minLength(3)]],
      'lastName': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', Validators.required]
    })
  }

  submitForm() {
    console.log(this.exampleForm.value);
    console.log(this.exampleForm.get('firstName').value);
    console.log(this.exampleForm.value);
    this.formModel = new User(this.exampleForm.value);
    console.log(this.formModel);

  }

}
