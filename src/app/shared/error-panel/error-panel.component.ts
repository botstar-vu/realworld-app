import { Component, OnInit } from '@angular/core';
import { ErrorLogService } from '../error-log.service';

@Component({
  selector: 'app-error-panel',
  templateUrl: './error-panel.component.html',
  styleUrls: ['./error-panel.component.css']
})
export class ErrorPanelComponent implements OnInit {

  constructor(
    private logService: ErrorLogService
  ) { }

  ngOnInit() {
  }

}
