import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  radius: number = 100;
  color: string = '';

  menuCards = [
    {
      label: 'Button',
      disabled: false,
      link: 'buttons',
    },
    {
      label: 'Button-Toggle',
      disabled: true,
      link: 'button-toggle',
    }
  ];
}
