(this.webpackJsonpmygrid=this.webpackJsonpmygrid||[]).push([[0],{353:function(e){e.exports=JSON.parse('[{"id":1,"description":"1ST.STAGE SEAL GAS PRESSURE SWITCH PSLL1515A 6011760E403","code":"50414","type":"HR","parentId":null},{"id":2,"description":"STAGE","code":"20246","type":"HR","parentId":null},{"id":3,"description":"2 * 8 ANALOG INPUT (4-20MA DAI05) 37131-4-0336025  IN PANEL 330-EC01 E408170910204","code":"50414","type":"ASSETINLOCATION","parentId":null},{"id":4,"description":"1ST.STAGE TRU BEARING TEMPERATURE TE01.61B 8010120E427","code":"0E427","type":"PROD","parentId":null},{"id":5,"description":"2 * 8 ANALOG INPUT (4-20MA DAI05) 37131-4-0336025  IN PANEL 330-EC01 E408170910204","code":"STAGE","type":"TEC","parentId":3},{"id":6,"description":"STAGE","code":"0E401","type":"TEC","parentId":1},{"id":7,"description":"2 * 8 ANALOG INPUT (4-20MA DAI05) 37131-4-0336025  IN PANEL 330-EC01 E408170910204","code":"STAGE","type":"PROD","parentId":3},{"id":8,"description":"1ST.STAGE TRU BEARING TEMPERATURE TE01.61B 8010120E427","code":"STAGE","type":"PROD","parentId":3},{"id":9,"description":"2 * 8 ANALOG INPUT (4-20MA DAI05) 37131-4-0336025  IN PANEL 330-EC01 E408170910204","code":"20246","type":"PROD","parentId":1}]')},362:function(e,t,a){e.exports=a(427)},427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=a(52),l=a(94),d=a(69),u=a(457),s=a(234),f=a.n(s),p=a(334),E=a(226),m=a.n(E),b=a(338),g=a.n(b),O=a(348),R=a.n(O),A=a(339),S=a.n(A),h=a(346),w=a.n(h),T=a(237),j=a.n(T),v=a(236),y=a.n(v),C=a(340),I=a.n(C),P=a(341),N=a.n(P),D=a(343),x=a.n(D),L=a(344),k=a.n(L),G=a(345),M=a.n(G),U=a(349),F=a.n(U),B=a(342),z=a.n(B),H=a(347),J=a.n(H),W=a(350),Q=a.n(W),V=a(351),q=a.n(V),K=a(352),X=a.n(K),Y=a(108),Z=a(451),$={Add:r.a.forwardRef((function(e,t){return r.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:r.a.forwardRef((function(e,t){return r.a.createElement(S.a,Object.assign({},e,{ref:t}))})),Clear:r.a.forwardRef((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Delete:r.a.forwardRef((function(e,t){return r.a.createElement(I.a,Object.assign({},e,{ref:t}))})),DetailPanel:r.a.forwardRef((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),Edit:r.a.forwardRef((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),Export:r.a.forwardRef((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t,onClick:function(e){return alert("SaveAlt Click me")}}))})),Filter:r.a.forwardRef((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),FirstPage:r.a.forwardRef((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),LastPage:r.a.forwardRef((function(e,t){return r.a.createElement(M.a,Object.assign({},e,{ref:t}))})),NextPage:r.a.forwardRef((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),PreviousPage:r.a.forwardRef((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))})),ResetSearch:r.a.forwardRef((function(e,t){return r.a.createElement(y.a,Object.assign({},e,{ref:t}))})),Search:r.a.forwardRef((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),SortArrow:r.a.forwardRef((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:r.a.forwardRef((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),ViewColumn:r.a.forwardRef((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))}))};var _=Object(Y.a)({overrides:{MuiToolbar:{root:{direction:"ltr"}},MuiTableRow:{root:{fontFamily:"IRANSans-web",fontSize:10,height:60},head:{height:40,borderBottom:"1px solid #c7c7c7"}},MuiTableCell:{root:{padding:"0 4px",textAlign:"center"},body:{fontSize:"11px"},head:{fontSize:"0.7rem",height:60},alignLeft:{textAlign:"center"}},MuiTablePagination:{caption:{fontSize:"11px"}},MuiTableSortLabel:{root:{color:"#263238",alignContent:"center"}}}});function ee(e){var t=r.a.createRef(),a=e.icons,n=e.columns,o=e.data,c=e.actions,u=e.editable,s=(e.title,e.endpoint,e.url),E=e.gridLoad,b=(e.formItemsAdd,e.formItemsEdit,e.options),g=e.parentChildData,O=e.detailPanel,R=e.onTreeExpandChange,A=r.a.useState({data:o}),S=Object(d.a)(A,2),h=S[0],w=S[1],T=r.a.useState(!1),j=Object(d.a)(T,2);j[0],j[1];function v(){return(v=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=3;break}return e.next=3,(void 0).then((function(e){console.log("loadWebService 2"),200===e.status&&(console.log("response",e.status,e.data.content),w(Object(i.a)(Object(i.a)({},h),{},{data:e.data.content})),console.log("loadWebService 3",e))}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){console.log("Data Table"),function(){v.apply(this,arguments)}()}),[E]),console.log("MaterialTable is rendring",h.data),r.a.createElement(Z.a,{theme:_},r.a.createElement("div",{className:"version-2"},r.a.createElement(m.a,{icons:a||$,tableRef:t,title:"",columns:n,data:s&&Array.isArray(h.data)?h.data:o||function(e){return new Promise((function(e,t){try{new URL(s)}catch(a){t({data:null,page:0,totalCount:0,error:"invalid URL |"})}(void 0).then((function(a){200===a.status?(console.log("data",a.data.content),e({data:a.data.content,page:a.data.number,totalCount:a.data.totalElements})):t({data:null,page:0,totalCount:0})}))}))},editable:u,actions:[{isFreeAction:!0,icon:function(){return r.a.createElement(q.a,null)},tooltip:"\u0645\u0646\u0648\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631",onClick:function(e,t){}},{isFreeAction:!0,icon:function(){return r.a.createElement(X.a,null)},tooltip:"\u0628\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc",onClick:function(e,a){return t.current&&t.current.onQueryChange()}}].concat(Object(l.a)(c)),localization:{pagination:{labelDisplayedRows:"{from}-{to} ",labelRowsPerPage:"\u0633\u0637\u0631\u0647\u0627 \u062f\u0631 \u0635\u0641\u062d\u0647:",labelRowsSelect:"\u0633\u0637\u0631\u0647\u0627"},toolbar:{nRowsSelected:"{0} \u0633\u0637\u0631(\u0647\u0627) \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f\u0647",searchPlaceholder:"\u062c\u0633\u062a\u062c\u0648"},header:{actions:"\u0639\u0645\u0644\u06cc\u0627\u062a"},body:{emptyDataSourceMessage:"\u0631\u06a9\u0648\u0631\u062f\u06cc \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",filterRow:{filterTooltip:"\u0641\u06cc\u0644\u062a\u0631"}}},options:Object(i.a)(Object(i.a)({},b),{},{headerStyle:{fontFamily:"IRANSans-web",fontSize:12},toolbarButtonAlignment:"left",toolbarAlignment:"left"}),parentChildData:g,onTreeExpandChange:R,detailPanel:O})))}var te=a(231),ae=a.n(te),ne=a(452),re=a(453),oe=a(454),ce=a(458),ie=a(315),le=a(311),de=a(233),ue=a(299);function se(e){var t=e.onSave,a=r.a.useState({}),n=Object(d.a)(a,2),o=n[0],c=n[1];return r.a.createElement(u.a,{container:!0,spacing:1},r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(le.a,{label:"description",placeholder:"description",value:o.description,onChange:function(e){return c(Object(i.a)(Object(i.a)({},o),{},{description:e.target.value}))}})),r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(le.a,{label:"code",placeholder:"code",value:o.code,onChange:function(e){return c(Object(i.a)(Object(i.a)({},o),{},{code:e.target.value}))}})),r.a.createElement(u.a,{item:!0,xs:12,md:4},r.a.createElement(de.a,{value:o.type,onChange:function(e,t){return console.log(e,t)}},r.a.createElement(ue.a,{value:"TEC"},"TEC"),r.a.createElement(ue.a,{value:"PROD"},"PROD"),r.a.createElement(ue.a,{value:"HR"},"HR"),r.a.createElement(ue.a,{value:"ASSETINLOCATION"},"ASSETINLOCATION"))),r.a.createElement(u.a,{item:!0,xs:12,md:12},r.a.createElement(ie.a,{variant:"contained",color:"primary",onClick:function(){t({description:o.description,code:o.code,type:o.type})}},"Save")))}function fe(e){var t=e.type,a=(e.columns,e.onClose),n=e.onSave,o=r.a.useState(!0),c=Object(d.a)(o,2);c[0],c[1];return r.a.createElement(r.a.Fragment,null,"dialog"===t&&r.a.createElement(ne.a,{open:!0,onClose:a},r.a.createElement(ce.a,null,"Title of Dialog"),r.a.createElement(re.a,null,r.a.createElement(se,{type:t,onSave:function(e){n(e),a()}})),r.a.createElement(oe.a,null)),"detail"===t&&r.a.createElement(se,{type:t,onSave:function(){n()}}))}function pe(e){var t=r.a.useState(!1),a=Object(d.a)(t,2),n=a[0],o=a[1],c=r.a.useState(e.data),s=Object(d.a)(c,2),f=s[0],p=s[1],E=r.a.useState(null),m=Object(d.a)(E,2),b=m[0],g=m[1],O=r.a.useState(),R=Object(d.a)(O,2),A=R[0],S=R[1],h=[{title:"description",field:"description",render:function(e){return"PROD"===e.type?r.a.createElement("a",{href:"http://aaaa",target:"blank"},e.description):e.description}},{title:"code",field:"code"},{title:"type",field:"type"}],w=[{icon:ae.a,tooltip:"Add a row on tree",onClick:function(e,t){S(t),o(!0)}}],T={onRowAdd:function(e){return new Promise((function(t,a){console.log("onRowAdd",e);try{var n=0;f.forEach((function(e){e.id>n&&(n=e.id)}));var r=[].concat(Object(l.a)(f),[Object(i.a)(Object(i.a)({},e),{},{id:n+1,parentId:null})]);p(r),t()}catch(o){alert(o),a()}}))},onRowUpdate:function(e,t){return new Promise((function(a,n){try{var r=Object(l.a)(f),o=r.indexOf(t);console.log("onRowUpdate",e,t,o),void 0!==o&&o>=0?(r.splice(o,1,e),p(r)):(alert("failed because it cannot find the node"),n()),a()}catch(c){alert(c),n()}}))},onRowDelete:function(e){return new Promise((function(t,a){console.log("onRowDelete",e);try{if(e.tableData.childRows)alert("you can delete data, it has childs"),a();else{var n=Object(l.a)(f);console.log("dataDelete 1",n.length);var r=e.tableData.id;n.splice(r,1),console.log("dataDelete 2",n.length),p(Object(l.a)(n)),t()}}catch(o){a()}}))}};return[{icon:"add",tooltip:"Add on Row",render:function(e){return console.log(e),r.a.createElement(fe,{type:"detail"})}}],console.log("Options is rendering",f.length),r.a.createElement(u.a,{container:!0,spacing:1},"count:",f.length,r.a.createElement(u.a,{item:!0,xs:12,md:12},r.a.createElement(ee,{columns:h,data:f,actions:w,parentChildData:function(e,t){return t.find((function(t){return t.id===e.parentId}))},editable:T,onTreeExpandChange:function(e,t){t&&g(e)},options:{rowStyle:function(e,t){if(b&&b.id===e.parentId)return{backgroundColor:"#ff0011"}},cellStyle:function(e,t){return{backgroundColor:e===t.description&&"PROD"===t.type?"#EEE":"#FFF"}}}}),n&&r.a.createElement(fe,{type:"dialog",onClose:function(){return o(!1)},onSave:function(e){var t=0;f.forEach((function(e){e.id>t&&(t=e.id)}));var a=Object(i.a)(Object(i.a)({},e),{},{parentId:A.id,id:t+1});console.log("add a row as node",a);var n=[].concat(Object(l.a)(f),[a]);p(n)}})))}var Ee=a(353);function me(){return r.a.createElement("div",null,r.a.createElement(pe,{data:Ee}))}c.a.render(r.a.createElement(me,null),document.getElementById("root"))}},[[362,1,3]]]);
//# sourceMappingURL=main.1d307882.chunk.js.map