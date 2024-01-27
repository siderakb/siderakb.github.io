"use strict";(self.webpackChunksiderakb_website=self.webpackChunksiderakb_website||[]).push([[890],{5420:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>B,contentTitle:()=>T,default:()=>E,frontMatter:()=>S,metadata:()=>R,toc:()=>M});var s=t(5893),n=t(1151),i=t(7294),l=t(6010),d=t(2466),c=t(6550),h=t(469),a=t(1980),o=t(7392),x=t(12);function j(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:t}=e;return(0,i.useMemo)((()=>{const e=r??function(e){return j(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,c.k6)(),n=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,a._X)(n),(0,i.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(s.location.search);r.set(n,e),s.replace({...s.location,search:r.toString()})}),[n,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,n=u(e),[l,d]=(0,i.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:n}))),[c,a]=m({queryString:t,groupId:s}),[o,j]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,n]=(0,x.Nk)(t);return[s,(0,i.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:s}),f=(()=>{const e=c??o;return p({value:e,tabValues:n})?e:null})();(0,h.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);d(e),a(e),j(e)}),[a,j,n]),tabValues:n}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:r,block:t,selectedValue:n,selectValue:i,tabValues:c}=e;const h=[],{blockElementScrollPositionUntilNextRender:a}=(0,d.o5)(),o=e=>{const r=e.currentTarget,t=h.indexOf(r),s=c[t].value;s!==n&&(a(r),i(s))},x=e=>{let r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;r=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;r=h[t]??h[h.length-1];break}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},r),children:c.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>h.push(e),onKeyDown:x,onClick:o,...i,className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,i.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function C(e){const r=f(e);return(0,s.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,s.jsx)(y,{...e,...r}),(0,s.jsx)(v,{...e,...r})]})}function w(e){const r=(0,b.Z)();return(0,s.jsx)(C,{...e,children:j(e.children)},String(r))}const P={tabItem:"tabItem_Ymn6"};function k(e){let{children:r,hidden:t,className:n}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(P.tabItem,n),hidden:t,children:r})}const S={sidebar_position:1},T="ErgoSNM Rev 2.x",R={id:"ergosnm/rev2",title:"ErgoSNM Rev 2.x",description:"This document for the Rev 2.x of the ErgoSNM keyboard, the latest is Rev 2.1. Source files: GitHub.",source:"@site/docs/ergosnm/rev2.md",sourceDirName:"ergosnm",slug:"/ergosnm/rev2",permalink:"/docs/ergosnm/rev2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"keyboardSidebar",previous:{title:"ErgoSNM",permalink:"/docs/ergosnm/intro"},next:{title:"ErgoSNM Rev 1.x",permalink:"/docs/ergosnm/rev1"}},B={},M=[{value:"Features",id:"features",level:2},{value:"Parts List",id:"parts-list",level:2},{value:"PCB and Electronic Parts",id:"pcb-and-electronic-parts",level:3},{value:"Main PCBs",id:"main-pcbs",level:4},{value:"Thumb Cluster",id:"thumb-cluster",level:4},{value:"Trackball Board",id:"trackball-board",level:4},{value:"Build Guide",id:"build-guide",level:2},{value:"Prepare Parts",id:"prepare-parts",level:3},{value:"Solder",id:"solder",level:3},{value:"Flash Firmware",id:"flash-firmware",level:3},{value:"Test",id:"test",level:3},{value:"Assemble",id:"assemble",level:3},{value:"Edit Keymap",id:"edit-keymap",level:3},{value:"Complete",id:"complete",level:3}];function F(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"ergosnm-rev-2x",children:"ErgoSNM Rev 2.x"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/tddlJ7A.jpg",alt:""})}),"\n",(0,s.jsxs)(r.p,{children:["This document for the ",(0,s.jsx)(r.code,{children:"Rev 2.x"})," of the ErgoSNM keyboard, the latest is ",(0,s.jsx)(r.a,{href:"https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0",children:(0,s.jsx)(r.code,{children:"Rev 2.1"})}),". Source files: ",(0,s.jsx)(r.a,{href:"https://github.com/siderakb/ergo-snm-keyboard",children:"GitHub"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["My blog post: ",(0,s.jsx)(r.a,{href:"https://ziteh.github.io/posts/ergosnm-v2-1-intro/",children:"ErgoSNM\u2014\u2014\u6709\u8ecc\u8de1\u7403\u7684\u5206\u96e2\u5f0f\u4eba\u9ad4\u5de5\u5b78QMK\u9375\u76e4 (v2.1)"})]}),"\n",(0,s.jsx)(r.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"64 keys in total, left half (with thumb cluster) 29+6 keys, right half (with trackball) 29 keys."}),"\n",(0,s.jsxs)(r.li,{children:["Trackball for mouse cursor and scroll, powered by ",(0,s.jsx)(r.a,{href:"https://www.pixart.com/products-detail/10/PMW3360DM-T2QU",children:"PMW3360"})," optical mouse sensor."]}),"\n",(0,s.jsx)(r.li,{children:"USB Type-C receptacle connector, with ESD protection adn resettable fuse."}),"\n",(0,s.jsx)(r.li,{children:"Support Cherry MX style key switches and hot-swap sockets."}),"\n",(0,s.jsx)(r.li,{children:"Column-staggered layout."}),"\n",(0,s.jsx)(r.li,{children:"Top mount."}),"\n",(0,s.jsxs)(r.li,{children:["Support ",(0,s.jsx)(r.a,{href:"https://get.vial.today/",children:"Vial"}),", edit keymap and configuring keyboard in real time."]}),"\n",(0,s.jsxs)(r.li,{children:["Uses the ",(0,s.jsx)(r.a,{href:"https://www.raspberrypi.com/products/rp2040/",children:"RP2040"})," ARM Cortex-M0+ MCU, with 16MB (128Mb) external flash."]}),"\n",(0,s.jsx)(r.li,{children:"One user configurable monochrome LED."}),"\n",(0,s.jsx)(r.li,{children:"Either 3.5mm TRRS/TRS or USB Type-C can be selected for two halves communication cable connector."}),"\n",(0,s.jsx)(r.li,{children:"SWD and USB D+/- pads for debugging (left half only)."}),"\n",(0,s.jsx)(r.li,{children:"JLCPCB's PCBA service available, no need to solder parts yourself."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"parts-list",children:"Parts List"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{colspan:"2",children:"Item"}),(0,s.jsx)("th",{children:"Qty"}),(0,s.jsx)("th",{children:"Description"}),(0,s.jsx)("th",{children:"Link"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"3",children:"Left half"}),(0,s.jsx)("td",{children:"Main PCB"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsxs)("td",{children:["Include ",(0,s.jsx)("a",{href:"#main-pcbs",children:"electronic parts"})," and ",(0,s.jsx)("a",{href:"https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/left",children:"PCB"})]}),(0,s.jsxs)("td",{rowspan:"10",children:[(0,s.jsx)("a",{href:"https://github.com/siderakb/ergo-snm-keyboard/releases/tag/v2.1.0",children:"GH Release Page"})," "]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:" Top case"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"Choose one of the three holes type"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:" Bottom case"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{rowspan:"3",children:"Right half"}),(0,s.jsx)("td",{children:"Main PCB"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsxs)("td",{children:["Include ",(0,s.jsx)("a",{href:"#main-pcbs",children:"electronic parts"})," and ",(0,s.jsx)("a",{href:"https://github.com/siderakb/ergo-snm-keyboard/tree/main/ErgoSNM_Keyboard/rev2/right",children:"PCB"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Top case"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"Choose one of the three holes type"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Bottom case"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Foot (1)"}),(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Main plate (1)"}),(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"FR4"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Thumb cluster plate"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"FR4"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Thumb cluster PCB"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Trackball board"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsxs)("td",{children:["Include ",(0,s.jsx)("a",{href:"https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0#bom",children:"electronic parts"})," and ",(0,s.jsx)("a",{href:"https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0/PMW3360_PCB",children:"PCB"})]}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0",children:"GH Release Page"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"40mm Trackball ball"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.aliexpress.com/i/1005001632971456.html",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"Ball transfer units (BTUs, Ball rollers)"}),(0,s.jsx)("td",{children:"3"}),(0,s.jsx)("td",{children:"MISUMI BCHJJ7 or CheNa BR869-7 or VCN321-7"}),(0,s.jsxs)("td",{children:[(0,s.jsx)("a",{href:"https://us.misumi-ec.com/vona2/detail/110300427030/?HissuCode=BCHJJ7",children:"Ref1"}),", ",(0,s.jsx)("a",{href:"https://www.aliexpress.com/item/1005003081021713.html",children:"Ref2"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"3.5mm TRS/TRRS or USB Type-C cable"}),(0,s.jsx)("td",{children:"1"}),(0,s.jsx)("td",{children:"For connect two halves"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://a.co/d/9SjkIcC",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"FPC/FFC Cables (2)"}),(0,s.jsx)("td",{children:"2"}),(0,s.jsx)("td",{children:"8 Pin, 0.5mm Pitch, Same side contacts"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.ebay.com/itm/155455713493?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=8fby7xizq9e&sssrc=2047675&ssuid=&widget_ver=artemis&media=COPY",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"M2 threaded inserts"}),(0,s.jsx)("td",{children:"21"}),(0,s.jsx)("td",{children:"Outer Diameter: 3.5mm, Length: 3mm"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.aliexpress.com/item/4000585933306.html",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"M2 \xd7 5mm screws"}),(0,s.jsx)("td",{children:"21"}),(0,s.jsx)("td",{children:"For PCB, case and plate"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.aliexpress.com/item/1005004543081525.html",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"M2 \xd7 8mm screws"}),(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"For feet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.aliexpress.com/item/1005004543081525.html",children:"Ref"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{colspan:"2",children:"M2 hex nuts"}),(0,s.jsx)("td",{children:"4"}),(0,s.jsx)("td",{children:"For feet"}),(0,s.jsx)("td",{children:(0,s.jsx)("a",{href:"https://www.aliexpress.com/item/4000226223259.html",children:"Ref"})})]})]})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"This part is reversible/symmetrical and can be used on both the left and right halves."}),"\n",(0,s.jsxs)(r.li,{children:["For ",(0,s.jsx)(r.code,{children:"v2.0"}),", use JST GH1.25 8P cable instead of FPC/FFC cable, please refer to the schematic for wiring sequence."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"pcb-and-electronic-parts",children:"PCB and Electronic Parts"}),"\n",(0,s.jsx)(r.p,{children:"Here are listed all the electronic components in more detail for PCBs."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Left half main PCB"}),(0,s.jsx)(r.th,{children:"Right half main PCB"}),(0,s.jsx)(r.th,{children:"Thumb cluster"}),(0,s.jsx)(r.th,{children:"Trackball board"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://i.imgur.com/lFPIKst.png",children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/lFPIKst.png",alt:""})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://i.imgur.com/YIMYJX9.png",children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/YIMYJX9.png",alt:""})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://i.imgur.com/PUA9THP.png",children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/PUA9THP.png",alt:""})})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://i.imgur.com/OyAF7rm.jpg",children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/OyAF7rm.jpg",alt:""})})})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"main-pcbs",children:"Main PCBs"}),"\n",(0,s.jsx)(r.p,{children:"Since the left and right PCB electronic parts are identical, the following table only lists the quantities required for one half. Please multiply by 2 when manufacturing both halves."}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsx)(r.p,{children:"If you use PCBA service, you don't have to prepare and solder most or even all of the following parts yourself."})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Qty"}),(0,s.jsx)(r.th,{children:"Value"}),(0,s.jsx)(r.th,{children:"Footprint"}),(0,s.jsx)(r.th,{children:"Designator"}),(0,s.jsx)(r.th,{children:"JLCPCB#"}),(0,s.jsx)(r.th,{children:"MFR. Part#"}),(0,s.jsxs)(r.th,{style:{textAlign:"center"},children:["Basic Parts ",(0,s.jsx)(r.em,{children:"(1)"})]})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3"}),(0,s.jsx)(r.td,{children:"5.1k"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"R1,R2,R4"}),(0,s.jsx)(r.td,{children:"C25905"}),(0,s.jsx)(r.td,{children:"0402WGF5101TCE"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"3"}),(0,s.jsx)(r.td,{children:"1k"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"R3,R7,R9"}),(0,s.jsx)(r.td,{children:"C11702"}),(0,s.jsx)(r.td,{children:"0402WGF1001TCE"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"27"}),(0,s.jsx)(r.td,{children:"0603 (1608 Metric)"}),(0,s.jsx)(r.td,{children:"R5,R6"}),(0,s.jsx)(r.td,{children:"C25190"}),(0,s.jsx)(r.td,{children:"0603WAF270JT5E"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"10k"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"R8,R10"}),(0,s.jsx)(r.td,{children:"C25744"}),(0,s.jsx)(r.td,{children:"0402WGF1002TCE"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"4"}),(0,s.jsx)(r.td,{children:"1uF"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"C1,C2,C8,C16"}),(0,s.jsx)(r.td,{children:"C52923"}),(0,s.jsx)(r.td,{children:"CL05A105KA5NQNC"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"10"}),(0,s.jsx)(r.td,{children:"100nF"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"C3,C6,C7,C9~C15"}),(0,s.jsx)(r.td,{children:"C307331"}),(0,s.jsx)(r.td,{children:"CL05B104KB54PNC"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"20pF"}),(0,s.jsx)(r.td,{children:"0402 (1005 Metric)"}),(0,s.jsx)(r.td,{children:"C4,C5"}),(0,s.jsx)(r.td,{children:"C1554"}),(0,s.jsx)(r.td,{children:"0402CG200J500NT"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"500mA, 6V"}),(0,s.jsx)(r.td,{children:"0805 (2012 Metric)"}),(0,s.jsx)(r.td,{children:"F1"}),(0,s.jsx)(r.td,{children:"C269104"}),(0,s.jsx)(r.td,{children:"SMD0805B050TF"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"RT9013-33GB"}),(0,s.jsx)(r.td,{children:"SOT-23-5"}),(0,s.jsx)(r.td,{children:"U1"}),(0,s.jsx)(r.td,{children:"C47773"}),(0,s.jsx)(r.td,{children:"RT9013-33GB"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"SRV05-4"}),(0,s.jsx)(r.td,{children:"SOT-23-6"}),(0,s.jsx)(r.td,{children:"U2"}),(0,s.jsx)(r.td,{children:"C85364"}),(0,s.jsx)(r.td,{children:"SRV05-4-P-T7"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"W25Q128JVS"}),(0,s.jsx)(r.td,{children:"SOIC-8 5.23x5.23mm P1.27mm"}),(0,s.jsx)(r.td,{children:"U3"}),(0,s.jsx)(r.td,{children:"C97521"}),(0,s.jsx)(r.td,{children:"W25Q128JVSIQ"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"RP2040"}),(0,s.jsx)(r.td,{children:"QFN-56-1EP 7x7mm P0.4mm EP3.2x3.2mm"}),(0,s.jsx)(r.td,{children:"U4"}),(0,s.jsx)(r.td,{children:"C2040"}),(0,s.jsx)(r.td,{children:"RP2040"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"12MHz"}),(0,s.jsx)(r.td,{children:"3225 4Pin (3.2x2.5mm)"}),(0,s.jsx)(r.td,{children:"Y1"}),(0,s.jsx)(r.td,{children:"C9002"}),(0,s.jsx)(r.td,{children:"X322512MSB4SI"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"29"}),(0,s.jsx)(r.td,{children:"1N4148"}),(0,s.jsx)(r.td,{children:"SOD-123"}),(0,s.jsx)(r.td,{children:"D1~D29"}),(0,s.jsx)(r.td,{children:"C81598"}),(0,s.jsx)(r.td,{children:"1N4148W"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"Red LED"}),(0,s.jsx)(r.td,{children:"0603 (1608 Metric)"}),(0,s.jsx)(r.td,{children:"LD1"}),(0,s.jsx)(r.td,{children:"C2286"}),(0,s.jsx)(r.td,{children:"KT-0603R"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsx)(r.td,{children:"RESET & BOOT"}),(0,s.jsx)(r.td,{children:"SW_SPST_TL3342"}),(0,s.jsx)(r.td,{children:"SW1,SW2"}),(0,s.jsx)(r.td,{children:"C318884"}),(0,s.jsx)(r.td,{children:"TS-1187A-B-A-B"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"29"}),(0,s.jsx)(r.td,{children:"Switch"}),(0,s.jsx)(r.td,{children:"Cherry MX style hot-swap socket"}),(0,s.jsx)(r.td,{children:"KEY1~KEY29"}),(0,s.jsx)(r.td,{children:"C2803348"}),(0,s.jsx)(r.td,{children:"CPG151101S11"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"2"}),(0,s.jsxs)(r.td,{children:["USB Type-C 16P ",(0,s.jsx)(r.em,{children:"(2)"})]}),(0,s.jsx)(r.td,{children:"HRO TYPE-C-31-M-12"}),(0,s.jsx)(r.td,{children:"J1,J2"}),(0,s.jsx)(r.td,{children:"C165948"}),(0,s.jsx)(r.td,{children:"TYPE-C-31-M-12"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsxs)(r.td,{children:["3.5mm TRRS 8P ",(0,s.jsx)(r.em,{children:"(2)"})]}),(0,s.jsx)(r.td,{children:"PJ-393 8P TRRS"}),(0,s.jsx)(r.td,{children:"J3"}),(0,s.jsx)(r.td,{children:"C668609"}),(0,s.jsx)(r.td,{children:"PJ-393 8PJ"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"Conn 01x08"}),(0,s.jsxs)(r.td,{children:["0.5mm Pitch 8P FPC/FFC Connector ",(0,s.jsx)(r.em,{children:"(3)"})]}),(0,s.jsx)(r.td,{children:"J4"}),(0,s.jsx)(r.td,{children:"C2856797"}),(0,s.jsx)(r.td,{children:"FPC-05F-8PH20"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]})]})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.em,{children:"Basic Part"})," means no additional manual feeding charge for these parts when using JLCPCB's PCBA services. Parts that are not ",(0,s.jsx)(r.em,{children:"Basic"})," are ",(0,s.jsx)(r.em,{children:"Extended"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["One of the 2 USBs is used for connecting to the computer, and the other one is used to connect the other half of the keyboard. To connect the two halves, you can choose either USB or TRRS/TRS connector:","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"If you choose to use TRRS/TRS, then each half requires 1 USB and 1 TRRS/TRS."}),"\n",(0,s.jsx)(r.li,{children:"If you choose to use USB, then each half requires 2 USB and no TRRS/TRS."}),"\n",(0,s.jsx)(r.li,{children:"TRRS/TRS does not support hot plugging in practice."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["For ",(0,s.jsx)(r.code,{children:"v2.0"}),", ",(0,s.jsx)(r.code,{children:"J4"})," is JST GH1.25 8P connector (Mfr. Part No: ",(0,s.jsx)(r.em,{children:"SM08B-GHS-TB(LF)(SN)"}),"), please refer to the schematic for wiring sequence."]}),"\n",(0,s.jsxs)(r.li,{children:["If you want to save some money, you can consider not using PCBA service soldering ",(0,s.jsx)(r.code,{children:"U1"}),", ",(0,s.jsx)(r.code,{children:"F1"})," and ",(0,s.jsx)(r.code,{children:"J1"}),"~",(0,s.jsx)(r.code,{children:"J4"})," (all are ",(0,s.jsx)(r.em,{children:"Extended"})," parts), there parts are not very difficult to solder by soldering iron, and cheap to buy separately."]}),"\n",(0,s.jsxs)(r.li,{children:["I have never used JLCPCB's PCBA service to solder ",(0,s.jsx)(r.code,{children:"U1"}),", ",(0,s.jsx)(r.code,{children:"F1"}),", ",(0,s.jsx)(r.code,{children:"J1"}),"~",(0,s.jsx)(r.code,{children:"J4"})," and ",(0,s.jsx)(r.code,{children:"KEY1"}),"~",(0,s.jsx)(r.code,{children:"KEY29"})," parts. Please check the PCBA files yourself, especially the CPL file, if you need to."]}),"\n",(0,s.jsx)(r.li,{children:"Please note that the above information is subject to change, so please refer to the current situation."}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"thumb-cluster",children:"Thumb Cluster"}),"\n",(0,s.jsxs)(r.p,{children:["I did not prepare the PCBA files (i.e. BOM and CPL) for thumb cluster, if you need, try ",(0,s.jsx)(r.a,{href:"https://github.com/Bouni/kicad-jlcpcb-tools",children:"Bouni/kicad-jlcpcb-tools"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Qty"}),(0,s.jsx)(r.th,{children:"Value"}),(0,s.jsx)(r.th,{children:"Footprint"}),(0,s.jsx)(r.th,{children:"Designator"}),(0,s.jsx)(r.th,{children:"JLCPCB#"}),(0,s.jsx)(r.th,{children:"MFR. Part#"}),(0,s.jsx)(r.th,{style:{textAlign:"center"},children:"Basic Parts"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"6"}),(0,s.jsx)(r.td,{children:"1N4148"}),(0,s.jsx)(r.td,{children:"SOD-123"}),(0,s.jsx)(r.td,{children:"D1~D6"}),(0,s.jsx)(r.td,{children:"C81598"}),(0,s.jsx)(r.td,{children:"1N4148W"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"6"}),(0,s.jsxs)(r.td,{children:["Switch ",(0,s.jsx)(r.em,{children:"(1)"})]}),(0,s.jsx)(r.td,{children:"Cherry MX style hot-swap socket"}),(0,s.jsx)(r.td,{children:"KEY1~KEY6"}),(0,s.jsx)(r.td,{children:"C2803348"}),(0,s.jsx)(r.td,{children:"CPG151101S11"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsx)(r.td,{children:"Conn 01x08"}),(0,s.jsxs)(r.td,{children:["0.5mm Pitch 8P FPC/FFC Connector ",(0,s.jsx)(r.em,{children:"(2)"})]}),(0,s.jsx)(r.td,{children:"J1"}),(0,s.jsx)(r.td,{children:"C2856797"}),(0,s.jsx)(r.td,{children:"FPC-05F-8PH20"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"\u274c"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"1"}),(0,s.jsxs)(r.td,{children:["Encoder ",(0,s.jsx)(r.em,{children:"(1)"})]}),(0,s.jsx)(r.td,{children:"Alps EC11E-Switch Vertical"}),(0,s.jsx)(r.td,{children:"EC1"}),(0,s.jsx)(r.td,{children:"--"}),(0,s.jsx)(r.td,{children:"--"}),(0,s.jsx)(r.td,{style:{textAlign:"center"},children:"--"})]})]})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["If you want to use encoder, only 5 switches can be insert, encoder ",(0,s.jsx)(r.code,{children:"EC1"})," and ",(0,s.jsx)(r.code,{children:"KEY3"})," share the same position. The two larger mounting pins on the encoder must be cliped."]}),"\n",(0,s.jsxs)(r.li,{children:["For ",(0,s.jsx)(r.code,{children:"v2.0"}),", ",(0,s.jsx)(r.code,{children:"J1"})," is JST GH1.25 8P connector (Mfr. Part No: ",(0,s.jsx)(r.em,{children:"SM08B-GHS-TB(LF)(SN)"}),"), please refer to the schematic for wiring sequence."]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"trackball-board",children:"Trackball Board"}),"\n",(0,s.jsxs)(r.p,{children:["For ErgoSNM ",(0,s.jsx)(r.code,{children:"v2.1"}),", ref to PMW3360 PCB ",(0,s.jsx)(r.code,{children:"V3.1"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/siderakb/pmw3360-pcb/tree/v3.1.0#bom",children:"BOM"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.1.0",children:"Release"})}),"\n"]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["For ErgoSNM ",(0,s.jsx)(r.code,{children:"v2.0"}),", ref to ",(0,s.jsxs)(r.a,{href:"https://github.com/siderakb/pmw3360-pcb/releases/tag/v3.0.0",children:["PMW3360 PCB ",(0,s.jsx)(r.code,{children:"v3.0"})]}),"."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"build-guide",children:"Build Guide"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/1BXKdrCFn6c?si=3hTZfduKW4ZxY-fo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(r.p,{children:"Steps summary:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#prepare-parts",children:"Prepare parts"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#solder",children:"Solder"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#flash-firmware",children:"Flash firmware"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#test",children:"Test"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#assemble",children:"Assemble"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#edit-keymap",children:"Edit keymap"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#complete",children:"Complete"})}),"\n"]}),"\n",(0,s.jsxs)(r.admonition,{type:"info",children:[(0,s.jsx)(r.p,{children:"Before you start, make sure the parts are available, PMW3360 and BTUs are more difficult parts to buy."}),(0,s.jsx)(r.p,{children:"Some online electronic parts stores in my country will help find and purchase rare ICs (usually from Taobao), this is how i bought PMW3360.\nThere are 3 different BTU models listed in the part list, and they are exact same size."}),(0,s.jsx)(r.p,{children:"Approximate cost in USD:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"PCBA: $80"}),"\n",(0,s.jsx)(r.li,{children:"3D printing case: $46"}),"\n",(0,s.jsx)(r.li,{children:"other parts: $32"}),"\n"]})]}),"\n",(0,s.jsx)(r.h3,{id:"prepare-parts",children:"Prepare Parts"}),"\n",(0,s.jsxs)(r.p,{children:["Please refer to ",(0,s.jsx)(r.a,{href:"#parts-list",children:"Parts List"})," and prepare all the required pares."]}),"\n",(0,s.jsx)(r.p,{children:"The cases and feet can be produced using 3D printing (I use SLA Resin for cases, MJF Nylon for feet). The plates provides Gerber files, which are produced as PCBs."}),"\n",(0,s.jsx)(r.h3,{id:"solder",children:"Solder"}),"\n",(0,s.jsx)(r.p,{children:"If you use PCBA service, most of the parts should not need to solder by yourself, but there are still some parts that need to solder manually."}),"\n",(0,s.jsxs)(r.p,{children:["If you are not very familiar with soldering, please read the ",(0,s.jsx)(r.a,{href:"/docs/general-guide/soldering",children:"Soldering Guide"})," first.\nThe parts that need attention are diodes and switch hot-swap sockets."]}),"\n",(0,s.jsx)(r.admonition,{type:"tip",children:(0,s.jsxs)(r.p,{children:["It is recommended to solder the switches or hot-swap sockets after ",(0,s.jsx)(r.a,{href:"#test",children:"Test"}),"."]})}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"After soldering is completed, remember to use a multimeter to test for any short circuits between the power supply (5V, 3.3V, and GND) and USB D+/-."})}),"\n",(0,s.jsx)(r.h3,{id:"flash-firmware",children:"Flash Firmware"}),"\n",(0,s.jsx)(r.p,{children:"There are two way to flash firmware:"}),"\n","\n","\n",(0,s.jsxs)(w,{children:[(0,s.jsxs)(k,{value:"uf2",label:"UF2 file",default:!0,children:[(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Download Pre-build ",(0,s.jsx)("code",{children:".uf2"})," firmware file from ",(0,s.jsx)("a",{href:"https://github.com/siderakb/vial-qmk/releases/tag/ergosnm_v2.1.0",children:"Releases"})," page."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"/docs/general-guide/dfu#raspberry-pi-rp2040",children:"Enter DFU mode"}),"."]}),(0,s.jsxs)("li",{children:["Copy and paste ",(0,s.jsx)("code",{children:".uf2"})," file to the ",(0,s.jsx)("code",{children:"RPI-RP2"})," device."]})]}),(0,s.jsxs)(r.admonition,{type:"note",children:[(0,s.jsxs)(r.p,{children:["If you want to build/compile ",(0,s.jsx)(r.code,{children:".uf2"}),", follow the steps:"]}),(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["Git clone ",(0,s.jsx)(r.a,{href:"https://github.com/siderakb/vial-qmk",children:"firmware repo"}),"."]}),"\n",(0,s.jsxs)(r.li,{children:["Open ",(0,s.jsx)(r.a,{href:"https://msys.qmk.fm/",children:"QMK MSYS"})," or your preferred terminal."]}),"\n",(0,s.jsxs)(r.li,{children:["Navigate to the cloned repo directory and checkout to ",(0,s.jsx)(r.code,{children:"siderakb/main"})," branch."]}),"\n",(0,s.jsxs)(r.li,{children:["Build via command ",(0,s.jsx)(r.code,{children:"make siderakb/ergosnm/rev2:vial"}),". You may need to additionally install ",(0,s.jsx)(r.em,{children:"make"}),"."]}),"\n"]})]})]}),(0,s.jsx)(k,{value:"cli",label:"CLI",children:(0,s.jsxs)("ol",{children:[(0,s.jsxs)("li",{children:["Git clone ",(0,s.jsx)("a",{href:"https://github.com/siderakb/vial-qmk",children:"firmware repo"})]}),(0,s.jsx)("li",{children:"Open QMK MSYS or your preferred terminal."}),(0,s.jsxs)("li",{children:["Navigate to the cloned repo directory and checkout to ",(0,s.jsx)("code",{children:"siderakb/main"})," branch."]}),(0,s.jsxs)("li",{children:["Flash via command, e.g. ",(0,s.jsx)("code",{children:"qmk flash -kb siderakb/ergosnm/rev2 -km vial"})," or ",(0,s.jsxs)("code",{children:["make siderakb/ergosnm/rev2:vial",":flash"]}),"."]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("a",{href:"/docs/general-guide/dfu#raspberry-pi-rp2040",children:"Enter DFU mode"}),". If you have other keyboards, you can also enter DFU mode before executing the command (a keyboard in DFU mode will not be able to type)."]})]})})]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"Please note that TRRS/TRS does not support hot plugging in practice, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer."})}),"\n",(0,s.jsx)(r.admonition,{type:"info",children:(0,s.jsxs)(r.p,{children:["For more infomation, please refer to ",(0,s.jsx)(r.a,{href:"https://docs.qmk.fm/#/newbs_flashing",children:"QMK: Flashing Firmware"})," and ",(0,s.jsx)(r.a,{href:"https://docs.qmk.fm/#/flashing?id=raspberry-pi-rp2040-uf2",children:"QMK: Raspberry Pi RP2040 UF2"}),"."]})}),"\n",(0,s.jsx)(r.h3,{id:"test",children:"Test"}),"\n",(0,s.jsx)(r.p,{children:"Onec the firmware is flashed, the keyboard is ready to work."}),"\n",(0,s.jsx)(r.p,{children:"Before proceeding to the next setps, you can test whether the keyboard is working properly to detect PCBs defects early."}),"\n",(0,s.jsxs)(r.p,{children:["You can use a site like ",(0,s.jsx)(r.a,{href:"https://en.key-test.ru/",children:"this"})," or ",(0,s.jsx)(r.a,{href:"https://keytest.vn/",children:"this"})," to test the keybaord. Sine the switch may not be installed on keyboard at present, you can use tweezers to act as a switch."]}),"\n",(0,s.jsx)(r.h3,{id:"assemble",children:"Assemble"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Use soldering iron to installing threaded inserts in keyboard case."}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"The wall of the hole at the thumb cluster is very thin, so please be careful."})}),"\n",(0,s.jsxs)(r.ol,{start:"2",children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Connect the FPC/FFC cables between main board and thumb cluster/trackball board.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:"https://i.imgur.com/kWDrTm2.jpg",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Screw main and thumb cluster plates to the case.",(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:"https://i.imgur.com/54kXYYD.jpg",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Insert switches into the plate and PCB, you can insert the corner switches first to fix."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"Before inserting the switch into the hot-swap socket, check if the switch pins are bent. If you find any bent pins, please straighten them."})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.img,{src:"https://i.imgur.com/5N0QGRi.jpg",alt:""}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:"https://i.imgur.com/Lklcmzc.jpg",alt:""}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.img,{src:"https://i.imgur.com/BhxgrRT.jpg",alt:""})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Screw bottom cover and foots.\n",(0,s.jsx)(r.img,{src:"https://i.imgur.com/zlm93b8.jpg",alt:""})]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Add your keycaps. Plugin the TRRS/TRS or USB cable to connect two halves."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"caution",children:(0,s.jsx)(r.p,{children:"Please note that TRRS/TRS does not support hot plugging in practice, please plug and unplug TRRS/TRS cable after unplugging the USB cable between keyboard and computer."})}),"\n",(0,s.jsx)(r.h3,{id:"edit-keymap",children:"Edit Keymap"}),"\n",(0,s.jsxs)(r.p,{children:["ErgoSNM support ",(0,s.jsx)(r.a,{href:"https://get.vial.today/",children:"Vial"}),", you can edit keymap in real time, please refer to ",(0,s.jsx)(r.a,{href:"https://get.vial.today/manual/",children:"Vial: User manual"}),"."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://i.imgur.com/0yXPjm1.png",children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/0yXPjm1.png",alt:""})})}),"\n",(0,s.jsx)(r.h3,{id:"complete",children:"Complete"}),"\n",(0,s.jsx)(r.p,{children:"Congratulations on getting a new keyboard\ud83c\udf89"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{src:"https://i.imgur.com/ovP1uKJ.jpg",alt:""})})]})}function E(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(F,{...e})}):F(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>l});var s=t(7294);const n={},i=s.createContext(n);function l(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);