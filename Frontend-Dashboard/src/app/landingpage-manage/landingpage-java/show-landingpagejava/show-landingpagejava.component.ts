import { LandingpageService } from './../../landingpage.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-landingpagejava',
  templateUrl: './show-landingpagejava.component.html',
  styleUrls: ['./show-landingpagejava.component.less']
})
export class ShowLandingpagejavaComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  LandingpageJavaList: any=[];

  ModalTitle:string;

  AcivateAddEditLandingPageJava:boolean=false;
  landingpagejava:any;

  ngOnInit(): void {
    this.refreshLandingpageJavaList();
  }

  addClick(){
    this.landingpagejava={landingpage_id:0,
      landingpage_name:"",
      landingpage_email:"",
      landingpage_phone:"",
      landingpage_note:""

    }

    this.ModalTitle="Thêm Mới";
    this.AcivateAddEditLandingPageJava=true;
  }

  closeClick(){
    this.AcivateAddEditLandingPageJava=false;
    this.refreshLandingpageJavaList();
  }

  editClick(item){
    this.landingpagejava=item;
    this.ModalTitle="Sửa Thông Tin Học Viên";
    this.AcivateAddEditLandingPageJava=true;
  }

  deleteClick(item){
    if(confirm('Bạn Có Chắc Chắn Muốn Xóa !!!')){
      this.service.deleteLandingpageJava(item.landingpage_id).subscribe(
        data=>{
          alert(data.toString());
          this.refreshLandingpageJavaList();
        }
      )
    };
  }

  refreshLandingpageJavaList(){
    this.service.getLandingpageJavaList().subscribe(data=>
      {this.LandingpageJavaList=data;}
    )
  };

}
