import { Component, OnInit, OnDestroy, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrincipalService } from 'src/app/services/principal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { EventEmitter } from '@angular/core';
import { ExecuteFunctionService } from 'src/app/services/execute-function.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() public sendChange: EventEmitter<any> = new EventEmitter<any>();

  public user: User;
  public form  = {
    email: null,
    password: null
  };

  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;
  public error: any = [];
  public success = '';

  constructor(
    private Principal: PrincipalService,
    private Token: TokenService,
    private Routers: Router,
    private Auth: AuthService,
    private ExecuteFunction: ExecuteFunctionService,
    private dialog: MatDialog

  ) {
    this.user = {
      id: 0,
      name: '',
      lastName: '',
      enterprise: '',
      email: '',
      client: 0,
      profile: 0
    };

  }

  public onSubmit() {
     const observable = new Observable(this.myObservable);
     this.showProgressSpinnerUntilExecuted(observable);
     this.Principal.login(this.form).subscribe(
     (data: any) => this.handleResponse(data),
     (error: any) => this.handleError(error)
   );
  }

  public handleResponse(data) {
    this.user.id = data.id;
    this.Token.handle(data.access_token, data.user, data.role);
    this.Auth.changeAuthStatus(true);
    if (data.role === 2) {
      this.Routers.navigateByUrl('/client-home');
    } else {
      this.Routers.navigateByUrl('/clients');
    }
    this.ExecuteFunction.onFirstComponentButtonClick();

  }

  public handleError(error) {
    console.log(error.error);
    this.error = error.error;
    this.dialogRef.close();
  }

  public myObservable(observer) {
    setTimeout(() => {
      observer.next('done waiting for 5 sec');
      observer.complete();
    }, 2000);
  }

   public showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
  }

  public ngOnDestroy(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

      this.ExecuteFunction.subsVar = this.ExecuteFunction.
      invokeLogInComponentMessage.subscribe((name: string) => {
        console.log('hol');
      });
  }

}
