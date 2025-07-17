import{r as h}from"./index-CUQMCrQX.js";function v(n){return new Promise((t,a)=>{if(document.querySelector(`script[src="${n}"]`)){t();return}const r=document.createElement("script");r.src=n,r.onload=()=>t(),r.onerror=()=>a(new Error(`Script load error for ${n}`)),document.head.appendChild(r)})}function x(){return`
        <style>
            #pdf-merger-container {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                max-width: 800px;
                margin: 40px auto;
                padding: 20px;
                background-color: #f9f9f9;
                color: #333;
                border-radius: 8px;
            }
            #pdf-merger-container h1 {
                text-align: center;
                color: #444;
            }
            #drop-zone {
                border: 2px dashed #ccc;
                border-radius: 8px;
                padding: 40px;
                text-align: center;
                margin-bottom: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                background-color: #fff;
            }
            #drop-zone.highlight {
                border-color: #007bff;
                background-color: #f0f8ff;
            }
            #file-list {
                margin-top: 15px;
                font-size: 0.9em;
                color: #555;
            }
            #merge-btn {
                padding: 10px 20px;
                font-size: 1em;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background-color: #007bff;
                color: white;
                transition: background-color 0.3s;
            }
            #merge-btn:disabled {
                background-color: #aaa;
                cursor: not-allowed;
            }
            #status, #download-area {
                text-align: center;
                margin-top: 20px;
            }
            #download-link {
                display: none;
                padding: 12px 25px;
                text-decoration: none;
                background-color: #007bff;
                color: white;
                border-radius: 5px;
            }
        </style>
        <div id="pdf-merger-container">
            <h1>PDF Merger</h1>
            <div id="drop-zone">
                <p>Drag & drop PDF files here, or click to select</p>
                <input type="file" id="file-input" accept=".pdf" multiple style="display: none;">
                <div id="file-list"></div>
            </div>
            <div style="text-align: center;">
                <button id="merge-btn" disabled>Merge PDFs</button>
            </div>
            <div id="status"></div>
            <div id="download-area">
                <a id="download-link" download="merged.pdf">Download Merged PDF</a>
            </div>
        </div>
    `}async function w(){const{PDFDocument:n}=window.PDFLib,t=document.getElementById("drop-zone"),a=document.getElementById("file-input"),r=document.getElementById("file-list"),i=document.getElementById("merge-btn"),s=document.getElementById("status"),c=document.getElementById("download-link");let d=[];t.addEventListener("click",()=>a.click()),t.addEventListener("dragover",e=>{e.preventDefault(),t.classList.add("highlight")}),t.addEventListener("dragleave",()=>t.classList.remove("highlight")),t.addEventListener("drop",e=>{e.preventDefault(),t.classList.remove("highlight"),p(e.dataTransfer.files)}),a.addEventListener("change",e=>p(e.target.files)),i.addEventListener("click",g);function p(e){d=Array.from(e).filter(o=>o.type==="application/pdf"),d.length>0?(r.innerHTML=`Selected files:<ul>${d.map(o=>`<li>${o.name}</li>`).join("")}</ul>`,i.disabled=!1):(r.textContent="",i.disabled=!0)}async function g(){if(d.length!==0){s.textContent="Processing...",i.disabled=!0,c.style.display="none";try{const e=await Promise.all(d.map(l=>l.arrayBuffer().then(f=>n.load(f)))),o=await n.create();for(const l of e)(await o.copyPages(l,l.getPageIndices())).forEach(y=>o.addPage(y));const u=await o.save(),m=new Blob([u],{type:"application/pdf"}),b=URL.createObjectURL(m);c.href=b,c.style.display="inline-block",s.textContent=`Merged ${e.length} files successfully.`}catch(e){console.error("Error merging PDFs:",e),s.textContent=`Error: ${e.message}`}finally{i.disabled=!1}}}}async function P(){h();const n=document.getElementById("viewer-grid");n.innerHTML=x();try{await v("./lib/pdf-lib.min.js"),w()}catch(t){console.error(t),n.innerHTML=`<p style="color: red; text-align: center;">${t.message}</p>`}}export{P as handleBonus1Action};
