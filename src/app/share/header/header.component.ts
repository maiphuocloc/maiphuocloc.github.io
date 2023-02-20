import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  subMenuStatus = false; // trạng thái icon submenu

  ngOnInit(): void {
    //lấy path hiện tại
    let pathname = location.pathname;
    pathname = pathname.replace("/","");
    //active trang tương ứng trên header
    const title = document.getElementById(pathname);
    title?.classList.add("h-t-active");
  }

  changeRouter(path: string) {
    // lấy danh sách element có class active
    const title = document.getElementsByClassName('h-t-active');    
    // Nếu đã có active thì xóa active
    if (title.length == 1) {
      title[0].classList.remove("h-t-active");
    }
    //active trang tương ứng trên header
    const titleActive = document.getElementById(path);
    titleActive?.classList.add("h-t-active");
    this.hiddenSubMenu();
  }

  showSubMenu() {
    // gắn active để hiển thị submenu
    const titleActive = document.getElementsByClassName("header");
    titleActive[0]?.classList.add("h-active");
    // thay đổi icon submenu
    this.subMenuStatus = true;
    // tắt scroll website
    const bodyE = document.getElementsByTagName("body");
    bodyE[0].style.overflow = 'hidden';
  }

  hiddenSubMenu() {
    // xóa active để ẩn submenu
    const titleActive = document.getElementsByClassName("header");
    titleActive[0]?.classList.remove("h-active");
    // thay đổi icon submenu
    this.subMenuStatus = false;
    // mở scroll website
    const bodyE = document.getElementsByTagName("body");
    bodyE[0].style.overflow = 'unset';
  }
}
