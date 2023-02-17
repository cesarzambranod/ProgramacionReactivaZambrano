import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {StudentObservableComponent} from './student-observable/student-observable.component';
import {StudentPromiseComponent} from './student-promise/student-promise.component';
import {StudentService} from "./services/student.service";

@NgModule({
  declarations: [
    AppComponent,
    StudentObservableComponent,
    StudentPromiseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
