// 🎩 Cờ Tỷ Phú — thông tin hiển thị ở hub + tuỳ chọn phòng chờ.
import { SEATS } from './data.js';

export default {
  id: 'typhu',
  name: 'Cờ Tỷ Phú',
  icon: '🎩',
  tagline: 'Mua đất, xây nhà, thu tiền thuê!',
  description: 'Phiên bản nhịp nhanh 2–6 người: chia sẵn đất đầu ván, đất bỏ qua sẽ đấu giá kín và có thể mua lại đất đối thủ giá ×2. Thắng khi giàu nhất lúc hết giờ, đối thủ phá sản hoặc đủ 3 bộ màu.',
  minPlayers: 2,
  maxPlayers: 6,
  tags: ['Cờ', 'Xúc xắc', 'Gia đình'],
  order: 6,
  turnMs: 25000,
  seats: SEATS,
  options: [
    { key: 'chaos', label: 'Chế độ', default: true,
      choices: [{ value: true, label: '🎁 Bất Ngờ — thẻ kỹ năng, biến cố, ô đặc biệt' }, { value: false, label: '😇 Cổ điển' }] },
    { key: 'minutes', label: 'Thời lượng', default: 30,
      choices: [{ value: 20, label: '20 phút' }, { value: 30, label: '30 phút' }, { value: 45, label: '45 phút' }, { value: 60, label: '60 phút' }] },
    { key: 'deal', label: 'Chia đất đầu ván', default: 2,
      choices: [{ value: 2, label: '2 lô mỗi người' }, { value: 3, label: '3 lô mỗi người' }, { value: 0, label: 'Không chia' }] },
    { key: 'instant', label: 'Thắng độc quyền', default: true,
      choices: [{ value: true, label: '🏆 Đủ 3 bộ màu là thắng ngay' }, { value: false, label: 'Tắt' }] },
  ],
  estimate: o => `≤ ${o.minutes} phút`,
};
