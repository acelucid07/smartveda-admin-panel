import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import bsCustomFileInput from 'bs-custom-file-input';
import { AdminService } from 'src/app/_services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {
  adminForm:FormGroup;
  Image:string|ArrayBuffer="https://source.unsplash.com/c_GmwfHBDzk/200x200";
  prevImageName:string=''
  imageData:File=null;
  username:string
  constructor(
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
    private route: Router
  ) {
    this.adminForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
      adminRole: new FormControl('', [Validators.required])
    })
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.username = params.get('user')
      if (this.username) {
        this.getAdmindetails()
      }
    })
    this.getAdmindetails()
  }

  ngOnInit(): void {
    bsCustomFileInput.init();
  }

  getAdmindetails(){
    this.adminService.getAdminDetails(this.username).subscribe((res)=>{
      if(res[0].image)
      {this.Image=res[0].image
      this.prevImageName=this.Image.toString().split('.com/')[1]
      }
      this.adminForm.patchValue({
        userName:res[0].username,
        userEmail:res[0].email,
        contactNumber:res[0].phone,
        adminRole:res[0].role
    })
    })
  }

  submit() {
    let payload = {
      username: this.adminForm.controls['userName'].value,
      email: this.adminForm.controls['userEmail'].value,
      phone:this.adminForm.controls['contactNumber'].value,
      // confirmPassword:this.adminForm.controls['confirmPassword'].value,
      role:this.adminForm.controls['adminRole'].value,
      prevImageName:this.prevImageName,
      image:this.imageData
    };
    // console.log(data)
    // this.id?
    this.submitEditedDetails(payload)
    // this.submitDetails(payload)
  //  console.log(payload)
  }

  OnChangesEvent(event) {
    this.imageData = event.target.files[0];
    // console.log(event.target.files[0])
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.Image = data.target.result;
      console.log(data.target.result)
    }
  }
  
submitEditedDetails(recievedValue:any){
let newPayload= Object.assign({},recievedValue)
this.adminService.submitEditedAdminDetail(newPayload)
.subscribe((res)=>{
 if(res)
//  console.log(res);
 
 this.route.navigate(['/roleandpermission/adminlist']);
})
}

// submitDetails(recievedValue:any){
//   let newPayload= Object.assign({},recievedValue)
//   this.adminService
//   .submitAdminDetail(newPayload)
//   .subscribe((res) => {
//     if (res) {
//       this.route.navigate(['/roleandpermission/adminlist']);
//     }
//   });


}
