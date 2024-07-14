import { Component } from '@angular/core';
import {AppServicesService} from "../../../service/app-services.service";

@Component({
  selector: 'app-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrl: './screen-1.component.css'
})
export class Screen1Component  {

  jsonData: any;
  constructor(private appServicesService: AppServicesService) {}
  ngOnInit() {
    this.appServicesService.getData().subscribe(data => {
      this.jsonData = data;
      console.log(this.jsonData);
    });
  }



  selectedTab: string = 'css';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
