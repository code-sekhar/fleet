import { Component } from '@angular/core';

@Component({
  selector: 'assets-anatomy-specifications',
  templateUrl: './assets-anatomy-specifications.component.html',
  styleUrl: './assets-anatomy-specifications.component.css'
})
export class AssetsAnatomySpecificationsComponent {
  selectedTab: string = 'assets';
data_box = [
  {
    "id":1,
    "img":"./assets/img/1.png",
    "title": "up_arrrow_material",
  },
  {
    "id":2,
    "img":"./assets/img/2.png",
    "title": "up_arrrow_material",
  },
  {
    "id":3,
    "img":"./assets/img/3.png",
    "title": "up_arrrow_material",
  },
  {
    "id":4,
    "img":"./assets/img/4.png",
    "title": "up_arrrow_material",
  },
  {
    "id":5,
    "img":"./assets/img/5.png",
    "title": "up_arrrow_material",
  }
]
  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
