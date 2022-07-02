import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/config/constants';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = Constants.PROJECTS;
  constructor() { }

  ngOnInit(): void {
  }

}
