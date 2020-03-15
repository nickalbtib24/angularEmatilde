import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { ExecuteFunctionService } from 'src/app/services/execute-function.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form: any = {
    nombre_usuario: null,
    apellido_usuario: null,
    email: null,
    password: null,
    password_confirmation: null,
    empresa_usuario: null,
    telefono_usuario: null,
    tipo_cliente: null,
  };
  public tipoUsuarios: any = null;

  public response: any = [];

  public error: any = [];

  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;

  constructor(
    private Principal: PrincipalService,
    private Routers: Router,
    private dialog: MatDialog,
    private ExecuteFunction: ExecuteFunctionService,

    ) { }

  ngOnInit() {
    this.Principal.getTipoClientes().subscribe((data: any) => {
      console.log(data);
      this.tipoUsuarios = data;
    });
  }

  public onSubmit() {
    const observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
    console.log(this.form.tipo_cliente);
    this.Principal.signup(this.form).subscribe(
     (data) => this.handleError(data),
   );
  }

  public handleResponse(data) {
    this.ExecuteFunction.sendSuccessMessageToLogIn();
    if (!data.success) {
      this.handleError(data);
    }
    this.Routers.navigateByUrl('/login');
  }

  public handleError(error) {
    this.error = error;
    if (error.success) {
      this.Routers.navigateByUrl('/login');
    }
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
    const observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
    this.dialogRef.close();
  }

}
