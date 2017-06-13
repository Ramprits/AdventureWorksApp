import { Injectable } from '@angular/core';

declare let toastr: any;
@Injectable()
export class ToastrService {
  constructor() { }
  success(messege: string, title?: string) {
    toastr.success(messege, title);
  }
  warning(messege: string, title?: string) {
    toastr.warning(messege, title);
  }
  info(messege: string, title?: string) {
    toastr.info(messege, title);
  }
  error(messege: string, title?: string) {
    toastr.error(messege, title);
  }

}
