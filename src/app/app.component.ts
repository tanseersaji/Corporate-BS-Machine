import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bsphrase = "loading"

  constructor(private httpService: HttpService){
    this.generate()
  }

  generate(){
    this.bsphrase = "loading"
    this.httpService.getBS().then(data => {
      this.bsphrase = data['phrase']
    })
  }

}
