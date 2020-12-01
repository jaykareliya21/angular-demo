import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {products,Stores} from '../../services/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {  

  itemList = [];
  storList = [];
  activeOrder: boolean;
  activeItem = true;
  itemsArr = products;
  storeArr = Stores;
  constructor() { }

  ngOnInit() {
    this.getItemList(); 
    this.getstorList();
  }

  getItemList(){
    this.itemList = this.itemsArr;
  }

  getstorList(){
    this.storList = this.storeArr;
  }

  tabEvent(name){
    if(name == 'store'){
      this.activeOrder = true;
      this.activeItem = false;
    }else{
      this.activeOrder = false;
      this.activeItem = true;
    }

  }
}
