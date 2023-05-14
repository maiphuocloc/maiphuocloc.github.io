import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
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
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  projectInfoForm = this.formBuilder.group({
    projectName: ['', Validators.required],
    projectCode: ['', Validators.required],
  });

  list_documents = [
    {
      id: 1,
      list: [
        { id: '1', title: 'PO', content: '', check: 'checked'},
        { id: '2', title: 'Estimation', content: '', check: ''}
      ],
      document_type: 'project_document',
      title: 'Tài liệu dự án'
    },
    {
      id: 2,
      list: [
        { id: '1', title: 'Quyết định khởi động dự án', content: '', check: '' },
        { id: '2', title: 'Quyết định thành lập đội dự án', content: '', check: ''}
      ],
      document_type: 'decision_document', 
      title: 'Quyêt định'
    },
    {
      id: 3,
      list: [
        { id: '1', title: 'Tài liệu SRD', content: '', check: ''},
        { id: '2', title: 'Design', content: '', check: ''},
        { id: '3', title: 'Kế hoạch', content: '', check: ''}
      ],
      document_type: 'technical_document',
      title: 'Tài liệu kỹ thuật'
    },
    {
      id: 4,
      list: [
        { id: '1', title: 'PO', content: '', check: ''},
        { id: '2', title: 'Estimation', content: '', check: ''}
      ],
      document_type: 'meeting_document',
      title: 'Nội dung các cuộc họp'
    },
    {
      id: 5,
      list: [
        { id: '1', title: 'Báo cáo tuần 1', content: '', check: ''}
      ],
      document_type: 'report_document',
      title: 'Báo cáo tiến độ hằng tuần'
    },
    {
      id: 6,
      list: [
        { id: '1', title: 'content Dev', content: '', check: ''},
        { id: '2', title: 'content Test', content: '', check: ''},
        { id: '3', title: 'content Prod', content: '', check: ''},
        { id: '4', title: 'Database', content: '', check: ''},
        { id: '5', title: 'content GIT FE', content: '', check: ''},
        { id: '6', title: 'content GIT BE', content: '', check: ''}
      ],
      document_type: 'build_document',
      title: 'Xây dựng dự án'
    },
    {
      id: 7,
      list: [
        { id: '1', title: 'Biên bản nghiệm thu UAT', content: '', check: ''},
        { id: '2', title: 'Biên bản nghiệm thu UAT tổng', content: '', check: ''},
        { id: '3', title: 'Biên bản Golive', content: '', check: ''},
        { id: '4', title: 'Biên bản bàn giao', content: '', check: ''},
        { id: '5', title: 'Biên bản nghiệm thu tổng thể', content: '', check: ''}
      ],
      document_type: 'acceptance_document',
      title: 'Biên bản nghiệm thu'
    },
  ]

  state = state;
  title!: string;
  id!: string;
  resourceLogo: any[] = [];

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
    let title = this.state.find(x => x.state == state);
    if (title) {
      this.title = title?.title;
    }
  }

  getProductInfo(id: string) {

  }

  newFormAdd() {

  }

  addNewDocument(docType: string) {
    console.log(docType);
    
  }

  onFileLogoChanged(event: any): void {
    if (event.target.files) {
      this.resourceLogo = [];
      for (let file of event.target.files) {
        file.preview = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(file)
        );
        this.resourceLogo.push(file);
      }
    }
    event.target.value = '';
  }
}
