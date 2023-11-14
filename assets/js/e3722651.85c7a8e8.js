"use strict";(self.webpackChunksiderakb_website=self.webpackChunksiderakb_website||[]).push([[640],{4986:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>h,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>d,toc:()=>l});var t=s(5893),i=s(1151);const n={sidebar_position:2},o="Rev 1.x",d={id:"ergosnm/rev1",title:"Rev 1.x",description:"Rev 1.x is an experimental version, NOT recommended for daily use.",source:"@site/docs/ergosnm/rev1.md",sourceDirName:"ergosnm",slug:"/ergosnm/rev1",permalink:"/docs/ergosnm/rev1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Rev 2.x",permalink:"/docs/ergosnm/rev2"},next:{title:"RP Micro",permalink:"/docs/rp-micro"}},h={},l=[{value:"Parts List",id:"parts-list",level:2},{value:"Build Guide",id:"build-guide",level:2},{value:"1. Prepare Parts",id:"1-prepare-parts",level:3},{value:"2. Solder Components",id:"2-solder-components",level:3},{value:"3. Plug in Pro Micro Board",id:"3-plug-in-pro-micro-board",level:3},{value:"4. Flash &amp; Test",id:"4-flash--test",level:3},{value:"5. Complete!",id:"5-complete",level:3}];function c(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"rev-1x",children:"Rev 1.x"}),"\n",(0,t.jsx)(r.admonition,{type:"caution",children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Rev 1.x"})," is an experimental version, NOT recommended for daily use."]})}),"\n",(0,t.jsx)(r.h2,{id:"parts-list",children:"Parts List"}),"\n",(0,t.jsxs)(r.p,{children:["I didn't prepare the PCBA files for ",(0,t.jsx)(r.code,{children:"Rev 1.x"}),", so you need to order the PCB and all the components, and solder them yourself."]}),"\n",(0,t.jsx)(r.p,{children:"Here's a table of parts needed for the build:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Items"}),(0,t.jsx)(r.th,{children:"Spec"}),(0,t.jsx)(r.th,{children:"Qty"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"ErgoSNM keyboard PCBs"}),(0,t.jsxs)(r.td,{children:["Rev ",(0,t.jsx)(r.code,{children:"1.x"})]}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"https://www.sparkfun.com/products/12587",children:"Pro Micro"})," boards"]}),(0,t.jsx)(r.td,{children:"3.3V/8MHz (recommended)"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsxs)(r.td,{children:["Or compatible boards, e.g.  ",(0,t.jsx)(r.a,{href:"https://deskthority.net/wiki/Elite-C",children:"Elite-C"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/ziteh/next-micro",children:"Next \u03bc"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/ziteh/rp-micro",children:"RP Micro"}),", ",(0,t.jsx)(r.a,{href:"https://github.com/joric/nrfmicro",children:"nRFMicro"})," or ",(0,t.jsx)(r.a,{href:"https://github.com/ziteh/mdbt-micro",children:"MDBTMicro"}),"."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Key switches"}),(0,t.jsx)(r.td,{children:"Cherry MX style"}),(0,t.jsx)(r.td,{children:"70"}),(0,t.jsx)(r.td,{children:"Mechanical keyboard switches."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Diodes"}),(0,t.jsx)(r.td,{children:"1N4148, SOD-123 package"}),(0,t.jsx)(r.td,{children:"70"}),(0,t.jsxs)(r.td,{children:["Ghosting elimination diodes. The model number with the ",(0,t.jsx)(r.code,{children:"W"})," suffix usually means SOD-123 package, i.e. 1N4148W."]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"3.5mm TRRS sockets"}),(0,t.jsx)(r.td,{children:"PJ-393 8P"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:"Used to plug in the TRRS cable to connect two halves."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RESET buttons"}),(0,t.jsx)(r.td,{children:"TL3342, aka 5.2*5.2mm tactile switch"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Key switches hot-swap sockets"}),(0,t.jsx)(r.td,{children:"Cherry MX style"}),(0,t.jsx)(r.td,{children:"70"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Pro Micro sockets"}),(0,t.jsx)(r.td,{children:"2.54mm 1*13P pin socket"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RESET pull-up resistors"}),(0,t.jsx)(r.td,{children:"1k~10k\u03a9, 0603 package (1608 metric)"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"I\xb2C pull-up resistors"}),(0,t.jsx)(r.td,{children:"4.7k\u03a9, 0603 package (1608 metric)"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Battery switches"}),(0,t.jsx)(r.td,{children:"MSK-23D20-T 2P3T"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Battery connectors"}),(0,t.jsx)(r.td,{children:"JST PH2.0 2P"}),(0,t.jsx)(r.td,{children:"2"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.em,{children:"Optional"})})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["There are many different types of mechanical keyboard switches, such as ",(0,t.jsx)(r.a,{href:"https://deskthority.net/wiki/Cherry_MX",children:"Cherry MX"}),", ",(0,t.jsx)(r.a,{href:"https://deskthority.net/wiki/Cherry_MX_Low_Profile",children:"Cherry MX low profile"}),", ",(0,t.jsx)(r.a,{href:"https://deskthority.net/wiki/Alps_SKCL/SKCM_series",children:"Kailh Choc low profile"})," and ",(0,t.jsx)(r.a,{href:"https://deskthority.net/wiki/Alps_SKCL/SKCM_series",children:"Alps"}),", etc. they are not completely compatible with each other. ErgoSNM ",(0,t.jsx)(r.code,{children:"Rev 1.x"})," only support Cherry MX style switches and hot-swap sockets."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"build-guide",children:"Build Guide"}),"\n",(0,t.jsx)(r.p,{children:"Steps Summary"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#1-prepare-parts",children:"Prepare parts"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#2-solder-components",children:"Solder components"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#3-plug-in-pro-micro-board",children:"Plug in Pro Micro board"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#4-flash--test",children:"Flash & test"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#5-complete",children:"Complete!"})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Rev 1.x"})," PCB is reversible, meaning it can be used as either the left- or right-hand half. Some components have footprints on both sides of the PCB, you can choose any single side for soldering."]}),"\n",(0,t.jsx)(r.h3,{id:"1-prepare-parts",children:"1. Prepare Parts"}),"\n",(0,t.jsx)(r.p,{children:"You must prepare all the parts and tools needed."}),"\n",(0,t.jsx)(r.p,{children:"PCB can order from JLCPCB or PCBWay."}),"\n",(0,t.jsx)(r.h3,{id:"2-solder-components",children:"2. Solder Components"}),"\n",(0,t.jsx)(r.p,{children:"The sequence of soldering is usually determined by the height of the component, lower first. Recommended is:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsx)(r.li,{children:"diodes"}),"\n",(0,t.jsx)(r.li,{children:"RESET button"}),"\n",(0,t.jsx)(r.li,{children:"resistors"}),"\n",(0,t.jsx)(r.li,{children:"hot-swap sockets"}),"\n",(0,t.jsx)(r.li,{children:"TRRS connector"}),"\n",(0,t.jsx)(r.li,{children:"battery switch"}),"\n",(0,t.jsx)(r.li,{children:"battery connector"}),"\n",(0,t.jsx)(r.li,{children:"Pro Micro board sockets"}),"\n",(0,t.jsx)(r.li,{children:"key switches"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"First, solder all the diodes. Diodes are unidirectional, solder them in the incorrect direction will make the keyboard not work, please note which side is anode (+) and which side is cathode (-)."}),"\n",(0,t.jsx)(r.p,{children:"The cathode side is marked by lines on the diodes, and the other side is the anode. On the PCB, there is also a line marked on the cathode side. Please solder each diode respectively according to its polarity mark on the PCB."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/CU7DXw2.jpg",alt:""}),"\n\u25b2 Diode polarity marking."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/tfoMWkK.jpg",alt:""}),"\n\u25b2 Diodes soldered with the correct polarity."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/BfJDvfF.jpg",alt:""}),(0,t.jsx)(r.br,{}),"\n","\u25b2 Note the markings of different diodes."]}),"\n",(0,t.jsxs)(r.p,{children:["Next, solder RESET button (choose one side of the PCB for soldering). In general, the Pro Micro already has RESET pull-up resistor, so you do not need to solder ",(0,t.jsx)(r.code,{children:"R1"}),", if you want to solder ",(0,t.jsx)(r.code,{children:"R1"}),", 1k~10k\u03a9 should be fine."]}),"\n",(0,t.jsxs)(r.p,{children:["If you want to use I\xb2C as the split keyboard transport communication, than you need to solder ",(0,t.jsx)(r.code,{children:"R2"})," and ",(0,t.jsx)(r.code,{children:"R3"})," resistors on either side. If you don't known what that means, don't solder them. Default is not used I\xb2C. For more info about this, please refer to ",(0,t.jsx)(r.a,{href:"https://docs.qmk.fm/#/feature_split_keyboard",children:"QMK - Split Keyboard"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Note the direction of placement when solder hot-swap sockets, the incorrect placement will block the hole."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/y9A23bO.jpg",alt:""}),(0,t.jsx)(r.br,{}),"\n","\u25b2 Hot-swap sockets placement."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/jvgJSLK.jpg",alt:""}),(0,t.jsx)(r.br,{}),"\n","\u25b2 Soldered diodes and hot-swap sockets."]}),"\n",(0,t.jsx)(r.p,{children:"If you want the Pro Micro removable, then solder the pin sockets on the PCB, so that the Pro Micro can be pluggeg in. If you don't need it to be removable, you can also just solder it to the PCB with pin headers."}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Note that the TRRS pin order in ",(0,t.jsx)(r.code,{children:"Rev 1.0"})," is wrong, solder it on the PCB will short VCC and GND. This issue fixed in ",(0,t.jsx)(r.code,{children:"Rev 1.1"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"3-plug-in-pro-micro-board",children:"3. Plug in Pro Micro Board"}),"\n",(0,t.jsx)(r.p,{children:"Plug the Pro Mico into the PCB."}),"\n",(0,t.jsxs)(r.p,{children:["The pin sockets of ",(0,t.jsx)(r.code,{children:"Rev 1.0"})," is 1*13 pins, one more pin than Pro Micro, this is reserved for the battery pins of the board with charging circuit such as ",(0,t.jsx)(r.a,{href:"https://github.com/joric/nrfmicro",children:"nRFMicro"})," or ",(0,t.jsx)(r.a,{href:"https://github.com/ziteh/mdbt-micro",children:"MDBTMicro"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"If your board is the same as the Pro Micro, only 12 pins on one side, or the topmost (near USB) pins is not the battery pins, align your board with the bottom edge of the socket and insert. Also make sure that the 3 pins marked with GND on the PCB match the GND of the board."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/BcZsAtd.jpg",alt:""}),(0,t.jsx)(r.br,{}),"\n","\u25b2 Plug in Pro Micro board."]}),"\n",(0,t.jsx)(r.p,{children:"For the right-hand half, your board need to be solder and insert upside down."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/AHmFrbP.jpg",alt:""}),(0,t.jsx)(r.br,{}),"\n","\u25b2 Right Pro Micro upside down installation."]}),"\n",(0,t.jsx)(r.h3,{id:"4-flash--test",children:"4. Flash & Test"}),"\n",(0,t.jsx)(r.p,{children:"Now that the circuit board part is completed, the next step is flashing firmware."}),"\n",(0,t.jsxs)(r.p,{children:["For ",(0,t.jsx)(r.code,{children:"Rev 1.x"}),", I only prepare the ",(0,t.jsx)(r.a,{href:"https://qmk.fm/",children:"QMK"})," firmware, the repo is ",(0,t.jsx)(r.a,{href:"https://github.com/ziteh/ergo-snm-keyboard-qmk",children:"here"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"The specific steps may differ depending on the board you are using, the following is an example of Pro Micro:"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Prepare ",(0,t.jsx)(r.code,{children:".hex"})," firmware files, left and right hands have their own files."]}),"\n",(0,t.jsxs)(r.li,{children:["Install, open and setup firmware flashing tool, e.g. ",(0,t.jsx)(r.a,{href:"https://github.com/qmk/qmk_toolbox",children:"QMK Toolbox"})," or ",(0,t.jsx)(r.a,{href:"https://blog.zakkemble.net/avrdudess-a-gui-for-avrdude/",children:"AVRDUDESS"}),". My personal preference AVRDUDESS."]}),"\n",(0,t.jsx)(r.li,{children:"Connect the one half of the keyboard to computer with USB."}),"\n",(0,t.jsx)(r.li,{children:"Press RESET button twice quickly, Pro Micro will enter bootloader mode for 8 seconds."}),"\n",(0,t.jsx)(r.li,{children:"Flash."}),"\n",(0,t.jsx)(r.li,{children:"Repeat the above steps for other half."}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.img,{src:"https://1.bp.blogspot.com/-h_kR_cbyiI0/Xu8SLCaQHQI/AAAAAAAAChU/KdGDqoghBnArI9ZTjw6yywYsBMCE1ZDmgCK4BGAsYHg/s646/AVRDUDESS-01.jpg",alt:"AVRDUDESS setup example"}),(0,t.jsx)(r.br,{}),"\n",'\u25b2 AVRDUDESS setup example, "Port" and "Flash" path select according to the actual situation.']}),"\n",(0,t.jsx)(r.p,{children:'Bootloader mode only 8 secs, which makes flashing not so easy. You can open device manager (Windows), enter bootloader mode and check the COM port of Pro Micro, setup this COM port in AVRDUDESS (even if this port does not exist now), enter bootloader mode again and click "Program!" to flash.'}),"\n",(0,t.jsxs)(r.p,{children:["After flashing, you can use a site like ",(0,t.jsx)(r.a,{href:"https://en.key-test.ru/",children:"this"})," or ",(0,t.jsx)(r.a,{href:"https://keytest.vn/",children:"this"})," to test the keyboard."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["For more info about bootloader/DFU of Pro Micro, please refer to ",(0,t.jsx)(r.a,{href:"https://learn.sparkfun.com/tutorials/pro-micro--fio-v3-hookup-guide/troubleshooting-and-faq#ts-reset",children:"this"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"5-complete",children:"5. Complete!"}),"\n",(0,t.jsx)(r.p,{children:"The keyboard is now complete and ready to use!"})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>d,a:()=>o});var t=s(7294);const i={},n=t.createContext(i);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);