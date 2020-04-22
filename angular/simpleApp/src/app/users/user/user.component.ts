import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: {
    id: number;
    name: string;
    lastName: string;
    role: string;
  };

  allowEdit: Boolean = false;

  constructor(
    private userService: UserService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params: Params) => (this.user = this.userService.getUser(+params['id']))
    );

    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === 'true' ? true : false;
    });
  }
}
