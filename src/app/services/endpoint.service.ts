import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants'
@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private http: HttpClient) { }

  getEndpoints(){
    return this.http.get(Constants.GET_ENDPOINTS);
  }

  getSysInfo(ep_id){
    return this.http.get(Constants.GET_SYSINFO + ep_id)
  }

  listTasks(){
    return this.http.get(Constants.GET_TASKS);
  }

  createTask(data){
    return this.http.put(Constants.CREATE_TASK, data)
  }
}
