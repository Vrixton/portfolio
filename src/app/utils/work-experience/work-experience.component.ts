import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/config/constants';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }
  workExperience = Constants.WORK_EXPERIENCE; 
  ngOnInit(): void {
  }

}
