import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  userFullName: string;
  constructor(private userDetailsService: UserDetailsService) {}
  ngOnInit() {
    this.userDetailsService.getUserName().subscribe((obj) => {
      this.userFullName = obj.userFullName;
    });
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
