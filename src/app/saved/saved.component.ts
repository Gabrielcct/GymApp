import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css'],
})
export class SavedComponent {
  constructor(private router: Router) {}

  navigateTo(): void {
    this.router.navigate(['/workout']);
  }
}
