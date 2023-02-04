import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
   book(){
    Swal.fire("Booked");
    this.router.navigate(['home']);
   }


}
