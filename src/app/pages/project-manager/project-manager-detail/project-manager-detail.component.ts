import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProjectManagerService } from 'src/app/Service/projectManager.service';
import { state, new_list_documents } from '../Enum';

@Component({
  selector: 'app-project-manager-detail',
  templateUrl: './project-manager-detail.component.html',
  styleUrls: ['./project-manager-detail.component.css']
})
export class ProjectManagerDetailComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
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
  resourceLogo: any[] = [];

  // Danh sách loại tài liệu dự án
  list_documents: any[] = [];

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.projectInfoForm.get('id')?.setValue(id);
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
  getTitle(state: string) {
    let pageTitle = this.state.find(x => x.state == state);
    if (pageTitle) {
      this.pageTitle = pageTitle?.pageTitle;
    }
  }

  // Lấy dữ liệu ban đầu khi xem chi tiết
  getProjectInfo(id: number) {
    this.projectManagerService.getOneProject(id).subscribe(resp => {
      this.projectInfoForm.patchValue({
        name: resp.data.name,
        code: resp.data.code,
        status_project: resp.data.status_project,
        version: resp.data.version,
        createAt: resp.data.createAt,
        updateAt: resp.data.updateAt
      });
      console.log(resp);
      console.log(this.projectInfoForm.value);
    })
  }

  // Khởi tạo các giá trị ban đầu khi thêm mới
  newFormAdd() {
    this.list_documents = new_list_documents;
  }

  // Thay đổi trạng thái của tài liệu
  changeCheck(docType: any, item: any) {
    if (this.list_documents.find(x => x.document_type == docType)?.list[item].check == 'checked') {
      this.list_documents.find(x => x.document_type == docType)!.list[item].check = '';
    } else {
      this.list_documents.find(x => x.document_type == docType)!.list[item].check = 'checked';
    }
  }

  // Thêm mới tài liệu
  addNewDocument(docType: string) {
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
  saveInput() {
    const dataProject = {
      name: this.projectInfoForm.get('name')?.value,
      code: this.projectInfoForm.get('code')?.value,
      version: this.projectInfoForm.get('version')?.value
    }

    console.log(dataProject);

    if (!this.projectInfoForm.invalid) {
      this.projectManagerService.createOneProject(dataProject).subscribe(res => {
        if (res.success == true) {
          alert('Thêm mới thành công');
        } else {
          alert('Đã có lỗi xảy ra');
        }
      });
    } else {
      alert('Lỗi nhập liệu');
    }
  }
}
