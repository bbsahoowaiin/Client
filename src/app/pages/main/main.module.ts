import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { MatModule } from 'src/app/appMaterialModule/mat.module';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    ButtonComponent,
    ButtonToggleComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
