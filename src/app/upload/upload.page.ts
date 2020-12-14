import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backMenu() {
    this.router.navigate(['/principal'])
  }

}
