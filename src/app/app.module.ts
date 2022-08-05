import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import {AccordionModule} from 'primeng/accordion';
import {Header, MenuItem, MessageService} from 'primeng/api';

import { AutoCompleteModule } from 'primeng/autocomplete'
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TabMenuModule} from 'primeng/tabmenu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {ListboxModule} from 'primeng/listbox';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TreeSelectModule} from 'primeng/treeselect';
import { ContentComponent } from './component/content/content.component';
import { PagenotcomponentComponent } from './component/pagenotcomponent/pagenotcomponent.component';
import {ToastModule} from 'primeng/toast';
import { RegisterComponent } from './component/register/register.component';
import { DialogComponent } from './component/dialog/dialog.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { DeleteComponent } from './component/delete/delete.component';
import {PaginatorModule} from 'primeng/paginator';
import { CoinListComponent } from './component/coin-list/coin-list.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';
import {RatingModule} from 'primeng/rating';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    ContentComponent,
    PagenotcomponentComponent,
    RegisterComponent,
    DialogComponent,
    DeleteComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    ButtonModule,
    AutoCompleteModule,
    TieredMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    FileUploadModule,
    FileUploadModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ListboxModule,
    PasswordModule,
    RadioButtonModule,
    TreeSelectModule,
    ToastModule,
    SelectButtonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    PaginatorModule,
    CascadeSelectModule,
    ToolbarModule,
    TableModule,
    NgChartsModule,
    RatingModule,
    KeyFilterModule
  ],
  providers: [
    MatSnackBar,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
