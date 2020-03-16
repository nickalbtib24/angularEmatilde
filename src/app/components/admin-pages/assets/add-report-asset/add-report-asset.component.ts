import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { PrincipalService } from 'src/app/services/principal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Location} from '@angular/common';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-report-asset',
  templateUrl: './add-report-asset.component.html',
  styleUrls: ['./add-report-asset.component.css']
})
export class AddReportAssetComponent implements OnInit {

  @ViewChild('path', null) path: ElementRef;
  @ViewChild('fileInput', null) fileInput: ElementRef;

  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;

  progress: number;
  public message = '';
  public isVisible: boolean;
  public reportForm: FormGroup;
  public formData: FormData;
  public error: Text;
  public noFile: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private rest: PrincipalService,
    private Route: ActivatedRoute,
    private Routes: Router,
    private Loc: Location,
    private dialog: MatDialog
  ) {
    this.reportForm = this.formBuilder.group({});
  }

  ngOnInit() { }

  public onFileChange(files: any) {
    this.noFile = false;
    const file: File = files[0];
    this.path.nativeElement.value = file.name;
    if (this.isCSVfile(file.name)) {
      const headers = new Headers();
      const options = { headers }; // Create header
      this.formData = new FormData();
      this.formData.append('file', file); // Append file to formdata
      this.isVisible = true;
    }
  }
  public onSubmit() {
    if (this.path.nativeElement.value === '') {
      this.noFile = true;
    } else if (this.message !== '') {
      this.message = 'Please upload a file of type csv.';
    } else {
      const observable = new Observable(this.myObservable);
      this.showProgressSpinnerUntilExecuted(observable);
      const id = this.Route.snapshot.paramMap.get('id');
      this.formData.append('asset', id);
      this.rest.postCreateReportAsset(this.formData).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  }

  public myObservable(observer) {
    setTimeout(() => {
      observer.next('done waiting for 5 sec');
      observer.complete();
    }, 2000);
  }

  public handleError(error) {
    console.log(error.error);
    this.error = error.error.error;
    this.dialogRef.close();
  }

  public handleResponse(response) {
    if ( response.message ) {
      this.dialogRef.close();
      console.log(response.message);
      this.Loc.back();
    }
  }

  public showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
  }

  public isCSVfile(csv: string): boolean {
    let isCSV = false;
    if (csv.endsWith('.csv')) {
      isCSV = true;
      this.message = '';
    } else {
      this.message = 'Please upload a file of type csv.';
    }
    return isCSV;
  }

  submitUser() {

  }
}
