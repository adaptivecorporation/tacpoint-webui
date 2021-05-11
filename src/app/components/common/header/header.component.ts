import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('navBar') navBar: ElementRef;
@ViewChild('navBurger') navBurger: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(){
    this.navBar.nativeElement.classList.toggle('is-active');
    this.navBurger.nativeElement.classList.toggle('is-active');
  }

}
