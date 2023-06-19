import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {
  contact: {id, name, description , email} = {id: null, name: '', description: '', email: ''};
  constructor( private dataService: DataService) { }

  ngOnInit() {
  }
  createContact() {
    console.log(this.contact);
    this.dataService.createConatct(this.contact);
    this.contact = {id: null, name: '', description: '', email: ''};


  }

}
