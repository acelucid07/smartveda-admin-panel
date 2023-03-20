import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsertypeService } from 'src/app/_services/usertype.service';

@Component({
  selector: 'app-add-edit-usertype',
  templateUrl: './add-edit-usertype.component.html',
  styleUrls: ['./add-edit-usertype.component.scss'],
})
export class AddEditUserTypeComponent implements OnInit {
  sidebarSpacing: string = 'contracted';
  usertypeForm: FormGroup;
  title:string;
  id:number;
  constructor(
    private usertypeService: UsertypeService,
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute:ActivatedRoute) {
      this.usertypeForm = fb.group({
        usertype: ['', [Validators.required]],
        status: ['', [Validators.required]],
      });
      
      this.activatedRoute.queryParamMap.subscribe((params)=>{
      this.id = parseInt(params.get('serialno'))
      if(this.id)
      {
        this.title = 'Edit';
        this.getUsertypeDetail()
      }
      else{
        this.title = "Add";
      }
    })
   
  }
  statusList: string[] = ['Active', 'Inactive'];
  ngOnInit(): void {}

  onToggleSidebar(sidebarState: any) {
    if (sidebarState === 'open') {
      this.sidebarSpacing = 'contracted';
    } else {
      this.sidebarSpacing = 'expanded';
    }
  }

  getUsertypeDetail(){
    this.usertypeService.getUsertypeDetails(this.id).subscribe((res)=>{
      console.log(res[0].ratingCriteria)
      this.usertypeForm.patchValue({
      usertype:res[0].usertype,
      status:res[0].status
    })
    })
    }

  submit() {
    let payload = {
      usertype: this.usertypeForm.controls['usertype'].value,
      status: this.usertypeForm.controls['status'].value,
    };
    this.id?this.submitEditedDetails(payload):this.submitDetails(payload)
   
  }


submitEditedDetails(recievedValue:any){
let newPayload= Object.assign({},recievedValue)
this.usertypeService.submitEditedUsertypeDetail(newPayload,this.id).subscribe((res)=>{
 if(res)
 this.route.navigate(['/usertypesettings/usertypelist']);
})
}

submitDetails(recievedValue:any){
  let newPayload= Object.assign({},recievedValue)
  this.usertypeService
  .submitUsertypeDetail(newPayload)
  .subscribe((res) => {
    if (res) {
      this.route.navigate(['/usertypesettings/usertypelist']);
    }
  });
}

}
