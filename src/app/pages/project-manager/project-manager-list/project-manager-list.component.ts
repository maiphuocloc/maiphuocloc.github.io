import { Component, OnInit } from '@angular/core';
import { ProjectManagerService } from 'src/app/Service/projectManager.service';
import * as moment from 'moment';

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
  lastProjects!: any[];

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject(): void {
    this.projectManagerService.getAllProject().subscribe(res => {
      if (res.success == true) {
        this.allProjects = res.data;
        var listLast = res.data.sort((a: any, b: any) => { return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime() });
        this.lastProjects = listLast.slice(0, 4);
      } else {
        alert('Đã có lỗi xảy ra');
      }
    });
  }

  formatDate(date: string): string {
    var formatDate = moment(date).format("DD-MM-YYYY");
    return formatDate;
  }

}
