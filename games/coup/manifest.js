// 🎭 Coup — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
const onOff = (on, off) => [{ value: true, label: on }, { value: false, label: off }];

export default {
  id: 'coup',
  name: 'Coup',
  icon: '🎭',
  tagline: 'Nhận bừa là Công Tước — dám thách thức không?',
  description: 'Giữ 2 lá vai úp kín và tự nhận sức mạnh của bất kỳ vai nào để gom 7 xu Đảo Chính hoặc loại đối thủ. Ai nghi ngờ có thể thách thức lật tẩy; người trụ lại cuối cùng thắng.',
  minPlayers: 2,
  maxPlayers: 8,
  tags: ['Bịp', 'Bài', 'Đông người'],
  order: 7,
  turnMs: 30000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦊' }, { name: 'Cam', color: '#f06a14', label: '🐯' },
    { name: 'Vàng', color: '#eab80e', label: '🦁' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🐺' }, { name: 'Tím', color: '#9354eb', label: '🦉' },
    { name: 'Hồng', color: '#f263ad', label: '🐷' }, { name: 'Ngọc', color: '#12aeb0', label: '🐙' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: onOff('🎁 Bất Ngờ — vai mới, biến cố mỗi vòng bàn, chợ đen, hồn ma', '😇 Cổ điển — 5 vai gốc') },
    { key: 'factions', label: 'Phe phái', default: false,
      choices: onOff('🦁🦅 Có — chia 2 phe, không được đánh người cùng phe; Đổi Phe, Biển Thủ', '❌ Không') },
    { key: 'react', label: 'Thời gian thách thức/chặn', default: 10,
      choices: [{ value: 7, label: '⚡ 7 giây' }, { value: 10, label: '10 giây' }, { value: 15, label: '🐢 15 giây' }] },
  ],
  // Ước tính từ mô phỏng bot.
  estimate(o, players) {
    const m = (1.5 + players * 1.1) * (o.chaos ? 1.1 : 1) * (o.factions ? 1.15 : 1);
    return `~${Math.max(3, Math.round(m))} phút`;
  },
};
