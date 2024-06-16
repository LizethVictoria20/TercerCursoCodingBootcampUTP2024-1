import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchComponent,
  ],

})
export class GifsModule { }
