import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  redirectToSignIn() {
    this.router.navigate(['/cadastro'])
  }

  redirectToMain() {
    this.router.navigate(['/principal'])
  }

}
