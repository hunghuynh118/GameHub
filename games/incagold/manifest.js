// 💎 Kho Báu Inca (Incan Gold) — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
export default {
  id: 'incagold',
  name: 'Kho Báu Inca',
  icon: '💎',
  tagline: 'Đi tiếp đào vàng hay ôm ngọc rút lui?',
  description: 'Cùng tiến vào 5 ngôi đền cổ và bí mật chọn đi tiếp hay về lều cất ngọc. Gặp cùng loại hiểm hoạ lần thứ hai khi còn trong hang là mất trắng cả vòng.',
  minPlayers: 2,
  maxPlayers: 8,
  tags: ['Bài', 'Mạo hiểm', 'Đông người'],
  order: 3,
  turnMs: 20000,
  seats: [
    { name: 'Đỏ', color: '#e0313f', label: '🦙' }, { name: 'Cam', color: '#f06a14', label: '🦅' },
    { name: 'Vàng', color: '#eab80e', label: '🐆' }, { name: 'Lục', color: '#23b562', label: '🐸' },
    { name: 'Lam', color: '#2a85f7', label: '🦜' }, { name: 'Tím', color: '#9354eb', label: '🐒' },
    { name: 'Hồng', color: '#f263ad', label: '🦩' }, { name: 'Ngọc', color: '#12aeb0', label: '🦎' },
  ],
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🔥 Hỗn Loạn — bùa, lá bí ẩn, đền có luật riêng, chơi xấu' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'rounds', label: 'Số đền', default: 5,
      choices: [{ value: 5, label: '5 đền (chuẩn)' }, { value: 3, label: '3 đền (nhanh)' }] },
  ],
  // Ước tính từ mô phỏng bot (mỗi pha chọn ~1.5s + animation).
  estimate(o, players) {
    const m = (4 + players * 0.35) * (o.rounds / 5) * (o.chaos ? 1.2 : 1);
    return `~${Math.max(2, Math.round(m))} phút`;
  },
};
