import { Component, Input, OnInit } from '@angular/core';
import { LandingpageService } from '@app/landingpage-manage/landingpage.service';

@Component({
  selector: 'app-add-edit-landingpageasp',
  templateUrl: './add-edit-landingpageasp.component.html',
  styleUrls: ['./add-edit-landingpageasp.component.less']
})
export class AddEditLandingpageaspComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  @Input() landingpageasp:any;
  landingpage_id:string;
  landingpage_name:string;
  landingpage_email:string;
  landingpage_phone:string;
  landingpage_note:string;

  ngOnInit(): void {
    this.landingpage_id=this.landingpageasp.landingpage_id;
    this.landingpage_name=this.landingpageasp.landingpage_name;
    this.landingpage_email=this.landingpageasp.landingpage_email;
    this.landingpage_phone=this.landingpageasp.landingpage_phone;
    this.landingpage_note=this.landingpageasp.landingpage_note;
  }

  addLandingpageAsp(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.addLandingpageAsp(val).subscribe(res=>
      { alert(res.toString());}


      );
  }

  updateLandingpageAsp(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.updateLandingpageAsp(val).subscribe(res=>
      { alert(res.toString());}


      );
  }


}
