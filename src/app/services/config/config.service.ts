import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configPath = 'assets/config.json';
  private config;

  constructor(private http: HttpClient) {
    this.http.get(this.configPath).subscribe(config => this.config = config);
  }

  public getConfig() {
    return this.config;
  }
}
