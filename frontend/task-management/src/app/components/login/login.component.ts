import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { LocalService } from "src/app/services/local.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localService: LocalService,
  ) { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    const loginFormValue = this.loginForm.value;

    this.authService.signin(loginFormValue).subscribe(
      (response) => {
        console.log("User is logged in");
        this.localService.saveData("AuthToken", response.token);
        // TODO - redirect user to home page
      },
      (error) => {
        console.error("Error logging in the user");
      }
    );

  }

}
