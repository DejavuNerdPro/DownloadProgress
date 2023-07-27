import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DejavuDownloadComponent } from './dejavu-download/dejavu-download.component';
import { SAVER, getSaver } from '../app/saver.providers';
import { DailyAppointmentComponent } from './daily-appointment/daily-appointment.component';
import { WeeklyAppointmentComponent } from './weekly-appointment/weekly-appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DejavuDownloadComponent,
    DailyAppointmentComponent,
    WeeklyAppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressBarModule,
    HttpClientModule
  ],
  providers: [{provide: SAVER, useFactory: getSaver}],
  bootstrap: [AppComponent]
})
export class AppModule { }
