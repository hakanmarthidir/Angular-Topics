import { AppConfig } from './app-config.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

    myUrl: string;

    constructor(private configService: AppConfig) {
        this.myUrl = configService.get('apiUrl');
    }
}