import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectManagerService {
    private apiUrl = environment.configAPI.API_BASE_URL + '/project-manager';

    constructor(private http: HttpClient) { }

    createOneProject(project: any): Observable<any> {
        let url_ = this.apiUrl + `/create-a-project`;
        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
            }),
        };
        var body: any = project;
        return this.http.post<any>(url_, body, options_);
    }

    getAllProject(): Observable<any> {
        let url_ = this.apiUrl + `/get-all-projects`;
        let options_: any = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Accept: "application/json"
            }),
        };
        return this.http.get<any>(url_, options_);
    }

    getOneProject(id: number): Observable<any> {
        let url_ = this.apiUrl + `/get-a-project/${id}`;
        let options_: any = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Accept: "application/json",
          }),
        };
        return this.http.get(url_, options_);
      }
}