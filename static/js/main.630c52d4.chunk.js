(this["webpackJsonpashitsamal-portfolio"]=this["webpackJsonpashitsamal-portfolio"]||[]).push([[0],{12:function(e,a,t){e.exports={logo:"Header_logo__3lHXw",navigation:"Header_navigation__XYxJF",search:"Header_search__3HPqH","fa-search":"Header_fa-search__Lxc3E"}},13:function(e){e.exports=JSON.parse('{"data":{"navigations":[{"path":"#home","label":""},{"path":"#about","label":"About"},{"path":"#resume","label":"Resume"},{"path":"#extra-curricular","label":"Extra Curricular"},{"path":"#contact","label":"Contact"}]}}')},14:function(e){e.exports=JSON.parse('{"resume_data":{"left_data":{"name":"Ashit Ranjan Samal","designation":"Senior Software Engineer","section_data":[{"heading":"Personal Info","type":"custom","list_data":{}},{"heading":"Tools and Editors","type":"bar","list_data":[{"label":"VS Code","level":"Advanced","proficiency":"72%"},{"label":"Eclipse","level":"Moderate","proficiency":"45%"}]},{"heading":"Technical Skills","type":"bar","list_data":[{"label":"JavaScript (5.6 years)","level":"Advanced","proficiency":"75%"},{"label":"React (10 months)","level":"Advanced","proficiency":"65%"},{"label":"Backbone (4.2 years)","level":"Expert","proficiency":"80%"},{"label":"Angular 7(6 months)","level":"Moderate","proficiency":"50%"},{"label":"jQuery (4.6 years)","level":"Expert","proficiency":"81%"},{"label":"HTML (6 years)","level":"Expert","proficiency":"84%"},{"label":"CSS (5.6 years)","level":"Advanced","proficiency":"69%"},{"label":"NetSuite (4.6 years)","level":"Expert","proficiency":"90%"}]},{"heading":"Soft Skills","type":"bar","list_data":[{"label":"Leadership","level":"Advanced","proficiency":"75%"},{"label":"Collaboration","level":"Expert","proficiency":"90%"}]},{"heading":"Languages","type":"bar","list_data":[{"label":"English","level":"Expert","proficiency":"80%"},{"label":"Hindi","level":"Advanced","proficiency":"73%"},{"label":"Odia","level":"Expert","proficiency":"90%"},{"label":"Bengali","level":"Moderate","proficiency":"50%"}]},{"heading":"Interests","type":"list","list_data":[{"label":"Badminton"},{"label":"Chess"},{"label":"Movies"},{"label":"Travelling"}]},{"heading":"Personal Skills","type":"list","list_data":[{"label":"Soft spoken"},{"label":"Hard worker"},{"label":"Adaptable"},{"label":"Good communicator"},{"label":"Target oriented"}]},{"heading":"Personal Project","type":"href-list","list_data":[{"label":"In progress: ","link":{"text":"Link here","url":"https://ashit91.github.io/ashitsamal-portfolio"}}]}]},"right_data":{"summary_text":"Effective team contributor and 6 years experienced as a problem-solver with advanced front-end programming skills. Seeking to apply expertise and extensive experience in software engineering to take on a challenging new role with a growing team."}}}')},15:function(e,a,t){},2:function(e,a,t){e.exports={rightPanelContainer:"Resume_rightPanelContainer__2p9yf",leftPanelContainer:"Resume_leftPanelContainer__1eEyM",name:"Resume_name__3WNNa",designation:"Resume_designation__LKTxg",resumePageContainer:"Resume_resumePageContainer__3bt96",appearSmooth:"Resume_appearSmooth__3jJof",colorTransition:"Resume_colorTransition__11zhu",panelContainer:"Resume_panelContainer__3lwb4",leftSectionsContainer:"Resume_leftSectionsContainer__17DSb",leftOneSectionContainer:"Resume_leftOneSectionContainer__3Oq4E",leftSectionHeader:"Resume_leftSectionHeader__3jCd3",leftSectionBody:"Resume_leftSectionBody__1bhNB"}},23:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(11),r=t.n(l),c=t(17),s=(t(23),t(18)),o=t(12),d=t.n(o),h=t(13),b=t(0),p=function(e){var a=h.data.navigations,t=function(a){e.navigationHandeler(a.target.hash?a.target.hash:a.target.parentNode.hash)};return Object(b.jsx)("header",{children:Object(b.jsx)("ul",{className:d.a.navigation,children:a.map((function(e,a){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.path,onClick:t,children:e.label?e.label:Object(b.jsx)("i",{className:"fa fa-home","aria-hidden":"true"})})},a)}))})})},f=t(2),j=t.n(f),u=t(5),m=t.n(u),_=function(e){var a=e.listData,t={maxWidth:a.proficiency};return Object(b.jsxs)("div",{className:m.a.proficiencyBarContainer,children:[Object(b.jsx)("div",{children:a.label}),Object(b.jsx)("div",{className:m.a.barBackground,children:Object(b.jsx)("div",{className:m.a.progressBar,style:t})}),e.showLevel&&Object(b.jsx)("div",{className:m.a.proficiencyLevel,children:a.level})]})},x=function(e){var a=e.sectionInfo;return Object(b.jsxs)("div",{className:j.a.leftOneSectionContainer,children:[("custom"!==a.type||"custom"===a.type&&e.children)&&Object(b.jsx)("div",{className:j.a.leftSectionHeader,children:a.heading}),"custom"===a.type&&Object(b.jsx)("div",{className:j.a.leftSectionBody,children:e.children}),"bar"===a.type&&Object(b.jsx)("div",{className:j.a.leftSectionBody,children:a.list_data.map((function(e,a){return Object(b.jsx)(_,{listData:e,showLevel:!0})}))}),"list"===a.type&&Object(b.jsx)("div",{className:j.a.leftSectionBody,children:Object(b.jsx)("ul",{children:a.list_data.map((function(e,a){return Object(b.jsx)("li",{children:e.label},a)}))})}),"href-list"===a.type&&Object(b.jsx)("div",{className:j.a.leftSectionBody,children:Object(b.jsx)("ul",{children:a.list_data.map((function(e,a){return Object(b.jsx)("li",{children:e.link.text?Object(b.jsxs)(b.Fragment,{children:[e.label,Object(b.jsx)("a",{href:e.link.url,children:e.link.text})]}):Object(b.jsx)("a",{href:e.link.url,children:e.label})},a)}))})})]})},v=function(e){var a=e.textData;return Object(b.jsxs)("div",{className:j.a.leftPanelContainer,children:[Object(b.jsx)("div",{className:j.a.name,children:a.name}),Object(b.jsx)("div",{className:j.a.designation,children:a.designation}),Object(b.jsx)("div",{className:j.a.leftSectionsContainer,children:a.section_data.map((function(e,a){return Object(b.jsx)(x,{sectionInfo:e,children:"custom"===e.type&&Object(b.jsx)("div",{children:"Hi"})},a)}))})]})},g=function(e){var a=e.textData;return Object(b.jsxs)("div",{className:j.a.rightPanelContainer,children:[Object(b.jsx)("div",{className:j.a.headline,children:a.summary_text}),Object(b.jsx)("div",{})]})},y=t(14),O=function(e){var a=y.resume_data;return Object(b.jsxs)("div",{className:j.a.resumePageContainer,children:[Object(b.jsx)("div",{className:j.a.colorTransition}),Object(b.jsxs)("div",{className:j.a.panelContainer,children:[Object(b.jsx)(v,{textData:a.left_data}),Object(b.jsx)(g,{textData:a.right_data})]})]})},S=t(15),C=t.n(S);var N=function(){var e=Object(n.useState)(window.location.hash),a=Object(s.a)(e,2),t=a[0],i=a[1];return Object(b.jsxs)("div",{className:C.a.App,children:[Object(b.jsx)(p,{navigationHandeler:function(e){i(e)}}),"#resume"===t&&Object(b.jsx)(O,{})]})},B=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,l=a.getLCP,r=a.getTTFB;t(e),n(e),i(e),l(e),r(e)}))};t(25);r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(N,{})})}),document.getElementById("root")),B()},5:function(e,a,t){e.exports={proficiencyBarContainer:"ProficiencyBar_proficiencyBarContainer__3Yujx",barBackground:"ProficiencyBar_barBackground__ZKmdJ",progressBar:"ProficiencyBar_progressBar__2ZF9_",proficiencyLevel:"ProficiencyBar_proficiencyLevel__2PUux"}}},[[31,1,2]]]);
//# sourceMappingURL=main.630c52d4.chunk.js.map