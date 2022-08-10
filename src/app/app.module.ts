import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete'
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListboxModule } from 'primeng/listbox';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TreeSelectModule } from 'primeng/treeselect';
import { ContentComponent } from './component/content/content.component';
import { PagenotcomponentComponent } from './component/pagenotcomponent/pagenotcomponent.component';
import { ToastModule } from 'primeng/toast';
import { RegisterComponent } from './component/register/register.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmationService } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { CoinListComponent } from './component/coin-list/coin-list.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { NgChartsModule } from 'ng2-charts';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CoinDetailComponent } from './component/coin-detail/coin-detail.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    ContentComponent,
    PagenotcomponentComponent,
    RegisterComponent,
    CoinListComponent,
    CoinDetailComponent
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
    ConfirmDialogModule,
    MatToolbarModule,
    FileUploadModule,
    FileUploadModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    TabMenuModule,
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
    PaginatorModule,
    CascadeSelectModule,
    ToolbarModule,
    TableModule,
    NgChartsModule,
    RatingModule,
    KeyFilterModule,
    ProgressSpinnerModule,
    DialogModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
