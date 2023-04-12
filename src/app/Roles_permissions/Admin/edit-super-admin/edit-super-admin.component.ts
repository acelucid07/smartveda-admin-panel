import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import bsCustomFileInput from 'bs-custom-file-input';
import { AdminService } from 'src/app/_services/admin.service';
import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
import { passcheck } from '../password.validator';
import {Location} from '@angular/common'
@Component({
  selector: 'app-edit-super-admin',
  templateUrl: './edit-super-admin.component.html',
  styleUrls: ['./edit-super-admin.component.scss']
})
export class EditSuperAdminComponent implements OnInit {

  roleList:string[]=['Super Admin','Admin']
  id:number;
  title:string;
  adminForm:FormGroup;
  username:string=localStorage.getItem('UserData');
  prevImageName:string='';
  newPassword:boolean=false;
  passwordSubForm:FormGroup;
  oldUsername:string;
  previousRoute:string;
  Image:any="https://source.unsplash.com/c_GmwfHBDzk/200x200"
  imageData: any=null;
  
   get passchecker() : boolean {
   return this.adminForm.getError('mismatch')
  }
  get passwordFormCheck(): boolean {
    let status:boolean
    if (this.newPassword) {
      status = this.passwordSubForm.valid ? true : false
      console.log(status)
      return status
    }
    else
    return true
  }

  constructor(private activatedroute: ActivatedRoute,
    private adminService: AdminService,
    private toastr: ToastrMsgService,
    private route: Router,
    private location:Location) {
    // this.previousRoute= this.route.getCurrentNavigation().previousNavigation.finalUrl.toString()
    this.adminForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
      adminRole: new FormControl('', [Validators.required]),
    })

    this.passwordSubForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    }, passcheck)

    this.getSuperAdmindetails()
  }

  ngOnInit(): void {
    bsCustomFileInput.init();
    console.log()
  }

  // getAdminDetail(){
  //   this.adminService.getAdminDetails(this.id).subscribe((res)=>{
  //     console.log(res[0])
  //     this.adminForm.patchValue({
  //       userName:res[0].username,
  //       userEmail:res[0].email,
  //       contactNumber:res[0].contactNumber,
  //       password:res[0].password,
  //       confirmPassword:res[0].password,
  //       adminRole:res[0].role
  //   })
  //   })
  //   }
  getSuperAdmindetails(){
    this.adminService.getAdminDetails(this.username).subscribe((res)=>{
      if (res[0].image) {
        this.Image = res[0].image
        this.prevImageName = this.Image.toString().split('.com/')[1]
      }
      this.oldUsername=res[0].username
      this.adminForm.patchValue({
        userName:res[0].username,
        userEmail:res[0].email,
        contactNumber:res[0].phone,
        adminRole:res[0].role
    })
    console.log(res)

    })
  }

  submit() {
    (this.adminForm.controls['userName'].value!=this.oldUsername)?localStorage.setItem('UserData',this.adminForm.controls['userName'].value):null
    let payload = {
      username: this.adminForm.controls['userName'].value,
      email: this.adminForm.controls['userEmail'].value,
      phone: this.adminForm.controls['contactNumber'].value,
      // confirmPassword:this.adminForm.controls['confirmPassword'].value,
      prevImageName:this.prevImageName,
      role: this.adminForm.controls['adminRole'].value,
      image: this.imageData
    };
    if(this.passwordSubForm.controls['password'].value)
    {Object.assign(payload,{password:this.passwordSubForm.controls['password'].value})} 
    // else
    // console.log(data)
    // this.id?this.submitEditedDetails(payload):
    this.submitDetails(payload)
  }

  OnChangesEvent(event) {
    this.imageData = event.target.files[0];
    // console.log(event.target.files)
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (data) => {
      this.Image = data.target.result;
      console.log(data.target.result)
    }
  }
// submitEditedDetails(recievedValue:any){
// let newPayload= Object.assign({},recievedValue)
// this.adminService.submitEditedAdminDetail(newPayload,this.id).subscribe((res)=>{
//  if(res)
//  this.route.navigate(['/roleandpermission/adminlist']);
// })
// }

navigateBack(){
// this.route.navigateByUrl(this.previousRoute);
this.location.back();
}

  submitDetails(recievedValue: any) {
    let newPayload = Object.assign({}, recievedValue)
    this.adminService.submitEditedSuperAdminDetail(newPayload)
      .subscribe((res) => {
        console.log(res)
        if (res) {
          this.toastr.showSuccess('Details Updated Successfully', 'Edited');
          // this.getSuperAdmindetails()
          // this.navigateBack()
          window.location.reload() 
          // this.route.navigate(['/'])
        }
      });
  } 

  // submitDetailsWithPassword(recievedValue: any){
  //   let newPayload = Object.assign({}, recievedValue)
  //   this.adminService.submitAdminDetail(newPayload)
  //     .subscribe((res) => {
  //       console.log(res)
  //       if (res) {
  //         this.route.navigate(['/roleandpermission/adminlist']);
  //       }
  //     });
  // }
}
