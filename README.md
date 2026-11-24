# 🪐 Celestials Game Hub — Play Party & Board Games with Friends

Create a room, invite friends with a 4-letter code, let the host pick a game, and play together over **LAN or the Internet**. Empty seats can be filled with **Bots** anytime.

| Game | Type | Players |
|---|---|---|
| 🐴 **Ludo — Six-Horse Mayhem (*Cờ Cá Ngựa*)** — dynamic board shape based on player count (2 opposite square, 3 triangle, 4 square, 5 pentagon, 6 hexagon) | Turn-based | 2–6 |
| 💣 **Exploding Kittens (*Mèo Nổ*)** — with Chaos mode (Time-Bomb Kitten, Total Meltdown, ghosts, etc.) | Turn-based + out-of-turn "Nope!" window | 2–6 |
| 💎 **Incan Gold (*Kho Báu Inca*)** — with Chaos mode (charms, mystery cards, special temple rules, sabotage) | Simultaneous secret choice | 2–8 |
| 💀 **Skull (*Hoa & Sọ*)** — with Chaos mode (special discs, per-round omens, ghosts haunting stacks) | Turn-based + simultaneous first disc | 3–6 |
| 🃏 **Flip 7** — press your luck (draw or stay, duplicate busts); Chaos mode (Swap, Magnet, Oracle, Rainbow, per-round events, Fog) | Turn-based | 2–8 |
| 🎴 **UNO** — shout UNO! or get caught; house rules for stacking, 7-0, jump-in, draw-to-match; Chaos mode (Mirror, Color Bomb, Gift, Turbo, Hand Swap, Tornado, per-round events) | Turn-based + jump-in / catch window | 2–8 |
| 🎩 **Monopoly (*Cờ Tỷ Phú*)** — ~30-minute streamlined match: starting properties, sealed auctions, forced buyouts, instant win with 3 color sets; Chaos mode (skill cards, global events, Casino, Express Train, Portals, Jackpot) | Turn-based + simultaneous auction | 2–6 |
| 🎭 **Coup** — bluff roles to gather coins, assassinate, and coup; anyone can challenge or block (simultaneous reaction window). Optional Factions (Conversion, Embezzlement); Chaos mode (new roles: Bookie, Poisoner, Spy, Fortune Teller, Bodyguard; round events; black market Armor/Mask/Magnifier/Forger; ghosts) | Turn-based + simultaneous challenge/block | 2–8 |
| 🛸 **Impostor (*Kẻ Mạo Danh*)** — 2D Among Us-style social deduction: mini-game tasks, Impostor kills/sabotages/vents, body reports → meetings & voting. 5 maps with unique mechanics (Space Station, Night Express, Arctic Base, Haunted Park, Submarine), hidden roles (Sheriff, Guardian, Detective, Engineer, Medium, Jester, Shapeshifter, Phantom, Lovers), random events, item crates, proximity voice chat | Real-time | 4–10 |
| 🕵️ **Codenames (*Mật Danh*)** — Spymaster gives 1 word + 1 number, teammates vote on cards; 2 teams (5×5) or 3 teams (6×6), 4 word packs (General, Everyday Life, Nature, Adventure & Fantasy) or emoji picture mode; toggleable Events (Earthquake, Fog, Magic Mirror...), Team Skills (Double Clue, Shield, Jammer...), Special Cards (Treasure, Bomb, Traitor...). Bots can play both Spymaster and Guesser | Turn-based + simultaneous team voting | 4–15 |
| 💎 **Splendor** — gem merchant engine-builder: draft gems, reserve cards for gold, buy cards for permanent discounts, attract nobles; 5–6 player scaling with extra gems & cards. Chaos mode: card powers (Open Mine, Twin Gem, Prism, Extra Turn, Gift, Thief, Pickpocket, Tax), round events, noble perks, secret objectives, catch-up gems for later turn order | Turn-based | 2–6 |
| 🎨 **Draw & Guess (*Vẽ Đoán*)** — skribbl-style drawing game: artist picks 1 of 3 words and draws while everyone guesses (diacritic-insensitive matching + "close guess" hints) with gradual letter reveals; ~550 Vietnamese words across 7 topics + Easy pack. Toggleable Brush Events (Mirror, Fading Ink, Three Strokes, Monochrome, Shaky Pen, Flashlight, Blind Draw, Pinwheel, Speed Draw, Giant Brush), Guesser Items (Reveal Letter, Show Topic, Smoke Bomb, Double Bet), Special Words (difficulty choice, Golden Word ×2, Dual Artists), Voting & Gallery (reactions, awards, replay/download). Bots draw by sketching emoji contours | Real-time | 2–12 |
| ⚡ **Reflex (*Phản Xạ*)** *(sample template game, shown only with `HUB_DEV=1`)* | Real-time | 2–6 |

