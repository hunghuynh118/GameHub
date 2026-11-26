// 💣 Mèo Nổ — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
export default {
  id: 'meono',
  name: 'Mèo Nổ',
  icon: '💣',
  tagline: 'Rút bài và cầu mong đừng trúng bom',
  description: 'Đánh bài né lượt, xem trước chồng bài, tấn công hoặc xin bài trước khi rút cuối lượt. Rút phải Mèo Nổ mà không có Gỡ Bom sẽ bị loại; người cuối cùng còn sống thắng.',
  minPlayers: 2,
  maxPlayers: 6,
  tags: ['Bài', 'Vui nhộn'],
  order: 2,
  turnMs: 30000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🐱' }, { name: 'Cam', color: '#f06a14', label: '😺' }, { name: 'Vàng', color: '#eab80e', label: '😸' },
    { name: 'Lục', color: '#23b562', label: '😼' }, { name: 'Lam', color: '#2a85f7', label: '😻' }, { name: 'Tím', color: '#9354eb', label: '😽' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🔥 Hỗn Loạn — Mèo Hẹn Giờ, Bom Tổng Lực, Đổi Phận, hồn ma...' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'hand', label: 'Bài khởi đầu', default: 7,
      choices: [{ value: 7, label: '7 lá + 1 Gỡ Bom' }, { value: 4, label: '4 lá + 1 Gỡ Bom (nhanh, căng)' }] },
    { key: 'nopeMs', label: 'Thời gian hô "Không!"', default: 3000,
      choices: [{ value: 2000, label: '2 giây — nhanh tay' }, { value: 3000, label: '3 giây' }, { value: 5000, label: '5 giây — thong thả' }] },
  ],
  // Ước tính từ mô phỏng bot (mỗi quyết định ~3s): 2 người ~3.5', 4 người ~7.5', 6 người ~9' (Hỗn Loạn, 7 lá).
  estimate(o, players) {
    const m = (1.5 + players * 1.3) * (o.chaos ? 1 : 0.8) * (o.hand === 4 ? 0.85 : 1) * (o.nopeMs / 3000 * 0.3 + 0.7);
    return `~${Math.max(3, Math.round(m))} phút`;
  },
};
