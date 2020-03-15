import { Component, OnInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/principal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private clients = []
  constructor(
    private Principal:PrincipalService,
    private Router:Router
  ) { }

  ngOnInit() {
    this.loadClients()
  }

  getSelectedCampaignsByUser(client){
    this.Router.navigate(['/campaigns-client',client])

  }

  loadClients(){
    this.Principal.getClients().subscribe((data: any[])=>{
      console.log(data);
      this.clients = data;
    })
  }

}
