import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
                        {path: 'first', component: FirstCompComponent},
                        {path: 'second', component: SecondCompComponent}
                       ];

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
