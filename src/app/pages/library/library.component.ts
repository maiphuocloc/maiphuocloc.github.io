import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LibraryVocabularyService } from 'src/app/Service/libraryVocabulary.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private libraryVocabularyService: LibraryVocabularyService,
  ) { }

  wordForm = this.formBuilder.group({
    english: [''],
    vietnamese: [''],
    wordType: [''],
    exampleSentences: [''],
  });

  addWordForm = this.formBuilder.group({
    english: ['', Validators.compose([Validators.required])],
    vietnamese: ['', Validators.compose([Validators.required])],
    wordType: ['', Validators.compose([Validators.required])],
    exampleSentences: [''],
  });

  word!: any;
  allWords!: any[];

  ngOnInit(): void {
  }

  randomAWord(): void {
    this.libraryVocabularyService.randomAWord().subscribe(res => {
      this.word = res.data;
      this.wordForm.get('vietnamese')?.setValue(this.word.vietnamese);
    });
  }

  checkWord(): void {
    var dataWord = this.wordForm.value;
    var checkEN = this.checkEnglish(dataWord.english);
    var checkWT = this.checkWordType(dataWord.wordType);

    if (checkEN && checkWT) {
      alert('Chính xác');
    } else {
      alert('Sai rồi');
    }
  }

  checkEnglish(word: string): boolean {
    var check:boolean;
    if (word.toLowerCase() == this.word.english.toLowerCase()) {
      check = true;
    } else {
      check = false;
    }
    return check;
  }

  checkWordType(text: string): boolean {
    var check:boolean;
    if (text.toLowerCase() == this.word.wordType.toLowerCase()) {
      check = true;
    } else {
      check = false;
    }
    return check;
  }

  clearAddWordForm(): void {
    this.addWordForm.reset();
  }

  getAllWord(): void {
    this.libraryVocabularyService.getAllWord().subscribe(res => {
      if (res.success == true) {
        this.allWords = res.data;
      } else {
        alert('Đã có lỗi xảy ra');
      }
    });
  }

  createAWord(): void {
    var data = this.addWordForm.value;
    if (!this.addWordForm.invalid) {
      if (!data.exampleSentences) {
        data.exampleSentences = '';
      }
      this.libraryVocabularyService.createAWord(this.addWordForm.value).subscribe(res => {
        if (res.success == true) {
          alert('Thêm mới thành công');
          this.clearAddWordForm();
        } else {
          alert('Đã có lỗi xảy ra');
        }
      });
    } else {
      alert('Lỗi nhập liệu');
    }
  }
}
