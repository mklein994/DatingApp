import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/user';
import { AdminService } from '../../_services/admin.service';
import { AlertifyService } from '../../_services/alertify.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  users: User[];

  constructor(
    private adminService: AdminService,
    private alertify: AlertifyService,
  ) {}

  ngOnInit() {
    this.getUsersWithRoles();
  }

  getUsersWithRoles() {
    this.adminService
      .getUsersWithRoles()
      .subscribe(
        (users: User[]) => (this.users = users),
        error => this.alertify.error(error),
      );
  }
}
