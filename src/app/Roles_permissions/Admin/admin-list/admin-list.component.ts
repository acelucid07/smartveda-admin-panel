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
  image:any="https://source.unsplash.com/c_GmwfHBDzk/200x200"
  @ViewChild('dt') dt:Table|undefined
  constructor(private dialog:MatDialog
    ,private adminService: AdminService) {
    this.getAdminListDetail();
  }

  ngOnInit(): void {}

  getAdminListDetail() {
    this.adminService.getAdminList().subscribe((res:any) => {
      this.adminDetails = res.data;
      console.log(this.adminDetails)
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
        console.log("admin data deleted")
        // this.toastr.showSuccess("lead deleted successfully", "lead deleted")
        this.getAdminListDetail();
      }
    })
  }
}
