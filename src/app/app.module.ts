import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { EncountersComponent } from './encounters/encounters.component';
import { ReportComponent } from './report/report.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'encounters', component: EncountersComponent },
  { path: 'report', component: ReportComponent },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    EncountersComponent,
    ReportComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
