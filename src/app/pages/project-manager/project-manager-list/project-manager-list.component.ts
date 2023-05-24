import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from 'src/app/Service/projectManager.service';

@Component({
  selector: 'app-project-manager-list',
  templateUrl: './project-manager-list.component.html',
  styleUrls: ['./project-manager-list.component.css']
})
export class ProjectManagerListComponent implements OnInit {

  constructor(
    private projectManagerService: ProjectManagerService,
  ) { }

  allProjects!: any[];

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject(): void {
    this.projectManagerService.getAllProject().subscribe(res => {
      if (res.success == true) {
        this.allProjects = res.data;
      } else {
        alert('Đã có lỗi xảy ra');
      }
    });
  }

}
