import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-sysinfo',
  templateUrl: './sysinfo.component.html',
  styleUrls: ['./sysinfo.component.css']
})
export class SysinfoComponent implements OnInit {

  ep_id: string;
  sysinfo: any = [];
  constructor(private activatedRoute: ActivatedRoute,
    private ep: EndpointService) { 
    this.ep_id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.ep.getSysInfo(this.ep_id).subscribe(
      (data) => {
        this.sysinfo = data['sysinfo']
        console.log(this.sysinfo)
      }
    )
  }

}
