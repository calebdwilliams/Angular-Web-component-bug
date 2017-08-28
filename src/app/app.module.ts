import '../w3c-components';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutedExampleComponent } from './routed-example/routed-example.component';

const appRoutes: Routes = [
  { path: '**', component: RoutedExampleComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RoutedExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
