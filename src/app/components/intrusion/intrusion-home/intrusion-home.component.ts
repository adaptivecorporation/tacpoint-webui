import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntrusionService } from 'src/app/services/intrusion.service';

@Component({
  selector: 'app-intrusion-home',
  templateUrl: './intrusion-home.component.html',
  styleUrls: ['./intrusion-home.component.css']
})
export class IntrusionHomeComponent implements OnInit {

  constructor(private intrusion: IntrusionService,
    private router: Router) { }

  host_data: any = [];
  ngOnInit() {
    this.getHosts();
  }

  getHosts(){
    this.intrusion.get_hosts().subscribe(
      (data) => {
        this.host_data = data['intrusion']
        console.log(this.host_data)
      }
    )
  }

  viewHost(host_id){
    this.router.navigateByUrl('/app/intrusion/view/' + host_id)
  }



}
