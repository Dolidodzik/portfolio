(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(55)},24:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(11),l=a.n(o),r=(a(24),a(1)),i=a(2),s=a(4),m=a(3),d=a(5),p=(a(25),a(26),a(27),a(6)),u=a.n(p),h=function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"component-welcome row"},n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("header",{className:"welcome-header col-md-10"},n.a.createElement("h1",{className:"welcome-h1"}," Hello, my name is Dominik Lech, I am full stack developer! ")),n.a.createElement("div",{className:"col-md-1"}),n.a.createElement("div",{className:"col-md-3"}),n.a.createElement("nav",{className:"more-about col-md-6"},n.a.createElement("span",{onClick:function(){return Object(p.goToAnchor)("about")}},n.a.createElement("header",{className:"more-about-header"},n.a.createElement("h3",null," Learn more about my work! ")),n.a.createElement("div",{className:"bounce"},n.a.createElement("img",{alt:"",src:"arrow.png",className:"img-fluid bounce-arrow"})))),n.a.createElement("div",{className:"col-md-3"}))}}]),t}(c.Component),g=(a(34),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).scroll_to_first_feature=n.a.createRef(),a.scroll_to_top=n.a.createRef(),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){function e(e){return n.a.createElement("div",{className:"technology col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6"},n.a.createElement("img",{src:e.img_src,className:"img-fluid",alt:""}))}return n.a.createElement("div",{className:"component-about container"},n.a.createElement("div",{className:"row"},n.a.createElement("h1",{className:"col-12 about-header"}," Technologies that I am familiar with: "),n.a.createElement(e,{img_src:"technologies/html+css.png"}),n.a.createElement(e,{img_src:"technologies/es6.png"}),n.a.createElement(e,{img_src:"technologies/sass.png"}),n.a.createElement(e,{img_src:"technologies/bootstrap.png"}),n.a.createElement(e,{img_src:"technologies/react.png"}),n.a.createElement(e,{img_src:"technologies/vue.png"}),n.a.createElement(e,{img_src:"technologies/angular.png"}),n.a.createElement(e,{img_src:"technologies/django.png"}),n.a.createElement(e,{img_src:"technologies/drf.png"}),n.a.createElement(e,{img_src:"technologies/wagtail.png"}),n.a.createElement(e,{img_src:"technologies/linux.png"}),n.a.createElement(e,{img_src:"technologies/git.png"})))}}]),t}(c.Component)),E=(a(35),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"component-contact"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"spacer col-md-4"}),n.a.createElement("header",{className:"col-md-4 contact-header"},n.a.createElement("h1",{className:"font-weight-600"}," CONTACT ")),n.a.createElement("div",{className:"spacer col-md-4"}),n.a.createElement("div",{className:"spacer col-xl-5 col-md-4 col-3"}),n.a.createElement("div",{className:"border col-xl-2 col-md-4 col-6 "}),n.a.createElement("div",{className:"spacer col-xl-5 col-md-4 col-3"})),n.a.createElement("main",{className:"row"},n.a.createElement("form",{className:"col-md-12",action:"https://formsubmit.co/dominiclech787@gmail.com",target:"_blank",method:"POST"},n.a.createElement("header",null,n.a.createElement("h3",{className:"font-weight-600 form-header"}," Write a message to me: "),n.a.createElement("input",{type:"email",name:"email",className:"input col-md-7",placeholder:"Your email"}),n.a.createElement("textarea",{cols:"50",rows:"6",className:"input text col-md-7",placeholder:"Your message",name:"text"}),n.a.createElement("div",{className:"col-md-5"}),n.a.createElement("input",{type:"submit",className:"input submit col-6 col-md-2"}))),n.a.createElement("h3",{className:"font-weight-600 col-md-12 email-header"}," Or send an email: ",n.a.createElement("span",{className:"email"}," dominiclech787@gmail.com ")," "),n.a.createElement("a",{href:"https://github.com/Dolidodzik",target:"_blank",rel:"noopener noreferrer",className:"font-weight-600 col-md-12 email-header github-header"},"Github account: ",n.a.createElement("span",{className:"email"}," Dolidodzik ")))))}}]),t}(c.Component)),f=a(8),b=(a(36),a(37),a(16)),k=a.n(b),N=(a(38),a(9)),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleClicks=function(){console.log(a.clickedAtLeastOnce),null!==a.clickTimeout&&a.clickedAtLeastOnce?(a.clickTimeout=null,window.open(a.props.Link)):(N.isBrowser&&window.open(a.props.Link,"_blank"),a.clickedAtLeastOnce=!0,a.clickTimeout=setTimeout(function(){clearTimeout(a.props.Link),a.clickTimeout=null},700))},a.state={flipped:!1},setTimeout(function(){this.setState({flipped:!0})}.bind(Object(f.a)(a)),0),setTimeout(function(){this.setState({flipped:!1})}.bind(Object(f.a)(a)),300),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("span",{className:"card-wrap ButtonLink",onMouseEnter:function(t){return e.setState({flipped:!e.state.flipped})},onMouseLeave:function(t){return e.setState({flipped:!e.state.flipped})},onClick:function(t){return e.handleClicks()}},n.a.createElement(k.a,{flipped:this.state.flipped},n.a.createElement("div",{className:"content front square-box"},n.a.createElement("img",{src:this.props.FrontImageSource,alt:this.props.Title})),n.a.createElement("div",{className:"content back square-box"},n.a.createElement("div",{className:"square-content"},n.a.createElement("div",{className:"back-wrapper"},n.a.createElement("h2",{className:"BackHeader"}," ",this.props.Title," "),n.a.createElement("div",{className:"BackText"}," ",this.props.BackText," "),n.a.createElement("h5",{className:"BackSpacer"}," Click to learn more! "))))))}}]),t}(c.Component),j=function(e){function t(){var e;return Object(r.a)(this,t),e=Object(s.a)(this,Object(m.a)(t).call(this)),setTimeout(function(){this.setState({isFlipped:!0})}.bind(Object(f.a)(e)),1625),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState(function(e){return{isFlipped:!e.isFlipped}})}},{key:"render",value:function(){return n.a.createElement("div",{className:"component-projects"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("header",{className:"col-12 projects-header"},n.a.createElement("h1",null," Here you can view my projects! "),n.a.createElement(N.BrowserView,null," ",n.a.createElement("h4",null," Hover or click photos to get additional information! ")," "),n.a.createElement(N.MobileView,null," ",n.a.createElement("h4",null," Click photos to get additional information, doubleclick them to get redirected to project page! ")," "))),n.a.createElement("main",{className:"cards-containter row"},n.a.createElement(v,{Title:"Foodie",FrontImageSource:"/projectImages/foodie.png",BackText:"Hungry? Here you can search for nearby restaurants!",Link:"https://github.com/Dolidodzik/foodie"}),n.a.createElement("div",{className:"card-spacer"}),n.a.createElement(v,{Title:"Bulbapedia",FrontImageSource:"/projectImages/bulbapedia.png",BackText:"Backend, for wikipedia like page that I created as freelancer for one of redditors!",Link:"https://github.com/Dolidodzik/bulbapedia"}),n.a.createElement("div",{className:"card-spacer"}),n.a.createElement(v,{Title:"Typing",FrontImageSource:"/projectImages/typingspeedtest.png",BackText:"In this app you can check your typing speed!",Link:"https://github.com/Dolidodzik/typingspeedtest"}),n.a.createElement("div",{className:"card-spacer"}),n.a.createElement(v,{Title:"Portfolio",FrontImageSource:"/projectImages/portfolio.png",BackText:"My portfolio that you are looking on right now!",Link:"https://github.com/Dolidodzik/portfolio"}),n.a.createElement("div",{className:"card-spacer"}),n.a.createElement(v,{Title:"Gallery",FrontImageSource:"/projectImages/gallery.png",BackText:"Simple image gallery!",Link:"https://github.com/Dolidodzik/django_wagtail_image_gallery"}),n.a.createElement("div",{className:"card-spacer"}),n.a.createElement(v,{Title:"Blog",FrontImageSource:"/projectImages/blog.png",BackText:"Wagtail blog, with customizable post, pages, and other utilities!",Link:"https://github.com/Dolidodzik/Wagtail-Django-Static-Blog"}))))}}]),t}(c.Component),w=a(17),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={text_shown:!1,fetures_header_shown:!1,arrow_shown:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"scroll-to-top col-md-12"}),n.a.createElement(u.a,{id:"welcome"},n.a.createElement("div",{className:"nothing"})),n.a.createElement("div",{id:"outer-container"},n.a.createElement(w.slide,{pageWrapId:"page-wrap",outerContainerId:"outer-container"},n.a.createElement("span",{className:"first-option option",onClick:function(){return Object(p.goToAnchor)("welcome")}},"Welcome!"),n.a.createElement("span",{href:"/about",className:"option",onClick:function(){return Object(p.goToAnchor)("about")}},"Tech details!"),n.a.createElement("span",{href:"/projects",className:"option",onClick:function(){return Object(p.goToAnchor)("projects")}},"My projects!"),n.a.createElement("span",{href:"/contact",className:"option",onClick:function(){return Object(p.goToAnchor)("contact")}},"Contact me!")),n.a.createElement("main",{id:"page-wrap"},n.a.createElement("div",null,n.a.createElement(h,null),n.a.createElement("div",{className:"scroll_to_welcome"}),n.a.createElement(u.a,{id:"about"},n.a.createElement("div",{className:"spacer-about"})),n.a.createElement(g,null),n.a.createElement("div",{className:"projects-about-spacer"}),n.a.createElement(u.a,{id:"projects"},n.a.createElement("div",{className:"spacer-projects"})),n.a.createElement(j,null),n.a.createElement(u.a,{id:"contact"},n.a.createElement("div",{className:"spacer-contact"})),n.a.createElement(E,null)))))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f106c83d.chunk.js.map