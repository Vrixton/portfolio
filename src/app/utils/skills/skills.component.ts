import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills: Array<any> = [
    {
      name: 'AngularJs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/AngularJS_logo.svg/695px-AngularJS_logo.svg.png',
      color: 'bg-primary'
    },
    {
      name: 'Angular +2',
      url: 'https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png',
      color: 'bg-secundary'
    },
    {
      name: 'React',
      url: '',
      color: 'bg-third'
    },
    {
      name: 'Ionic',
      url: '',
      color: 'bg-primary'
    },
    {
      name: 'Javascript',
      url: '',
      color: 'bg-secundary'
    },
    {
      name: 'Sass',
      url: '',
      color: 'bg-third'
    },
    {
      name: 'Jquery',
      url: '',
      color: 'bg-primary'
    },
    {
      name: 'Git',
      url: '',
      color: 'bg-secundary'
    },
    {
      name: 'Phaser',
      url: '',
      color: 'bg-third'
    },
    {
      name: 'SVG.io',
      url: '',
      color: 'bg-primary'
    },
    {
      name: 'Form.io',
      url: '',
      color: 'bg-secundary'
    },
    {
      name: '',
      url: '',
      color: 'bg-third'
    },
    {
      name: '',
      url: '',
      color: 'bg-primary'
    },
    {
      name: '',
      url: '',
      color: 'bg-secundary'
    }
  ]
  ngOnInit(): void {
  }

}
