"use strict";(self.webpackChunkdellace=self.webpackChunkdellace||[]).push([[1137,724],{61680:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var t=s(9950),l=(s(7692),s(6502)),n=s(28429),i=s(86781),c=s(68459),r=s(70724),o=s(52278),d=s(50632),m=s(92229),p=s(44414);const h=function(e){const{pagination:a=!0,hasLimit:s,handleLimitChange:h,noOfPage:g,sizePerPage:x,page:u,count:j,tableReset:b,tableData:N,tableColumns:f,param:v,defaultSort:_,header:k=!0,bordered:T=!1,setSizePerPage:C,tableLoader:D=!1,getSearchValue:P,searchPlaceholder:y="",isCard:w=!0,selectRow:F=!1,sizePerPagination:S=!0}=e,A=(0,n.zy)(),z=(0,n.Zp)(),{pathname:L}=A,[I,R]=(0,t.useState)(""),[O,E]=(0,t.useState)(!1),V=e=>{const a={...v};e&&(a.page=e),(0,o.r8)(a,z,L),b()};(0,t.useEffect)((()=>{const e=setTimeout((()=>{(I.length>=3||0===I.length)&&O&&(P(I),V(1))}),700);return()=>{clearTimeout(e)}}),[I]),(0,t.useEffect)((()=>{E(!0)}),[]);const Z=e=>{R(e)},q={page:u,sizePerPage:x},B=()=>(0,p.jsx)(d.TD,{}),G=()=>(0,p.jsx)("div",{className:"text-center",children:"No Record Found"});return(0,p.jsx)("div",{className:"nk-block",children:(0,p.jsx)("div",{className:"".concat(w?"card":""," position-static"),children:(0,p.jsx)("div",{className:"card-inner",children:(0,p.jsx)("div",{className:"common-table",children:(0,p.jsxs)("div",{className:"dataTables_wrapper dt-bootstrap4 no-footer",children:[k&&(0,p.jsxs)(i.A,{className:"justify-between g-2",children:[(0,p.jsx)(c.A,{xs:"8",md:"6",className:"text-start",children:(0,p.jsx)("div",{id:"DataTables_Table_0_filter",className:"dataTables_filter",children:y?(0,p.jsx)(m.nN,{placement:"topLeft",promptText:"Search by ".concat(y),children:(0,p.jsx)("label",{children:(0,p.jsx)("input",{type:"search",className:"form-control form-control-md",placeholder:"Type 3 or more characters","aria-controls":"DataTables_Table_0",onChange:e=>Z(e.target.value),value:I})})}):(0,p.jsx)("label",{children:(0,p.jsx)("input",{type:"search",className:"form-control form-control-md",placeholder:"Search","aria-controls":"DataTables_Table_0",onChange:e=>Z(e.target.value),value:I})})})}),S&&(0,p.jsx)(c.A,{xs:"4",md:"6",className:"text-end",children:(0,p.jsx)("div",{className:"datatable-filter",children:(0,p.jsx)("div",{className:"dataTables_length",id:"DataTables_Table_0_length",children:(0,p.jsxs)("label",{children:[(0,p.jsx)("span",{className:"d-none d-sm-inline-block",children:"Show"}),(0,p.jsxs)("div",{className:"form-control-select",children:[" ",(0,p.jsxs)("select",{name:"DataTables_Table_0_length","aria-controls":"DataTables_Table_0",className:"custom-select custom-select-sm form-control form-control-sm",onChange:e=>{C(e.target.value),V(1)},children:[(0,p.jsx)("option",{value:"10",children:"10"}),(0,p.jsx)("option",{value:"25",children:"25"}),(0,p.jsx)("option",{value:"50",children:"50"}),(0,p.jsx)("option",{value:"100",children:"100"})]})," "]})]})})})})]}),F?(0,p.jsx)(l.A,{classes:"table dataTable tableTooltip",keyField:"id",data:N,options:q,columns:f,defaultSorted:null!==v&&void 0!==v&&v.sortType?_:[],bordered:T,selectRow:{mode:"checkbox",clickToSelect:!0},wrapperClasses:"datatable-wrap my-3",loading:D,noDataIndication:D?B:G()}):(0,p.jsx)(l.A,{classes:"table dataTable tableTooltip",keyField:"id",data:N,options:q,columns:f,defaultSorted:null!==v&&void 0!==v&&v.sortType?_:[],bordered:T,wrapperClasses:"datatable-wrap my-3",loading:D,noDataIndication:D?B:G()}),a&&(0,p.jsx)(r.default,{count:j,page:parseInt(u),sizePerPage:x,noOfPage:g,goToPage:V,handleLimitChange:h,hasLimit:s})]})})})})})}},70724:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});s(9950);var t=s(86781),l=s(68459),n=s(42074),i=s(44414);const c=function(e){let{count:a,page:s,sizePerPage:c,noOfPage:r,goToPage:o}=e;return(0,i.jsxs)(t.A,{className:"align-items-center",children:[(0,i.jsx)(l.A,{xs:"7",sm:"12",md:"9",children:(0,i.jsx)("div",{className:"dataTables_paginate paging_simple_numbers",children:(0,i.jsxs)("ul",{className:"pagination mb-0 justify-content-start justify-content-sm-center justify-content-md-start",children:[(0,i.jsx)("li",{className:"paginate_button page-item previous ".concat(1===s?"disabled disable-link":""),children:(0,i.jsx)(n.N_,{className:"page-link",to:"#",onClick:e=>{e.preventDefault(),o(s-1)},children:"Prev"})}),Array.from(Array(r).keys()).map((e=>{if(r<5)return(0,i.jsx)("li",{className:"paginate_button page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:" #",children:e+1})},e);if(r>5){if(s<3)return r===e+1?(0,i.jsx)("li",{className:"paginate_button page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:"#",children:e+1})},e):e<3?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{className:"paginate_button page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:" #",children:e+1})},e),2===e&&s<3?(0,i.jsx)("li",{className:"paginate_button page-item disabled",children:(0,i.jsx)(n.N_,{className:"page-link",onClick:e=>{e.preventDefault()},to:" #",children:". . ."})}):(0,i.jsx)(i.Fragment,{})]}):(0,i.jsx)(i.Fragment,{});if(s>=3)return 0===e?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("li",{className:"page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:"#",children:e+1})},e),s>=4?(0,i.jsx)("li",{className:"paginate_button page-item disabled",children:(0,i.jsx)(n.N_,{className:"page-link",onClick:e=>{e.preventDefault()},to:" #",children:". . ."})}):(0,i.jsx)(i.Fragment,{})]}):e+1===r?(0,i.jsxs)(i.Fragment,{children:[s<=r-4?(0,i.jsx)("li",{className:"paginate_button page-item disabled",children:(0,i.jsx)(n.N_,{className:"page-link",onClick:e=>{e.preventDefault()},to:" #",children:". . ."})}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("li",{className:"page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:"#",children:e+1})},e)]}):s>=e-1&&s<=e+2?(0,i.jsx)("li",{className:"page-item ".concat(s===e+1?"active":""),children:(0,i.jsx)(n.N_,{className:"page-link",onClick:a=>{a.preventDefault(),s!==e+1&&o(e+1)},to:"#",children:e+1})},e):(0,i.jsx)(i.Fragment,{})}})),(0,i.jsx)("li",{className:"page-item next ".concat(r<=s?"disabled disable-link":""),children:(0,i.jsx)(n.N_,{onClick:e=>{e.preventDefault(),o(s+1)},className:"page-link",to:"#",children:"Next"})})]})})}),(0,i.jsx)(l.A,{xs:"5",sm:"12",md:"3",className:"text-start text-md-end",children:(0,i.jsxs)("div",{className:"dataTables_info",children:[a>0?(parseInt(s)-1)*parseInt(c)+1:a,"-",a>0&&s*c<=a?s*c:a," ","of ",a]})})]})}}}]);