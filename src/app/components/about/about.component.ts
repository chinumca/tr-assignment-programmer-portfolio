import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  userDetails;
  constructor(private userDetailsService: UserDetailsService) {}

  ngOnInit(): void {
    this.userDetailsService.sendName();
    this.userDetails = this.userDetailsService.getUserDetails();
  }
}
