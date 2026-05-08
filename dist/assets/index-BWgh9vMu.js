import{r as c,a as ir,j as e,R as qr}from"./index-1BEpWCn3.js";var Vr=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Kr={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(t)),t.textContent=Vr}var qe=Kr,Gr=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Jr={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-components-icon-transitions");t||(t=document.createElement("style"),t.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(t)),t.textContent=Gr}var Ue=Jr,Zr=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ei=({size:t=24,style:n={}})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:n,children:[e.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[e.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_list_sparkle",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ti=({size:t=20,...n})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[e.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),ni=({size:t=24,copied:n=!1,tint:o})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o?{color:o,transition:"color 0.3s ease"}:void 0,children:[e.jsxs("g",{className:`${Ue.iconState} ${n?Ue.hiddenScaled:Ue.visibleScaled}`,children:[e.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsxs("g",{className:`${Ue.iconState} ${n?Ue.visibleScaled:Ue.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),oi=({size:t=24,state:n="idle"})=>{const o=n==="idle",s=n==="sent",i=n==="failed",r=n==="sending";return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{className:`${Ue.iconStateFast} ${o?Ue.visibleScaled:r?Ue.sending:Ue.hiddenScaled}`,children:e.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsxs("g",{className:`${Ue.iconStateFast} ${s?Ue.visibleScaled:Ue.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:`${Ue.iconStateFast} ${i?Ue.visibleScaled:Ue.hiddenScaled}`,children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},si=({size:t=24,isOpen:n=!0})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{className:`${Ue.iconFade} ${n?Ue.visible:Ue.hidden}`,children:[e.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:`${Ue.iconFade} ${n?Ue.hidden:Ue.visible}`,children:[e.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),e.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),ri=({size:t=24,isPaused:n=!1})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{className:`${Ue.iconFadeFast} ${n?Ue.hidden:Ue.visible}`,children:[e.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsx("path",{className:`${Ue.iconFadeFast} ${n?Ue.visible:Ue.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ii=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),li=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),lr=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[e.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2_53",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ai=({size:t=24})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),ci=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[e.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),di=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),_i=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ui=({size:t=24})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),hi=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),mi=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),ar=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Do=ar.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),qo="feedback-freeze-styles",Po="__agentation_freeze";function pi(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Po]||(t[Po]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Po]}var Se=pi();typeof window<"u"&&!Se.installed&&(Se.origSetTimeout=window.setTimeout.bind(window),Se.origSetInterval=window.setInterval.bind(window),Se.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,n,...o)=>typeof t=="string"?Se.origSetTimeout(t,n):Se.origSetTimeout((...s)=>{Se.frozen?Se.frozenTimeoutQueue.push(()=>t(...s)):t(...s)},n,...o),window.setInterval=(t,n,...o)=>typeof t=="string"?Se.origSetInterval(t,n):Se.origSetInterval((...s)=>{Se.frozen||t(...s)},n,...o),window.requestAnimationFrame=t=>Se.origRAF(n=>{Se.frozen?Se.frozenRAFQueue.push(t):t(n)}),Se.installed=!0);var re=Se.origSetTimeout,gi=Se.origSetInterval,Sn=Se.origRAF;function fi(t){return t?ar.some(n=>{var o;return!!((o=t.closest)!=null&&o.call(t,`[${n}]`))}):!1}function yi(){if(typeof document>"u"||Se.frozen)return;Se.frozen=!0,Se.frozenTimeoutQueue=[],Se.frozenRAFQueue=[];let t=document.getElementById(qo);t||(t=document.createElement("style"),t.id=qo),t.textContent=`
    *${Do},
    *${Do}::before,
    *${Do}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),Se.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var s;if(n.playState!=="running")return;const o=(s=n.effect)==null?void 0:s.target;fi(o)||(n.pause(),Se.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function Ts(){var o;if(typeof document>"u"||!Se.frozen)return;Se.frozen=!1;const t=Se.frozenTimeoutQueue;Se.frozenTimeoutQueue=[];for(const s of t)Se.origSetTimeout(()=>{if(Se.frozen){Se.frozenTimeoutQueue.push(s);return}try{s()}catch(i){console.warn("[agentation] Error replaying queued timeout:",i)}},0);const n=Se.frozenRAFQueue;Se.frozenRAFQueue=[];for(const s of n)Se.origRAF(i=>{if(Se.frozen){Se.frozenRAFQueue.push(s);return}s(i)});for(const s of Se.pausedAnimations)try{s.play()}catch(i){console.warn("[agentation] Error resuming animation:",i)}Se.pausedAnimations=[],(o=document.getElementById(qo))==null||o.remove(),document.querySelectorAll("video").forEach(s=>{s.dataset.wasPaused==="false"&&(s.play().catch(()=>{}),delete s.dataset.wasPaused)})}function Wo(t){if(!t)return;const n=o=>o.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{t.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var fo=c.forwardRef(function({element:n,timestamp:o,selectedText:s,placeholder:i="What should change?",initialValue:r="",submitLabel:_="Add",onSubmit:y,onCancel:m,onDelete:E,style:f,accentColor:b="#3c82f7",isExiting:w=!1,lightMode:N=!1,computedStyles:k},B){const[U,W]=c.useState(r),[me,De]=c.useState(!1),[I,ne]=c.useState("initial"),[he,O]=c.useState(!1),[ke,Le]=c.useState(!1),xe=c.useRef(null),_e=c.useRef(null),ze=c.useRef(null),Ye=c.useRef(null);c.useEffect(()=>{w&&I!=="exit"&&ne("exit")},[w,I]),c.useEffect(()=>{re(()=>{ne("enter")},0);const ue=re(()=>{ne("entered")},200),Pe=re(()=>{const Ke=xe.current;Ke&&(Wo(Ke),Ke.selectionStart=Ke.selectionEnd=Ke.value.length,Ke.scrollTop=Ke.scrollHeight)},50);return()=>{clearTimeout(ue),clearTimeout(Pe),ze.current&&clearTimeout(ze.current),Ye.current&&clearTimeout(Ye.current)}},[]);const pe=c.useCallback(()=>{Ye.current&&clearTimeout(Ye.current),De(!0),Ye.current=re(()=>{De(!1),Wo(xe.current)},250)},[]);c.useImperativeHandle(B,()=>({shake:pe}),[pe]);const $e=c.useCallback(()=>{ne("exit"),ze.current=re(()=>{m()},150)},[m]),J=c.useCallback(()=>{U.trim()&&y(U.trim())},[U,y]),st=c.useCallback(ue=>{ue.stopPropagation(),!ue.nativeEvent.isComposing&&(ue.key==="Enter"&&!ue.shiftKey&&(ue.preventDefault(),J()),ue.key==="Escape"&&$e())},[J,$e]),P=[qe.popup,N?qe.light:"",I==="enter"?qe.enter:"",I==="entered"?qe.entered:"",I==="exit"?qe.exit:"",me?qe.shake:""].filter(Boolean).join(" ");return e.jsxs("div",{ref:_e,className:P,"data-annotation-popup":!0,style:f,onClick:ue=>ue.stopPropagation(),children:[e.jsxs("div",{className:qe.header,children:[k&&Object.keys(k).length>0?e.jsxs("button",{className:qe.headerToggle,onClick:()=>{const ue=ke;Le(!ke),ue&&re(()=>Wo(xe.current),0)},type:"button",children:[e.jsx("svg",{className:`${qe.chevron} ${ke?qe.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("span",{className:qe.element,children:n})]}):e.jsx("span",{className:qe.element,children:n}),o&&e.jsx("span",{className:qe.timestamp,children:o})]}),k&&Object.keys(k).length>0&&e.jsx("div",{className:`${qe.stylesWrapper} ${ke?qe.expanded:""}`,children:e.jsx("div",{className:qe.stylesInner,children:e.jsx("div",{className:qe.stylesBlock,children:Object.entries(k).map(([ue,Pe])=>e.jsxs("div",{className:qe.styleLine,children:[e.jsx("span",{className:qe.styleProperty,children:ue.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",e.jsx("span",{className:qe.styleValue,children:Pe}),";"]},ue))})})}),s&&e.jsxs("div",{className:qe.quote,children:["“",s.slice(0,80),s.length>80?"...":"","”"]}),e.jsx("textarea",{ref:xe,className:qe.textarea,style:{borderColor:he?b:void 0},placeholder:i,value:U,onChange:ue=>W(ue.target.value),onFocus:()=>O(!0),onBlur:()=>O(!1),rows:2,onKeyDown:st}),e.jsxs("div",{className:qe.actions,children:[E&&e.jsx("div",{className:qe.deleteWrapper,children:e.jsx("button",{className:qe.deleteButton,onClick:E,type:"button",children:e.jsx(ui,{size:22})})}),e.jsx("button",{className:qe.cancel,onClick:$e,children:"Cancel"}),e.jsx("button",{className:qe.submit,style:{backgroundColor:b,opacity:U.trim()?1:.4},onClick:J,disabled:!U.trim(),children:_})]})]})}),xi=({content:t,children:n,...o})=>{const[s,i]=c.useState(!1),[r,_]=c.useState(!1),[y,m]=c.useState({top:0,right:0}),E=c.useRef(null),f=c.useRef(null),b=c.useRef(null),w=()=>{if(E.current){const B=E.current.getBoundingClientRect();m({top:B.top+B.height/2,right:window.innerWidth-B.left+8})}},N=()=>{_(!0),b.current&&(clearTimeout(b.current),b.current=null),w(),f.current=re(()=>{i(!0)},500)},k=()=>{f.current&&(clearTimeout(f.current),f.current=null),i(!1),b.current=re(()=>{_(!1)},150)};return c.useEffect(()=>()=>{f.current&&clearTimeout(f.current),b.current&&clearTimeout(b.current)},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:E,onMouseEnter:N,onMouseLeave:k,...o,children:n}),r&&ir.createPortal(e.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:y.top,right:y.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:s?1:0,transition:"opacity 0.15s ease"},children:t}),document.body)]})},bi=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,wi={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-help-tooltip-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(t)),t.textContent=bi}var Ds=wi,un=({content:t})=>e.jsx(xi,{className:Ds.tooltip,content:t,children:e.jsx(ti,{className:Ds.tooltipIcon})}),H={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},cr=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...H.navigation},{type:"header",label:"Header",...H.header},{type:"hero",label:"Hero",...H.hero},{type:"section",label:"Section",...H.section},{type:"sidebar",label:"Sidebar",...H.sidebar},{type:"footer",label:"Footer",...H.footer},{type:"modal",label:"Modal",...H.modal},{type:"banner",label:"Banner",...H.banner},{type:"drawer",label:"Drawer",...H.drawer},{type:"popover",label:"Popover",...H.popover},{type:"divider",label:"Divider",...H.divider}]},{section:"Content",items:[{type:"card",label:"Card",...H.card},{type:"text",label:"Text",...H.text},{type:"image",label:"Image",...H.image},{type:"video",label:"Video",...H.video},{type:"table",label:"Table",...H.table},{type:"grid",label:"Grid",...H.grid},{type:"list",label:"List",...H.list},{type:"chart",label:"Chart",...H.chart},{type:"codeBlock",label:"Code Block",...H.codeBlock},{type:"map",label:"Map",...H.map},{type:"timeline",label:"Timeline",...H.timeline},{type:"calendar",label:"Calendar",...H.calendar},{type:"accordion",label:"Accordion",...H.accordion},{type:"carousel",label:"Carousel",...H.carousel},{type:"logo",label:"Logo",...H.logo},{type:"faq",label:"FAQ",...H.faq},{type:"gallery",label:"Gallery",...H.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...H.button},{type:"input",label:"Input",...H.input},{type:"search",label:"Search",...H.search},{type:"form",label:"Form",...H.form},{type:"tabs",label:"Tabs",...H.tabs},{type:"dropdown",label:"Dropdown",...H.dropdown},{type:"toggle",label:"Toggle",...H.toggle},{type:"stepper",label:"Stepper",...H.stepper},{type:"rating",label:"Rating",...H.rating},{type:"fileUpload",label:"File Upload",...H.fileUpload},{type:"checkbox",label:"Checkbox",...H.checkbox},{type:"radio",label:"Radio",...H.radio},{type:"slider",label:"Slider",...H.slider},{type:"datePicker",label:"Date Picker",...H.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...H.avatar},{type:"badge",label:"Badge",...H.badge},{type:"tag",label:"Tag",...H.tag},{type:"breadcrumb",label:"Breadcrumb",...H.breadcrumb},{type:"pagination",label:"Pagination",...H.pagination},{type:"progress",label:"Progress",...H.progress},{type:"alert",label:"Alert",...H.alert},{type:"toast",label:"Toast",...H.toast},{type:"notification",label:"Notification",...H.notification},{type:"tooltip",label:"Tooltip",...H.tooltip},{type:"stat",label:"Stat",...H.stat},{type:"skeleton",label:"Skeleton",...H.skeleton},{type:"chip",label:"Chip",...H.chip},{type:"icon",label:"Icon",...H.icon},{type:"spinner",label:"Spinner",...H.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...H.pricing},{type:"testimonial",label:"Testimonial",...H.testimonial},{type:"cta",label:"CTA",...H.cta},{type:"productCard",label:"Product Card",...H.productCard},{type:"profile",label:"Profile",...H.profile},{type:"feature",label:"Feature",...H.feature},{type:"team",label:"Team",...H.team},{type:"login",label:"Login",...H.login},{type:"contact",label:"Contact",...H.contact}]}],Dt={};for(const t of cr)for(const n of t.items)Dt[n.type]=n;function $({w:t,h:n=3,strong:o}){return e.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:n,borderRadius:2,background:o?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Xe({w:t,h:n,radius:o=3,style:s}){return e.jsx("div",{style:{width:typeof t=="number"?`${t}px`:t,height:typeof n=="number"?`${n}px`:n,borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...s}})}function kt({size:t}){return e.jsx("div",{style:{width:t,height:t,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function vi({width:t,height:n}){const o=Math.max(8,n*.2);return e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${o}px`,gap:t*.02},children:[e.jsx(Xe,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),e.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginLeft:t*.04},children:[e.jsx($,{w:t*.06}),e.jsx($,{w:t*.07}),e.jsx($,{w:t*.05}),e.jsx($,{w:t*.06})]}),e.jsx(Xe,{w:t*.1,h:Math.min(28,n*.5),radius:4})]})}function ki({width:t,height:n,text:o}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[o?e.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:o}):e.jsx($,{w:t*.5,h:Math.max(6,n*.04),strong:!0}),e.jsx($,{w:t*.6}),e.jsx($,{w:t*.4}),e.jsx(Xe,{w:Math.min(140,t*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function ji({width:t,height:n}){const o=Math.max(3,Math.floor(n/36));return e.jsxs("div",{style:{padding:t*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[e.jsx($,{w:t*.6,h:4,strong:!0}),Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(Xe,{w:10,h:10,radius:2}),e.jsx($,{w:t*(.4+i*17%30/100)})]},i))]})}function Ci({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/160)));return e.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${t*.03}px`,gap:t*.05},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx($,{w:"60%",h:3,strong:!0}),e.jsx($,{w:"80%",h:2}),e.jsx($,{w:"70%",h:2}),e.jsx($,{w:"60%",h:2})]},i))})}function Si({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx($,{w:t*.3,h:4,strong:!0}),e.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),e.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[e.jsx($,{w:"90%"}),e.jsx($,{w:"70%"}),e.jsx($,{w:"80%"})]}),e.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(Xe,{w:70,h:26,radius:4}),e.jsx(Xe,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Mi({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),e.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx($,{w:"70%",h:4,strong:!0}),e.jsx($,{w:"95%",h:2}),e.jsx($,{w:"85%",h:2}),e.jsx($,{w:"50%",h:2})]})]})}function $i({width:t,height:n,text:o}){if(o)return e.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:o});const s=Math.max(2,Math.floor(n/18));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[e.jsx($,{w:t*.6,h:5,strong:!0}),Array.from({length:s},(i,r)=>e.jsx($,{w:`${70+r*13%25}%`,h:2},r))]})}function Ii({width:t,height:n}){return e.jsx("div",{style:{height:"100%",position:"relative"},children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,preserveAspectRatio:"none",fill:"none",children:[e.jsx("line",{x1:"0",y1:"0",x2:t,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("line",{x1:t,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("circle",{cx:t*.3,cy:n*.3,r:Math.min(t,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Li({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(t/100))),s=Math.max(2,Math.min(6,Math.floor(n/32)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:o},(i,r)=>e.jsx("div",{style:{flex:1,padding:"0 8px"},children:e.jsx($,{w:"70%",h:3,strong:!0})},r))}),Array.from({length:s},(i,r)=>e.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:o},(_,y)=>e.jsx("div",{style:{flex:1,padding:"0 8px"},children:e.jsx($,{w:`${50+(r*7+y*13)%40}%`,h:2})},y))},r))]})}function Ri({width:t,height:n}){const o=Math.max(2,Math.floor(n/28));return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[e.jsx(kt,{size:8}),e.jsx($,{w:`${55+i*17%35}%`,h:2})]},i))})}function Ei({width:t,height:n,text:o}){return e.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o?e.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:o}):e.jsx($,{w:Math.max(20,t*.5),h:3,strong:!0})})}function Ni({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[e.jsx($,{w:Math.min(80,t*.3),h:2}),e.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:e.jsx($,{w:"40%",h:2})})]})}function Bi({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx($,{w:60+i*17%30,h:2}),e.jsx(Xe,{w:"100%",h:28,radius:4})]},i)),e.jsx(Xe,{w:Math.min(120,t*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Ti({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(s,i)=>e.jsx("div",{style:{padding:"8px 12px",borderBottom:i===0?"2px solid var(--agd-bar-strong)":"none"},children:e.jsx($,{w:60,h:3,strong:i===0})},i))}),e.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[e.jsx($,{w:"80%",h:2}),e.jsx($,{w:"65%",h:2}),e.jsx($,{w:"75%",h:2})]})]})}function Di({width:t,height:n}){const o=Math.min(t,n)/2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),e.jsx("circle",{cx:t/2,cy:n*.38,r:o*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),e.jsx("path",{d:`M${t/2-o*.55} ${n*.78} C${t/2-o*.55} ${n*.55} ${t/2+o*.55} ${n*.55} ${t/2+o*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Pi({width:t,height:n}){return e.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx($,{w:Math.max(16,t*.5),h:2,strong:!0})})}function Wi({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[e.jsx($,{w:t*.5,h:Math.max(5,n*.06),strong:!0}),e.jsx($,{w:t*.35})]})}function Oi({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:t*.04},children:[e.jsx($,{w:t*.3,h:4,strong:!0}),e.jsx($,{w:t*.7}),e.jsx($,{w:t*.5}),e.jsxs("div",{style:{flex:1,display:"flex",gap:t*.03,marginTop:n*.06},children:[e.jsx(Xe,{w:"33%",h:"100%",radius:4}),e.jsx(Xe,{w:"33%",h:"100%",radius:4}),e.jsx(Xe,{w:"33%",h:"100%",radius:4})]})]})}function Ai({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/140))),s=Math.max(1,Math.min(3,Math.floor(n/120)));return e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:o*s},(i,r)=>e.jsx(Xe,{w:"100%",h:"100%",radius:4},r))})}function zi({width:t,height:n}){const o=Math.max(2,Math.floor((n-32)/28));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:e.jsx($,{w:t*.5,h:3,strong:!0})}),e.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:o},(s,i)=>e.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:i===0?"var(--agd-fill)":"transparent"},children:e.jsx($,{w:`${50+i*17%35}%`,h:2,strong:i===0})},i))})]})}function Fi({width:t,height:n}){const o=Math.min(t,n)/2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:t-2,height:n-2,rx:o,stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("circle",{cx:t-o,cy:n/2,r:o*.7,fill:"var(--agd-bar)"})]})}function Hi({width:t,height:n}){const o=Math.min(n/2,20);return e.jsxs("div",{style:{height:"100%",borderRadius:o,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${o*.6}px`,gap:6},children:[e.jsx(kt,{size:Math.min(14,n*.4)}),e.jsx($,{w:"50%",h:2})]})}function Yi({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx(kt,{size:Math.min(20,n*.5)}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:"60%",h:3,strong:!0}),e.jsx($,{w:"80%",h:2})]}),e.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Xi({width:t,height:n}){return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"0",y:"0",width:t,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),e.jsx("rect",{x:"1",y:"1",width:t*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Ui({width:t,height:n}){const o=Math.max(3,Math.min(7,Math.floor(t/50))),s=t/(o*2);return e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:o},(i,r)=>{const _=30+(r*37+17)%55;return e.jsx(Xe,{w:s,h:`${_}%`,radius:2},r)})})}function Qi({width:t,height:n}){const o=Math.min(t,n)*.12;return e.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[e.jsx(Xe,{w:"100%",h:"100%",radius:4}),e.jsx("div",{style:{position:"absolute",width:o*2,height:o*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:0,height:0,borderLeft:`${o*.6}px solid var(--agd-bar-strong)`,borderTop:`${o*.4}px solid transparent`,borderBottom:`${o*.4}px solid transparent`,marginLeft:o*.15}})})]})}function qi({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx($,{w:"60%",h:2})}),e.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Vi({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/80)));return e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[i>0&&e.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),e.jsx($,{w:40+i*13%20,h:2,strong:i===o-1})]},i))})}function Ki({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/40))),s=Math.min(28,n*.8);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:o},(i,r)=>e.jsx(Xe,{w:s,h:s,radius:4,style:r===1?{background:"var(--agd-bar)"}:void 0},r))})}function Gi({width:t}){return e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:e.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Ji({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(n/40)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:i===0?2:1},children:[e.jsx($,{w:`${40+i*17%25}%`,h:3,strong:!0}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:i===0?"▼":"▶"})]},i))})}function Zi({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[e.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[e.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),e.jsx(Xe,{w:"100%",h:"100%",radius:4}),e.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[e.jsx(kt,{size:5}),e.jsx(kt,{size:5}),e.jsx(kt,{size:5})]})]})}function el({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[e.jsx($,{w:t*.4,h:3,strong:!0}),e.jsx($,{w:t*.3,h:6,strong:!0}),e.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(o,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[e.jsx(kt,{size:5}),e.jsx($,{w:`${50+s*17%35}%`,h:2})]},s))}),e.jsx(Xe,{w:t*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function tl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[e.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx($,{w:"90%",h:2}),e.jsx($,{w:"75%",h:2}),e.jsx($,{w:"60%",h:2})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx(kt,{size:20}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx($,{w:60,h:3,strong:!0}),e.jsx($,{w:40,h:2})]})]})]})}function nl({width:t,height:n}){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[e.jsx($,{w:t*.5,h:Math.max(4,n*.05),strong:!0}),e.jsx($,{w:t*.35}),e.jsx(Xe,{w:Math.min(140,t*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function ol({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:e.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:"40%",h:3,strong:!0}),e.jsx($,{w:"70%",h:2})]})]})}function sl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[e.jsx($,{w:t*.4,h:3,strong:!0}),e.jsx(Xe,{w:60,h:Math.min(24,n*.6),radius:4})]})}function rl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsx($,{w:t*.5,h:2}),e.jsx($,{w:t*.4,h:Math.max(8,n*.18),strong:!0}),e.jsx($,{w:t*.3,h:2})]})}function il({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(t/100))),s=Math.min(12,n*.35);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:o},(i,r)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[e.jsx("div",{style:{width:s,height:s,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:r===0?"var(--agd-bar)":"transparent",flexShrink:0}}),r<o-1&&e.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},r))})}function ll({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[e.jsx($,{w:Math.max(16,t*.5),h:2,strong:!0}),e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function al({width:t,height:n}){const s=Math.min(n*.7,t/7.5);return e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:s*.2},children:Array.from({length:5},(i,r)=>e.jsx("svg",{width:s,height:s,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:r<3?"var(--agd-bar)":"none"})},r))})}function cl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[e.jsx("line",{x1:0,y1:n*.3,x2:t,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),e.jsx("line",{x1:0,y1:n*.6,x2:t,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),e.jsx("line",{x1:t*.4,y1:0,x2:t*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),e.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:e.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[e.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),e.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function dl({width:t,height:n}){const o=Math.max(3,Math.min(5,Math.floor(n/60)));return e.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[e.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[e.jsx(kt,{size:8}),i<o-1&&e.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},i))}),e.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:`${35+i*13%25}%`,h:3,strong:!0}),e.jsx($,{w:`${50+i*17%30}%`,h:2})]},i))})]})}function _l({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),e.jsx($,{w:t*.4,h:2}),e.jsx($,{w:t*.25,h:2})]})}function ul({width:t,height:n}){const o=Math.max(3,Math.min(8,Math.floor(n/20)));return e.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[e.jsx(kt,{size:6}),e.jsx(kt,{size:6}),e.jsx(kt,{size:6})]}),Array.from({length:o},(s,i)=>e.jsx("div",{style:{display:"flex",gap:6,paddingLeft:i>0&&i<o-1?12:0},children:e.jsx($,{w:`${25+i*23%50}%`,h:2,strong:i===0})},i))]})}function hl({width:t,height:n}){const i=Math.min((t-16)/7,(n-40)/6);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),e.jsx($,{w:t*.3,h:3,strong:!0}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(r,_)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i*.6},children:e.jsx($,{w:i*.5,h:2})},`h${_}`)),Array.from({length:35},(r,_)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:i},children:e.jsx("div",{style:{width:i*.6,height:i*.6,borderRadius:"50%",background:_===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:_===12?1:.3}})})},_))]})]})}function ml({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[e.jsx(kt,{size:Math.min(32,n*.55)}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:"50%",h:3,strong:!0}),e.jsx($,{w:"75%",h:2})]}),e.jsx($,{w:30,h:2})]})}function pl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),e.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx($,{w:"65%",h:4,strong:!0}),e.jsx($,{w:"40%",h:3}),e.jsx("div",{style:{flex:1}}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx($,{w:"30%",h:5,strong:!0}),e.jsx(Xe,{w:Math.min(70,t*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function gl({width:t,height:n}){const o=Math.min(48,n*.3);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[e.jsx(kt,{size:o}),e.jsx($,{w:t*.45,h:4,strong:!0}),e.jsx($,{w:t*.3,h:2}),e.jsxs("div",{style:{display:"flex",gap:t*.08,marginTop:n*.04},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx($,{w:20,h:3,strong:!0}),e.jsx($,{w:28,h:2})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx($,{w:20,h:3,strong:!0}),e.jsx($,{w:28,h:2})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[e.jsx($,{w:20,h:3,strong:!0}),e.jsx($,{w:28,h:2})]})]})]})}function fl({width:t,height:n}){const o=Math.max(t*.6,80),s=Math.max(3,Math.floor(n/40));return e.jsxs("div",{style:{height:"100%",display:"flex"},children:[e.jsx("div",{style:{width:t-o,background:"var(--agd-fill)",opacity:.3}}),e.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:t*.04},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[e.jsx($,{w:o*.4,h:4,strong:!0}),e.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:s},(i,r)=>e.jsx("div",{style:{padding:"6px 0"},children:e.jsx($,{w:`${50+r*17%35}%`,h:2,strong:r===0})},r))]})]})}function yl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[e.jsx($,{w:"70%",h:3,strong:!0}),e.jsx($,{w:"90%",h:2}),e.jsx($,{w:"60%",h:2})]}),e.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function xl({width:t,height:n}){const o=Math.min(n*.7,t*.3);return e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:t*.08},children:[e.jsx(Xe,{w:o,h:o,radius:o*.25}),e.jsx($,{w:t*.45,h:Math.max(4,n*.2),strong:!0})]})}function bl({width:t,height:n}){const o=Math.max(2,Math.min(5,Math.floor(n/56)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:i===0?2:1},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),e.jsx($,{w:t*(.3+i*13%25/100),h:3,strong:!0})]}),e.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:i===0?"▼":"▶"})]},i))})}function wl({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),s=Math.max(1,Math.min(3,Math.floor(n/120)));return e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${o}, 1fr)`,gridTemplateRows:`repeat(${s}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:o*s},(i,r)=>e.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:e.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[e.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),e.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},r))})}function vl({width:t,height:n}){const o=Math.min(t,n);return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("rect",{x:"1",y:(n-o+2)/2,width:o-2,height:o-2,rx:o*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("path",{d:`M${o*.25} ${n/2}l${o*.2} ${o*.2} ${o*.3}-${o*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function kl({width:t,height:n}){const o=Math.min(t,n)/2-1;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),e.jsx("circle",{cx:t/2,cy:n/2,r:o*.45,fill:"var(--agd-bar)"})]})}function jl({width:t,height:n}){const o=Math.max(2,n*.12),s=Math.min(n*.35,10),i=t*.55;return e.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[e.jsx("div",{style:{width:"100%",height:o,borderRadius:o/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:e.jsx("div",{style:{width:i,height:"100%",borderRadius:o/2,background:"var(--agd-bar)"}})}),e.jsx("div",{style:{position:"absolute",left:i-s,width:s*2,height:s*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Cl({width:t,height:n}){const o=Math.min(36,n*.15),s=7,i=4,r=Math.min((t-16)/s,(n-o-40)/(i+1));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[e.jsxs("div",{style:{height:o,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[e.jsx($,{w:"40%",h:2}),e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),e.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),e.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[e.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),e.jsx($,{w:t*.25,h:2,strong:!0}),e.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${s}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:s*i},(_,y)=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:r},children:e.jsx("div",{style:{width:r*.5,height:r*.5,borderRadius:"50%",background:y===10?"var(--agd-bar)":"transparent"},children:e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:y===10?1:.25}})})})},y))})]})]})}function Sl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[e.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),e.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Ml({width:t,height:n}){return e.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:e.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[e.jsx($,{w:"60%",h:2,strong:!0}),e.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function $l({width:t,height:n}){const o=Math.min(t,n);return e.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:e.jsx("path",{d:`M${t/2} ${(n-o)/2+o*.1}l${o*.12} ${o*.25} ${o*.28} ${o*.04}-${o*.2} ${o*.2} ${o*.05} ${o*.28}-${o*.25}-${o*.12}-${o*.25} ${o*.12} ${o*.05}-${o*.28}-${o*.2}-${o*.2} ${o*.28}-${o*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Il({width:t,height:n}){const o=Math.min(t,n)/2-2;return e.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${t} ${n}`,fill:"none",children:[e.jsx("circle",{cx:t/2,cy:n/2,r:o,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),e.jsx("path",{d:`M${t/2} ${n/2-o}a${o} ${o} 0 0 1 ${o} ${o}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Ll({width:t,height:n}){const o=Math.min(36,n*.25,t*.12),s=Math.max(1,Math.min(3,Math.floor(n/80)));return e.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:s},(i,r)=>e.jsxs("div",{style:{display:"flex",gap:t*.04,alignItems:"flex-start"},children:[e.jsx(Xe,{w:o,h:o,radius:o*.25}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[e.jsx($,{w:`${40+r*13%20}%`,h:3,strong:!0}),e.jsx($,{w:`${60+r*17%25}%`,h:2})]})]},r))})}function Rl({width:t,height:n}){const o=Math.max(2,Math.min(4,Math.floor(t/120))),s=Math.min(36,n*.25);return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[e.jsx($,{w:t*.3,h:4,strong:!0}),e.jsx("div",{style:{display:"flex",gap:t*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:o},(i,r)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[e.jsx(kt,{size:s}),e.jsx($,{w:t*.12,h:3,strong:!0}),e.jsx($,{w:t*.08,h:2})]},r))})]})}function El({width:t,height:n}){const o=Math.max(2,Math.min(3,Math.floor(n/80)));return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:t*.06,gap:n*.04},children:[e.jsx($,{w:t*.5,h:Math.max(5,n*.04),strong:!0}),e.jsx($,{w:t*.35,h:2}),e.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:o},(s,i)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:Math.min(60,t*.2),h:2}),e.jsx(Xe,{w:"100%",h:Math.min(32,n*.1),radius:4})]},i))}),e.jsx(Xe,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),e.jsx($,{w:t*.4,h:2})]})}function Nl({width:t,height:n}){return e.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:t*.04,gap:n*.03},children:[e.jsx($,{w:t*.4,h:4,strong:!0}),e.jsx($,{w:t*.6,h:2}),e.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:50,h:2}),e.jsx(Xe,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:40,h:2}),e.jsx(Xe,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[e.jsx($,{w:50,h:2}),e.jsx(Xe,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[e.jsx($,{w:60,h:2}),e.jsx(Xe,{w:"100%",h:"100%",radius:4})]}),e.jsx(Xe,{w:Math.min(120,t*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Bl={navigation:vi,hero:ki,sidebar:ji,footer:Ci,modal:Si,card:Mi,text:$i,image:Ii,table:Li,list:Ri,button:Ei,input:Ni,form:Bi,tabs:Ti,avatar:Di,badge:Pi,header:Wi,section:Oi,grid:Ai,dropdown:zi,toggle:Fi,search:Hi,toast:Yi,progress:Xi,chart:Ui,video:Qi,tooltip:qi,breadcrumb:Vi,pagination:Ki,divider:Gi,accordion:Ji,carousel:Zi,pricing:el,testimonial:tl,cta:nl,alert:ol,banner:sl,stat:rl,stepper:il,tag:ll,rating:al,map:cl,timeline:dl,fileUpload:_l,codeBlock:ul,calendar:hl,notification:ml,productCard:pl,profile:gl,drawer:fl,popover:yl,logo:xl,faq:bl,gallery:wl,checkbox:vl,radio:kl,slider:jl,datePicker:Cl,skeleton:Sl,chip:Ml,icon:$l,spinner:Il,feature:Ll,team:Rl,login:El,contact:Nl};function Tl({type:t,width:n,height:o,text:s}){const i=Bl[t];return i?e.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:e.jsx(i,{width:n,height:o,text:s})}):e.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:t})})}var Dl=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,Pl={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-design-mode-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(t)),t.textContent=Dl}var C=Pl,kn=24,so=5;function Ps(t,n,o,s,i){let r=1/0,_=1/0;const y=t.x,m=t.x+t.width,E=t.x+t.width/2,f=t.y,b=t.y+t.height,w=t.y+t.height/2,N=!s,k=N?[y,m,E]:[...s.left?[y]:[],...s.right?[m]:[]],B=N?[f,b,w]:[...s.top?[f]:[],...s.bottom?[b]:[]],U=[];for(const _e of n)o.has(_e.id)||U.push(_e);i&&U.push(...i);for(const _e of U){const ze=_e.x,Ye=_e.x+_e.width,pe=_e.x+_e.width/2,$e=_e.y,J=_e.y+_e.height,st=_e.y+_e.height/2;for(const P of k)for(const ue of[ze,Ye,pe]){const Pe=ue-P;Math.abs(Pe)<so&&Math.abs(Pe)<Math.abs(r)&&(r=Pe)}for(const P of B)for(const ue of[$e,J,st]){const Pe=ue-P;Math.abs(Pe)<so&&Math.abs(Pe)<Math.abs(_)&&(_=Pe)}}const W=Math.abs(r)<so?r:0,me=Math.abs(_)<so?_:0,De=[],I=new Set,ne=y+W,he=m+W,O=E+W,ke=f+me,Le=b+me,xe=w+me;for(const _e of U){const ze=_e.x,Ye=_e.x+_e.width,pe=_e.x+_e.width/2,$e=_e.y,J=_e.y+_e.height,st=_e.y+_e.height/2;for(const P of[ze,pe,Ye])for(const ue of[ne,O,he])if(Math.abs(ue-P)<.5){const Pe=`x:${Math.round(P)}`;I.has(Pe)||(I.add(Pe),De.push({axis:"x",pos:P}))}for(const P of[$e,st,J])for(const ue of[ke,xe,Le])if(Math.abs(ue-P)<.5){const Pe=`y:${Math.round(P)}`;I.has(Pe)||(I.add(Pe),De.push({axis:"y",pos:P}))}}return{dx:W,dy:me,guides:De}}function Ws(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Wl({placements:t,onChange:n,activeComponent:o,onActiveComponentChange:s,isDarkMode:i,exiting:r,onInteractionChange:_,className:y,passthrough:m,extraSnapRects:E,onSelectionChange:f,deselectSignal:b,onDragMove:w,onDragEnd:N,clearSignal:k,wireframe:B}){const[U,W]=c.useState(new Set),[me,De]=c.useState(null),[I,ne]=c.useState(null),[he,O]=c.useState(null),[ke,Le]=c.useState([]),[xe,_e]=c.useState(null),[ze,Ye]=c.useState(!1),pe=c.useRef(!1),[$e,J]=c.useState(new Set),st=c.useRef(new Map),P=c.useRef(null),ue=c.useRef(null),Pe=c.useRef(t);Pe.current=t;const Ke=c.useRef(f);Ke.current=f;const gt=c.useRef(w);gt.current=w;const mt=c.useRef(N);mt.current=N;const Ut=c.useRef(b);c.useEffect(()=>{b!==Ut.current&&(Ut.current=b,W(new Set))},[b]);const Mt=c.useRef(k);c.useEffect(()=>{if(k!==void 0&&k!==Mt.current){Mt.current=k;const S=new Set(Pe.current.map(Z=>Z.id));S.size>0&&(J(S),W(new Set),ue.current=null,re(()=>{n([]),J(new Set)},180))}},[k,n]),c.useEffect(()=>{const S=Z=>{const ge=Z.target;if(!(ge.tagName==="INPUT"||ge.tagName==="TEXTAREA"||ge.isContentEditable)){if((Z.key==="Backspace"||Z.key==="Delete")&&U.size>0){Z.preventDefault();const Re=new Set(U);J(Re),W(new Set),re(()=>{n(Pe.current.filter(ve=>!Re.has(ve.id))),J(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Z.key)&&U.size>0){Z.preventDefault();const Re=Z.shiftKey?20:1,ve=Z.key==="ArrowLeft"?-Re:Z.key==="ArrowRight"?Re:0,Ee=Z.key==="ArrowUp"?-Re:Z.key==="ArrowDown"?Re:0;n(t.map(be=>U.has(be.id)?{...be,x:Math.max(0,be.x+ve),y:Math.max(0,be.y+Ee)}:be));return}if(Z.key==="Escape"){o?s(null):U.size>0&&W(new Set);return}}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[U,o,t,n,s]);const Qt=c.useCallback(S=>{if(S.button!==0||m||S.target.closest(`.${C.placement}`))return;S.preventDefault(),S.stopPropagation();const ge=window.scrollY,ae=S.clientX,Re=S.clientY;if(o){ue.current="place",_==null||_(!0);let ve=!1,Ee=ae,be=Re;const We=ee=>{Ee=ee.clientX,be=ee.clientY;const g=Math.abs(Ee-ae),x=Math.abs(be-Re);if((g>5||x>5)&&(ve=!0),ve){const M=Math.min(ae,Ee),L=Math.min(Re,be),G=Math.abs(Ee-ae),V=Math.abs(be-Re);De({x:M,y:L,w:G,h:V}),O({x:ee.clientX+12,y:ee.clientY+12,text:`${Math.round(G)} × ${Math.round(V)}`})}},Je=ee=>{window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",Je),De(null),O(null),ue.current=null,_==null||_(!1);const g=H[o];let x,M,L,G;ve?(x=Math.min(ae,Ee),M=Math.min(Re,be)+ge,L=Math.max(kn,Math.abs(Ee-ae)),G=Math.max(kn,Math.abs(be-Re))):(L=g.width,G=g.height,x=ae-L/2,M=Re+ge-G/2),x=Math.max(0,x),M=Math.max(0,M);const V={id:Ws(),type:o,x,y:M,width:L,height:G,scrollY:ge,timestamp:Date.now()},D=[...t,V];n(D),W(new Set([V.id])),s(null)};window.addEventListener("mousemove",We),window.addEventListener("mouseup",Je)}else{S.shiftKey||W(new Set),ue.current="select";let ve=!1;const Ee=We=>{const Je=Math.abs(We.clientX-ae),ee=Math.abs(We.clientY-Re);if((Je>4||ee>4)&&(ve=!0),ve){const g=Math.min(ae,We.clientX),x=Math.min(Re,We.clientY);ne({x:g,y:x,w:Math.abs(We.clientX-ae),h:Math.abs(We.clientY-Re)})}},be=We=>{if(window.removeEventListener("mousemove",Ee),window.removeEventListener("mouseup",be),ue.current=null,ve){const Je=Math.min(ae,We.clientX),ee=Math.min(Re,We.clientY)+ge,g=Math.abs(We.clientX-ae),x=Math.abs(We.clientY-Re),M=new Set(S.shiftKey?U:new Set);for(const L of t)L.y-ge,L.x+L.width>Je&&L.x<Je+g&&L.y+L.height>ee&&L.y<ee+x&&M.add(L.id);W(M)}ne(null)};window.addEventListener("mousemove",Ee),window.addEventListener("mouseup",be)}},[o,m,t,n,U]),Rt=c.useCallback((S,Z)=>{var V;if(S.button!==0)return;const ge=S.target;if(ge.closest(`.${C.handle}`)||ge.closest(`.${C.deleteButton}`))return;S.preventDefault(),S.stopPropagation();let ae;S.shiftKey?(ae=new Set(U),ae.has(Z)?ae.delete(Z):ae.add(Z)):U.has(Z)?ae=new Set(U):ae=new Set([Z]),W(ae),(ae.size!==U.size||[...ae].some(D=>!U.has(D)))&&((V=Ke.current)==null||V.call(Ke,ae,S.shiftKey));const ve=S.clientX,Ee=S.clientY,be=new Map;for(const D of t)ae.has(D.id)&&be.set(D.id,{x:D.x,y:D.y});ue.current="move",_==null||_(!0);let We=!1,Je=!1,ee=t,g=0,x=0;const M=new Map;for(const D of t)be.has(D.id)&&M.set(D.id,{w:D.width,h:D.height});const L=D=>{var it;const Me=D.clientX-ve,fe=D.clientY-Ee;if((Math.abs(Me)>2||Math.abs(fe)>2)&&(We=!0),!We)return;if(D.altKey&&!Je){Je=!0;const oe=[];for(const Oe of t)be.has(Oe.id)&&oe.push({...Oe,id:Ws(),timestamp:Date.now()});ee=[...t,...oe]}let Ne=1/0,ie=1/0,Q=-1/0,Be=-1/0;for(const[oe,Oe]of be){const dt=M.get(oe);dt&&(Ne=Math.min(Ne,Oe.x+Me),ie=Math.min(ie,Oe.y+fe),Q=Math.max(Q,Oe.x+Me+dt.w),Be=Math.max(Be,Oe.y+fe+dt.h))}const Fe={x:Ne,y:ie,width:Q-Ne,height:Be-ie},{dx:rt,dy:Y,guides:Te}=Ps(Fe,ee,new Set(be.keys()),void 0,E);Le(Te);const je=Me+rt,we=fe+Y;g=je,x=we,n(ee.map(oe=>{const Oe=be.get(oe.id);return Oe?{...oe,x:Math.max(0,Oe.x+je),y:Math.max(0,Oe.y+we)}:oe})),(it=gt.current)==null||it.call(gt,je,we)},G=()=>{var D;window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",G),ue.current=null,_==null||_(!1),Le([]),(D=mt.current)==null||D.call(mt,g,x,We)};window.addEventListener("mousemove",L),window.addEventListener("mouseup",G)},[U,t,n,_]),Ft=c.useCallback((S,Z,ge)=>{S.preventDefault(),S.stopPropagation();const ae=t.find(M=>M.id===Z);if(!ae)return;W(new Set([Z])),ue.current="resize",_==null||_(!0);const Re=S.clientX,ve=S.clientY,Ee=ae.width,be=ae.height,We=ae.x,Je=ae.y,ee={left:ge.includes("w"),right:ge.includes("e"),top:ge.includes("n"),bottom:ge.includes("s")},g=M=>{const L=M.clientX-Re,G=M.clientY-ve;let V=Ee,D=be,Me=We,fe=Je;ge.includes("e")&&(V=Math.max(kn,Ee+L)),ge.includes("w")&&(V=Math.max(kn,Ee-L),Me=We+Ee-V),ge.includes("s")&&(D=Math.max(kn,be+G)),ge.includes("n")&&(D=Math.max(kn,be-G),fe=Je+be-D);const Ne={x:Me,y:fe,width:V,height:D},{dx:ie,dy:Q,guides:Be}=Ps(Ne,Pe.current,new Set([Z]),ee,E);Le(Be),ie!==0&&(ee.right?V+=ie:ee.left&&(Me+=ie,V-=ie)),Q!==0&&(ee.bottom?D+=Q:ee.top&&(fe+=Q,D-=Q)),n(Pe.current.map(Fe=>Fe.id===Z?{...Fe,x:Me,y:fe,width:V,height:D}:Fe)),O({x:M.clientX+12,y:M.clientY+12,text:`${Math.round(V)} × ${Math.round(D)}`})},x=()=>{window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",x),O(null),ue.current=null,_==null||_(!1),Le([])};window.addEventListener("mousemove",g),window.addEventListener("mouseup",x)},[t,n,_]),qt=c.useCallback(S=>{ue.current=null,J(Z=>{const ge=new Set(Z);return ge.add(S),ge}),W(Z=>{const ge=new Set(Z);return ge.delete(S),ge}),re(()=>{n(Pe.current.filter(Z=>Z.id!==S)),J(Z=>{const ge=new Set(Z);return ge.delete(S),ge})},180)},[n]),Vt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},jt=c.useCallback(S=>{const Z=t.find(ge=>ge.id===S);Z&&(pe.current=!!Z.text,_e(S),Ye(!1))},[t]),Ge=c.useCallback(()=>{xe&&(Ye(!0),re(()=>{_e(null),Ye(!1)},150))},[xe]);c.useEffect(()=>{r&&xe&&Ge()},[r]);const ft=c.useCallback(S=>{xe&&(n(t.map(Z=>Z.id===xe?{...Z,text:S.trim()||void 0}:Z)),Ge())},[xe,t,n,Ge]),pt=typeof window<"u"?window.scrollY:0,Kt=["nw","ne","se","sw"],Ht=B?"#f97316":"#3c82f7",Gt=[{dir:"n",cls:C.edgeN,arrow:e.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Ht})})},{dir:"e",cls:C.edgeE,arrow:e.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:e.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Ht})})},{dir:"s",cls:C.edgeS,arrow:e.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:e.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Ht})})},{dir:"w",cls:C.edgeW,arrow:e.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:e.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Ht})})}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:P,className:`${C.overlay} ${i?"":C.light} ${o?C.placing:""} ${m?C.passthrough:""} ${r?C.overlayExiting:""} ${B?C.wireframe:""}${y?` ${y}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Qt,children:t.map(S=>{var Re;const Z=U.has(S.id),ge=((Re=Dt[S.type])==null?void 0:Re.label)||S.type,ae=S.y-pt;return e.jsxs("div",{"data-design-placement":S.id,className:`${C.placement} ${Z?C.selected:""} ${$e.has(S.id)?C.exiting:""}`,style:{left:S.x,top:ae,width:S.width,height:S.height,position:"fixed"},onMouseDown:ve=>Rt(ve,S.id),onDoubleClick:()=>jt(S.id),children:[e.jsx("span",{className:C.placementLabel,children:ge}),e.jsx("span",{className:`${C.placementAnnotation} ${S.text?C.annotationVisible:""}`,children:(S.text&&st.current.set(S.id,S.text),S.text||st.current.get(S.id)||"")}),e.jsx("div",{className:C.placementContent,children:e.jsx(Tl,{type:S.type,width:S.width,height:S.height,text:S.text})}),e.jsx("div",{className:C.deleteButton,onMouseDown:ve=>ve.stopPropagation(),onClick:()=>qt(S.id),children:"✕"}),Kt.map(ve=>e.jsx("div",{className:`${C.handle} ${C[`handle${ve.charAt(0).toUpperCase()}${ve.slice(1)}`]}`,onMouseDown:Ee=>Ft(Ee,S.id,ve)},ve)),Gt.map(({dir:ve,cls:Ee,arrow:be})=>e.jsx("div",{className:`${C.edgeHandle} ${Ee}`,onMouseDown:We=>Ft(We,S.id,ve),children:be},ve))]},S.id)})}),xe&&(()=>{var Je;const S=t.find(ee=>ee.id===xe);if(!S)return null;const Z=S.y-pt,ge=S.x+S.width/2,ae=Z-8,Re=Z+S.height+8,ve=ae>200,Ee=Re<window.innerHeight-100,be=Math.max(160,Math.min(window.innerWidth-160,ge));let We;return ve?We={left:be,bottom:window.innerHeight-ae}:Ee?We={left:be,top:Re}:We={left:be,top:Math.max(80,window.innerHeight/2-80)},e.jsx(fo,{element:((Je=Dt[S.type])==null?void 0:Je.label)||S.type,placeholder:Vt[S.type]||"Label or content text",initialValue:S.text??"",submitLabel:pe.current?"Save":"Set",onSubmit:ft,onCancel:Ge,onDelete:pe.current?()=>{ft("")}:void 0,isExiting:ze,lightMode:!i,style:We})})(),me&&e.jsx("div",{className:C.drawBox,style:{left:me.x,top:me.y,width:me.w,height:me.h},"data-feedback-toolbar":!0}),I&&e.jsx("div",{className:C.selectBox,style:{left:I.x,top:I.y,width:I.w,height:I.h},"data-feedback-toolbar":!0}),he&&e.jsx("div",{className:C.sizeIndicator,style:{left:he.x,top:he.y},"data-feedback-toolbar":!0,children:he.text}),ke.map((S,Z)=>e.jsx("div",{className:C.guideLine,style:S.axis==="x"?{position:"fixed",left:S.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:S.pos-pt,right:0,height:1},"data-feedback-toolbar":!0},`${S.axis}-${S.pos}-${Z}`))]})}function Ol(t){if(!t)return"";const n=t.scrollTop>2,o=t.scrollTop+t.clientHeight<t.scrollHeight-2;return`${n?C.fadeTop:""} ${o?C.fadeBottom:""}`}var a="currentColor",j="0.5";function Al({type:t}){switch(t){case"navigation":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:a,opacity:".4"}),e.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:a,opacity:".25"})]});case"header":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:a,opacity:".35"}),e.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:a,opacity:".15"})]});case"hero":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:a,opacity:".35"}),e.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:a,strokeWidth:j})]});case"section":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:a,opacity:".15"})]});case"sidebar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:a,opacity:".15"})]});case"footer":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:a,opacity:".2"})]});case"modal":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:a,strokeWidth:j})]});case"divider":return e.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:e.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:a,strokeWidth:"0.5",opacity:".3"})});case"card":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:a,opacity:".04"}),e.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:a,opacity:".12"})]});case"text":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:a,opacity:".12"})]});case"image":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:a,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:a,strokeWidth:".3",opacity:".25"})]});case"video":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:a,strokeWidth:j,fill:a,opacity:".15"})]});case"table":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:a,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:a,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:a,strokeWidth:".3",opacity:".25"}),e.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:a,strokeWidth:".3",opacity:".25"})]});case"grid":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:a,strokeWidth:j})]});case"list":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:a,opacity:".2"})]});case"chart":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:a,opacity:".2"}),e.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:a,opacity:".2"})]});case"accordion":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:a,strokeWidth:j})]});case"carousel":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:a,strokeWidth:j,opacity:".35"}),e.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:a,strokeWidth:j,opacity:".35"}),e.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:a,opacity:".35"}),e.jsx("circle",{cx:"10",cy:"14",r:".6",fill:a,opacity:".15"}),e.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:a,opacity:".15"})]});case"button":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:a,opacity:".25"})]});case"input":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:a,opacity:".12"})]});case"search":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:a,opacity:".12"})]});case"form":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:a,strokeWidth:j})]});case"tabs":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:a,strokeWidth:j})]});case"dropdown":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:a,strokeWidth:j,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"13",cy:"8",r:"2",fill:a,opacity:".3"})]});case"avatar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:a,strokeWidth:j})]});case"badge":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:a,opacity:".25"})]});case"breadcrumb":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:a,opacity:".3"}),e.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:a,strokeWidth:j,opacity:".2"}),e.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("path",{d:"M14 7l1 1-1 1",stroke:a,strokeWidth:j,opacity:".2"}),e.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:a,opacity:".15"})]});case"pagination":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:a,opacity:".15",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:a,strokeWidth:j})]});case"progress":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:a,opacity:".2"})]});case"toast":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:a,opacity:".12"})]});case"tooltip":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:a,strokeWidth:j})]});case"pricing":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:a,opacity:".1"}),e.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:a,opacity:".1"}),e.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:a,opacity:".2"})]});case"testimonial":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:a,opacity:".2",fontFamily:"serif",children:"“"}),e.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:a,opacity:".12"}),e.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:a,strokeWidth:j,opacity:".25"}),e.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:a,opacity:".15"})]});case"cta":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:a,strokeWidth:j})]});case"alert":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:a,strokeWidth:"0.6",opacity:".5"}),e.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:a,opacity:".5"}),e.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:a,opacity:".2"})]});case"banner":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:a,strokeWidth:j})]});case"stat":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:a,opacity:".3"}),e.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:a,opacity:".12"})]});case"stepper":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"4",cy:"8",r:"2",fill:a,opacity:".2",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:a,strokeWidth:".4",opacity:".3"}),e.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:a,strokeWidth:".4",opacity:".3"}),e.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:a,strokeWidth:j})]});case"tag":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:a,strokeWidth:j,opacity:".2"}),e.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:a,strokeWidth:j,opacity:".2"})]});case"rating":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:a,opacity:".25"}),e.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:a,opacity:".25"}),e.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:a,strokeWidth:j,opacity:".25"})]});case"map":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:a,strokeWidth:".3",opacity:".15"}),e.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:a,strokeWidth:".3",opacity:".15"}),e.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:a,opacity:".15",stroke:a,strokeWidth:j})]});case"timeline":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:a,strokeWidth:".4",opacity:".25"}),e.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:a,opacity:".2",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:a,opacity:".15"})]});case"fileUpload":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:a,strokeWidth:j,strokeDasharray:"2 1"}),e.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:a,opacity:".15"})]});case"codeBlock":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"4",cy:"4",r:".6",fill:a,opacity:".3"}),e.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:a,opacity:".3"}),e.jsx("circle",{cx:"7",cy:"4",r:".6",fill:a,opacity:".3"}),e.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:a,opacity:".12"})]});case"calendar":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:a,strokeWidth:j}),e.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:a,strokeWidth:".4",opacity:".25"}),e.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:a,opacity:".2"}),e.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:a,opacity:".2"}),e.jsx("circle",{cx:"7",cy:"9",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"9",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"13",cy:"9",r:".6",fill:a,opacity:".3"}),e.jsx("circle",{cx:"7",cy:"12",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"12",r:".6",fill:a,opacity:".2"})]});case"notification":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:a,strokeWidth:j,opacity:".25"}),e.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:a,opacity:".12"}),e.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:a,opacity:".25"})]});case"productCard":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:a,opacity:".04"}),e.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:a,strokeWidth:j})]});case"profile":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:a,opacity:".12"})]});case"drawer":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:a,strokeWidth:j,opacity:".15"})]});case"popover":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:a,strokeWidth:j})]});case"logo":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:a,strokeWidth:j,opacity:".3"}),e.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:a,opacity:".12"})]});case"faq":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:a,opacity:".3",fontWeight:"bold",children:"?"}),e.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:a,opacity:".12"}),e.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:a,opacity:".3",fontWeight:"bold",children:"?"}),e.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:a,opacity:".12"})]});case"gallery":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:a,strokeWidth:j})]});case"checkbox":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:a,strokeWidth:j,opacity:".35"})]});case"radio":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:a,strokeWidth:j}),e.jsx("circle",{cx:"10",cy:"8",r:"2",fill:a,opacity:".3"})]});case"slider":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:a,strokeWidth:j})]});case"datePicker":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:a,opacity:".12"}),e.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:a,strokeWidth:j,strokeDasharray:"2 1",opacity:".3"}),e.jsx("circle",{cx:"6",cy:"10",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"10",r:".6",fill:a,opacity:".3"}),e.jsx("circle",{cx:"14",cy:"10",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"6",cy:"13",r:".6",fill:a,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"13",r:".6",fill:a,opacity:".2"})]});case"skeleton":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:a,opacity:".08"}),e.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:a,opacity:".08"}),e.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:a,opacity:".08"})]});case"chip":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:a,opacity:".08",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:a,opacity:".25"}),e.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:a,strokeWidth:j,opacity:".2"}),e.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:a,strokeWidth:j,opacity:".2"}),e.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:a,strokeWidth:j,opacity:".25"})]});case"icon":return e.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:e.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:a,strokeWidth:j,opacity:".3"})});case"spinner":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:a,strokeWidth:j,opacity:".12"}),e.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:a,strokeWidth:j,opacity:".35",strokeLinecap:"round"})]});case"feature":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:a,strokeWidth:j,opacity:".25"}),e.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:a,opacity:".12"}),e.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:a,opacity:".12"})]});case"team":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:a,strokeWidth:j,opacity:".5"}),e.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:a,opacity:".15"}),e.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:a,opacity:".1"})]});case"login":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:a,opacity:".25"}),e.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:a,opacity:".2"})]});case"contact":return e.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[e.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:a,opacity:".2"}),e.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:a,strokeWidth:j}),e.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:a,opacity:".2"})]});default:return null}}function zl({activeType:t,onSelect:n,onDragStart:o,scrollRef:s,fadeClass:i,blankCanvas:r}){return e.jsx("div",{ref:s,className:`${C.placeScroll} ${i||""}`,children:cr.map(_=>e.jsxs("div",{className:C.paletteSection,children:[e.jsx("div",{className:C.paletteSectionTitle,children:_.section}),_.items.map(y=>e.jsxs("div",{className:`${C.paletteItem} ${t===y.type?C.active:""} ${r?C.wireframe:""}`,onClick:()=>n(y.type),onMouseDown:m=>{m.button===0&&o(y.type,m)},children:[e.jsx("div",{className:C.paletteItemIcon,children:e.jsx(Al,{type:y.type})}),e.jsx("span",{className:C.paletteItemLabel,children:y.label})]},y.type))]},_.section))})}function Fl({value:t,suffix:n}){const[o,s]=c.useState(null),[i,r]=c.useState(n),[_,y]=c.useState("up"),m=c.useRef(t),E=c.useRef(n),f=c.useRef(),b=o!==null&&i!==n;return c.useEffect(()=>{if(t!==m.current){if(t===0){m.current=t,E.current=n,s(null);return}y(t>m.current?"up":"down"),s(m.current),r(E.current),m.current=t,E.current=n,clearTimeout(f.current),f.current=re(()=>s(null),250)}else E.current=n},[t,n]),o===null?e.jsxs(e.Fragment,{children:[t,n?` ${n}`:""]}):b?e.jsxs("span",{className:C.rollingWrap,children:[e.jsxs("span",{style:{visibility:"hidden"},children:[t," ",n]}),e.jsxs("span",{className:`${C.rollingNum} ${_==="up"?C.exitUp:C.exitDown}`,children:[o," ",i]},`o${o}-${t}`),e.jsxs("span",{className:`${C.rollingNum} ${_==="up"?C.enterUp:C.enterDown}`,children:[t," ",n]},`n${t}`)]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:C.rollingWrap,children:[e.jsx("span",{style:{visibility:"hidden"},children:t}),e.jsx("span",{className:`${C.rollingNum} ${_==="up"?C.exitUp:C.exitDown}`,children:o},`o${o}-${t}`),e.jsx("span",{className:`${C.rollingNum} ${_==="up"?C.enterUp:C.enterDown}`,children:t},`n${t}`)]}),n?` ${n}`:""]})}function Hl({activeType:t,onSelect:n,isDarkMode:o,sectionCount:s,onDetectSections:i,visible:r,onExited:_,placementCount:y,onClearPlacements:m,onDragStart:E,blankCanvas:f,onBlankCanvasChange:b,wireframePurpose:w,onWireframePurposeChange:N,Tooltip:k}){const[B,U]=c.useState(!1),[W,me]=c.useState("exit"),[De,I]=c.useState(!1),[ne,he]=c.useState(!0),O=c.useRef(0),ke=c.useRef(""),Le=c.useRef(0),xe=c.useRef(),_e=c.useRef(null),[ze,Ye]=c.useState("");c.useEffect(()=>(r?(U(!0),clearTimeout(xe.current),cancelAnimationFrame(Le.current),Le.current=Sn(()=>{Le.current=Sn(()=>{me("enter")})})):(cancelAnimationFrame(Le.current),me("exit"),clearTimeout(xe.current),xe.current=re(()=>{U(!1),_==null||_()},200)),()=>cancelAnimationFrame(Le.current)),[r]);const pe=y>0||s>0,$e=y+s;return $e>0&&(O.current=$e,ke.current=f?$e===1?"Component":"Components":$e===1?"Change":"Changes"),c.useEffect(()=>{if(pe)De?he(!1):(he(!0),I(!0),Sn(()=>{Sn(()=>{he(!1)})}));else{he(!0);const J=re(()=>I(!1),300);return()=>clearTimeout(J)}},[pe]),c.useEffect(()=>{if(!B)return;const J=_e.current;if(!J)return;const st=()=>Ye(Ol(J));st(),J.addEventListener("scroll",st,{passive:!0});const P=new ResizeObserver(st);return P.observe(J),()=>{J.removeEventListener("scroll",st),P.disconnect()}},[B]),B?e.jsxs("div",{className:`${C.palette} ${C[W]} ${o?"":C.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:J=>J.stopPropagation(),onMouseDown:J=>J.stopPropagation(),onTransitionEnd:J=>{J.target===J.currentTarget&&(r||(clearTimeout(xe.current),U(!1),me("exit"),_==null||_()))},children:[e.jsxs("div",{className:C.paletteHeader,children:[e.jsx("div",{className:C.paletteHeaderTitle,children:"Layout Mode"}),e.jsxs("div",{className:C.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",e.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),e.jsxs("div",{className:`${C.canvasToggle} ${f?C.active:""}`,onClick:()=>b(!f),children:[e.jsx("span",{className:C.canvasToggleIcon,children:e.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[e.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),e.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),e.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),e.jsx("span",{className:C.canvasToggleLabel,children:"Wireframe New Page"})]}),e.jsx("div",{className:`${C.wireframePurposeWrap} ${f?"":C.collapsed}`,children:e.jsx("div",{className:C.wireframePurposeInner,children:e.jsx("textarea",{className:C.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:w,onChange:J=>N(J.target.value),rows:2})})}),e.jsx(zl,{activeType:t,onSelect:n,onDragStart:E,scrollRef:_e,fadeClass:ze,blankCanvas:f}),De&&e.jsx("div",{className:`${C.paletteFooterWrap} ${ne?C.footerHidden:""}`,children:e.jsx("div",{className:C.paletteFooterInner,children:e.jsx("div",{className:C.paletteFooterInnerContent,children:e.jsxs("div",{className:C.paletteFooter,children:[e.jsx("span",{className:C.paletteFooterCount,children:e.jsx(Fl,{value:O.current,suffix:ke.current})}),e.jsx("button",{className:C.paletteFooterClear,onClick:m,children:"Clear"})]})})})})]}):null}function $n(t){if(t.parentElement)return t.parentElement;const n=t.getRootNode();return n instanceof ShadowRoot?n.host:null}function vt(t,n){let o=t;for(;o;){if(o.matches(n))return o;o=$n(o)}return null}function Yl(t,n=4){const o=[];let s=t,i=0;for(;s&&i<n;){const r=s.tagName.toLowerCase();if(r==="html"||r==="body")break;let _=r;if(s.id)_=`#${s.id}`;else if(s.className&&typeof s.className=="string"){const m=s.className.split(/\s+/).find(E=>E.length>2&&!E.match(/^[a-z]{1,2}$/)&&!E.match(/[A-Z0-9]{5,}/));m&&(_=`.${m.split("_")[0]}`)}const y=$n(s);!s.parentElement&&y&&(_=`⟨shadow⟩ ${_}`),o.unshift(_),s=y,i++}return o.join(" > ")}function Mn(t){var s,i,r,_,y,m,E,f;const n=Yl(t);if(t.dataset.element)return{name:t.dataset.element,path:n};const o=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(o)){const b=vt(t,"svg");if(b){const w=$n(b);if(w instanceof HTMLElement)return{name:`graphic in ${Mn(w).name}`,path:n}}return{name:"graphic element",path:n}}if(o==="svg"){const b=$n(t);if((b==null?void 0:b.tagName.toLowerCase())==="button"){const w=(s=b.textContent)==null?void 0:s.trim();return{name:w?`icon in "${w}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(o==="button"){const b=(i=t.textContent)==null?void 0:i.trim(),w=t.getAttribute("aria-label");return w?{name:`button [${w}]`,path:n}:{name:b?`button "${b.slice(0,25)}"`:"button",path:n}}if(o==="a"){const b=(r=t.textContent)==null?void 0:r.trim(),w=t.getAttribute("href");return b?{name:`link "${b.slice(0,25)}"`,path:n}:w?{name:`link to ${w.slice(0,30)}`,path:n}:{name:"link",path:n}}if(o==="input"){const b=t.getAttribute("type")||"text",w=t.getAttribute("placeholder"),N=t.getAttribute("name");return w?{name:`input "${w}"`,path:n}:N?{name:`input [${N}]`,path:n}:{name:`${b} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(o)){const b=(_=t.textContent)==null?void 0:_.trim();return{name:b?`${o} "${b.slice(0,35)}"`:o,path:n}}if(o==="p"){const b=(y=t.textContent)==null?void 0:y.trim();return b?{name:`paragraph: "${b.slice(0,40)}${b.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(o==="span"||o==="label"){const b=(m=t.textContent)==null?void 0:m.trim();return b&&b.length<40?{name:`"${b}"`,path:n}:{name:o,path:n}}if(o==="li"){const b=(E=t.textContent)==null?void 0:E.trim();return b&&b.length<40?{name:`list item: "${b.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(o==="blockquote")return{name:"blockquote",path:n};if(o==="code"){const b=(f=t.textContent)==null?void 0:f.trim();return b&&b.length<30?{name:`code: \`${b}\``,path:n}:{name:"code",path:n}}if(o==="pre")return{name:"code block",path:n};if(o==="img"){const b=t.getAttribute("alt");return{name:b?`image "${b.slice(0,30)}"`:"image",path:n}}if(o==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(o)){const b=t.className,w=t.getAttribute("role"),N=t.getAttribute("aria-label");if(N)return{name:`${o} [${N}]`,path:n};if(w)return{name:`${w}`,path:n};if(typeof b=="string"&&b){const k=b.split(/[\s_-]+/).map(B=>B.replace(/[A-Z0-9]{5,}.*$/,"")).filter(B=>B.length>2&&!/^[a-z]{1,2}$/.test(B)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:o==="div"?"container":o,path:n}}return{name:o,path:n}}function An(t){var r,_,y;const n=[],o=(r=t.textContent)==null?void 0:r.trim();o&&o.length<100&&n.push(o);const s=t.previousElementSibling;if(s){const m=(_=s.textContent)==null?void 0:_.trim();m&&m.length<50&&n.unshift(`[before: "${m.slice(0,40)}"]`)}const i=t.nextElementSibling;if(i){const m=(y=i.textContent)==null?void 0:y.trim();m&&m.length<50&&n.push(`[after: "${m.slice(0,40)}"]`)}return n.join(" ")}function ro(t){const n=$n(t);if(!n)return"";const i=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(n.children)).filter(f=>f!==t&&f instanceof HTMLElement);if(i.length===0)return"";const r=i.slice(0,4).map(f=>{var k;const b=f.tagName.toLowerCase(),w=f.className;let N="";if(typeof w=="string"&&w){const B=w.split(/\s+/).map(U=>U.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(U=>U.length>2&&!/^[a-z]{1,2}$/.test(U));B&&(N=`.${B}`)}if(b==="button"||b==="a"){const B=(k=f.textContent)==null?void 0:k.trim().slice(0,15);if(B)return`${b}${N} "${B}"`}return`${b}${N}`});let y=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const f=n.className.split(/\s+/).map(b=>b.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(b=>b.length>2&&!/^[a-z]{1,2}$/.test(b));f&&(y=`.${f}`)}const m=n.children.length,E=m>r.length+1?` (${m} total in ${y})`:"";return r.join(", ")+E}function zn(t){const n=t.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(s=>s.length>0).map(s=>{const i=s.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return i?i[1]:s}).filter((s,i,r)=>r.indexOf(s)===i).join(", ")}var dr=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Xl=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Ul=new Set(["input","textarea","select"]),Ql=new Set(["img","video","canvas","svg"]),ql=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function io(t){if(typeof window>"u")return{};const n=window.getComputedStyle(t),o={},s=t.tagName.toLowerCase();let i;Xl.has(s)?i=["color","fontSize","fontWeight","fontFamily","lineHeight"]:s==="button"||s==="a"&&t.getAttribute("role")==="button"?i=["backgroundColor","color","padding","borderRadius","fontSize"]:Ul.has(s)?i=["backgroundColor","color","padding","borderRadius","fontSize"]:Ql.has(s)?i=["width","height","objectFit","borderRadius"]:ql.has(s)?i=["display","padding","margin","gap","backgroundColor"]:i=["color","fontSize","margin","padding","backgroundColor"];for(const r of i){const _=r.replace(/([A-Z])/g,"-$1").toLowerCase(),y=n.getPropertyValue(_);y&&!dr.has(y)&&(o[r]=y)}return o}var Vl=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function lo(t){if(typeof window>"u")return"";const n=window.getComputedStyle(t),o=[];for(const s of Vl){const i=s.replace(/([A-Z])/g,"-$1").toLowerCase(),r=n.getPropertyValue(i);r&&!dr.has(r)&&o.push(`${i}: ${r}`)}return o.join("; ")}function Kl(t){if(!t)return;const n={},o=t.split(";").map(s=>s.trim()).filter(Boolean);for(const s of o){const i=s.indexOf(":");if(i>0){const r=s.slice(0,i).trim(),_=s.slice(i+1).trim();r&&_&&(n[r]=_)}}return Object.keys(n).length>0?n:void 0}function ao(t){const n=[],o=t.getAttribute("role"),s=t.getAttribute("aria-label"),i=t.getAttribute("aria-describedby"),r=t.getAttribute("tabindex"),_=t.getAttribute("aria-hidden");return o&&n.push(`role="${o}"`),s&&n.push(`aria-label="${s}"`),i&&n.push(`aria-describedby="${i}"`),r&&n.push(`tabindex=${r}`),_==="true"&&n.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function co(t){const n=[];let o=t;for(;o&&o.tagName.toLowerCase()!=="html";){const s=o.tagName.toLowerCase();let i=s;if(o.id)i=`${s}#${o.id}`;else if(o.className&&typeof o.className=="string"){const _=o.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2);_&&(i=`${s}.${_}`)}const r=$n(o);!o.parentElement&&r&&(i=`⟨shadow⟩ ${i}`),n.unshift(i),o=r}return n.join(" > ")}var Gl=new Set(["nav","header","main","section","article","footer","aside"]),Vo={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Os={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Jl=new Set(["script","style","noscript","link","meta"]),Zl=40;function _r(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){const o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function hn(t){const n=t.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(t.id)return`#${CSS.escape(t.id)}`;if(t.className&&typeof t.className=="string"){const i=t.className.split(/\s+/).filter(r=>r.length>0).find(r=>r.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(r)&&!/^[a-z]{1,2}$/.test(r));if(i){const r=`${n}.${CSS.escape(i)}`;if(document.querySelectorAll(r).length===1)return r}}const o=t.parentElement;if(o){const i=Array.from(o.children).indexOf(t)+1;return`${o===document.body?"body":hn(o)} > ${n}:nth-child(${i})`}return n}function yo(t){var _;const n=t.tagName.toLowerCase(),o=t.getAttribute("aria-label");if(o)return o;const s=t.getAttribute("role");if(s&&Vo[s])return Vo[s];if(Os[n])return Os[n];const i=t.querySelector("h1, h2, h3, h4, h5, h6");if(i){const y=(_=i.textContent)==null?void 0:_.trim();if(y&&y.length<=50)return y;if(y)return y.slice(0,47)+"..."}const{name:r}=Mn(t);return r.charAt(0).toUpperCase()+r.slice(1)}function ur(t){const n=t.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2&&!/^[a-z]{1,2}$/.test(s))||null}function hr(t){var s;const n=(s=t.textContent)==null?void 0:s.trim();if(!n)return null;const o=n.replace(/\s+/g," ");return o.length<=30?o:o.slice(0,30)+"…"}function ea(){const t=document.querySelector("main")||document.body,n=Array.from(t.children);let o=n;t!==document.body&&n.length<3&&(o=Array.from(document.body.children));const s=[];return o.forEach((i,r)=>{if(!(i instanceof HTMLElement))return;const _=i.tagName.toLowerCase();if(Jl.has(_)||i.hasAttribute("data-feedback-toolbar")||i.closest("[data-feedback-toolbar]"))return;const y=window.getComputedStyle(i);if(y.display==="none"||y.visibility==="hidden")return;const m=i.getBoundingClientRect();if(m.height<Zl)return;const E=Gl.has(_),f=i.getAttribute("role")&&Vo[i.getAttribute("role")],b=_==="div"&&m.height>=60;if(!E&&!f&&!b)return;const w=window.scrollY,N=_r(i),k={x:m.x,y:N?m.y:m.y+w,width:m.width,height:m.height};s.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:yo(i),tagName:_,selector:hn(i),role:i.getAttribute("role"),className:ur(i),textSnippet:hr(i),originalRect:k,currentRect:{...k},originalIndex:r,isFixed:N})}),s}function ta(t){const n=window.scrollY,o=t.getBoundingClientRect(),s=_r(t),i={x:o.x,y:s?o.y:o.y+n,width:o.width,height:o.height},r=t.parentElement;let _=0;return r&&(_=Array.from(r.children).indexOf(t)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:yo(t),tagName:t.tagName.toLowerCase(),selector:hn(t),role:t.getAttribute("role"),className:ur(t),textSnippet:hr(t),originalRect:i,currentRect:{...i},originalIndex:_,isFixed:s}}var As={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},zs=["nw","n","ne","e","se","s","sw","w"],_o=24,Fs=16,uo=5;function Hs(t,n,o,s){let i=1/0,r=1/0;const _=t.x,y=t.x+t.width,m=t.x+t.width/2,E=t.y,f=t.y+t.height,b=t.y+t.height/2,w=[];for(const O of n)o.has(O.id)||w.push(O.currentRect);s&&w.push(...s);for(const O of w){const ke=O.x,Le=O.x+O.width,xe=O.x+O.width/2,_e=O.y,ze=O.y+O.height,Ye=O.y+O.height/2;for(const pe of[_,y,m])for(const $e of[ke,Le,xe]){const J=$e-pe;Math.abs(J)<uo&&Math.abs(J)<Math.abs(i)&&(i=J)}for(const pe of[E,f,b])for(const $e of[_e,ze,Ye]){const J=$e-pe;Math.abs(J)<uo&&Math.abs(J)<Math.abs(r)&&(r=J)}}const N=Math.abs(i)<uo?i:0,k=Math.abs(r)<uo?r:0,B=[],U=new Set,W=_+N,me=y+N,De=m+N,I=E+k,ne=f+k,he=b+k;for(const O of w){const ke=O.x,Le=O.x+O.width,xe=O.x+O.width/2,_e=O.y,ze=O.y+O.height,Ye=O.y+O.height/2;for(const pe of[ke,xe,Le])for(const $e of[W,De,me])if(Math.abs($e-pe)<.5){const J=`x:${Math.round(pe)}`;U.has(J)||(U.add(J),B.push({axis:"x",pos:pe}))}for(const pe of[_e,Ye,ze])for(const $e of[I,he,ne])if(Math.abs($e-pe)<.5){const J=`y:${Math.round(pe)}`;U.has(J)||(U.add(J),B.push({axis:"y",pos:pe}))}}return{dx:N,dy:k,guides:B}}var na=new Set(["script","style","noscript","link","meta","br","hr"]);function Ys(t){let n=t;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(na.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const o=n.getBoundingClientRect();if(o.width>=Fs&&o.height>=Fs)return n;n=n.parentElement}return null}function oa({rearrangeState:t,onChange:n,isDarkMode:o,exiting:s,className:i,blankCanvas:r,extraSnapRects:_,onSelectionChange:y,deselectSignal:m,onDragMove:E,onDragEnd:f,clearSignal:b}){const{sections:w}=t,N=c.useRef(t);N.current=t;const[k,B]=c.useState(new Set),[U,W]=c.useState(!1),me=c.useRef(b);c.useEffect(()=>{b!==void 0&&b!==me.current&&(me.current=b,w.length>0&&W(!0))},[b,w.length]);const De=c.useRef(m);c.useEffect(()=>{m!==De.current&&(De.current=m,B(new Set))},[m]);const[I,ne]=c.useState(null),[he,O]=c.useState(!1),ke=c.useRef(!1),Le=c.useCallback(g=>{const x=w.find(M=>M.id===g);x&&(ke.current=!!x.note,ne(g),O(!1))},[w]),xe=c.useCallback(()=>{I&&(O(!0),re(()=>{ne(null),O(!1)},150))},[I]),_e=c.useCallback(g=>{I&&(n({...t,sections:w.map(x=>x.id===I?{...x,note:g.trim()||void 0}:x)}),xe())},[I,w,t,n,xe]);c.useEffect(()=>{s&&I&&xe()},[s]);const[ze,Ye]=c.useState(new Set),pe=c.useRef(new Map),[$e,J]=c.useState(null),[st,P]=c.useState(null),[ue,Pe]=c.useState([]),[Ke,gt]=c.useState(0),mt=c.useRef(null),Ut=c.useRef(new Set),Mt=c.useRef(new Map),[Qt,Rt]=c.useState(new Map),[Ft,qt]=c.useState(new Map),Vt=c.useRef(new Set),jt=c.useRef(new Map),Ge=c.useRef(y);Ge.current=y;const ft=c.useRef(E);ft.current=E;const pt=c.useRef(f);pt.current=f,c.useEffect(()=>{r&&B(new Set)},[r]);const[Kt,Ht]=c.useState(()=>!t.sections.some(g=>{const x=g.originalRect,M=g.currentRect;return Math.abs(x.x-M.x)>1||Math.abs(x.y-M.y)>1||Math.abs(x.width-M.width)>1||Math.abs(x.height-M.height)>1}));c.useEffect(()=>{if(!Kt){const g=re(()=>Ht(!0),380);return()=>clearTimeout(g)}},[]);const Gt=c.useRef(new Set);c.useEffect(()=>{Gt.current=new Set(w.map(g=>g.selector))},[w]),c.useEffect(()=>{const g=()=>gt(window.scrollY);return g(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[]),c.useEffect(()=>{const g=x=>{if(mt.current){J(null);return}const M=document.elementFromPoint(x.clientX,x.clientY);if(!M){J(null);return}if(M.closest("[data-feedback-toolbar]")){J(null);return}if(M.closest("[data-design-placement]")){J(null);return}if(M.closest("[data-annotation-popup]")){J(null);return}const L=Ys(M);if(!L){J(null);return}for(const V of Gt.current)try{const D=document.querySelector(V);if(D&&(D===L||L.contains(D))){J(null);return}}catch{}const G=L.getBoundingClientRect();J({x:G.x,y:G.y,w:G.width,h:G.height})};return document.addEventListener("mousemove",g,{passive:!0}),()=>document.removeEventListener("mousemove",g)},[w]),c.useEffect(()=>{const g=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=g}},[]),c.useEffect(()=>{const g=x=>{var D,Me,fe,Ne;if(mt.current||x.button!==0)return;const M=x.target;if(!M||M.closest("[data-feedback-toolbar]")||M.closest("[data-design-placement]")||M.closest("[data-annotation-popup]"))return;const L=Ys(M);let G=!1;if(L)for(const ie of Gt.current)try{const Q=document.querySelector(ie);if(Q&&(Q===L||L.contains(Q))){G=!0;break}}catch{}const V=!!(x.shiftKey||x.metaKey||x.ctrlKey);if(L&&!G){x.preventDefault(),x.stopPropagation();const ie=ta(L),Q=[...w,ie],Be=[...t.originalOrder,ie.id];n({...t,sections:Q,originalOrder:Be});const Fe=new Set([ie.id]);B(Fe),(D=Ge.current)==null||D.call(Ge,Fe,V),J(null);const rt=x.clientX,Y=x.clientY,Te={x:ie.currentRect.x,y:ie.currentRect.y};ie.originalRect;let je=!1,we=0,it=0;mt.current="move";const oe=dt=>{var $t;const bt=dt.clientX-rt,yt=dt.clientY-Y;if(!je&&(Math.abs(bt)>2||Math.abs(yt)>2)&&(je=!0),!je)return;const mn={x:Te.x+bt,y:Te.y+yt,width:ie.currentRect.width,height:ie.currentRect.height},Yt=Hs(mn,Q,new Set([ie.id]),_);Pe(Yt.guides);const Ct=bt+Yt.dx,et=yt+Yt.dy;we=Ct,it=et;const Et=document.querySelector(`[data-rearrange-section="${ie.id}"]`);Et&&(Et.style.transform=`translate(${Ct}px, ${et}px)`),Rt(new Map([[ie.id,{x:Te.x+Ct,y:Te.y+et,width:ie.currentRect.width,height:ie.currentRect.height}]])),($t=ft.current)==null||$t.call(ft,Ct,et)},Oe=()=>{var bt;window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",Oe),mt.current=null,Pe([]),Rt(new Map);const dt=document.querySelector(`[data-rearrange-section="${ie.id}"]`);dt&&(dt.style.transform=""),je&&n({...t,sections:Q.map(yt=>yt.id===ie.id?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,Te.x+we),y:Math.max(0,Te.y+it)}}:yt),originalOrder:Be}),(bt=pt.current)==null||bt.call(pt,we,it,je)};window.addEventListener("mousemove",oe),window.addEventListener("mouseup",Oe)}else if(G&&L){x.preventDefault();for(const ie of w)try{const Q=document.querySelector(ie.selector);if(Q&&Q===L){const Be=new Set([ie.id]);B(Be),(Me=Ge.current)==null||Me.call(Ge,Be,V);return}}catch{}V||(B(new Set),(fe=Ge.current)==null||fe.call(Ge,new Set,!1))}else V||(B(new Set),(Ne=Ge.current)==null||Ne.call(Ge,new Set,!1))};return document.addEventListener("mousedown",g,!0),()=>document.removeEventListener("mousedown",g,!0)},[w,t,n]),c.useEffect(()=>{const g=x=>{const M=x.target;if(!(M.tagName==="INPUT"||M.tagName==="TEXTAREA"||M.isContentEditable)){if((x.key==="Backspace"||x.key==="Delete")&&k.size>0){x.preventDefault();const L=new Set(k);Ye(G=>{const V=new Set(G);for(const D of L)V.add(D);return V}),B(new Set),re(()=>{const G=N.current;n({...G,sections:G.sections.filter(V=>!L.has(V.id)),originalOrder:G.originalOrder.filter(V=>!L.has(V))}),Ye(V=>{const D=new Set(V);for(const Me of L)D.delete(Me);return D})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(x.key)&&k.size>0){x.preventDefault();const L=x.shiftKey?20:1,G=x.key==="ArrowLeft"?-L:x.key==="ArrowRight"?L:0,V=x.key==="ArrowUp"?-L:x.key==="ArrowDown"?L:0;n({...t,sections:w.map(D=>k.has(D.id)?{...D,currentRect:{...D.currentRect,x:Math.max(0,D.currentRect.x+G),y:Math.max(0,D.currentRect.y+V)}}:D)});return}x.key==="Escape"&&k.size>0&&B(new Set)}};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[k,w,t,n]);const S=c.useCallback((g,x)=>{var rt;if(g.button!==0)return;const M=g.target;if(M.closest(`.${C.handle}`)||M.closest(`.${C.deleteButton}`))return;g.preventDefault(),g.stopPropagation();let L;g.shiftKey||g.metaKey||g.ctrlKey?(L=new Set(k),L.has(x)?L.delete(x):L.add(x)):k.has(x)?L=new Set(k):L=new Set([x]),B(L),(L.size!==k.size||[...L].some(Y=>!k.has(Y)))&&((rt=Ge.current)==null||rt.call(Ge,L,!!(g.shiftKey||g.metaKey||g.ctrlKey)));const V=g.clientX,D=g.clientY,Me=new Map;for(const Y of w)L.has(Y.id)&&Me.set(Y.id,{x:Y.currentRect.x,y:Y.currentRect.y});mt.current="move";let fe=!1,Ne=0,ie=0;const Q=new Map;for(const Y of w)if(L.has(Y.id)){const Te=document.querySelector(`[data-rearrange-section="${Y.id}"]`);Q.set(Y.id,{outlineEl:Te,curW:Y.currentRect.width,curH:Y.currentRect.height})}const Be=Y=>{var Yt;const Te=Y.clientX-V,je=Y.clientY-D;if(Te===0&&je===0)return;fe=!0;let we=1/0,it=1/0,oe=-1/0,Oe=-1/0;for(const[Ct,{curW:et,curH:Et}]of Q){const $t=Me.get(Ct);if(!$t)continue;const pn=$t.x+Te,F=$t.y+je;we=Math.min(we,pn),it=Math.min(it,F),oe=Math.max(oe,pn+et),Oe=Math.max(Oe,F+Et)}const dt=Hs({x:we,y:it,width:oe-we,height:Oe-it},w,L,_),bt=Te+dt.dx,yt=je+dt.dy;Ne=bt,ie=yt,Pe(dt.guides);for(const[,{outlineEl:Ct}]of Q)Ct&&(Ct.style.transform=`translate(${bt}px, ${yt}px)`);const mn=new Map;for(const[Ct,{curW:et,curH:Et}]of Q){const $t=Me.get(Ct);if($t){const pn={x:Math.max(0,$t.x+bt),y:Math.max(0,$t.y+yt),width:et,height:Et};mn.set(Ct,pn)}}Rt(mn),(Yt=ft.current)==null||Yt.call(ft,bt,yt)},Fe=Y=>{var Te,je;window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Fe),mt.current=null,Pe([]),Rt(new Map);for(const[,{outlineEl:we}]of Q)we&&(we.style.transform="");if(fe){const we=Y.clientX-V,it=Y.clientY-D;if(Math.abs(we)<5&&Math.abs(it)<5)n({...t,sections:w.map(oe=>{const Oe=Me.get(oe.id);return Oe?{...oe,currentRect:{...oe.currentRect,x:Oe.x,y:Oe.y}}:oe})});else{n({...t,sections:w.map(oe=>{const Oe=Me.get(oe.id);return Oe?{...oe,currentRect:{...oe.currentRect,x:Math.max(0,Oe.x+Ne),y:Math.max(0,Oe.y+ie)}}:oe})}),(Te=pt.current)==null||Te.call(pt,Ne,ie,!0);return}}(je=pt.current)==null||je.call(pt,0,0,!1)};window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Fe)},[k,w,t,n]),Z=c.useCallback((g,x,M)=>{g.preventDefault(),g.stopPropagation();const L=w.find(Be=>Be.id===x);if(!L)return;B(new Set([x])),mt.current="resize";const G=g.clientX,V=g.clientY,D={...L.currentRect};L.originalRect;const Me=D.width/D.height;let fe={...D};const Ne=document.querySelector(`[data-rearrange-section="${x}"]`),ie=Be=>{const Fe=Be.clientX-G,rt=Be.clientY-V;let Y=D.x,Te=D.y,je=D.width,we=D.height;if(M.includes("e")&&(je=Math.max(_o,D.width+Fe)),M.includes("w")&&(je=Math.max(_o,D.width-Fe),Y=D.x+D.width-je),M.includes("s")&&(we=Math.max(_o,D.height+rt)),M.includes("n")&&(we=Math.max(_o,D.height-rt),Te=D.y+D.height-we),Be.shiftKey)if(M.length===2){const oe=Math.abs(je-D.width),Oe=Math.abs(we-D.height);oe>Oe?we=je/Me:je=we*Me,M.includes("w")&&(Y=D.x+D.width-je),M.includes("n")&&(Te=D.y+D.height-we)}else M==="e"||M==="w"?we=je/Me:je=we*Me,M==="w"&&(Y=D.x+D.width-je),M==="n"&&(Te=D.y+D.height-we);fe={x:Y,y:Te,width:je,height:we},Ne&&(Ne.style.left=`${Y}px`,Ne.style.top=`${Te-Ke}px`,Ne.style.width=`${je}px`,Ne.style.height=`${we}px`),P({x:Be.clientX+12,y:Be.clientY+12,text:`${Math.round(je)} × ${Math.round(we)}`}),Rt(new Map([[x,fe]]))},Q=()=>{window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",Q),P(null),mt.current=null,Rt(new Map),n({...t,sections:w.map(Be=>Be.id===x?{...Be,currentRect:fe}:Be)})};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",Q)},[w,t,n,Ke]),ge=c.useCallback(g=>{Ye(x=>{const M=new Set(x);return M.add(g),M}),B(x=>{const M=new Set(x);return M.delete(g),M}),re(()=>{const x=N.current;n({...x,sections:x.sections.filter(M=>M.id!==g),originalOrder:x.originalOrder.filter(M=>M!==g)}),Ye(M=>{const L=new Set(M);return L.delete(g),L})},180)},[n]),ae=g=>{const x=g.originalRect,M=g.currentRect;return Math.abs(x.x-M.x)>1||Math.abs(x.y-M.y)>1||Math.abs(x.width-M.width)>1||Math.abs(x.height-M.height)>1},Re=g=>{const x=g.originalRect,M=g.currentRect;return Math.abs(x.x-M.x)>1||Math.abs(x.y-M.y)>1},ve=g=>{const x=g.originalRect,M=g.currentRect;return Math.abs(x.width-M.width)>1||Math.abs(x.height-M.height)>1};for(const g of w)Mt.current.has(g.id)||(Re(g)?Mt.current.set(g.id,"move"):ve(g)&&Mt.current.set(g.id,"resize"));for(const g of Mt.current.keys())w.some(x=>x.id===g)||Mt.current.delete(g);const Ee=w.filter(g=>{try{if(ze.has(g.id)||k.has(g.id))return!0;const x=document.querySelector(g.selector);if(!x)return!1;const M=x.getBoundingClientRect(),L=g.originalRect;return Math.abs(M.width-L.width)+Math.abs(M.height-L.height)<200}catch{return!1}}),be=Ee.filter(g=>ae(g)),We=Ee.filter(g=>!ae(g)),Je=new Set(be.map(g=>g.id));for(const g of Ut.current)Je.has(g)||Ut.current.delete(g);const ee=[...Je].sort().join(",");for(const g of be)jt.current.set(g.id,{currentRect:g.currentRect,originalRect:g.originalRect,isFixed:g.isFixed});return c.useEffect(()=>{const g=Vt.current;Vt.current=Je;const x=new Map;for(const M of g)if(!Je.has(M)){if(!w.some(G=>G.id===M))continue;const L=jt.current.get(M);L&&(x.set(M,{orig:L.originalRect,target:L.currentRect,isFixed:L.isFixed}),jt.current.delete(M))}if(x.size>0){qt(L=>{const G=new Map(L);for(const[V,D]of x)G.set(V,D);return G});const M=re(()=>{qt(L=>{const G=new Map(L);for(const V of x.keys())G.delete(V);return G})},250);return()=>clearTimeout(M)}},[ee,w]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${C.rearrangeOverlay} ${o?"":C.light} ${s?C.overlayExiting:""}${i?` ${i}`:""}`,"data-feedback-toolbar":!0,children:[$e&&e.jsx("div",{className:C.hoverHighlight,style:{left:$e.x,top:$e.y,width:$e.w,height:$e.h}}),We.map(g=>{const x=g.currentRect,M=g.isFixed?x.y:x.y-Ke,L=As,G=k.has(g.id);return e.jsxs("div",{"data-rearrange-section":g.id,className:`${C.sectionOutline} ${G?C.selected:""} ${U||s||ze.has(g.id)?C.exiting:""}`,style:{left:x.x,top:M,width:x.width,height:x.height,borderColor:L.border,backgroundColor:L.bg,...Kt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:V=>S(V,g.id),onDoubleClick:()=>Le(g.id),children:[e.jsx("span",{className:C.sectionLabel,style:{backgroundColor:L.pill},children:g.label}),e.jsx("span",{className:`${C.sectionAnnotation} ${g.note?C.annotationVisible:""}`,children:(g.note&&pe.current.set(g.id,g.note),g.note||pe.current.get(g.id)||"")}),e.jsxs("span",{className:C.sectionDimensions,children:[Math.round(x.width)," × ",Math.round(x.height)]}),e.jsx("div",{className:C.deleteButton,onMouseDown:V=>V.stopPropagation(),onClick:()=>ge(g.id),children:"✕"}),zs.map(V=>e.jsx("div",{className:`${C.handle} ${C[`handle${V.charAt(0).toUpperCase()}${V.slice(1)}`]}`,onMouseDown:D=>Z(D,g.id,V)},V))]},g.id)}),be.map(g=>{const x=g.currentRect,M=g.isFixed?x.y:x.y-Ke,L=k.has(g.id),G=Re(g),V=ve(g);if(r&&!L)return null;const Me=!Ut.current.has(g.id);return Me&&Ut.current.add(g.id),e.jsxs("div",{"data-rearrange-section":g.id,className:`${C.ghostOutline} ${L?C.selected:""} ${U||s||ze.has(g.id)?C.exiting:""}`,style:{left:x.x,top:M,width:x.width,height:x.height,...Kt?{}:{opacity:0,animation:"none",transition:"none"},...Me?{}:{animation:"none"}},onMouseDown:fe=>S(fe,g.id),onDoubleClick:()=>Le(g.id),children:[e.jsx("span",{className:C.sectionLabel,style:{backgroundColor:As.pill},children:g.label}),e.jsx("span",{className:`${C.sectionAnnotation} ${g.note?C.annotationVisible:""}`,children:(g.note&&pe.current.set(g.id,g.note),g.note||pe.current.get(g.id)||"")}),e.jsxs("span",{className:C.sectionDimensions,children:[Math.round(x.width)," × ",Math.round(x.height)]}),e.jsx("div",{className:C.deleteButton,onMouseDown:fe=>fe.stopPropagation(),onClick:()=>ge(g.id),children:"✕"}),zs.map(fe=>e.jsx("div",{className:`${C.handle} ${C[`handle${fe.charAt(0).toUpperCase()}${fe.slice(1)}`]}`,onMouseDown:Ne=>Z(Ne,g.id,fe)},fe)),e.jsx("span",{className:C.ghostBadge,children:(()=>{const fe=Mt.current.get(g.id);if(G&&V){const[Ne,ie]=fe==="resize"?["Resize","Move"]:["Move","Resize"];return e.jsxs(e.Fragment,{children:["Suggested ",Ne," ",e.jsxs("span",{className:C.ghostBadgeExtra,children:["& ",ie]})]})}return`Suggested ${V?"Resize":"Move"}`})()})]},g.id)})]}),!r&&(()=>{const g=[];for(const x of be){const M=Qt.get(x.id);g.push({id:x.id,orig:x.originalRect,target:M||x.currentRect,isFixed:x.isFixed,isSelected:k.has(x.id),isExiting:ze.has(x.id)})}for(const[x,M]of Qt)if(!g.some(L=>L.id===x)){const L=w.find(G=>G.id===x);L&&g.push({id:x,orig:L.originalRect,target:M,isFixed:L.isFixed,isSelected:k.has(x)})}for(const[x,M]of Ft)g.some(L=>L.id===x)||g.push({id:x,orig:M.orig,target:M.target,isFixed:M.isFixed,isSelected:!1,isExiting:!0});return g.length===0?null:e.jsxs("svg",{className:`${C.connectorSvg} ${U||s?C.connectorExiting:""}`,children:[g.map(({id:x,orig:M,target:L,isFixed:G,isSelected:V,isExiting:D})=>{const Me=M.x+M.width/2,fe=(G?M.y:M.y-Ke)+M.height/2,Ne=L.x+L.width/2,ie=(G?L.y:L.y-Ke)+L.height/2,Q=Ne-Me,Be=ie-fe,Fe=Math.sqrt(Q*Q+Be*Be);if(Fe<2)return null;const rt=Math.min(1,Fe/40),Y=Math.min(Fe*.3,60),Te=Fe>0?-Be/Fe:0,je=Fe>0?Q/Fe:0,we=(Me+Ne)/2+Te*Y,it=(fe+ie)/2+je*Y,oe=Qt.has(x),Oe=oe||V?1:.4,dt=oe||V?1:.5;return e.jsxs("g",{className:D?C.connectorExiting:"",children:[e.jsx("path",{className:C.connectorLine,d:`M ${Me} ${fe} Q ${we} ${it} ${Ne} ${ie}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Oe*rt}),e.jsx("circle",{className:C.connectorDot,cx:Me,cy:fe,r:4*rt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dt*rt,filter:"url(#connDotShadow)"}),e.jsx("circle",{className:C.connectorDot,cx:Ne,cy:ie,r:4*rt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:dt*rt,filter:"url(#connDotShadow)"})]},`conn-${x}`)}),e.jsx("defs",{children:e.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:e.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),I&&(()=>{const g=w.find(ie=>ie.id===I);if(!g)return null;const x=g.currentRect,M=g.isFixed?x.y:x.y-Ke,L=x.x+x.width/2,G=M-8,V=M+x.height+8,D=G>200,Me=V<window.innerHeight-100,fe=Math.max(160,Math.min(window.innerWidth-160,L));let Ne;return D?Ne={left:fe,bottom:window.innerHeight-G}:Me?Ne={left:fe,top:V}:Ne={left:fe,top:Math.max(80,window.innerHeight/2-80)},e.jsx(fo,{element:g.label,placeholder:"Add a note about this section",initialValue:g.note??"",submitLabel:ke.current?"Save":"Set",onSubmit:_e,onCancel:xe,onDelete:ke.current?()=>{_e("")}:void 0,isExiting:he,lightMode:!o,style:Ne})})(),st&&e.jsx("div",{className:C.sizeIndicator,style:{left:st.x,top:st.y},"data-feedback-toolbar":!0,children:st.text}),ue.map((g,x)=>e.jsx("div",{className:C.guideLine,style:g.axis==="x"?{position:"fixed",left:g.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:g.pos-Ke,width:"100vw",height:1}},`${g.axis}-${g.pos}-${x}`))]})}var Ko=new Set(["script","style","noscript","link","meta","br","hr"]);function sa(){const t=document.querySelector("main")||document.body,n=[],o=Array.from(t.children),s=t!==document.body&&o.length<3?Array.from(document.body.children):o;for(const i of s){if(!(i instanceof HTMLElement)||Ko.has(i.tagName.toLowerCase())||i.hasAttribute("data-feedback-toolbar"))continue;const r=window.getComputedStyle(i);if(r.display==="none"||r.visibility==="hidden")continue;const _=i.getBoundingClientRect();if(!(_.height<10||_.width<10)){n.push({label:yo(i),selector:hn(i),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height});for(const y of Array.from(i.children)){if(!(y instanceof HTMLElement)||Ko.has(y.tagName.toLowerCase())||y.hasAttribute("data-feedback-toolbar"))continue;const m=window.getComputedStyle(y);if(m.display==="none"||m.visibility==="hidden")continue;const E=y.getBoundingClientRect();E.height<10||E.width<10||n.push({label:yo(y),selector:hn(y),top:E.top,bottom:E.bottom,left:E.left,right:E.right,area:E.width*E.height})}}}return n}function ra(t){const n=window.scrollY;return t.map(({label:o,selector:s,rect:i})=>{const r=i.y-n;return{label:o,selector:s,top:r,bottom:r+i.height,left:i.x,right:i.x+i.width,area:i.width*i.height}})}function ia(t){const n=window.scrollY,o=t.y-n,s=t.x;return{top:o,bottom:o+t.height,left:s,right:s+t.width,area:t.width*t.height}}function Go(t,n){const o=n?ra(n):sa(),s=ia(t);let i=null,r=null,_=null,y=null,m=null;for(const k of o){if(Math.abs(k.left-s.left)<2&&Math.abs(k.top-s.top)<2&&Math.abs(k.right-k.left-t.width)<2&&Math.abs(k.bottom-k.top-t.height)<2)continue;k.left<=s.left+2&&k.right>=s.right-2&&k.top<=s.top+2&&k.bottom>=s.bottom-2&&k.area>s.area*1.5&&(!m||k.area<m._area)&&(m={label:k.label,selector:k.selector,_area:k.area});const B=s.right>k.left+5&&s.left<k.right-5,U=s.bottom>k.top+5&&s.top<k.bottom-5;if(B&&k.bottom<=s.top+5){const W=Math.round(s.top-k.bottom);(!i||W<i._dist)&&(i={label:k.label,selector:k.selector,gap:Math.max(0,W),_dist:W})}if(B&&k.top>=s.bottom-5){const W=Math.round(k.top-s.bottom);(!r||W<r._dist)&&(r={label:k.label,selector:k.selector,gap:Math.max(0,W),_dist:W})}if(U&&k.right<=s.left+5){const W=Math.round(s.left-k.right);(!_||W<_._dist)&&(_={label:k.label,selector:k.selector,gap:Math.max(0,W),_dist:W})}if(U&&k.left>=s.right-5){const W=Math.round(k.left-s.right);(!y||W<y._dist)&&(y={label:k.label,selector:k.selector,gap:Math.max(0,W),_dist:W})}}const E=window.innerWidth,f=window.innerHeight,b=aa(t,E),w=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,N=la(s,t,E,f,m?{label:m.label,selector:m.selector,_area:m._area}:null,o);return{above:w(i),below:w(r),left:w(_),right:w(y),alignment:b,containedIn:m?{label:m.label,selector:m.selector}:null,outOfBounds:N}}function la(t,n,o,s,i,r){const _={};let y=!1;const m=[];if(t.left<-2&&m.push("left"),t.right>o+2&&m.push("right"),t.top<-2&&m.push("top"),t.bottom>s+2&&m.push("bottom"),m.length>0&&(_.viewport=m,y=!0),i){const E=r.find(f=>f.label===i.label&&f.selector===i.selector&&Math.abs(f.area-i._area)<10);if(E){const f=[];t.left<E.left-2&&f.push("left"),t.right>E.right+2&&f.push("right"),t.top<E.top-2&&f.push("top"),t.bottom>E.bottom+2&&f.push("bottom"),f.length>0&&(_.container={label:i.label,edges:f},y=!0)}}return y?_:null}function aa(t,n){if(t.width/n>.85)return"full-width";const s=t.x+t.width/2,i=n/2,r=s-i,_=n*.08;return Math.abs(r)<_?"center":r<0?"left":"right"}function mr(t){switch(t){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function pr(t,n={}){const o=[];t.above&&o.push(`Below \`${t.above.label}\`${t.above.gap>0?` (${t.above.gap}px gap)`:""}`),t.below&&o.push(`Above \`${t.below.label}\`${t.below.gap>0?` (${t.below.gap}px gap)`:""}`),n.includeLeftRight&&(t.left&&o.push(`Right of \`${t.left.label}\`${t.left.gap>0?` (${t.left.gap}px gap)`:""}`),t.right&&o.push(`Left of \`${t.right.label}\`${t.right.gap>0?` (${t.right.gap}px gap)`:""}`));const s=mr(t.alignment);return t.containedIn?o.push(`${s.charAt(0).toUpperCase()+s.slice(1)} in \`${t.containedIn.label}\``):o.push(`${s.charAt(0).toUpperCase()+s.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&o.push(`Pixel ref: \`${n.pixelRef}\``),t.outOfBounds&&(t.outOfBounds.viewport&&o.push(`**Outside viewport** (${t.outOfBounds.viewport.join(", ")} edge${t.outOfBounds.viewport.length>1?"s":""})`),t.outOfBounds.container&&o.push(`**Outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")} edge${t.outOfBounds.container.edges.length>1?"s":""})`)),o}function ca(t,n,o){var r,_;const s=[];t.above&&s.push(`below \`${t.above.label}\``),t.below&&s.push(`above \`${t.below.label}\``),t.left&&s.push(`right of \`${t.left.label}\``),t.right&&s.push(`left of \`${t.right.label}\``),t.containedIn&&s.push(`inside \`${t.containedIn.label}\``),s.push(mr(t.alignment)),(r=t.outOfBounds)!=null&&r.viewport&&s.push(`**outside viewport** (${t.outOfBounds.viewport.join(", ")})`),(_=t.outOfBounds)!=null&&_.container&&s.push(`**outside \`${t.outOfBounds.container.label}\`** (${t.outOfBounds.container.edges.join(", ")})`);const i=o?`, ${Math.round(o.width)}×${Math.round(o.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${i}: ${s.join(", ")}`}var Xs=15;function Us(t){if(t.length<2)return[];const n=[],o=new Set;for(let s=0;s<t.length;s++){if(o.has(s))continue;const i=[s];for(let r=s+1;r<t.length;r++)o.has(r)||Math.abs(t[s].rect.y-t[r].rect.y)<Xs&&i.push(r);if(i.length>=2){const r=i.map(m=>t[m]);r.sort((m,E)=>m.rect.x-E.rect.x);const _=[];for(let m=0;m<r.length-1;m++)_.push(Math.round(r[m+1].rect.x-(r[m].rect.x+r[m].rect.width)));const y=Math.round(r.reduce((m,E)=>m+E.rect.y,0)/r.length);n.push({labels:r.map(m=>m.label),type:"row",sharedEdge:y,gaps:_,avgGap:_.length?Math.round(_.reduce((m,E)=>m+E,0)/_.length):0}),i.forEach(m=>o.add(m))}}for(let s=0;s<t.length;s++){if(o.has(s))continue;const i=[s];for(let r=s+1;r<t.length;r++)o.has(r)||Math.abs(t[s].rect.x-t[r].rect.x)<Xs&&i.push(r);if(i.length>=2){const r=i.map(m=>t[m]);r.sort((m,E)=>m.rect.y-E.rect.y);const _=[];for(let m=0;m<r.length-1;m++)_.push(Math.round(r[m+1].rect.y-(r[m].rect.y+r[m].rect.height)));const y=Math.round(r.reduce((m,E)=>m+E.rect.x,0)/r.length);n.push({labels:r.map(m=>m.label),type:"column",sharedEdge:y,gaps:_,avgGap:_.length?Math.round(_.reduce((m,E)=>m+E,0)/_.length):0}),i.forEach(m=>o.add(m))}}return n}function da(t){if(t.length<2)return[];const n=Us(t.map(_=>({label:_.label,rect:_.originalRect}))),o=Us(t.map(_=>({label:_.label,rect:_.currentRect}))),s=[],i=new Set;for(const _ of n){const y=new Set(_.labels);let m=null,E=0;for(const f of o){const b=f.labels.filter(w=>y.has(w)).length;b>=2&&b>E&&(m=f,E=b)}if(m){const f=m.labels.filter(w=>y.has(w)),b=f.join(", ");if(m.type!==_.type){const w=_.type==="row"?"y":"x",N=m.type==="row"?"y":"x";s.push(`**${b}**: ${_.type} (${w}≈${_.sharedEdge}, ${_.avgGap}px gaps) → ${m.type} (${N}≈${m.sharedEdge}, ${m.avgGap}px gaps)`)}else if(Math.abs(_.sharedEdge-m.sharedEdge)>20||Math.abs(_.avgGap-m.avgGap)>5){const w=_.type==="row"?"y":"x",N=Math.abs(_.sharedEdge-m.sharedEdge)>20?` ${w}: ${_.sharedEdge} → ${m.sharedEdge}`:"",k=Math.abs(_.avgGap-m.avgGap)>5?` gaps: ${_.avgGap}px → ${m.avgGap}px`:"";s.push(`**${b}**: ${_.type} shifted —${N}${k}`)}f.forEach(w=>i.add(w))}else{const f=_.labels.join(", "),b=_.type==="row"?"y":"x";s.push(`**${f}**: ${_.type} (${b}≈${_.sharedEdge}) dissolved`),_.labels.forEach(w=>i.add(w))}}for(const _ of o){if(_.labels.every(E=>i.has(E))||_.labels.filter(E=>!i.has(E)).length<2)continue;if(!n.some(E=>E.labels.filter(b=>_.labels.includes(b)).length>=2)){const E=_.type==="row"?"y":"x";s.push(`**${_.labels.join(", ")}**: new ${_.type} (${E}≈${_.sharedEdge}, ${_.avgGap}px gaps)`),_.labels.forEach(f=>i.add(f))}}const r=t.filter(_=>!i.has(_.label));if(r.length>=2){const _={};for(const y of r){const m=Math.round(y.currentRect.x/5)*5;(_[m]??(_[m]=[])).push(y.label)}for(const[y,m]of Object.entries(_))m.length>=2&&s.push(`**${m.join(", ")}**: shared left edge at x≈${y}`)}return s}function gr(t){if(typeof document>"u")return{viewport:t,contentArea:null};const n=[],o=new Set,s=y=>{o.has(y)||y instanceof HTMLElement&&(y.hasAttribute("data-feedback-toolbar")||Ko.has(y.tagName.toLowerCase())||(o.add(y),n.push(y)))},i=document.querySelector("main");i&&s(i);const r=document.querySelector("[role='main']");r&&s(r);for(const y of Array.from(document.body.children))if(s(y),y.children){for(const m of Array.from(y.children))if(s(m),m.children)for(const E of Array.from(m.children))s(E)}let _=null;for(const y of n){const m=y.getBoundingClientRect();if(m.height<50)continue;const E=getComputedStyle(y);if(E.maxWidth&&E.maxWidth!=="none"&&E.maxWidth!=="0px"){(!_||m.width<_.rect.width)&&(_={el:y,rect:m});continue}!_&&m.width<t.width-20&&m.width>100&&(_={el:y,rect:m})}if(_){const{el:y,rect:m}=_;return{viewport:t,contentArea:{width:Math.round(m.width),left:Math.round(m.left),right:Math.round(m.right),centerX:Math.round(m.left+m.width/2),selector:hn(y)}}}return{viewport:t,contentArea:null}}function _a(t){if(typeof document>"u")return null;const n=document.querySelector(t);if(!(n!=null&&n.parentElement))return null;const o=getComputedStyle(n.parentElement),s={parentDisplay:o.display,parentSelector:hn(n.parentElement)};return o.display.includes("flex")&&(s.flexDirection=o.flexDirection),o.display.includes("grid")&&o.gridTemplateColumns!=="none"&&(s.gridCols=o.gridTemplateColumns),o.gap&&o.gap!=="normal"&&o.gap!=="0px"&&(s.gap=o.gap),s}function fr(t,n){const o=n.contentArea,s=o?o.width:n.viewport.width,i=o?o.left:0,r=o?o.centerX:Math.round(n.viewport.width/2),_=Math.round(t.x-i),y=Math.round(i+s-(t.x+t.width)),m=(t.width/s*100).toFixed(1),E=t.x+t.width/2,f=Math.abs(E-r)<20,b=t.width/s>.95,w=[];return b?w.push("`width: 100%` of container"):w.push(`left \`${_}px\` in container, right \`${y}px\`, width \`${m}%\` (\`${Math.round(t.width)}px\`)`),f&&!b&&w.push("centered — `margin-inline: auto`"),w.join(" — ")}function yr(t){const{viewport:n,contentArea:o}=t;let s=`### Reference Frame
`;if(s+=`- Viewport: \`${n.width}×${n.height}px\`
`,o){const i=o;s+=`- Content area: \`${i.width}px\` wide, left edge at \`x=${i.left}\`, right at \`x=${i.right}\` (\`${i.selector}\`)
`,s+=`- Pixel → CSS translation:
`,s+=`  - **Horizontal position in container**: \`element.x - ${i.left}\` → use as \`margin-left\` or \`left\`
`,s+=`  - **Width as % of container**: \`element.width / ${i.width} × 100\` → use as \`width: X%\`
`,s+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",s+=`  - **Centered**: if \`|element.centerX - ${i.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else s+=`- No distinct content container — elements positioned relative to full viewport
`,s+=`- Pixel → CSS translation:
`,s+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,s+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return s+=`
`,s}function ua(t){const n=_a(t);if(!n)return null;let o=`\`${n.parentDisplay}\``;return n.flexDirection&&(o+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(o+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(o+=`, gap: \`${n.gap}\``),`Parent: ${o} (\`${n.parentSelector}\`)`}function Qs(t,n,o,s="standard"){var U,W,me,De;if(t.length===0)return"";const i=[...t].sort((I,ne)=>Math.abs(I.y-ne.y)<20?I.x-ne.x:I.y-ne.y);let r="";if(o!=null&&o.blankCanvas?(r+=`## Wireframe: New Page

`,o.wireframePurpose&&(r+=`> **Purpose:** ${o.wireframePurpose}
>
`),r+=`> ${t.length} component${t.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):r+=`## Design Layout

> ${t.length} component${t.length!==1?"s":""} placed

`,s==="compact")return r+=`### Components
`,i.forEach((I,ne)=>{var O;const he=((O=Dt[I.type])==null?void 0:O.label)||I.type;r+=`${ne+1}. **${he}** — \`${Math.round(I.width)}×${Math.round(I.height)}px\` at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`}),r;const _=gr(n);r+=yr(_),r+=`### Components
`,i.forEach((I,ne)=>{var ze;const he=((ze=Dt[I.type])==null?void 0:ze.label)||I.type,O={x:I.x,y:I.y,width:I.width,height:I.height};r+=`${ne+1}. **${he}** — \`${Math.round(I.width)}×${Math.round(I.height)}px\` at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`;const ke=Go(O),xe=pr(ke,{includeLeftRight:s==="detailed"||s==="forensic"});for(const Ye of xe)r+=`   - ${Ye}
`;const _e=fr(O,_);_e&&(r+=`   - CSS: ${_e}
`)}),r+=`
### Layout Analysis
`;const y=[];for(const I of i){const ne=y.find(he=>Math.abs(he.y-I.y)<30);ne?ne.items.push(I):y.push({y:I.y,items:[I]})}if(y.sort((I,ne)=>I.y-ne.y),y.forEach((I,ne)=>{I.items.sort((O,ke)=>O.x-ke.x);const he=I.items.map(O=>{var ke;return((ke=Dt[O.type])==null?void 0:ke.label)||O.type});if(I.items.length===1){const ke=I.items[0].width>n.width*.8;r+=`- Row ${ne+1} (y≈${Math.round(I.y)}): ${he[0]}${ke?" — full width":""}
`}else r+=`- Row ${ne+1} (y≈${Math.round(I.y)}): ${he.join(" | ")} — ${I.items.length} items side by side
`}),s==="detailed"||s==="forensic"){r+=`
### Spacing & Gaps
`;for(let I=0;I<i.length-1;I++){const ne=i[I],he=i[I+1],O=((U=Dt[ne.type])==null?void 0:U.label)||ne.type,ke=((W=Dt[he.type])==null?void 0:W.label)||he.type,Le=Math.round(he.y-(ne.y+ne.height)),xe=Math.round(he.x-(ne.x+ne.width));Math.abs(ne.y-he.y)<30?r+=`- ${O} → ${ke}: \`${xe}px\` horizontal gap
`:r+=`- ${O} → ${ke}: \`${Le}px\` vertical gap
`}if(s==="forensic"&&i.length>2){r+=`
### All Pairwise Gaps
`;for(let I=0;I<i.length;I++)for(let ne=I+1;ne<i.length;ne++){const he=i[I],O=i[ne],ke=((me=Dt[he.type])==null?void 0:me.label)||he.type,Le=((De=Dt[O.type])==null?void 0:De.label)||O.type,xe=Math.round(O.y-(he.y+he.height)),_e=Math.round(O.x-(he.x+he.width));r+=`- ${ke} ↔ ${Le}: h=\`${_e}px\` v=\`${xe}px\`
`}}s==="forensic"&&(r+=`
### Z-Order (placement order)
`,t.forEach((I,ne)=>{var O;const he=((O=Dt[I.type])==null?void 0:O.label)||I.type;r+=`${ne}. ${he} at \`(${Math.round(I.x)}, ${Math.round(I.y)})\`
`}))}r+=`
### Suggested Implementation
`;const m=i.some(I=>I.type==="navigation"),E=i.some(I=>I.type==="hero"),f=i.some(I=>I.type==="sidebar"),b=i.some(I=>I.type==="footer"),w=i.filter(I=>I.type==="card"),N=i.filter(I=>I.type==="form"),k=i.filter(I=>I.type==="table"),B=i.filter(I=>I.type==="modal");if(m&&(r+=`- Top navigation bar with logo + nav links + CTA
`),E&&(r+=`- Hero section with heading, subtext, and call-to-action
`),f&&(r+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),w.length>1?r+=`- ${w.length}-column card grid — use CSS Grid or Flexbox
`:w.length===1&&(r+=`- Card component with image + content area
`),N.length>0&&(r+=`- ${N.length} form${N.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(r+=`- Data table — consider sortable columns and pagination
`),B.length>0&&(r+=`- Modal dialog — add overlay backdrop and focus trapping
`),b&&(r+=`- Multi-column footer with links
`),s==="detailed"||s==="forensic"){if(r+=`
### CSS Suggestions
`,f){const I=i.find(ne=>ne.type==="sidebar");r+=`- \`display: grid; grid-template-columns: ${Math.round(I.width)}px 1fr;\`
`}if(w.length>1){const I=Math.round(w[0].width);r+=`- \`display: grid; grid-template-columns: repeat(${w.length}, ${I}px); gap: 16px;\`
`}m&&(r+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return r}function qs(t,n="standard",o){const{sections:s}=t,i=[];for(const f of s){const b=f.originalRect,w=f.currentRect,N=Math.abs(b.x-w.x)>1||Math.abs(b.y-w.y)>1,k=Math.abs(b.width-w.width)>1||Math.abs(b.height-w.height)>1;if(!N&&!k){n==="forensic"&&i.push({section:f,posMoved:!1,sizeChanged:!1});continue}i.push({section:f,posMoved:N,sizeChanged:k})}if(i.length===0||n!=="forensic"&&i.every(f=>!f.posMoved&&!f.sizeChanged))return"";let r=`## Suggested Layout Changes

`;const _=o?o.width:typeof window<"u"?window.innerWidth:0,y=o?o.height:typeof window<"u"?window.innerHeight:0,m=gr({width:_,height:y});n!=="compact"&&(r+=yr(m)),n==="forensic"&&(r+=`> Detected at: \`${new Date(t.detectedAt).toISOString()}\`
`,r+=`> Total sections: ${s.length}

`);const E=f=>s.map(b=>({label:b.label,selector:b.selector,rect:f==="original"?b.originalRect:b.currentRect}));r+=`**Changes:**
`;for(const{section:f,posMoved:b,sizeChanged:w}of i){const N=f.originalRect,k=f.currentRect;if(!b&&!w){r+=`- ${f.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){b&&w?r+=`- Suggested: move **${f.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:b?r+=`- Suggested: move **${f.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:r+=`- Suggested: resize **${f.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(b&&w?r+=`- Suggested: move and resize **${f.label}**
`:b?r+=`- Suggested: move **${f.label}**
`:r+=`- Suggested: resize **${f.label}** from ${Math.round(N.width)}×${Math.round(N.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,b){const U=Go(N,E("original")),W=Go(k,E("current")),me=w?{width:N.width,height:N.height}:void 0;r+=`  - Currently ${ca(U,{x:N.x,y:N.y},me)}
`;const De=w?{width:k.width,height:k.height}:void 0,I=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,ne=De?`, ${Math.round(De.width)}×${Math.round(De.height)}px`:"",O=pr(W,{includeLeftRight:n==="detailed"||n==="forensic"});if(O.length>0){r+=`  - Suggested position ${I}${ne}: ${O[0]}
`;for(let Le=1;Le<O.length;Le++)r+=`    ${O[Le]}
`}else r+=`  - Suggested position ${I}${ne}
`;const ke=fr(k,m);ke&&(r+=`  - CSS: ${ke}
`)}const B=ua(f.selector);if(B&&(r+=`  - ${B}
`),r+=`  - Selector: \`${f.selector}\`
`,n==="detailed"||n==="forensic"){const U=f.className?`${f.tagName}.${f.className.split(" ")[0]}`:f.tagName;U!==f.selector&&(r+=`  - Element: \`${U}\`
`),f.role&&(r+=`  - Role: \`${f.role}\`
`),n==="forensic"&&f.textSnippet&&(r+=`  - Text: "${f.textSnippet}"
`)}n==="forensic"&&(r+=`  - Original rect: \`{ x: ${Math.round(N.x)}, y: ${Math.round(N.y)}, w: ${Math.round(N.width)}, h: ${Math.round(N.height)} }\`
`,r+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const f=i.filter(w=>w.posMoved).map(w=>({label:w.section.label,originalRect:w.section.originalRect,currentRect:w.section.currentRect})),b=da(f);if(b.length>0){r+=`
### Layout Summary
`;for(const w of b)r+=`- ${w}
`}}if(n!=="compact"&&s.length>1){r+=`
### All Sections (current positions)
`;const f=[...s].sort((b,w)=>Math.abs(b.currentRect.y-w.currentRect.y)<20?b.currentRect.x-w.currentRect.x:b.currentRect.y-w.currentRect.y);for(const b of f){const w=b.currentRect,N=Math.abs(w.x-b.originalRect.x)>1||Math.abs(w.y-b.originalRect.y)>1||Math.abs(w.width-b.originalRect.width)>1||Math.abs(w.height-b.originalRect.height)>1;r+=`- ${b.label}: \`${Math.round(w.width)}×${Math.round(w.height)}px\` at \`(${Math.round(w.x)}, ${Math.round(w.y)})\`${N?" ← suggested":""}
`}}return r}var Jo="feedback-annotations-",xr=7;function xo(t){return`${Jo}${t}`}function Oo(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(xo(t));if(!n)return[];const o=JSON.parse(n),s=Date.now()-xr*24*60*60*1e3;return o.filter(i=>!i.timestamp||i.timestamp>s)}catch{return[]}}function br(t,n){if(!(typeof window>"u"))try{localStorage.setItem(xo(t),JSON.stringify(n))}catch{}}function ha(){const t=new Map;if(typeof window>"u")return t;try{const n=Date.now()-xr*24*60*60*1e3;for(let o=0;o<localStorage.length;o++){const s=localStorage.key(o);if(s!=null&&s.startsWith(Jo)){const i=s.slice(Jo.length),r=localStorage.getItem(s);if(r){const y=JSON.parse(r).filter(m=>!m.timestamp||m.timestamp>n);y.length>0&&t.set(i,y)}}}}catch{}return t}function Fn(t,n,o){const s=n.map(i=>({...i,_syncedTo:o}));br(t,s)}var es="agentation-design-";function ma(t){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${es}${t}`);return n?JSON.parse(n):[]}catch{return[]}}function pa(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${es}${t}`,JSON.stringify(n))}catch{}}function ga(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${es}${t}`)}catch{}}var ts="agentation-rearrange-";function fa(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${ts}${t}`);return n?JSON.parse(n):null}catch{return null}}function ya(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${ts}${t}`,JSON.stringify(n))}catch{}}function xa(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${ts}${t}`)}catch{}}var ns="agentation-wireframe-";function ba(t){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${ns}${t}`);return n?JSON.parse(n):null}catch{return null}}function Vs(t,n){if(!(typeof window>"u"))try{localStorage.setItem(`${ns}${t}`,JSON.stringify(n))}catch{}}function ho(t){if(!(typeof window>"u"))try{localStorage.removeItem(`${ns}${t}`)}catch{}}var wr="agentation-session-";function os(t){return`${wr}${t}`}function wa(t){if(typeof window>"u")return null;try{return localStorage.getItem(os(t))}catch{return null}}function Ao(t,n){if(!(typeof window>"u"))try{localStorage.setItem(os(t),n)}catch{}}function va(t){if(!(typeof window>"u"))try{localStorage.removeItem(os(t))}catch{}}var vr=`${wr}toolbar-hidden`;function ka(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(vr)==="1"}catch{return!1}}function ja(t){if(!(typeof window>"u"))try{t&&sessionStorage.setItem(vr,"1")}catch{}}async function zo(t,n){const o=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!o.ok)throw new Error(`Failed to create session: ${o.status}`);return o.json()}async function Ks(t,n){const o=await fetch(`${t}/sessions/${n}`);if(!o.ok)throw new Error(`Failed to get session: ${o.status}`);return o.json()}async function jn(t,n,o){const s=await fetch(`${t}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw new Error(`Failed to sync annotation: ${s.status}`);return s.json()}async function Gs(t,n,o){const s=await fetch(`${t}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!s.ok)throw new Error(`Failed to update annotation: ${s.status}`);return s.json()}async function en(t,n){const o=await fetch(`${t}/annotations/${n}`,{method:"DELETE"});if(!o.ok)throw new Error(`Failed to delete annotation: ${o.status}`)}var He={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Js=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Zs=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Ca=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Sa(t){const n=(t==null?void 0:t.mode)??"filtered";let o=Js;if(t!=null&&t.skipExact){const s=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);o=new Set([...Js,...s])}return{maxComponents:(t==null?void 0:t.maxComponents)??6,maxDepth:(t==null?void 0:t.maxDepth)??30,mode:n,skipExact:o,skipPatterns:t!=null&&t.skipPatterns?[...Zs,...t.skipPatterns]:Zs,userPatterns:(t==null?void 0:t.userPatterns)??Ca,filter:t==null?void 0:t.filter}}function Ma(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function $a(t,n=10){const o=new Set;let s=t,i=0;for(;s&&i<n;)s.className&&typeof s.className=="string"&&s.className.split(/\s+/).forEach(r=>{if(r.length>1){const _=r.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();_.length>1&&o.add(_)}}),s=s.parentElement,i++;return o}function Ia(t,n){const o=Ma(t);for(const s of n){if(s===o)return!0;const i=o.split("-").filter(_=>_.length>2),r=s.split("-").filter(_=>_.length>2);for(const _ of i)for(const y of r)if(_===y||_.includes(y)||y.includes(_))return!0}return!1}function La(t,n,o,s){if(o.filter)return o.filter(t,n);switch(o.mode){case"all":return!0;case"filtered":return!(o.skipExact.has(t)||o.skipPatterns.some(i=>i.test(t)));case"smart":return o.skipExact.has(t)||o.skipPatterns.some(i=>i.test(t))?!1:!!(s&&Ia(t,s)||o.userPatterns.some(i=>i.test(t)));default:return!0}}var Cn=null,Ra=new WeakMap;function Fo(t){return Object.keys(t).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Ea(){if(Cn!==null)return Cn;if(typeof document>"u")return!1;if(document.body&&Fo(document.body))return Cn=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const n of t){const o=document.querySelector(n);if(o&&Fo(o))return Cn=!0,!0}if(document.body){for(const n of document.body.children)if(Fo(n))return Cn=!0,!0}return Cn=!1,!1}var Hn={map:Ra};function Na(t){return Object.keys(t).find(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$"))||null}function Ba(t){const n=Na(t);return n?t[n]:null}function cn(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function Ta(t){var i;const{tag:n,type:o,elementType:s}=t;if(n===He.HostComponent||n===He.HostText||n===He.HostHoistable||n===He.HostSingleton||n===He.Fragment||n===He.Mode||n===He.Profiler||n===He.DehydratedFragment||n===He.HostRoot||n===He.HostPortal||n===He.ScopeComponent||n===He.OffscreenComponent||n===He.LegacyHiddenComponent||n===He.CacheComponent||n===He.TracingMarkerComponent||n===He.Throw||n===He.ViewTransitionComponent||n===He.ActivityComponent)return null;if(n===He.ForwardRef){const r=s;if(r!=null&&r.render){const _=cn(r.render);if(_)return _}return r!=null&&r.displayName?r.displayName:cn(o)}if(n===He.MemoComponent||n===He.SimpleMemoComponent){const r=s;if(r!=null&&r.type){const _=cn(r.type);if(_)return _}return r!=null&&r.displayName?r.displayName:cn(o)}if(n===He.ContextProvider){const r=o;return(i=r==null?void 0:r._context)!=null&&i.displayName?`${r._context.displayName}.Provider`:null}if(n===He.ContextConsumer){const r=o;return r!=null&&r.displayName?`${r.displayName}.Consumer`:null}if(n===He.LazyComponent){const r=s;return(r==null?void 0:r._status)===1&&r._result?cn(r._result):null}return n===He.SuspenseComponent||n===He.SuspenseListComponent?null:n===He.IncompleteClassComponent||n===He.IncompleteFunctionComponent||n===He.FunctionComponent||n===He.ClassComponent||n===He.IndeterminateComponent?cn(o):null}function Da(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function Pa(t,n){const o=Sa(n),s=o.mode==="all";if(s){const m=Hn.map.get(t);if(m!==void 0)return m}if(!Ea()){const m={path:null,components:[]};return s&&Hn.map.set(t,m),m}const i=o.mode==="smart"?$a(t):void 0,r=[];try{let m=Ba(t),E=0;for(;m&&E<o.maxDepth&&r.length<o.maxComponents;){const f=Ta(m);f&&!Da(f)&&La(f,E,o,i)&&r.push(f),m=m.return,E++}}catch{const m={path:null,components:[]};return s&&Hn.map.set(t,m),m}if(r.length===0){const m={path:null,components:[]};return s&&Hn.map.set(t,m),m}const y={path:r.slice().reverse().map(m=>`<${m}>`).join(" "),components:r};return s&&Hn.map.set(t,y),y}var Yn={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Wa(t){if(!t||typeof t!="object")return null;const n=Object.keys(t),o=n.find(r=>r.startsWith("__reactFiber$"));if(o)return t[o]||null;const s=n.find(r=>r.startsWith("__reactInternalInstance$"));if(s)return t[s]||null;const i=n.find(r=>{if(!r.startsWith("__react"))return!1;const _=t[r];return _&&typeof _=="object"&&"_debugSource"in _});return i&&t[i]||null}function Qn(t){if(!t.type||typeof t.type=="string")return null;if(typeof t.type=="object"||typeof t.type=="function"){const n=t.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Oa(t,n=50){var i;let o=t,s=0;for(;o&&s<n;){if(o._debugSource)return{source:o._debugSource,componentName:Qn(o)};if((i=o._debugOwner)!=null&&i._debugSource)return{source:o._debugOwner._debugSource,componentName:Qn(o._debugOwner)};o=o.return,s++}return null}function Aa(t){let n=t,o=0;const s=50;for(;n&&o<s;){const i=n,r=["_debugSource","__source","_source","debugSource"];for(const _ of r){const y=i[_];if(y&&typeof y=="object"&&"fileName"in y)return{source:y,componentName:Qn(n)}}if(n.memoizedProps){const _=n.memoizedProps;if(_.__source&&typeof _.__source=="object"){const y=_.__source;if(y.fileName&&y.lineNumber)return{source:{fileName:y.fileName,lineNumber:y.lineNumber,columnNumber:y.columnNumber},componentName:Qn(n)}}}n=n.return,o++}return null}var mo=new Map;function za(t){var i;const n=t.tag,o=t.type,s=t.elementType;if(typeof o=="string"||o==null||typeof o=="function"&&((i=o.prototype)!=null&&i.isReactComponent))return null;if((n===Yn.FunctionComponent||n===Yn.IndeterminateComponent)&&typeof o=="function")return o;if(n===Yn.ForwardRef&&s){const r=s.render;if(typeof r=="function")return r}if((n===Yn.MemoComponent||n===Yn.SimpleMemoComponent)&&s){const r=s.type;if(typeof r=="function")return r}return typeof o=="function"?o:null}function Fa(){const t=qr,n=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:s=>{n.H=s}};const o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(o){const s=o.ReactCurrentDispatcher;if(s&&"current"in s)return{get:()=>s.current,set:i=>{s.current=i}}}return null}function Ha(t){const n=t.split(`
`),o=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],s=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,i=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const r of n){const _=r.trim();if(!_||o.some(m=>m.test(_)))continue;const y=s.exec(_)||i.exec(_);if(y)return{fileName:y[1],line:parseInt(y[2],10),column:parseInt(y[3],10)}}return null}function Ya(t){let n=t;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Xa(t){const n=za(t);if(!n)return null;if(mo.has(n))return mo.get(n);const o=Fa();if(!o)return mo.set(n,null),null;const s=o.get();let i=null;try{const r=new Proxy({},{get(){throw new Error("probe")}});o.set(r);try{n({})}catch(_){if(_ instanceof Error&&_.message==="probe"&&_.stack){const y=Ha(_.stack);y&&(i={fileName:Ya(y.fileName),lineNumber:y.line,columnNumber:y.column,componentName:Qn(t)||void 0})}}}finally{o.set(s)}return mo.set(n,i),i}function Ua(t,n=15){let o=t,s=0;for(;o&&s<n;){const i=Xa(o);if(i)return i;o=o.return,s++}return null}function Zo(t){const n=Wa(t);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let o=Oa(n);if(o||(o=Aa(n)),o!=null&&o.source)return{found:!0,source:{fileName:o.source.fileName,lineNumber:o.source.lineNumber,columnNumber:o.source.columnNumber,componentName:o.componentName||void 0},isReactApp:!0,isProduction:!1};const s=Ua(n);return s?{found:!0,source:s,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Qa(t,n="path"){const{fileName:o,lineNumber:s,columnNumber:i}=t;let r=`${o}:${s}`;return i!==void 0&&(r+=`:${i}`),n==="vscode"?`vscode://file${o.startsWith("/")?"":"/"}${r}`:r}function qa(t,n=10){let o=t,s=0;for(;o&&s<n;){const i=Zo(o);if(i.found)return i;o=o.parentElement,s++}return Zo(t)}var Va=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Ka={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(t)),t.textContent=Va}var R=Ka,Xn=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function er(t,n,o="standard"){if(t.length===0)return"";const s=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let i=`## Page Feedback: ${n}
`;return o==="forensic"?(i+=`
**Environment:**
`,i+=`- Viewport: ${s}
`,typeof window<"u"&&(i+=`- URL: ${window.location.href}
`,i+=`- User Agent: ${navigator.userAgent}
`,i+=`- Timestamp: ${new Date().toISOString()}
`,i+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),i+=`
---
`):o!=="compact"&&(i+=`**Viewport:** ${s}
`),i+=`
`,t.forEach((r,_)=>{o==="compact"?(i+=`${_+1}. **${r.element}**${r.sourceFile?` (${r.sourceFile})`:""}: ${r.comment}`,r.selectedText&&(i+=` (re: "${r.selectedText.slice(0,30)}${r.selectedText.length>30?"...":""}")`),i+=`
`):o==="forensic"?(i+=`### ${_+1}. ${r.element}
`,r.isMultiSelect&&r.fullPath&&(i+=`*Forensic data shown for first element of selection*
`),r.fullPath&&(i+=`**Full DOM Path:** ${r.fullPath}
`),r.cssClasses&&(i+=`**CSS Classes:** ${r.cssClasses}
`),r.boundingBox&&(i+=`**Position:** x:${Math.round(r.boundingBox.x)}, y:${Math.round(r.boundingBox.y)} (${Math.round(r.boundingBox.width)}×${Math.round(r.boundingBox.height)}px)
`),i+=`**Annotation at:** ${r.x.toFixed(1)}% from left, ${Math.round(r.y)}px from top
`,r.selectedText&&(i+=`**Selected text:** "${r.selectedText}"
`),r.nearbyText&&!r.selectedText&&(i+=`**Context:** ${r.nearbyText.slice(0,100)}
`),r.computedStyles&&(i+=`**Computed Styles:** ${r.computedStyles}
`),r.accessibility&&(i+=`**Accessibility:** ${r.accessibility}
`),r.nearbyElements&&(i+=`**Nearby Elements:** ${r.nearbyElements}
`),r.sourceFile&&(i+=`**Source:** ${r.sourceFile}
`),r.reactComponents&&(i+=`**React:** ${r.reactComponents}
`),i+=`**Feedback:** ${r.comment}

`):(i+=`### ${_+1}. ${r.element}
`,i+=`**Location:** ${r.elementPath}
`,r.sourceFile&&(i+=`**Source:** ${r.sourceFile}
`),r.reactComponents&&(i+=`**React:** ${r.reactComponents}
`),o==="detailed"&&(r.cssClasses&&(i+=`**Classes:** ${r.cssClasses}
`),r.boundingBox&&(i+=`**Position:** ${Math.round(r.boundingBox.x)}px, ${Math.round(r.boundingBox.y)}px (${Math.round(r.boundingBox.width)}×${Math.round(r.boundingBox.height)}px)
`)),r.selectedText&&(i+=`**Selected text:** "${r.selectedText}"
`),o==="detailed"&&r.nearbyText&&!r.selectedText&&(i+=`**Context:** ${r.nearbyText.slice(0,100)}
`),i+=`**Feedback:** ${r.comment}

`)}),i.trim()}var Ga=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Ja={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-marker-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(t)),t.textContent=Ga}var ot=Ja;function tr({annotation:t,globalIndex:n,layerIndex:o,layerSize:s,isExiting:i,isClearing:r,isAnimated:_,isHovered:y,isDeleting:m,isEditingAny:E,renumberFrom:f,markerClickBehavior:b,tooltipStyle:w,onHoverEnter:N,onHoverLeave:k,onClick:B,onContextMenu:U}){const W=(y||m)&&!E,me=W&&b==="delete",De=t.isMultiSelect,I=De?"var(--agentation-color-green)":"var(--agentation-color-accent)",ne=i?ot.exit:r?ot.clearing:_?"":ot.enter,he=i?`${(s-1-o)*20}ms`:`${o*20}ms`;return e.jsxs("div",{className:`${ot.marker} ${De?ot.multiSelect:""} ${ne} ${me?ot.hovered:""}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y,backgroundColor:me?void 0:I,animationDelay:he},onMouseEnter:()=>N(t),onMouseLeave:k,onClick:O=>{O.stopPropagation(),i||B(t)},onContextMenu:U?O=>{b==="delete"&&(O.preventDefault(),O.stopPropagation(),i||U(t))}:void 0,children:[W?me?e.jsx(lr,{size:De?18:16}):e.jsx(_i,{size:16}):e.jsx("span",{className:f!==null&&n>=f?ot.renumber:void 0,children:n+1}),y&&!E&&e.jsxs("div",{className:`${ot.markerTooltip} ${ot.enter}`,style:w,children:[e.jsxs("span",{className:ot.markerQuote,children:[t.element,t.selectedText&&` "${t.selectedText.slice(0,30)}${t.selectedText.length>30?"...":""}"`]}),e.jsx("span",{className:ot.markerNote,children:t.comment})]})]})}function Za({x:t,y:n,isMultiSelect:o,isExiting:s}){return e.jsx("div",{className:`${ot.marker} ${ot.pending} ${o?ot.multiSelect:""} ${s?ot.exit:ot.enter}`,style:{left:`${t}%`,top:n,backgroundColor:o?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:e.jsx(Zr,{size:12})})}function nr({annotation:t,fixed:n}){const o=t.isMultiSelect;return e.jsx("div",{className:`${ot.marker} ${n?ot.fixed:""} ${ot.hovered} ${o?ot.multiSelect:""} ${ot.exit}`,"data-annotation-marker":!0,style:{left:`${t.x}%`,top:t.y},children:e.jsx(lr,{size:o?12:10})})}var ec=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,tc={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-switch-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-switch-styles",document.head.appendChild(t)),t.textContent=ec}var Ho=tc,Yo=({className:t="",...n})=>e.jsxs("div",{className:`${Ho.switchContainer} ${t}`,children:[e.jsx("input",{className:Ho.switchInput,type:"checkbox",...n}),e.jsx("div",{className:Ho.switchThumb})]}),nc=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,oc={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(t)),t.textContent=nc}var po=oc,sc=({className:t="",...n})=>e.jsxs("div",{className:`${po.checkboxContainer} ${t}`,children:[e.jsx("input",{className:po.checkboxInput,type:"checkbox",...n}),e.jsx("svg",{className:po.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{className:po.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),rc=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,ic={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-checkbox-field-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(t)),t.textContent=rc}var or=ic,sr=({className:t="",label:n,tooltip:o,checked:s,onChange:i,...r})=>{const _=c.useId();return e.jsxs("div",{className:`${or.container} ${t}`,...r,children:[e.jsx(sc,{id:_,onChange:i,checked:s}),e.jsx("label",{className:or.label,htmlFor:_,children:n}),o&&e.jsx(un,{content:o})]})},lc=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,ac={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-settings-panel-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(t)),t.textContent=lc}var q=ac;function cc({settings:t,onSettingsChange:n,isDarkMode:o,onToggleTheme:s,isDevMode:i,connectionStatus:r,endpoint:_,isVisible:y,toolbarNearBottom:m,settingsPage:E,onSettingsPageChange:f,onHideToolbar:b}){var w;return e.jsx("div",{className:`${q.settingsPanel} ${y?q.enter:q.exit}`,style:m?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:e.jsxs("div",{className:q.settingsPanelContainer,children:[e.jsxs("div",{className:`${q.settingsPage} ${E==="automations"?q.slideLeft:""}`,children:[e.jsxs("div",{className:q.settingsHeader,children:[e.jsx("a",{className:q.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:e.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),e.jsxs("p",{className:q.settingsVersion,children:["v","3.0.2"]}),e.jsx("button",{className:q.themeToggle,onClick:s,title:o?"Switch to light mode":"Switch to dark mode",children:e.jsx("span",{className:q.themeIconWrapper,children:e.jsx("span",{className:q.themeIcon,children:o?e.jsx(ci,{size:20}):e.jsx(di,{size:20})},o?"sun":"moon")})})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("div",{className:q.settingsLabel,children:["Output Detail",e.jsx(un,{content:"Controls how much detail is included in the copied output"})]}),e.jsxs("button",{className:q.cycleButton,onClick:()=>{const k=(Xn.findIndex(B=>B.value===t.outputDetail)+1)%Xn.length;n({outputDetail:Xn[k].value})},children:[e.jsx("span",{className:q.cycleButtonText,children:(w=Xn.find(N=>N.value===t.outputDetail))==null?void 0:w.label},t.outputDetail),e.jsx("span",{className:q.cycleDots,children:Xn.map(N=>e.jsx("span",{className:`${q.cycleDot} ${t.outputDetail===N.value?q.active:""}`},N.value))})]})]}),e.jsxs("div",{className:`${q.settingsRow} ${q.settingsRowMarginTop} ${i?"":q.settingsRowDisabled}`,children:[e.jsxs("div",{className:q.settingsLabel,children:["React Components",e.jsx(un,{content:i?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),e.jsx(Yo,{checked:i&&t.reactEnabled,onChange:N=>n({reactEnabled:N.target.checked}),disabled:!i})]}),e.jsxs("div",{className:`${q.settingsRow} ${q.settingsRowMarginTop}`,children:[e.jsxs("div",{className:q.settingsLabel,children:["Hide Until Restart",e.jsx(un,{content:"Hides the toolbar until you open a new tab"})]}),e.jsx(Yo,{checked:!1,onChange:N=>{N.target.checked&&b()}})]})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsx("div",{className:`${q.settingsLabel} ${q.settingsLabelMarker}`,children:"Marker Color"}),e.jsx("div",{className:q.colorOptions,children:Un.map(N=>e.jsx("button",{className:`${q.colorOption} ${t.annotationColorId===N.id?q.selected:""}`,style:{"--swatch":N.srgb,"--swatch-p3":N.p3},onClick:()=>n({annotationColorId:N.id}),title:N.label,type:"button"},N.id))})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsx(sr,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:N=>n({autoClearAfterCopy:N.target.checked}),tooltip:"Automatically clear annotations after copying"}),e.jsx(sr,{className:q.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:N=>n({blockInteractions:N.target.checked})})]}),e.jsx("div",{className:q.divider}),e.jsxs("button",{className:q.settingsNavLink,onClick:()=>f("automations"),children:[e.jsx("span",{children:"Manage MCP & Webhooks"}),e.jsxs("span",{className:q.settingsNavLinkRight,children:[_&&r!=="disconnected"&&e.jsx("span",{className:`${q.mcpNavIndicator} ${q[r]}`}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),e.jsxs("div",{className:`${q.settingsPage} ${q.automationsPage} ${E==="automations"?q.slideIn:""}`,children:[e.jsxs("button",{className:q.settingsBackButton,onClick:()=>f("main"),children:[e.jsx(hi,{size:16}),e.jsx("span",{children:"Manage MCP & Webhooks"})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:q.settingsSection,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("span",{className:q.automationHeader,children:["MCP Connection",e.jsx(un,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),_&&e.jsx("div",{className:`${q.mcpStatusDot} ${q[r]}`,title:r==="connected"?"Connected":r==="connecting"?"Connecting...":"Disconnected"})]}),e.jsxs("p",{className:q.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",e.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:q.learnMoreLink,children:"Learn more"})]})]}),e.jsx("div",{className:q.divider}),e.jsxs("div",{className:`${q.settingsSection} ${q.settingsSectionGrow}`,children:[e.jsxs("div",{className:q.settingsRow,children:[e.jsxs("span",{className:q.automationHeader,children:["Webhooks",e.jsx(un,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),e.jsxs("div",{className:q.autoSendContainer,children:[e.jsx("label",{htmlFor:"agentation-auto-send",className:`${q.autoSendLabel} ${t.webhooksEnabled?q.active:""} ${t.webhookUrl?"":q.disabled}`,children:"Auto-Send"}),e.jsx(Yo,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:N=>n({webhooksEnabled:N.target.checked}),disabled:!t.webhookUrl})]})]}),e.jsx("p",{className:q.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),e.jsx("textarea",{className:q.webhookUrlInput,placeholder:"Webhook URL",value:t.webhookUrl,onKeyDown:N=>N.stopPropagation(),onChange:N=>n({webhookUrl:N.target.value})})]})]})]})})}function Xo(t,n="filtered"){const{name:o,path:s}=Mn(t);if(n==="off")return{name:o,elementName:o,path:s,reactComponents:null};const i=Pa(t,{mode:n});return{name:i.path?`${i.path} ${o}`:o,elementName:o,path:s,reactComponents:i.path}}var rr=!1,Uo={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},zt=t=>{if(!t||!t.trim())return!1;try{const n=new URL(t.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},Un=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],dc=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const t=document.createElement("style");t.id="agentation-color-tokens",t.textContent=[...Un.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${Un.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Un.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(t)};dc();function dn(t,n){let o=document.elementFromPoint(t,n);if(!o)return null;for(;o!=null&&o.shadowRoot;){const s=o.shadowRoot.elementFromPoint(t,n);if(!s||s===o)break;o=s}return o}function Qo(t){let n=t;for(;n&&n!==document.body;){const s=window.getComputedStyle(n).position;if(s==="fixed"||s==="sticky")return!0;n=n.parentElement}return!1}function _n(t){return t.status!=="resolved"&&t.status!=="dismissed"}function go(t){const n=Zo(t),o=n.found?n:qa(t);if(o.found&&o.source)return Qa(o.source,"path")}function hc({demoAnnotations:t,demoDelay:n=1e3,enableDemoMode:o=!1,onAnnotationAdd:s,onAnnotationDelete:i,onAnnotationUpdate:r,onAnnotationsClear:_,onCopy:y,onSubmit:m,copyToClipboard:E=!0,endpoint:f,sessionId:b,onSessionCreated:w,webhookUrl:N,className:k}={}){var Is,Ls,Rs,Es,Ns,Bs;const[B,U]=c.useState(!1),[W,me]=c.useState([]),[De,I]=c.useState(!0),[ne,he]=c.useState(()=>ka()),[O,ke]=c.useState(!1),Le=c.useRef(null);c.useEffect(()=>{const l=h=>{const u=Le.current;u&&u.contains(h.target)&&h.stopPropagation()},d=["mousedown","click","pointerdown"];return d.forEach(h=>document.body.addEventListener(h,l)),()=>{d.forEach(h=>document.body.removeEventListener(h,l))}},[]);const[xe,_e]=c.useState(!1),[ze,Ye]=c.useState(!1),[pe,$e]=c.useState(null),[J,st]=c.useState({x:0,y:0}),[P,ue]=c.useState(null),[Pe,Ke]=c.useState(!1),[gt,mt]=c.useState("idle"),[Ut,Mt]=c.useState(!1),[Qt,Rt]=c.useState(!1),[Ft,qt]=c.useState(null),[Vt,jt]=c.useState(null),[Ge,ft]=c.useState([]),[pt,Kt]=c.useState(null),[Ht,Gt]=c.useState(null),[S,Z]=c.useState(null),[ge,ae]=c.useState(null),[Re,ve]=c.useState([]),[Ee,be]=c.useState(0),[We,Je]=c.useState(!1),[ee,g]=c.useState(!1),[x,M]=c.useState(!1),[L,G]=c.useState(!1),[V,D]=c.useState(!1),[Me,fe]=c.useState("main"),[Ne,ie]=c.useState(!1),[Q,Be]=c.useState(!1),[Fe,rt]=c.useState(!1),[Y,Te]=c.useState([]),[je,we]=c.useState(null),it=c.useRef(!1),[oe,Oe]=c.useState(!1),[dt,bt]=c.useState(!1),[yt,mn]=c.useState(1),[Yt,Ct]=c.useState("new-page"),[et,Et]=c.useState(""),[$t,pn]=c.useState(!1),[F,It]=c.useState(null),bo=c.useRef(!1),wo=c.useRef({rearrange:null,placements:[]}),tn=c.useRef({rearrange:null,placements:[]}),[kr,ss]=c.useState(0),[jr,Cr]=c.useState(0),[Sr,vo]=c.useState(0),[Mr,rs]=c.useState(0),In=c.useRef(new Set),qn=c.useRef(new Set),Nt=c.useRef(null),Vn=c.useRef(),is=Q&&B&&!Fe&&oe;c.useEffect(()=>{if(is){bt(!1);const l=Sn(()=>{bt(!0)});return()=>cancelAnimationFrame(l)}else bt(!1)},[is]);const Ln=c.useRef(new Map),Rn=c.useRef(new Map),En=c.useRef(),[Bt,ko]=c.useState(!1),[Lt,$r]=c.useState([]),Ir=c.useRef(Lt);Ir.current=Lt;const[ls,_c]=c.useState(null),jo=c.useRef(null);c.useRef(!1),c.useRef([]),c.useRef(0),c.useRef(null),c.useRef(null),c.useRef(1);const[as,cs]=c.useState(!1),gn=c.useRef(null),[lt,fn]=c.useState([]),Pt=c.useRef({cmd:!1,shift:!1}),xt=()=>{ie(!0)},Lr=()=>{ie(!1)},Rr=()=>{as||(gn.current=re(()=>cs(!0),850))},Er=()=>{gn.current&&(clearTimeout(gn.current),gn.current=null),cs(!1),Lr()};c.useEffect(()=>()=>{gn.current&&clearTimeout(gn.current)},[]);const[Ie,Nr]=c.useState(()=>{try{const l=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Uo,...l,annotationColorId:Un.find(d=>d.id===l.annotationColorId)?l.annotationColorId:Uo.annotationColorId}}catch{return Uo}}),[Wt,ds]=c.useState(!0),[_s,us]=c.useState(!1),Br=()=>{var l;(l=Le.current)==null||l.classList.add(R.disableTransitions),ds(d=>!d),Sn(()=>{var d;(d=Le.current)==null||d.classList.remove(R.disableTransitions)})},Tr=!1,nn="off",[_t,Co]=c.useState(b??null),hs=c.useRef(!1),[Tt,on]=c.useState(f?"connecting":"disconnected"),[Qe,So]=c.useState(null),[sn,ms]=c.useState(!1),[yn,ps]=c.useState(null),Mo=c.useRef(!1),[gs,Nn]=c.useState(new Set),[fs,Kn]=c.useState(new Set),[Bn,Gn]=c.useState(!1),[Dr,xn]=c.useState(!1),[Xt,ys]=c.useState(!1),bn=c.useRef(null),Ot=c.useRef(null),Tn=c.useRef(null),Dn=c.useRef(null),Jn=c.useRef(!1),xs=c.useRef(0),Zn=c.useRef(null),bs=c.useRef(null),$o=8,Pr=50,ws=c.useRef(null),vs=c.useRef(null),Pn=c.useRef(null),le=typeof window<"u"?window.location.pathname:"/";c.useEffect(()=>{if(L)D(!0);else{ie(!1),fe("main");const l=re(()=>D(!1),0);return()=>clearTimeout(l)}},[L]);const Io=B&&De&&!Q;c.useEffect(()=>{if(Io){Ye(!1),_e(!0),Nn(new Set);const l=re(()=>{Nn(d=>{const h=new Set(d);return W.forEach(u=>h.add(u.id)),h})},350);return()=>clearTimeout(l)}else if(xe){Ye(!0);const l=re(()=>{_e(!1),Ye(!1)},250);return()=>clearTimeout(l)}},[Io]),c.useEffect(()=>{g(!0),be(window.scrollY);const l=Oo(le);me(l.filter(_n)),rr||(us(!0),rr=!0,re(()=>us(!1),750));try{const d=localStorage.getItem("feedback-toolbar-theme");d!==null&&ds(d==="dark")}catch{}try{const d=localStorage.getItem("feedback-toolbar-position");if(d){const h=JSON.parse(d);typeof h.x=="number"&&typeof h.y=="number"&&So(h)}}catch{}},[le]),c.useEffect(()=>{ee&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(Ie))},[Ie,ee]),c.useEffect(()=>{ee&&localStorage.setItem("feedback-toolbar-theme",Wt?"dark":"light")},[Wt,ee]);const ks=c.useRef(!1);c.useEffect(()=>{const l=ks.current;ks.current=sn,l&&!sn&&Qe&&ee&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Qe))},[sn,Qe,ee]),c.useEffect(()=>{if(!f||!ee||hs.current)return;hs.current=!0,on("connecting"),(async()=>{try{const d=wa(le),h=b||d;let u=!1;if(h)try{const p=await Ks(f,h);Co(p.id),on("connected"),Ao(le,p.id),u=!0;const v=Oo(le),T=new Set(p.annotations.map(z=>z.id)),A=v.filter(z=>!T.has(z.id));if(A.length>0){const K=`${typeof window<"u"?window.location.origin:""}${le}`,ce=(await Promise.allSettled(A.map(se=>jn(f,p.id,{...se,sessionId:p.id,url:K})))).map((se,X)=>se.status==="fulfilled"?se.value:(console.warn("[Agentation] Failed to sync annotation:",se.reason),A[X])),Ce=[...p.annotations,...ce];me(Ce.filter(_n)),Fn(le,Ce.filter(_n),p.id)}else me(p.annotations.filter(_n)),Fn(le,p.annotations.filter(_n),p.id)}catch(p){console.warn("[Agentation] Could not join session, creating new:",p),va(le)}if(!u){const p=typeof window<"u"?window.location.href:"/",v=await zo(f,p);Co(v.id),on("connected"),Ao(le,v.id),w==null||w(v.id);const T=ha(),A=typeof window<"u"?window.location.origin:"",z=[];for(const[K,te]of T){const ce=te.filter(X=>!X._syncedTo);if(ce.length===0)continue;const Ce=`${A}${K}`,se=K===le;z.push((async()=>{try{const X=se?v:await zo(f,Ce),at=(await Promise.allSettled(ce.map(Ae=>jn(f,X.id,{...Ae,sessionId:X.id,url:Ce})))).map((Ae,nt)=>Ae.status==="fulfilled"?Ae.value:(console.warn("[Agentation] Failed to sync annotation:",Ae.reason),ce[nt])).filter(_n);if(Fn(K,at,X.id),se){const Ae=new Set(ce.map(nt=>nt.id));me(nt=>{const de=nt.filter(ye=>!Ae.has(ye.id));return[...at,...de]})}}catch(X){console.warn(`[Agentation] Failed to sync annotations for ${K}:`,X)}})())}await Promise.allSettled(z)}}catch(d){on("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",d)}})()},[f,b,ee,w,le]),c.useEffect(()=>{if(!f||!ee)return;const l=async()=>{try{(await fetch(`${f}/health`)).ok?on("connected"):on("disconnected")}catch{on("disconnected")}};l();const d=gi(l,1e4);return()=>clearInterval(d)},[f,ee]),c.useEffect(()=>{if(!f||!ee||!_t)return;const l=new EventSource(`${f}/sessions/${_t}/events`),d=["resolved","dismissed"],h=u=>{var p;try{const v=JSON.parse(u.data);if(d.includes((p=v.payload)==null?void 0:p.status)){const T=v.payload.id,A=v.payload.kind;if(A==="placement"){for(const[z,K]of Ln.current)if(K===T){Ln.current.delete(z),Te(te=>te.filter(ce=>ce.id!==z));break}}else if(A==="rearrange"){for(const[z,K]of Rn.current)if(K===T){Rn.current.delete(z),It(te=>{if(!te)return null;const ce=te.sections.filter(Ce=>Ce.id!==z);return ce.length===0?null:{...te,sections:ce}});break}}else Kn(z=>new Set(z).add(T)),re(()=>{me(z=>z.filter(K=>K.id!==T)),Kn(z=>{const K=new Set(z);return K.delete(T),K})},150)}}catch{}};return l.addEventListener("annotation.updated",h),()=>{l.removeEventListener("annotation.updated",h),l.close()}},[f,ee,_t]),c.useEffect(()=>{if(!f||!ee)return;const l=bs.current==="disconnected",d=Tt==="connected";bs.current=Tt,l&&d&&(async()=>{try{const u=Oo(le);if(u.length===0)return;const v=`${typeof window<"u"?window.location.origin:""}${le}`;let T=_t,A=[];if(T)try{A=(await Ks(f,T)).annotations}catch{T=null}T||(T=(await zo(f,v)).id,Co(T),Ao(le,T));const z=new Set(A.map(te=>te.id)),K=u.filter(te=>!z.has(te.id));if(K.length>0){const ce=(await Promise.allSettled(K.map(X=>jn(f,T,{...X,sessionId:T,url:v})))).map((X,tt)=>X.status==="fulfilled"?X.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",X.reason),K[tt])),se=[...A,...ce].filter(_n);me(se),Fn(le,se,T)}}catch(u){console.warn("[Agentation] Failed to sync on reconnect:",u)}})()},[Tt,f,ee,_t,le]);const Wr=c.useCallback(()=>{O||(ke(!0),G(!1),U(!1),re(()=>{ja(!0),he(!0),ke(!1)},400))},[O]);c.useEffect(()=>{if(!o||!ee||!t||t.length===0||W.length>0)return;const l=[];return l.push(re(()=>{U(!0)},n-200)),t.forEach((d,h)=>{const u=n+h*300;l.push(re(()=>{const p=document.querySelector(d.selector);if(!p)return;const v=p.getBoundingClientRect(),{name:T,path:A}=Mn(p),z={id:`demo-${Date.now()}-${h}`,x:(v.left+v.width/2)/window.innerWidth*100,y:v.top+v.height/2+window.scrollY,comment:d.comment,element:T,elementPath:A,timestamp:Date.now(),selectedText:d.selectedText,boundingBox:{x:v.left,y:v.top+window.scrollY,width:v.width,height:v.height},nearbyText:An(p),cssClasses:zn(p)};me(K=>[...K,z])},u))}),()=>{l.forEach(clearTimeout)}},[o,ee,t,n]),c.useEffect(()=>{const l=()=>{be(window.scrollY),Je(!0),Pn.current&&clearTimeout(Pn.current),Pn.current=re(()=>{Je(!1)},150)};return window.addEventListener("scroll",l,{passive:!0}),()=>{window.removeEventListener("scroll",l),Pn.current&&clearTimeout(Pn.current)}},[]),c.useEffect(()=>{ee&&W.length>0?_t?Fn(le,W,_t):br(le,W):ee&&W.length===0&&localStorage.removeItem(xo(le))},[W,le,ee,_t]),c.useEffect(()=>{if(ee&&!it.current){it.current=!0;const l=ma(le);l.length>0&&Te(l)}},[ee,le]),c.useEffect(()=>{ee&&it.current&&!oe&&(Y.length>0?pa(le,Y):ga(le))},[Y,le,ee,oe]),c.useEffect(()=>{if(ee&&!bo.current){bo.current=!0;const l=fa(le);if(l){const d={...l,sections:l.sections.map(h=>({...h,currentRect:h.currentRect??{...h.originalRect}}))};It(d)}}},[ee,le]),c.useEffect(()=>{ee&&bo.current&&!oe&&(F?ya(le,F):xa(le))},[F,le,ee,oe]);const Lo=c.useRef(!1);c.useEffect(()=>{if(ee&&!Lo.current){Lo.current=!0;const l=ba(le);l&&(tn.current={rearrange:l.rearrange,placements:l.placements||[]},l.purpose&&Et(l.purpose))}},[ee,le]),c.useEffect(()=>{var d,h,u;if(!ee||!Lo.current)return;const l=tn.current;oe?(((d=F==null?void 0:F.sections)==null?void 0:d.length)??0)>0||Y.length>0||et?Vs(le,{rearrange:F,placements:Y,purpose:et}):ho(le):(((u=(h=l.rearrange)==null?void 0:h.sections)==null?void 0:u.length)??0)>0||l.placements.length>0||et?Vs(le,{rearrange:l.rearrange,placements:l.placements,purpose:et}):ho(le)},[F,Y,et,oe,le,ee]),c.useEffect(()=>{Q&&!F&&It({sections:[],originalOrder:[],detectedAt:Date.now()})},[Q,F]),c.useEffect(()=>{if(!f||!_t)return;const l=Ln.current,d=new Set(Y.map(h=>h.id));for(const h of Y){if(l.has(h.id))continue;l.set(h.id,"");const u=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;jn(f,_t,{id:h.id,x:h.x/window.innerWidth*100,y:h.y,comment:`Place ${h.type} at (${Math.round(h.x)}, ${Math.round(h.y)}), ${h.width}×${h.height}px${h.text?` — "${h.text}"`:""}`,element:`[design:${h.type}]`,elementPath:"[placement]",timestamp:h.timestamp,url:u,intent:"change",severity:"important",kind:"placement",placement:{componentType:h.type,width:h.width,height:h.height,scrollY:h.scrollY,text:h.text}}).then(p=>{l.has(h.id)&&l.set(h.id,p.id)}).catch(p=>{console.warn("[Agentation] Failed to sync placement annotation:",p),l.delete(h.id)})}for(const[h,u]of l)d.has(h)||(l.delete(h),u&&en(f,u).catch(()=>{}))},[Y,f,_t,le]),c.useEffect(()=>{if(!(!f||!_t))return En.current&&clearTimeout(En.current),En.current=re(()=>{const l=Rn.current;if(!F||F.sections.length===0){for(const[,u]of l)u&&en(f,u).catch(()=>{});l.clear();return}const d=new Set(F.sections.map(u=>u.id)),h=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;for(const u of F.sections){const p=u.originalRect,v=u.currentRect;if(!(Math.abs(p.x-v.x)>1||Math.abs(p.y-v.y)>1||Math.abs(p.width-v.width)>1||Math.abs(p.height-v.height)>1)){const z=l.get(u.id);z&&(l.delete(u.id),en(f,z).catch(()=>{}));continue}const A=l.get(u.id);A?Gs(f,A,{comment:`Move ${u.label} section (${u.tagName}) — from (${Math.round(p.x)},${Math.round(p.y)}) ${Math.round(p.width)}×${Math.round(p.height)} to (${Math.round(v.x)},${Math.round(v.y)}) ${Math.round(v.width)}×${Math.round(v.height)}`}).catch(z=>{console.warn("[Agentation] Failed to update rearrange annotation:",z)}):(l.set(u.id,""),jn(f,_t,{id:u.id,x:v.x/window.innerWidth*100,y:v.y,comment:`Move ${u.label} section (${u.tagName}) — from (${Math.round(p.x)},${Math.round(p.y)}) ${Math.round(p.width)}×${Math.round(p.height)} to (${Math.round(v.x)},${Math.round(v.y)}) ${Math.round(v.width)}×${Math.round(v.height)}`,element:u.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:h,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:u.selector,label:u.label,tagName:u.tagName,originalRect:p,currentRect:v}}).then(z=>{l.has(u.id)&&l.set(u.id,z.id)}).catch(z=>{console.warn("[Agentation] Failed to sync rearrange annotation:",z),l.delete(u.id)}))}for(const[u,p]of l)d.has(u)||(l.delete(u),p&&en(f,p).catch(()=>{}))},300),()=>{En.current&&clearTimeout(En.current)}},[F,f,_t,le]);const wn=c.useRef(new Map);c.useLayoutEffect(()=>{const l=(F==null?void 0:F.sections)??[],d=new Set;if((Q||Fe)&&B)for(const h of l){d.add(h.id);try{const u=document.querySelector(h.selector);if(!u)continue;if(!wn.current.has(h.id)){const p={transform:u.style.transform,transformOrigin:u.style.transformOrigin,opacity:u.style.opacity,position:u.style.position,zIndex:u.style.zIndex,display:u.style.display},v=[];let T=u.parentElement;for(;T&&T!==document.body;){const z=getComputedStyle(T);(z.overflow!=="visible"||z.overflowX!=="visible"||z.overflowY!=="visible")&&(v.push({el:T,overflow:T.style.overflow}),T.style.overflow="visible"),T=T.parentElement}getComputedStyle(u).display==="inline"&&(u.style.display="inline-block"),wn.current.set(h.id,{el:u,origStyles:p,ancestors:v}),u.style.transformOrigin="top left",u.style.zIndex="9999"}}catch{}}for(const[h,u]of wn.current)if(!d.has(h)){const{el:p,origStyles:v,ancestors:T}=u;p.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",p.style.transform=v.transform,p.style.transformOrigin=v.transformOrigin,p.style.opacity=v.opacity,p.style.position=v.position,p.style.zIndex=v.zIndex,wn.current.delete(h),re(()=>{p.style.transition="",p.style.display=v.display;for(const A of T)A.el.style.overflow=A.overflow},450)}},[F,Q,Fe,B]),c.useEffect(()=>()=>{for(const[,l]of wn.current){const{el:d,origStyles:h,ancestors:u}=l;d.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",d.style.transform=h.transform,d.style.transformOrigin=h.transformOrigin,d.style.opacity=h.opacity,d.style.position=h.position,d.style.zIndex=h.zIndex,re(()=>{d.style.transition="",d.style.display=h.display;for(const p of u)p.el.style.overflow=p.overflow},450)}wn.current.clear()},[]);const eo=c.useCallback(()=>{rt(!0),Be(!1),we(null),clearTimeout(Vn.current),Vn.current=re(()=>{rt(!1)},300)},[]),js=c.useCallback(()=>{Q&&(rt(!0),Be(!1),we(null),clearTimeout(Vn.current),Vn.current=re(()=>{rt(!1)},300)),U(!1)},[Q]),Cs=c.useCallback(()=>{x||(yi(),M(!0))},[x]),to=c.useCallback(()=>{x&&(Ts(),M(!1))},[x]),Ro=c.useCallback(()=>{x?to():Cs()},[x,Cs,to]),Ss=c.useCallback(()=>{if(lt.length===0)return;const l=lt[0],d=l.element,h=lt.length>1,u=lt.map(p=>p.element.getBoundingClientRect());if(h){const p={left:Math.min(...u.map(X=>X.left)),top:Math.min(...u.map(X=>X.top)),right:Math.max(...u.map(X=>X.right)),bottom:Math.max(...u.map(X=>X.bottom))},v=lt.slice(0,5).map(X=>X.name).join(", "),T=lt.length>5?` +${lt.length-5} more`:"",A=u.map(X=>({x:X.left,y:X.top+window.scrollY,width:X.width,height:X.height})),K=lt[lt.length-1].element,te=u[u.length-1],ce=te.left+te.width/2,Ce=te.top+te.height/2,se=Qo(K);ue({x:ce/window.innerWidth*100,y:se?Ce:Ce+window.scrollY,clientY:Ce,element:`${lt.length} elements: ${v}${T}`,elementPath:"multi-select",boundingBox:{x:p.left,y:p.top+window.scrollY,width:p.right-p.left,height:p.bottom-p.top},isMultiSelect:!0,isFixed:se,elementBoundingBoxes:A,multiSelectElements:lt.map(X=>X.element),targetElement:K,fullPath:co(d),accessibility:ao(d),computedStyles:lo(d),computedStylesObj:io(d),nearbyElements:ro(d),cssClasses:zn(d),nearbyText:An(d),sourceFile:go(d)})}else{const p=u[0],v=Qo(d);ue({x:p.left/window.innerWidth*100,y:v?p.top:p.top+window.scrollY,clientY:p.top,element:l.name,elementPath:l.path,boundingBox:{x:p.left,y:v?p.top:p.top+window.scrollY,width:p.width,height:p.height},isFixed:v,fullPath:co(d),accessibility:ao(d),computedStyles:lo(d),computedStylesObj:io(d),nearbyElements:ro(d),cssClasses:zn(d),nearbyText:An(d),reactComponents:l.reactComponents,sourceFile:go(d)})}fn([]),$e(null)},[lt]);c.useEffect(()=>{B||(ue(null),Z(null),ae(null),ve([]),$e(null),G(!1),fn([]),Pt.current={cmd:!1,shift:!1},x&&to())},[B,x,to]),c.useEffect(()=>()=>{Ts()},[]),c.useEffect(()=>{if(!B)return;const l=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),d=":not([data-agentation-root]):not([data-agentation-root] *)",h=document.createElement("style");return h.id="feedback-cursor-styles",h.textContent=`
      body ${d} {
        cursor: crosshair !important;
      }

      body :is(${l})${d} {
        cursor: text !important;
      }
    `,document.head.appendChild(h),()=>{const u=document.getElementById("feedback-cursor-styles");u&&u.remove()}},[B]),c.useEffect(()=>{if(ls!==null&&B)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ls,B]),c.useEffect(()=>{if(!B||P||Bt||Q)return;const l=d=>{const h=d.composedPath()[0]||d.target;if(vt(h,"[data-feedback-toolbar]")){$e(null);return}const u=dn(d.clientX,d.clientY);if(!u||vt(u,"[data-feedback-toolbar]")){$e(null);return}const{name:p,elementName:v,path:T,reactComponents:A}=Xo(u,nn),z=u.getBoundingClientRect();$e({element:p,elementName:v,elementPath:T,rect:z,reactComponents:A}),st({x:d.clientX,y:d.clientY})};return document.addEventListener("mousemove",l),()=>document.removeEventListener("mousemove",l)},[B,P,Bt,Q,nn,Lt]);const no=c.useCallback(l=>{var d;if(Z(l),qt(null),jt(null),ft([]),(d=l.elementBoundingBoxes)!=null&&d.length){const h=[];for(const u of l.elementBoundingBoxes){const p=u.x+u.width/2,v=u.y+u.height/2-window.scrollY,T=dn(p,v);T&&h.push(T)}ve(h),ae(null)}else if(l.boundingBox){const h=l.boundingBox,u=h.x+h.width/2,p=l.isFixed?h.y+h.height/2:h.y+h.height/2-window.scrollY,v=dn(u,p);if(v){const T=v.getBoundingClientRect(),A=T.width/h.width,z=T.height/h.height;A<.5||z<.5?ae(null):ae(v)}else ae(null);ve([])}else ae(null),ve([])},[]);c.useEffect(()=>{if(!B||Bt||Q)return;const l=d=>{var Ve,at;if(Jn.current){Jn.current=!1;return}const h=d.composedPath()[0]||d.target;if(vt(h,"[data-feedback-toolbar]")||vt(h,"[data-annotation-popup]")||vt(h,"[data-annotation-marker]"))return;if(d.metaKey&&d.shiftKey&&!P&&!S){d.preventDefault(),d.stopPropagation();const Ae=dn(d.clientX,d.clientY);if(!Ae)return;const nt=Ae.getBoundingClientRect(),{name:de,path:ye,reactComponents:ut}=Xo(Ae,nn),Ze=lt.findIndex(wt=>wt.element===Ae);Ze>=0?fn(wt=>wt.filter((St,ht)=>ht!==Ze)):fn(wt=>[...wt,{element:Ae,rect:nt,name:de,path:ye,reactComponents:ut??void 0}]);return}const u=vt(h,"button, a, input, select, textarea, [role='button'], [onclick]");if(Ie.blockInteractions&&u&&(d.preventDefault(),d.stopPropagation()),P){if(u&&!Ie.blockInteractions)return;d.preventDefault(),(Ve=ws.current)==null||Ve.shake();return}if(S){if(u&&!Ie.blockInteractions)return;d.preventDefault(),(at=vs.current)==null||at.shake();return}d.preventDefault();const p=dn(d.clientX,d.clientY);if(!p)return;const{name:v,path:T,reactComponents:A}=Xo(p,nn),z=p.getBoundingClientRect(),K=d.clientX/window.innerWidth*100,te=Qo(p),ce=te?d.clientY:d.clientY+window.scrollY,Ce=window.getSelection();let se;Ce&&Ce.toString().trim().length>0&&(se=Ce.toString().trim().slice(0,500));const X=io(p),tt=lo(p);ue({x:K,y:ce,clientY:d.clientY,element:v,elementPath:T,selectedText:se,boundingBox:{x:z.left,y:te?z.top:z.top+window.scrollY,width:z.width,height:z.height},nearbyText:An(p),cssClasses:zn(p),isFixed:te,fullPath:co(p),accessibility:ao(p),computedStyles:tt,computedStylesObj:X,nearbyElements:ro(p),reactComponents:A??void 0,sourceFile:go(p),targetElement:p}),$e(null)};return document.addEventListener("click",l,!0),()=>document.removeEventListener("click",l,!0)},[B,Bt,Q,P,S,Ie.blockInteractions,nn,lt]),c.useEffect(()=>{if(!B)return;const l=u=>{u.key==="Meta"&&(Pt.current.cmd=!0),u.key==="Shift"&&(Pt.current.shift=!0)},d=u=>{const p=Pt.current.cmd&&Pt.current.shift;u.key==="Meta"&&(Pt.current.cmd=!1),u.key==="Shift"&&(Pt.current.shift=!1);const v=Pt.current.cmd&&Pt.current.shift;p&&!v&&lt.length>0&&Ss()},h=()=>{Pt.current={cmd:!1,shift:!1},fn([])};return document.addEventListener("keydown",l),document.addEventListener("keyup",d),window.addEventListener("blur",h),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",d),window.removeEventListener("blur",h)}},[B,lt,Ss]),c.useEffect(()=>{if(!B||P||Bt||Q)return;const l=d=>{const h=d.composedPath()[0]||d.target;vt(h,"[data-feedback-toolbar]")||vt(h,"[data-annotation-marker]")||vt(h,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(h.tagName)||h.isContentEditable||(d.preventDefault(),bn.current={x:d.clientX,y:d.clientY})};return document.addEventListener("mousedown",l),()=>document.removeEventListener("mousedown",l)},[B,P,Bt,Q]),c.useEffect(()=>{if(!B||P)return;const l=d=>{if(!bn.current)return;const h=d.clientX-bn.current.x,u=d.clientY-bn.current.y,p=h*h+u*u,v=$o*$o;if(!Xt&&p>=v&&(Ot.current=bn.current,ys(!0),d.preventDefault()),(Xt||p>=v)&&Ot.current){if(Tn.current){const de=Math.min(Ot.current.x,d.clientX),ye=Math.min(Ot.current.y,d.clientY),ut=Math.abs(d.clientX-Ot.current.x),Ze=Math.abs(d.clientY-Ot.current.y);Tn.current.style.transform=`translate(${de}px, ${ye}px)`,Tn.current.style.width=`${ut}px`,Tn.current.style.height=`${Ze}px`}const T=Date.now();if(T-xs.current<Pr)return;xs.current=T;const A=Ot.current.x,z=Ot.current.y,K=Math.min(A,d.clientX),te=Math.min(z,d.clientY),ce=Math.max(A,d.clientX),Ce=Math.max(z,d.clientY),se=(K+ce)/2,X=(te+Ce)/2,tt=new Set,Ve=[[K,te],[ce,te],[K,Ce],[ce,Ce],[se,X],[se,te],[se,Ce],[K,X],[ce,X]];for(const[de,ye]of Ve){const ut=document.elementsFromPoint(de,ye);for(const Ze of ut)Ze instanceof HTMLElement&&tt.add(Ze)}const at=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const de of at)if(de instanceof HTMLElement){const ye=de.getBoundingClientRect(),ut=ye.left+ye.width/2,Ze=ye.top+ye.height/2,wt=ut>=K&&ut<=ce&&Ze>=te&&Ze<=Ce,St=Math.min(ye.right,ce)-Math.max(ye.left,K),ht=Math.min(ye.bottom,Ce)-Math.max(ye.top,te),On=St>0&&ht>0?St*ht:0,ln=ye.width*ye.height,Jt=ln>0?On/ln:0;(wt||Jt>.5)&&tt.add(de)}const Ae=[],nt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const de of tt){if(vt(de,"[data-feedback-toolbar]")||vt(de,"[data-annotation-marker]"))continue;const ye=de.getBoundingClientRect();if(!(ye.width>window.innerWidth*.8&&ye.height>window.innerHeight*.5)&&!(ye.width<10||ye.height<10)&&ye.left<ce&&ye.right>K&&ye.top<Ce&&ye.bottom>te){const ut=de.tagName;let Ze=nt.has(ut);if(!Ze&&(ut==="DIV"||ut==="SPAN")){const wt=de.textContent&&de.textContent.trim().length>0,St=de.onclick!==null||de.getAttribute("role")==="button"||de.getAttribute("role")==="link"||de.classList.contains("clickable")||de.hasAttribute("data-clickable");(wt||St)&&!de.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ze=!0)}if(Ze){let wt=!1;for(const St of Ae)if(St.left<=ye.left&&St.right>=ye.right&&St.top<=ye.top&&St.bottom>=ye.bottom){wt=!0;break}wt||Ae.push(ye)}}}if(Dn.current){const de=Dn.current;for(;de.children.length>Ae.length;)de.removeChild(de.lastChild);Ae.forEach((ye,ut)=>{let Ze=de.children[ut];Ze||(Ze=document.createElement("div"),Ze.className=R.selectedElementHighlight,de.appendChild(Ze)),Ze.style.transform=`translate(${ye.left}px, ${ye.top}px)`,Ze.style.width=`${ye.width}px`,Ze.style.height=`${ye.height}px`})}}};return document.addEventListener("mousemove",l,{passive:!0}),()=>document.removeEventListener("mousemove",l)},[B,P,Xt,$o]),c.useEffect(()=>{if(!B)return;const l=d=>{const h=Xt,u=Ot.current;if(Xt&&u){Jn.current=!0;const p=Math.min(u.x,d.clientX),v=Math.min(u.y,d.clientY),T=Math.max(u.x,d.clientX),A=Math.max(u.y,d.clientY),z=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(se=>{if(!(se instanceof HTMLElement)||vt(se,"[data-feedback-toolbar]")||vt(se,"[data-annotation-marker]"))return;const X=se.getBoundingClientRect();X.width>window.innerWidth*.8&&X.height>window.innerHeight*.5||X.width<10||X.height<10||X.left<T&&X.right>p&&X.top<A&&X.bottom>v&&z.push({element:se,rect:X})});const te=z.filter(({element:se})=>!z.some(({element:X})=>X!==se&&se.contains(X))),ce=d.clientX/window.innerWidth*100,Ce=d.clientY+window.scrollY;if(te.length>0){const se=te.reduce((nt,{rect:de})=>({left:Math.min(nt.left,de.left),top:Math.min(nt.top,de.top),right:Math.max(nt.right,de.right),bottom:Math.max(nt.bottom,de.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),X=te.slice(0,5).map(({element:nt})=>Mn(nt).name).join(", "),tt=te.length>5?` +${te.length-5} more`:"",Ve=te[0].element,at=io(Ve),Ae=lo(Ve);ue({x:ce,y:Ce,clientY:d.clientY,element:`${te.length} elements: ${X}${tt}`,elementPath:"multi-select",boundingBox:{x:se.left,y:se.top+window.scrollY,width:se.right-se.left,height:se.bottom-se.top},isMultiSelect:!0,fullPath:co(Ve),accessibility:ao(Ve),computedStyles:Ae,computedStylesObj:at,nearbyElements:ro(Ve),cssClasses:zn(Ve),nearbyText:An(Ve),sourceFile:go(Ve)})}else{const se=Math.abs(T-p),X=Math.abs(A-v);se>20&&X>20&&ue({x:ce,y:Ce,clientY:d.clientY,element:"Area selection",elementPath:`region at (${Math.round(p)}, ${Math.round(v)})`,boundingBox:{x:p,y:v+window.scrollY,width:se,height:X},isMultiSelect:!0})}$e(null)}else h&&(Jn.current=!0);bn.current=null,Ot.current=null,ys(!1),Dn.current&&(Dn.current.innerHTML="")};return document.addEventListener("mouseup",l),()=>document.removeEventListener("mouseup",l)},[B,Xt]);const At=c.useCallback(async(l,d,h)=>{const u=Ie.webhookUrl||N;if(!u||!Ie.webhooksEnabled&&!h)return!1;try{return(await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:l,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...d})})).ok}catch(p){return console.warn("[Agentation] Webhook failed:",p),!1}},[N,Ie.webhookUrl,Ie.webhooksEnabled]),Or=c.useCallback(l=>{var h;if(!P)return;const d={id:Date.now().toString(),x:P.x,y:P.y,comment:l,element:P.element,elementPath:P.elementPath,timestamp:Date.now(),selectedText:P.selectedText,boundingBox:P.boundingBox,nearbyText:P.nearbyText,cssClasses:P.cssClasses,isMultiSelect:P.isMultiSelect,isFixed:P.isFixed,fullPath:P.fullPath,accessibility:P.accessibility,computedStyles:P.computedStyles,nearbyElements:P.nearbyElements,reactComponents:P.reactComponents,sourceFile:P.sourceFile,elementBoundingBoxes:P.elementBoundingBoxes,...f&&_t?{sessionId:_t,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};me(u=>[...u,d]),Zn.current=d.id,re(()=>{Zn.current=null},300),re(()=>{Nn(u=>new Set(u).add(d.id))},250),s==null||s(d),At("annotation.add",{annotation:d}),Gn(!0),re(()=>{ue(null),Gn(!1)},150),(h=window.getSelection())==null||h.removeAllRanges(),f&&_t&&jn(f,_t,d).then(u=>{u.id!==d.id&&(me(p=>p.map(v=>v.id===d.id?{...v,id:u.id}:v)),Nn(p=>{const v=new Set(p);return v.delete(d.id),v.add(u.id),v}))}).catch(u=>{console.warn("[Agentation] Failed to sync annotation:",u)})},[P,s,At,f,_t]),Eo=c.useCallback(()=>{Gn(!0),re(()=>{ue(null),Gn(!1)},150)},[]),No=c.useCallback(l=>{const d=W.findIndex(u=>u.id===l),h=W[d];(S==null?void 0:S.id)===l&&(xn(!0),re(()=>{Z(null),ae(null),ve([]),xn(!1)},150)),Kt(l),Kn(u=>new Set(u).add(l)),h&&(i==null||i(h),At("annotation.delete",{annotation:h})),f&&en(f,l).catch(u=>{console.warn("[Agentation] Failed to delete annotation from server:",u)}),re(()=>{me(u=>u.filter(p=>p.id!==l)),Kn(u=>{const p=new Set(u);return p.delete(l),p}),Kt(null),d<W.length-1&&(Gt(d),re(()=>Gt(null),200))},150)},[W,S,i,At,f]),oo=c.useCallback(l=>{var d;if(!l){qt(null),jt(null),ft([]);return}if(qt(l.id),(d=l.elementBoundingBoxes)!=null&&d.length){const h=[];for(const u of l.elementBoundingBoxes){const p=u.x+u.width/2,v=u.y+u.height/2-window.scrollY,A=document.elementsFromPoint(p,v).find(z=>!z.closest("[data-annotation-marker]")&&!z.closest("[data-agentation-root]"));A&&h.push(A)}ft(h),jt(null)}else if(l.boundingBox){const h=l.boundingBox,u=h.x+h.width/2,p=l.isFixed?h.y+h.height/2:h.y+h.height/2-window.scrollY,v=dn(u,p);if(v){const T=v.getBoundingClientRect(),A=T.width/h.width,z=T.height/h.height;A<.5||z<.5?jt(null):jt(v)}else jt(null);ft([])}else jt(null),ft([])},[]),Ar=c.useCallback(l=>{if(!S)return;const d={...S,comment:l};me(h=>h.map(u=>u.id===S.id?d:u)),r==null||r(d),At("annotation.update",{annotation:d}),f&&Gs(f,S.id,{comment:l}).catch(h=>{console.warn("[Agentation] Failed to update annotation on server:",h)}),xn(!0),re(()=>{Z(null),ae(null),ve([]),xn(!1)},150)},[S,r,At,f]),zr=c.useCallback(()=>{xn(!0),re(()=>{Z(null),ae(null),ve([]),xn(!1)},150)},[]),rn=c.useCallback(()=>{const l=W.length,d=Y.length>0||!!F;if(l===0&&Lt.length===0&&!d)return;if(_==null||_(W),At("annotations.clear",{annotations:W}),f){Promise.all(W.map(p=>en(f,p.id).catch(v=>{console.warn("[Agentation] Failed to delete annotation from server:",v)})));for(const[,p]of Ln.current)p&&en(f,p).catch(()=>{});Ln.current.clear();for(const[,p]of Rn.current)p&&en(f,p).catch(()=>{});Rn.current.clear()}Rt(!0),Mt(!0),$r([]);const h=jo.current;if(h){const p=h.getContext("2d");p&&p.clearRect(0,0,h.width,h.height)}(Y.length>0||F)&&(vo(p=>p+1),rs(p=>p+1),re(()=>{Te([]),It(null)},200)),oe&&Oe(!1),et&&Et(""),tn.current={rearrange:null,placements:[]},ho(le);const u=l*30+200;re(()=>{me([]),Nn(new Set),localStorage.removeItem(xo(le)),Rt(!1)},u),re(()=>Mt(!1),1500)},[le,W,Lt,Y,F,oe,et,_,At,f]),Bo=c.useCallback(async()=>{const l=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le,d=Q&&oe;let h;if(d){if(Y.length===0&&!F&&!et)return;h=""}else{if(h=er(W,l,Ie.outputDetail),!h&&Lt.length===0&&Y.length===0&&!F)return;h||(h=`## Page Feedback: ${l}
`)}if(!d&&Lt.length>0){const u=new Set;for(const A of W)A.drawingIndex!=null&&u.add(A.drawingIndex);const p=jo.current;p&&(p.style.visibility="hidden");const v=[],T=window.scrollY;for(let A=0;A<Lt.length;A++){if(u.has(A))continue;const z=Lt[A];if(z.points.length<2)continue;const K=z.fixed?z.points:z.points.map(ct=>({x:ct.x,y:ct.y-T}));let te=1/0,ce=1/0,Ce=-1/0,se=-1/0;for(const ct of K)te=Math.min(te,ct.x),ce=Math.min(ce,ct.y),Ce=Math.max(Ce,ct.x),se=Math.max(se,ct.y);const X=Ce-te,tt=se-ce,Ve=Math.hypot(X,tt),at=K[0],Ae=K[K.length-1],nt=Math.hypot(Ae.x-at.x,Ae.y-at.y);let de;const ye=nt<Ve*.35,ut=X/Math.max(tt,1);if(ye&&Ve>20){const ct=Math.max(X,tt)*.15;let Zt=0;for(const an of K){const Yr=an.x-te<ct,Xr=Ce-an.x<ct,Ur=an.y-ce<ct,Qr=se-an.y<ct;(Yr||Xr)&&(Ur||Qr)&&Zt++}de=Zt>K.length*.15?"box":"circle"}else ut>3&&tt<40?de="underline":nt>Ve*.5?de="arrow":de="drawing";const Ze=Math.min(10,K.length),wt=Math.max(1,Math.floor(K.length/Ze)),St=new Set,ht=[],On=[at];for(let ct=wt;ct<K.length-1;ct+=wt)On.push(K[ct]);On.push(Ae);for(const ct of On){const Zt=dn(ct.x,ct.y);if(!Zt||St.has(Zt)||vt(Zt,"[data-feedback-toolbar]"))continue;St.add(Zt);const{name:an}=Mn(Zt);ht.includes(an)||ht.push(an)}const ln=`${Math.round(te)},${Math.round(ce)} → ${Math.round(Ce)},${Math.round(se)}`;let Jt;(de==="circle"||de==="box")&&ht.length>0?Jt=`${de==="box"?"Boxed":"Circled"} **${ht[0]}**${ht.length>1?` (and ${ht.slice(1).join(", ")})`:""} (region: ${ln})`:de==="underline"&&ht.length>0?Jt=`Underlined **${ht[0]}** (${ln})`:de==="arrow"&&ht.length>=2?Jt=`Arrow from **${ht[0]}** to **${ht[ht.length-1]}** (${Math.round(at.x)},${Math.round(at.y)} → ${Math.round(Ae.x)},${Math.round(Ae.y)})`:ht.length>0?Jt=`${de==="arrow"?"Arrow":"Drawing"} near **${ht.join("**, **")}** (region: ${ln})`:Jt=`Drawing at ${ln}`,v.push(Jt)}p&&(p.style.visibility=""),v.length>0&&(h+=`
**Drawings:**
`,v.forEach((A,z)=>{h+=`${z+1}. ${A}
`}))}if((Y.length>0||d&&et)&&(h+=`
`+Qs(Y,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:oe,wireframePurpose:et||void 0},Ie.outputDetail)),F){const u=qs(F,Ie.outputDetail,{width:window.innerWidth,height:window.innerHeight});u&&(h+=`
`+u)}if(E)try{await navigator.clipboard.writeText(h)}catch{}y==null||y(h),Ke(!0),re(()=>Ke(!1),2e3),Ie.autoClearAfterCopy&&re(()=>rn(),500)},[W,Lt,Y,F,oe,Q,Yt,et,le,Ie.outputDetail,nn,Ie.autoClearAfterCopy,rn,E,y]),To=c.useCallback(async()=>{const l=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:le;let d=er(W,l,Ie.outputDetail);if(!d&&Y.length===0&&!F)return;if(d||(d=`## Page Feedback: ${l}
`),Y.length>0&&(d+=`
`+Qs(Y,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:oe,wireframePurpose:et||void 0},Ie.outputDetail)),F){const u=qs(F,Ie.outputDetail,{width:window.innerWidth,height:window.innerHeight});u&&(d+=`
`+u)}m&&m(d,W),mt("sending"),await new Promise(u=>re(u,150));const h=await At("submit",{output:d,annotations:W},!0);mt(h?"sent":"failed"),re(()=>mt("idle"),2500),h&&Ie.autoClearAfterCopy&&re(()=>rn(),500)},[m,At,W,Y,F,oe,Yt,le,Ie.outputDetail,nn,Ie.autoClearAfterCopy,rn]);c.useEffect(()=>{if(!yn)return;const l=10,d=u=>{const p=u.clientX-yn.x,v=u.clientY-yn.y,T=Math.sqrt(p*p+v*v);if(!sn&&T>l&&ms(!0),sn||T>l){let A=yn.toolbarX+p,z=yn.toolbarY+v;const K=20,te=337,ce=44,se=te-(B?Tt==="connected"?297:257:44),X=K-se,tt=window.innerWidth-K-te;A=Math.max(X,Math.min(tt,A)),z=Math.max(K,Math.min(window.innerHeight-ce-K,z)),So({x:A,y:z})}},h=()=>{sn&&(Mo.current=!0),ms(!1),ps(null)};return document.addEventListener("mousemove",d),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)}},[yn,sn,B,Tt]);const Fr=c.useCallback(l=>{if(l.target.closest("button")||l.target.closest("[data-agentation-settings-panel]"))return;const d=l.currentTarget.parentElement;if(!d)return;const h=d.getBoundingClientRect(),u=(Qe==null?void 0:Qe.x)??h.left,p=(Qe==null?void 0:Qe.y)??h.top;ps({x:l.clientX,y:l.clientY,toolbarX:u,toolbarY:p})},[Qe]);if(c.useEffect(()=>{if(!Qe)return;const l=()=>{let p=Qe.x,v=Qe.y;const z=20-(337-(B?Tt==="connected"?297:257:44)),K=window.innerWidth-20-337;p=Math.max(z,Math.min(K,p)),v=Math.max(20,Math.min(window.innerHeight-44-20,v)),(p!==Qe.x||v!==Qe.y)&&So({x:p,y:v})};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[Qe,B,Tt]),c.useEffect(()=>{const l=d=>{const h=d.target,u=h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.isContentEditable;if(d.key==="Escape"){if(Q){je?we(null):eo();return}if(Bt){ko(!1);return}if(lt.length>0){fn([]);return}P||B&&(xt(),U(!1))}if((d.metaKey||d.ctrlKey)&&d.shiftKey&&(d.key==="f"||d.key==="F")){d.preventDefault(),xt(),B?js():U(!0);return}if(!(u||d.metaKey||d.ctrlKey)&&((d.key==="p"||d.key==="P")&&(d.preventDefault(),xt(),Ro()),(d.key==="l"||d.key==="L")&&(d.preventDefault(),xt(),Bt&&ko(!1),L&&G(!1),P&&Eo(),Q?eo():Be(!0)),(d.key==="h"||d.key==="H")&&W.length>0&&(d.preventDefault(),xt(),I(p=>!p)),(d.key==="c"||d.key==="C")&&(W.length>0||Y.length>0||F)&&(d.preventDefault(),xt(),Bo()),(d.key==="x"||d.key==="X")&&(W.length>0||Y.length>0||F)&&(d.preventDefault(),xt(),rn(),Y.length>0&&Te([]),F&&It(null)),d.key==="s"||d.key==="S")){const p=zt(Ie.webhookUrl)||zt(N||"");W.length>0&&p&&gt==="idle"&&(d.preventDefault(),xt(),To())}};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[B,Bt,Q,je,Y,F,P,W.length,Ie.webhookUrl,N,gt,To,Ro,Bo,rn,lt]),!ee||ne)return null;const Wn=W.length>0,vn=W.filter(l=>!fs.has(l.id)&&l.kind!=="placement"&&l.kind!=="rearrange"),Hr=vn.length>0,Ms=W.filter(l=>fs.has(l.id)),$s=l=>{const v=l.x/100*window.innerWidth,T=typeof l.y=="string"?parseFloat(l.y):l.y,A={};window.innerHeight-T-22-10<80&&(A.top="auto",A.bottom="calc(100% + 10px)");const K=v-200/2,te=10;if(K<te){const ce=te-K;A.left=`calc(50% + ${ce}px)`}else if(K+200>window.innerWidth-te){const ce=K+200-(window.innerWidth-te);A.left=`calc(50% - ${ce}px)`}return A};return ir.createPortal(e.jsxs("div",{ref:Le,style:{display:"contents"},"data-agentation-theme":Wt?"dark":"light","data-agentation-accent":Ie.annotationColorId,"data-agentation-root":"",children:[e.jsx("div",{className:`${R.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Qe?{left:Qe.x,top:Qe.y,right:"auto",bottom:"auto"}:void 0,children:e.jsxs("div",{className:`${R.toolbarContainer} ${B?R.expanded:R.collapsed} ${_s?R.entrance:""} ${O?R.hiding:""} ${!Ie.webhooksEnabled&&(zt(Ie.webhookUrl)||zt(N||""))?R.serverConnected:""}`,onClick:B?void 0:l=>{if(Mo.current){Mo.current=!1,l.preventDefault();return}U(!0)},onMouseDown:Fr,role:B?void 0:"button",tabIndex:B?-1:0,title:B?void 0:"Start feedback mode",children:[e.jsxs("div",{className:`${R.toggleContent} ${B?R.hidden:R.visible}`,children:[e.jsx(ei,{size:24}),Hr&&e.jsx("span",{className:`${R.badge} ${B?R.fadeOut:""} ${_s?R.entrance:""}`,children:vn.length})]}),e.jsxs("div",{className:`${R.controlsContent} ${B?R.visible:R.hidden} ${Qe&&Qe.y<100?R.tooltipBelow:""} ${Ne||L?R.tooltipsHidden:""} ${as?R.tooltipsInSession:""}`,onMouseEnter:Rr,onMouseLeave:Er,children:[e.jsxs("div",{className:`${R.buttonWrapper} ${Qe&&Qe.x<120?R.buttonWrapperAlignLeft:""}`,children:[e.jsx("button",{className:R.controlButton,onClick:l=>{l.stopPropagation(),xt(),Ro()},"data-active":x,children:e.jsx(ri,{size:24,isPaused:x})}),e.jsxs("span",{className:R.buttonTooltip,children:[x?"Resume animations":"Pause animations",e.jsx("span",{className:R.shortcut,children:"P"})]})]}),e.jsxs("div",{className:R.buttonWrapper,children:[e.jsx("button",{className:`${R.controlButton} ${Wt?"":R.light}`,onClick:l=>{l.stopPropagation(),xt(),Bt&&ko(!1),L&&G(!1),P&&Eo(),Q?eo():Be(!0)},"data-active":Q,style:Q&&oe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:e.jsx(mi,{size:21})}),e.jsxs("span",{className:R.buttonTooltip,children:[Q?"Exit layout mode":"Layout mode",e.jsx("span",{className:R.shortcut,children:"L"})]})]}),e.jsxs("div",{className:R.buttonWrapper,children:[e.jsx("button",{className:R.controlButton,onClick:l=>{l.stopPropagation(),xt(),I(!De)},disabled:!Wn||Q,children:e.jsx(si,{size:24,isOpen:De})}),e.jsxs("span",{className:R.buttonTooltip,children:[De?"Hide markers":"Show markers",e.jsx("span",{className:R.shortcut,children:"H"})]})]}),e.jsxs("div",{className:R.buttonWrapper,children:[e.jsx("button",{className:`${R.controlButton} ${Pe?R.statusShowing:""}`,onClick:l=>{l.stopPropagation(),xt(),Bo()},disabled:Q&&oe?Y.length===0&&!((Is=F==null?void 0:F.sections)!=null&&Is.length):!Wn&&Lt.length===0&&Y.length===0&&!((Ls=F==null?void 0:F.sections)!=null&&Ls.length),"data-active":Pe,children:e.jsx(ni,{size:24,copied:Pe,tint:Q&&oe&&(Y.length>0||(Rs=F==null?void 0:F.sections)!=null&&Rs.length)?"#f97316":void 0})}),e.jsxs("span",{className:R.buttonTooltip,children:[Q&&oe?"Copy layout":"Copy feedback",e.jsx("span",{className:R.shortcut,children:"C"})]})]}),e.jsxs("div",{className:`${R.buttonWrapper} ${R.sendButtonWrapper} ${B&&!Ie.webhooksEnabled&&(zt(Ie.webhookUrl)||zt(N||""))?R.sendButtonVisible:""}`,children:[e.jsxs("button",{className:`${R.controlButton} ${gt==="sent"||gt==="failed"?R.statusShowing:""}`,onClick:l=>{l.stopPropagation(),xt(),To()},disabled:!Wn||!zt(Ie.webhookUrl)&&!zt(N||"")||gt==="sending","data-no-hover":gt==="sent"||gt==="failed",tabIndex:zt(Ie.webhookUrl)||zt(N||"")?0:-1,children:[e.jsx(oi,{size:24,state:gt}),Wn&&gt==="idle"&&e.jsx("span",{className:R.buttonBadge,children:W.length})]}),e.jsxs("span",{className:R.buttonTooltip,children:["Send Annotations",e.jsx("span",{className:R.shortcut,children:"S"})]})]}),e.jsxs("div",{className:R.buttonWrapper,children:[e.jsx("button",{className:R.controlButton,onClick:l=>{l.stopPropagation(),xt(),rn()},disabled:!Wn&&Lt.length===0&&Y.length===0&&!((Es=F==null?void 0:F.sections)!=null&&Es.length),"data-danger":!0,children:e.jsx(li,{size:24})}),e.jsxs("span",{className:R.buttonTooltip,children:["Clear all",e.jsx("span",{className:R.shortcut,children:"X"})]})]}),e.jsxs("div",{className:R.buttonWrapper,children:[e.jsx("button",{className:R.controlButton,onClick:l=>{l.stopPropagation(),xt(),Q&&eo(),G(!L)},children:e.jsx(ii,{size:24})}),f&&Tt!=="disconnected"&&e.jsx("span",{className:`${R.mcpIndicator} ${R[Tt]} ${L?R.hidden:""}`,title:Tt==="connected"?"MCP Connected":"MCP Connecting..."}),e.jsx("span",{className:R.buttonTooltip,children:"Settings"})]}),e.jsx("div",{className:R.divider}),e.jsxs("div",{className:`${R.buttonWrapper} ${Qe&&typeof window<"u"&&Qe.x>window.innerWidth-120?R.buttonWrapperAlignRight:""}`,children:[e.jsx("button",{className:R.controlButton,onClick:l=>{l.stopPropagation(),xt(),js()},children:e.jsx(ai,{size:24})}),e.jsxs("span",{className:R.buttonTooltip,children:["Exit",e.jsx("span",{className:R.shortcut,children:"Esc"})]})]})]}),e.jsx(Hl,{visible:Q&&B,activeType:je,onSelect:l=>{we(je===l?null:l)},isDarkMode:Wt,sectionCount:(F==null?void 0:F.sections.length)??0,onDetectSections:()=>{const l=ea(),d=(F==null?void 0:F.sections)??[],h=new Set(d.map(T=>T.selector)),u=l.filter(T=>!h.has(T.selector)),p=[...d,...u],v=[...(F==null?void 0:F.originalOrder)??[],...u.map(T=>T.id)];It({sections:p,originalOrder:v,detectedAt:Date.now()})},placementCount:Y.length,onClearPlacements:()=>{vo(l=>l+1),rs(l=>l+1),re(()=>{It({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:oe,onBlankCanvasChange:l=>{const d={sections:[],originalOrder:[],detectedAt:Date.now()};l?(wo.current={rearrange:F,placements:Y},It(tn.current.rearrange||d),Te(tn.current.placements),we(null)):(tn.current={rearrange:F,placements:Y},It(wo.current.rearrange||d),Te(wo.current.placements)),Oe(l)},wireframePurpose:et,onWireframePurposeChange:Et,Tooltip:un,onDragStart:(l,d)=>{d.preventDefault();const h=H[l];let u=null,p=!1;const v=d.clientX,T=d.clientY,A=d.target.closest("[data-feedback-toolbar]"),z=(A==null?void 0:A.getBoundingClientRect().top)??window.innerHeight,K=ce=>{const Ce=ce.clientX-v,se=ce.clientY-T;if(!p&&(Math.abs(Ce)>4||Math.abs(se)>4)&&(p=!0,u=document.createElement("div"),u.className=`${C.dragPreview}${oe?` ${C.dragPreviewWireframe}`:""}`,document.body.appendChild(u)),!u)return;const X=Math.max(0,z-ce.clientY),tt=Math.min(1,X/180),Ve=1-Math.pow(1-tt,2),at=28,Ae=20,nt=Math.min(140,h.width*.18),de=Math.min(90,h.height*.18),ye=at+(nt-at)*Ve,ut=Ae+(de-Ae)*Ve;u.style.width=`${ye}px`,u.style.height=`${ut}px`,u.style.left=`${ce.clientX-ye/2}px`,u.style.top=`${ce.clientY-ut/2}px`,u.style.opacity=`${.5+.5*Ve}`,u.textContent=Ve>.25?l:""},te=ce=>{if(window.removeEventListener("mousemove",K),window.removeEventListener("mouseup",te),u&&document.body.removeChild(u),p){const Ce=h.width,se=h.height,X=window.scrollY,tt=Math.max(0,ce.clientX-Ce/2),Ve=Math.max(0,ce.clientY+X-se/2),at={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:l,x:tt,y:Ve,width:Ce,height:se,scrollY:X,timestamp:Date.now()};Te(Ae=>[...Ae,at]),we(null),In.current=new Set,ss(Ae=>Ae+1)}};window.addEventListener("mousemove",K),window.addEventListener("mouseup",te)}}),e.jsx(cc,{settings:Ie,onSettingsChange:l=>Nr(d=>({...d,...l})),isDarkMode:Wt,onToggleTheme:Br,isDevMode:Tr,connectionStatus:Tt,endpoint:f,isVisible:V,toolbarNearBottom:!!Qe&&Qe.y<230,settingsPage:Me,onSettingsPageChange:fe,onHideToolbar:Wr})]})}),(Q||Fe)&&e.jsx("div",{className:`${C.blankCanvas} ${dt?C.visible:""} ${$t?C.gridActive:""}`,style:{"--canvas-opacity":yt},"data-feedback-toolbar":!0}),Q&&oe&&dt&&e.jsxs("div",{className:C.wireframeNotice,"data-feedback-toolbar":!0,children:[e.jsxs("div",{className:C.wireframeOpacityRow,children:[e.jsx("span",{className:C.wireframeOpacityLabel,children:"Toggle Opacity"}),e.jsx("input",{type:"range",className:C.wireframeOpacitySlider,min:0,max:1,step:.01,value:yt,onChange:l=>mn(Number(l.target.value))})]}),e.jsxs("div",{className:C.wireframeNoticeTitleRow,children:[e.jsx("span",{className:C.wireframeNoticeTitle,children:"Wireframe Mode"}),e.jsx("span",{className:C.wireframeNoticeDivider}),e.jsx("button",{className:C.wireframeStartOver,onClick:()=>{vo(l=>l+1),It({sections:[],originalOrder:[],detectedAt:Date.now()}),tn.current={rearrange:null,placements:[]},Et(""),ho(le)},children:"Start Over"})]}),"Drag components onto the canvas.",e.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Q||Fe)&&e.jsx(Wl,{placements:Y,onChange:Te,activeComponent:Fe?null:je,onActiveComponentChange:we,isDarkMode:Wt,exiting:Fe,onInteractionChange:pn,passthrough:!je,extraSnapRects:F==null?void 0:F.sections.map(l=>l.currentRect),deselectSignal:kr,clearSignal:Sr,wireframe:oe,onSelectionChange:(l,d)=>{In.current=l,d||(qn.current=new Set,Cr(h=>h+1))},onDragMove:(l,d)=>{const h=qn.current;if(!(!h.size||!F)){if(!Nt.current){Nt.current=new Map;for(const u of F.sections)h.has(u.id)&&Nt.current.set(u.id,{x:u.currentRect.x,y:u.currentRect.y})}for(const u of F.sections){if(!h.has(u.id)||!Nt.current.get(u.id))continue;const v=document.querySelector(`[data-rearrange-section="${u.id}"]`);v&&(v.style.transform=`translate(${l}px, ${d}px)`)}}},onDragEnd:(l,d,h)=>{const u=qn.current,p=Nt.current;if(Nt.current=null,!(!u.size||!F||!p)){for(const v of u){const T=document.querySelector(`[data-rearrange-section="${v}"]`);T&&(T.style.transform="")}h&&It(v=>v&&{...v,sections:v.sections.map(T=>{const A=p.get(T.id);return A?{...T,currentRect:{...T.currentRect,x:Math.max(0,A.x+l),y:Math.max(0,A.y+d)}}:T})})}}}),(Q||Fe)&&F&&e.jsx(oa,{rearrangeState:F,onChange:It,isDarkMode:Wt,exiting:Fe,blankCanvas:oe,extraSnapRects:Y.map(l=>({x:l.x,y:l.y,width:l.width,height:l.height})),clearSignal:Mr,deselectSignal:jr,onSelectionChange:(l,d)=>{qn.current=l,d||(In.current=new Set,ss(h=>h+1))},onDragMove:(l,d)=>{const h=In.current;if(h.size){if(!Nt.current){Nt.current=new Map;for(const u of Y)h.has(u.id)&&Nt.current.set(u.id,{x:u.x,y:u.y})}for(const u of h){const p=document.querySelector(`[data-design-placement="${u}"]`);p&&(p.style.transform=`translate(${l}px, ${d}px)`)}}},onDragEnd:(l,d,h)=>{const u=In.current,p=Nt.current;if(Nt.current=null,!(!u.size||!p)){for(const v of u){const T=document.querySelector(`[data-design-placement="${v}"]`);T&&(T.style.transform="")}h&&Te(v=>v.map(T=>{const A=p.get(T.id);return A?{...T,x:Math.max(0,A.x+l),y:Math.max(0,A.y+d)}:T}))}}}),e.jsx("canvas",{ref:jo,className:`${R.drawCanvas} ${Bt?R.active:""}`,style:{opacity:Io?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),e.jsxs("div",{className:R.markersLayer,"data-feedback-toolbar":!0,children:[xe&&vn.filter(l=>!l.isFixed).map((l,d,h)=>e.jsx(tr,{annotation:l,globalIndex:vn.findIndex(u=>u.id===l.id),layerIndex:d,layerSize:h.length,isExiting:ze,isClearing:Qt,isAnimated:gs.has(l.id),isHovered:!ze&&Ft===l.id,isDeleting:pt===l.id,isEditingAny:!!S,renumberFrom:Ht,markerClickBehavior:Ie.markerClickBehavior,tooltipStyle:$s(l),onHoverEnter:u=>!ze&&u.id!==Zn.current&&oo(u),onHoverLeave:()=>oo(null),onClick:u=>Ie.markerClickBehavior==="delete"?No(u.id):no(u),onContextMenu:no},l.id)),xe&&!ze&&Ms.filter(l=>!l.isFixed).map(l=>e.jsx(nr,{annotation:l},l.id))]}),e.jsxs("div",{className:R.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[xe&&vn.filter(l=>l.isFixed).map((l,d,h)=>e.jsx(tr,{annotation:l,globalIndex:vn.findIndex(u=>u.id===l.id),layerIndex:d,layerSize:h.length,isExiting:ze,isClearing:Qt,isAnimated:gs.has(l.id),isHovered:!ze&&Ft===l.id,isDeleting:pt===l.id,isEditingAny:!!S,renumberFrom:Ht,markerClickBehavior:Ie.markerClickBehavior,tooltipStyle:$s(l),onHoverEnter:u=>!ze&&u.id!==Zn.current&&oo(u),onHoverLeave:()=>oo(null),onClick:u=>Ie.markerClickBehavior==="delete"?No(u.id):no(u),onContextMenu:no},l.id)),xe&&!ze&&Ms.filter(l=>l.isFixed).map(l=>e.jsx(nr,{annotation:l,fixed:!0},l.id))]}),B&&e.jsxs("div",{className:R.overlay,"data-feedback-toolbar":!0,style:P||S?{zIndex:99999}:void 0,children:[(pe==null?void 0:pe.rect)&&!P&&!We&&!Xt&&e.jsx("div",{className:`${R.hoverHighlight} ${R.enter}`,style:{left:pe.rect.left,top:pe.rect.top,width:pe.rect.width,height:pe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),lt.filter(l=>document.contains(l.element)).map((l,d)=>{const h=l.element.getBoundingClientRect(),u=lt.length>1;return e.jsx("div",{className:u?R.multiSelectOutline:R.singleSelectOutline,style:{position:"fixed",left:h.left,top:h.top,width:h.width,height:h.height,...u?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},d)}),Ft&&!P&&(()=>{var p;const l=W.find(v=>v.id===Ft);if(!(l!=null&&l.boundingBox))return null;if((p=l.elementBoundingBoxes)!=null&&p.length)return Ge.length>0?Ge.filter(v=>document.contains(v)).map((v,T)=>{const A=v.getBoundingClientRect();return e.jsx("div",{className:`${R.multiSelectOutline} ${R.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`hover-outline-live-${T}`)}):l.elementBoundingBoxes.map((v,T)=>e.jsx("div",{className:`${R.multiSelectOutline} ${R.enter}`,style:{left:v.x,top:v.y-Ee,width:v.width,height:v.height}},`hover-outline-${T}`));const d=Vt&&document.contains(Vt)?Vt.getBoundingClientRect():null,h=d?{x:d.left,y:d.top,width:d.width,height:d.height}:{x:l.boundingBox.x,y:l.isFixed?l.boundingBox.y:l.boundingBox.y-Ee,width:l.boundingBox.width,height:l.boundingBox.height},u=l.isMultiSelect;return e.jsx("div",{className:`${u?R.multiSelectOutline:R.singleSelectOutline} ${R.enter}`,style:{left:h.x,top:h.y,width:h.width,height:h.height,...u?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),pe&&!P&&!We&&!Xt&&e.jsxs("div",{className:`${R.hoverTooltip} ${R.enter}`,style:{left:Math.max(8,Math.min(J.x,window.innerWidth-100)),top:Math.max(J.y-(pe.reactComponents?48:32),8)},children:[pe.reactComponents&&e.jsx("div",{className:R.hoverReactPath,children:pe.reactComponents}),e.jsx("div",{className:R.hoverElementName,children:pe.elementName})]}),P&&e.jsxs(e.Fragment,{children:[(Ns=P.multiSelectElements)!=null&&Ns.length?P.multiSelectElements.filter(l=>document.contains(l)).map((l,d)=>{const h=l.getBoundingClientRect();return e.jsx("div",{className:`${R.multiSelectOutline} ${Bn?R.exit:R.enter}`,style:{left:h.left,top:h.top,width:h.width,height:h.height}},`pending-multi-${d}`)}):P.targetElement&&document.contains(P.targetElement)?(()=>{const l=P.targetElement.getBoundingClientRect();return e.jsx("div",{className:`${R.singleSelectOutline} ${Bn?R.exit:R.enter}`,style:{left:l.left,top:l.top,width:l.width,height:l.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():P.boundingBox&&e.jsx("div",{className:`${P.isMultiSelect?R.multiSelectOutline:R.singleSelectOutline} ${Bn?R.exit:R.enter}`,style:{left:P.boundingBox.x,top:P.boundingBox.y-Ee,width:P.boundingBox.width,height:P.boundingBox.height,...P.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const l=P.x,d=P.isFixed?P.y:P.y-Ee;return e.jsxs(e.Fragment,{children:[e.jsx(Za,{x:l,y:d,isMultiSelect:P.isMultiSelect,isExiting:Bn}),e.jsx(fo,{ref:ws,element:P.element,selectedText:P.selectedText,computedStyles:P.computedStylesObj,placeholder:P.element==="Area selection"?"What should change in this area?":P.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Or,onCancel:Eo,isExiting:Bn,lightMode:!Wt,accentColor:P.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,l/100*window.innerWidth)),...d>window.innerHeight-290?{bottom:window.innerHeight-d+20}:{top:d+20}}})]})})()]}),S&&e.jsxs(e.Fragment,{children:[(Bs=S.elementBoundingBoxes)!=null&&Bs.length?Re.length>0?Re.filter(l=>document.contains(l)).map((l,d)=>{const h=l.getBoundingClientRect();return e.jsx("div",{className:`${R.multiSelectOutline} ${R.enter}`,style:{left:h.left,top:h.top,width:h.width,height:h.height}},`edit-multi-live-${d}`)}):S.elementBoundingBoxes.map((l,d)=>e.jsx("div",{className:`${R.multiSelectOutline} ${R.enter}`,style:{left:l.x,top:l.y-Ee,width:l.width,height:l.height}},`edit-multi-${d}`)):(()=>{const l=ge&&document.contains(ge)?ge.getBoundingClientRect():null,d=l?{x:l.left,y:l.top,width:l.width,height:l.height}:S.boundingBox?{x:S.boundingBox.x,y:S.isFixed?S.boundingBox.y:S.boundingBox.y-Ee,width:S.boundingBox.width,height:S.boundingBox.height}:null;return d?e.jsx("div",{className:`${S.isMultiSelect?R.multiSelectOutline:R.singleSelectOutline} ${R.enter}`,style:{left:d.x,top:d.y,width:d.width,height:d.height,...S.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),e.jsx(fo,{ref:vs,element:S.element,selectedText:S.selectedText,computedStyles:Kl(S.computedStyles),placeholder:"Edit your feedback...",initialValue:S.comment,submitLabel:"Save",onSubmit:Ar,onCancel:zr,onDelete:()=>No(S.id),isExiting:Dr,lightMode:!Wt,accentColor:S.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const l=S.isFixed?S.y:S.y-Ee;return{left:Math.max(160,Math.min(window.innerWidth-160,S.x/100*window.innerWidth)),...l>window.innerHeight-290?{bottom:window.innerHeight-l+20}:{top:l+20}}})()})]}),Xt&&e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:Tn,className:R.dragSelection}),e.jsx("div",{ref:Dn,className:R.highlightsContainer})]})]})]}),document.body)}export{hc as Agentation,fo as AnnotationPopupCSS,hi as IconChevronLeft,ni as IconCopyAnimated,_i as IconEdit,si as IconEyeAnimated,ii as IconGear,ti as IconHelp,mi as IconLayout,ei as IconListSparkle,di as IconMoon,ri as IconPausePlayAnimated,Zr as IconPlus,oi as IconSendArrow,ci as IconSun,ui as IconTrash,li as IconTrashAlt,lr as IconXmark,ai as IconXmarkLarge,hc as PageFeedbackToolbarCSS,vt as closestCrossingShadow,zn as getElementClasses,Yl as getElementPath,An as getNearbyText,xo as getStorageKey,Mn as identifyElement,Oo as loadAnnotations,br as saveAnnotations};
