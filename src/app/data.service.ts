import { Injectable } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  contacts = [
    {id: 1, name : 'contact001', description: 'conatct 0001 des' , email: 'email 001'},
    {id: 2, name : 'contact002', description: 'conatct 0002 des' , email: 'email 002'},
    {id: 3, name : 'contact003', description: 'conatct 0003 des' , email: 'email 003'},
    {id: 4, name : 'contact004', description: 'conatct 0004 des' , email: 'email 004'}
  ];

  constructor() { }

  public getConatcts(): Array<{id, name , description, email} > {
    return this.contacts;
  }

  public createConatct(contact: {id, name , description, email}) {
     this.contacts.push(contact);
  }


}
