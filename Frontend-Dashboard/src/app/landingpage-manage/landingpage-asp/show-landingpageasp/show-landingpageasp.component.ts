import { Component, OnInit } from '@angular/core';
import { LandingpageService } from './../../landingpage.service';
@Component({
  selector: 'app-show-landingpageasp',
  templateUrl: './show-landingpageasp.component.html',
  styleUrls: ['./show-landingpageasp.component.less']
})
export class ShowLandingpageaspComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  LandingpageAspList: any=[];

  ModalTitle:string;

  AcivateAddEditLandingPageAsp:boolean=false;
  landingpageasp:any;

  ngOnInit(): void {
    this.refreshLandingpageAspList();
  }

  addClick(){
    this.landingpageasp={landingpage_id:0,
      landingpage_name:"",
      landingpage_email:"",
      landingpage_phone:"",
      landingpage_note:""

    }

    this.ModalTitle="Thêm Mới";
    this.AcivateAddEditLandingPageAsp=true;
  }

  closeClick(){
    this.AcivateAddEditLandingPageAsp=false;
    this.refreshLandingpageAspList();
  }

  editClick(item){
    this.landingpageasp=item;
    this.ModalTitle="Sửa Thông Tin Học Viên";
    this.AcivateAddEditLandingPageAsp=true;
  }

  deleteClick(item){
    if(confirm('Bạn Có Chắc Chắn Muốn Xóa !!!')){
      this.service.deleteLandingpageAsp(item.landingpage_id).subscribe(
        data=>{
          alert(data.toString());
          this.refreshLandingpageAspList();
        }
      )
    };
  }

  refreshLandingpageAspList(){
    this.service.getLandingpageAspList().subscribe(data=>
      {this.LandingpageAspList=data;}
    )
  };
}
