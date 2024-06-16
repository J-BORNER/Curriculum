import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'

})
export class SidebarComponent {
  social_networks = [
    { icon: 'facebook', name: 'Facebook', link: 'https://facebook.com' },
    { icon: 'twitter', name: 'Twitter', link: 'https://twitter.com' },
    { icon: 'google', name: 'Google' , link: 'https://google.com'},
    { icon: 'github', name: 'Github' , link: 'https://github.com/J-BORNER'}
  ];
}

