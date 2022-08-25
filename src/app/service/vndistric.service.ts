import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VndistricService {

  constructor() { }
  getdistric(){
    let vietnamData:any[];
    vietnamData=['Chọn thành phố'];
     vietnamData=[
      {city:'chọn thành phố', district:['Quận / Huyện']},
      {city:'Đà Nẵng', 
      district:[
        "Quận Cẩm Lệ",
        "Quận Hải Châu",
        "Quận Liên Chiểu",
        "Quận Ngũ Hành Sơn",
        "Quận Sơn Trà",
        "Quận Thanh Khê",
        "Huyện Hòa Vang",
        "Huyện Hoàng Sa"
      ]},
      {city:'Quảnh Nam', 
      district:[
        "Thành phố Hội An",
        "Thành phố Tam Kỳ",
        "Huyện Bắc Trà My",
        "Huyện Đại Lộc",
        "Huyện Điện Bàn",
        "Huyện Đông Giang",
        "Huyện Duy Xuyên",
        "Huyện Hiệp Đức",
        "Huyện Nam Giang",
        "Huyện Nam Trà My",
        "Huyện Nông Sơn",
        "Huyện Núi Thành",
        "Huyện Phú Ninh",
        "Huyện Phước Sơn",
        "Huyện Quế Sơn",
        "Huyện Tây Giang",
        "Huyện Thăng Bình",
        "Huyện Tiên Phước"
      ]},
      {city:'Quảng Ngãi', 
      district:[
        "Thành phố Quảng Ngãi",
        "Huyện Ba Tơ",
        "Huyện Bình Sơn",
        "Huyện Đức Phổ",
        "Huyện Lý Sơn",
        "Huyện Minh Long",
        "Huyện Mộ Đức",
        "Huyện Nghĩa Hành",
        "Huyện Sơn Hà",
        "Huyện Sơn Tây",
        "Huyện Sơn Tịnh",
        "Huyện Tây Trà",
        "Huyện Trà Bồng",
        "Huyện Tư Nghĩa"
      ]},
      {city:'Bình Định', 
      district:[
        "Thành phố Quy Nhơn",
        "Huyện An Lão",
        "Huyện An Nhơn",
        "Huyện Hoài Ân",
        "Huyện Hoài Nhơn",
        "Huyện Phù Cát",
        "Huyện Phù Mỹ",
        "Huyện Tây Sơn",
        "Huyện Tuy Phước",
        "Huyện Vân Canh",
        "Huyện Vĩnh Thạnh"
      ]},
      {city:'Phú Yên', 
      district:[
        "Thành phố Tuy Hòa",
        "Thị xã Sông Cầu",
        "Huyện Đông Hòa",
        "Huyện Đồng Xuân",
        "Huyện Phú Hòa",
        "Huyện Sơn Hòa",
        "Huyện Sông Hinh",
        "Huyện Tây Hòa",
        "Huyện Tuy An"
      ]},
    ];
    return vietnamData;
  }
}
