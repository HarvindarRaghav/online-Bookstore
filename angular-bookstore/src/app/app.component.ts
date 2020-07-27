import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
books:Book[] =[ 
  {
    sku: "text-101",
    name: "C# Crash course",
    description: "Learn C# Programming",
    unitPrice: 900,
    imageUrl:"assests/images/books/text-101",
    active: true,
    unitsInStock: 100,
    createdOn: new Date(),
    UpdatedOn: null,
  },
  {
    sku: "text-102",
    name: "java Crash course",
    description: "Learn java Programming",
    unitPrice: 700,
    imageUrl:"assests/images/books/text-101",
    active: false,
    unitsInStock: 100,
    createdOn: new Date(),
    UpdatedOn: null,
  },

]
}
