import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetail } from './user-detail.model';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private http:HttpClient) { }

  readonly rootURL = 'https://localhost:7216/api/Users';
  formData: UserDetail = new UserDetail();
  list: UserDetail[];
  postUserDetail() {
    return this.http.post(this.rootURL, this.formData);
  }

  putUserDetail() {
    return this.http.put(this.rootURL + '/' + this.formData.id, this.formData);
  }

  deleteUserDetail(id:number) {
    return this.http.delete(this.rootURL + '/' + this.formData.id);
  }

  refreshList() {
    this.http.get(this.rootURL).toPromise().then(res => this.list = res as UserDetail[]);
  }

}
