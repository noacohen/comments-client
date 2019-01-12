import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config;

  constructor(private http: HttpClient) {
    this.http.get('assets/config.json').subscribe(config => this.config = config);
  }

  public getConfig() {
    return this.config;
  }
}
