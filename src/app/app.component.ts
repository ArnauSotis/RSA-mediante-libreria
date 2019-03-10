import { Component, OnInit } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'frontend-SC2';
  title2;

ngOnInit(): void{

  const NodeRSA = require('node-rsa');

  const key = new NodeRSA({b: 512});
   
  const text = 'Hello RSA!';
const encrypted = key.encrypt(text, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log('decrypted: ', decrypted);
this.title = encrypted;
this.title2 = decrypted;
  
}

}
