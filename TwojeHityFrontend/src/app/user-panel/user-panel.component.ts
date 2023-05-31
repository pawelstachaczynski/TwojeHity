import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

constructor( private router: Router, private toastr: ToastrService) {}
  unauthorized = false;
  isActive(url: string) : boolean {
    return this.router.isActive(url, true);
  }
  ngOnInit(): void {}
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
