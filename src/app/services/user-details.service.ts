import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private userDetails;
  private subject = new Subject<any>();
  constructor() {}
  setUserDetails(obj, isFresher?) {
    if (!isFresher) {
      this.userDetails = Object.assign({}, obj);
    }

    //console.log(this.userDetails);
  }
  getUserDetails() {
    return this.userDetails;
  }
  sendName() {
    this.subject.next({
      userFullName:
        this.userDetails.firstName + ' ' + this.userDetails.lastName,
    });
  }
  getUserName(): Observable<any> {
    return this.subject.asObservable();
  }
}
