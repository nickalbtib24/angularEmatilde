import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-inform-campaign',
  templateUrl: './add-inform-campaign.component.html',
  styleUrls: ['./add-inform-campaign.component.css']
})
export class AddInformCampaignComponent implements OnInit {

  private campaign: any = null;
  public errors: any = [];
  private success: any = [];
  public inform: any = {
    id_campana: null,
    reach: null,
    budget: null,
    result: null,
    impressions: null,
    estimated_add_recall: null,
    ammount_spent: null,
    frequency: null,
    video_clicks: null,
    post_reaction: null,
    carrousel_clicks: null,
    link_clicks: null,
    cost_per_result: '23',
    bid_strategy: null,
    fecha_ultima_actualizacion: null,
    date: null,
    state : '100'

  };

  constructor(
    private Router:Router,
    private Route:ActivatedRoute,
    private Principal:PrincipalService) { }

  ngOnInit() {
    this.campaign = this.Route.snapshot.paramMap.get('id');
    this.inform.id_campana = this.campaign;
  }

  onSubmit(){
    console.log(this.inform)
    this.Principal.createInform(this.inform).subscribe(
      response => this.handleResponse(response),
    );
  }

  handleResponse(response){
      if(response.success){
        this.success = response.success
        this.Router.navigateByUrl('clients') 
      }else{
        this.errors = response;
        console.log(response.date)
        
      }
      
  }

}
