import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppConfig {

    settings: any = null;

    constructor(private httpClient: HttpClient) {
    }

    load() {
        const jsonFile = 'assets/config/config.' + environment.name + '.json';

        return this.httpClient.get<any>(jsonFile)
            .toPromise()
            .then(response => this.settings = response);
    }

    get(key: string) {
        return this.settings[key];
    }
}