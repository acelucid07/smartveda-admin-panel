import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { modulePermissionList } from 'src/app/DummyData/permissionList';
import { PermissionService } from 'src/app/_services/permission.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
})
export class RolesListComponent implements OnInit {
  @ViewChild('dt') dt:Table
  modulePermissionList:any[]
  constructor(private dialog:MatDialog,private permissionService:PermissionService) {
    this.getPermittedModuleList()
  }

  ngOnInit(): void {}
  
  openDialog(name: any) {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.deleteAdminData(name)
      }
    });
  }

  deleteAdminData(name:string) {
    console.log(name)
    // this.ngxLoader.start();
    this.permissionService.deletePermissionDetails(name).subscribe(res => {
      if (res) {
        // this.toastr.showSuccess("lead deleted successfully", "lead deleted")
        this.getPermittedModuleList();
      }
    })
  }

  getPermittedModuleList(){
    this.permissionService.getPermittedModuleList().subscribe(res => {
     this.modulePermissionList=res
     console.log( this.modulePermissionList)
    })
  }

  globalSearch(value,mode)
  {
    this.dt.filterGlobal(value,mode)
  }
}
