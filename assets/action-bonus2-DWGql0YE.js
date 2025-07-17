import{r as E}from"./index-DbZOwx28.js";const z=["./lib/jszip.min.js","./lib/dicomParser.min.js","./lib/plotly-cartesian.min.js"];function I(n){return new Promise((o,p)=>{if(document.querySelector(`script[src="${n}"]`))return o();const l=document.createElement("script");l.src=n,l.onload=()=>o(),l.onerror=()=>p(new Error(`Failed to load script: ${n}`)),document.head.appendChild(l)})}async function P(){for(const n of z)await I(n)}function D(){return`
        <style>
            #dicom-viewer-container {
                width: 100%;
                height: 100%;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
            }
            #drop-zone {
                border: 2px dashed #ccc; border-radius: 8px; padding: 30px; text-align: center; margin-bottom: 20px; cursor: pointer; transition: all 0.3s;
            }
            #drop-zone.highlight { border-color: #007bff; background-color: #f0f8ff; }
            #plot-container {
                display: flex; flex-wrap: nowrap; width: 100%; justify-content: space-between; align-items: flex-start;
            }
            .plot-wrapper {
                display: flex; flex-direction: column; width: 32%; border-radius: 4px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); height: fit-content;
            }
            .plot-label { padding: 8px 10px; font-size: 0.9em; background: #f8f9fa; border-bottom: 1px solid #eee; text-align: center; color: #333; font-weight: 500; }
            .plot { width: 100%; aspect-ratio: 1 / 1; }
        </style>
        <div id="dicom-viewer-container">
            <h1>DICOM Zip File Viewer</h1>
            <div id="drop-zone">
                <p>Drag & drop a zip file containing DICOM images</p>
                <input type="file" id="file-input" accept=".zip" style="display: none;">
            </div>
            <div id="loading" style="text-align:center; display:none;">Processing...</div>
            <div id="plot-container"></div>
        </div>
    `}async function L(){const n=document.getElementById("drop-zone"),o=document.getElementById("file-input"),p=document.getElementById("plot-container"),l=document.getElementById("loading");n.addEventListener("click",()=>o.click()),o.addEventListener("change",t=>g(t.target.files)),["dragover","dragenter"].forEach(t=>{n.addEventListener(t,e=>{e.preventDefault(),n.classList.add("highlight")})}),["dragleave","drop"].forEach(t=>{n.addEventListener(t,e=>{e.preventDefault(),n.classList.remove("highlight")})}),n.addEventListener("drop",t=>g(t.dataTransfer.files));async function g(t){if(!(!t.length||!t[0].name.endsWith(".zip"))){l.style.display="block",p.innerHTML="";try{const e=await h(t[0]);w(e)}catch(e){console.error("Error processing ZIP:",e),p.innerHTML=`<p style="color:red; text-align:center">${e.message}</p>`}finally{l.style.display="none"}}}async function h(t){const e=await window.JSZip.loadAsync(t),a=Object.values(e.files).filter(r=>!r.dir&&(r.name.toLowerCase().endsWith(".dcm")||!r.name.includes(".")));if(a.length===0)throw new Error("No DICOM files found.");const i=[];for(const r of a)try{const s=await r.async("uint8array"),u=window.dicomParser.parseDicom(s,{untilTag:"x7fe00010"}),d=y(u);d!==null&&i.push({zPos:d,entry:r,originalIndex:i.length})}catch{}i.sort((r,s)=>r.zPos-s.zPos),i.forEach((r,s)=>{r.zIndex=s+1});const f=x(i.length),c=[];for(const r of f){const{entry:s}=i[r],u=await s.async("uint8array"),d=window.dicomParser.parseDicom(u),m=d.elements.x7fe00010,v=new Uint16Array(d.byteArray.buffer,m.dataOffset,m.length/2);c.push({pixelData:v,width:d.uint16("x00280011"),height:d.uint16("x00280010"),label:`Z: ${i[r].zPos.toFixed(2)}mm (${i[r].zIndex}/${i.length})`})}return c}function y(t){try{const e=t.string("x00200032");if(e)return parseFloat(e.split("\\")[2])}catch{}return null}function x(t){return[.4,.5,.6].map(e=>Math.round(t*e)).map(e=>Math.min(Math.max(0,e),t-1))}function w(t){t.forEach((e,a)=>{const i=document.createElement("div");i.className="plot-wrapper",i.innerHTML=`<div class="plot-label">${e.label}</div><div class="plot" id="plot-${a}"></div>`,p.appendChild(i),b(`plot-${a}`,e)})}function b(t,{pixelData:e,width:a,height:i}){const f=[];for(let c=0;c<i;c++)f.push(e.subarray(c*a,(c+1)*a));window.Plotly.newPlot(t,[{z:f,type:"heatmap",colorscale:"Greys",showscale:!1,hoverinfo:"none"}],{autosize:!0,margin:{l:0,r:0,t:0,b:0},xaxis:{visible:!1,fixedrange:!0},yaxis:{visible:!1,scaleanchor:"x",scaleratio:1,fixedrange:!0,autorange:"reversed"}},{staticPlot:!0,displayModeBar:!1})}}async function S(){E();const n=document.getElementById("viewer-grid");n.innerHTML=D();try{await P(),L()}catch(o){console.error(o),n.innerHTML=`<p style="color: red; text-align: center;">${o.message}</p>`}}export{S as handleBonus2Action};
