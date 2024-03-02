import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthToken } from "../interfaces/auth-token";
import { User } from "../interfaces/user";
import { LocalService } from "./local.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverUrl: string = "http://localhost:8000";

  constructor(private http: HttpClient, private localService: LocalService) { }

  signup(payload: any): Observable<User> {
    const apiEndpoint = "/signup";
    const apiUrl = `${this.serverUrl}${apiEndpoint}`;

    return this.http.post<User>(apiUrl, payload);
  }

  signin(payload: any): Observable<AuthToken> {
    const apiEndpoint = "/signin";
    const apiUrl = `${this.serverUrl}${apiEndpoint}`;

    return this.http.post<AuthToken>(apiUrl, payload);
  }

  logOut(): void {
    this.localService.removeData("AuthToken");
    // TODO - naviagte to home page
  }

  isLoggedIn(): boolean {
    const authToken = this.localService.getData("AuthToken");
    return authToken != "";
  }

  handleLoginLogout(): void {
    if (this.isLoggedIn()) {
      this.logOut();
    }
    else {
      // TODO - naviagte to login page
    }
  }
}
