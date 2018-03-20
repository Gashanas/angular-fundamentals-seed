import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Service } from './service';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        ExampleFormComponent
    ],
    bootstrap: [
        AppComponent,
        ExampleFormComponent
    ],
    providers: [
        Service
    ]
})
export class AppModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
//
// import { AppComponent } from './app.component';
//
// @NgModule({
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [
//     AppComponent
//   ],
//   declarations: [
//     AppComponent
//   ]
// })
// export class AppModule {}
