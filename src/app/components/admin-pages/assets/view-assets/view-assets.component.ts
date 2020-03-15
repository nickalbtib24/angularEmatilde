import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
@Component({
  selector: 'app-view-assets',
  templateUrl: './view-assets.component.html',
  styleUrls: ['./view-assets.component.css']
})
export class ViewAssetsComponent implements OnInit {

  constructor(
    private Route: Router,
    private Rest: PrincipalService,
    private Rou: ActivatedRoute
  ) { }
  private assets: any;
  ngOnInit() {
    this.getAssetsByCampaign(this.Rou.snapshot.paramMap.get('id'));
    this.getImages(1);
    console.log(this.assets);
  }

  public getAssetsByCampaign(campaign) {
    this.Rest.getAssetsByCampaign(campaign).subscribe(
      (data: any[]) => {
        console.log(data);
        this.assets = data;
      }
    );
  }
  public getImages(response) {
    this.Rest.getImageAsset(response).subscribe(
      data => console.log(data)
    );
  }

  public addReportAsset(asset) {
    this.Route.navigate(['add-report-asset', asset]);
  }
}
