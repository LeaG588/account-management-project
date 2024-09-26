import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Customer } from '../../modules/interfaces';

@Component({
  selector: 'app-data-segmenation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-segmentation.component.html',
  styleUrl: './data-segmentation.component.scss',
})
export class DataSegmentationComponent {
  startDate: any;
  endDate: any;
  cust: any;
  value: any;
  customers: Array<Customer> = [];
  valueResponse: any = [];
  flagExpense: boolean = false;
  flagReceipt: boolean = false;
  flagYear: boolean = false;
  flagMonth: boolean = false;
  flag2date: boolean = false;
  flagCust: boolean = false;
  flagDisplay: boolean = false;
  constructor(private dataService: DataService) {
    this.dataService.AllCustomers.subscribe((data: Customer[]) => {
      this.customers = data;
    })
  }

  getByYear() {
    const value = (this.value.target as HTMLInputElement).value
    const year = parseInt(value)
    if (this.flagReceipt) {
      this.dataService.getReceiptByYear(year).subscribe((response) => {
        this.valueResponse = response;
        this.flagDisplay = true;
      })
    }
    else
      if (this.flagExpense) {
        this.dataService.getExpenseByYear(year).subscribe((response) => {
          this.valueResponse = response;
          this.flagDisplay = true;
        })
      }
  }
  getByMonth() {
    const value = (this.value.target as HTMLInputElement).value
    const month = parseInt(value)
    if (this.flagExpense) {
      this.dataService.getExpenseByMonth(month).subscribe((response) => {
        this.valueResponse = response;
        this.flagDisplay = true;
      })
    }
    else if (this.flagReceipt) {
      this.dataService.getReceiptByMonth(month).subscribe((response) => {
        this.valueResponse = response;
        this.flagDisplay = true;
      })
    }
  }
  getBy2date() {
    this.startDate = (this.startDate.target as HTMLInputElement).value;
    this.endDate = (this.endDate.target as HTMLInputElement).value;
    if (this.flagExpense) {
      this.dataService.getExpenseBy2date(new Date(this.startDate), new Date(this.endDate)).subscribe((response) => {
        this.valueResponse = response;
        this.flagDisplay = true;
      })
    }
    else if (this.flagReceipt) {
      this.dataService.getReceiptBy2date(new Date(this.startDate), new Date(this.endDate)).subscribe((response) => {
        this.valueResponse = response;
        this.flagDisplay = true;
      })
    }
  }
  getByCust(customer: any) {
    const cust = (customer.target as HTMLInputElement).value;
    this.dataService.getReceiptByCust(cust).subscribe((response) => {
      this.valueResponse = response;
      console.log(response);
      this.flagDisplay = true;
    })
  }
}

