import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LogIn } from '../store/actions/auth.actions';
import { AppState } from '../store/app.state';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
    const payload = {
      email: this.user.email,
      password: this.user.password,
    };
    this.store.dispatch(new LogIn(payload));
  }
}
