import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { switchMap } from "rxjs/operators";

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

      updateImageSpin(image: any): Observable<any> {

        let url_ = this.apiUrl + `/upLoadLogo`;
        var formdata = new FormData();
        
        for (let file of image) {
          formdata.append('logo', file);
        }
    
        var requestOptions: any =  {
          method: 'POST',
          body: formdata,
          redirect: 'follow',
        };
        return from(
          fetch(url_, <any>requestOptions)
        ).pipe(switchMap((response) => response.json()));
      }
}