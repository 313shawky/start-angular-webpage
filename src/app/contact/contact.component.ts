import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameInput:string = '';
  emailInput:string = '';
  phoneInput:string = '';
  messageInput:string = '';

  validateName(input:string):string {
    return input == '' ? '. Please enter your name.' : '';
  }

  validateEmail(input : string):string{
    const emailPattern = /^[\w!@#$%^&-*\/+?]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    if(input == ''){
      return '. Please enter your email address.';
    }
    else if(emailPattern.test(input) == false){
      return '. Not a valid email address';
    }
    return '';
  }

  validatePhone(input : string):string {
    return input == '' ? 'Please enter your phone number.' : '';
  }

  validateMessage(input : string):string {
    return input == '' ? 'Please enter a message.' : '';
  }
}
