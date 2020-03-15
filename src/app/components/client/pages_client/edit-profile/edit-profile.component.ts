import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { User } from 'src/app/models/user.model';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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
  constructor(
    private Token: TokenService,
    private Rest: PrincipalService
  ) {
    
  }

  public getLoggedUser(userId) {
    this.Rest.postGetUser(userId).subscribe (
      (data: any) => {
        this.user = data;
      }
    );
    console.log(this.user);
  }

  public onSubmit() {
    console.log(this.user);
    /*
    this.Rest.editProfile(this.form).subscribe(
      (data) => console.log(data),
      (error) => this
    );
    */
  }

  public handleError(error){
    console.log(error);
  }
  ngOnInit() {
    this.id = this.Token.getUser();
    this.getLoggedUser(this.id);
    this.form.id = this.id;
  }


}
