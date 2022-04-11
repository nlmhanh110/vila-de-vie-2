import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //slideshow cho trang chủ
  slideIndex = [1,1];
  slideId = ["mySlides1", "mySlides2"]
  
  plusSlides(n:any, no:any) {
    this.showSlides(this.slideIndex[no] += n, no);
  }
  
  showSlides(n:any, no:any) {
    let i;
    let x:any = document.getElementsByClassName(this.slideId[no]);
    if (n > x.length) {this.slideIndex[no] = 1}    
    if (n < 1) {this.slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[this.slideIndex[no]-1].style.display = "block";  
  }
}
