(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/inf01.4c76c8f3.png"},15:function(e,t,a){e.exports=a.p+"static/media/inf02.c568ebdc.png"},16:function(e,t,a){e.exports=a.p+"static/media/inf03.74511d91.png"},17:function(e,t,a){e.exports=a.p+"static/media/Logo_design_var02_01.3f662545.png"},21:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),s=a.n(i),o=(a(13),a(19)),r=a(2),c=a(3),d=a(1),m=a(4),u=a(5),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"day__container",style:this.props.style},l.a.createElement("div",{id:"ghost"},l.a.createElement("div",{className:"ghost__chart"},l.a.createElement("em",null,l.a.createElement("p",{id:"ghost__inner"})))),l.a.createElement("div",{className:"day__header"},l.a.createElement("h1",null,this.props.info.day)),l.a.createElement("div",{className:"day__chart"},this.props.info.data[0]?this.props.info.data.map((function(t,a){return 1===t[1][1].length|!t[1][1]?l.a.createElement("div",null,l.a.createElement("div",{onClick:e.props.edit,id:[e.props.num,a],className:"day__data",onMouseMove:e.props.mouse_in,onMouseOut:e.props.mouse_out},l.a.createElement("p",{id:[e.props.num,a]},t[1][0],"-0",t[1][1],": ",t[2])),l.a.createElement("div",{className:"for--button"},l.a.createElement("button",{onClick:e.props.delete,className:"button",key:t[1][0]+a,value:a,id:e.props.num},l.a.createElement("i",{value:a,id:e.props.num,className:"fas fa-minus-square fa-lg"})))):l.a.createElement("div",null,l.a.createElement("div",{onClick:e.props.edit,id:[e.props.num,a],className:"day__data",onMouseMove:e.props.mouse_in,onMouseOut:e.props.mouse_out},l.a.createElement("p",{id:[e.props.num,a]},t[1][0],"-",t[1][1],": ",t[2])),l.a.createElement("div",{className:"for--button"},l.a.createElement("button",{onClick:e.props.delete,className:"button",key:t[1][0]+a,value:a,id:e.props.num},l.a.createElement("i",{value:a,id:e.props.num,className:"fas fa-minus-square fa-lg"}))))})):l.a.createElement("h2",{className:"day__chart--font"},"no notes")))}}]),a}(l.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal__day",onClick:this.props.closePop}),l.a.createElement("div",{className:"modal__inside"},l.a.createElement("button",{className:"modal__button",onClick:this.props.closePop},l.a.createElement("i",{style:{marginTop:"1px"},className:"far fa-window-close fa-lg"})),l.a.createElement("h1",null,"Make a note"),l.a.createElement("div",{className:"modal__container"},l.a.createElement("div",{className:"modal__block",id:"week",style:{alignItems:"flex-start"}},l.a.createElement("div",{style:{order:this.props.style[0]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"sun",name:"day",value:"sun",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"sun"},l.a.createElement("p",null,"Sunday"))),l.a.createElement("div",{style:{order:this.props.style[1]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"mon",name:"day",value:"mon",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"mon"},l.a.createElement("p",null,"Monday"))),l.a.createElement("div",{style:{order:this.props.style[2]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"tue",name:"day",value:"tue",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"tue"},l.a.createElement("p",null,"Tuesday"))),l.a.createElement("div",{style:{order:this.props.style[3]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"wed",name:"day",value:"wed",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"wed"},l.a.createElement("p",null,"Wednesday"))),l.a.createElement("div",{style:{order:this.props.style[4]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"thu",name:"day",value:"thu",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"thu"},l.a.createElement("p",null,"Thursday"))),l.a.createElement("div",{style:{order:this.props.style[5]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"fri",name:"day",value:"fri",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"fri"},l.a.createElement("p",null,"Friday"))),l.a.createElement("div",{style:{order:this.props.style[6]},className:"modal__label"},l.a.createElement("input",{type:"radio",id:"sat",name:"day",value:"sat",onClick:this.props.change}),l.a.createElement("label",{htmlFor:"sat"},l.a.createElement("p",null,"Saturday")))),l.a.createElement("div",{className:"modal__block",id:"time"},l.a.createElement("p",{style:{marginTop:"0px"}},"Time"),l.a.createElement("div",{style:{flexDirection:"row"}},l.a.createElement("input",{value:this.props.value.inputTime[0],type:"number",id:"hours",name:"time",min:0,max:23,style:{width:"35px",height:"20px"},onChange:this.props.change}),l.a.createElement("input",{value:this.props.value.inputTime[1],type:"number",id:"minutes",name:"time",min:0,max:59,style:{width:"35px",height:"20px"},onChange:this.props.change,placeholder:"00"}))),l.a.createElement("div",{className:"modal__block",id:"theme"},l.a.createElement("p",{style:{marginTop:"0px"}},"Event"),l.a.createElement("input",{value:this.props.value.inputTheme,type:"text",id:"theme",name:"theme",size:"18",maxLength:"23",placeholder:"23 symbols only",onChange:this.props.change})),l.a.createElement("div",{className:"modal__block"},l.a.createElement("p",{style:{marginTop:"0px",width:"700px"}},"Note"),l.a.createElement("textarea",{value:this.props.value.inputText,onChange:this.props.change,className:"modal__note",name:"text",rows:"10",columns:"20",maxLength:"200",placeholder:"200 symbols only"}))),l.a.createElement("button",{className:"button__submit",onClick:this.props.submit},"Add"),l.a.createElement("button",{className:"button__submit",onClick:this.props.closePop},"Cancel")))}}]),a}(l.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal__day",onClick:this.props.close}),l.a.createElement("div",{className:"modal__inside"},l.a.createElement("button",{className:"modal__button",onClick:this.props.close},l.a.createElement("i",{style:{marginTop:"1px"},class:"far fa-window-close fa-lg"})),l.a.createElement("h1",null,"Editing"),l.a.createElement("div",{className:"modal__container"},l.a.createElement("div",{className:"modal__block",style:{height:"30px"},id:"time"},l.a.createElement("p",{style:{marginTop:"0px"}},"Time"),l.a.createElement("div",{style:{flexDirection:"row"}},l.a.createElement("input",{defaultValue:this.props.data[1][0],type:"number",id:"hours",name:"time",min:0,max:23,style:{width:"35px",height:"20px"},onChange:this.props.change}),l.a.createElement("input",{defaultValue:this.props.data[1][1],type:"number",id:"minutes",name:"time",min:0,max:59,style:{width:"35px",height:"20px"},onChange:this.props.change,placeholder:"00"}))),l.a.createElement("div",{className:"modal__block",style:{height:"30px"},id:"theme"},l.a.createElement("p",{style:{marginTop:"0px"}},"Event"),l.a.createElement("input",{defaultValue:this.props.data[2],type:"text",id:"theme",name:"theme",size:"18",maxLength:"23",placeholder:"23 symbols only",onChange:this.props.change})),l.a.createElement("div",{className:"modal__block"},l.a.createElement("p",{style:{marginTop:"0px",width:"700px"}},"Note"),l.a.createElement("textarea",{defaultValue:this.props.data[3],onChange:this.props.change,className:"modal__note",name:"text",rows:"10",columns:"20",maxLength:"200",placeholder:"200 symbols only"}))),l.a.createElement("button",{className:"button__submit",onClick:this.props.submit},"Edit"),l.a.createElement("button",{className:"button__submit",onClick:this.props.close},"Cancel")))}}]),a}(l.a.Component),y=a(14),v=a.n(y),b=a(15),_=a.n(b),f=a(16),g=a.n(f),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"modal__day",onClick:this.props.close}),l.a.createElement("div",{className:"modal__inside"},l.a.createElement("button",{className:"modal__button",onClick:this.props.close},l.a.createElement("i",{style:{marginTop:"1px"},className:"far fa-window-close fa-lg"})),l.a.createElement("h1",null,"Info"),l.a.createElement("div",{className:"modal__container info"},l.a.createElement("div",{style:{textAlign:"center",margin:"0 10px 0 10px"}},l.a.createElement("strong",null,"Week Planner",l.a.createElement("sup",null,"\xa9"))," is capable of making new notes, editing and deleting created notes."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,"For your convenience, you can change the first day of the week using this button. ",l.a.createElement("br",null),l.a.createElement("img",{className:"img__info",src:v.a,alt:"inf01"}))),l.a.createElement("li",null,l.a.createElement("div",null,'To add a new note click "New note", after that pick the day of the week, valid time (hours: 0-23, minutes: 0-59), write down your event, description (optional) and click "Add".')),l.a.createElement("li",null,l.a.createElement("div",null,"To see the description of the event simply put your cursor on the event. ",l.a.createElement("br",null),l.a.createElement("img",{className:"img__info",src:_.a,alt:"inf01"})," ",l.a.createElement("br",null),"You will see nothing if the description is absent.")),l.a.createElement("li",null,l.a.createElement("div",null,"Click on the created event to edit it. ",l.a.createElement("strong",null,"Week Planner",l.a.createElement("sup",null,"\xa9"))," will automatically arrange your events by time.")),l.a.createElement("li",null,l.a.createElement("div",null,'To delete click "minus" icon. ',l.a.createElement("br",null),l.a.createElement("img",{className:"img__info",src:g.a,alt:"inf01"}))),l.a.createElement("div",{style:{textAlign:"center",marginTop:"10px"}},"That's it! ",l.a.createElement("br",null)," Make your week busy with important things and ",l.a.createElement("em",null,l.a.createElement("strong",null,'"don\'t waste you time or time will waste you!"'))))),l.a.createElement("button",{className:"button__submit",onClick:this.props.close},"Merci!")))}}]),a}(l.a.Component),N=a(17),x=a.n(N),T=a(8),w=a(20),O={sun:{day:"SUNDAY",data:[]},mon:{day:"MONDAY",data:[]},tue:{day:"TUESDAY",data:[]},wed:{day:"WEDNESDAY",data:[]},thu:{day:"THURSDAY",data:[]},fri:{day:"FRIDAY",data:[]},sat:{day:"SATURDAY",data:[]}},M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={click:!0,day:[1,2,3,4,5,7,8],info:!1,"modal day":!1,"modal edit":!1,edit:null,inputDay:"",inputTime:[],inputTheme:"",inputText:""},n.handleInfo=n.handleInfo.bind(Object(d.a)(n)),n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.handleModalInput=n.handleModalInput.bind(Object(d.a)(n)),n.handleInput=n.handleInput.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.handleDelete=n.handleDelete.bind(Object(d.a)(n)),n.handleModalEdit=n.handleModalEdit.bind(Object(d.a)(n)),n.handleModalSubmit=n.handleModalSubmit.bind(Object(d.a)(n)),n.onMouseOver=n.onMouseOver.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"handleInfo",value:function(){this.setState({info:!this.state.info})}},{key:"handleClick",value:function(){var e=this;this.setState({click:!this.state.click});var t=document.getElementById("btn_click");!0===this.state.click?(t.style.right="-17px",setTimeout((function(){return e.setState({day:[8,1,2,3,4,5,7]})}),500)):(t.style.right="17px",setTimeout((function(){return e.setState({day:[1,2,3,4,5,7,8]})}),500))}},{key:"handleInput",value:function(e){switch(e.target.name){case"day":this.setState({inputDay:e.target.value});break;case"time":"hours"===e.target.id?this.setState({inputTime:[e.target.value,this.state.inputTime[1]]}):this.setState({inputTime:[this.state.inputTime[0],e.target.value]});break;case"theme":this.setState({inputTheme:e.target.value});break;case"text":this.setState({inputText:e.target.value});break;default:return}}},{key:"handleSubmit",value:function(){if(this.state.inputDay&&this.state.inputTime[0]&&this.state.inputTheme&&this.state.inputTime[0]<24){var e=this.state.inputDay,t=Object(o.a)(this.state.inputTime),a=this.state.inputTheme,n=this.state.inputText;t[1]||(t[1]=0),this.props.newNote([e,t,a,n]),document.getElementById(this.state.inputDay).checked=!1,document.getElementById("hours").value="",document.getElementById("minutes").value="",this.setState({inputDay:"",inputTime:[],inputTheme:"",inputText:"","modal day":!1})}else{alert("You should select the Day of the week, valid Time and type in Event to be able to add a new note");var l=document.getElementById("week"),i=document.getElementById("time"),s=document.getElementById("theme");l.classList.add("animation--red"),i.classList.add("animation--red"),s.classList.add("animation--red"),setTimeout((function(){l.classList.remove("animation--red")}),3e3),setTimeout((function(){i.classList.remove("animation--red")}),3e3),setTimeout((function(){s.classList.remove("animation--red")}),3e3)}}},{key:"handleModalInput",value:function(){this.setState({"modal day":!this.state["modal day"]})}},{key:"handleModalEdit",value:function(e){if(!1===this.state["modal edit"]){var t=this.props.data[e.target.id.split(",")[0]].data[e.target.id.split(",")[1]];this.setState({"modal edit":!0,edit:e.target.id.split(","),inputTime:t[1],inputTheme:t[2],inputText:t[3]})}else this.setState({"modal edit":!1,edit:null,inputTime:[],inputTheme:"",inputText:""})}},{key:"handleModalSubmit",value:function(){this.props.editNote([this.state.edit,this.state.inputTime,this.state.inputTheme,this.state.inputText]),this.setState({edit:null,inputTime:[],inputTheme:"",inputText:"","modal edit":!1})}},{key:"handleDelete",value:function(e){this.props.deleteNote([e.target.id,e.target.value])}},{key:"onMouseOver",value:function(e){var t=this.props.data[e.target.id.split(",")[0]].data[e.target.id.split(",")[1]][3];if(t){var a=document.getElementById("ghost"),n=document.getElementById("ghost__inner"),l=e.clientX,i=e.clientY;a.style.display="block",n.innerHTML=t,a.style.left=l+5+"px",a.style.top=i+-46+-(t.length/1.7-window.scrollY)+"px"}}},{key:"onMouseOut",value:function(){document.getElementById("ghost").style.display="none"}},{key:"render",value:function(){var e=this.props.data,t=this.state.info?l.a.createElement(k,{close:this.handleInfo}):null,a=this.state["modal day"]?l.a.createElement(p,{style:this.state.day,closePop:this.handleModalInput,change:this.handleInput,value:this.state,submit:this.handleSubmit}):null,n=this.state["modal edit"]?l.a.createElement(E,{close:this.handleModalEdit,change:this.handleInput,data:this.props.data[this.state.edit[0]].data[this.state.edit[1]],submit:this.handleModalSubmit}):null;return l.a.createElement("div",null,t,a,n,l.a.createElement("div",{id:"header"},l.a.createElement("img",{className:"img__logo",src:x.a,alt:"Week Planner"})),l.a.createElement("div",{className:"button__container"},l.a.createElement("div",{style:{height:"0px"}},l.a.createElement("div",{className:"button__click__container"},l.a.createElement("button",{id:"btn_click",className:"button__click",onClick:this.handleClick}))),l.a.createElement("button",{className:"button__add",onClick:this.handleModalInput},l.a.createElement("div",{className:"svg__container"},l.a.createElement("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",className:"border"},l.a.createElement("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"bg-line"}),l.a.createElement("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"hl-line"}))),l.a.createElement("span",null,"New note")),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("button",{id:"info",onClick:this.handleInfo},l.a.createElement("i",{className:"far fa-question-circle fa-2x"})))),l.a.createElement("div",{className:"container"},l.a.createElement(h,{info:e.sun,edit:this.handleModalEdit,delete:this.handleDelete,num:"sun",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[0]}}),l.a.createElement(h,{info:e.mon,edit:this.handleModalEdit,delete:this.handleDelete,num:"mon",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[1]}}),l.a.createElement(h,{info:e.tue,edit:this.handleModalEdit,delete:this.handleDelete,num:"tue",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[2]}}),l.a.createElement(h,{info:e.wed,edit:this.handleModalEdit,delete:this.handleDelete,num:"wed",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[3]}}),l.a.createElement(h,{info:e.thu,edit:this.handleModalEdit,delete:this.handleDelete,num:"thu",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[4]}}),l.a.createElement("div",{className:"flex__break"}),l.a.createElement(h,{info:e.fri,edit:this.handleModalEdit,delete:this.handleDelete,num:"fri",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[5]}}),l.a.createElement(h,{info:e.sat,edit:this.handleModalEdit,delete:this.handleDelete,num:"sat",mouse_in:this.onMouseOver,mouse_out:this.onMouseOut,style:{order:this.state.day[6]}})))}}]),a}(l.a.Component),C=Object(T.b)((function(e){return{data:e}}),(function(e){return{newNote:function(t){e(function(e){return{type:"ADD",data:e}}(t))},deleteNote:function(t){e(function(e){return{type:"DEL",data:e}}(t))},editNote:function(t){e(function(e){return{type:"EDT",data:e}}(t))}}}))(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(7),j=Object(D.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=Object(w.a)({},e);switch(t.type){case"ADD":return a[t.data[0]].data.push(t.data),a[t.data[0]].data.sort((function(e,t){return e[1][0]-t[1][0]})),a[t.data[0]].data.sort((function(e,t){if(e[1][0]===t[1][0])return e[1][1]-t[1][1]})),a;case"EDT":return a[t.data[0][0]].data[t.data[0][1]]=[[t.data[0][0]],t.data[1],t.data[2],t.data[3]],a[t.data[0][0]].data.sort((function(e,t){return e[1][0]-t[1][0]})),a[t.data[0][0]].data.sort((function(e,t){if(e[1][0]===t[1][0])return e[1][1]-t[1][1]})),a;case"DEL":return a[t.data[0]].data.splice(t.data[1],1),a;default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(l.a.createElement(T.a,{store:j},l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.1cefb059.chunk.js.map