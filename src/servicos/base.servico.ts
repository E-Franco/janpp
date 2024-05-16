import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class BaseServico{

    constructor(private http : HttpClient){
    }

    baseGet(url : string){
        return this.http.get<any>(url);
    }

    baseGetComParam(url : string, param : any){
        return this.http.get<any>(url, { params : param});
    }

    // baseGetComHeaderEParam(url: string, param : any) : Observable<any>{
    //     //var token = UtilService.obterToken();
    //     //const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    //     //return this.http.get<any>(url, { headers: headers, params : param});
    // }

    // baseGetComHeader(url: string) : Observable<any>{
    //     var token = UtilService.obterToken();
    //     const headers = new HttpHeaders({'Authorization': 'Bearer ' + token});
    //     return this.http.get<any>(url, { headers: headers});
    // }

    basePost(url: string, obj : any) : Observable<any>{
        const headers = new HttpHeaders({'clientId': environment.clientId });
        const options = { headers: headers }
        return this.http.post(url, obj, options);
    }

    // basePostComHeader(url: string, obj : any) : Observable<any>{
    //     const headers = new HttpHeaders({'Authorization': 'Bearer ' + UtilService.obterToken()});
    //     const options = { headers: headers }
    //     return this.http.post(url, obj, options);
    // }
}