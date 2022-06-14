import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuStatus: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  menuMobile(status) {
    console.log("status es -> ", status);
    if(status) {
        console.log("se abre");
        this.menuStatus = true;
    } else {
      console.log("se cierra");
      this.menuStatus = false;
    }
  }
}
