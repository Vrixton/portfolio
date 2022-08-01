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
    if(status) {
        this.menuStatus = true;
    } else {
      this.menuStatus = false;
    }
  }
  contactMe() {
    window.open("https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=victor.villavicencio.10@gmail.com");
  }
}
