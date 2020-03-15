import { Component, OnInit, ViewChild } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'table-overview-example',
  templateUrl: './campaigns-client.component.html',
  styleUrls: ['./campaigns-client.component.css']
})
export class CampaignsClientComponent implements OnInit {

  private campaigns = [];


  constructor(
    private Principal:PrincipalService,
    private Token:TokenService,
    private Router : Router
  ) { 
    
  }

  getCampaignsByUser(){
    let user = this.Token.getUser();
    this.Principal.getCampaignsByUser(user).subscribe((data: any[])=>{
      this.campaigns = data;
    })
  }

  ngOnInit(){
    this.getCampaignsByUser()
  }

  getSelectedCampaign(id){
    this.Router.navigate(['/dashboard-campaign', id]);
    console.log(id)
  }

  public getAssetsCampaign(id) {
    this.Router.navigate(['/assets-campaign', id]);
  }
}
