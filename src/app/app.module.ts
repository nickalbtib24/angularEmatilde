import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ChartsModule} from 'ng2-charts';
import {LocationStrategy, HashLocationStrategy, DatePipe} from '@angular/common';
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
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';


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
    AddReportAssetComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
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
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatButtonToggleModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, DatePipe],
  bootstrap: [AppComponent],
  entryComponents: [ProgressSpinnerDialogComponent],
})
export class AppModule { }
