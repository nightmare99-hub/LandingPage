import { Component, OnInit } from '@angular/core';
import { LandingpageService } from '@app/landingpage-manage/landingpage.service';

@Component({
  selector: 'app-show-landingpagephp',
  templateUrl: './show-landingpagephp.component.html',
  styleUrls: ['./show-landingpagephp.component.less']
})
export class ShowLandingpagephpComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  LandingpagePhpList: any=[];

  ModalTitle:string;

  AcivateAddEditLandingPagePhp:boolean=false;
  landingpagephp:any;

  ngOnInit(): void {
    this.refreshLandingpagePhpList();
  }

  addClick(){
    this.landingpagephp={landingpage_id:0,
      landingpage_name:"",
      landingpage_email:"",
      landingpage_phone:"",
      landingpage_note:""

    }

    this.ModalTitle="Thêm Mới";
    this.AcivateAddEditLandingPagePhp=true;
  }

  closeClick(){
    this.AcivateAddEditLandingPagePhp=false;
    this.refreshLandingpagePhpList();
  }

  editClick(item){
    this.landingpagephp=item;
    this.ModalTitle="Sửa Thông Tin Học Viên";
    this.AcivateAddEditLandingPagePhp=true;
  }

  deleteClick(item){
    if(confirm('Bạn Có Chắc Chắn Muốn Xóa !!!')){
      this.service.deleteLandingpagePhp(item.landingpage_id).subscribe(
        data=>{
          alert(data.toString());
          this.refreshLandingpagePhpList();
        }
      )
    };
  }

  refreshLandingpagePhpList(){
    this.service.getLandingpagePhpList().subscribe(data=>
      {this.LandingpagePhpList=data;}
    )
  };

}
