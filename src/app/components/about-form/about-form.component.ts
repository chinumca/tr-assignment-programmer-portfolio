import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';
@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss'],
})
export class AboutFormComponent implements OnInit {
  AboutForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit(): void {
    this.AboutForm = this.fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      designation: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      profileDesc: new FormControl('', [Validators.required]),

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999),
      ]),
      profileKeys: this.fb.array([]),
    });
  }

  get profileKeys() {
    return this.AboutForm.get('profileKeys') as FormArray;
  }

  addKey() {
    this.profileKeys.push(
      this.fb.control('', Validators.required)
      // new FormGroup({
      //   key: new FormControl([null, Validators.required]),
      // })
    );
  }
  removeKey(i) {
    this.profileKeys.removeAt(i);
  }

  submitForm() {
    this.AboutForm.markAllAsTouched();
    if (this.AboutForm.invalid) {
      return;
    }
    this.userDetailsService.setUserDetails(this.AboutForm.value);
    this.router.navigate(['/about']);
  }
}
