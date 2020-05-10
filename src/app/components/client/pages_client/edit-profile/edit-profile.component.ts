import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { User } from 'src/app/models/user.model';
import { PrincipalService } from 'src/app/services/principal.service';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;
  public user: any = {};
  public form = {
    id: null,
    nombre_usuario: null,
    apellido_usuario: null,
    email: null,
    password: null,
    password_confirmation: null,
    empresa_usuario: null,
    telefono_usuario: null,
  };
  public id;
  public error: any = [];
  constructor(
    private Token: TokenService,
    private Rest: PrincipalService,
    private dialog: MatDialog,
    private Loc: Location,
  ) {
  }

  public getLoggedUser(userId) {
    this.Rest.postGetUser(userId).subscribe (
      (data: any) => {
        this.user = data;
        this.form.id = data.id;
        this.form.nombre_usuario = data.nombre_usuario;
        this.form.apellido_usuario = data.apellido_usuario;
        this.form.email = data.email;
        this.form.empresa_usuario = data.empresa_usuario;
        this.form.telefono_usuario = data.telefono_usuario;
      }
    );
    console.log(this.user);
  }

  public onSubmit() {
    console.log(this.form);
    this.Rest.editProfile(this.form).subscribe(
      (data) => this.handleResponse(),
      (error) => this.handleError(error)
    );
  }

  public handleResponse() {
    this.Loc.back();
  }

  public handleError(error) {
    if (error.error) {
      console.log(error.error);
      this.error = error.error;
    }
  }
  ngOnInit() {
    const observable = new Observable(this.myObservable);
    this.showProgressSpinnerUntilExecuted(observable);
    this.id = this.Token.getUser();
    this.getLoggedUser(this.id);
    this.form.id = this.id;
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

}
