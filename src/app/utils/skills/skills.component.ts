import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/config/constants';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  skills = Constants.SKILLS; 
  
  ngOnInit(): void {
  }

}
