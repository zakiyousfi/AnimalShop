import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class achatComponent implements OnInit {
  T:any=[{id:1,img:"../../assets/images/pet/1.jpg",Category:"dog",name:"EB Toukabry",prix:170,Des:" Is one of the most Faithful pets you will ever dream about"},
  {id:2,img:"../../assets/images/pet/2.jpg",Category:"cat",name:"Minouch",prix:100,Des:"The king of the house"},
  {id:3,img:"../../assets/images/pet/3.jpg",Category:"Horse",name:"Lachheb",prix:90,Des:"One of the Fastest And Braveest horses"},
  {id:4,img:"../../assets/images/pet/4.jpg",Category:"hedghog",name:"nassan",prix:190,Des:"He is shy and like to sleep a lot"},
  {id:5,img:"../../assets/images/pet/5.jpg",Category:"bird",name:"chawqi",prix:200,Des:""},
  {id:6,img:"../../assets/images/pet/6.jpg",Category:"Rabit",name:"louss",prix:150,Des:""},
  {id:7,img:"../../assets/images/pet/7.jpg",Category:"Rabit",name:"  la7mar",prix:30,Des:""},
  {id:8,img:"../../assets/images/pet/8.jpg",Category:"Rabit",name:"le petit lapin",prix:120,Des:""},
  {id:9,img:"../../assets/images/pet/9.jpg",Category:"Rabit",name:"Red eyes  Rabit",prix:200,Des:""},
  {id:10,img:"../../assets/images/pet/10.png",Category:"Rabit",name:"lglass",prix:110,Des:""},
  {id:11,img:"../../assets/images/pet/11.jpg",Category:"Rabit",name:"jazar",prix:130,Des:""},
  {id:12,img:"../../assets/images/pet/12.jpg",Category:"Turtle",name:"  5ass 108",prix:110,Des:""},
  {id:13,img:"../../assets/images/pet/13.jpg",Category:"Turtle",name:"5ass  208",prix:200,Des:""},
  {id:14,img:"../../assets/images/pet/14.jpg",Category:"Turtle",name:"5ass  308",prix:150,Des:""},
  {id:15,img:"../../assets/images/pet/15.png",Category:"turtle",name:"5ass  3008",prix:130,Des:""},
  {id:16,img:"../../assets/images/pet/16.png",Category:"Turtle",name:"5ass  5008 GT",prix:110,Des:""},
  {id:17,img:"../../assets/images/pet/17.jpg",Category:"Horse",name:"braeg",prix:150,Des:""},
  {id:18,img:"../../assets/images/pet/18.jpg",Category:"Horse",name:" lasil",prix:160,Des:""},
  {id:19,img:"../../assets/images/pet/19.jpg",Category:"Horse",name:"lhdir",prix:190,Des:""},
  {id:20,img:"../../assets/images/pet/20.jpg",Category:"Horse",name:"lmbarga3",prix:90,Des:""},
  {id:21,img:"../../assets/images/pet/21.jpg",Category:"Horse",name:" jalel",prix:120,Des:""},
  {id:22,img:"../../assets/images/pet/22.jpg",Category:"Horse",name:"talyany",prix:300,Des:""},
  {id:23,img:"../../assets/images/pet/23.png",Category:"bird",name:"layreg",prix:320,Des:""},
  {id:24,img:"../../assets/images/pet/24.png",Category:"bird",name:"lasfar",prix:500,Des:""},
  {id:25,img:"../../assets/images/pet/25.jpg",Category:"bird",name:"twity",prix:120,Des:""},
  {id:26,img:"../../assets/images/pet/26.jpg",Category:"bird",name:"lmkachber",prix:180,Des:""},
  {id:27,img:"../../assets/images/pet/27.jpg",Category:"Fish",name:" mouris",prix:130,Des:""},
  {id:28,img:"../../assets/images/pet/28.jpg",Category:"Fish",name:" nimo ",prix:190,Des:""},
  {id:29,img:"../../assets/images/pet/29.jpg",Category:"Fish",name:"edaye5",prix:180,Des:""},
  {id:30,img:"../../assets/images/pet/30.jpg",Category:"Fish",name:"la petite poisson",prix:120,Des:""},
  {id:31,img:"../../assets/images/pet/31.jpg",Category:"Fish",name:"houta",prix:170,Des:""},
  {id:32,img:"../../assets/images/pet/32.jpg",Category:"cat",name:" Bareg Ellil",prix:110,Des:""},
  {id:33,img:"../../assets/images/pet/33.jpg",Category:"cat",name:"dyma daye5",prix:120,Des:""},
  {id:34,img:"../../assets/images/pet/34.png",Category:"cat",name:"echaye5",prix:110,Des:""},
  {id:35,img:"../../assets/images/pet/35.jpg",Category:"cat",name:"basbouss",prix:210,Des:""},
  {id:36,img:"../../assets/images/pet/36.jpg",Category:"cat",name:" hsan w ehsin",prix:120,Des:""},
  {id:37,img:"../../assets/images/pet/37.jpg",Category:"hedghog",name:"jamal",prix:130,Des:""},
  {id:38,img:"../../assets/images/pet/38.jpg",Category:"hedghog",name:"l3atry ",prix:180,Des:""},
  {id:39,img:"../../assets/images/pet/39.jpg",Category:"hedghog",name:"ereged ",prix:250,Des:""},
  {id:40,img:"../../assets/images/pet/40.jpg",Category:"hedghog",name:"el ma5me5 ",prix:300,Des:""},
  {id:41,img:"../../assets/images/pet/42.jpg",Category:"dog",name:"Simba",prix:200,Des:""},
  {id:42,img:"../../assets/images/pet/43.jpg",Category:"dog",name:"hero",prix:100,Des:""},
  {id:43,img:"../../assets/images/pet/44.jpg",Category:"dog",name:"flash",prix:400,Des:""},
  {id:44,img:"../../assets/images/pet/45.jpg",Category:"dog",name:"bisy",prix:150,Des:""},
  {id:45,img:"../../assets/images/pet/46.jpg",Category:"dog",name:"Anyeb",prix:170,Des:""},
  ]
  id: any;
  pet: any = {};
  achatForm!: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.achatForm = this.formBuilder.group({
      img: [''],
      nom: [''],
      prenom: [''],
      age: [''],
      tel: [''],
      CIN: [''],
      email: [''],
    })

    if (JSON.parse(sessionStorage.getItem("user") ?? "null")) {
      this.id =this.activatedRoute.snapshot.paramMap.get("id");
      for (let i = 0; i < this.T.length; i++) {
        if (this.T[i].id == this.id) {
          this.pet = this.T[i];
          console.log("Imen", this.T[i]);
        }
      }
    }
    else {
      this.router.navigate(["signup"])
    }
  }
  updateField(fieldName: string) {
    const fieldValue = this.achatForm.value[fieldName];

    console.log('Before:', fieldValue);

    let newValue: string;

    if (fieldValue === 'no') {
        newValue = 'yes';
    } else {
        newValue = 'no';
    }

    this.achatForm.value[fieldName] = newValue;

    console.log('After:', this.achatForm.value[fieldName]);
}

achat(){
  let user = JSON.parse(sessionStorage.getItem("user") || "[]")
  this.achatForm.value.userId = user.id
  this.achatForm.value.petId = this.pet.id
  this.achatForm.value.img = this.pet.img
  this.achatForm.value.name = this.pet.name
  this.achatForm.value.prix = this.pet.prix
  this.achatForm.value.Category = this.pet.Category
  let achat = JSON.parse(localStorage.getItem("achat") || "[]")
  let id = this.generateId(achat)
  this.achatForm.value.id = id
  achat.push(this.achatForm.value)
  localStorage.setItem('achat', JSON.stringify(achat))
  console.log(this.achatForm.value);
  this.router.navigate(["dashboard/"+user.id])
}
generateId(T: any){
  if (T.length === 0) {
    return 1
  }
  else {
    let max = 0
    for (let i = 0; i < T.length; i++) {
      if (max < T[i].id) {
        max = T[i].id
      }
    }
    return max + 1
  }
}
}

