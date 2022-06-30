import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }
  workExperience: Array<any> = [
    {
      name: 'TSSERAPP',
      role: 'Front End Developer',
      year: '2016 - 2018',
      color: 'bg-primary'
    },
    {
      name: 'GLIOCCHI',
      role: 'Front End Developer',
      year: '2017',
      color: 'bg-secundary'
    },
    {
      name: '24K Development',
      role: 'Front End Developer',
      year: '2018',
      color: 'bg-third'
    },
    {
      name: 'S9 Consulting',
      role: 'Front End Developer',
      year: '2018 - 2019',
      color: 'bg-primary'
    },
    {
      name: 'Liftit',
      role: 'Front End Developer',
      year: '2019 - 2020',
      color: 'bg-secundary'
    },
    {
      name: 'TitaMedia',
      role: 'Front End Developer',
      year: '2020',
      color: 'bg-third'
    },
    {
      name: 'Blacksip',
      role: 'Front End Developer',
      year: '2020 -2021',
      color: 'bg-primary'
    },
    {
      name: 'Farmatodo',
      role: 'Front End Developer',
      year: '2021 -2022',
      color: 'bg-secundary'
    }
  ]
  ngOnInit(): void {
  }

}
