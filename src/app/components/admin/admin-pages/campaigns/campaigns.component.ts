import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css']
})
export class CampaignsComponent implements OnInit {

  private client = null;
  public campaigns = [];
  public information = true;

  constructor(
    private Route: ActivatedRoute,
    private Principal: PrincipalService,
    private Router: Router
    ) { }

  getCampaignsByClient() {
    this.client = this.Route.snapshot.paramMap.get('id');
    this.Principal.getCampaignsByUser(this.client).subscribe((data: any[]) => {
      this.campaigns = data;
      if (this.campaigns.length === 0) {
        this.information = false;
      }
    });
  }

  ngOnInit() {
    this.getCampaignsByClient();
  }

  public getSelectedCampaign(campaign){
    this.Router.navigate(['add-inform-campaign/', campaign]);

  }

  public redirectAddAsset(campaign){
    this.Router.navigate(['add-asset/', campaign]);
  }

  public redirectViewAssets(campaign) {
    this.Router.navigate(['assets-campaign-admin', campaign]);
  }

  public deleteCampaign(campaign) {
    this.Principal.deleteCampaign(campaign).subscribe();
  }

}
