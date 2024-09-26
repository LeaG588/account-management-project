import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Customer } from '../../modules/interfaces';

@Component({
  selector: 'app-recipt',
  providers: [FormsModule, DataService],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './recipt.component.html',
  styleUrl: './recipt.component.scss'
})


export class ReceiptComponent {
  addingNewCustomer: boolean = false
  receiptForm: FormGroup
  customers: Array<Customer> = []
  newCustomerName: string = ''
  constructor(private dataService: DataService) {
    this.dataService.AllCustomers.subscribe((data: Customer[]) => {
      this.customers = data

    })
    this.receiptForm = new FormGroup({
      customer: new FormControl(''),
      amount: new FormControl(''),
      sum:new FormControl(''),
      paymentMethods: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      details: new FormControl(''),
      description: new FormControl(''),
    })
  }

  addCustomer() {
    const newCustomer: Customer = {
      name: this.newCustomerName,
      number: (this.customers.length + 1).toString()
    };

    this.dataService.addCustomer(newCustomer).subscribe(
      (response) => {
        this.customers.push(newCustomer);
        this.newCustomerName = '';
        this.receiptForm.get('customer')?.setValue(null);
        this.addingNewCustomer = false;
      },
      (error) => {
        console.log("Error adding customer", error);
      }
    );
  }
  saveReceipt() {
    if (this.receiptForm.valid) {
      this.dataService.addReceipt(this.receiptForm.value).subscribe(
        (error) => {
          console.error('Error adding receipt:', error);
        }
      );
    } else {
      alert('לא מלאת את כל הנתונים');
    }
  }
}







