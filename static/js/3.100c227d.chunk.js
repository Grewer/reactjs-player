(window["webpackJsonp@reactjs-player/demo"]=window["webpackJsonp@reactjs-player/demo"]||[]).push([[3],{702:function(e,t,a){"use strict";a.r(t);a(311);var l=a(11),n=a(90),c=a(1),r=a.n(c),u=(a(704),r.a.memo(function(e){var t=e.getPlayer,a=e.src,c=r.a.useState("--"),u=Object(n.a)(c,2),s=u[0],m=u[1],i=r.a.useState("--"),o=Object(n.a)(i,2),E=o[0],d=o[1],y=r.a.useState("--"),b=Object(n.a)(y,2),p=b[0],k=b[1],f=r.a.useState("--"),g=Object(n.a)(f,2),C=g[0],S=g[1],v=r.a.useState("--"),N=Object(n.a)(v,2),j=N[0],A=N[1],O=r.a.useState("--"),P=Object(n.a)(O,2),h=P[0],T=P[1],w=r.a.useState("--"),R=Object(n.a)(w,2),V=R[0],M=R[1],D=r.a.useState("--"),B=Object(n.a)(D,2),F=B[0],J=B[1],q=r.a.useState("--"),x=Object(n.a)(q,2),z=x[0],G=x[1],H=r.a.useState("--"),I=Object(n.a)(H,2),K=I[0],L=I[1],Q=r.a.useState("--"),U=Object(n.a)(Q,2),W=U[0],X=U[1],Y=r.a.useState("--"),Z=Object(n.a)(Y,2),$=Z[0],_=Z[1],ee=r.a.useState("--"),te=Object(n.a)(ee,2),ae=te[0],le=te[1],ne=r.a.useCallback(function(){var e=t();m(e?e.isPlaying().toString():"--")},[t]),ce=r.a.useCallback(function(){var e=t();d(e?e.getDuration().toString():"--")},[t]),re=r.a.useCallback(function(){var e=t();k(e?e.getCurrentTime().toString():"--")},[t]),ue=r.a.useCallback(function(){var e=t();if(e){var a=e.getDuration();0<a?(e.setCurrentTime(a/2),S("true")):S("false")}else S("--")},[t]),se=r.a.useCallback(function(){var e=t();if(e){var a=e.getBuffered();A(a?"".concat(a.start(a.length-1),"-").concat(a.end(a.length-1)):"null")}else A("--")},[t]),me=r.a.useCallback(function(){var e=t();T(e?e.getVolume().toString():"--")},[t]),ie=r.a.useCallback(function(){var e=t();if(e){var a=1===e.getVolume()?.5:1;e.setVolume(a),M("true")}else M("--")},[t]),oe=r.a.useCallback(function(){var e=t();J(e?e.isMuted().toString():"--")},[t]),Ee=r.a.useCallback(function(){var e=t();e?(e.toggleMute(),G("true")):G("--")},[t]),de=r.a.useCallback(function(){var e=t();X(e?e.getPlaybackRate().toString():"--")},[t]),ye=r.a.useCallback(function(){var e=t();if(e){var a=1===e.getPlaybackRate()?1.25:1;e.setPlaybackRate(a),L("true")}else L("--")},[t]),be=r.a.useCallback(function(){var e=t();le(e?e.isPiP().toString():"--")},[t]),pe=r.a.useCallback(function(){var e=t();_(e?e.isFullscreen().toString():"--")},[t]);return r.a.useEffect(function(){m("--"),d("--"),k("--"),S("--"),A("--"),T("--"),M("--"),J("--"),G("--"),L("--"),X("--"),_("--"),le("--")},[a]),r.a.createElement("table",{className:"testTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"methodNameTitle"},"\u63a5\u53e3"),r.a.createElement("th",{className:"testActionTitle"},"\u8fd0\u884c"),r.a.createElement("th",null,"\u7ed3\u679c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"isPlaying"),r.a.createElement("td",{className:"testAction",onClick:ne},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,s)),r.a.createElement("tr",null,r.a.createElement("td",null,"getDuration"),r.a.createElement("td",{className:"testAction",onClick:ce},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,E)),r.a.createElement("tr",null,r.a.createElement("td",null,"getCurrentTime"),r.a.createElement("td",{className:"testAction",onClick:re},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,p)),r.a.createElement("tr",null,r.a.createElement("td",null,"setCurrentTime"),r.a.createElement("td",{className:"testAction",onClick:ue},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,C)),r.a.createElement("tr",null,r.a.createElement("td",null,"getBuffered"),r.a.createElement("td",{className:"testAction",onClick:se},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,j)),r.a.createElement("tr",null,r.a.createElement("td",null,"getVolume"),r.a.createElement("td",{className:"testAction",onClick:me},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,h)),r.a.createElement("tr",null,r.a.createElement("td",null,"setVolume"),r.a.createElement("td",{className:"testAction",onClick:ie},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,V)),r.a.createElement("tr",null,r.a.createElement("td",null,"isMuted"),r.a.createElement("td",{className:"testAction",onClick:oe},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,F)),r.a.createElement("tr",null,r.a.createElement("td",null,"toggleMute"),r.a.createElement("td",{className:"testAction",onClick:Ee},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,z)),r.a.createElement("tr",null,r.a.createElement("td",null,"getPlaybackRate"),r.a.createElement("td",{className:"testAction",onClick:de},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,W)),r.a.createElement("tr",null,r.a.createElement("td",null,"setPlaybackRate"),r.a.createElement("td",{className:"testAction",onClick:ye},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,K)),r.a.createElement("tr",null,r.a.createElement("td",null,"isPiP"),r.a.createElement("td",{className:"testAction",onClick:be},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,ae)),r.a.createElement("tr",null,r.a.createElement("td",null,"isFullscreen"),r.a.createElement("td",{className:"testAction",onClick:pe},r.a.createElement(l.a,{type:"play-circle"})),r.a.createElement("td",null,$))))}));u.defaultProps={src:""},t.default=u},704:function(e,t,a){}}]);
//# sourceMappingURL=3.100c227d.chunk.js.map