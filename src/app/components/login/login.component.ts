import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isMobile: boolean = false;
  password: string;
  username: string;
  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private dds: DeviceDetectorService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(this.username, [Validators.required]),
      password: new FormControl(this.password, [Validators.required])
    })
    this.checkMobile();
  }

  ngOnInit(): void {
  }

  checkMobile(){
    this.isMobile = this.dds.isMobile();
  }

  logIn(){
    if(this.username.length > 0){
    this.auth.logIn(this.username, this.password).subscribe(
      (data) => {
        this.localStorageService.setToken(data['token'])
        this.router.navigateByUrl('/app/dashboard');
      }
    )
    }
  }

}
