import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { User } from 'src/app/user';
import { ApiregisterService } from 'src/app/service/apiregister.service';
import { ConfirmDialog } from 'primeng/confirmdialog';

fdescribe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let userService = jasmine.createSpyObj('userService',
    ['displayMessage', 'getProduct', 'putProduct', 'postProduct']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule
      ],
      providers:[
        MessageService,
        ConfirmationService,
        { provide: ApiregisterService, useValue: userService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    userService.getProduct.and.returnValue(of([]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('call function openNew', () => {
    component.userDialog = false;
    component.openNew();
    expect(component.userDialog).toBeTruthy();
  });

  it('call function editUser', () => {
    const user: User = {
      id: '1',
      username: 'kimTan'
    };
    component.editUser(user);
    expect(component.userDialog).toBeTruthy();
    expect(component.form.get('username')?.value).toEqual(user.username);
  });

  it('call function saveUser', () => {
    const form: FormGroup = new FormGroup ({
      id: new FormControl('1'),
      username: new FormControl('', [Validators.required]),
    });
    component.saveUser(form);
    expect(component.form.invalid).toBeTruthy();
  });

  it('call function saveUser, edit user success', () => {
    const form: FormGroup = new FormGroup ({
      id: new FormControl('1'),
      username: new FormControl('kimtan', [Validators.required]),
    });
    userService.putProduct.and.returnValue(of(undefined));
    component.saveUser(form);
    expect(userService.displayMessage).toHaveBeenCalled();
  });

  it('call function saveUser, add user success', () => {
    const form: FormGroup = new FormGroup ({
      id: new FormControl(''),
      username: new FormControl('kimtan', [Validators.required]),
    });
    userService.postProduct.and.returnValue(of(undefined));
    component.saveUser(form);
    expect(userService.displayMessage).toHaveBeenCalled();
  });

  it('call function hideDialog', () => {
    component.userDialog = true;
    component.hideDialog();
    expect(component.userDialog).toBeFalse();
  });


  it('call function getAllProducts', () => {
    userService.getProduct.and.returnValue(of([
      {
        id: '1',
        username: 'kimtan'
      },
      {
        id: '2',
        username: 'kimtan2'
      }
    ]));
    component.getAllProducts();
    expect(component.users.length).toEqual(2);
  });



  it('call function handleSearchChange', () => {
    component.usersTemp=[
      {
        id: '1',
        username: 'kimtan'
      },
      {
        id: '2',
        username: 'kimtan2'
      }
    ];
    component.searchInput='kimtan2';
    component.handleSearchChange();
    expect(component.users).toEqual([component.usersTemp[1]]);
  });


  it('call function handleDeleteUser', () => {
    component.usersTemp=[
      {
        id: '1',
        username: 'kimtan'
      },
      {
        id: '2',
        username: 'kimtan2'
      }
    ];
    component.searchInput='kimtan2';
    component.handleSearchChange();
    expect(component.users).toEqual([component.usersTemp[1]]);
  });


  it('call function handleDeleteUser', () => {
    component.handleDeleteUser('1');
    expect(component.userDialog).toBeFalse();
  })
});
