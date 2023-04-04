import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import bsCustomFileInput from 'bs-custom-file-input';
import { AdminService } from 'src/app/_services/admin.service';
import { passcheck } from '../password.validator';
@Component({
  selector: 'app-edit-super-admin',
  templateUrl: './edit-super-admin.component.html',
  styleUrls: ['./edit-super-admin.component.scss']
})
export class EditSuperAdminComponent implements OnInit {
  constructor()
  {}

  ngOnInit(): void {}

//   constructor(private activatedroute:ActivatedRoute,
//     private adminService:AdminService,
//     private route:Router) { 
//     this.adminForm=new FormGroup({
//       userName: new FormControl('',[Validators.required]),
//       userEmail: new FormControl('',[Validators.required]),
//       contactNumber: new FormControl('',[Validators.required]),
//       password: new FormControl('',[Validators.required]),
//       confirmPassword: new FormControl('',[Validators.required]),
//       adminRole: new FormControl('',[Validators.required]),
//     },passcheck)
//   }


//   roleList:string[]=['Super Admin','Admin']
//   id:number;
//   title:string;
//   adminForm:FormGroup
//   Image:any="https://source.unsplash.com/c_GmwfHBDzk/200x200"
//   imageData: any=null;
  
//    get passchecker() : boolean {
//    return this.adminForm.getError('mismatch')
//   }

//   ngOnInit(): void {
//     bsCustomFileInput.init();
//     console.log()
//   }

//   // getAdminDetail(){
//   //   this.adminService.getAdminDetails(this.id).subscribe((res)=>{
//   //     console.log(res[0])
//   //     this.adminForm.patchValue({
//   //       userName:res[0].username,
//   //       userEmail:res[0].email,
//   //       contactNumber:res[0].contactNumber,
//   //       password:res[0].password,
//   //       confirmPassword:res[0].password,
//   //       adminRole:res[0].role
//   //   })
//   //   })
//   //   }
//   getAdmindetails(){
//     this.adminService.getAdminDetails(this.username).subscribe((res)=>{
//       if(res[0].image)
//       this.Image=res[0].image
//       this.adminForm.patchValue({
//         userName:res[0].username,
//         userEmail:res[0].email,
//         contactNumber:res[0].phone,
//         adminRole:res[0].role
//     })
//    this.prevImageName=this.Image.toString().split('.com/')[1]
//     })
//   }

//   submit() {
//     let payload = {
//       username: this.adminForm.controls['userName'].value,
//       email: this.adminForm.controls['userEmail'].value,
//       phone: this.adminForm.controls['contactNumber'].value,
//       password: this.adminForm.controls['password'].value,
//       // confirmPassword:this.adminForm.controls['confirmPassword'].value,
//       role: this.adminForm.controls['adminRole'].value,
//       image: this.imageData
//     };
//     // console.log(data)
//     // this.id?this.submitEditedDetails(payload):
//     this.submitDetails(payload)
//   }

//   OnChangesEvent(event) {
//     this.imageData = event.target.files[0];
//     // console.log(event.target.files)
//     var reader = new FileReader();
//     reader.readAsDataURL(event.target.files[0]);
//     reader.onload = (data) => {
//       this.Image = data.target.result;
//       console.log(data.target.result)
//     }
//   }
// // submitEditedDetails(recievedValue:any){
// // let newPayload= Object.assign({},recievedValue)
// // this.adminService.submitEditedAdminDetail(newPayload,this.id).subscribe((res)=>{
// //  if(res)
// //  this.route.navigate(['/roleandpermission/adminlist']);
// // })
// // }

//   submitDetails(recievedValue: any) {
//     let newPayload = Object.assign({}, recievedValue)
//     this.adminService.submitAdminDetail(newPayload)
//       .subscribe((res) => {
//         console.log(res)
//         if (res) {
//           this.route.navigate(['/roleandpermission/adminlist']);
//         }
//       });
//   }

  
}
