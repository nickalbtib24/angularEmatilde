import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
import {Location} from '@angular/common';
import { ProgressSpinnerDialogComponent } from 'src/app/components/progress-spinner-dialog/progress-spinner-dialog.component';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  @ViewChild('path', null) path: ElementRef;
  @ViewChild('fileInput', null) fileInput: ElementRef;

  public uploadForm: FormGroup;
  public message;
  public formData: FormData;
  public isVisible: boolean;
  public noFile: boolean;
  public campaign;
  public error: any = {lesser: ''};
  public buttonDisabled: boolean;
  public dialogRef: MatDialogRef<ProgressSpinnerDialogComponent>;

  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private Rest: PrincipalService,
    private Loc: Location,
    private dialog: MatDialog
    ) {
      this.uploadForm = this.formBuilder.group({});
     }


    public isCSVfile(csv: string): boolean {
    let isCSV = false;
    if (csv.endsWith('.png') || csv.endsWith('.jpg') || csv.endsWith('.jpeg')) {
      isCSV = true;
      this.message = '';
    } else {
      this.message = 'Please upload an image file';
    }
    return isCSV;
  }

  ngOnInit() {
    this.campaign = this.router.snapshot.paramMap.get('id');
    this.uploadForm = new FormGroup({
      nombre_asset: new FormControl(''),
      descripcion_asset: new FormControl(''),
      fecha_inicio_asset: new FormControl(''),
      fecha_finalizacion_asset: new FormControl('')
    });
  }

  onSubmit() {
    if (this.path.nativeElement.value === '') {
      this.noFile = true;
    } else if (this.message !== '') {
      this.message = 'Please upload a file of type csv.';
    } else {
      const observable = new Observable(this.myObservable);
      this.showProgressSpinnerUntilExecuted(observable);
      this.formData.append('id_campana', this.campaign);
      this.formData.append('nombre_asset', this.uploadForm.value.nombre_asset);
      this.formData.append('descripcion_asset', this.uploadForm.value.descripcion_asset);
      this.formData.append('fecha_inicio_asset', this.uploadForm.value.fecha_inicio_asset);
      this.formData.append('fecha_finalizacion_asset', this.uploadForm.value.fecha_finalizacion_asset);
      this.Rest.postAddAsset(this.formData).subscribe(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      );
      console.log(this.formData);
    }
  }

  public compareTwoDates(event) {
    const date1 = new Date(this.uploadForm.value.fecha_inicio_asset);
    const date2 = new Date(this.uploadForm.value.fecha_finalizacion_asset);
    if (date2 < date1) {
      const lesser = 'The start date must be lesser than due date';
      this.buttonDisabled = true;
      this.error.lesser = lesser;
    } else {
        this.error.lesser = '';
        this.buttonDisabled = false;
    }
  }

  public handleResponse(response) {
    this.dialogRef.close();
    this.Loc.back();
  }

  public handleError(error) {
    this.dialogRef.close();
    this.error = error.error;
  }

  public onFileChange(files: any) {
    this.noFile = false;
    const file: File = files[0];
    this.path.nativeElement.value = file.name;
    if (this.isCSVfile(file.name)) {
      const headers = new Headers();
      const options = { headers }; // Create header+
      this.formData = new FormData();
      this.formData.append('file', file); // Append file to formdata
      this.isVisible = true;
    }
  }

  public myObservable(observer) {
    setTimeout(() => {
      observer.next('done waiting for 5 sec');
      observer.complete();
    }, 2000);
  }

  public showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true
    });
  }
}
