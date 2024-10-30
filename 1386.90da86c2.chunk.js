"use strict";(self.webpackChunklite=self.webpackChunklite||[]).push([[1386],{94889:(e,n,i)=>{i.d(n,{A:()=>r});var a,t,l=i(96540);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},d.apply(null,arguments)}const r=function(e){return l.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:17,height:16,fill:"none",viewBox:"0 0 16 16"},e),a||(a=l.createElement("path",{fill:"#437AFF",d:"M15.163 8c0 .65-.459 1.144-.863 1.575-.232.244-.471.5-.563.719s-.086.543-.092.875c-.006.606-.018 1.3-.49 1.781-.47.481-1.15.494-1.744.5-.324.006-.655.013-.857.094s-.465.337-.704.575c-.422.412-.906.881-1.542.881-.637 0-1.12-.469-1.543-.881-.239-.238-.49-.482-.704-.575-.214-.094-.532-.088-.857-.094-.593-.006-1.273-.019-1.744-.5s-.484-1.175-.49-1.781c-.006-.332-.012-.669-.092-.875-.08-.207-.33-.475-.563-.719-.404-.431-.863-.925-.863-1.575s.46-1.144.863-1.575c.233-.244.472-.5.563-.719.092-.219.086-.544.092-.875.006-.606.019-1.3.49-1.781s1.15-.494 1.744-.5c.325-.006.655-.012.857-.094.202-.081.465-.337.704-.575C7.188 1.47 7.671 1 8.308 1s1.12.469 1.542.881c.239.238.49.481.704.575s.533.088.857.094c.594.006 1.273.019 1.745.5.47.481.483 1.175.49 1.781.005.331.011.669.091.875s.33.475.563.719c.404.431.863.925.863 1.575"})),t||(t=l.createElement("path",{fill:"#fff",d:"M7.328 10.5c.195 0 .381.08.519.22.137.141.215.331.216.53 0 .066.026.13.072.177a.24.24 0 0 0 .346 0 .25.25 0 0 0 .071-.177c.001-.199.079-.389.216-.53a.73.73 0 0 1 .519-.22h1.959c.13 0 .254-.053.346-.146a.5.5 0 0 0 .143-.354V6a.5.5 0 0 0-.143-.354.49.49 0 0 0-.346-.146h-1.47c-.324 0-.635.132-.865.366-.23.235-.359.552-.359.884v2.5c0 .066-.025.13-.071.177a.24.24 0 0 1-.346 0 .25.25 0 0 1-.072-.177v-2.5c0-.332-.13-.65-.359-.884A1.21 1.21 0 0 0 6.84 5.5h-1.47a.49.49 0 0 0-.346.146A.5.5 0 0 0 4.88 6v4c0 .133.051.26.143.354a.49.49 0 0 0 .347.146z"})))}},70600:(e,n,i)=>{i.d(n,{U:()=>d});var a=i(96540),t=i(39),l=i(44402),d=function(e){var n=e.user,i=e.scale,d=e.clamp,r=e.paddingTop,o=e.paddingLeft,s=(0,l.l)(),u=(0,t.Z)({name:"detail",scale:i,clamp:d,color:"LIGHTER"});if(!n.pronouns||0===n.pronouns.length)return null;var c=n.pronouns.join("/");return a.createElement("span",{className:s([u,{paddingTop:r,paddingLeft:o}])},c)}},36469:(e,n,i)=>{i.d(n,{b:()=>h,G:()=>I});var a=i(80045),t=i(96540),l=i(52290),d=i(41299),r=i(85050),o=i(36557),s=i(44402),u=i(20239),c=i(94889),m=i(39181),k=i(86527),v=i(56942),g=i(51260),p=i(39160),f=i(21202),S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"BookVerificationTooltipQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"Field",name:{kind:"Name",value:"authoredBooks"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"}}]}}]}}]}}]}}]},N={width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},w=function(){var e=(0,s.l)(),n=(0,f.L)();return t.createElement(l.a,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center",backgroundColor:"BACKGROUND"},t.createElement(l.a,{paddingBottom:"12px"},t.createElement(v.DZ,{scale:"XS"},"Verified Book Author")),t.createElement("div",{className:e([function(){return n},N])},t.createElement(l.a,{width:"80%",height:"12px",marginBottom:"12px",backgroundColor:"BASE_NORMAL"}),t.createElement(l.a,{width:"80%",height:"12px",backgroundColor:"BASE_NORMAL"})))},E=function(e){var n,i=e.userId,a=(0,m.I)(S,{variables:{userId:i}}),d=a.data,r=a.loading,s=(0,p.d4)((function(e){return e.config.productName})),u=(0,g.au)();if(r||"User"!==(null==d||null===(n=d.userResult)||void 0===n?void 0:n.__typename))return t.createElement(w,null);var c=d.userResult,f=c.name,N=c.authoredBooks,E=c.username,y=N?N.length:0;return t.createElement(l.a,{alignItems:"center",display:"flex",flexDirection:"column",width:"240px",padding:"24px",textAlign:"center"},t.createElement(v.DZ,{scale:"XS"},"Verified Book Author"),t.createElement(l.a,{padding:"8px 0"},t.createElement(o.kZ,{scale:"M"},f," has ",y," verified ",y>1?"books":"book"," on ",s,".")),t.createElement(k.N,{href:u("ShowUserBooks",{username:E}),linkStyle:"OBVIOUS",target:"_blank"},t.createElement(o.kZ,{scale:"M",color:"ACCENT"},"See books")))},y=["userId","marginBottom","marginLeft","marginRight","marginTop","alignSelf"],b=function(e){var n;switch(e.badgeSize){case"S":n=16;break;case"M":n=20;break;case"L":n=24}return t.createElement(c.A,{height:n,width:n})},F=function(e){return{display:"flex",cursor:e?"pointer":"initial"}},h=function(e){var n=e.size,i=e.mobileSize,a=e.withText,d=e.withPointer,c=void 0!==d&&d,m=(0,s.l)(),k=(0,u.D)();return t.createElement("div",{className:m(F(c))},t.createElement(l.a,{display:"flex",marginTop:a?"1px":void 0},i?t.createElement(t.Fragment,null,t.createElement(r.V,{xs:!0,displayValue:"flex"},t.createElement(b,{badgeSize:i})),t.createElement(r.V,{sm:!0,md:!0,lg:!0,xl:!0,displayValue:"flex"},t.createElement(b,{badgeSize:n}))):t.createElement(b,{badgeSize:n})),a&&t.createElement(l.a,{marginLeft:"5px"},t.createElement(o.kZ,{scale:"M"},t.createElement("span",{className:m({color:k.colorTokens.foreground.utilityBlue.primary.base,fontWeight:500})},"Book Author"))))},I=function(e){var n=e.userId,i=e.marginBottom,r=e.marginLeft,o=e.marginRight,s=e.marginTop,u=e.alignSelf,c=(0,a.A)(e,y),m=(0,t.useCallback)((function(){return t.createElement(E,{userId:n})}),[n]);return t.createElement(l.a,{marginTop:s,marginLeft:r,marginBottom:i,marginRight:o,display:"flex",alignSelf:u},t.createElement(d.R,{targetDistance:15,mouseLeaveDelay:100,popoverRenderFn:m,display:"flex"},t.createElement(h,c)))}},26565:(e,n,i)=>{i.d(n,{j:()=>o});var a=i(96540),t=i(19228),l=i(20239),d=i(11334),r=i(40064),o=function(e){var n=e.children,i=(0,l.D)(),o=(0,t.qt)().baseTheme,s=(0,r._I)(i,o);return a.createElement(d.N,{theme:s},n)}},20663:(e,n,i)=>{i.d(n,{Z:()=>t,r:()=>l});var a=i(96540),t=a.createContext({isWorkingPreview:!1}),l=function(){return a.useContext(t)}},86329:(e,n,i)=>{i.d(n,{J:()=>d});var a=i(39181),t=i(45458),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Collection_viewerEdge"}}]}}]}}]}}]}}].concat((0,t.A)([{kind:"FragmentDefinition",name:{kind:"Name",value:"Collection_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CollectionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"canEditOwnPosts"}},{kind:"Field",name:{kind:"Name",value:"canEditPosts"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToLetters"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToMediumNewsletter"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToEmails"}},{kind:"Field",name:{kind:"Name",value:"isWriter"}}]}}]))},d=function(e){var n,i,t=(0,a.I)(l,{variables:{collectionId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),d=t.loading,r=t.error,o=t.data;return d?{loading:d}:r?{error:r}:{viewerEdge:null==o||null===(i=o.collection)||void 0===i?void 0:i.viewerEdge}}},21335:(e,n,i)=>{i.d(n,{sf:()=>u,YG:()=>o,cd:()=>s});var a=i(55364),t=i.n(a),l=i(39181),d=i(45458),r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"user"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"User_viewerEdge"}}]}}]}}]}}]}}].concat((0,d.A)([{kind:"FragmentDefinition",name:{kind:"Name",value:"User_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"UserViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"createdAt"}},{kind:"Field",name:{kind:"Name",value:"hasCompletedProfile"}},{kind:"Field",name:{kind:"Name",value:"isAllowEdsEnabled"}},{kind:"Field",name:{kind:"Name",value:"isBlocking"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isFacebookFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMediumFollowing"}},{kind:"Field",name:{kind:"Name",value:"isSuperFollowing"}},{kind:"Field",name:{kind:"Name",value:"isTwitterFollowing"}},{kind:"Field",name:{kind:"Name",value:"isUser"}},{kind:"Field",name:{kind:"Name",value:"lastPostCreatedAt"}},{kind:"Field",name:{kind:"Name",value:"readPostsCount"}}]}}]))};function o(e,n,i){var a=e.readQuery({query:r,variables:{userId:n}}),l=t()({},a,{user:{viewerEdge:i}});e.writeQuery({query:r,variables:{userId:n||""},data:l})}var s=function(e){var n,i,a=(0,l.I)(r,{variables:{userId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),t=a.loading,d=a.error,o=a.data;return t?{loading:t}:d?{error:d}:{viewerEdge:null==o||null===(i=o.user)||void 0===i?void 0:i.viewerEdge}},u=function(e,n){var i=n.userId,a=n.viewerId;return e.identify({__typename:"UserViewerEdge",id:"userId:".concat(i,"-viewerId:").concat(a)})}},52764:(e,n,i)=>{i.d(n,{c:()=>t});var a=i(27721),t=function(e){var n=e.children,i=e.nonBlocking,t=(0,a.R)(),l=t.error,d=t.loading,r=t.value;return i&&(l||d)?n(null):d?null:n(r)}},54654:(e,n,i)=>{i.d(n,{P:()=>h});var a=i(96540),t=i(26565),l=i(20663),d=i(27721),r=i(80296),o=i(95420),s=i(44205),u=i(2550),c=i(21335),m=i(86527),k=i(99731),v=i(72130),g=i(49287),p=i(15473),f=function(e){var n,i=e.user,t=e.buttonSize,l=void 0===t?"REGULAR":t,d=e.buttonStyleFn,f=void 0===d?function(e){return e?"OBVIOUS":"STRONG"}:d,S=e.isLinkStyle,N=void 0!==S&&S,w=e.width,E=e.onClick,y=e.preventParentClick,b=e.trackingV2,F=(0,u.A)().viewerId,h=(0,c.cd)(i),I=h.viewerEdge,C=h.loading,V=i.id,U=null!==(n=i.name)&&void 0!==n?n:"",A=(0,o.n)(s.g,{variables:{targetUserId:V},optimisticResponse:{followUser:{__typename:"User",id:V,name:U,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(V,"-viewerId:").concat(F),isFollowing:!0}}},update:function(e){e.modify({id:"User:".concat(F),fields:{missionControl:(0,p.A4)("followedAuthors",!0),followingUserConnection:(0,p.nu)(V),socialStats:(0,p.PV)("followingCount",1)}}),e.modify({id:"User:".concat(V),fields:{socialStats:(0,p.PV)("followerCount",1)}})}}),x=(0,r.A)(A,1)[0],D=(0,o.n)(s.b,{variables:{targetUserId:V},optimisticResponse:{unfollowUser:{__typename:"User",id:V,name:U,viewerEdge:{__typename:"UserViewerEdge",id:"userId:".concat(V,"-viewerId:").concat(F),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(F),fields:{missionControl:(0,p.A4)("followedAuthors",!1),socialStats:(0,p.PV)("followingCount",-1)}}),e.modify({id:"User:".concat(V),fields:{socialStats:(0,p.PV)("followerCount",-1)}})}}),T=(0,r.A)(D,1)[0],B=(0,v.$L)(),R=(0,g.W9)(),O=(0,g.jI)(),L=!(null==I||!I.isFollowing),_=f(!!L),P=a.useCallback((function(e){return y&&e.preventDefault(),null==E||E(),B.event("user.followed",{targetUserId:V,followSource:R,source:O,trackingV2:b}),x()}),[V,R,x,y,E,O,b]),z=a.useCallback((function(e){return y&&e.preventDefault(),B.event("user.unfollowed",{targetUserId:V,followSource:R,source:O,trackingV2:b}),T()}),[V,R,T,y,O,b]);return N?a.createElement(m.N,{onClick:L?z:P,linkStyle:L?"SUBTLE":"OBVIOUS",disabled:C},L?"Following":"Follow"):a.createElement(k.$n,{onClick:L?z:P,buttonStyle:_,size:l,loading:C,width:w},L?"Following":"Follow")},S=i(54239),N=i(26679),w=i(43634),E=i(51260),y=i(39160),b=i(46879),F=function(e){var n,i=e.buttonSize,t=void 0===i?"REGULAR":i,l=e.user,d=e.post,r=e.isLinkStyle,o=void 0!==r&&r,s=e.susiEntry,u=e.width,c=e.buttonStyle,m=void 0===c?"STRONG":c,k=(0,y.d4)((function(e){return e.config.authDomain})),v=(0,S.zy)(),p=(0,E.W5)(v.pathname),f=null==p||null===(n=p.route)||void 0===n?void 0:n.name;return a.createElement(g.Ne,{source:{userId:l.id},extendSource:!0},a.createElement(w.r,{buttonSize:t,buttonStyle:m,buttonWidth:u,linkStyle:"OBVIOUS",isButton:!o,operation:"register",post:d,user:l,actionUrl:d?(0,b.OHd)(k,l.id,d.id):(0,b._6D)(k,l.id),susiEntry:s,pageSource:(0,N.x)(f,"register")},"Follow"))},h=function(e){var n=e.user,i=e.post,r=e.buttonSize,o=void 0===r?"REGULAR":r,s=e.buttonStyleFn,u=void 0===s?function(e){return e?"OBVIOUS":"STRONG"}:s,c=e.isLinkStyle,m=void 0!==c&&c,k=e.susiEntry,v=e.width,g=e.onClick,p=e.preventParentClick,S=e.trackingV2,N=(0,d.R)().value,w=(0,l.r)().isWorkingPreview;return N&&N.id===n.id&&!w?null:a.createElement(t.j,null,N?a.createElement(f,{user:n,buttonSize:o,buttonStyleFn:u,isLinkStyle:m,width:v,onClick:g,preventParentClick:p,trackingV2:S}):a.createElement(F,{post:i,user:n,buttonSize:o,isLinkStyle:m,susiEntry:k,width:v,buttonStyle:u(!1)}))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1386.90da86c2.chunk.js.map