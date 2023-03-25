import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
  images:string [] = ["../../assets/images/cabin.png","../../assets/images/cake.png", "../../assets/images/circus.png", "../../assets/images/game.png", "../../assets/images/safe.png", "../../assets/images/submarine.png"];
  ids:string [] = ["LOG CABIN", "TASTY CAKE", "CIRCUS TENT", "CONTROLLER", "LOCKED SAFE", "SUBMARINE"];
  display:string = "none";
  clickedImg:string = '';
  clickedImgId:string = '';
  ngOnInit() {
  }
openModal(event:any) {
   this.display = "block";
   if(event.target.previousSibling !== null){
    this.clickedImg = event.target.previousSibling.getAttribute('src');
   }
   else{
    this.clickedImg = event.target.parentNode.previousSibling.getAttribute('src');
   }
   this.clickedImgId = event.target.previousSibling.getAttribute('id');
 }
 onCloseHandled() {
   this.display = "none";
 }


}
