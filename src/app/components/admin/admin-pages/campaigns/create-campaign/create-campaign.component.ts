import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.css']
})
export class CreateCampaignComponent implements OnInit {

  public form: any = {
    nombre_campana: null,
    tipo_campana: null,
    user_id: null,
    negocio_campana: null,
    fecha_inicio_campana: null,
    fecha_terminacion_campana: null,
    expected_budget: null,
    expected_link_clicks: null
  };
  public tipoUsuarios: any = null;

  public response: any[] = [];

  public error: any = {lesser: ''};

  public tipoCampanas: any;

  public clients: any;

  public buttonDisabled: boolean;

  constructor(
    private Router: Router,
    private service: PrincipalService,
    private Principal: PrincipalService,
    ) {
      this.getTipoCampanas();
      this.getClients();
    }

  ngOnInit() {
  }

  public onSubmit() {
    console.log(this.form);
    this.Principal.postCreateCampaign(this.form).subscribe(
      (data) => this.Router.navigateByUrl('/clients'),
      (error) => this.handleError(error)
    );
  }

  public handleError(error) {
    this.error = error.error;
  }

  public getTipoCampanas(): void {
    this.service.getTipoCampanas().subscribe(
      (data) => this.tipoCampanas = data
      );
  }

  public getClients(): void {
    this.service.getClients().subscribe(
      (data) => this.clients = data
    );
  }

  public compareTwoDates(event) {
    const date1 = new Date(this.form.fecha_inicio_campana);
    const date2 = new Date(this.form.fecha_terminacion_campana);
    if (date2 < date1) {
      const lesser = 'The start date must be lesser than due date';
      this.buttonDisabled = true;
      this.error.lesser = lesser;
    } else {
        this.error.lesser = '';
        this.buttonDisabled = false;
    }
  }
}
