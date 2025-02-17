import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: false,
  template:`
      <button (click)="navigateTo('parent')">Parent</button>
      <button (click)="navigateTo('products')">Products</button>
  `,
  // templateUrl: './navigation.component.html',
  // styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