## Getting Started

Requires **Node.js 22.13+** (uses built-in `node:sqlite`). **Zero dependencies — no `npm install` needed.**

```bash
node server.js            # or: npm start
npm run online            # same + automatically opens a Cloudflare quick tunnel for Internet play
PORT=8080 node server.js  # custom port
```

Open `http://localhost:3000` → enter your name → **Create Room** → share the invite link → pick a game → **Start**.

- **Same Wi-Fi / LAN:** the server prints a local URL like `http://192.168.x.x:3000` — share it with friends. Keep the server terminal open while playing.
- **Over the Internet:** on Windows, double-click **`choi-online.cmd`**, or run `npm run online` (`node server.js --online`) in a single terminal. The server automatically launches a Cloudflare quick tunnel and prints a `https://....trycloudflare.com` URL; the in-room **Copy invite link** button uses this URL too. Uses local `cloudflared` if installed, otherwise fetches it via `npx` (the first run may take a moment). Closing the server closes the tunnel; each run generates a fresh URL.

### Chat, Voice & Room Controls

- **Chat 💬** (bottom-left corner, click or press `Enter`): works both in the lobby and during matches, with floating speech bubbles above the sender's seat.
- **Voice Chat 🎙️** (right above the chat button): click to join voice, click again or press `M` to mute/unmute; leave or mute individual players inside the chat panel. Requires `https` (online link) or `localhost` — browsers block microphone access on plain `http` LAN links.
- In 🛸 **Impostor (*Kẻ Mạo Danh*)**, living players can only chat during meetings, while ghosts (and spectators/Medium) share a dedicated 👻 channel; voice chat defaults to *proximity-based* (only hear nearby players, dead players are muted — configurable in match options).
- In 🕵️ **Codenames (*Mật Danh*)**, Spymasters can only chat with other Spymasters during a match (to prevent leaking clues) — voice chat is unmoderated, so play on the honor system.
- Refreshing (`F5`) or disconnecting automatically reconnects you to your exact seat. If a turn timer expires or a player disconnects, the server's bot plays on their behalf. Each browser tab acts as an independent player (handy for local testing).
- The host can **kick** players via 🚪 *Kick* in the seat dropdown or `✕` next to a spectator's name. Kicked players wait 2 minutes before rejoining that room. Players in an active match must be returned to the lobby first.
- **Seasonal Christmas Theme 🎄**: a light holiday layer (toggle `🎄 Noel` in the corner of the home card, saved in `localStorage.hub_xmas`) — fairy lights, snowy hills with pines and a snowman, a passing reindeer sleigh and gentle CSS snowfall behind the home screen, lobby and leaderboard; in games, lights + snow around the table and a snowflake-patterned pine felt on card tables.

### 🏆 Accounts, Avatars, Leaderboard & Cosmetics Shop

