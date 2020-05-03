import { NgModule, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { UserComponent } from './components/user/user.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { AuthorizationAdminService } from './services/authorization-admin.service';
import { AuthorizationClientService } from './services/authorization-client.service';
import { CampaignsClientComponent} from './components/client/pages_client/campaigns-client/campaigns-client.component';
import { ProfileClientComponent} from './components/client/pages_client/profile-client/profile-client.component';
import { AddCampaignComponent} from './components/client/pages_client/add-campaign/add-campaign.component';
import { DashboardCampaignComponent } from './components/client/pages_client/dashboard-campaign/dashboard-campaign.component';
import { ClientsComponent } from './components/admin/admin-pages/clients/clients.component';
import { CampaignsComponent } from './components/admin/admin-pages/campaigns/campaigns.component';
import { AddInformCampaignComponent } from './components/admin/admin-pages/campaigns/add-inform-campaign/add-inform-campaign.component'
import { FileComponent } from './components/admin/admin-pages/campaigns/upload-campaign-report/file.component';
import { CreateCampaignComponent } from './components/admin/admin-pages/campaigns/create-campaign/create-campaign.component';
import { DashboardAssetComponent } from './components/client/pages_client/dashboard-asset/dashboard-asset.component';
import { EditProfileComponent } from './components/client/pages_client/edit-profile/edit-profile.component';
import { LandingPageComponent } from './components/client/pages_client/landing-page/landing-page.component';
import { WatchAssetsComponent } from './components/client/pages_client/watch-assets/watch-assets.component';
import { AddAssetComponent } from './components/admin/admin-pages/assets/add-asset/add-asset.component';
import { ViewAssetsComponent } from './components/admin-pages/assets/view-assets/view-assets.component';
import { AddReportAssetComponent } from './components/admin-pages/assets/add-report-asset/add-report-asset.component';
const appRoutes: Routes = [

  { path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [AfterLoginService]

  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [AfterLoginService]

  },
  {
    path: 'user',
    component: DashboardAssetComponent,
    canActivate: [AfterLoginService]

  }
  ,
  {
    path: 'dashboard-asset/:id',
    component: DashboardAssetComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]

  },
  {
    path: 'campaigns-client',
    component: CampaignsClientComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]

  },
  {
    path: 'add-campaign',
    component: AddCampaignComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]

  },
  {
    path: 'add-asset/:id',
    component: AddAssetComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]
  },
  {
    path: 'profile-client',
    component: ProfileClientComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]

  },
  {
    path: 'dashboard-campaign/:id',
    component: DashboardCampaignComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]

  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AfterLoginService ]
  },
  {
    path: 'campaigns-client/:id',
    component: CampaignsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'add-inform-campaign/:id',
    component: FileComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]
  },
  {
    path: 'create-campaign',
    component: CreateCampaignComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]
  },
  {
    path: 'client-home',
    component: LandingPageComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]
  },
  {
    path: 'assets-campaign/:id',
    component: WatchAssetsComponent,
    canActivate: [AfterLoginService, AuthorizationClientService]
  },
  {
    path: 'assets-campaign-admin/:id',
    component: ViewAssetsComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]
  },
  {
    path: 'add-report-asset/:id',
    component: AddReportAssetComponent,
    canActivate: [AfterLoginService, AuthorizationAdminService]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes,  {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
