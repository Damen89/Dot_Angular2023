import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class MaterialAngModule { }
