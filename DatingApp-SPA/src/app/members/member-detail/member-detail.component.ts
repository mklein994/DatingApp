import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../_models/user';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private alertify: AlertifyService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.loadUser();
  }

  // GET members/3
  loadUser() {
    this.userService
      .getUser(+this.route.snapshot.params['id'])
      .subscribe(
        (user: User) => (this.user = user),
        error => this.alertify.error(error),
      );
  }
}
