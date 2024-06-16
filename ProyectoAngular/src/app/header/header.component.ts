import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'header-COMP',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
inicio: any|string;
datos: any;
personales: any;
habilidades: any|string;

}
