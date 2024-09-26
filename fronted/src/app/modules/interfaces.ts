


export interface Receipt {
    receiptNumber: number,
    customer: Customer,
    sum: number,
    paymentMethods:string,
    date:Date,
    details:string
}
export interface Customer {
    name: string,
    number:string
}
export interface Expense {
    date: Date,
    sum:string,
    amount:number,
    provider:string,
    paymentMethods:string,
    details:string
}