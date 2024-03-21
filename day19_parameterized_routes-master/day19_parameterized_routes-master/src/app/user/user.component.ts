// user.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId!: number;
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = +params['id']; // Convert to number if needed
      this.fetchUserDetails();
    });
  }

  fetchUserDetails() {
    this.userService.getUserDetails(this.userId)
      .subscribe((data: any) => {
        this.user = data;
      });
  }
}
