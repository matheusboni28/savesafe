import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router) { }

  list: any[] = [
    {
      'name': 'Faculdade 2020',
      'date': 'Criado em: 07-02-2020',
      'desc': 'Trabalhos da faculdade de 2020'
    },
    {
      'name': 'TCC',
      'date': 'Criado em: 11-06-2020',
      'desc': 'Arquivos do tcc'
    },
    {
      'name': 'Casamento',
      'date': 'Criado em: 11-09-2019',
      'desc': 'Fotos e vídeos do casamento'
    },
    {
      'name': 'Férias Arraial do Cabo 2017',
      'date': 'Criado em: 27-08-2017',
      'desc': 'Fotos férias região dos lagos'
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

  logOut() {
    this.router.navigate(['/'])
  }

  files() {
    document.getElementById("menu").click();
  }

  profile() {
    this.router.navigate(['/profile'])
  }

  upload() {
    this.router.navigate(['/upload'])
  }

  loadFiles() {
    this.router.navigate(['/files'])
  }


}
