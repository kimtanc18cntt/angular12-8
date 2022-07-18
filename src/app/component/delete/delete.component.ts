import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ApiregisterService } from '../../service/apiregister.service';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {RegisterComponent} from '../register/register.component'
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  productForm !: FormGroup;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiregisterService,
    private _snackBar: MatSnackBar,
    private formBuilder : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public DeleteData : any, 
    private dialogRef : MatDialogRef<DeleteComponent>) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      usename : ['',Validators.required],
      sex : ['',Validators.required],
      birth : ['',Validators.required],
      type : ['',Validators.required],
      email : ['',Validators.required],
      phone : ['',Validators.required],

    });
    console.log(this.DeleteData ,'this.DeleteData.id');
    if(this.DeleteData){
      this.productForm.controls['usename'].setValue(this.DeleteData.usename);
      this.productForm.controls['sex'].setValue(this.DeleteData.sex);
      this.productForm.controls['birth'].setValue(this.DeleteData.birth);
      this.productForm.controls['type'].setValue(this.DeleteData.type);
      this.productForm.controls['email'].setValue(this.DeleteData.email);
      this.productForm.controls['phone'].setValue(this.DeleteData.phone);
    }
  }
  deleteproduct(message: string, action: string){
    this.api.deleteProduct(this.DeleteData)
    .subscribe({
      next:(res)=>{
        this.productForm.reset();
        this._snackBar.open(message, action);
        this.dialogRef.close('delete');
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting the product!!!")
      }    
    })
  }
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Error while fetching the Records!!")
      }
    })
  }
}
