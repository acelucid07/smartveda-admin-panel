import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrMsgService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(message:any, title:any){
    this.toastrService.success(message, title);
  }

  showError(message:any, title:any) {
    this.toastrService.error(message, title);
  }

  showWarning(message:any, title:any) {
    this.toastrService.warning(message, title);
  }
}
