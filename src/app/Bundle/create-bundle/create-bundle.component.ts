import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ToastrMsgService } from 'src/app/_services/toastr-msg.service';
// import { Table } from 'primeng/table';
@Component({
  selector: 'app-create-bundle',
  templateUrl: './create-bundle.component.html',
  styleUrls: ['./create-bundle.component.scss']
})
export class CreateBundleComponent implements OnInit {
    sidebarSpacing:String;
    
    id: any;
    title: string = " ";
    editMode: boolean = false;
    constructor(private activateRoute: ActivatedRoute) { }
    ngOnInit(): void {
      this.sidebarSpacing = 'contracted';
      
      this.activateRoute.queryParamMap.subscribe(params => {
        this.id = params.get('id');
        if (this.id && this.id != undefined) {
          this.editMode = true
          this.title = "Edit Bundle"
        } else {
          this.editMode = false
          this.title = "Add New Bundle"
        }
      });
     }
    onToggleSidebar(sidebarState: any) {
      if (sidebarState === 'open') {
        this.sidebarSpacing = 'contracted';
      } else {
        this.sidebarSpacing = 'expanded';
      }
    }
}