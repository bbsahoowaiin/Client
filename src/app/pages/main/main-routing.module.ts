import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'button-toggle',
    component: ButtonToggleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
