import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// const UpperCaseMenuItems = menuItems.map(
//   (item) => {
//     return item.toUpperCase
//   }
// )
// console.log(UpperCaseMenuItems)
// const itemsCycle = menuItems.forEach((el) => {
//   return el
// })

let changeText;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isUpperCase = true;

  menuItems = ['Home', 'Doctors', 'Services', 'Pages', 'Blogs', 'Contact Us'];

  changeMenutext() {
    this.menuItems = this.menuItems.map((item) =>
      this.isUpperCase ? item.toUpperCase() : item.toLowerCase()
    );
    this.isUpperCase = !this.isUpperCase;
  }

  isShowFaq = true;

  readonly headerItem = 'About';

  // showInOne = itemsCycle;
}
