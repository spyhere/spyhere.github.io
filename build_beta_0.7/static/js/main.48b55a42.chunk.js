(this.webpackJsonpscore_gym=this.webpackJsonpscore_gym||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/metro_1.14d657e7.mp3"},41:function(e,t,a){e.exports=a.p+"static/media/metro_other.29b77406.mp3"},42:function(e,t,a){e.exports=a.p+"static/media/clap01.3019756d.mp3"},47:function(e,t,a){e.exports=a(80)},52:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),o=(a(52),a(7)),l=a(8),u=a(2),c=a(10),h=a(9),p=a(45),m={bars:[],barsQuant:8,measure:"four_quarters",pauseValue:10,easyOBProb:20,tripletValue:90,groupRest:!0,bpm:70,easyGrouping:95,linkIns:!0,linkOut:50,lvl:2,simpleK:50,dotsK:-.1,groupK:60,beat:!0,beatNumb:!0,beamNum:1,receivedVal:[],noteValues:{whole:5,half:11,quarter:15,eighth:35,sixteenth:36,thirtySecond:0},dottedValues:{whole:-.1,half:5,quarter:10,eighth:30,sixteenth:0,thirtySecond:0},groupingValues:{whole:-.1,half:3,quarter:10,eighth:12},quintepletMap:{whole:-.1,half:5,quarter:15,eighth:0},simValIns:{whole:-.1,half:5,quarter:15,eighth:20,sixteenth:25,thirtySecond:0},metronomeSwitch:!1,mistakes:null,mode:null,settings:!1,info:!1,tips:!0},d=function(e){return{state:e}},b=function(e){return{newState:function(t){e(function(e){return{type:"CHANGE",newState:e}}(t))},updateState:function(t){e(function(e){return{type:"UPDATE",newState:e}}(t))}}},f=a(12),g=a(40),v=a.n(g),y=a(41),E=a.n(y),k=a(42),S=a.n(k),w=a(26),N=[[["whole","whole--rest",4],["half","half--rest",2],["quarter","quarter--rest",1],["eighth","eighth--rest",.5],["sixteenth","sixteenth--rest",.25],["thirty-second","thirty-second--rest",.125]]].concat([[["whole--dot","whole--dot--rest",6],["half--dot","half--dot--rest",3],["quarter--dot","quarter--dot--rest",1.5],["eighth--dot","eighth--dot--rest",.75],["sixteenth--dot","sixteenth--dot--rest",.375],["thirty-second--dot","thirty-second--dot--rest",.1875]]]);N=N.concat([[["whole--triplet","whole--quinteplet",4],["half--triplet","half--quinteplet",2],["quarter--triplet","quarter--quinteplet",1],["eighth--triplet","eighth--quinteplet",.5]]]);var q={two_quarters:2,three_quarters:3,four_quarters:4,five_quarters:5,seven_quarters:7,five_eights:2.5,six_eights:3},_=[/eighth|sixteenth|thirty-second/,/rest/],O=1,x=4,j=[],V=4,I=10,A=20,T=90,M=100,R=!0,L=0,P=0,C=!0,D=!1,B=70,K={whole:5,half:11,quarter:44,eighth:56,sixteenth:64,thirtySecond:0},G=Object.keys(K),F=[],U=null,H={whole:-.1,half:-.1,quarter:10,eighth:30,sixteenth:0,thirtySecond:0},Q=Object.keys(H),X=[],W=null,J={whole:-.1,half:3,quarter:10,eighth:12},z=Object.keys(J),Y=[],$=null,Z=null,ee={whole:-.1,half:5,quarter:15,eighth:20,sixteenth:25,thirtySecond:30},te=Object.keys(ee),ae=[],ne=null,se={whole:-.1,half:5,quarter:15,eighth:0},re=Object.keys(se),ie=[],oe=0,le=0,ue=0,ce=75,he=95,pe=100,me=null,de=[ce,he,pe];function be(e){for(var t in O=e.beamNum,x=e.barsQuant,V=q[e.measure],I=e.pauseValue,A=e.easyOBProb,T=e.tripletValue,M=e.easyGrouping,R=e.linkIns,L=e.linkOut,P=e.lvl,ce=e.simpleK,he=e.dotsK,pe=e.groupK,C=e.groupRest,D=e.showBeat,B=e.fixingBeatProb,K=e.noteValues,F=[],U=null,G)0!==K[G[t]]&&(F.push([G[t]]),F[t].push(K[G[t]]));for(var a in U=F.reverse()[0][1],F.reverse(),H=e.dottedValues,X=[],W=null,Q)0!==H[Q[a]]&&(X.push([Q[a]]),X[a].push(H[Q[a]]));for(var n in W=X.reverse()[0][1],X.reverse(),J=e.groupingValues,Y=[],$=null,z)0!==J[z[n]]&&(Y.push([z[n]]),Y[n].push(J[z[n]]));for(var s in $=Y.reverse()[0][1],Y.reverse(),ee=e.simValIns,ae=[],ne=null,te)0!==ee[te[s]]&&(ae.push([te[s]]),ae[s].push(ee[te[s]]));for(var r in ne=ae.reverse()[0][1],ae.reverse(),se=e.quintepletMap,ie=[],null,re)0!==se[re[r]]&&(ie.push([re[r]]),ie[r].push(se[re[r]]));ie.reverse()[0][1],ie.reverse(),Z=[[F,U],[X,W],[Y,$]],de=[ce,he,pe],me=0===P?ce-1:1===P?he-1:100}function fe(){var e=[];j=[];for(var t=function(){var t=V-ue,a=Math.round(Math.random()*me);oe=null,de.forEach((function(e,n){a<e&&!oe&&0!==oe&&t>=N[n][Z[n][0].length-1][2]?oe=n:oe||0===oe||n!==Z.length-1||(oe=0)})),!Number.isInteger(ue)&&2===oe&&he>ce&&t>=N[1][Z[1][0].length-1][2]?oe=1:!Number.isInteger(ue)&&2===oe&&he<ce&&(oe=0);var n=null,s=null;N[oe].forEach((function(e,a){e[2]<=t&&!n&&0!==n&&(n=a,s=a)}));var r=V-ue<=1&&j.length+1<x&&L&&2!==oe?Math.round(100*Math.random()):null;r<L&&r&&(n=1),ge(n,ue,oe);var i=function(){if("whole--triplet"===N[oe][0][0]){return Math.round(100*Math.random())<=T||2===oe&&(ie.length<=le||ie[le][1]<0)?0:1}if(Math.round(100*Math.random())<I)return 1;return 0}(),o=N[oe][le][2]-t;if(V-ue<=1&&!N[0].some((function(e){return e[2]===o}))&&!N[1].some((function(e){return e[2]===o}))&&2!==oe&&o>0&&(le=s),ue+N[oe][le][2]>V){var l=function(e,t,a,n,s){var r=V-s,i=0,o=null;for(;V-s;){var l=i?0:1;if(N[l].forEach((function(e,t){e[2]!==r||o||0===o||(o=t)})),i++,o){e.push([(0===n?"1":"")+N[l][o][n],N[l][o][2]]);e=ve(0,0,[],e),t.push(e),s+=N[l][o][2]}}e=[],s=0,i=0;for(;s!==N[oe][a][2]-r;){o=null;var u=i?0:1;N[u].forEach((function(e,t){e[2]!==N[oe][a][2]-r||o||0===o||(o=t)})),i++,o&&(e.push([N[u][o][n],N[u][o][2]]),s+=N[u][o][2])}return[e,t,s]}(e,j,le,i,ue),u=Object(w.a)(l,3);e=u[0],j=u[1],ue=u[2]}else if(R&&!Number.isInteger(N[oe][le][2]+ue)&&!Number.isInteger(ue)&&ue+N[oe][le][2]<=V&&N[oe][le][2]+ue>Math.ceil(ue)&&F.length<6&&2!==oe){var c=function(e,t,a,n,s){var r=Math.ceil(s)-s,i=0,o=null,l=0,u=function(){var e=l?0:1;N[e].forEach((function(a,l){!o&&0!==o&&N[e][l][2]<=r&&(e&&l<4||!e)&&(o=l,t.push([(0===n?"0":"")+N[e][o][n],N[e][o][2]]),r-=N[e][o][2],s+=N[e][o][2],i+=N[e][o][2])})),l++};for(;r>0;)u();r=N[e][a][2]-i,l=0,o=null;var c=function(){(r>1||l>1)&&N[0].forEach((function(e,a){!o&&0!==o&&N[0][a][2]<=r&&(o=a,t.push([N[0][o][n],N[0][o][2]]),r-=N[0][o][2],s+=N[0][o][2],o=null)}));var e=l?0:1;N[e].forEach((function(a,i){!o&&0!==o&&N[e][i][2]<=r&&(e&&i<4||!e)&&(o=i,t.push([N[e][o][n],N[e][o][2]]),r-=N[e][o][2],s+=N[e][o][2],o=null)})),l++};for(;r>0;)c();return[t,s]}(oe,e,le,i,ue),h=Object(w.a)(c,2);e=h[0],ue=h[1]}else e.push([N[oe][le][i],N[oe][le][2]]),ue+=N[oe][le][2];if("whole--triplet"===N[oe][0][0]){var p=[];!function(e,t,a,n){var s;s=a?N[e][t][2]/4*5:N[e][t][2]/2*3;var r=null,i=0,o=Math.round(100*Math.random())-1,l=function(){var e=s-i,t=null,l=void 0;if(N[0].forEach((function(a,n){a[2]<=e&&!t&&0!==t&&(t=n,r||(r=n))})),o<M)l=t=a?r+2:r+1;else{l=ge(t,i,0,1)}n.push([N[0][l][0],N[0][l][2]]),i+=N[0][l][2]};for(;i<s;)l()}(oe,le,i,p),e.push(p)}if(String(V-ue).length>3&&100*Math.random()<=B&&N[0].forEach((function(t){(t[2]+ue===Math.ceil(ue)||t[2]+ue===Math.ceil(ue)-O/2)&&String(V-ue).length>3&&(e.push([t[0],t[2]]),ue+=t[2])})),ue===V){e=ve(0,0,[],e),j.push(e),e=[],ue=0}};j.length<x;)t();return j[0].unshift(V),j}function ge(e,t,a,n){var s,r=n?ne:Z[a][1];le=0;var i=Z[a][0];if(0===e?s=0:n||(s=Math.round(Z[a][0][e-1][1])),Number.isInteger(t)&&Z[a][0].length>e+2&&!n){var o=Math.round(100*Math.random());0===t&&o-30<A&&Z[a][0].length>e+3?r=Z[a][0][e+3][1]:o<A&&(r=Z[a][0][e+2][1])}n&&(s=0===e?0:ae[e-1][1],i=ae);var l=Math.random()*(r-s)+s;for(var u in i)if(l<i[u][1])return le=Number(u);return le=e}function ve(e,t,a,n,s){var r=0;return n.forEach((function(i,o){if(e+=i[1],Array.isArray(i[0]))return i=ve(0,0,[],i,!0),r=0,t=0,void(a=[]);if(_[0].test(i[0])&&!_[1].test(i[0])?(t+=i[1],a.push(i[0])):(t=0,a=[]),(t>O||t===O&&!a.some((function(e){return/sixteenth|thirty-second/.test(e)})))&&(t=0,a=[]),/rest/.test(i[0])){var l=null;o+1<=n.length-1&&/rest/.test(n[o+1][0])&&C&&(N.forEach((function(t){return t.forEach((function(t){t[2]!==i[1]+n[o+1][1]||l||(n[o][0]=t[1],n[o][1]=t[2],e+=n[o+1][1],l=!0)}))})),l&&n.splice(o+1,1))}else{if(!_[0].test(i[0]))return;if(_[1].test(i[0]))return;o+1<=n.length-1&&_[0].test(n[o+1][0])&&!_[1].test(n[o+1][0])&&!/triplet|quinteplet/.test(n[o][0])&&(t!==i[1]||e===V/2||0!==o&&/--st|--gr/.test(n[o-1][0])&&!Array.isArray(n[o-1][0])||0!==o&&/rest/.test(n[o-1][0])&&Number.isInteger(e)&&D||!(o<=n.length-1)||/triplet|quinteplet/.test(n[o+1][0])?o>0&&/--st|--gr/.test(n[o-1][0])&&(e!==V/2&&t!==O||s)&&r&&o<=n.length-1&&!/triplet|quinteplet/.test(n[o+1][0])&&(/eighth/.test(i[0])?n[o][0]=n[o][0]+"--gr":new RegExp(i[0].match(/\D/g).join("")).test(n[o+1][0])||new RegExp(i[0].match(/\D/g).join("")).test(n[o-1][0])||/sixteenth|thirty-second/.test(i[0])&&/sixteenth|thirty-second/.test(n[o+1][0])?new RegExp(i[0].match(/\D/g).join("")).test(n[o+1][0])||/sixteenth|thirty-second/.test(i[0])&&/sixteenth|thirty-second/.test(n[o+1][0])?n[o][0]=n[o][0]+"--1--gr":n[o][0]=n[o][0]+"--0--gr":n[o][0]=n[o][0]+"--2--gr",r++):(/eighth/.test(i[0])?n[o][0]=n[o][0]+"--st":new RegExp(i[0].match(/\D/g).join("")).test(n[o+1][0])||/sixteenth|thirty-second/.test(i[0])&&/sixteenth|thirty-second/.test(n[o+1][0])?n[o][0]=n[o][0]+"--1--st":n[o][0]=n[o][0]+"--0--st",r++)),!/--st|--gr/.test(i[0])&&o>0&&/--st|--gr/.test(n[o-1][0])&&r&&(o===n.length-1||t===O||e===V/2||!_[0].test(n[o+1][0])||_[1].test(n[o+1][0])||/triplet|quinteplet/.test(n[o+1][0]))&&(/eighth/.test(i[0])?n[o][0]=n[o][0]+"--end":new RegExp(i[0].match(/\D/g).join("")).test(n[o-1][0])?n[o][0]=n[o][0]+"--1--end":n[o][0]=n[o][0]+"--0--end",t=0,a=[],r=0),/--st|--gr|--end/.test(i[0])||(t=0,a=[])}})),n}var ye,Ee,ke,Se,we,Ne,qe,_e,Oe,xe=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).mainPage=n.mainPage.bind(Object(u.a)(n)),n.tips=n.tips.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"mainPage",value:function(){var e=this;setTimeout((function(){e.props.newState({settings:!1}),document.querySelector(".main_page").classList.remove("main_page--settAnim","main_page--settAnim--back")}),700),document.querySelector("nav").classList.remove("nav--out"),document.querySelector(".main_page").classList.add("main_page--settAnim--back"),setTimeout((function(){return document.querySelector(".settings--hook").style.pointerEvents="auto"}),800)}},{key:"tips",value:function(){this.props.newState({tips:!this.props.state.tips})}},{key:"componentDidMount",value:function(){document.querySelector(".settings_page").style.height=document.querySelector(".main_page").clientHeight+"px",document.querySelector("nav").classList.add("nav--out");var e=document.querySelector(".main_page").classList;e.remove("main_page--settAnim","main_page--settAnim--back"),e.toggle("main_page--settAnim"),setTimeout((function(){return document.querySelector(".main_page--hook_sett").style.pointerEvents="auto"}),700)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"settings_page"},s.a.createElement("h1",{className:"display-4"},s.a.createElement("smal",null,"Settings")),s.a.createElement("div",{className:"main_page--hook_sett",onMouseOver:this.mainPage},"Main_Page"),s.a.createElement("div",{className:"settings--inside"},s.a.createElement("button",{class:"btn btn-info",onClick:this.tips},"Tips switch"))))}}]),a}(s.a.Component),je=Object(f.b)(d,b)(xe),Ve=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).mainPage=n.mainPage.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"mainPage",value:function(){var e=this;document.querySelector(".main_page--hook_info").style.pointerEvents="none",setTimeout((function(){e.props.newState({info:!1})}),700),document.querySelector("nav").classList.remove("nav--out"),setTimeout((function(){document.querySelector(".info--hook").style.pointerEvents="auto"}),800),document.querySelector(".info_page").classList.add("info_page--infoAnim--back")}},{key:"componentDidMount",value:function(){document.querySelector(".info_page").style.height=document.querySelector(".main_page").clientHeight+"px",document.querySelector(".info_page").classList.add("info_page--infoAnim"),document.querySelector("nav").classList.add("nav--out"),setTimeout((function(){document.querySelector(".main_page--hook_info").style.pointerEvents="auto"}),700)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"info_page"},s.a.createElement("div",{className:"info"},s.a.createElement("div",{className:"main_page--hook_info",onMouseOver:this.mainPage},"Main_Page"),s.a.createElement("h1",{className:"display-4"},"Info")))))}}]),a}(s.a.Component),Ie=Object(f.b)(d,b)(Ve),Ae=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"header__page"},s.a.createElement("header",null,s.a.createElement("h1",{className:"display-4"},"Welcome to ",s.a.createElement("strong",null,"Score Gym"))),s.a.createElement("img",{href:"#",alt:"header img placeholder"})))}}]),a}(s.a.Component),Te=a(82),Me=[],Re=[{half:1.3333333333333333,quarter:.6666666666666666,eighth:.3333333333333333,sixteenth:.16666666666666666,thirty:.08333333333333333},{quarter:.8,eighth:.4,sixteenth:.2,thirty:.1}],Le=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={bars:[],barsQuant:8,measure:"four_quarters",pauseValue:10,easyOBProb:20,tripletValue:90,groupRest:!0,bpm:70,fixingBeatProb:70,easyGrouping:95,linkIns:!0,linkOut:50,lvl:2,simpleK:50,dotsK:-.1,groupK:60,beat:!0,beatNumb:!0,beamNum:1,receivedVal:[],showBeat:!1,noteValues:{whole:5,half:11,quarter:15,eighth:35,sixteenth:36,thirtySecond:0},dottedValues:{whole:-.1,half:5,quarter:10,eighth:30,sixteenth:0,thirtySecond:0},groupingValues:{whole:-.1,half:3,quarter:10,eighth:12},simValIns:{whole:-.1,half:5,quarter:15,eighth:20,sixteenth:25,thirtySecond:0},quintepletMap:{whole:-.1,half:5,quarter:15,eighth:0},metronomeSwitch:!1,mistakes:null,beatReadN:null,mode:null,tips:!0},n.tick01=s.a.createRef(),n.tick02=s.a.createRef(),n.note01=s.a.createRef(),n.new=s.a.createRef(),n.beatShow=s.a.createRef(),n.num=s.a.createRef(),n.clearScores=s.a.createRef(),n.beginner=n.beginner.bind(Object(u.a)(n)),n.intermediate=n.intermediate.bind(Object(u.a)(n)),n.expert=n.expert.bind(Object(u.a)(n)),n.nextGen=n.nextGen.bind(Object(u.a)(n)),n.beat=n.beat.bind(Object(u.a)(n)),n.beatNumb=n.beatNumb.bind(Object(u.a)(n)),n.beatReading=n.beatReading.bind(Object(u.a)(n)),n.beatReadingFunc=n.beatReadingFunc.bind(Object(u.a)(n)),n.stop=n.stop.bind(Object(u.a)(n)),n.beatInput=n.beatInput.bind(Object(u.a)(n)),n.beatInputFunc=n.beatInputFunc.bind(Object(u.a)(n)),n.beatInputListener=n.beatInputListener.bind(Object(u.a)(n)),n.settings=n.settings.bind(Object(u.a)(n)),n.info=n.info.bind(Object(u.a)(n)),n.scrollHUD=n.scrollHUD.bind(Object(u.a)(n)),n.clearBars=n.clearBars.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"beginner",value:function(){var e=this;this.setState({barsQuant:4,measure:"four_quarters",pauseValue:5,easyOBProb:50,bpm:50,linkIns:!0,linkOut:0,lvl:0,beamNum:1,groupRest:!1,settings:!1,noteValues:{whole:10,half:15,quarter:44,eighth:56,sixteenth:0,thirtySecond:0},mode:1,tips:this.props.state.tips}),setTimeout((function(){return e.props.updateState(e.state)}),50),setTimeout((function(){return be(e.state)}),50)}},{key:"intermediate",value:function(){var e=this;this.setState({barsQuant:8,measure:"four_quarters",pauseValue:10,easyOBProb:35,bpm:70,linkIns:!0,linkOut:50,lvl:1,beamNum:1,groupRest:!0,settings:!1,noteValues:{whole:5,half:11,quarter:44,eighth:56,sixteenth:64,thirtySecond:0},dottedValues:{whole:-.1,half:5,quarter:10,eighth:30,sixteenth:0,thirtySecond:0},simpleK:75,dotsK:95,mode:2,tips:this.props.state.tips}),setTimeout((function(){return e.props.updateState(e.state)}),50),setTimeout((function(){return be(e.state)}),50)}},{key:"expert",value:function(){var e=this;this.setState({barsQuant:16,measure:"four_quarters",pauseValue:10,easyOBProb:17,bpm:90,linkIns:!1,linkOut:70,lvl:2,beamNum:1,groupRest:!0,settings:!1,noteValues:{whole:5,half:11,quarter:20,eighth:56,sixteenth:64,thirtySecond:0},dottedValues:{whole:-.1,half:5,quarter:10,eighth:30,sixteenth:0,thirtySecond:0},groupingValues:{whole:-.1,half:3,quarter:10,eighth:12},quintepletMap:{whole:-.1,half:5,quarter:15,eighth:0},easyGrouping:95,tripletValue:90,simpleK:75,dotsK:80,groupK:100,mode:3,tips:this.props.state.tips}),setTimeout((function(){return e.props.updateState(e.state)}),50),setTimeout((function(){return be(e.state)}),50)}},{key:"settings",value:function(){document.querySelector(".settings--hook").style.pointerEvents="none",this.props.newState({settings:!this.props.state.settings}),this.state.metronomeSwitch&&setTimeout(this.stop,300)}},{key:"info",value:function(){document.querySelector(".info--hook").style.pointerEvents="none",this.props.newState({info:!this.props.state.info}),this.state.metronomeSwitch&&setTimeout(this.stop,300)}},{key:"nextGen",value:function(){var e=this;this.new.current.blur(),this.setState({mistakes:null}),console.clear(),_e=0;var t,a=[];switch(this.setState({bars:fe()}),setTimeout((function(){e.state.bars.forEach((function(e){e.forEach((function(e){if(/triplet/.test(e[0])?t=0:/quinteplet/.test(e[0])&&(t=1),!/triplet|quinteplet/.test(e[0])&&Array.isArray(e))if(Array.isArray(e[0]))for(var n in e)a.push([e[n][0],Re[t][e[n][0].match(/[a-z]+/).join("")]]);else a.push([e[0],e[1]])}))})),e.setState({receivedVal:a})}),50),this.state.mode){case 1:this.setState({beat:!0,beatNumb:!0});break;case 2:this.setState({beat:!0,beatNumb:!1});break;case 3:this.setState({beat:!1,beatNumb:!1});break;default:return}}},{key:"beat",value:function(){this.beatShow.current.blur(),this.setState({beat:!this.state.beat})}},{key:"beatNumb",value:function(){this.num.current.blur(),this.setState({beatNumb:!this.state.beatNumb})}},{key:"beatReading",value:function(e){var t=this;this.setState({metronomeSwitch:!0}),this.setState({mistakes:null}),Oe=0,Ne=[],qe=!1,ke=0,we=0,Se=0;var a=0;if((Ee=Array.from(document.querySelectorAll(".value"))).shift(),this.tick01.current.volume=.3,this.tick02.current.volume=.2,_e=q[this.props.state.measure]/(this.props.state.bpm/60)*1e3,this.tick01.current.play(),a+=_e/q[this.props.state.measure],"input"===e){for(Ne.push(setInterval((function(){t.tick01.current.play()}),_e));a<_e;)Ne.push(setTimeout((function(){t.tick02.current.play(),Ne.push(setInterval((function(){return t.tick02.current.play()}),_e))}),a)),a+=_e/q[this.props.state.measure];Ne.push(setTimeout(this.stop,(this.props.state.barsQuant+1)*_e-50))}else for(;a<_e;)Ne.push(setTimeout((function(){t.tick02.current.play()}),a)),a+=_e/q[this.props.state.measure];"input"===e?Ne.push(setTimeout(this.beatInputFunc,_e-100)):(Ne.push(setTimeout(this.beatReadingFunc,_e)),Oe--)}},{key:"beatReadingFunc",value:function(){var e=this;if(we>q[this.props.state.measure]-.1&&(we=0),we===q[this.props.state.measure]&&(we=0),ke||(Ee[0].classList.toggle("value--animation"),/--rest/.test(Ee[ke].className)||(Me[0].play(),Se++),ye=setTimeout(this.beatReadingFunc,1e3*this.state.receivedVal[ke][1]/(this.props.state.bpm/60))),console.log(we),!we||!ke){var t=0,a=q[this.props.state.measure]/(this.props.state.bpm/60)*1e3;for(this.tick01.current.play(),t+=a/q[this.props.state.measure];t<a;)Ne.push(setTimeout((function(){e.tick02.current.play()}),t)),t+=a/q[this.props.state.measure];if(!ke)return we+=this.state.receivedVal[ke][1],void ke++}ke<Ee.length-1?ye=setTimeout(this.beatReadingFunc,1e3*this.state.receivedVal[ke][1]/(this.props.state.bpm/60)):setTimeout(this.stop,1e3*this.state.receivedVal[ke][1]/(this.props.state.bpm/60)),Ee[ke].classList.toggle("value--animation"),/--rest/.test(Ee[ke].className)||ke&&/^[\d]/.test(this.state.receivedVal[ke-1][0])||Me[Se].play(),we+=this.state.receivedVal[ke][1],ke++,++Se===Me.length-1&&(Se=0)}},{key:"beatInput",value:function(){0,this.props.newState({metronomeSwitch:!0}),document.addEventListener("keydown",this.beatInputListener),this.beatReading("input")}},{key:"beatInputListener",value:function(){!qe||/--rest/.test(Ee[ke].className)||0!==ke&&/^[\d]/.test(this.state.receivedVal[ke-1][0])?(!qe||qe&&(/--rest/.test(Ee[ke].className)||0===ke||/^[\d]/.test(this.state.receivedVal[ke-1][0])))&&(Oe++,qe=!1):(Ee[ke].classList.toggle("value--animation"),qe=!1)}},{key:"beatInputFunc",value:function(){var e=this;qe=!0,Ne.push(setTimeout((function(){!qe||/--rest/.test(Ee[ke].className)||0!==ke&&/^[\d]/.test(e.state.receivedVal[ke-1][0])||Oe++,ke++,qe=!1}),1e3*this.state.receivedVal[ke][1]/(this.props.state.bpm/60)*90/100)),ke<Ee.length-1&&(ye=setTimeout(this.beatInputFunc,1e3*this.state.receivedVal[ke][1]/(this.props.state.bpm/60)))}},{key:"stop",value:function(e){for(var t in this.props.state.info||this.props.state.settings||e||this.setState({mistakes:Oe}),document.removeEventListener("keydown",this.beatInputListener),this.setState({metronomeSwitch:!1}),Ne)clearTimeout(Ne[t]),clearInterval(Ne[t]);for(var a in Ee)Ee[a].classList.contains("value--animation")&&Ee[a].classList.toggle("value--animation");clearTimeout(ye)}},{key:"scrollHUD",value:function(){document.addEventListener("scroll",(function(){var e=document.querySelector(".main_page").offsetTop;window.scrollY>e/4?document.querySelector("nav").classList.add("nav--sticky"):document.querySelector("nav").classList.remove("nav--sticky")}))}},{key:"clearBars",value:function(){this.setState({bars:[]}),this.clearScores.current.blur()}},{key:"componentDidMount",value:function(){be(this.props.state);for(var e=0;e<20;e++){var t=this.note01.current;t.volume=.2,Me.push(t);var a=t.cloneNode(!0);a.volume=.2,Me.push(a)}this.scrollHUD()}},{key:"render",value:function(){var e=this,t=this.state.bars;return s.a.createElement("div",null,this.props.state.settings?s.a.createElement(je,null):null,this.props.state.info?s.a.createElement(Ie,null):null,s.a.createElement("div",{style:{overflow:"hidden"}},s.a.createElement(Ae,null),s.a.createElement("nav",null,s.a.createElement("div",{className:"nav--hook--inv"}),s.a.createElement("div",{className:"nav--hook"}),s.a.createElement("div",{className:"button__holder"},s.a.createElement("div",{className:"btn-group m-1"},s.a.createElement("button",{disabled:1===this.props.state.mode||this.state.metronomeSwitch,className:"btn btn-dark",onClick:this.beginner},s.a.createElement("span",{id:"beginner"},"Beginner")),this.props.state.tips?s.a.createElement(Te.a,{target:"beginner",placement:"top"},"Only simple values"):null,s.a.createElement("button",{disabled:2===this.props.state.mode||this.state.metronomeSwitch,className:"btn btn-dark",onClick:this.intermediate},s.a.createElement("span",{id:"intermediate"},"Intermediate")),this.props.state.tips?s.a.createElement(Te.a,{target:"intermediate",placement:"top"},"+ dotted values"):null,s.a.createElement("button",{disabled:3===this.props.state.mode||this.state.metronomeSwitch,className:"btn btn-dark",onClick:this.expert},s.a.createElement("span",{id:"expert"},"Expert")),this.props.state.tips?s.a.createElement(Te.a,{target:"expert",placement:"top"},"+ triplets and quinteplets"):null),s.a.createElement("button",{disabled:!this.state.bars.length||this.state.metronomeSwitch,className:"btn btn-dark btn-sm btn__clear",onClick:this.clearBars,ref:this.clearScores},s.a.createElement("span",{id:"clearScores"},"\u2715")),this.props.state.tips?s.a.createElement(Te.a,{target:"clearScores",placement:"right"},"Clear the score board"):null,s.a.createElement("br",null),s.a.createElement("div",{className:"btn-group"},s.a.createElement("button",{className:"btn btn-dark",onClick:this.nextGen,disabled:this.state.metronomeSwitch,ref:this.new},s.a.createElement("span",{id:"new"},"New")),this.props.state.tips?s.a.createElement(Te.a,{target:"new",placement:"top"},"Generate new bars"):null,s.a.createElement("button",{className:"btn btn-dark",onClick:this.beat,ref:this.beatShow},s.a.createElement("span",{id:"beat"},"Beat")),this.props.state.tips?s.a.createElement(Te.a,{target:"beat",placement:"top"},"Show the position of beat"):null,s.a.createElement("button",{className:"btn btn-dark",disabled:!this.state.beat,onClick:this.beatNumb,ref:this.num},s.a.createElement("span",{id:"num"},"Num")),this.props.state.tips?s.a.createElement(Te.a,{target:"num",placement:"top"},"Show the number of the beat"):null,s.a.createElement("button",{className:"btn btn-dark",onClick:this.beatReading,disabled:this.state.bars.length<1||this.state.metronomeSwitch},s.a.createElement("span",{id:"reading"},"Reading")),this.props.state.tips?s.a.createElement(Te.a,{target:"reading",placement:"top"},"Listen to the rhytm"):null,s.a.createElement("button",{className:"btn btn-dark",onClick:this.stop,disabled:!this.state.metronomeSwitch},s.a.createElement("span",{id:"stop"},"Stop")),this.props.state.tips?s.a.createElement(Te.a,{target:"stop",placement:"top"},"Stop metronome"):null,s.a.createElement("button",{className:"btn btn-dark",onClick:this.beatInput,disabled:this.state.bars.length<1||this.state.metronomeSwitch},s.a.createElement("span",{id:"practice"},"Practice")),this.props.state.tips?s.a.createElement(Te.a,{target:"practice",placement:"top"},"Play note values with your keyboard (any key)"):null))),s.a.createElement("div",{className:"main_page"},s.a.createElement("div",null,s.a.createElement("audio",{ref:this.tick01},s.a.createElement("source",{src:v.a,type:"audio/mpeg"})),s.a.createElement("audio",{ref:this.tick02},s.a.createElement("source",{src:E.a,type:"audio/mpeg"})),s.a.createElement("audio",{ref:this.note01},s.a.createElement("source",{src:S.a,type:"audio/mpeg"}))),s.a.createElement("div",{className:"settings--hook",onMouseOver:this.settings},"Settings"),s.a.createElement("div",{className:"info--hook",onMouseOver:this.info},"Info"),s.a.createElement("div",{className:"score_body"},s.a.createElement("div",{className:"score"},t.map((function(a,n){var r=0,i=0;return s.a.createElement("div",{className:t.length-1===n?"bar bar_last":0===n?"bar bar_first":"bar",key:String(n)},s.a.createElement("div",{className:"bar__inside"},a.map((function(t,o){if(o+1<=a.length-1&&Array.isArray(a[o+1][0]))return r+=t[1],s.a.createElement("div",{style:{position:"relative",height:"118px"},key:String(n)+"_"+o},s.a.createElement("span",{className:"tuplet__num"},/triplet/.test(t[0])?3:5),(0===o&&Array.isArray(t)||1===o&&r===t[1]||Number.isInteger(r-t[1])||o===a.length-1&&t[1]===e.state.beamNum)&&i<q[e.props.state.measure]?s.a.createElement("div",{key:r+t[0],className:"beat",style:e.state.beat?/rest|whole/.test(t[0])?{opacity:"100%",top:"100%",left:"5px"}:/--end/.test(t[0])?{opacity:"100%",left:"10px"}:{opacity:"100%"}:{opacity:"0%"}},s.a.createElement("div",{style:e.state.beatNumb?{opacity:"1"}:{opacity:"0"}},r-t[1]+1),s.a.createElement("span",{style:{display:"none"}},i++)):null,s.a.createElement("div",{className:/triplet/.test(t[0])?"triplet":"quinteplet"},a[o+1].map((function(e,t){return t?t===a[o+1].length-1?s.a.createElement("div",{className:"value "+e[0],style:{marginRight:"0"},key:e[0]+String(n)+t}):s.a.createElement("div",{className:"value "+e[0],key:e[0]+String(n)+t}):s.a.createElement("div",{className:"value "+e[0],style:{marginLeft:"0"},key:e[0]+String(n)+t})}))));if(!Array.isArray(t[0])){var l,u=null;if(Array.isArray(t)&&("0"===t[0][0]||"1"===t[0][0])){var c=t[0].split("");u=Number(c.slice(0,1)),t[0]=c.join("")}if(Array.isArray(t)){var h=t[0].split("");h.reverse(),l=h.slice(0,3).join(""),r+=t[1]}return s.a.createElement("div",{className:Array.isArray(t)?"value "+t[0].match(/\D+[\d]*.+/).join(""):"value  "+e.props.state.measure,key:n+o+t[0]},s.a.createElement(Pe,{link:u,ch:l,ind:o,bars:e.state.bars}),(0===o&&Array.isArray(t)||1===o&&r===t[1]||Number.isInteger(r-t[1])||o===a.length-1&&t[1]===e.state.beamNum)&&i<q[e.props.state.measure]?s.a.createElement("div",{key:r+t[0],className:"beat",style:e.state.beat?/rest|whole/.test(t[0])?{opacity:"100%",top:"100%",left:"5px"}:/--end/.test(t[0])?{opacity:"100%",left:"10px"}:{opacity:"100%"}:{opacity:"0%"}},s.a.createElement("div",{style:e.state.beatNumb?{opacity:"1"}:{opacity:"0"}},r-t[1]+1),s.a.createElement("span",{style:{display:"none"}},i++)):null)}}))))}))),s.a.createElement("div",{className:"mistakes",style:{opacity:null!==this.state.mistakes&&Oe>=0&&this.state.bars.length?"1":"0"}},"Mistakes: ",this.state.mistakes)))))}}]),a}(s.a.Component),Pe=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"shouldComponentUpdate",value:function(e){return this.props.bars!==e.bars}},{key:"render",value:function(){var e=null;return"dne"===this.props.ch&&0===this.props.link&&(e={left:"38px",width:"15px",top:"-21px",height:"40px"}),s.a.createElement("div",null,null!==this.props.link?s.a.createElement("div",{style:e,key:this.props.ch+this.props.ind,className:0===this.props.link?"linked_in":"linked_out"}):null)}}]),a}(s.a.Component),Ce=Object(f.b)(d,b)(Le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=a(15),Be=Object(De.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=Object(p.a)({},e);switch(t.type){case"CHANGE":var n=Object.keys(t.newState);return a[n]=t.newState[n],a;case"UPDATE":return t.newState;default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(s.a.createElement(f.a,{store:Be},s.a.createElement(s.a.StrictMode,null,s.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.48b55a42.chunk.js.map