import { Component, Input, OnInit } from '@angular/core';
import { LandingpageService } from '@app/landingpage-manage/landingpage.service';

@Component({
  selector: 'app-add-edit-landingpagemobi',
  templateUrl: './add-edit-landingpagemobi.component.html',
  styleUrls: ['./add-edit-landingpagemobi.component.less']
})
export class AddEditLandingpagemobiComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  @Input() landingpagemobi:any;
  landingpage_id:string;
  landingpage_name:string;
  landingpage_email:string;
  landingpage_phone:string;
  landingpage_note:string;

  ngOnInit(): void {
    this.landingpage_id=this.landingpagemobi.landingpage_id;
    this.landingpage_name=this.landingpagemobi.landingpage_name;
    this.landingpage_email=this.landingpagemobi.landingpage_email;
    this.landingpage_phone=this.landingpagemobi.landingpage_phone;
    this.landingpage_note=this.landingpagemobi.landingpage_note;
  }

  addLandingpageMobi(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.addLandingpageMobi(val).subscribe(res=>
      { alert(res.toString());}


      );
  }

  updateLandingpageMobi(){
    var val={landingpage_id:this.landingpage_id,
      landingpage_name:this.landingpage_name,
      landingpage_email:this.landingpage_email,
      landingpage_phone:this.landingpage_phone,
      landingpage_note:this.landingpage_note
    };
    this.service.updateLandingpageMobi(val).subscribe(res=>
      { alert(res.toString());}


      );
  }
}
