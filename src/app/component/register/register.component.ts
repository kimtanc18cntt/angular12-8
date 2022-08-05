
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {ApiregisterService} from '../../service/apiregister.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DeleteComponent} from '../delete/delete.component';
import {User} from 'src/app/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User[];
 
  constructor(private productService: ApiregisterService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(data => this.user = data);
  }
 

}
