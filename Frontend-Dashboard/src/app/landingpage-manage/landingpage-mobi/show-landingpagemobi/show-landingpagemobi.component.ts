import { Component, OnInit } from '@angular/core';
import { LandingpageService } from '@app/landingpage-manage/landingpage.service';

@Component({
  selector: 'app-show-landingpagemobi',
  templateUrl: './show-landingpagemobi.component.html',
  styleUrls: ['./show-landingpagemobi.component.less']
})
export class ShowLandingpagemobiComponent implements OnInit {

  constructor(private service:LandingpageService) { }

  LandingpageMobiList: any=[];

  ModalTitle:string;

  AcivateAddEditLandingPageMobi:boolean=false;
  landingpagemobi:any;

  ngOnInit(): void {
    this.refreshLandingpageMobiList();
  }

  addClick(){
    this.landingpagemobi={landingpage_id:0,
      landingpage_name:"",
      landingpage_email:"",
      landingpage_phone:"",
      landingpage_note:""

    }

    this.ModalTitle="Thêm Mới";
    this.AcivateAddEditLandingPageMobi=true;
  }

  closeClick(){
    this.AcivateAddEditLandingPageMobi=false;
    this.refreshLandingpageMobiList();
  }

  editClick(item){
    this.landingpagemobi=item;
    this.ModalTitle="Sửa Thông Tin Học Viên";
    this.AcivateAddEditLandingPageMobi=true;
  }

  deleteClick(item){
    if(confirm('Bạn Có Chắc Chắn Muốn Xóa !!!')){
      this.service.deleteLandingpageMobi(item.landingpage_id).subscribe(
        data=>{
          alert(data.toString());
          this.refreshLandingpageMobiList();
        }
      )
    };
  }

  refreshLandingpageMobiList(){
    this.service.getLandingpageMobiList().subscribe(data=>
      {this.LandingpageMobiList=data;}
    )
  };
}
