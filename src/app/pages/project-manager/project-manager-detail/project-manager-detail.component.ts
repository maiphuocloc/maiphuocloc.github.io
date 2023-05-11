import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { state } from '../../Enum';

@Component({
  selector: 'app-project-manager-detail',
  templateUrl: './project-manager-detail.component.html',
  styleUrls: ['./project-manager-detail.component.css']
})
export class ProjectManagerDetailComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  projectInfoForm = this.formBuilder.group({
    projectName: ['', Validators.required],
    projectCode: ['', Validators.required],
  });

  state = state;
  title!: string;
  id!: string;

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
      if (id == 'add-new') {
        this.getTitle('add-new');
        this.newFormAdd();
      } else {
        this.getTitle('detail');
        this.getProductInfo(this.id);
      }
    }
  }

  getTitle(state: string) {
    let title = this.state.find( x => x.state == state);
    if (title) {
      this.title = title?.title;
    }
  }

  getProductInfo(id: string) {

  }

  newFormAdd() {

  }

}
