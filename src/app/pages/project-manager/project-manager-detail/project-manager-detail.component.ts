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
        { id: '1', title: 'PO', link: '', check: 'checked'},
        { id: '2', title: 'Estimation', link: '', check: ''}
      ],
      document_type: 'project_document',
      title: 'Tài liệu dự án'
    },
    {
      id: 2,
      list: [
        { id: '1', title: 'Quyết định khởi động dự án', link: '', check: '' },
        { id: '2', title: 'Quyết định thành lập đội dự án', link: '', check: ''}
      ],
      document_type: 'decision_document', 
      title: 'Quyêt định'
    },
    {
      id: 3,
      list: [
        { id: '1', title: 'Tài liệu SRD', link: '', check: ''},
        { id: '2', title: 'Design', link: '', check: ''},
        { id: '3', title: 'Kế hoạch', link: '', check: ''}
      ],
      document_type: 'technical_document',
      title: 'Tài liệu kỹ thuật'
    },
    {
      id: 4,
      list: [
        { id: '1', title: 'PO', link: '', check: ''},
        { id: '2', title: 'Estimation', link: '', check: ''}
      ],
      document_type: 'meeting_document',
      title: 'Nội dung các cuộc họp'
    },
    {
      id: 5,
      list: [
        { id: '1', title: 'Báo cáo tuần 1', link: '', check: ''}
      ],
      document_type: 'report_document',
      title: 'Báo cáo tiến độ hằng tuần'
    },
    {
      id: 6,
      list: [
        { id: '1', title: 'Link Dev', link: '', check: ''},
        { id: '2', title: 'Link Test', link: '', check: ''},
        { id: '3', title: 'Link Prod', link: '', check: ''},
        { id: '4', title: 'Database', link: '', check: ''},
        { id: '5', title: 'Link GIT FE', link: '', check: ''},
        { id: '6', title: 'Link GIT BE', link: '', check: ''}
      ],
      document_type: 'build_document',
      title: 'Xây dựng dự án'
    },
    {
      id: 7,
      list: [
        { id: '1', title: 'Biên bản nghiệm thu UAT', link: '', check: ''},
        { id: '2', title: 'Biên bản nghiệm thu UAT tổng', link: '', check: ''},
        { id: '3', title: 'Biên bản Golive', link: '', check: ''},
        { id: '4', title: 'Biên bản bàn giao', link: '', check: ''},
        { id: '5', title: 'Biên bản nghiệm thu tổng thể', link: '', check: ''}
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
