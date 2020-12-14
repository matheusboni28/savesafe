import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {

  constructor(private router: Router) { }

  list: any[] = [
    {
      'name': 'AP3_BI.pdf',
      'date': 'Enviado em: 04-11-2020',
      'desc': 'AP3 BI'
    },
    {
      'name': 'AP1_REDES.pdf',
      'date': 'Enviado em: 25-03-2020',
      'desc': 'AP1 redes de computadores'
    }
  ]

  showList : any[] = [];

  ngOnInit() {
    this.showList = this.list
  }

  teste(value: any) {
    if(value && value != "" && value != undefined) {
      this.showList = this.list.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    } else {
      this.showList = this.list
    }
  }

  backMenu() {
    this.router.navigate(['/principal'])
  }

}