- **Accounts:** sign in on the home screen with a username + 4–8 digit PIN. First-time users click *Create account*; sessions persist per device. You can still play without signing in as a **guest** (marked with a "guest" badge and excluded from rankings).
- **🖼️ Avatars** (requires account, free): click the circle next to your name on the home screen or your seat badge in the lobby → select/paste/drop an image, pan, zoom, rotate, and Save. Update or remove anytime, even mid-match — everyone sees it immediately. Shown in the lobby, chat, leaderboard, and all games (in *Impostor*, only on voting cards & end screens so Shapeshifter/Disguise isn't spoiled).
- **Ratings & Leaderboard:** matches with **at least 2 signed-in players** played to completion are recorded. Each match awards a **score from −1 to +1** based on how many signed-in opponents you outranked (+1 first, −1 last, normalized across table sizes). Longer matches carry more weight based on real duration: `1×` per 10 minutes (rounded to 0.5), clamped to `×1…×3` (e.g., 3-min UNO = `×1`, 30-min Monopoly = `×3`). Your **Rating** (−100 to +100) is the weighted average with a 3-draw Bayesian prior so lucky streaks don't skew the top. Positive = winning, negative = losing. Bots and guests can play freely without affecting ratings.
- **`/report` Page** (🏆 button on home & lobby): filterable leaderboard (7/14/30 days or custom range, per-game filter), head-to-head matrix, recent matches, and aborted-match counts. URL query params preserve filters for easy sharing.
- **Credits & 🛍️ Cosmetics Shop:** every recorded match awards credits to all signed-in participants: **`15 × duration weight`** (`×1…×3`), **`×1.5` for 1st place**, capped at **300 credits/day** (Vietnam time). Aborted matches grant 0 credits. Credits unlock purely **cosmetic items** (avatar frames, animated name effects, titles, chat bubbles, win effects, emote packs; plus in-game cosmetics: card backs for UNO/Exploding Kittens/Coup, dice skins for Ludo/Monopoly, hats for Impostor, easel frames for Draw & Guess) — **zero pay-to-win**, seat colors remain unchanged. Credits are computed directly from match history, so existing players automatically have credits available.
- **Data Storage:** stored in `data/` next to `server.js` (gitignored): **`hub.db`** (SQLite: accounts, match history, wallets/cosmetics) + `avatars/`. Legacy JSON files (`accounts.json`, `matches.jsonl`, `wallet.json`) are automatically migrated into `hub.db` on first launch and removed. Back up `hub.db` while the server is stopped to preserve history. Override the data path with `HUB_DATA=<dir>`.

### ⚙️ Scaling & Performance

The hub automatically spawns **one room worker process per CPU core** (`HUB_WORKERS=<n>` to override, `1` for single-process). Each room lives completely inside one worker (sharded by room code). The primary process accepts sockets and hands them off to the target worker; shared state lives in `hub.db`. Game states are broadcast as **JSON deltas**, cutting bandwidth to ~15–25% of full state for real-time and typical turn-based games. The leaderboard runs on a background worker thread, cached for 30s, serving the top 200 players.

- `GET /api/health`: per-worker room/connection counts, CPU %, event-loop lag, and memory usage.
- `node tools/load.js <game> [rooms] [players/room] [seconds] [port]`: spins up bot-filled rooms for load testing. Benchmarked on an i7-1260P laptop: 500 *Impostor* rooms (5,000 players + bots, 2,000 connections) across 8 workers at ~80% per core and ~40ms p99 latency.
- Vertically scales with CPU cores on a single host; multi-host scaling would require an external room-code router (not yet implemented).

## Azure Deployment (CI/CD)

Production runs on **Azure Container Apps** (Consumption plan, Australia East): scales to zero when idle (~free, ~10–20s cold start for the first player). Max 1 replica since active rooms live in RAM. At 0.25 vCPU, it runs a single process (`HUB_WORKERS=1`). Server `data/` is mounted on an **Azure Files share** (`hubdata` at `/app/data`) so accounts, match history, and wallets persist across deploys. Because SMB shares do not support SQLite WAL or byte-range locks reliably, `HUB_DB_WAL=0` is set and the share is mounted with `nobrl`.

GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
- **Every push/PR to `main`**: runs bot simulations (`simulate`, 3 matches per game), builds the Docker image, starts the container, and runs WebSocket `smoke` tests.
- **Push to `main`** (or manual *Run workflow*): pushes the image to `ghcr.io/truong0996/gamehub`, authenticates to Azure via OIDC (managed identity, no stored secrets), creates/updates the app from [`deploy/containerapp.yaml`](deploy/containerapp.yaml), and verifies `https://…/` and `/api/report`. Redeploying restarts the container, clearing active in-RAM rooms (accounts & history are preserved).

First-time infrastructure provisioning: `az login` to the target subscription → `bash deploy/azure-setup.sh` (creates resource group, storage + share, environment, managed identity) → set the 3 Actions variables `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID` printed by the script → push. The `gamehub` package on `ghcr.io` must be **Public** so Azure can pull without credentials.

Useful commands:
- Stream logs: `az containerapp logs show -g rg-celestials-hub -n celestials-hub --follow`
- Download data backup: `az storage file download-batch -s hubdata -d <dir> --account-name <storage>`

## Development

Every game is a self-contained plugin under `games/<dir>/`. See **[CLAUDE.md](CLAUDE.md)** for architecture details, the server/client game plugin interface, and WebSocket protocol documentation.

```bash
HUB_DEV=1 node server.js                 # also show sample template game games/_template
node tools/simulate.js cocangua 50        # simulate 50 all-bot matches (add players=3 for 3 players)
node tools/smoke.js cocangua 3000         # end-to-end WebSocket smoke test against a running server (Node 22+)
```
