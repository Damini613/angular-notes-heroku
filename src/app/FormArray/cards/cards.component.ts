import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {



 Skill = this.fb.group({
  skills:this.fb.array([]),
   name:['']
 })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  get skills(){
    return this.Skill.get('skills') as FormArray
  }

  submit(){
   
    this.skills.push(this.newSkill())
    console.log(this.skills)
  }

  //new skill 2 field

  newSkill(){
    return this.fb.group({
      skill_name:'',
      yoe:''
    })
  }

}
