import { Invoice } from './classes/invoice.js';
import { ListTempelate } from './classes/ListTempelate.js';
import { Payment } from './classes/payment.js';
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice("Yoshi", "Web work", 250);
// docTwo = new Payment("mario", "Plimbing work", 300);
// let docs: HasFormatter[] = []
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice("mario", "works on mario game", 500);
// const invTwo = new Invoice("luigi", "works on luigi game", 900);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((invoice)=>{
//     console.log(invoice.client,  invoice.amount, invoice.format());
// })
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// grabbing input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list tempelate instance
const ul = document.querySelector(".item-list");
const list = new ListTempelate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
