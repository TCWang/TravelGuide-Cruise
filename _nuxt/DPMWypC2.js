import{_ as v}from"./CAUm4KWC.js";import{_ as w,u as C,g as b,h as k,c,a,F as D,r as $,i as A,o as i,b as I,w as S,p as q,e as B,n as F,t as y}from"./BKUMPzSA.js";import{u as N,q as L}from"./quLAfp_M.js";import"./CXUr4U7i.js";const h=s=>(q("data-v-353299f9"),s=s(),B(),s),V={class:"w-full max-w-6xl not-prose"},z=h(()=>a("h2",null,"畢業50旅遊 - 旅遊行程",-1)),E=h(()=>a("div",{class:"column space-x-24 ml-6"},[a("div",null,"類別"),a("div",null,"標題")],-1)),H={class:"pl-6"},M={__name:"index",async setup(s){let o,u;C({title:"旅遊行程",meta:[{name:"description",content:"郵輪旅遊 - 旅遊行程 "}]});const{data:d}=([o,u]=b(()=>N("calendar-list",()=>L("/calendar").where({_path:{$ne:"/calendar"}}).only(["_path","title","publishedAt","category","sequence","link","image"]).sort({publishedAt:-1}).sort({category:1}).find())),o=await o,u(),o),m=k(()=>{if(!d.value)return[];const n=[];let l=null;for(const e of d.value){const t=new Date(e.publishedAt),g=t.getFullYear(),p=t.getMonth()+1,_=t.getDate(),f=`${g}-${p<10?"0":""}${p}-${_<10?"0":""}${_}`,r=e.category,x=r!==l;e.displayCategory=x,e.categorykeep=r,e.fullDate=f,n.push(e),l=r}return n});return(n,l)=>{const e=v;return i(),c("section",V,[z,E,a("ul",null,[(i(!0),c(D,null,$(A(m),t=>(i(),c("li",{style:{"list-style":"none"},key:t._path},[I(e,{to:t._path,class:"column hover:bg-gray-100 dark:hover:bg-gray-800"},{default:S(()=>[a("div",{class:F({"text-white ":!t.displayCategory,"text-gray-900":t.displayCategory})},y(t.category),3),a("div",H,y(t.title),1)]),_:2},1032,["to"])]))),128))])])}}},K=w(M,[["__scopeId","data-v-353299f9"]]);export{K as default};
