import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { ContactDataService } from '../../../ContactData.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Contact } from '../../../contact.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  @Output() sendModalClose = new EventEmitter<boolean>();
  @Input() contact: Contact;
  index: number;
  name = '';
  phone = '';
  email = '';
  organization = '';
  notes = '';
  oldContact: Contact;

  contactServObj: ContactDataService;

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(changes);
  // }

  constructor(contactServObj: ContactDataService, private route: ActivatedRoute, private router: Router) {
    this.contactServObj = contactServObj;
  }
  ngOnInit() {
    // this.contact = this.contactServObj.getContact(this.index);
  }


  onCancel(event) {
    this.sendModalClose.emit(false);
  }


  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      console.log(submittedForm.invalid);
      return;
    }
    console.log(submittedForm);
    const contactToSave: Contact = {name: submittedForm.value.name, phone: submittedForm.value.phone,
      email: submittedForm.value.email, organization: submittedForm.value.organization, notes: submittedForm.value.notes};
    console.log(contactToSave);
    this.index = this.contactServObj.findContactIndex(this.contact);
    // console.log(this.index);
    this.contactServObj.editContactHandler(contactToSave, this.index);
  }
}