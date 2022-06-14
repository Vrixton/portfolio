import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Input() menuStatus;
  @Output() closeMenuStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu() {
    this.closeMenuStatus.emit(true);
  }
}
