// 💎 Splendor — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
export default {
  id: 'splendor',
  name: 'Splendor',
  icon: '💎',
  tagline: 'Gom ngọc, mở mỏ, đón quý tộc Phục Hưng',
  description: 'Thu thập ngọc quý để mua các mỏ đá giảm giá vĩnh viễn cho lượt sau và thu hút Quý Tộc ghé thăm. Đạt điểm mục tiêu sẽ đánh nốt vòng để phân định người chiến thắng.',
  minPlayers: 2,
  maxPlayers: 6,
  tags: ['Chiến thuật', 'Bài'],
  order: 7,
  turnMs: 40000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦊' }, { name: 'Cam', color: '#f06a14', label: '🐯' },
    { name: 'Vàng', color: '#eab80e', label: '🐥' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🐳' }, { name: 'Tím', color: '#9354eb', label: '🦄' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🎁 Bất Ngờ — thẻ năng lực, sự kiện mỗi vòng, quý tộc đặc quyền, mục tiêu bí mật' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'target', label: 'Điểm để thắng', default: 15,
      choices: [{ value: 15, label: '15 điểm (chuẩn)' }, { value: 10, label: '10 điểm (nhanh)' }, { value: 21, label: '21 điểm (dài)' }] },
  ],
  estimate(o, players) {
    const m = (6 + players * 4.5) * (o.target / 15);
    return `~${Math.max(8, Math.round(m))} phút`;
  },
};
