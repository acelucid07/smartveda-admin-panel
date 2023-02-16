import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { userStructure } from 'src/app/_models/user-management';
import { UserService } from 'src/app/_services/user-mgmt.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  sidebarSpacing: any;
  userList:userStructure[] = []
  fgsType: any;
  id:string="";
  title:String;
  payload:any
  editMode: boolean = false
  userForm:FormGroup;
  roles:String[];
  constructor(
    private activateRoute:ActivatedRoute,
    private fb:FormBuilder,
    private ngxLoader: NgxUiLoaderService,
    private UserService: UserService,
    private toastr: ToastrMsgService,
    private route: Router,
  ) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      emailname: ['', [Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      phonenumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      roleassigned: ['', [Validators.required]],
    })
    
    this.roles = ['admin',
      'vendor',
      'retailer'
    ];

   }

  ngOnInit(): void {
    this.fgsType = SPINNER.squareLoader
    this.ngxLoader.start();
    this.sidebarSpacing = 'contracted';
    
    this.activateRoute.queryParamMap.subscribe(params => {
      this.id = params.get('userid');
      if (this.id && this.id != undefined) {
        this.editMode = true
        this.title = "Edit User"
      } else {
        this.editMode = false
        this.title = "Add New User"
      }
      this.getUserlist()
    });
  }
  getUserlist() {
    this.UserService.getUserList().subscribe((res) => {
      this.userList = res
     
      if (this.editMode && this.userList[parseInt(this.id)-1].status==true) {
        this.userForm.patchValue({
          username: this.userList[parseInt(this.id) - 1].name,
          emailname: this.userList[parseInt(this.id) - 1].email,
          phonenumber: this.userList[parseInt(this.id) - 1].phone,
          roleassigned: this.userList[parseInt(this.id) - 1].role,
        })
      }
    })
  }
  submitForm() {
   
    this.ngxLoader.start();
    console.log(this.payload)
    if(this.editMode  && this.userList[parseInt(this.id)-1].status==true)
    {
      this.payload = {
        id: this.id,
        name: this.userForm.controls['username'].value,
        email: this.userForm.controls['emailname'].value,
        phone: this.userForm.controls['phonenumber'].value,
        role: this.userForm.controls['roleassigned'].value,
      }
      this.editUser()
    }
    
    // else if (this.editMode && this.userList[parseInt(this.id) - 1].status == false) {
    //   this.toastr.showError("User is already deleted", "Error occured")
    // }

    else
    {
      this.payload = {
        id: this.userList.length+1,
        name: this.userForm.controls['username'].value,
        email: this.userForm.controls['emailname'].value,
        phone: this.userForm.controls['phonenumber'].value,
        role: this.userForm.controls['roleassigned'].value,
      }
      this.addUser()
    }
   
  }

  addUser(){
    console.log(this.payload)
    this.UserService.addUser(this.payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("User added successfully", "Added User")
        this.ngxLoader.stop();
        this.route.navigate(['/user/userlist'])
        
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/user/userlist'])
      }
    })
  }

  editUser(){
    this.UserService.editUser(this.payload).subscribe(res => {
      if (res) {
        this.toastr.showSuccess("User edited successfully", "Edited User")
        this.ngxLoader.stop();
        this.route.navigate(['/user/userlist'])
      }
      (error: any) => {
        this.toastr.showError("Somthing wrong Please check", "Error occured")
        this.ngxLoader.stop()
        this.route.navigate(['/user/userlist'])
      }
    })
  }

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

}
