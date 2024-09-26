import { Routes } from '@angular/router';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ReceiptComponent } from './components/recipt/recipt.component';


export const routes: Routes = [
    {path:'receipt',component:ReceiptComponent},
    {path:'expenses',component:ExpensesComponent},
    {path:'data',component:DataSegmentationComponent}

];
