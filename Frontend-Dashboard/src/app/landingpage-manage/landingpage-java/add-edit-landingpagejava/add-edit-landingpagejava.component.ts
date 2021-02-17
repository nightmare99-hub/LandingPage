import { LandingpageService } from './../../landingpage.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-edit-landingpagejava',
  templateUrl: './add-edit-landingpagejava.component.html',
  styleUrls: ['./add-edit-landingpagejava.component.less']
})
export class AddEditLandingpagejavaComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  @Input() landingpagejava:any;
  landingpage_id:string;
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
    this.service.addLandingpageJava(val).subscribe(res=>
      { alert(res.toString());}


      );
  }

  updateLandingpageJava(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.updateLandingpageJava(val).subscribe(res=>
      { alert(res.toString());}


      );
  }

}
