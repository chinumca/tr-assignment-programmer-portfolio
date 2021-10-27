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
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrls: ['./work-form.component.scss'],
})
export class WorkFormComponent implements OnInit {
  WorkForm: FormGroup;
  isFresher: boolean = true;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit(): void {
    this.WorkForm = this.fb.group({
      employerArr: this.fb.array([]),
    });
  }

  addKey(j) {
    const keyArr = <FormArray>(
      this.WorkForm.get('employerArr')['controls'][j].get('profileKeys')
    );
    keyArr.controls.push(this.fb.control(''));
  }

  get employerArr() {
    return this.WorkForm.get('employerArr') as FormArray;
  }
  addEmployer() {
    this.employerArr.push(
      this.fb.group({
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        role: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        employer: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),

        profileKeys: this.fb.array([]),
      })
    );
  }

  submitForm() {
    this.WorkForm.markAllAsTouched();
    if (!this.isFresher && this.WorkForm.invalid) {
      return;
    }
    this.userDetailsService.setUserDetails(this.WorkForm.value, this.isFresher);
    this.router.navigate(['/work']);
  }
}
