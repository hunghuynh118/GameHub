// 🎄 Theme Giáng Sinh: mặc định bật cho toàn bộ trang, nút bật/tắt ở trang chủ & bảng xếp hạng (nhớ trong localStorage.hub_xmas_v3).
// Mọi trang trí nằm trong xmas.css dưới html[data-theme="xmas"]; file này dựng lớp nền #xm (dây đèn, đồi tuyết,
// cây thông, người tuyết, xe tuần lộc, bông tuyết) và gắn nút chuyển theme đồng bộ giữa các tab.
const KEY = 'hub_xmas_v3', root = document.documentElement;
const rnd = (a, b, d = 1) => (a + Math.random() * (b - a)).toFixed(d);

const deco = document.createElement('div');
deco.id = 'xm';
deco.setAttribute('aria-hidden', 'true');
const flakes = Array.from({ length: innerWidth < 640 ? 18 : 34 }, () =>
  `<i style="--x:${rnd(0, 100)}vw;--s:${rnd(3, 7)}px;--w:${rnd(-50, 50, 0)}px;--d:${rnd(10, 20)}s;--t:-${rnd(0, 20)}s"></i>`).join('');
deco.innerHTML = `<div class="xm-lights"></div><div class="xm-ground"></div><div class="xm-sleigh">🦌🦌🛷</div>${flakes}`;
document.body.prepend(deco);

const btn = Object.assign(document.createElement('button'), { id: 'xm-toggle', className: 'ghost home-pill', type: 'button' });
const homeTop = document.querySelector('.home-top') || document.querySelector('.home');
const rpHead = document.querySelector('.rp-head');
if (homeTop) homeTop.appendChild(btn);
else if (rpHead) {
  const back = rpHead.querySelector('.rp-back');
  rpHead.insertBefore(btn, back || null);
}

function set(on, save = false) {
  if (on) root.dataset.theme = 'xmas'; else delete root.dataset.theme;
  if (save) localStorage.setItem(KEY, on ? '1' : '0');
  if (btn.isConnected) {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.innerHTML = `<span class="xm-lbl">${on ? '🎄 Noel' : '🌿 Mộc'}</span><span class="xm-sw" aria-hidden="true"><i></i></span>`;
    btn.title = on ? 'Đang bật giao diện Giáng Sinh — nhấn để chuyển về mặc định' : 'Đang dùng giao diện mặc định — nhấn để bật giao diện Giáng Sinh';
  }
}
btn.onclick = () => set(root.dataset.theme !== 'xmas', true);
addEventListener('storage', e => { if (e.key === KEY) set(e.newValue !== '0'); });
set(localStorage.getItem(KEY) !== '0');
