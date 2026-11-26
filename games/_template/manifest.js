// ⚡ Phản Xạ — GAME MẪU (real-time). Copy cả thư mục này để bắt đầu game mới, xem CLAUDE.md.
// Thư mục bắt đầu bằng "_" nên chỉ hiện khi chạy với HUB_DEV=1. Đổi tên thư mục (bỏ "_") để đưa lên hub.
export default {
  id: 'phanxa',
  name: 'Phản Xạ',
  icon: '⚡',
  tagline: 'Ai bấm nhanh nhất?',
  description: 'Màn hình chuyển xanh thì bấm thật nhanh! Bấm sớm khi còn đỏ là bị loại ở vòng đó. Ai đủ điểm trước thắng.',
  minPlayers: 2,
  maxPlayers: 6,
  tags: ['Phản xạ'],   // thể loại: chip lọc + tìm kiếm trong bảng "Đổi game" (dùng lại tên tag đã có: Bài, Cờ, Phản xạ...)
  order: 50,
  seats: [
    { name: 'Đỏ', color: '#e0313f' }, { name: 'Cam', color: '#f06a14' }, { name: 'Vàng', color: '#eab80e' },
    { name: 'Lục', color: '#23b562' }, { name: 'Lam', color: '#2a85f7' }, { name: 'Tím', color: '#9354eb' },
  ],
  options: [
    { key: 'target', label: 'Điểm để thắng', default: 5,
      choices: [{ value: 3, label: '3 điểm' }, { value: 5, label: '5 điểm' }, { value: 7, label: '7 điểm' }] },
    { key: 'botSpeed', label: 'Bot phản xạ', default: 'normal',
      choices: [{ value: 'slow', label: '🐢 Chậm' }, { value: 'normal', label: '🙂 Vừa' }, { value: 'fast', label: '⚡ Nhanh' }] },
  ],
  estimate: o => `~${Math.ceil(o.target * 1.2)} phút`,
};
