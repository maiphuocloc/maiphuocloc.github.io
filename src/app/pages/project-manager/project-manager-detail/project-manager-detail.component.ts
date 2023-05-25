import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectManagerService } from 'src/app/Service/projectManager.service';
import { state, new_list_documents } from '../Enum';
import * as moment from 'moment';

@Component({
  selector: 'app-project-manager-detail',
  templateUrl: './project-manager-detail.component.html',
  styleUrls: ['./project-manager-detail.component.css']
})
export class ProjectManagerDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer,
    private projectManagerService: ProjectManagerService,
  ) { }

  // Thông tin trang
  state = state;
  pageTitle!: string;

  // Form thông tin dự án
  projectInfoForm = this.formBuilder.group({
    name: ['', Validators.required],
    code: ['', Validators.required],
    status_project: '',
    version: '',
    createAt: '',
    updateAt: ''
  });

  projectID!: number;
  resourceLogo: any[] = [];

  // Danh sách loại tài liệu dự án
  list_documents: any[] = [];

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    this.checkTypePage(id);
  }

  checkTypePage(id: any): void {
    if (id) {
      this.projectID = +id;
      if (id == 'add-new') {
        this.getTitle('add-new');
        this.newFormAdd();
      } else {
        this.getTitle('detail');
        this.getProjectInfo(+id);
      }
    }
  }

  // Tiêu đề của trang: Thêm mới / Chi tiết
  getTitle(state: string): void {
    let pageTitle = this.state.find(x => x.state == state);
    if (pageTitle) {
      this.pageTitle = pageTitle?.pageTitle;
    }
  }

  // Lấy dữ liệu ban đầu khi xem chi tiết
  getProjectInfo(id: number): void {
    this.projectManagerService.getOneProject(id).subscribe(resp => {
      this.projectInfoForm.patchValue({
        name: resp.data.name,
        code: resp.data.code,
        status_project: resp.data.status_project,
        version: resp.data.version,
        createAt: moment(resp.data.createAt).format("YYYY-MM-DD"),
        updateAt: moment(resp.data.updateAt).format("YYYY-MM-DD")
      });
    })
  }

  // Khởi tạo các giá trị ban đầu khi thêm mới
  newFormAdd(): void {
    this.list_documents = new_list_documents;
  }

  // Thay đổi trạng thái của tài liệu
  changeCheck(docType: any, item: any): void {
    if (this.list_documents.find(x => x.document_type == docType)?.list[item].check == 'checked') {
      this.list_documents.find(x => x.document_type == docType)!.list[item].check = '';
    } else {
      this.list_documents.find(x => x.document_type == docType)!.list[item].check = 'checked';
    }
  }

  // Thêm mới tài liệu
  addNewDocument(docType: string): void {
    var newItem = { id: '', stt: '', title: '', content: '', check: '' }
    this.list_documents.find(x => x.document_type == docType)?.list.push(newItem);
  }

  // Thay đổi logo
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

  // Chức năng lưu
  saveInput(): void {
    const dataProject = {
      name: this.projectInfoForm.get('name')?.value,
      code: this.projectInfoForm.get('code')?.value,
      version: this.projectInfoForm.get('version')?.value
    }

    const dataDocument = this.list_documents;

    console.log(dataDocument);
    

    if (!this.projectInfoForm.invalid) {
      this.projectManagerService.createOneProject(dataProject).subscribe(resp => {
        if (resp.success == true) {




          alert('Thêm mới thành công');
          this.router.navigate([`../${resp.data.id}`], { relativeTo: this.route });
          this.checkTypePage(resp.data.id);
        } else {
          alert('Đã có lỗi xảy ra');
        }
      });
    } else {
      alert('Lỗi nhập liệu');
    }
  }

  // Chức năng cập nhật
  updateInput(): void {

  }
}
