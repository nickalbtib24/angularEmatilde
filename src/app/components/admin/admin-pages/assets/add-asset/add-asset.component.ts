import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { PrincipalService } from 'src/app/services/principal.service';
import {Location} from '@angular/common';

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
  public error: any = [];
  constructor(
    private router: ActivatedRoute,
    private formBuilder: FormBuilder,
    private Rest: PrincipalService,
    private Loc: Location

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
    } else {
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

  public handleResponse(response) {
    this.Loc.back();
  }

  public handleError(error) {
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

}
