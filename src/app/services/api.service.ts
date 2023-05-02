import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseurl: string = "https://localhost:7103/api/User/allUsers"; // connect to the Api

  constructor(private http: HttpClient , private auth: AuthService) { }



  getAllUsers() {
        return this.http.get<any>(this.baseurl);

  }







}
