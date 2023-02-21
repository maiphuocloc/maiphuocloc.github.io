import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.css']
})
export class CurriculumVitaeComponent implements OnInit {

  constructor() { }

  listSkills = [
    {
      name: "Angular",
      point: "70"
    },
    {
      name: "HTML & CSS",
      point: "90"
    },
    {
      name: "Javascript",
      point: "70"
    },
    {
      name: "Bootstrap",
      point: "70"
    },
    {
      name: "Tiếng anh",
      point: "30"
    },
    {
      name: "Làm việc nhóm",
      point: "80"
    }
  ]

  menuFunction = {
    Overview: true,
    careerObjectives: true,
    education: true,
    workExperience: true,
    skills: true,
    certificate: true,
  }
    
  showCV: boolean = false;

  ngOnInit(): void {
  }

}
