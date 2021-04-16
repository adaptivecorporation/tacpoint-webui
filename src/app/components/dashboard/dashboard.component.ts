import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isShowModal: boolean = false;
  task_count: number;
  dashinfo: any = [];
  endpoint_count: number;
  endpoints: any = [];
  constructor(
    private ep: EndpointService,
    private toastr: ToastrService,
    private common: CommonService
  ) { }

  ngOnInit() {
    this.getEndpoints();
    this.getDashInfo();
  }

  showModal(){
    this.isShowModal = true;
  }

  closeModal(){
    this.isShowModal = false;
  }

  getEndpoints(){
    this.ep.getEndpoints().subscribe((data) => {
      this.endpoints = data['endpoints']
  
    })
    setTimeout(() => {
    this.endpoint_count = this.endpoints.length
    },500);
  }

  getDashInfo(){
    this.common.getDashInfo().subscribe((data) => {this.dashinfo = data; console.log('data>>>>', data)})
    setTimeout(() => {this.task_count = this.dashinfo.tasks.length;},500);
  }


}
