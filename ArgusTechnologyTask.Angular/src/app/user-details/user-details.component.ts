import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../shared/user-detail.service';
import { UserDetail } from '../shared/user-detail.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: UserDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }
  populateForm(selectedRecord: UserDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteUserDetail(id).subscribe(res => {
        this.service.refreshList();
      }, err => {
        console.log(err);
      })
    }
  }
  

}
