export {
    state, new_list_documents
}
const state = [
    { id: 1, state: 'add-new', pageTitle: 'Thêm mới '},
    { id: 2, state: 'detail', pageTitle: 'Chi tiết '},
];

const new_list_documents = [
    //khởi tạo Tài liệu dự án
    {
      id: '',
      stt: 1,
      list: [
        { id: '', stt: 1, title: 'PO', content: '', check: 'checked'},
        { id: '', stt: 2, title: 'Estimation', content: '', check: ''}
      ],
      document_type: 'project_document',
      title: 'Tài liệu dự án'
    },
    //khởi tạo Quyết định 
    {
      id: '',
      stt: 2,
      list: [
        { id: '', stt: 1, title: 'Quyết định khởi động dự án', content: '', check: '' },
        { id: '', stt: 2, title: 'Quyết định thành lập đội dự án', content: '', check: ''}
      ],
      document_type: 'decision_document', 
      title: 'Quyết định'
    },
    //khởi tạo Tài liệu kỹ thuật
    {
      id: '',
      stt: 3,
      list: [
        { id: '', stt: 1, title: 'Kế hoạch khung', content: '', check: ''},
        { id: '', stt: 2, title: 'Kế hoạch khảo sát', content: '', check: ''},
        { id: '', stt: 3, title: 'Tài liệu SRD', content: '', check: ''},
        { id: '', stt: 4, title: 'Design', content: '', check: ''}
      ],
      document_type: 'technical_document',
      title: 'Tài liệu kỹ thuật'
    },
    //khởi tạo Nội dung cuộc họp
    {
      id: '',
      stt: 4,
      list: [
        { id: '', stt: 1, title: 'PO', content: '', check: ''},
        { id: '', stt: 2, title: 'Estimation', content: '', check: ''}
      ],
      document_type: 'meeting_document',
      title: 'Nội dung các cuộc họp'
    },
    //khởi tạo Báo cáo tiến độ hằng tuần
    {
      id: '',
      stt: 5,
      list: [
        { id: '', stt: 1, title: 'Báo cáo tuần 1', content: '', check: ''}
      ],
      document_type: 'report_document',
      title: 'Báo cáo tiến độ hằng tuần'
    },
    //khởi tạo Xây dựng dự án
    {
      id: '',
      stt: 6,
      list: [
        { id: '', stt: 1, title: 'content Dev', content: '', check: ''},
        { id: '', stt: 2, title: 'content Test', content: '', check: ''},
        { id: '', stt: 3, title: 'content Prod', content: '', check: ''},
        { id: '', stt: 4, title: 'Database', content: '', check: ''},
        { id: '', stt: 5, title: 'content GIT FE', content: '', check: ''},
        { id: '', stt: 6, title: 'content GIT BE', content: '', check: ''}
      ],
      document_type: 'build_document',
      title: 'Xây dựng dự án'
    },
    //khởi tạo Biên bản nghiệm thu
    {
      id: '',
      stt: 7,
      list: [
        { id: '', stt: 1, title: 'Biên bản nghiệm thu UAT', content: '', check: ''},
        { id: '', stt: 2, title: 'Biên bản nghiệm thu UAT tổng', content: '', check: ''},
        { id: '', stt: 3, title: 'Biên bản Golive', content: '', check: ''},
        { id: '', stt: 4, title: 'Biên bản bàn giao', content: '', check: ''},
        { id: '', stt: 5, title: 'Biên bản nghiệm thu tổng thể', content: '', check: ''}
      ],
      document_type: 'acceptance_document',
      title: 'Biên bản nghiệm thu'
    },
  ];

