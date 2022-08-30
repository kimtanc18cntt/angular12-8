import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { from, mergeMap, Observer } from 'rxjs';

import { DataServer } from '../../data';
import { ApiregisterService } from '../../service/apiregister.service';
import { User } from 'src/app/user';
import { VndistricService } from 'src/app/service/vndistric.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewChecked {
  isLoading = false;
  displayDialog = false;
  selectedUser: User = {
    id: '1'
  };
  users!: User[];
  usersTemp!: User[];
  searchInput: string;
  userDialog = false;
  stateOptions: any[];
  stateOptions1: any[];
  form!: FormGroup;
  observer: Observer<any>;
  districts = ['District'];
  vietnamData: any[];
  error: string;
  isSubmitted = false;
  dataSource!: any;

  constructor(
    private userService: ApiregisterService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef,
    private messageService: MessageService,
    private vn: VndistricService,
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.form = this.fb.group({
      id: [''],
      username: ['', [Validators.required, Validators.minLength(5)]],
      city: ['',  Validators.required],
      district: ['', Validators.required],
      sex: ["Male", Validators.required],
      birth: [new Date(), Validators.required],
      type: ["Individual", Validators.required],
      email: ['', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      phone: ['', [Validators.required, Validators.pattern('^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$')]]
    });
    this.observer = {
      next: (data: DataServer) => {
        this.userDialog = false;
        this.searchInput = '';
        this.getUsers();
      },
      error: ({ error }: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Server Error' });
      },
      complete: () => { }
    };
    this.stateOptions = [{ label: 'Male', value: 'Male' }, { label: 'Female', value: 'Female' }];
    this.stateOptions1 = [{ label: 'Individual', value: 'Individual' }, { label: 'Company', value: 'Company' }];
    this.vietnamData = this.vn.getdistric();
    console.log(this.vietnamData);

  }

  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  openNew() {
    this.userDialog = true;
  }

  editUser(user: User) {
    console.log(user);
    this.userDialog = true;
    this.form.patchValue(user);
  }

  hideDialog() {
    this.userDialog = false;
    this.isSubmitted = false;
    this.form.updateValueAndValidity();
  }

  getUsers() {
    console.log('getUsers');
    setTimeout(() => {

    }, 50000);
    this.isLoading = true;

    this.userService.getProduct().subscribe({
      next: (data) => {


        this.users = this.usersTemp = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('error' + error.message);
        this.isLoading = false;
        this.userService.displayMessage('Error', error.message, 'error');
      }
    });
  }

  saveUser(form: FormGroup) {
    this.isSubmitted = true;
    form.markAllAsTouched();
    if (form.invalid) { return; }
    // EDIT
    if (form.value.id) {
      this.userService.putProduct(this.form.value, this.form.value.id).subscribe(this.observer);
      this.userService.displayMessage('Successfully', 'User update');
      this.isSubmitted = false;
      this.ngOnInit();
    }
    // CREATE
    else {
      this.userService.postProduct(this.form.value).subscribe(this.observer);
      this.userService.displayMessage('Successfully', 'User created');
      this.isSubmitted = false;
      this.ngOnInit();
    }
  }

  handleDeleteUser(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.userService.deleteProduct(id).subscribe(this.observer);
        this.userService.displayMessage('Successfully', 'User delete');
      }
    })
  }

  handleSearchChange() {
    let newUsers = this.usersTemp.filter(user => user.username?.toLowerCase().includes(this.searchInput.toLowerCase()));
    this.users = newUsers;
    console.log('âsdasdasd'+this.users)
    
  }

  getAllProducts() {
    this.userService.getProduct().subscribe(data => this.users = data);
  }

  changeCity(event: any): void {
    console.log(event);
    const city = event?.value;
    console.log();
    if (!city) {
      return;
    }
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
    console.log(this.districts);
  }
}
