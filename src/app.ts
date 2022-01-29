import {Invoice} from './classes/invoice.js'
import { ListTempelate } from './classes/ListTempelate.js';
import { Payment } from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';


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


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//console.log(form.children);

// grabbing input fields

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list tempelate instance
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTempelate(ul);

form.addEventListener('submit', (e:Event)=>{

    e.preventDefault();

    let doc : HasFormatter;

    let values : [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');

    
})


