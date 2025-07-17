import{r as j}from"./index-Br1290MD.js";function X(){return`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        #game-wrapper {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Orbitron', monospace;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
        }
        .game-container {
            position: relative;
            background: radial-gradient(circle at center, #0a0a1f 0%, #000 100%);
            border: 4px solid #00ffff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 
                0 0 20px #00ffff,
                0 0 40px #00ffff,
                inset 0 0 20px rgba(0, 255, 255, 0.1);
            animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
            from { box-shadow: 0 0 20px #00ffff, 0 0 40px #00ffff, inset 0 0 20px rgba(0, 255, 255, 0.1); }
            to { box-shadow: 0 0 30px #00ffff, 0 0 60px #00ffff, inset 0 0 30px rgba(0, 255, 255, 0.2); }
        }
        canvas#gameCanvas {
            border: 2px solid #ff00ff;
            background: linear-gradient(180deg, #000428 0%, #004e92 100%);
            box-shadow: inset 0 0 50px rgba(255, 0, 255, 0.3);
            cursor: none;
        }
        .ui {
            position: absolute;
            top: 30px;
            left: 30px;
            right: 30px;
            display: flex;
            justify-content: space-between;
            color: #00ffff;
            font-size: 18px;
            font-weight: bold;
            text-shadow: 0 0 10px #00ffff;
        }
        .game-over {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.9);
            border: 3px solid #ff00ff;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            color: #00ffff;
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 0 10px #00ffff;
            box-shadow: 0 0 30px #ff00ff;
            display: none;
        }
        .game-over button {
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            border: none;
            color: #000;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
            transition: all 0.3s;
        }
        .game-over button:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px #fff;
        }
        .instructions {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            color: rgba(0, 255, 255, 0.8);
            font-size: 12px;
            text-shadow: 0 0 8px rgba(0, 255, 255, 0.7);
            pointer-events: none;
            z-index: 10;
            white-space: nowrap;
            padding-bottom: 5px; /* Add some space below the text */
        }
    </style>
    <div id="game-wrapper">
        <div class="game-container">
            <div class="ui">
                <div>SCORE: <span id="score">0</span></div>
                <div>LEVEL: <span id="level">1</span></div>
                <div>LIVES: <span id="lives">3</span></div>
            </div>
            <canvas id="gameCanvas" width="800" height="600"></canvas>
            <div class="game-over" id="gameOver">
                <div id="gameOverText">GAME OVER</div>
                <div>Final Score: <span id="finalScore">0</span></div>
                <button id="restart-button">PLAY AGAIN</button>
            </div>
            <div class="instructions">
                Use A/D or ←/→ to move • SPACE to start/pause • ESC to restart
            </div>
        </div>
    </div>
    `}function J(){const u={paddle:"data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmojBzyZ3O/JdCkGKYPQ9NWFMwgZbL3t5ZpMDgxTru/srHX/CH4/gdeumQ==",brick:"data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmojBzyZ3O/JdCkGKYPQ9NWFMwgZbL3t5ZpMDgxTru/srHX/CH4/gdeumQ==",wall:"data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmojBzyZ3O/JdCkGKYPQ9NWFMwgZbL3t5ZpMDgxTru/srHX/CH4/gdeumQ==",gameOver:"data/game-over-2-sound-effect-230463.mp3",levelComplete:"data/arcade-videogame-sound-160948.mp3",miss:"data/game-over-arcade-6435.mp3"},F=document.querySelector(".game-container"),o=document.getElementById("gameCanvas");if(!o||!F)return;const A=()=>{const t=F.getBoundingClientRect(),i=Math.min(t.width-40,1e3),a=Math.min(t.height-120,700);let l=i,s=l*(3/4);s>a&&(s=a,l=s*(4/3)),o.width=l,o.height=s};A(),window.addEventListener("resize",A);const n=o.getContext("2d");let r,d,e,h=[],c={},m=[],b,B=0;const p={};function Z(){Object.keys(u).forEach(t=>{p[t]=new Audio(u[t]),p[t].volume=.8,p[t].preload="auto"})}function f(t){try{const i=p[t];i&&(i.paused||(i.pause(),i.currentTime=0),i.play().catch(a=>console.error(`Audio play failed for ${t}:`,a)))}catch(i){console.error(`Sound error for ${t}:`,i)}}function x(t,i,a,l=8){for(let s=0;s<l;s++)m.push({x:t,y:i,dx:(Math.random()-.5)*10,dy:(Math.random()-.5)*10,color:a,life:1,decay:.02})}function I(){m=m.filter(t=>(t.x+=t.dx,t.y+=t.dy,t.life-=t.decay,t.life>0))}function H(){m.forEach(t=>{n.save(),n.globalAlpha=t.life,n.fillStyle=t.color,n.fillRect(t.x,t.y,3,3),n.restore()})}function G(){h=[];const t=["#ff0080","#00ff80","#8000ff","#ff8000","#0080ff"],i=6,a=Math.min(12,Math.floor(o.width/60)),l=(o.width-60)/a-5,s=18;for(let g=0;g<i;g++)for(let C=0;C<a;C++)h.push({x:C*(l+5)+30,y:g*(s+5)+40,width:l,height:s,color:t[g%t.length],destroyed:!1,points:(i-g+1)*10})}function E(){e.x=o.width/2,e.y=o.height-100,e.dx=(Math.random()>.5?1:-1)*e.speed,e.dy=-e.speed}function v(){if(!r.gameRunning||r.paused){b=requestAnimationFrame(v);return}P(),Q(),b=requestAnimationFrame(v)}function P(){if(r.paused||r.gameOver)return;const i=Math.max(0,Math.min(B-d.width/2,o.width-d.width))-d.x;if(d.x+=i*.15,d.x=Math.max(0,Math.min(d.x,o.width-d.width)),(c.a||c.arrowleft)&&d.x>0&&(d.x-=d.speed),(c.d||c.arrowright)&&d.x<o.width-d.width&&(d.x+=d.speed),e.x+=e.dx,e.y+=e.dy,(e.x+e.dx>o.width-e.radius||e.x+e.dx<e.radius)&&(e.dx=-e.dx,f("wall"),e.x+=e.dx>0?1:-1,x(e.x,e.y,"#00ffff",5)),e.y<=e.radius&&(e.dy=-e.dy,f("wall"),x(e.x,e.y,"#00ffff",5)),e.y+e.radius>=d.y&&e.x>=d.x&&e.x<=d.x+d.width&&e.dy>0){let a=(e.x-d.x)/d.width;e.dx=(a-.5)*10,e.dy=-Math.abs(e.dy),f("paddle"),x(e.x,e.y,"#ff00ff",6)}h.forEach(a=>{!a.destroyed&&e.x>=a.x&&e.x<=a.x+a.width&&e.y>=a.y&&e.y<=a.y+a.height&&(a.destroyed=!0,e.dy=-e.dy,r.score+=a.points,f("brick"),x(a.x+a.width/2,a.y+a.height/2,a.color,10))}),h.every(a=>a.destroyed)&&(r.level++,e.speed+=.5,f("levelComplete"),G(),E()),e.y>o.height&&r.lives>0&&(r.lives--,L(),r.lives<=0?(f("gameOver"),T()):(f("miss"),E())),I(),L()}function Q(){const t=n.createLinearGradient(0,0,0,o.height);t.addColorStop(0,"#000428"),t.addColorStop(1,"#004e92"),n.fillStyle=t,n.fillRect(0,0,o.width,o.height),n.strokeStyle="rgba(0, 255, 255, 0.1)",n.lineWidth=1;for(let i=0;i<o.width;i+=40)n.beginPath(),n.moveTo(i,0),n.lineTo(i,o.height),n.stroke();for(let i=0;i<o.height;i+=40)n.beginPath(),n.moveTo(0,i),n.lineTo(o.width,i),n.stroke();h.forEach(i=>{i.destroyed||(n.save(),n.fillStyle=i.color,n.fillRect(i.x,i.y,i.width,i.height),n.shadowColor=i.color,n.shadowBlur=15,n.fillRect(i.x,i.y,i.width,i.height),n.restore())}),n.fillStyle="#00ffff",n.fillRect(d.x,d.y,d.width,d.height),n.beginPath(),n.arc(e.x,e.y,e.radius,0,Math.PI*2),n.fillStyle="#ff00ff",n.fill(),n.closePath(),H()}function L(){document.getElementById("score").innerText=r.score,document.getElementById("level").innerText=r.level,document.getElementById("lives").innerText=r.lives}function T(){r.gameOver=!0,r.gameRunning=!1,document.getElementById("finalScore").innerText=r.score,document.getElementById("gameOver").style.display="block"}function M(){document.getElementById("gameOver").style.display="none",r={score:0,level:1,lives:10,gameRunning:!1,gameOver:!1,paused:!1};const t=Math.max(80,Math.min(120,o.width*.15));d={x:o.width/2-t/2,y:o.height-30,width:t,height:16,speed:5};const i=Math.max(6,Math.min(10,o.width*.01));e={x:o.width/2,y:o.height-60,radius:i,dx:2,dy:-2,speed:2},G(),E(),L(),Q()}function D(){r.gameOver||(r.paused=!r.paused,r.paused||v())}function R(t){c[t.key.toLowerCase()]=!0,t.code==="Space"&&(t.preventDefault(),r.gameRunning?D():(r.gameRunning=!0,v())),t.code==="Escape"&&M()}function S(t){c[t.key.toLowerCase()]=!1}const O=t=>{const i=o.getBoundingClientRect(),a=o.width/i.width;B=(t.clientX-i.left)*a},w=t=>{t.preventDefault();const i=o.getBoundingClientRect(),a=o.width/i.width;B=(t.touches[0].clientX-i.left)*a};return Z(),M(),document.getElementById("restart-button").addEventListener("click",M),window.addEventListener("keydown",R),window.addEventListener("keyup",S),o.addEventListener("mousemove",O),o.addEventListener("touchmove",w,{passive:!1}),o.addEventListener("touchstart",w),()=>{cancelAnimationFrame(b),window.removeEventListener("keydown",R),window.removeEventListener("keyup",S),window.removeEventListener("resize",A),o.removeEventListener("mousemove",O),o.removeEventListener("touchmove",w),o.removeEventListener("touchstart",w)}}let y=null;function V(){typeof y=="function"&&(y(),y=null),j();const u=document.getElementById("viewer-grid");u.innerHTML=X(),y=J()}export{V as handleBonus3Action};
