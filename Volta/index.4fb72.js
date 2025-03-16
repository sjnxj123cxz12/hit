window.__require = function t(e, o, n) {
function i(r, s) {
if (!o[r]) {
if (!e[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var p = o[r] = {
exports: {}
};
e[r][0].call(p.exports, function(t) {
return i(e[r][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
ChipMovent: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "54595ngd+lNWaPRUDEV9pDB", "ChipMovent");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.chipSprites = [];
e.chipPrefab = null;
e.chipContainer = null;
e.startPosition = cc.v3(0, 0, 0);
e.startPositionPlayer = cc.v3(0, 0, 0);
e.minPos1 = cc.v3(-200, 100, 0);
e.maxPos1 = cc.v3(-100, 200, 0);
e.minPos2 = cc.v3(100, 100, 0);
e.maxPos2 = cc.v3(200, 200, 0);
e.chips = [];
e.lastSpawnTime = 0;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
return this._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
null == o._instance ? o._instance = this : this.destroy();
};
e.prototype.spawnChip = function() {
var t = Date.now();
if (!(t - this.lastSpawnTime < 1e3)) {
var e = Math.floor(11 * Math.random()) + 5;
this.lastSpawnTime = t;
for (var o = 0; o < e; o++) {
var n = cc.instantiate(this.chipPrefab);
n.parent = this.chipContainer;
n.setPosition(cc.v3(this.startPosition.x, this.startPosition.y, 0));
var i = n.getComponent(cc.Sprite);
i && this.chipSprites.length > 0 && (i.spriteFrame = this.chipSprites[Math.floor(Math.random() * this.chipSprites.length)]);
this.chips.push(n);
var a = this.getRandomPosition(Math.random() > .5 ? 1 : 2);
cc.tween(n).to(.5, {
position: a
}, {
easing: "sineOut"
}).start();
}
}
};
e.prototype.spawnChipPlayer = function(t, e) {
var o = cc.instantiate(this.chipPrefab);
o.parent = this.chipContainer;
o.setPosition(this.startPositionPlayer);
var n = o.getComponent(cc.Sprite);
n && this.chipSprites[e] && (n.spriteFrame = this.chipSprites[e]);
var i = this.getRandomPosition(t);
cc.tween(o).to(.5, {
position: i
}, {
easing: "sineOut"
}).start();
this.chips.push(o);
};
e.prototype.getRandomPosition = function(t) {
return 1 === t ? cc.v3(this.getRandomRange(this.minPos1.x, this.maxPos1.x), this.getRandomRange(this.minPos1.y, this.maxPos1.y), 0) : cc.v3(this.getRandomRange(this.minPos2.x, this.maxPos2.x), this.getRandomRange(this.minPos2.y, this.maxPos2.y), 0);
};
e.prototype.getRandomRange = function(t, e) {
return Math.random() * (e - t) + t;
};
e.prototype.hideAndCollectChips = function(t) {
var e = this, o = this.chips.length;
if (0 !== o) {
var n = 5 / o;
n = Math.min(n, .5);
var i = 0;
this.chips = this.chips.filter(function(o) {
var a = o.getPosition(), r = a.x >= e.minPos1.x && a.x <= e.maxPos1.x && a.y >= e.minPos1.y && a.y <= e.maxPos1.y, s = a.x >= e.minPos2.x && a.x <= e.maxPos2.x && a.y >= e.minPos2.y && a.y <= e.maxPos2.y;
if (1 === t && r || 2 === t && s) {
o.destroy();
return !1;
}
cc.tween(o).delay(i).to(.5, {
position: cc.v3(e.startPosition.x, e.startPosition.y, 0)
}, {
easing: "sineIn"
}).call(function() {
return o.destroy();
}).start();
i += n;
return !1;
});
}
};
var o;
e._instance = null;
a([ c([ cc.SpriteFrame ]) ], e.prototype, "chipSprites", void 0);
a([ c(cc.Prefab) ], e.prototype, "chipPrefab", void 0);
a([ c(cc.Node) ], e.prototype, "chipContainer", void 0);
a([ c(cc.Vec3) ], e.prototype, "startPosition", void 0);
a([ c(cc.Vec3) ], e.prototype, "startPositionPlayer", void 0);
a([ c(cc.Vec3) ], e.prototype, "minPos1", void 0);
a([ c(cc.Vec3) ], e.prototype, "maxPos1", void 0);
a([ c(cc.Vec3) ], e.prototype, "minPos2", void 0);
a([ c(cc.Vec3) ], e.prototype, "maxPos2", void 0);
return o = a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"Iframe.Volta": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4152fW2OjlHjrdVYHkNV6Tn", "Iframe.Volta");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = (r.property, t("./Volta.Const")), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.iframeURL = null;
e.iframe = null;
return e;
}
e.prototype.onLoad = function() {
this.createIframe();
};
e.prototype.onEnable = function() {
this.iframeURL = c.VoltaConst.urlVideo;
if (this.iframe) {
this.iframe.style.display = "block";
this.iframe.src = this.iframeURL;
this.updateIframePosition();
}
};
e.prototype.onDisable = function() {
this.iframe && (this.iframe.style.display = "none");
};
e.prototype.onDestroy = function() {
if (this.iframe) {
document.body.removeChild(this.iframe);
this.iframe = null;
}
};
e.prototype.createIframe = function() {
if (!this.iframe) {
this.iframe = document.createElement("iframe");
this.iframe.style.position = "absolute";
this.iframe.style.border = "none";
this.iframe.style.zIndex = "1000";
this.iframe.style.width = "916.2";
this.iframe.style.height = "517.4";
this.iframe.style.display = "none";
document.body.appendChild(this.iframe);
}
};
e.prototype.updateIframePosition = function() {
if (this.iframe && this.node.activeInHierarchy) {
var t = cc.view.getVisibleSize(), e = this.node.getPosition(), o = this.node.parent.getPosition(), n = t.width / 2 + e.x + o.x, i = t.height / 2 - e.y - o.y;
this.iframe.style.left = n - this.iframe.clientWidth / 2 + "px";
this.iframe.style.top = i - this.iframe.clientHeight / 2 + "px";
}
};
e.prototype.update = function() {
this.updateIframePosition();
};
return a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"./Volta.Const": "Volta.Const"
} ],
LiveVolta: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "05b565ui51BDp4/L4C94BMt", "LiveVolta");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = t("./Volta.Const"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.onEnable = function() {
this.webview.url = l.VoltaConst.urlVideo;
};
a([ c(cc.WebView) ], e.prototype, "webview", void 0);
return a([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Volta.Const": "Volta.Const"
} ],
LoadingVolta: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "84ca49SIm1BhpGuSKhqXZp1", "LoadingVolta");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Volta.Const"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progress = null;
e.progresslabel = null;
e.count = 0;
e.isFull = !1;
e.speed = .3;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.update = function(t) {
var e = this;
if (this.progress.node.parent.active) {
if (this.progress.progress >= 1) {
if (!this.isFull) {
this.isFull = !0;
r.VoltaConst.isLoading = !1;
setTimeout(function() {
e.progress.node.parent.active = !1;
}, 500);
}
return;
}
this.progress.progress += t * this.speed;
this.progresslabel && (this.progresslabel.string = Math.round(100 * this.progress.progress) + "%");
}
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onUpdateGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
a([ l(cc.ProgressBar) ], e.prototype, "progress", void 0);
a([ l(cc.Label) ], e.prototype, "progresslabel", void 0);
return a([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Volta.Const": "Volta.Const"
} ],
MoveBulletVolta: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fe2denIhLZJtZ1of/lqqOis", "MoveBulletVolta");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.movingNode = null;
e.progressSpeed = .3;
return e;
}
e.prototype.start = function() {
this.progressBar.progress = 0;
};
e.prototype.update = function(t) {
if (this.progressBar.progress < 1) {
this.progressBar.progress += t * this.progressSpeed;
this.progressBar.progress > 1 && (this.progressBar.progress = 1);
var e = this.progressBar.progress * this.progressBar.node.width;
this.movingNode.setPosition(e, this.movingNode.y);
}
};
a([ c(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
a([ c(cc.Node) ], e.prototype, "movingNode", void 0);
a([ c ], e.prototype, "progressSpeed", void 0);
return a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
VideoPlayer: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "550afUezahPGI5B0Cb7KK9Q", "VideoPlayer");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = t("./Volta.Const"), p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.videoPlayer = null;
return e;
}
e.prototype.onEnable = function() {
if (this.videoPlayer) {
this.videoPlayer.remoteURL = l.VoltaConst.urlVideo;
console.log("Cập nhật video URL:", this.videoPlayer.remoteURL);
this.videoPlayer.node.on("ready-to-play", this.autoPlay, this);
}
};
e.prototype.onDisable = function() {
this.videoPlayer.node.off("ready-to-play", this.autoPlay, this);
};
e.prototype.autoPlay = function() {
console.log("Video đã sẵn sàng, autoplay...");
this.videoPlayer.play();
};
a([ c(cc.VideoPlayer) ], e.prototype, "videoPlayer", void 0);
return a([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./Volta.Const": "Volta.Const"
} ],
"Volta.BatNanCtrl": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "20c35cxgfVPsIJ4j21rcQbw", "Volta.BatNanCtrl");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = (r.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dataSource = null;
return e;
}
Object.defineProperty(e.prototype, "dataSource", {
get: function() {
return this._dataSource;
},
set: function(t) {
this._dataSource = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
};
e.prototype._onTouchBegin = function() {
this.dataSource.node.off(cc.Node.EventType.TOUCH_MOVE);
};
e.prototype._onTouchMoved = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
var o = t.touch.getDelta();
this.node.x += o.x;
this.node.y += o.y;
};
e.prototype.getBatDistance = function() {
var t = this.dataSource.SkeXucXac.node.position;
return this.node.position.sub(t).mag();
};
e.prototype._onTouchEnd = function(t) {
var e = t.touch.getLocation();
e = this.node.convertToNodeSpaceAR(e);
this.getBatDistance() > 100 && this.finishNan();
};
e.prototype.finishNan = function() {
this.node.active = !1;
this.node.setPosition(-2, 98);
this.dataSource.node.on(cc.Node.EventType.TOUCH_MOVE, this.dataSource.getComponent("UIWindow")._onTouchMoved, this.dataSource.getComponent("UIWindow"), !0);
};
return a([ s ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
"Volta.Chat.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e6e25VSbCZJJJXe+itvrnDG", "Volta.Chat.NetworkClient");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Chat"), s = t("../Volta.Const"), c = cc._decorator, l = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
var t = {
url: "https://chat." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub",
gate: fzgui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(s.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(s.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(s.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, t.url, t.hub, t.gate, fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
this.registerChat();
}
t.R < 0 && fzgui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "receiveMessage":
r.default.instance.receiveMessage(i);
break;

case "listLastMessages":
r.default.instance.listLastMessages(i);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "voltalive" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(s.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
this.isConnect = !1;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = a([ l ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../Volta.Chat": "Volta.Chat",
"../Volta.Const": "Volta.Const"
} ],
"Volta.Chat": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "864c5rBavRBbbAnomdpCTFb", "Volta.Chat");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.Chat.NetworkClient"), s = cc._decorator, c = s.ccclass, l = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
e.nameDealer = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
this.chatChanel = "voltalive";
};
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
r.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, this.chatChanel ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.n, i = o.c;
if (void 0 === n || void 0 === i) return;
if ("SYSTEM" != n && "SYSTEM" != i && n.length > 0 && i.length > 0) {
var a = i, r = cc.instantiate(this.templateMessage), s = o.n, c = n;
r.active = !0;
s = (s.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), c);
r.getComponent(cc.Label).string = s + ": " + a;
if (1 == t.IsVipTx) {
r.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
r.getChildByName("lb_nameVip").getComponent(cc.Label).string = s + ": ";
r.off(cc.Node.EventType.SIZE_CHANGED);
r.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (r.getContentSize().height - r.getChildByName("lb_nameVip").getContentSize().height) / 2;
r.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
r.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
r.getChildByName("lb_name").getComponent(cc.Label).string = s + ": ";
r.off(cc.Node.EventType.SIZE_CHANGED);
r.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (r.getContentSize().height - r.getChildByName("lb_name").getContentSize().height) / 2;
r.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(r);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c;
if (void 0 !== e && void 0 !== o && "SYSTEM" != e && "SYSTEM" != o && e.length > 0 && o.length > 0) {
var n = o, i = cc.instantiate(this.templateMessage), a = t.n, r = e;
i.active = !0;
a = (a.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), r);
i.getComponent(cc.Label).string = a + ": " + n;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(i);
this.scrollListChat.scrollToBottom();
}
};
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
this.txtInputChat.node.on("editing-return", this.touchSendChat, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.enter:
this.txtInputChat.focus();
}
};
var o;
e._instance = null;
a([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
a([ l(cc.Node) ], e.prototype, "listChat", void 0);
a([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
a([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return o = a([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./network/Volta.Chat.NetworkClient": "Volta.Chat.NetworkClient"
} ],
"Volta.Const": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "334015fM4dMHYygRiSM/AbH", "Volta.Const");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.VoltaConst = void 0;
var n = function() {
function t() {}
t.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatDateTime = function(t) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + " - " + t[1].substr(0, 5);
};
t.formatDateTime2 = function(t) {
var e = t = t.split("T");
return e[0] + e[1];
};
t.formatUserName = function(t) {
return t.length > 10 ? t.slice(0, 9) + "..." : t;
};
t.convertToMoney = function(t) {
var e = "", o = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? t.toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : t.toString();
1 == o && (e = "-" + e);
return e;
};
t.formatNumberToKMB = function(t) {
var e = t < 0 ? "-" : "";
return (t = Math.abs(t)) >= 1e9 ? e + ((t /= 1e9) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "B" : t >= 1e6 ? e + ((t /= 1e6) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "M" : t >= 1e3 ? e + ((t /= 1e3) % 1 == 0 ? t.toFixed(0) : t.toFixed(1)) + "K" : e + t.toString();
};
t.formatNumberMin = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "B";
}
if (t >= 1e6) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1e3);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.formatNumberString = function(t) {
if (t >= 1e9) {
t = Math.ceil(t / 1e9);
return this.formatNumber(t) + "Tỷ";
}
if (t >= 1e6) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "M";
}
if (t >= 1e3) {
t = Math.ceil(t / 1);
return this.formatNumber(t) + "K";
}
return this.formatNumber(t);
};
t.convertToK = function(t) {
var e = "", o = t < 0 ? 1 : 0;
e = (t = Math.abs(t)) >= 1e3 ? (t / 1e3).toFixed().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "K" : t.toString();
1 == o && (e = "-" + e);
return e;
};
t.cutStringWithEllipsis = function(t, e) {
return null == t ? "" : t.length > e ? t.substring(0, e) + "..." : t;
};
t.getUrl = function(t, e) {
var o = t, n = cc.loader.getXMLHttpRequest();
n.onreadystatechange = function() {
4 === n.readyState && (200 == n.status ? e(JSON.parse(n.responseText), n.status) : n.responseText.length > 0 ? e(n.responseText, n.status) : e("error_code : " + n.status, null));
};
n.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
n.timeout = 3e4;
n.open("GET", o, !0);
n.setRequestHeader("Content-Type", "application/json");
n.withCredentials = !0;
n.send();
};
t.post = function(t, e, o) {
var n = cc.loader.getXMLHttpRequest();
n.timeout = 3e4;
n.open("POST", t);
n.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
var i = JSON.stringify(e);
n.onreadystatechange = function() {
if (4 == n.readyState) if (n.status >= 200 && n.status < 400) {
var t = n.responseText, e = JSON.parse(t);
o && o(n.status, e);
} else o && o(n.status, null);
};
n.send(i);
};
t.getImage = function(e, o) {
t.loadImageFromUrl(e).then(function(e) {
t.setSpriteFromBase64(e, o);
}).catch(function(t) {
console.error("Lỗi rồi đại ca ơi: ", t);
});
};
t.loadImageFromUrl = function(t) {
return new Promise(function(e, o) {
var n = new XMLHttpRequest();
n.open("GET", t, !0);
n.responseType = "arraybuffer";
n.onload = function() {
if (200 === this.status) {
for (var t = this.response, n = new Uint8Array(t), i = "", a = 0; a < n.byteLength; a++) i += String.fromCharCode(n[a]);
var r = "data:image/png;base64," + window.btoa(i);
e(r);
} else o(new Error("Failed to load image. Status: " + this.status));
};
n.onerror = function() {
o(new Error("Failed to load image from URL"));
};
n.send();
});
};
t.setSpriteFromBase64 = function(t, e) {
var o = new Image();
o.src = t;
o.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(o);
t.handleLoadedTexture();
var n = new cc.SpriteFrame(t);
e.spriteFrame = n;
};
};
t.MAX_KEY_VALUE = 8;
t.MAX_BET_TAI_XIU = 1e21;
t.MIN_BET = 10;
t.MAX_BET_PER_SESSION = 25e25;
t.RETURN_MONEY = 2;
t.diceNode = {
GameSessionID: 0
};
t.isLoading = !0;
t.urlVideo = "";
t.ON_VOLTA_SOCKET = "OnVoltaWebSocKet";
t.CHAT_VOLTA_SOCKET_EVENT = "OnChatVoltaWebSocKet";
t.GameStatus = {
BETTING: 0,
RESULT: 1,
PREPARE_NEW_SESSION: 2,
END_BETTING: 3
};
t.BetType = {
BET_GOLD: 1,
BET_BAC: 2
};
t.BetGate = {
NONE: 2,
GATE_AWAY: 1,
GATE_HOME: 0
};
t.RETURN_RESULT = 1;
return t;
}();
o.VoltaConst = n;
cc._RF.pop();
}, {} ],
"Volta.Guide": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb5942adQlPn5BD+Ci0QxIk", "Volta.Guide");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = (r.property, t("../Volta.MainGame")), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.close = function() {
c.default.instance.OpacityView();
};
return a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {
"../Volta.MainGame": "Volta.MainGame"
} ],
"Volta.HistoryTurn": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "60036mowMFF276i/OV0PTse", "Volta.HistoryTurn");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.NetworkClient"), s = t("./Volta.Const"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_dataHisoryTurnTai = [];
e.m_dataHisoryTurnXiu = [];
e.btnR = null;
e.btnL = null;
e.lbTotalBetTai = null;
e.lbTotalBetXiu = null;
e.lbTotalRefundTai = null;
e.lbTotalRefundXiu = null;
e.txtSessionInfo = null;
e.txtTotalDice = null;
e.XucXac = [];
e.imgEffectTai = null;
e.imgEffectXiu = null;
e.imgDices = [];
e.lvTaiContent = null;
e.lvXiuContent = null;
e.template = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
r.default.instance.sendSignalR("GetSessionResultHistory", [ s.VoltaConst.diceNode.GameSessionID ]);
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
};
e.prototype.showHistoryTurnTaiXiu = function(t) {
this.m_coinData = t;
this.btnR.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnR, this);
this.btnL.node.on(cc.Node.EventType.TOUCH_END, this.touchBtnL, this);
this.setViewHistoryTurn();
};
e.prototype.touchBtnR = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID++;
this.m_GameSessionID >= s.VoltaConst.GameSessionID ? this.m_GameSessionID = s.VoltaConst.GameSessionID - 1 : r.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < s.VoltaConst.GameSessionID - 15 ? this.m_GameSessionID = s.VoltaConst.GameSessionID - 15 : r.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.setViewHistoryTurn = function() {
var t = 0, e = 0, o = 0, n = 0;
if (this.m_coinData.length) {
for (var i in this.m_coinData) if (1 == this.m_coinData[i].LocationID) {
e += this.m_coinData[i].TotalBetValue;
n += this.m_coinData[i].RefundValue;
this.m_dataHisoryTurnXiu.push(this.m_coinData[i]);
} else {
t += this.m_coinData[i].TotalBetValue;
o += this.m_coinData[i].RefundValue;
this.m_dataHisoryTurnTai.push(this.m_coinData[i]);
}
this.lbTotalBetTai.string = s.VoltaConst.formatNumber(t);
this.lbTotalRefundTai.string = s.VoltaConst.formatNumber(o);
this.lbTotalRefundXiu.string = s.VoltaConst.formatNumber(n);
this.lbTotalBetXiu.string = s.VoltaConst.formatNumber(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
var a = this.m_coinData[0].Result.split(",");
for (i = 0; i < 3; i++) this.XucXac[i].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(a[i]) - 1];
if (this.m_coinData[0].LocationWinID == s.VoltaConst.BetGate.GATE_HOME) {
this.imgEffectTai.node.active = !0;
this.imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_coinData[0].LocationWinID == s.VoltaConst.BetGate.GATE_AWAY) {
this.imgEffectXiu.node.active = !0;
this.imgEffectXiu.node.runAction(cc.rotateBy(.5, 360).repeatForever());
}
this.txtTotalDice.getComponent(cc.Label).string = "= " + (parseInt(a[0]) + parseInt(a[1]) + parseInt(a[2])).toString();
this.refreshHistoryTurnTX();
} else {
this.lbTotalBetTai.string = "0";
this.lbTotalBetXiu.string = "0";
this.lbTotalRefundTai.string = "0";
this.lbTotalRefundXiu.string = "0";
}
};
e.prototype.refreshHistoryTurnTX = function() {
this.lvTaiContent.removeAllChildren();
this.lvXiuContent.removeAllChildren();
for (var t = 0; t < 2; t++) if (t && 0 < this.m_dataHisoryTurnTai.length) for (var e = 0; e < this.m_dataHisoryTurnTai.length; e++) this.addItemHisoryTurnTX(1, e); else if (!t && 0 < this.m_dataHisoryTurnXiu.length) for (e = 0; e < this.m_dataHisoryTurnXiu.length; e++) this.addItemHisoryTurnTX(2, e);
fzgui.UIWaitingLayout.hideWaiting();
};
e.prototype.addItemHisoryTurnTX = function(t, e) {
var o;
o = 1 == t ? this.m_dataHisoryTurnTai[e] : this.m_dataHisoryTurnXiu[e];
var n = cc.instantiate(this.template);
n.position = new cc.Vec3(0, 0);
var i = o.BetTime.split("T");
i = i[1].split(".");
n.getChildByName("txtThoiGian").getComponent(cc.Label).string = i[0];
n.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = o.AccountName;
n.getChildByName("txtTienDat").getComponent(cc.Label).string = s.VoltaConst.formatNumber(o.TotalBetValue);
n.getChildByName("txtTraLai").getComponent(cc.Label).string = s.VoltaConst.formatNumber(o.RefundValue);
n.getChildByName("line").getComponent(cc.Sprite).spriteFrame = null;
1 == t ? this.lvTaiContent.addChild(n) : this.lvXiuContent.addChild(n);
};
var o;
e._instance = null;
a([ p(cc.Button) ], e.prototype, "btnR", void 0);
a([ p(cc.Button) ], e.prototype, "btnL", void 0);
a([ p(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
a([ p(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
a([ p(cc.Label) ], e.prototype, "lbTotalRefundTai", void 0);
a([ p(cc.Label) ], e.prototype, "lbTotalRefundXiu", void 0);
a([ p(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
a([ p(cc.Label) ], e.prototype, "txtTotalDice", void 0);
a([ p([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
a([ p(cc.Sprite) ], e.prototype, "imgEffectTai", void 0);
a([ p(cc.Sprite) ], e.prototype, "imgEffectXiu", void 0);
a([ p([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
a([ p(cc.Node) ], e.prototype, "lvTaiContent", void 0);
a([ p(cc.Node) ], e.prototype, "lvXiuContent", void 0);
a([ p(cc.Node) ], e.prototype, "template", void 0);
return o = a([ l ], e);
}(fzgui.UIPopup);
o.default = h;
cc._RF.pop();
}, {
"./Volta.Const": "Volta.Const",
"./network/Volta.NetworkClient": "Volta.NetworkClient"
} ],
"Volta.History": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b4cceXVOvdKx6EfJP5m5s7B", "Volta.History");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), s = t("../Volta.MainGame"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.BtnNextAndPrevious = [];
e.totalPageTxt = null;
e.pageIndex = 1;
e.pageSize = 5;
e.totalPage = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
fzgui.UIWaitingLayout.showWaiting();
this.getHistory(this.pageIndex);
};
e.prototype.getHistory = function(t) {
var e = this, o = "https://volta." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/api/volta/GetHistory?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&pageIndex=" + t + "&pageSize=" + this.pageSize;
fzgui.Https.get(o, function(t) {
if (t) {
fzgui.UIWaitingLayout.hideWaiting();
e.pageIndex = t.PageIndex;
e.totalPage = t.TotalPages;
e.checkBtn();
e.totalPageTxt.string = "Trang: " + e.pageIndex + "/" + e.totalPage;
e.showAccountHistory(t.Data);
} else fzgui.UIWaitingLayout.hideWaiting();
});
};
e.prototype.ClickNext = function() {
this.content.removeAllChildren();
this.getHistory(this.pageIndex + 1);
};
e.prototype.ClicPrevious = function() {
this.content.removeAllChildren();
this.getHistory(this.pageIndex - 1);
};
e.prototype.checkBtn = function() {
if (1 == this.pageIndex) this.BtnNextAndPrevious[0].active = !1; else if (this.pageIndex == this.totalPage) this.BtnNextAndPrevious[1].active = !1; else {
this.BtnNextAndPrevious[0].active = !0;
this.BtnNextAndPrevious[1].active = !0;
}
};
e.prototype.showAccountHistory = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.CreateTime, i = o.TeamName, a = o.SessionID, s = o.Bet, c = o.Award, l = 0 == c ? c - s : c, p = cc.instantiate(this.template);
p.active = !0;
p.position = new cc.Vec3(0, 0, 0);
p.getChildByName("txtSeasion").getComponent(cc.Label).string = "ID: " + a;
if (n.length > 0) {
var h = r.VoltaConst.formatDateTime2(n);
p.getChildByName("txtNgay").getComponent(cc.Label).string = h;
}
if (l > 0) {
p.getChildByName("txtTienThang").getComponent(cc.Label).string = "+" + r.VoltaConst.formatNumberToKMB(l);
p.getChildByName("txtTienThang").color = cc.Color.GREEN;
} else if (l < 0) {
p.getChildByName("txtTienThang").getComponent(cc.Label).string = r.VoltaConst.formatNumberToKMB(l);
p.getChildByName("txtTienThang").color = cc.Color.RED;
}
p.getChildByName("txtTongCuoc").getComponent(cc.Label).string = r.VoltaConst.formatNumberToKMB(s);
p.getChildByName("txtDoiCuoc").getComponent(cc.Label).string = i;
p.getChildByName("txtTranDau").getComponent(cc.Label).string = "Volta - Bàn thắng vàng\n" + o.TeamA + " vs " + o.TeamB;
p.getChildByName("liner").active = !(e % 2);
this.content.addChild(p);
}
};
e.prototype.close = function() {
s.default.instance.OpacityView();
};
var o;
e._instance = null;
a([ p(cc.Node) ], e.prototype, "content", void 0);
a([ p(cc.Node) ], e.prototype, "template", void 0);
a([ p(cc.Node) ], e.prototype, "BtnNextAndPrevious", void 0);
a([ p(cc.Label) ], e.prototype, "totalPageTxt", void 0);
return o = a([ l ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../Volta.MainGame": "Volta.MainGame"
} ],
"Volta.MainGame": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "70b04y1IixMYIgaahGNNqx7", "Volta.MainGame");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.NetworkClient"), s = t("./Volta.Const"), c = t("./Volta.ThongKe"), l = t("./ChipMovent"), p = t("../../lobby/scripts/ChangeAvatar/ListAvatar"), h = cc._decorator, u = h.ccclass, f = h.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = 0;
e.m_nLocationIDWin = 0;
e._callback = null;
e.m_nBetType = 1;
e.isSpawnChip = !1;
e.isPopupOpen = !1;
e.ChipIntervalID = null;
e.indexChip = null;
e.isMenuOpen = !1;
e.logoNha = [];
e.logoKhach = [];
e.spriteWinLoseStreak = [];
e.btnCopy = [];
e.btnMenu = null;
e.nodeMenu = null;
e.streakDoiNha = null;
e.streakDoiKhach = null;
e.bordermsg = null;
e.nodeLive = null;
e.nodeLiveNative = null;
e.nodeViewLive = null;
e.nodeSelectChip = null;
e.nodeHomeWin = null;
e.nodeAwayWin = null;
e.EffectBet = [];
e.EffectWinMoney = [];
e.nodeLoading = null;
e.m_txtNickName = null;
e.m_txtMoney = null;
e.m_lblTurnID = null;
e.m_PercentWin = [];
e.m_lblResuldMd5 = null;
e.m_lblMessage = null;
e.m_lblUsersNha = null;
e.m_lblUsersKhach = null;
e.m_lblMoneyNha = null;
e.m_lblMoneyKhach = null;
e.m_lblBetedValueNha = null;
e.m_lblBetedValueKhach = null;
e.m_lblMoneyWin = null;
e.m_lblTimer = null;
e.winloseNha = null;
e.winloseKhach = null;
e.tenDoiNha = [];
e.tenDoiKhach = [];
e.PrefabHistory = null;
e.PrefabSeasionHistory = null;
e.PrefabGuide = null;
e.SpritetAvatar = null;
e.Avatar = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
this.nodeLoading.active = !0;
this.ketQuaEnd = fzgui.UserManager.instance.mainUserInfo.Money;
this.initVolta();
};
e.prototype.initVolta = function() {
this.SetAvatar();
this.defaultPositionNodeWin = this.EffectWinMoney[1].getPosition();
this.nodeLive.active = !1;
this.m_llBetValue = 1e3;
this.m_txtMoney.string = s.VoltaConst.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
this.m_txtNickName.string = fzgui.UserManager.instance.mainUserInfo.NickName;
this.bordermsg.active = !1;
this.m_lblTurnID.string = "";
this.m_lblUsersNha.string = "";
this.m_lblUsersKhach.string = "";
this.m_lblMoneyNha.string = "";
this.m_lblMoneyKhach.string = "";
this.m_lblMessage.string = "";
this.m_lblBetedValueKhach.string = "";
this.m_lblBetedValueNha.string = "";
};
e.prototype.onTouchSelectValueBet = function(t, e) {
this.nodeSelectChip.children.forEach(function(t) {
t.getChildByName("Chip_Glow").active = !1;
t.setPosition(t.position.x, 0);
});
t.target.getChildByName("Chip_Glow").active = !0;
t.target.setPosition(t.target.position.x, 20);
this.m_llBetValue = parseInt(e);
var o = this.nodeSelectChip, n = t.target;
this.indexChip = o.children.indexOf(n);
};
e.prototype.resultOfAccount = function(t) {
this.m_lblBetedValueKhach.string = "";
this.m_lblBetedValueNha.string = "";
var e, o, n = t.Balance;
this.ketQuaEnd = t.Balance;
e = t.Award;
o = t.Refund;
this.setBalance(n);
this.showPrizeValue(e, o);
};
e.prototype.showPrizeValue = function(t, e) {
var o = t;
if (t > 0) {
var n = "+" + s.VoltaConst.formatNumber(parseInt(o));
this.EffectWinMoney[0].active = !0;
this.EffectWinMoney[1].active = !0;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.EffectWinMoney[1].setPosition(this.defaultPositionNodeWin);
this.EffectWinMoney[1].runAction(cc.moveBy(3, cc.v2(0, 45)));
} else if (e > 0) {
n = "+" + s.VoltaConst.formatNumber(parseInt(e));
this.m_lblMoneyWin.node.color = cc.Color.YELLOW;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == s.VoltaConst.BetGate.GATE_HOME ? this.m_lblMoneyWin.node.setPosition(565, 207) : this.m_lblMoneyWin.node.setPosition(181, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
} else {
n = "-" + s.VoltaConst.formatNumber(parseInt(t));
this.m_lblMoneyWin.node.color = cc.Color.RED;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == s.VoltaConst.BetGate.GATE_HOME ? this.m_lblMoneyWin.node.setPosition(565, 207) : this.m_lblMoneyWin.node.setPosition(181, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
}
};
e.prototype.betOfAccount = function(t) {
if (t.length) {
fzgui.UITextManager.showCenterNotification("Bạn đã đặt cược thành công");
var e = t[0], o = t[1];
o >= 0 && fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, o);
var n = e.BetSide, i = e.BetValue;
this.setBettedVal(n, i);
this.setBalance(t[1]);
}
};
e.prototype.setBettedVal = function(t, e) {
t == s.VoltaConst.BetGate.GATE_HOME ? this.m_lblBetedValueNha.string = s.VoltaConst.formatNumber(e) : t == s.VoltaConst.BetGate.GATE_AWAY && (this.m_lblBetedValueKhach.string = s.VoltaConst.formatNumber(e));
};
e.prototype.betByaccount = function(t) {
t.BetSide == s.VoltaConst.BetGate.GATE_HOME ? this.m_lblBetedValueNha.string = s.VoltaConst.formatNumber(t.BetValue) : t.BetSide == s.VoltaConst.BetGate.GATE_AWAY && (this.m_lblBetedValueKhach.string = s.VoltaConst.formatNumber(t.BetValue));
};
e.prototype.setBalance = function(t) {
if (!(t < 0)) {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
this.m_txtMoney.string = s.VoltaConst.formatNumber(t);
}
};
e.prototype.GetCurrentRooms = function() {
r.default.instance.sendSignalR("EnterLobby", [ this.m_nBetType ]);
};
e.prototype.spawnChip = function() {
if (0 == this.isSpawnChip) {
this.isSpawnChip = !0;
this.ChipIntervalID = setInterval(function() {
l.default.instance.spawnChip();
}, 1e3);
}
};
e.prototype.sessionInfo = function(t) {
if (null != t) {
var e = t, o = e.TotalTeamB, n = e.TotalBetTeamB, i = e.TotalTeamA, a = e.TotalBetTeamA;
this.m_lblMoneyNha.string = s.VoltaConst.formatNumber(a);
this.m_lblMoneyKhach.string = s.VoltaConst.formatNumber(n);
this.m_lblUsersNha.string = s.VoltaConst.formatNumber(i);
this.m_lblUsersKhach.string = s.VoltaConst.formatNumber(o);
var r = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
a !== this._totalBetNha && this.m_lblMoneyNha.node.runAction(r.clone());
n !== this._totalBetKhach && this.m_lblMoneyKhach.node.runAction(r.clone());
i !== this._totalAccountNha && this.m_lblUsersNha.node.runAction(r.clone());
o !== this._totalAccountKhach && this.m_lblUsersKhach.node.runAction(r.clone());
this._totalBetKhach = n;
this._totalBetNha = a;
this._totalAccountKhach = o;
this._totalAccountNha = i;
this.tenDoiKhach[0].string = s.VoltaConst.cutStringWithEllipsis(t.TeamBName, 17).toUpperCase();
this.tenDoiKhach[1].string = s.VoltaConst.cutStringWithEllipsis(t.TeamBName, 15).toUpperCase();
this.tenDoiNha[0].string = s.VoltaConst.cutStringWithEllipsis(t.TeamAName, 17).toUpperCase();
this.tenDoiNha[1].string = s.VoltaConst.cutStringWithEllipsis(t.TeamAName, 15).toUpperCase();
s.VoltaConst.GameSessionID = t.RemoteSessionID;
this.m_llGameSessionID = t.RemoteSessionID;
this.m_nGameStatus = t.CurrentState;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
this.Md5AndResultText = this.m_nGameStatus == s.VoltaConst.GameStatus.END_BETTING ? s.VoltaConst.cutStringWithEllipsis(t.ResultString, 18) : s.VoltaConst.cutStringWithEllipsis(t.Md5String, 19);
this.m_lblResuldMd5.string = this.Md5AndResultText;
this.btnCopy[1].active = this.m_nGameStatus == s.VoltaConst.GameStatus.END_BETTING;
if (this.m_nGameStatus == s.VoltaConst.GameStatus.BETTING) {
this.nodeHomeWin.active = !1;
this.nodeAwayWin.active = !1;
this.m_lblTimer.node.active = !0;
this.m_lblTimer.string = t.Ellapsed;
this.EffectWinMoney[0].active = !1;
this.EffectWinMoney[1].active = !1;
this.EffectWinMoney[1].setPosition(this.defaultPositionNodeWin);
0 == this.isSpawnChip && this.spawnChip();
}
if (this.m_nGameStatus != s.VoltaConst.GameStatus.BETTING) {
this.m_lblTimer.string = "";
this.m_lblTimer.node.active = !1;
clearInterval(this.ChipIntervalID);
}
cc.sys.isNative;
if (this.m_nGameStatus == s.VoltaConst.GameStatus.BETTING) {
this.nodeLive.active = !1;
this.nodeLiveNative.active = !1;
} else if (this.m_nGameStatus == s.VoltaConst.GameStatus.RESULT && 0 == s.VoltaConst.isLoading && 0 == this.isPopupOpen) {
s.VoltaConst.urlVideo = "https://iuvtr.sb21.net/?link=" + t.VideoUrl;
cc.sys.isNative ? this.nodeLiveNative.active = !0 : this.nodeLive.active = !0;
}
this.m_nGameStatus == s.VoltaConst.GameStatus.END_BETTING && this.showResult(e.teamWin);
}
};
e.prototype.allSessionStatistic = function(t) {
this.m_PercentWin[0].string = t.rateTeamA + "%";
this.m_PercentWin[1].string = t.rateTeamB + "%";
c.default.instance.initData(t.history);
};
e.prototype.sessionStatistic = function(t) {
s.VoltaConst.getImage(t.teamALogo, this.logoNha[0]);
s.VoltaConst.getImage(t.teamALogo, this.logoNha[1]);
s.VoltaConst.getImage(t.teamBLogo, this.logoKhach[0]);
s.VoltaConst.getImage(t.teamBLogo, this.logoKhach[1]);
for (var e = 0, o = 0, n = 0; n < t.teamAStreak.length; n++) {
"L" == t.teamAStreak[n] && e++;
this.streakDoiNha.getChildByName("dot" + (n + 1)).getComponent(cc.Sprite).spriteFrame = "L" == t.teamAStreak[n] ? this.spriteWinLoseStreak[0] : this.spriteWinLoseStreak[1];
}
for (n = 0; n < t.teamBStreak.length; n++) {
"L" == t.teamBStreak[n] && o++;
this.streakDoiKhach.getChildByName("dot" + (n + 1)).getComponent(cc.Sprite).spriteFrame = "L" == t.teamBStreak[n] ? this.spriteWinLoseStreak[0] : this.spriteWinLoseStreak[1];
}
this.winloseNha.string = "W " + (10 - e) + "\nL " + e;
this.winloseKhach.string = "W " + (10 - o) + "\nL " + o;
};
e.prototype.showResult = function(t) {
if (t == s.VoltaConst.BetGate.GATE_HOME) {
this.nodeHomeWin.active = !0;
l.default.instance.hideAndCollectChips(2);
} else if (t == s.VoltaConst.BetGate.GATE_AWAY) {
this.nodeAwayWin.active = !0;
l.default.instance.hideAndCollectChips(1);
}
this.isSpawnChip = !1;
null != this._callback && this._callback(s.VoltaConst.RETURN_RESULT, this.m_nLocationIDWin);
};
e.prototype.touchHome = function() {
this.EffectBet[0].opacity = 255;
this.EffectBet[0].runAction(cc.fadeOut(1));
this.m_nBetGate = s.VoltaConst.BetGate.GATE_HOME;
this.SetBet();
};
e.prototype.touchAway = function() {
this.EffectBet[1].opacity = 255;
this.EffectBet[1].runAction(cc.fadeOut(1));
this.m_nBetGate = s.VoltaConst.BetGate.GATE_AWAY;
this.SetBet();
};
e.prototype.SetBet = function() {
if (this.m_nGameStatus != s.VoltaConst.GameStatus.RESULT && this.m_nGameStatus != s.VoltaConst.GameStatus.PREPARE_NEW_SESSION && this.m_nGameStatus != s.VoltaConst.GameStatus.END_BETTING) {
r.default.instance.sendSignalR("Bet", [ this.m_llBetValue, this.m_nBetGate, 1 ]);
l.default.instance.spawnChipPlayer(this.m_nBetGate + 1, this.indexChip);
} else this.showMessage("Hết giờ đặt cửa");
};
e.prototype.showMessage = function(t) {
this.bordermsg.active = !0;
this.m_lblMessage.node.getParent().active = !0;
this.m_lblMessage.string = t;
this.m_lblMessage.node.getParent().opacity = 255;
this.m_lblMessage.node.getParent().stopAllActions();
var e = cc.fadeOut(3);
this.m_lblMessage.node.getParent().runAction(e);
};
e.prototype.OpacityView = function() {
if (1 == this.isPopupOpen) {
1 == cc.sys.isNative ? this.nodeLiveNative.active = !0 : this.nodeViewLive.active = !0;
this.isPopupOpen = !1;
} else if (0 == this.isPopupOpen) {
1 == cc.sys.isNative ? this.nodeLiveNative.active = !1 : this.nodeViewLive.active = !1;
this.isPopupOpen = !0;
}
};
e.prototype.onClickMenu = function() {
if (0 == this.isMenuOpen) {
this.nodeMenu.active = !0;
this.isMenuOpen = !0;
this.btnMenu.scaleX = -1;
} else {
this.nodeMenu.active = !1;
this.isMenuOpen = !1;
this.btnMenu.scaleX = 1;
}
};
e.prototype.clickBack = function() {
fzgui.UIScreenManager.instance.popToRootScreen();
};
e.prototype.clickCopy = function() {
fzgui.PlatformInterface.copy(this.Md5AndResultText);
};
e.prototype.clickHistory = function() {
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabHistory);
};
e.prototype.clickSeasionHistory = function() {
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabSeasionHistory);
};
e.prototype.clickGuide = function() {
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabGuide);
};
e.prototype.SetAvatar = function() {
var t = this.SpritetAvatar.ListSpriteAvatar;
this.Avatar.spriteFrame = t[fzgui.UserManager.instance.mainUserInfo.Avatar];
};
e.prototype.onDestroy = function() {
clearInterval(this.ChipIntervalID);
s.VoltaConst.isLoading = !0;
};
var o;
e._instance = null;
a([ f(cc.Sprite) ], e.prototype, "logoNha", void 0);
a([ f(cc.Sprite) ], e.prototype, "logoKhach", void 0);
a([ f(cc.SpriteFrame) ], e.prototype, "spriteWinLoseStreak", void 0);
a([ f(cc.Node) ], e.prototype, "btnCopy", void 0);
a([ f(cc.Node) ], e.prototype, "btnMenu", void 0);
a([ f(cc.Node) ], e.prototype, "nodeMenu", void 0);
a([ f(cc.Node) ], e.prototype, "streakDoiNha", void 0);
a([ f(cc.Node) ], e.prototype, "streakDoiKhach", void 0);
a([ f(cc.Node) ], e.prototype, "bordermsg", void 0);
a([ f(cc.Node) ], e.prototype, "nodeLive", void 0);
a([ f(cc.Node) ], e.prototype, "nodeLiveNative", void 0);
a([ f(cc.Node) ], e.prototype, "nodeViewLive", void 0);
a([ f(cc.Node) ], e.prototype, "nodeSelectChip", void 0);
a([ f(cc.Node) ], e.prototype, "nodeHomeWin", void 0);
a([ f(cc.Node) ], e.prototype, "nodeAwayWin", void 0);
a([ f(cc.Node) ], e.prototype, "EffectBet", void 0);
a([ f(cc.Node) ], e.prototype, "EffectWinMoney", void 0);
a([ f(cc.Node) ], e.prototype, "nodeLoading", void 0);
a([ f(cc.Label) ], e.prototype, "m_txtNickName", void 0);
a([ f(cc.Label) ], e.prototype, "m_txtMoney", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
a([ f(cc.Label) ], e.prototype, "m_PercentWin", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblResuldMd5", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMessage", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblUsersNha", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblUsersKhach", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyNha", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyKhach", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblBetedValueNha", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblBetedValueKhach", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
a([ f(cc.Label) ], e.prototype, "m_lblTimer", void 0);
a([ f(cc.Label) ], e.prototype, "winloseNha", void 0);
a([ f(cc.Label) ], e.prototype, "winloseKhach", void 0);
a([ f(cc.Label) ], e.prototype, "tenDoiNha", void 0);
a([ f(cc.Label) ], e.prototype, "tenDoiKhach", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabHistory", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabSeasionHistory", void 0);
a([ f(cc.Prefab) ], e.prototype, "PrefabGuide", void 0);
a([ f(p.default) ], e.prototype, "SpritetAvatar", void 0);
a([ f(cc.Sprite) ], e.prototype, "Avatar", void 0);
return o = a([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../lobby/scripts/ChangeAvatar/ListAvatar": void 0,
"./ChipMovent": "ChipMovent",
"./Volta.Const": "Volta.Const",
"./Volta.ThongKe": "Volta.ThongKe",
"./network/Volta.NetworkClient": "Volta.NetworkClient"
} ],
"Volta.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ea260EUgpND2pYFOmTjedQ4", "Volta.NetworkClient");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), s = t("../Volta.MainGame"), c = cc._decorator, l = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.isConnect = !1;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.connect = function() {
console.log("Connect");
var t = {
url: "https://volta." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "gamehub",
ip: "http://18.138.207.162:9001/signalr/negotiate",
gate: fzgui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(r.VoltaConst.ON_VOLTA_SOCKET, this.onResponeData, this);
cc.systemEvent.on(r.VoltaConst.ON_VOLTA_SOCKET, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(r.VoltaConst.ON_VOLTA_SOCKET, t.url, t.hub, t.gate, fzgui.UserManager.instance.mainUserInfo.cookie, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
fzgui.ZLog.log("=====================CONNECT WS TX===============================");
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s || "1" == t.s) if (this.isConnect) this.sendSignalR("EnterLobby", []); else {
this.isConnect = !0;
this.connectSuccess();
this.sendSignalR("EnterLobby", []);
}
if (t.R < 0) switch (t.R) {
case -207:
fzgui.UITextManager.showCenterNotification("Đã hết thời gian đặt cửa");
break;

case -208:
fzgui.UITextManager.showCenterNotification("Không thể đặt cả 2 cửa trong 1 phiên");
break;

case -212:
case -213:
fzgui.UITextManager.showCenterNotification("Giá trị nhập không hợp lệ");
break;

case -232:
fzgui.UITextManager.showCenterNotification("Định dạng dữ liệu lỗi");
break;

case -99:
fzgui.UITextManager.showCenterNotification("Lỗi hệ thống");
break;

case -102:
fzgui.UITextManager.showCenterNotification("Access Token không hợp lệ");
break;

case -51:
fzgui.UITextManager.showCenterNotification("Số dư không đủ");
break;

case -52:
fzgui.UITextManager.showCenterNotification("Vui lòng bảo mật tài khoản trước khi cược");
break;

case -48:
fzgui.UITextManager.showCenterNotification("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
fzgui.UITextManager.showCenterNotification("Đặt cửa thất bại");
}
if (t.M && Array.isArray(t.M) && 0 != t.M.length && t.M != []) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "sessionInfo":
s.default.instance.sessionInfo(i);
break;

case "winResult":
s.default.instance.resultOfAccount(i);
break;

case "betSuccess":
s.default.instance.betOfAccount(n.A);
break;

case "betOfAccount":
s.default.instance.betByaccount(i);
break;

case "sessionStatistic":
s.default.instance.sessionStatistic(i);
break;

case "allSessionStatistic":
s.default.instance.allSessionStatistic(i);
}
}
}
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
fzgui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(r.VoltaConst.ON_VOLTA_SOCKET, this.onResponeData, this);
this.mSignalr.close();
fzgui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
fzgui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = a([ l ], e);
}(cc.Component));
o.default = p;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../Volta.MainGame": "Volta.MainGame"
} ],
"Volta.SeasionHistory": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9767m/YnxLBL/bVUWhBNRB", "Volta.SeasionHistory");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), s = t("../Volta.MainGame"), c = cc._decorator, l = c.ccclass, p = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.BtnNextAndPrevious = [];
e.totalPageTxt = null;
e.pageIndex = 1;
e.pageSize = 8;
e.totalPage = null;
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
o._instance = this;
fzgui.UIWaitingLayout.showWaiting();
this.getSeasionHistory(this.pageIndex);
};
e.prototype.getSeasionHistory = function(t) {
var e = this, o = "https://volta." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/api/volta/GetSessionHistory?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken + "&pageIndex=" + t + "&pageSize=" + this.pageSize;
fzgui.Https.get(o, function(t) {
if (t) {
fzgui.UIWaitingLayout.hideWaiting();
e.pageIndex = t.PageIndex;
e.totalPage = t.TotalPages;
e.checkBtn();
e.totalPageTxt.string = "Trang: " + e.pageIndex + "/61";
e.showSeasionHistory(t.Data);
} else fzgui.UIWaitingLayout.hideWaiting();
});
};
e.prototype.ClickNext = function() {
this.content.removeAllChildren();
this.getSeasionHistory(this.pageIndex + 1);
};
e.prototype.ClicPrevious = function() {
this.content.removeAllChildren();
this.getSeasionHistory(this.pageIndex - 1);
};
e.prototype.checkBtn = function() {
if (1 == this.pageIndex) this.BtnNextAndPrevious[0].active = !1; else if (this.pageIndex == this.totalPage) this.BtnNextAndPrevious[1].active = !1; else {
this.BtnNextAndPrevious[0].active = !0;
this.BtnNextAndPrevious[1].active = !0;
}
};
e.prototype.showSeasionHistory = function(t) {
if (t) for (var e = function(e) {
var n = t[e], i = n.CreatedDate, a = n.TeamA, s = n.TeamB, c = 0 == n.TeamWin ? a : s, l = r.VoltaConst.cutStringWithEllipsis(n.Md5String, 9), p = r.VoltaConst.cutStringWithEllipsis(n.ResultString, 8), h = cc.instantiate(o.template);
h.active = !0;
h.position = new cc.Vec3(0, 0, 0);
if (i.length > 0) {
var u = r.VoltaConst.formatDateTime2(i);
h.getChildByName("txtNgay").getComponent(cc.Label).string = u;
}
h.getChildByName("txtMd5").getComponent(cc.Label).string = l;
h.getChildByName("txxResult").getComponent(cc.Label).string = p;
h.getChildByName("txtDoiThang").getComponent(cc.Label).string = c;
h.getChildByName("txtDoiBong").getComponent(cc.Label).string = a + "\n" + s;
h.getChildByName("btnCopyMd5").getComponent(cc.Button).node.on("click", function() {
t = n.Md5String, fzgui.PlatformInterface.copy(t);
var t;
});
h.getChildByName("btnCopyResult").getComponent(cc.Button).node.on("click", function() {
t = n.ResultString, fzgui.PlatformInterface.copy(t);
var t;
});
h.getChildByName("liner").active = !(e % 2);
o.content.addChild(h);
}, o = this, n = 0; n < t.length; n++) e(n);
};
e.prototype.close = function() {
s.default.instance.OpacityView();
};
e.prototype.clickCopy = function(t) {
fzgui.PlatformInterface.copy(t);
};
var o;
e._instance = null;
a([ p(cc.Node) ], e.prototype, "content", void 0);
a([ p(cc.Node) ], e.prototype, "template", void 0);
a([ p(cc.Node) ], e.prototype, "BtnNextAndPrevious", void 0);
a([ p(cc.Label) ], e.prototype, "totalPageTxt", void 0);
return o = a([ l ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../Volta.MainGame": "Volta.MainGame"
} ],
"Volta.ThongKe": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "254bfHSIu1OA7w2xoS1mU2q", "Volta.ThongKe");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, n) {
var i, a = arguments.length, r = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pnlSC = null;
e.template = null;
e.ellipseHome = null;
e.ellipseAway = null;
e._arrSC = [];
return e;
}
o = e;
Object.defineProperty(e, "instance", {
get: function() {
o._instance || (o._instance = new o());
return o._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
o._instance = this;
};
e.prototype.initData = function(t) {
this.pnlSC.removeAllChildren();
var e = -1, o = 0, n = t[0];
this._arrSC = [];
for (var i in t) {
if ((r = t[i]) !== n) {
o++;
n = r;
}
o < 31 && this._arrSC.push(r);
}
e = -1;
o = 0;
n = this._arrSC[this._arrSC.length - 1];
for (var a = 0; a <= this._arrSC.length - 1; a++) {
var r;
if ((r = this._arrSC[a]) !== n) {
o++;
e = 0;
n = r;
} else if (6 == ++e) {
e = 0;
o++;
}
if (o > 31) break;
var s = cc.instantiate(this.template);
s.position = new cc.Vec3(0, 0);
s.active = !0;
s.getComponent(cc.Sprite).spriteFrame = "H" === r ? this.ellipseHome : this.ellipseAway;
s.setPosition(this.getPosforSC(o, e));
this.pnlSC.addChild(s);
}
};
e.prototype.getPosforSC = function(t, e) {
var o = -13.5 - 28 * t, n = -13 - 29 * e;
return cc.v2(o, n);
};
var o;
e._instance = null;
a([ c(cc.Node) ], e.prototype, "pnlSC", void 0);
a([ c(cc.Node) ], e.prototype, "template", void 0);
a([ c(cc.SpriteFrame) ], e.prototype, "ellipseHome", void 0);
a([ c(cc.SpriteFrame) ], e.prototype, "ellipseAway", void 0);
return o = a([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"Volta.lbCountDown": [ function(t, e) {
"use strict";
cc._RF.push(e, "effd5l3a3RPhL1EKt6FbwNh", "Volta.lbCountDown");
cc.Class({
extends: cc.Component,
properties: {
lbGameCooldown1: cc.Label,
lbGameCooldown2: cc.Label,
remaningTime: 0,
_posNum1: cc.v2(0, 0),
_posNum2: cc.v2(0, 0)
},
onLoad: function() {
this._posNum1 = this.lbGameCooldown1.node.position;
this._posNum2 = this.lbGameCooldown2.node.position;
},
setRemaningTime: function(t) {
this.remaningTime = t;
var e = ("0" + Math.floor(this.remaningTime)).slice(-2);
this.lbGameCooldown1.string = e[0];
this.lbGameCooldown2.string = e[1];
},
getRemaningTime: function() {
return this.remaningTime;
},
_changeColorTime: function() {
this.remaningTime < 6 ? (this.lbGameCooldown1.node.color = cc.Color.RED, this.lbGameCooldown2.node.color = cc.Color.RED) : (this.lbGameCooldown1.node.color = cc.Color.WHITE, 
this.lbGameCooldown2.node.color = cc.Color.WHITE);
},
update: function(t) {
if (null != this.remaningTime) {
var e = this.lbGameCooldown1.string, o = this.lbGameCooldown2.string;
this.remaningTime = Math.max(this.remaningTime - t, 0);
if (this.remaningTime <= 6) {
this.lbGameCooldown1.node.color = new cc.Color(255, 0, 0, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 0, 0, 0);
} else {
this.lbGameCooldown1.node.color = new cc.Color(255, 255, 255, 0);
this.lbGameCooldown2.node.color = new cc.Color(255, 255, 255, 0);
}
this.setRemaningTime(this.remaningTime);
var n = this.lbGameCooldown1.string, i = this.lbGameCooldown2.string;
if (e !== n && (this.lbGameCooldown1.node.position = this._posNum1.add(cc.v2(0, this.lbGameCooldown1.node.height / 2)))) {
this.lbGameCooldown1.node.opacity = 0;
this.lbGameCooldown1.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum1).easing(cc.easeBackOut())));
}
if (o !== i && (this.lbGameCooldown2.node.position = this._posNum2.add(cc.v2(0, this.lbGameCooldown2.node.height / 2)))) {
this.lbGameCooldown2.node.opacity = 0;
this.lbGameCooldown2.node.runAction(cc.spawn(cc.fadeIn(.23), cc.moveTo(.23, this._posNum2).easing(cc.easeBackOut())));
}
}
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "ChipMovent", "Iframe.Volta", "LiveVolta", "LoadingVolta", "MoveBulletVolta", "VideoPlayer", "Volta.BatNanCtrl", "Volta.Chat", "Volta.Const", "Volta.HistoryTurn", "Volta.MainGame", "Volta.ThongKe", "Volta.lbCountDown", "Volta.Chat.NetworkClient", "Volta.NetworkClient", "Volta.Guide", "Volta.History", "Volta.SeasionHistory" ]);