import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';

import { VerifyUserComponent } from './components/verify/verify-user/verify-user.component';
import { ClientsComponent } from './components/admin/admin-pages/clients/clients.component';
import { AddCampaignComponent } from './components/client/pages_client/add-campaign/add-campaign.component';
import { DashboardCampaignComponent } from './components/client/pages_client/dashboard-campaign/dashboard-campaign.component';
import { CampaignsClientComponent } from './components/client/pages_client/campaigns-client/campaigns-client.component';
import { ProfileClientComponent } from './components/client/pages_client/profile-client/profile-client.component';
import { ClientContainerComponent } from './components/client/client-container/client-container.component';
import { AdminContainerComponent } from './components/admin/admin-container/admin-container.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CampaignsComponent } from './components/admin/admin-pages/campaigns/campaigns.component';
import { AddInformCampaignComponent } from './components/admin/admin-pages/campaigns/add-inform-campaign/add-inform-campaign.component';
import { ExecuteFunctionService } from 'src/app/services/execute-function.service';
import { FileComponent } from './components/admin/admin-pages/campaigns/upload-campaign-report/file.component';
import { CreateCampaignComponent } from './components/admin/admin-pages/campaigns/create-campaign/create-campaign.component';
import { ProgressSpinnerDialogComponent } from './components/progress-spinner-dialog/progress-spinner-dialog.component';
import { MatDialogModule } from '@angular/material';
import { DashboardAssetComponent } from './components/client/pages_client/dashboard-asset/dashboard-asset.component';
import { LandingPageComponent } from './components/client/pages_client/landing-page/landing-page.component';
import { EditProfileComponent } from './components/client/pages_client/edit-profile/edit-profile.component';
import { WatchAssetsComponent } from './components/client/pages_client/watch-assets/watch-assets.component';
import { AddAssetComponent } from './components/admin/admin-pages/assets/add-asset/add-asset.component';
import { ViewAssetsComponent } from './components/admin-pages/assets/view-assets/view-assets.component';
import { AddReportAssetComponent } from './components/admin-pages/assets/add-report-asset/add-report-asset.component';
import {MatTooltipModule} from '@angular/material';

const MaterialComponents = [
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    UserComponent,
    VerifyUserComponent,
    DashboardCampaignComponent,
    AddCampaignComponent,
    ClientsComponent,
    CampaignsClientComponent,
    ProfileClientComponent,
    ClientContainerComponent,
    AdminContainerComponent,
    ProfileClientComponent,
    CampaignsComponent,
    AddInformCampaignComponent,
    NavbarComponent,
    FileComponent,
    CreateCampaignComponent,
    ProgressSpinnerDialogComponent,
    DashboardAssetComponent,
    LandingPageComponent,
    EditProfileComponent,
    WatchAssetsComponent,
    AddAssetComponent,
    ViewAssetsComponent,
    AddReportAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialComponents,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [ExecuteFunctionService],
  bootstrap: [AppComponent],
  entryComponents: [ProgressSpinnerDialogComponent],
})
export class AppModule { }
