import { Injectable } from '@angular/core';
import { Customer, Expense, Receipt } from '../modules/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'http://127.0.0.1:3000'

  constructor(private http: HttpClient) { }

  get AllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(`${this.baseUrl}/customer/findCustomer`);
  }

  addReceipt(newReceipt: Receipt): Observable<Receipt> {
    return this.http.post<Receipt>(`${this.baseUrl}/receipt/addReceipt`,
      newReceipt, {
      headers: { 'content-type': 'application/json' }
    })
  }
  addExpenses(newExpense: Expense): Observable<Receipt> {
    return this.http.post<Receipt>(`${this.baseUrl}/expenses/addExpense`,
      newExpense, {
      headers: { 'content-type': 'application/json' }
    })
  }
  addCustomer(newCustomer: Customer) {
    return this.http.post<Customer>(`${this.baseUrl}/customer/addCustomer`,
      newCustomer, {
      headers: { 'content-type': 'application/json' }
    }
    )
  }
  findCustomer(filter: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/findCustomer/${filter}`);
  }
  getExpenseByYear(year: number): Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(`${this.baseUrl}/expenses/getByYear/${year}`);
  }
  getExpenseByMonth(month: number): Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(`${this.baseUrl}/expenses/getByMonth/${month}`);
  }
  getExpenseBy2date(startDate: Date, endDate: Date): Observable<Array<Expense>> {
    return this.http.get<Array<Expense>>(`${this.baseUrl}/expenses/getBy2date/${startDate}/${endDate}`);
  }
  getReceiptByYear(year: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getByYear/${year}`);
  }
  getReceiptByMonth(month: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getByMonth/${month}`);
  }
  getReceiptBy2date(startDate: Date, endDate: Date): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getBy2date/${startDate}/${endDate}`);
  }
  getReceiptByCust(customer: string): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getByCust/${customer}`);
  }
}