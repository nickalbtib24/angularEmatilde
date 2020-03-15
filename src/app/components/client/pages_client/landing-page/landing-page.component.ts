import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public campaigns: any = [];
  constructor(
    private Rest: PrincipalService,
    private Token: TokenService,
    private Route: Router
  ) { }

  public clickEvent(id){
    this.Route.navigate(['dashboard-campaign/', id]);
  }

  ngOnInit() {
    this.Rest.getCampaignsByUser(this.Token.getUser()).subscribe(
      (data) => {
        this.campaigns = data;
        console.log(this.campaigns);
      }
    );
  }

}
