import { AppConfig } from './app-config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    myUrl: string;

    constructor() {
        this.myUrl = AppConfig.settings.api.apiUrl;
    }
}