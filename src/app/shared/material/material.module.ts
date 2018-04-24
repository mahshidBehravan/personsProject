import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatTabsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTableModule
        
        } from '@angular/material';

import {MatStepperModule} from '@angular/material/stepper';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule ,
    MatInputModule,
    MatSelectModule,
    CdkTableModule,
    OverlayModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule ,
    MatInputModule,
    MatSelectModule,
    CdkTableModule,
    OverlayModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
      ],
  declarations: []
})
export class MaterialModule { }
