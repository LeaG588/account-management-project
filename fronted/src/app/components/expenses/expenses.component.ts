import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-expenses',
  providers: [FormsModule, DataService],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent {
  expenseForm: FormGroup;
  constructor(private dataService: DataService) {
    this.expenseForm = new FormGroup({
      supplier: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      paymentMethods: new FormControl(''),
      amount: new FormControl(''),
      details: new FormControl(''),
      sum: new FormControl('')
    })
  }
  saveExpenses() {
    if (this.expenseForm.valid) {
      this.dataService.addExpenses(this.expenseForm.value).subscribe();
    } else {
      alert('לא מלאת את כל הנתונים');
    }
  }
}






