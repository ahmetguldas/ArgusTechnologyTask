import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { UserDetail } from 'src/app/shared/user-detail.model';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent implements OnInit {

  constructor(public service:UserDetailService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(this.service.formData.id == 0){
      this.insertRecord(form);
    } else{
        this.updateRecord(form);
      }
  }

  updateRecord(form: NgForm){
    this.service.putUserDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  

  insertRecord(form: NgForm){
    this.service.postUserDetail().subscribe(
      res => {
        this.resetForm(form);
      },
      err => { console.log(err); }
    );
  }


  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new UserDetail();
  }
}
