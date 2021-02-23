(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(97)),c={id:"mqtt",title:"MQTT"},o={unversionedId:"usage/mqtt",id:"usage/mqtt",isDocsHomePage:!1,title:"MQTT",description:"These are the MQTT messages generated by Frigate. The default topic_prefix is frigate, but can be changed in the config file.",source:"@site/docs/usage/mqtt.md",slug:"/usage/mqtt",permalink:"/frigate/usage/mqtt",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/usage/mqtt.md",version:"current",sidebar:"docs",previous:{title:"HTTP API",permalink:"/frigate/usage/api"},next:{title:"Contributing",permalink:"/frigate/contributing"}},s=[{value:"<code>frigate/available</code>",id:"frigateavailable",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/&lt;object_name&gt;</code>",id:"frigatecamera_nameobject_name",children:[]},{value:"<code>frigate/&lt;zone_name&gt;/&lt;object_name&gt;</code>",id:"frigatezone_nameobject_name",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/&lt;object_name&gt;/snapshot</code>",id:"frigatecamera_nameobject_namesnapshot",children:[]},{value:"<code>frigate/events</code>",id:"frigateevents",children:[]},{value:"<code>frigate/stats</code>",id:"frigatestats",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/detect/set</code>",id:"frigatecamera_namedetectset",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/detect/state</code>",id:"frigatecamera_namedetectstate",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/clips/set</code>",id:"frigatecamera_nameclipsset",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/clips/state</code>",id:"frigatecamera_nameclipsstate",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/snapshots/set</code>",id:"frigatecamera_namesnapshotsset",children:[]},{value:"<code>frigate/&lt;camera_name&gt;/snapshots/state</code>",id:"frigatecamera_namesnapshotsstate",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These are the MQTT messages generated by Frigate. The default topic_prefix is ",Object(i.b)("inlineCode",{parentName:"p"},"frigate"),", but can be changed in the config file."),Object(i.b)("h3",{id:"frigateavailable"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/available")),Object(i.b)("p",null,'Designed to be used as an availability topic with HomeAssistant. Possible message are:\n"online": published when frigate is running (on startup)\n"offline": published right before frigate stops'),Object(i.b)("h3",{id:"frigatecamera_nameobject_name"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/<object_name>")),Object(i.b)("p",null,"Publishes the count of objects for the camera for use as a sensor in HomeAssistant."),Object(i.b)("h3",{id:"frigatezone_nameobject_name"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<zone_name>/<object_name>")),Object(i.b)("p",null,"Publishes the count of objects for the zone for use as a sensor in HomeAssistant."),Object(i.b)("h3",{id:"frigatecamera_nameobject_namesnapshot"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/<object_name>/snapshot")),Object(i.b)("p",null,"Publishes a jpeg encoded frame of the detected object type. When the object is no longer detected, the highest confidence image is published or the original image\nis published again."),Object(i.b)("p",null,"The height and crop of snapshots can be configured in the config."),Object(i.b)("h3",{id:"frigateevents"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/events")),Object(i.b)("p",null,"Message published for each changed event. The first message is published when the tracked object is no longer marked as a false_positive. When frigate finds a better snapshot of the tracked object or when a zone change occurs, it will publish a message with the same id. When the event ends, a final message is published with ",Object(i.b)("inlineCode",{parentName:"p"},"end_time")," set."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "update", // new, update, or end\n  "before": {\n    "id": "1607123955.475377-mxklsc",\n    "camera": "front_door",\n    "frame_time": 1607123961.837752,\n    "label": "person",\n    "top_score": 0.958984375,\n    "false_positive": false,\n    "start_time": 1607123955.475377,\n    "end_time": null,\n    "score": 0.7890625,\n    "box": [424, 500, 536, 712],\n    "area": 23744,\n    "region": [264, 450, 667, 853],\n    "current_zones": ["driveway"],\n    "entered_zones": ["yard", "driveway"],\n    "thumbnail": null\n  },\n  "after": {\n    "id": "1607123955.475377-mxklsc",\n    "camera": "front_door",\n    "frame_time": 1607123962.082975,\n    "label": "person",\n    "top_score": 0.958984375,\n    "false_positive": false,\n    "start_time": 1607123955.475377,\n    "end_time": null,\n    "score": 0.87890625,\n    "box": [432, 496, 544, 854],\n    "area": 40096,\n    "region": [218, 440, 693, 915],\n    "current_zones": ["yard", "driveway"],\n    "entered_zones": ["yard", "driveway"],\n    "thumbnail": null\n  }\n}\n')),Object(i.b)("h3",{id:"frigatestats"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/stats")),Object(i.b)("p",null,"Same data available at ",Object(i.b)("inlineCode",{parentName:"p"},"/api/stats")," published at a configurable interval."),Object(i.b)("h3",{id:"frigatecamera_namedetectset"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/detect/set")),Object(i.b)("p",null,"Topic to turn detection for a camera on and off. Expected values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."),Object(i.b)("h3",{id:"frigatecamera_namedetectstate"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/detect/state")),Object(i.b)("p",null,"Topic with current state of detection for a camera. Published values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."),Object(i.b)("h3",{id:"frigatecamera_nameclipsset"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/clips/set")),Object(i.b)("p",null,"Topic to turn clips for a camera on and off. Expected values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."),Object(i.b)("h3",{id:"frigatecamera_nameclipsstate"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/clips/state")),Object(i.b)("p",null,"Topic with current state of clips for a camera. Published values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."),Object(i.b)("h3",{id:"frigatecamera_namesnapshotsset"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/snapshots/set")),Object(i.b)("p",null,"Topic to turn snapshots for a camera on and off. Expected values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."),Object(i.b)("h3",{id:"frigatecamera_namesnapshotsstate"},Object(i.b)("inlineCode",{parentName:"h3"},"frigate/<camera_name>/snapshots/state")),Object(i.b)("p",null,"Topic with current state of snapshots for a camera. Published values are ",Object(i.b)("inlineCode",{parentName:"p"},"ON")," and ",Object(i.b)("inlineCode",{parentName:"p"},"OFF"),"."))}b.isMDXComponent=!0},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||i;return a?r.a.createElement(f,o(o({ref:t},l),{},{components:a})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);