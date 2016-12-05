import { Injectable } from '@angular/core';
import {  Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
    export class servicioHttp {
        private baseURL: string = 'https://jsonplaceholder.typicode.com';
        private UserData: string = '';

        constructor(private http: Http) {}
        
        obtenerusuarios(){
            return this.http.get(this.baseURL + '/users').map((res:Response) => res.json());
        }



        enviarusuarios(dataUser: any) {
             let headers = new Headers({ 'Content-Type': 'application/json' });
             let options = new RequestOptions({ headers: headers });
             let body = JSON.stringify(dataUser);
             return this.http.post(this.baseURL + '/posts', body, headers).map((res: Response) => res.json());
   }

        private getHeaders(){
            let headers = new Headers();
            headers.append('Accept', 'application/json');
            return headers;
    }
}
