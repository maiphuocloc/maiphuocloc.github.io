import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibraryVocabularyService {
    private apiUrl = environment.configAPI.API_BASE_URL;

    constructor(private http: HttpClient) { }

    randomAWord(): Observable<any> {
        let url_ = this.apiUrl + `/library-vocabulary/ramdom-a-word`;
        let options_: any = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Accept: "application/json"
          }),
        };
        return this.http.get<any>(url_, options_);
      }

      getAllWord(): Observable<any> {
        let url_ = this.apiUrl + `/library-vocabulary/get-all-words`;
        let options_: any = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Accept: "application/json"
          }),
        };
        return this.http.get<any>(url_, options_);
      }

      createAWord(word: any): Observable<any> {
        console.log(word);
        
        let url_ = this.apiUrl + `/library-vocabulary/create-a-word`;
        let options_: any = {
          headers: new HttpHeaders({
            "Content-Type": "application/json",
            Accept: "application/json"
          }),
        };
        var body: any = word;
        return this.http.post<any>(url_,body, options_);
      }

}