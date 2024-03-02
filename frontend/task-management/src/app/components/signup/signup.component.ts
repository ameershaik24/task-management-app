import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { LocalService } from "src/app/services/local.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localService: LocalService,
    private router: Router
  ) { }

  signUpForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['']
  });

  signup() {
    const signUpFormValue = this.signUpForm.value;

    this.authService.signup(signUpFormValue).subscribe(
      (response) => {
        console.log("Successfully signed up!");
        this.localService.saveData("AuthToken", response.token);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error("Error in signing up the user");
      }
    );

  }

}
