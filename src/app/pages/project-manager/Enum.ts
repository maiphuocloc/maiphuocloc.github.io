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
      stt: 1,
      list: [
        {stt: 1, title: 'PO'},
        {stt: 2, title: 'Estimation'}
      ],
      document_type: 'project_document',
      title: 'Tài liệu dự án'
    },
    //khởi tạo Quyết định 
    {
      stt: 2,
      list: [
        {stt: 1, title: 'Quyết định khởi động dự án'},
        {stt: 2, title: 'Quyết định thành lập đội dự án'}
      ],
      document_type: 'decision_document', 
      title: 'Quyết định'
    },
    //khởi tạo Tài liệu kỹ thuật
    {
      stt: 3,
      list: [
        {stt: 1, title: 'Kế hoạch khung'},
        {stt: 2, title: 'Kế hoạch khảo sát'},
        {stt: 3, title: 'Tài liệu SRD'},
        {stt: 4, title: 'Design',}
      ],
      document_type: 'technical_document',
      title: 'Tài liệu kỹ thuật'
    },
    //khởi tạo Nội dung cuộc họp
    {
      stt: 4,
      list: [
        {stt: 1, title: 'Nội dung cuộc họp'},
        {stt: 2, title: 'Tóm tắt cuộc họp'}
      ],
      document_type: 'meeting_document',
      title: 'Nội dung các cuộc họp'
    },
    //khởi tạo Báo cáo tiến độ hằng tuần
    {
      stt: 5,
      list: [
        {stt: 1, title: 'Báo cáo tuần 1'}
      ],
      document_type: 'report_document',
      title: 'Báo cáo tiến độ hằng tuần'
    },
    //khởi tạo Xây dựng dự án
    {
      stt: 6,
      list: [
        {stt: 1, title: 'content Dev'},
        {stt: 2, title: 'content Test'},
        {stt: 3, title: 'content Prod'},
        {stt: 4, title: 'Database'},
        {stt: 5, title: 'content GIT FE'},
        {stt: 6, title: 'content GIT BE'}
      ],
      document_type: 'build_document',
      title: 'Xây dựng dự án'
    },
    //khởi tạo Biên bản nghiệm thu
    {
      stt: 7,
      list: [
        {stt: 1, title: 'Biên bản nghiệm thu UAT'},
        {stt: 2, title: 'Biên bản nghiệm thu UAT tổng'},
        {stt: 3, title: 'Biên bản Golive'},
        {stt: 4, title: 'Biên bản bàn giao'},
        {stt: 5, title: 'Biên bản nghiệm thu tổng thể'}
      ],
      document_type: 'acceptance_document',
      title: 'Biên bản nghiệm thu'
    },
  ];

