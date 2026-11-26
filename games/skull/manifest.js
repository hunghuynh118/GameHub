// 💀 Hoa & Sọ (Skull) — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
export default {
  id: 'skull',
  name: 'Hoa & Sọ',
  icon: '💀',
  tagline: 'Hoa hồng hay đầu lâu? Đấu trí tới cùng',
  description: 'Trò đấu trí thổi phồng cực căng: lần lượt đặt úp đĩa Hoa hoặc Sọ rồi cược số đĩa Hoa lật được. Người cược cao nhất phải tự mở đĩa — trúng Sọ là mất đĩa của mình.',
  minPlayers: 3,
  maxPlayers: 6,
  tags: ['Bịp', 'Đông người'],
  order: 4,
  turnMs: 25000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦊' }, { name: 'Cam', color: '#f06a14', label: '🐯' },
    { name: 'Vàng', color: '#eab80e', label: '🦁' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🐺' }, { name: 'Tím', color: '#9354eb', label: '🦉' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🔥 Hỗn Loạn — đĩa đặc biệt, điềm báo mỗi vòng, hồn ma' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'need', label: 'Thắng khi', default: 2,
      choices: [{ value: 2, label: 'Thắng 2 thử thách (chuẩn)' }, { value: 3, label: 'Thắng 3 thử thách (dài hơn)' }] },
  ],
  // Ước tính từ mô phỏng bot.
  estimate(o, players) {
    const m = (2 + players * 0.9) * (o.need === 3 ? 1.4 : 1) * (o.chaos ? 1.1 : 1);
    return `~${Math.max(3, Math.round(m))} phút`;
  },
};
