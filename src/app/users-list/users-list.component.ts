import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersListService } from './users-list.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { usersList } from './users-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule]
})
export class UsersListComponent {

  public usersList: usersList[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private usersListService: UsersListService) { }

  ngOnInit() {
    /* Get Users List from users-list.service method - Starts */
    this.subscriptions.push(this.usersListService.getUsersData().subscribe(
      (response: usersList[]) => {
        this.usersList = response;
      },
      (error: any) => {
        console.log("Service Error while fetching Users Data" + error);
      }));
    /* Get Users List from users-list.service method - Ends */
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
