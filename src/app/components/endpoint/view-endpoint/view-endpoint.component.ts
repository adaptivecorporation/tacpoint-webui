import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EndpointService } from 'src/app/services/endpoint.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-view-endpoint',
  templateUrl: './view-endpoint.component.html',
  styleUrls: ['./view-endpoint.component.css']
})
export class ViewEndpointComponent implements OnInit {

  taskForm: FormGroup;
  data: string;
  tasks: any = [];
  isTaskList: boolean = false;
  ep_sysinfo: any = [];
  ep_id: string;
  constructor(
    private ep: EndpointService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.taskForm = new FormGroup({
      data: new FormControl(this.data)
    });
   }

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.ep_id = params.get('id');
    });
    this.getSysInfo();
    this.listTasks();
  }

  getSysInfo(){
    this.ep.getSysInfo(this.ep_id).subscribe(
      (data) => {
        this.ep_sysinfo = data['sysinfo']
        console.log(data)
      }
    )
  }

  listTasks(){
    this.ep.listTasks().subscribe(
      (data) => {
        this.tasks = data['tasks']
      }
    )
  }

  showTaskList(){
    this.isTaskList = true;
  }

  hideTaskList(){
    this.isTaskList = false;
  }

  createTask(){
    var task_id = (<HTMLInputElement>document.getElementById('task_select')).value
    let d = {"target": this.ep_id, "task": task_id, "data": this.data}
    this.ep.createTask(d).subscribe((data) => {this.toastr.success('Success.', 'Task initiated!'),(error) => {this.toastr.error('An unexpected error has occured!', 'Error!')}})
    this.isTaskList = false;
    this.data = ''
  }

 prettyPrint() {
    var ugly = (<HTMLInputElement>document.getElementById('json_inp')).value;
    var obj = JSON.parse(ugly);
    var pretty = JSON.stringify(obj, undefined);
    (<HTMLInputElement>document.getElementById('json_inp')).value = pretty;
}

  inpChange(){
    this.prettyPrint();
  }

}
