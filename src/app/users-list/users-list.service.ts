import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersList } from './users-list';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private httpService: HttpClient) { }

  ngOnInit() { }

  /* Fetch Users List from API - Starts */ 
  getUsersData(): Observable<usersList[]> {
    const API: string = 'https://jsonplaceholder.typicode.com/users';
    return this.httpService.get<usersList[]>(API);
  }
  /* Fetch Users List from API - Ends */
}
