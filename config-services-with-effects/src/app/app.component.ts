import { Component } from '@angular/core';
import { LoggingService } from 'src/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loggingService: LoggingService) {
  }

  title = this.loggingService.myUrl;
}
