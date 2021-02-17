import { Component, Input, OnInit } from '@angular/core';
import { LandingpageService } from '@app/landingpage-manage/landingpage.service';

@Component({
  selector: 'app-add-edit-landingpagephp',
  templateUrl: './add-edit-landingpagephp.component.html',
  styleUrls: ['./add-edit-landingpagephp.component.less']
})
export class AddEditLandingpagephpComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  @Input() landingpagephp:any;
  landingpage_id:string;
  landingpage_name:string;
  landingpage_email:string;
  landingpage_phone:string;
  landingpage_note:string;

  ngOnInit(): void {
    this.landingpage_id=this.landingpagephp.landingpage_id;
    this.landingpage_name=this.landingpagephp.landingpage_name;
    this.landingpage_email=this.landingpagephp.landingpage_email;
    this.landingpage_phone=this.landingpagephp.landingpage_phone;
    this.landingpage_note=this.landingpagephp.landingpage_note;
  }

  addLandingpagePhp(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.addLandingpagePhp(val).subscribe(res=>
      { alert(res.toString());}


      );
  }

  updateLandingpagePhp(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.updateLandingpagePhp(val).subscribe(res=>
      { alert(res.toString());}


      );
  }


}
