
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Config } from 'src/models/app-config.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    static settings: Config;
    constructor(private http: HttpClient) { }
    load() {
        const jsonFile = 'assets/config/config.' + environment.name + '.json';
        return new Promise<void>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response: Config) => {
                AppConfig.settings = response as Config;
                resolve();
            }).catch((response: any) => {
                reject('Error...');
            });
        });
    }
}