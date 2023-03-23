import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Table } from 'primeng/table';
import { AdminService } from 'src/app/_services/admin.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss'],
})
export class AdminListComponent implements OnInit {
  adminDetails: any[];
  @ViewChild('dt') dt:Table|undefined
  constructor(private dialog:MatDialog
    ,private adminService: AdminService) {
    this.getAdminListDetail();
  }

  ngOnInit(): void {}

  getAdminListDetail() {
    this.adminService.getAdminList().subscribe((res) => {
      this.adminDetails = res;
    });
  }

  globalSearch(value,mode){
    this.dt.filterGlobal(value,mode)
  }

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
    this.adminService.deleteAdminDetails(name).subscribe(res => {
      if (res) {
        // this.toastr.showSuccess("lead deleted successfully", "lead deleted")
        this.getAdminListDetail();
      }
    })
  }
}
