
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {ApiregisterService} from '../../service/apiregister.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DeleteComponent} from '../delete/delete.component'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  displayedColumns: string[] = ['usename', 'sex','birth', 'phone', 'email','type', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog, private api : ApiregisterService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }s
  getAllProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Lỗi Kiểm tra lại!")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editProduct(row : any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllProducts();
      }
    })
  }
  deleteProduct(id:number){
    console.log(id ,'id Cpn product');
    this.dialog.open(DeleteComponent,{
      width:'30%',
      data:id
    }).afterClosed().subscribe(val=>{
      if(val === 'delete'){
        this.getAllProducts();
      }
    })
  }
 
}
