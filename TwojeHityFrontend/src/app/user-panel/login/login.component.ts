import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ConfigStore } from 'src/app/app-config/config-store';
import { Login } from 'src/app/models/login.model';
import { AlertService } from 'src/app/services/app-services/alert.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public loginForm = new FormGroup( {
    login: new FormControl(''),
    password: new FormControl('')
  });

  private login : Login;
  
  constructor(private router : Router, private authService : AuthService, private configStore: ConfigStore,  private alertService: AlertService ) {}

  ngOnInit(): void {}
  
  async logIn() {
    this.configStore.startLoadingPanel();
    let isOk : boolean;
    this.login = new Login(this.loginForm.value.login, this.loginForm.value.password)
    let authToken = await lastValueFrom(this.authService.logIn(this.login))
    const expirationDate = authToken.tokenExpirationDate;
    this.authService.handleAuthentication(authToken.login, authToken.userId, authToken.token, expirationDate)
    console.log('yy')
    this.alertService.showSuccess("Zalogowano pomyślnie");

    setTimeout(() => {
      this.configStore.stopLoadingPanel();
    }, 2000);
   // this.router.navigate(['../'])
  }
  

}
