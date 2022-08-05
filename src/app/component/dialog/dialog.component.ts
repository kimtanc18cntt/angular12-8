import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {ApiregisterService} from '../../service/apiregister.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  account_type  = ["organization","individual"];
  productForm !: FormGroup;
  stateOptions: any[];
  actionBtn : string = "save";
  value1: string = "Male";
  selectedCategory: any = null;
  value3: string ="individual";
  stateOptions1: any[];
  constructor(private formBuilder : FormBuilder, private api : ApiregisterService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    @Inject(MAT_DIALOG_DATA) public deData : any,
    private _snackBar: MatSnackBar,
    private dialogRef : MatDialogRef<DialogComponent>,
    private messageService: MessageService) { }

  ngOnInit(): void {


    this.productForm = this.formBuilder.group({
      usename : ['',[Validators.required, Validators.minLength(5)]],
      sex : ['',Validators.required],
      birth : ['',Validators.required],
      type : ['',Validators.required],
      email : ['',[Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      phone : ['',[Validators.required,Validators.pattern('(([0][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9])')]],

    });
    if(this.editData){
      this.actionBtn = "update"
      this.productForm.controls['usename'].setValue(this.editData.usename);
      this.productForm.controls['sex'].setValue(this.editData.sex);
      this.productForm.controls['birth'].setValue(this.editData.birth);
      this.productForm.controls['type'].setValue(this.editData.type);
      this.productForm.controls['email'].setValue(this.editData.email);
      this.productForm.controls['phone'].setValue(this.editData.phone);
    }
    this.stateOptions = [{label: 'Male', value: 'Male'}, {label: 'Female', value: 'Female'}];
    this.stateOptions1 = [{label: 'company', value: 'company'}, {label: 'individual', value: 'individual'}];
  }
  addproduct(message: string, action: string){
    if(!this.editData){
      if(this.productForm.valid){
        this.api.postProduct(this.productForm.value)
        .subscribe({
          next:(res)=>{
            this._snackBar.open(message, action);
            this.productForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Error while adding the product");
          }
        })
      }
    }else{
      this.updateProduct(message)
    }
  }
  updateProduct(message: string, action: string='updated'){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        this._snackBar.open(message, action);
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Error while updating the record");
      }
    })
  }
 
}