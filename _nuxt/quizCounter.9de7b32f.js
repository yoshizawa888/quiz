import{s as n,x as r}from"./entry.996ce218.js";const p=()=>{const e=n("counter_state",()=>({count:0}));return{coutntState:r(e),countUp:a(e),resetCount:o(e)}},a=e=>()=>e.value.count++,o=e=>()=>e.value.count=0,l=()=>{const e=n("answer_state",()=>({answer:[]}));return{answerState:r(e),pushAnswer:c(e),resetAnswer:w(e)}},c=e=>(t,s,u)=>{e.value.answer[t]||(e.value.answer[t]=[]),e.value.answer[t][0]=s,e.value.answer[t][1]=u},w=e=>()=>{e.value.answer=[]};export{l as a,p as q};
