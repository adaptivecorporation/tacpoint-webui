import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.css']
})
export class EndpointsComponent implements OnInit {

  
  endpoint_list: any = [];
  constructor(private ep: EndpointService,
    private router: Router) { }

  ngOnInit() {
    this.getEPs()
    
  }

  getEPs(){
    this.ep.getEndpoints().subscribe(
      (data) => {
        this.endpoint_list = data['endpoints']
        console.log('endpoints>>>', this.endpoint_list)
      }
    )
  }

  goToEP(uuid){
    this.router.navigateByUrl('/app/endpoint/'+uuid)
  }

  

}
