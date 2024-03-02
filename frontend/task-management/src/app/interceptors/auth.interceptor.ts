import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LocalService } from "../services/local.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localService: LocalService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Get the auth token from the service.
    const authToken = this.localService.getData("AuthToken");

    if (authToken) {
      // Clone the request and set the new header in one step.
      const authReq = request.clone({ setHeaders: { Authorization: `Token ${authToken}` } });
      return next.handle(authReq);
    }

    return next.handle(request);

  }
}
