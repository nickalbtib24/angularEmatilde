import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
@Component({
  selector: 'app-view-assets',
  templateUrl: './view-assets.component.html',
  styleUrls: ['./view-assets.component.css']
})
export class ViewAssetsComponent implements OnInit {

  public information = true;


  constructor(
    private Route: Router,
    private Rest: PrincipalService,
    private Rou: ActivatedRoute
  ) { }
  public assets: any;
  ngOnInit() {
    this.getAssetsByCampaign(this.Rou.snapshot.paramMap.get('id'));
    this.getImages(1);
    console.log(this.assets);
  }

  public getAssetsByCampaign(campaign) {
    this.Rest.getAssetsByCampaign(campaign).subscribe(
      (data: any[]) => {
        this.assets = data;
        if (this.assets.length === 0) {
          this.information = false;
        }
      }
    );
  }
  public getImages(response) {
    this.Rest.getImageAsset(response).subscribe(
    );
  }

  public addReportAsset(asset) {
    this.Route.navigate(['add-report-asset', asset]);
  }
}
