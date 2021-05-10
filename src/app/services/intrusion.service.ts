import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants'
@Injectable({
  providedIn: 'root'
})
export class IntrusionService {

  constructor(private http: HttpClient) { }

  get_hosts(){
    return this.http.get(Constants.INTRUSION_HOSTS);
  }

  get_host_by_id(host_id){
    return this.http.get(Constants.INTRUSION_HOST_BY_ID + host_id)
  }

  getSysinfo_by_ID(host_id){
    return this.http.get(Constants.INTRUSION_HOST_SYSINFO_BY_ID + host_id)
  }

  getProcs_by_ID(host_id){
    return this.http.get(Constants.INTRUSION_HOST_PROCS_BY_ID + host_id)
  }

  getNetstat(host_id){
    return this.http.get(Constants.INTRUSION_HOST_NETSTAT + host_id)
  }

  getIPRepResults(){
    return this.http.get(Constants.INTRUSION_IPREP_RESULTS);
  }

  researchNetstatResults(host_id){
    return this.http.get(Constants.INTRUSION_NETSTAT_RESEARCH + host_id)
  }
}
