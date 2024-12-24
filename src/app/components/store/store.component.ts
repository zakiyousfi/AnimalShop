import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToDogs(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToCats(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToFish(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToTurtels(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToBird(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToHorse(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToRabits(category:string){
    this.router.navigate(["pet/"+category])
  }
  goToHedghog(category:string){
    this.router.navigate(["pet/"+category])
  }

}
