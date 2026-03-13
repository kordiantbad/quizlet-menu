(function () {

    const BIN_ID = "69b404aec3097a1dd520b676";
    const API_KEY = "$2a$10$WLVgpNMgyZgDD4fVZBKCD.HsiMviqb/43mhXWoUonr/Gw4.XJNSh2";

    try {
        const s = JSON.parse(__NEXT_DATA__.props.pageProps.dehydratedReduxStateKey);
        const username = s.core.user.username;

        fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { "X-Master-Key": API_KEY }
        })
        .then(res => res.json())
        .then(data => {
            const allowedUsers = data.record.allowedUsers;

            if (!allowedUsers.includes(username)) {
                return; // not allowed, do nothing
            }

            // ─── allowed, run the menu ───────────────────────────
            if (window.quizletFullMenu) return;
            window.quizletFullMenu = true;

            const style = document.createElement('style');
            style.textContent = `
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

                #ql-menu * {
                    box-sizing: border-box;
                    font-family: 'Inter', sans-serif;
                }

                #ql-menu {
                    animation: ql-slidein 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                @keyframes ql-slidein {
                    from { opacity: 0; transform: translateY(-18px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0)     scale(1);    }
                }

                .ql-btn {
                    width: 100%;
                    margin: 5px 0;
                    padding: 11px 14px;
                    border: 1px solid rgba(255,255,255,0.07);
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 13px;
                    font-weight: 600;
                    letter-spacing: 0.3px;
                    color: #fff;
                    background: rgba(255,255,255,0.06);
                    transition: background 0.2s, transform 0.15s, box-shadow 0.2s, border-color 0.2s;
                    position: relative;
                    overflow: hidden;
                    text-align: left;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .ql-btn:hover {
                    background: rgba(255,255,255,0.12);
                    border-color: rgba(255,255,255,0.15);
                    transform: translateY(-1px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }

                .ql-btn:active {
                    transform: translateY(0px) scale(0.98);
                    box-shadow: none;
                }

                .ql-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.15) 0%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.3s;
                    pointer-events: none;
                }

                .ql-btn:hover::after { opacity: 1; }

                .ql-btn.green  { border-color: rgba(74,222,128,0.3); }
                .ql-btn.green:hover { background: rgba(74,222,128,0.12); box-shadow: 0 4px 20px rgba(74,222,128,0.15); }

                .ql-btn.blue   { border-color: rgba(96,165,250,0.3); }
                .ql-btn.blue:hover { background: rgba(96,165,250,0.12); box-shadow: 0 4px 20px rgba(96,165,250,0.15); }

                .ql-btn.yellow { border-color: rgba(251,191,36,0.3); }
                .ql-btn.yellow:hover { background: rgba(251,191,36,0.12); box-shadow: 0 4px 20px rgba(251,191,36,0.15); }

                .ql-btn.red    { border-color: rgba(248,113,113,0.3); }
                .ql-btn.red:hover { background: rgba(248,113,113,0.12); box-shadow: 0 4px 20px rgba(248,113,113,0.15); }

                .ql-btn.pulse-green { animation: ql-pulse-green 0.5s ease; }
                .ql-btn.pulse-red   { animation: ql-pulse-red   0.5s ease; }

                @keyframes ql-pulse-green {
                    0%   { box-shadow: 0 0 0 rgba(74,222,128,0); background: rgba(255,255,255,0.06); }
                    40%  { box-shadow: 0 0 20px rgba(74,222,128,0.5); background: rgba(74,222,128,0.25); }
                    100% { box-shadow: 0 0 0 rgba(74,222,128,0); background: rgba(255,255,255,0.06); }
                }

                @keyframes ql-pulse-red {
                    0%   { box-shadow: 0 0 0 rgba(248,113,113,0); background: rgba(255,255,255,0.06); }
                    40%  { box-shadow: 0 0 20px rgba(248,113,113,0.5); background: rgba(248,113,113,0.25); }
                    100% { box-shadow: 0 0 0 rgba(248,113,113,0); background: rgba(255,255,255,0.06); }
                }

                .ql-label {
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 1.5px;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                    margin: 14px 0 6px 2px;
                }

                .ql-divider {
                    border: none;
                    border-top: 1px solid rgba(255,255,255,0.07);
                    margin: 10px 0;
                }

                .ql-input {
                    flex: 1;
                    padding: 10px 12px;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 6px;
                    background: rgba(255,255,255,0.05);
                    color: #fff;
                    font-size: 13px;
                    font-weight: 500;
                    outline: none;
                    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
                }

                .ql-input::placeholder { color: rgba(255,255,255,0.25); }

                .ql-input:focus {
                    border-color: rgba(96,165,250,0.5);
                    background: rgba(96,165,250,0.07);
                    box-shadow: 0 0 0 3px rgba(96,165,250,0.1);
                }

                .ql-badge {
                    display: inline-block;
                    padding: 2px 7px;
                    border-radius: 4px;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    background: rgba(255,255,255,0.08);
                    color: rgba(255,255,255,0.5);
                    margin-left: auto;
                }

                .ql-status {
                    font-size: 12px;
                    font-weight: 500;
                    min-height: 20px;
                    padding: 0 2px;
                    transition: color 0.3s;
                }

                .ql-close {
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.3);
                    cursor: pointer;
                    font-size: 14px;
                    padding: 4px;
                    border-radius: 4px;
                    transition: color 0.2s, background 0.2s;
                    line-height: 1;
                }

                .ql-close:hover {
                    color: rgba(248,113,113,0.9);
                    background: rgba(248,113,113,0.1);
                }

                .ql-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 14px;
                    padding-bottom: 12px;
                    border-bottom: 1px solid rgba(255,255,255,0.07);
                }

                .ql-title {
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .ql-title-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #4ade80;
                    box-shadow: 0 0 8px #4ade80;
                    animation: ql-pulse-dot 2s infinite;
                }

                @keyframes ql-pulse-dot {
                    0%, 100% { opacity: 1; box-shadow: 0 0 8px #4ade80; }
                    50%       { opacity: 0.4; box-shadow: 0 0 3px #4ade80; }
                }

                .ql-row {
                    display: flex;
                    gap: 6px;
                }

                .ql-row .ql-btn { flex: 1; }
            `;
            document.head.appendChild(style);

            const menu = document.createElement('div');
            menu.id = 'ql-menu';
            menu.style.cssText = `
                position: fixed;
                top: 80px;
                left: 80px;
                width: 300px;
                background: rgba(12, 12, 16, 0.92);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                color: #fff;
                padding: 16px;
                border-radius: 10px;
                border: 1px solid rgba(255,255,255,0.08);
                box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset;
                z-index: 999999;
            `;
            document.body.appendChild(menu);

            const header = document.createElement('div');
            header.className = 'ql-header';

            const titleWrap = document.createElement('div');
            titleWrap.className = 'ql-title';

            const dot = document.createElement('div');
            dot.className = 'ql-title-dot';

            const titleText = document.createElement('span');
            titleText.textContent = 'Quizlet Menu';

            const vBadge = document.createElement('span');
            vBadge.className = 'ql-badge';
            vBadge.textContent = 'V2';

            titleWrap.appendChild(dot);
            titleWrap.appendChild(titleText);
            titleWrap.appendChild(vBadge);

            const closeBtn = document.createElement('button');
            closeBtn.className = 'ql-close';
            closeBtn.innerHTML = '✕';
            closeBtn.onclick = () => {
                menu.style.transition = 'opacity 0.2s, transform 0.2s';
                menu.style.opacity = '0';
                menu.style.transform = 'scale(0.95) translateY(-10px)';
                setTimeout(() => { menu.remove(); window.quizletFullMenu = null; }, 200);
            };

            header.appendChild(titleWrap);
            header.appendChild(closeBtn);
            menu.appendChild(header);

            function norm(t) {
                return (t || '').toString().replace(/\s+/g, ' ').trim();
            }

            function getCardCount() {
                try {
                    let s = JSON.parse(__NEXT_DATA__.props.pageProps.dehydratedReduxStateKey);
                    return s.studyModesCommon.studiableData.studiableItems.length;
                } catch (e) { return null; }
            }

            function calcBestTime(cardCount) {
                const baseTime = cardCount * 0.28;
                const variance = (Math.random() * 0.4) - 0.2;
                return Math.max(1.0, baseTime + variance).toFixed(2);
            }

            function buildTruePairs() {
                try {
                    let s = JSON.parse(__NEXT_DATA__.props.pageProps.dehydratedReduxStateKey);
                    let cards = s.studyModesCommon.studiableData.studiableItems;
                    const set = new Set();
                    cards.forEach(c => {
                        try {
                            let term = c.cardSides.find(x => x.label == 'word').media[0].plainText;
                            let def  = c.cardSides.find(x => x.label == 'definition').media[0].plainText;
                            set.add(norm(term) + '|' + norm(def));
                            set.add(norm(def)  + '|' + norm(term));
                        } catch (e) {}
                    });
                    return set;
                } catch (e) { return null; }
            }

            function tileText(el) { return norm(el.innerText.replace('…', '')); }

            function isTruePair(a, b, truePairs) {
                const A = tileText(a), B = tileText(b);
                for (const p of truePairs) {
                    const [x, y] = p.split('|');
                    if ((x.startsWith(A) && y.startsWith(B)) || (x.startsWith(B) && y.startsWith(A))) return true;
                }
                return truePairs.has(A + '|' + B) || truePairs.has(B + '|' + A);
            }

            function pickWrongPair(truePairs) {
                const live = [...document.querySelectorAll('.FormattedText')].filter(el => el.offsetParent !== null);
                if (live.length < 2) return null;
                for (let attempts = 0; attempts < 300; attempts++) {
                    const i = Math.floor(Math.random() * live.length);
                    const j = Math.floor(Math.random() * live.length);
                    if (i === j) continue;
                    if (!isTruePair(live[i], live[j], truePairs)) return [live[i], live[j]];
                }
                return null;
            }

            function pickCorrectPair(truePairs) {
                const live = [...document.querySelectorAll('.FormattedText')].filter(el => el.offsetParent !== null);
                for (const a of live)
                    for (const b of live)
                        if (a !== b && isTruePair(a, b, truePairs)) return [a, b];
                return null;
            }

            function sendScore(timeSeconds, onSuccess, onFail) {
                let n = Number(timeSeconds.toString().replace(/\./g, ''));
                const encodeData = (d) => {
                    let s = JSON.stringify(d);
                    let arr = [];
                    for (let i = 0; i < s.length; i++) arr.push(s.charCodeAt(i) + (77 % (i + 1)));
                    return arr.join('-');
                };
                let data = encodeData({
                    previous_record: 0,
                    score: n,
                    selectedOnly: false,
                    time_started: Date.now() - (n * 100) - 1500,
                    too_small: 0
                });
                let token = document.cookie.split('qtkn=')[1]?.split(';')[0];
                if (!token) { onFail(); return; }
                let setId = __NEXT_DATA__.query.setId;
                fetch('https://quizlet.com/' + setId + '/scatter/highscores', {
                    headers: {
                        'content-type': 'application/json',
                        'cs-token': token,
                        'x-quizlet-api-security-id': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    body: JSON.stringify({ data }),
                    method: 'POST'
                }).then(() => onSuccess()).catch(() => onFail());
            }

            function mkBtn(icon, label, colorClass, fn) {
                const b = document.createElement('button');
                b.className = `ql-btn ${colorClass}`;
                const iconSpan = document.createElement('span');
                iconSpan.textContent = icon;
                const labelSpan = document.createElement('span');
                labelSpan.textContent = label;
                b.appendChild(iconSpan);
                b.appendChild(labelSpan);
                b.addEventListener('mousemove', (e) => {
                    const r = b.getBoundingClientRect();
                    b.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
                    b.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
                });
                b.onclick = fn;
                b.pulse = (success) => {
                    b.classList.remove('pulse-green', 'pulse-red');
                    void b.offsetWidth;
                    b.classList.add(success ? 'pulse-green' : 'pulse-red');
                    setTimeout(() => b.classList.remove('pulse-green', 'pulse-red'), 500);
                };
                b.setLabel = (txt) => { labelSpan.textContent = txt; };
                return b;
            }

            function mkLabel(txt) {
                const l = document.createElement('div');
                l.className = 'ql-label';
                l.textContent = txt;
                return l;
            }

            function mkDivider() {
                const d = document.createElement('div');
                d.className = 'ql-divider';
                return d;
            }

            const status = document.createElement('div');
            status.className = 'ql-status';

            function setStatus(msg, color) {
                status.textContent = msg;
                status.style.color = color;
            }

            menu.appendChild(mkLabel('🎮  Match Game'));

            const pairRow = document.createElement('div');
            pairRow.className = 'ql-row';

            const completeOneBtn = mkBtn('⚡', 'Complete 1 Pair', 'green', () => {
                const tp = buildTruePairs();
                if (!tp) { completeOneBtn.pulse(false); return; }
                const pair = pickCorrectPair(tp);
                if (!pair) { completeOneBtn.pulse(false); return; }
                pair[0].click();
                setTimeout(() => pair[1].click(), 1);
                completeOneBtn.pulse(true);
            });

            const completeAllBtn = mkBtn('✅', 'Complete All', 'green', async () => {
                const tp = buildTruePairs();
                if (!tp) { completeAllBtn.pulse(false); return; }
                completeAllBtn.setLabel('Running...');
                let pair;
                while ((pair = pickCorrectPair(tp)) !== null) {
                    try { pair[0].click(); setTimeout(() => pair[1].click(), 1); } catch (e) {}
                    await new Promise(r => setTimeout(r, 1));
                }
                completeAllBtn.setLabel('Complete All');
                completeAllBtn.pulse(true);
            });

            pairRow.appendChild(completeOneBtn);
            pairRow.appendChild(completeAllBtn);
            menu.appendChild(pairRow);

            const autoWrongBtn = mkBtn('💯', '100+ Score', 'blue', () => {
                const tp = buildTruePairs();
                if (!tp) { autoWrongBtn.pulse(false); return; }
                const cachedPair = pickWrongPair(tp);
                if (!cachedPair) { autoWrongBtn.pulse(false); return; }

                let duration = 2500, elapsed = 0;

                const clickInterval = setInterval(() => {
                    try { cachedPair[0].click(); setTimeout(() => cachedPair[1].click(), 0); } catch (e) {}
                }, 1);

                const displayInterval = setInterval(() => {
                    elapsed += 100;
                    autoWrongBtn.setLabel(`100+ Score (${Math.max(0, ((duration - elapsed) / 1000).toFixed(1))}s)`);
                    if (elapsed >= duration) {
                        clearInterval(clickInterval);
                        clearInterval(displayInterval);
                        autoWrongBtn.setLabel('100+ Score');
                        autoWrongBtn.pulse(true);
                    }
                }, 100);
            });
            menu.appendChild(autoWrongBtn);

            menu.appendChild(mkDivider());
            menu.appendChild(mkLabel('🏆  Score Spoof'));
            menu.appendChild(status);

            const spoofRow = document.createElement('div');
            spoofRow.style.cssText = 'display:flex; gap:6px; margin-top:4px;';

            const spoofInput = document.createElement('input');
            spoofInput.className = 'ql-input';
            spoofInput.type = 'text';
            spoofInput.placeholder = 'Time (e.g. 1.0)';
            spoofInput.style.cssText = 'flex:1; min-width:0;';
            spoofInput.oninput = () => {
                const v = spoofInput.value.trim();
                if (v && !isNaN(v)) setStatus(`Will submit: ${v}s`, '#4ade80');
                else setStatus('', '');
            };

            const spoofBtn = mkBtn('📤', 'Spoof', 'yellow', () => {
                const v = spoofInput.value.trim();
                if (!v || isNaN(v)) { spoofBtn.pulse(false); return; }
                setStatus('Submitting...', '#fbbf24');
                sendScore(v, () => {
                    spoofBtn.pulse(true);
                    setStatus(`✅ Submitted: ${v}s`, '#4ade80');
                }, () => {
                    spoofBtn.pulse(false);
                    setStatus('❌ Failed to submit', '#f87171');
                });
                });
            spoofBtn.style.cssText = 'flex:1; min-width:0; margin:5px 0;';

            spoofRow.appendChild(spoofInput);
            spoofRow.appendChild(spoofBtn);
            menu.appendChild(spoofRow);

            const autoBestBtn = mkBtn('⚡', 'Auto Best Time', 'yellow', () => {
                const cardCount = getCardCount();
                if (!cardCount) { autoBestBtn.pulse(false); setStatus('❌ Could not get card count', '#f87171'); return; }
                const bestTime = calcBestTime(cardCount);
                setStatus(`Submitting ${bestTime}s for ${cardCount} cards...`, '#fbbf24');
                autoBestBtn.setLabel('Submitting...');
                sendScore(bestTime, () => {
                    autoBestBtn.pulse(true);
                    autoBestBtn.setLabel('Auto Best Time');
                    setStatus(`✅ Submitted: ${bestTime}s`, '#4ade80');
                }, () => {
                    autoBestBtn.pulse(false);
                    autoBestBtn.setLabel('Auto Best Time');
                    setStatus('❌ Failed to submit', '#f87171');
                });
            });
            menu.appendChild(autoBestBtn);

            // ─── Dragging ───────────────────────────────────────
            let dragging = false, offsetX, offsetY, targetX, targetY, animating = false;

            menu.onmousedown = (e) => {
                if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
                    dragging = true;
                    offsetX = e.clientX - menu.offsetLeft;
                    offsetY = e.clientY - menu.offsetTop;
                    targetX = menu.offsetLeft;
                    targetY = menu.offsetTop;
                    document.body.style.userSelect = 'none';
                    e.preventDefault();
                    if (!animating) animateDrag();
                }
            };

            document.onmouseup = () => { dragging = false; document.body.style.userSelect = 'auto'; };
            document.onmousemove = (e) => {
                if (dragging) { targetX = e.clientX - offsetX; targetY = e.clientY - offsetY; e.preventDefault(); }
            };

            function animateDrag() {
                animating = true;
                const dx = (targetX - menu.offsetLeft) * 0.18;
                const dy = (targetY - menu.offsetTop) * 0.18;
                menu.style.left = menu.offsetLeft + dx + 'px';
                menu.style.top  = menu.offsetTop  + dy + 'px';
                if (dragging || Math.abs(dx) > 0.3 || Math.abs(dy) > 0.3) {
                    requestAnimationFrame(animateDrag);
                } else {
                    animating = false;
                }
            }

        });

    } catch (e) {
        console.error("Auth error:", e.message);
    }

})();
