import { ServiceService } from './service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgForm} from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {lienhe} from '../lienhe/lienhe';
import '../../assets/smtp.js';

declare let Email: any;
@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {
  lienhe: any;

  constructor(private service:ServiceService,
    private formBuilder: FormBuilder,

    ) { }
    @Input() landingpagejava:any;
    landingpage_id:number;
    landingpage_name:string;
    landingpage_email:string;
    landingpage_phone:string;
    landingpage_note:string;

    ngOnInit(): void {
      this.landingpage_id=this.landingpagejava.landingpage_id;
      this.landingpage_name=this.landingpagejava.landingpage_name;
      this.landingpage_email=this.landingpagejava.landingpage_email;
      this.landingpage_phone=this.landingpagejava.landingpage_phone;
      this.landingpage_note=this.landingpagejava.landingpage_note;
    }
    addLandingpageJava(){
      var val={landingpage_id:this.landingpage_id,
        landingpage_name:this.landingpage_name,
        landingpage_email:this.landingpage_email,
        landingpage_phone:this.landingpage_phone,
        landingpage_note:this.landingpage_note
      };
      this.service.addSupport(val).subscribe(res=>
        { alert(res.toString());}
        );


    }

    public sendEmail(e: Event) {
      e.preventDefault();
      emailjs.sendForm('service_23g7s9y', 'template_xj4898t', e.target as HTMLFormElement, 'user_xsD6H0fFBUdRNfY1dPiWD')
        .then((result: EmailJSResponseStatus) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }



