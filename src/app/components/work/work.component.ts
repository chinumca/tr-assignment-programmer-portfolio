import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  userDetails;
  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.userDetails = this.userDetailsService.getUserDetails();
    console.log(this.userDetails);
  }
}
