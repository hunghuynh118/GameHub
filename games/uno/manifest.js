// 🎴 UNO — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
const onOff = (on, off) => [{ value: true, label: on }, { value: false, label: off }];

export default {
  id: 'uno',
  name: 'UNO',
  icon: '🎴',
  tagline: 'Cùng màu hoặc cùng số — còn 1 lá nhớ hô UNO!',
  description: 'Đánh lá cùng màu, cùng số hoặc ký hiệu với lá trên bàn; tận dụng +2, +4, Đổi Chiều và lá Bất Ngờ để lật kèo. Quên hô UNO khi còn 1 lá sẽ bị bắt phạt rút thêm bài.',
  minPlayers: 2,
  maxPlayers: 8,
  tags: ['Bài', 'Đông người'],
  order: 5,
  turnMs: 20000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦊' }, { name: 'Cam', color: '#f06a14', label: '🐯' },
    { name: 'Vàng', color: '#eab80e', label: '🐥' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🐳' }, { name: 'Tím', color: '#9354eb', label: '🦄' },
    { name: 'Hồng', color: '#f263ad', label: '🐷' }, { name: 'Ngọc', color: '#12aeb0', label: '🐙' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: onOff('🎁 Bất Ngờ — lá mới (Gương, Bom Màu, Đổi Tay...) + sự kiện mỗi vòng bàn', '😇 Cổ điển') },
    { key: 'target', label: 'Thắng khi', default: 0,
      choices: [{ value: 0, label: 'Hết bài trước — 1 ván' }, { value: 200, label: 'Tính điểm — tới 200' }, { value: 500, label: 'Tính điểm — tới 500 (chuẩn)' }] },
    { key: 'stack', label: 'Cộng dồn +2/+4', default: true, choices: onOff('✅ Có — bị +2 thì đánh +2/+4 chuyền tiếp', '❌ Không') },
    { key: 'sevenO', label: 'Đổi bài 7-0', default: false, choices: onOff('✅ Có — 7: đổi tay với 1 người, 0: cả bàn chuyền tay', '❌ Không') },
    { key: 'jump', label: 'Chặn ngang', default: false, choices: onOff('✅ Có — lá y hệt lá trên cùng thì đánh chen ngay', '❌ Không') },
    { key: 'drawUntil', label: 'Khi không đánh được', default: false, choices: onOff('Rút tới khi đánh được', 'Rút 1 lá') },
  ],
  estimate(o, players) {
    const m = (2 + players * 0.6) * (o.target ? o.target / 120 : 1) * (o.chaos ? 1.1 : 1);
    return `~${Math.max(3, Math.round(m))} phút`;
  },
};
