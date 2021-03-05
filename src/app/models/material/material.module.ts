import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatCardModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    Material
  ]
})
export class MaterialModule { }
