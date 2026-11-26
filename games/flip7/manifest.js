// 🃏 Flip 7 — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
export default {
  id: 'flip7',
  name: 'Flip 7',
  icon: '🃏',
  tagline: 'Rút thêm hay dừng? Trùng số là cháy!',
  description: 'Lần lượt rút thêm lá để tích điểm hoặc dừng sớm giữ an toàn. Rút trùng số đang có sẽ cháy sạch điểm vòng; gom đủ 7 số khác nhau nhận ngay thưởng lớn Flip 7.',
  minPlayers: 2,
  maxPlayers: 8,
  tags: ['Bài', 'Mạo hiểm', 'Đông người'],
  order: 4,
  turnMs: 20000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦊' }, { name: 'Cam', color: '#f06a14', label: '🐯' },
    { name: 'Vàng', color: '#eab80e', label: '🐥' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🐳' }, { name: 'Tím', color: '#9354eb', label: '🦄' },
    { name: 'Hồng', color: '#f263ad', label: '🐷' }, { name: 'Ngọc', color: '#12aeb0', label: '🐙' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🎁 Bất Ngờ — lá hành động mới, sự kiện mỗi vòng, Sương Mù' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'target', label: 'Điểm để thắng', default: 200,
      choices: [{ value: 200, label: '200 điểm (chuẩn)' }, { value: 100, label: '100 điểm (nhanh)' }, { value: 300, label: '300 điểm (dài)' }] },
  ],
  estimate(o, players) {
    const m = (2 + players * 0.9) * (o.target / 200) * (o.chaos ? 1.1 : 1);
    return `~${Math.max(2, Math.round(m))} phút`;
  },
};
