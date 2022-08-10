import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app3';
  userDialog = false;
  displayCounter(dialogopen){
    this.userDialog = dialogopen;
    console.log(this.userDialog);
  }
  
}
