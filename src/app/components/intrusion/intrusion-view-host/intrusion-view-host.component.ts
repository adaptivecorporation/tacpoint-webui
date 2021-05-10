import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IntrusionService } from 'src/app/services/intrusion.service';

@Component({
  selector: 'app-intrusion-view-host',
  templateUrl: './intrusion-view-host.component.html',
  styleUrls: ['./intrusion-view-host.component.css']
})
export class IntrusionViewHostComponent implements OnInit {

  constructor(private intrusion: IntrusionService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService) { 
      this.host_id = this.activatedRoute.snapshot.params['id'];
    }
  procs: any = [];
  sysInfo: any = [];
  process_array: any = [];
  host_data: any = [];
  host_id: string;
  netstat: any = [];
  ip_rep: any = [];
  ip_rep_arr: any = [];
  isNetstatResults: boolean = false;
  p: number = 1;
  ipRepSearchText: string;
  netstatSearchText: string;
  noOfItemPerPage: number = 20;
  noOfItemPerPageNetstat: number = 20;
  p_netstat: number = 1;
  p_proc: number = 1;
  noOfItemPerPageProc: number = 20;
  procSearchText: string;
  ngOnInit() {
    this.getSysInfo();
    this.getProcs();
    this.getNetstat();
    this.getIPRepResults();
  }

  getSysInfo(){
    this.intrusion.getSysinfo_by_ID(this.host_id).subscribe(
      (data) => {
        this.sysInfo = data['sysinfo']
      }
    )
  }

  getProcs(){
    this.intrusion.getProcs_by_ID(this.host_id).subscribe(
      (data) => {
        data['procs']['proc'].forEach(elem => {
          this.procs.push(elem);
        });
      }
    )
  }

  getNetstat(){
    this.intrusion.getNetstat(this.host_id).subscribe(
      (data) => {
        this.netstat = data['netstat']
        console.log(this.netstat)
      }
    )
  }

  async researchNetstatResults(){
    this.researchNetstat();
    this.refreshNetstat();

  }

  researchNetstat(){
    this.toastr.info("Starting research. Try not to refresh the page until the process has finished.", "Research started!")
    this.intrusion.researchNetstatResults(this.host_id).subscribe(
      (data) => {
        this.toastr.success("Report generated. You may refresh this page.", "Success!")
      }
    )
  }

  refreshNetstat(){
    while(this.isNetstatResults == true){
    setTimeout(() => {
      this.getIPRepResults()  
    }, 1000);
  }
    
  }

  getIPRepResults(){
    this.intrusion.getIPRepResults().subscribe(
      (data) => {
        console.log(data)
        data['ip_rep'].forEach(elem => {
          let app = {"ip": elem['report']['ip'], "anonymity": elem['report']['anonymity'], "information": elem['report']['information'], "blacklists": elem['report']['blacklists'], "risk_score": elem['report']['risk_score']['result']}
          this.ip_rep_arr.push(app)
          console.log(this.ip_rep_arr)          
        });
      }
    )
  }

  getHost(){
    this.intrusion.get_host_by_id(this.host_id).subscribe(
      (data) => {
        this.host_data = data['host']
        console.log(this.host_data)
      }
    )
  }

  changeNoItemsPerPage(num){
    this.noOfItemPerPage = num;
  }

  changeNoItemsPerPageNetstat(num){
    this.noOfItemPerPageNetstat = num;
  }

  changeNoItemsPerPageProc(num){
    this.noOfItemPerPageProc = num;
  }


}
