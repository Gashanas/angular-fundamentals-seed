import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/form.model';
import { Service } from '../service';

@Component({
  selector: 'app-example-form',
  templateUrl: 'example-form.component.html',
  styleUrls: ['example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  exampleForm: FormGroup;
  formModel: User;

  constructor(
      private fb: FormBuilder,
      private service: Service
  ) {
    this.service.ping();
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.exampleForm = this.fb.group({
      'firstName': ['', [Validators.required, Validators.minLength(3)]],
      'lastName': ['', [Validators.required, Validators.minLength(3)]],
      'email': ['', Validators.required]
    });
    // this.exampleForm.get('firstName').valueChanges.subscribe(val => {
    //   console.log(val);
    // })
  }

  submitForm() {
    console.log(this.exampleForm.value);
    console.log(this.exampleForm.get('firstName').value);
    console.log(this.exampleForm.get('firstName'));
    this.formModel = new User(this.exampleForm.value);
    console.log(this.formModel);

  }

}
