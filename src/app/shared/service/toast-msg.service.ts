import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastMsgService {
  constructor(private toastr: ToastrService) {}

  public notifyMessage(type: string, message: string): void {
    switch (type) {
      case 'success':
        this.toastr.success(message);
        break;
      case 'warning':
        this.toastr.warning(message);
        break;
      default:
        this.toastr.error(message);
        break;
    }
  }
}
