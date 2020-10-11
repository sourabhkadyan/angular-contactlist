import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactDataService } from '../../ContactData.service';
import { Contact } from '../../contact.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-component',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  @Input() contact;
  @Input() index;
  modalShow = false;
  showEditBool: boolean = false;

  contactServObj: ContactDataService;

  constructor(contactServObj: ContactDataService, private router: Router, private route: ActivatedRoute) {
    this.contactServObj = contactServObj;
  }

    showModalHandler(event) {
    // this.backDropShow = true;
    this.modalShow = true;
    // this.router.navigate(['/contactList', this.index, 'edit']);
    // this.modalToShow.showModalHandler();
  }
  closeModalHandler(negativeFeedback) {
    // this.backDropShow = false;
    this.modalShow = negativeFeedback;
  }

}
