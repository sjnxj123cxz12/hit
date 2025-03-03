window.__require = function t(e, o, n) {
function i(r, c) {
if (!o[r]) {
if (!e[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var h = o[r] = {
exports: {}
};
e[r][0].call(h.exports, function(t) {
return i(e[r][1][t] || t);
}, h, h.exports, t, e, o, n);
}
return o[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = t("./Volta.Const"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.webview = null;
return e;
}
e.prototype.onEnable = function() {
this.webview.url = l.VoltaConst.urlVideo;
};
a([ s(cc.WebView) ], e.prototype, "webview", void 0);
return a([ c ], e);
}(cc.Component);
o.default = h;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./Volta.Const"), c = cc._decorator, s = c.ccclass, l = c.property, h = function(t) {
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
if (this.progress.node.parent.active) {
if (this.progress.progress >= 1) {
if (!this.isFull) {
this.isFull = !0;
r.VoltaConst.isLoading = !1;
this.progress.node.parent.active = !1;
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
return a([ s ], e);
}(cc.Component);
o.default = h;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = function(t) {
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
a([ s(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
a([ s(cc.Node) ], e.prototype, "movingNode", void 0);
a([ s ], e.prototype, "progressSpeed", void 0);
return a([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = (r.property, function(t) {
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
return a([ c ], e);
}(cc.Component));
o.default = s;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Chat"), c = t("../Volta.Const"), s = cc._decorator, l = s.ccclass, h = (s.property, 
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
cc.systemEvent.off(c.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
cc.systemEvent.on(c.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(c.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, t.url, t.hub, t.gate, fzgui.UserManager.instance.mainUserInfo.cookie, !1);
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
cc.systemEvent.off(c.VoltaConst.CHAT_VOLTA_SOCKET_EVENT, this.onResponeData, this);
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
o.default = h;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.Chat.NetworkClient"), c = cc._decorator, s = c.ccclass, l = c.property, h = function(t) {
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
var a = i, r = cc.instantiate(this.templateMessage), c = o.n, s = n;
r.active = !0;
c = (c.localeCompare(fzgui.UserManager.instance.mainUserInfo.NickName), s);
r.getComponent(cc.Label).string = c + ": " + a;
if (1 == t.IsVipTx) {
r.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
r.getChildByName("lb_nameVip").getComponent(cc.Label).string = c + ": ";
r.off(cc.Node.EventType.SIZE_CHANGED);
r.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (r.getContentSize().height - r.getChildByName("lb_nameVip").getContentSize().height) / 2;
r.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
r.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
r.getChildByName("lb_name").getComponent(cc.Label).string = c + ": ";
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
return o = a([ s ], e);
}(cc.Component);
o.default = h;
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
return e[0] + "\n" + e[1];
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = t("../Volta.MainGame"), h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listguide = [];
e.guide = null;
return e;
}
e.prototype.start = function() {
this.guide.spriteFrame = this.listguide[0];
};
e.prototype.onclicktypeguide = function(t, e) {
switch (e) {
case "0":
this.guide.spriteFrame = this.listguide[0];
break;

case "1":
this.guide.spriteFrame = this.listguide[1];
break;

case "2":
this.guide.spriteFrame = this.listguide[2];
break;

case "3":
this.guide.spriteFrame = this.listguide[3];
break;

default:
console.log("Không có case được chọn");
}
};
e.prototype.close = function() {
l.default.instance.OpacityView();
};
a([ s(cc.SpriteFrame) ], e.prototype, "listguide", void 0);
a([ s(cc.Sprite) ], e.prototype, "guide", void 0);
return a([ c ], e);
}(cc.Component);
o.default = h;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.NetworkClient"), c = t("./Volta.Const"), s = cc._decorator, l = s.ccclass, h = s.property, p = function(t) {
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
r.default.instance.sendSignalR("GetSessionResultHistory", [ c.VoltaConst.diceNode.GameSessionID ]);
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
this.m_GameSessionID >= c.VoltaConst.GameSessionID ? this.m_GameSessionID = c.VoltaConst.GameSessionID - 1 : r.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
};
e.prototype.touchBtnL = function() {
this.imgEffectTai.node.active = !1;
this.imgEffectXiu.node.active = !1;
this.m_GameSessionID--;
cc.log(this.m_GameSessionID);
this.m_GameSessionID < c.VoltaConst.GameSessionID - 15 ? this.m_GameSessionID = c.VoltaConst.GameSessionID - 15 : r.default.instance.sendSignalR("GetSessionResultHistory", [ this.m_GameSessionID ]);
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
this.lbTotalBetTai.string = c.VoltaConst.formatNumber(t);
this.lbTotalRefundTai.string = c.VoltaConst.formatNumber(o);
this.lbTotalRefundXiu.string = c.VoltaConst.formatNumber(n);
this.lbTotalBetXiu.string = c.VoltaConst.formatNumber(e);
this.m_GameSessionID = this.m_coinData[0].GameSessionID;
this.txtSessionInfo.getComponent(cc.Label).string = "#" + this.m_GameSessionID;
var a = this.m_coinData[0].Result.split(",");
for (i = 0; i < 3; i++) this.XucXac[i].getComponent(cc.Sprite).spriteFrame = this.imgDices[parseInt(a[i]) - 1];
if (this.m_coinData[0].LocationWinID == c.VoltaConst.BetGate.GATE_HOME) {
this.imgEffectTai.node.active = !0;
this.imgEffectTai.node.runAction(cc.rotateBy(.5, 360).repeatForever());
} else if (this.m_coinData[0].LocationWinID == c.VoltaConst.BetGate.GATE_AWAY) {
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
n.getChildByName("txtTienDat").getComponent(cc.Label).string = c.VoltaConst.formatNumber(o.TotalBetValue);
n.getChildByName("txtTraLai").getComponent(cc.Label).string = c.VoltaConst.formatNumber(o.RefundValue);
n.getChildByName("line").getComponent(cc.Sprite).spriteFrame = null;
1 == t ? this.lvTaiContent.addChild(n) : this.lvXiuContent.addChild(n);
};
var o;
e._instance = null;
a([ h(cc.Button) ], e.prototype, "btnR", void 0);
a([ h(cc.Button) ], e.prototype, "btnL", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalBetTai", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalBetXiu", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalRefundTai", void 0);
a([ h(cc.Label) ], e.prototype, "lbTotalRefundXiu", void 0);
a([ h(cc.Label) ], e.prototype, "txtSessionInfo", void 0);
a([ h(cc.Label) ], e.prototype, "txtTotalDice", void 0);
a([ h([ cc.Sprite ]) ], e.prototype, "XucXac", void 0);
a([ h(cc.Sprite) ], e.prototype, "imgEffectTai", void 0);
a([ h(cc.Sprite) ], e.prototype, "imgEffectXiu", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "imgDices", void 0);
a([ h(cc.Node) ], e.prototype, "lvTaiContent", void 0);
a([ h(cc.Node) ], e.prototype, "lvXiuContent", void 0);
a([ h(cc.Node) ], e.prototype, "template", void 0);
return o = a([ l ], e);
}(fzgui.UIPopup);
o.default = p;
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), c = t("../Volta.MainGame"), s = cc._decorator, l = s.ccclass, h = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.sprline = [];
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
var t = this;
o._instance = this;
fzgui.UIWaitingLayout.showWaiting();
var e = "https://Volta." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/api/luckydice/GetHistory?token=" + fzgui.UserManager.instance.mainUserInfo.GameToken;
r.VoltaConst.getUrl(e, function(e, o) {
if (o >= 200 && o < 400) {
e && fzgui.UIWaitingLayout.hideWaiting();
var n = e;
console.log(e);
t.showAccountHistoryTaiXiu(n);
} else {
fzgui.UIWaitingLayout.hideWaiting();
fzgui.UIPopupManager.instance.showPopup(e);
}
});
};
e.prototype.showAccountHistoryTaiXiu = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.CreateTime, i = o.BetSide, a = o.Result;
i = 1 == o.BetSide ? "Xỉu" : "Tài";
var c = o.SessionID, s = o.Bet, l = o.Refund, h = o.Award, p = h - s + l, u = cc.instantiate(this.template);
u.position = new cc.Vec3(0, 0, 0);
u.getChildByName("txtPhien").getComponent(cc.Label).string = "" + c;
if (n.length > 0) {
var f = r.VoltaConst.formatDateTime2(n);
u.getChildByName("txtThoiGian").getComponent(cc.Label).string = f;
u.getChildByName("txtThoiGian").color = cc.Color.WHITE;
}
if (p > 0) {
u.getChildByName("txtTienThang").getComponent(cc.Label).string = r.VoltaConst.formatNumber(h);
u.getChildByName("txtTienThang").color = cc.Color.GREEN;
} else if (p < 0) {
u.getChildByName("txtTienThang").getComponent(cc.Label).string = r.VoltaConst.formatNumber(h);
u.getChildByName("txtTienThang").color = cc.Color.RED;
} else u.getChildByName("txtTienThang").getComponent(cc.Label).string = "Hòa";
u.getChildByName("txtTongCuoc").getComponent(cc.Label).string = r.VoltaConst.formatNumber(s - l);
u.getChildByName("txtChiTiet").getComponent(cc.Label).string = "Đặt " + i + ". Kết quả " + a + ", Tổng đặt \n" + r.VoltaConst.formatNumber(s) + " Hoàn trả " + r.VoltaConst.formatNumber(l) + " Nhận " + r.VoltaConst.formatNumber(h);
u.getChildByName("line2").getComponent(cc.Sprite).spriteFrame = this.sprline[0];
u.getChildByName("liner").active = !!(e % 2);
this.content.addChild(u);
}
};
e.prototype.close = function() {
c.default.instance.OpacityView();
};
var o;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "content", void 0);
a([ h(cc.Node) ], e.prototype, "template", void 0);
a([ h([ cc.SpriteFrame ]) ], e.prototype, "sprline", void 0);
return o = a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../Volta.MainGame": "Volta.MainGame"
} ],
"Volta.ItemHistory": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "128bb54BypAwqaGgcHgxJfZ", "Volta.ItemHistory");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), c = cc._decorator, s = c.ccclass, l = c.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtPhien = null;
e.txtThoiGian = null;
e.Dice1 = null;
e.Dice2 = null;
e.Dice3 = null;
e.bguser = null;
e.lineJp = null;
e.txtCuaDat = null;
e.txtUser = null;
e.BtnVinhdanh = null;
e.txtTienNohu = null;
e.txtVinhDanh1 = null;
e.txtVinhDanh2 = null;
e.txtVinhDanh3 = null;
e.txtTienTrung1 = null;
e.txtTienTrung2 = null;
e.txtTienTrung3 = null;
e.SprDice = [];
e._delegate = null;
return e;
}
e.prototype.setDelegate = function(t) {
this._delegate = t;
};
e.prototype.setData = function(t, e) {
var o = t, n = o.SessionTime, i = o.LocationName, a = (o.Result, o.Data[0].Username), c = o.Data[1].Username, s = o.Data[2].Username, l = o.Data[0].JackpotValue, h = o.Data[1].JackpotValue, p = o.Data[2].JackpotValue;
o.LocationIDWin;
var u = o.GameSessionID, f = o.TotalJackpot;
this.txtPhien.string = "" + u;
this.txtPhien.node.color = cc.Color.YELLOW;
if (n.length > 0) {
r.VoltaConst.formatDateTime(n);
this.txtThoiGian.node.color = cc.Color.WHITE;
}
this.Dice1.spriteFrame = this.SprDice[o.Dice1 - 1];
this.Dice2.spriteFrame = this.SprDice[o.Dice1 - 1];
this.Dice3.spriteFrame = this.SprDice[o.Dice1 - 1];
this.bguser.spriteFrame = this.bguser[0];
this.lineJp.spriteFrame = this.bguser[1];
this.lineJp.node.active = !(e % 2);
this.txtCuaDat.string = i;
this.txtUser.string = o.TotalUser;
this.txtCuaDat.node.color = cc.Color.WHITE;
this.BtnVinhdanh.getComponent(cc.Sprite).spriteFrame = this.bguser[2];
this.txtTienNohu.string = r.VoltaConst.formatNumberMin(f);
this.txtTienNohu.node.color = cc.Color.YELLOW;
this.txtVinhDanh1.string = r.VoltaConst.formatUserName(a);
this.txtVinhDanh2.string = r.VoltaConst.formatUserName(c);
this.txtVinhDanh3.string = r.VoltaConst.formatUserName(s);
this.txtTienTrung1.string = r.VoltaConst.formatNumberMin(l);
this.txtTienTrung1.horizontalAlign = 2;
this.txtTienTrung2.string = r.VoltaConst.formatNumberMin(h);
this.txtTienTrung2.horizontalAlign = 2;
this.txtTienTrung3.string = r.VoltaConst.formatNumberMin(p);
this.txtTienTrung3.horizontalAlign = 2;
this.node.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
};
e.prototype.onClickShowVinhDanh = function() {};
a([ l(cc.Label) ], e.prototype, "txtPhien", void 0);
a([ l(cc.Label) ], e.prototype, "txtThoiGian", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice1", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice2", void 0);
a([ l(cc.Sprite) ], e.prototype, "Dice3", void 0);
a([ l(cc.Sprite) ], e.prototype, "bguser", void 0);
a([ l(cc.Sprite) ], e.prototype, "lineJp", void 0);
a([ l(cc.Label) ], e.prototype, "txtCuaDat", void 0);
a([ l(cc.Label) ], e.prototype, "txtUser", void 0);
a([ l(cc.Button) ], e.prototype, "BtnVinhdanh", void 0);
a([ l(cc.Label) ], e.prototype, "txtTienNohu", void 0);
a([ l(cc.Label) ], e.prototype, "txtVinhDanh1", void 0);
a([ l(cc.Label) ], e.prototype, "txtVinhDanh2", void 0);
a([ l(cc.Label) ], e.prototype, "txtVinhDanh3", void 0);
a([ l(cc.Label) ], e.prototype, "txtTienTrung1", void 0);
a([ l(cc.Label) ], e.prototype, "txtTienTrung2", void 0);
a([ l(cc.Label) ], e.prototype, "txtTienTrung3", void 0);
a([ l(cc.SpriteFrame) ], e.prototype, "SprDice", void 0);
return a([ s ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const"
} ],
"Volta.Jackpot": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "79fe4LQlFxIzrYjU44eSAel", "Volta.Jackpot");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../network/Volta.NetworkClient"), c = t("../Volta.Const"), s = cc._decorator, l = s.ccclass, h = s.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.SprDice = [];
e.bg = null;
e.bguser = [];
e.NodeChiTiet = null;
e.contentVd = null;
e.templateVd = null;
e._data = null;
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
fzgui.UIWaitingLayout.showWaiting();
this.NodeChiTiet.active = !1;
o._instance = this;
r.default.instance.sendSignalR("GetJackpotHistory", []);
};
e.prototype.showTopJackpotTX = function(t) {
if (t) {
t && fzgui.UIWaitingLayout.hideWaiting();
this._data = t;
for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.SessionTime, i = o.LocationName, a = (o.Result, o.Data[0].Username), r = o.Data[1].Username, s = o.Data[2].Username, l = o.Data[0].JackpotValue, h = o.Data[1].JackpotValue, p = o.Data[2].JackpotValue;
o.LocationIDWin;
var u = o.GameSessionID, f = o.TotalJackpot, g = cc.instantiate(this.template);
g.active = !0;
g.setPosition(0, 0);
g.getChildByName("txtPhien").getComponent(cc.Label).string = "" + u;
g.getChildByName("txtPhien").color = cc.Color.YELLOW;
if (n.length > 0) {
var d = c.VoltaConst.formatDateTime(n);
g.getChildByName("txtThoiGian").getComponent(cc.Label).string = d;
g.getChildByName("txtThoiGian").color = cc.Color.WHITE;
}
g.getChildByName("Dice1").getComponent(cc.Sprite).spriteFrame = this.SprDice[o.Dice1 - 1];
g.getChildByName("Dice2").getComponent(cc.Sprite).spriteFrame = this.SprDice[o.Dice1 - 1];
g.getChildByName("Dice3").getComponent(cc.Sprite).spriteFrame = this.SprDice[o.Dice1 - 1];
g.getChildByName("lineJp").getComponent(cc.Sprite).spriteFrame = this.bguser[0];
g.getChildByName("lineJp").active = !(e % 2);
g.getChildByName("txtCuaDat").getComponent(cc.Label).string = i;
g.getChildByName("txtCuaDat").color = cc.Color.WHITE;
g.getChildByName("Btn-Vinhdanh").getComponent(cc.Sprite).spriteFrame = this.bguser[1];
g.getChildByName("Btn-Vinhdanh").on("click", this.touchbtnchitiet, this);
g.getChildByName("Btn-Vinhdanh").name = e.toString();
g.getChildByName("txtTienNohu").getComponent(cc.Label).string = c.VoltaConst.formatNumberMin(f);
g.getChildByName("txtTienNohu").color = cc.Color.YELLOW;
g.getChildByName("txtVinhDanh1").getComponent(cc.Label).string = c.VoltaConst.formatUserName(a);
g.getChildByName("txtVinhDanh2").getComponent(cc.Label).string = c.VoltaConst.formatUserName(r);
g.getChildByName("txtVinhDanh3").getComponent(cc.Label).string = c.VoltaConst.formatUserName(s);
g.getChildByName("txtTienTrung1").getComponent(cc.Label).string = c.VoltaConst.formatNumberMin(l);
g.getChildByName("txtTienTrung1").getComponent(cc.Label).horizontalAlign = 2;
g.getChildByName("txtTienTrung2").getComponent(cc.Label).string = c.VoltaConst.formatNumberMin(h);
g.getChildByName("txtTienTrung2").getComponent(cc.Label).horizontalAlign = 2;
g.getChildByName("txtTienTrung3").getComponent(cc.Label).string = c.VoltaConst.formatNumberMin(p);
g.getChildByName("txtTienTrung3").getComponent(cc.Label).horizontalAlign = 2;
g.color = e % 2 == 0 ? cc.color(38, 4, 0) : cc.color(255, 255, 255);
this.content.addChild(g);
}
}
};
e.prototype.touchbtnchitiet = function(t) {
var e = parseInt(t.name), o = this._data[e].Data;
console.log(o);
this.NodeChiTiet.active = !0;
if (o) for (var n = 0; n < o.length; n++) {
var i = o[n], a = i.Username, r = i.JackpotValue, s = cc.instantiate(this.templateVd);
s.setPosition(0, 0);
s.getChildByName("txtHang").getComponent(cc.Label).string = "" + (n + 1);
if (0 == n) {
s.getChildByName("txtHang").color = cc.color(235, 208, 16);
s.getChildByName("txtUser").color = cc.color(235, 208, 16);
s.getChildByName("txtTienThuong").color = cc.color(235, 208, 16);
} else if (1 == n) {
s.getChildByName("txtHang").color = cc.color(88, 247, 13);
s.getChildByName("txtUser").color = cc.color(88, 247, 13);
s.getChildByName("txtTienThuong").color = cc.color(88, 247, 13);
} else if (2 == n) {
s.getChildByName("txtHang").color = cc.color(8, 192, 250);
s.getChildByName("txtUser").color = cc.color(8, 192, 250);
s.getChildByName("txtTienThuong").color = cc.color(8, 192, 250);
} else {
s.getChildByName("txtTienThuong").color = cc.Color.WHITE;
s.getChildByName("txtUser").color = cc.Color.WHITE;
s.getChildByName("txtHang").color = cc.Color.WHITE;
}
s.getChildByName("txtUser").getComponent(cc.Label).string = a;
s.getChildByName("txtTienThuong").getComponent(cc.Label).string = c.VoltaConst.formatNumber(r);
this.contentVd.addChild(s);
}
};
e.prototype.closeChitiet = function() {
this.NodeChiTiet.active = !1;
this.contentVd.removeAllChildren();
};
var o;
e._instance = null;
a([ h(cc.Node) ], e.prototype, "content", void 0);
a([ h(cc.Node) ], e.prototype, "template", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "SprDice", void 0);
a([ h(cc.Node) ], e.prototype, "bg", void 0);
a([ h(cc.SpriteFrame) ], e.prototype, "bguser", void 0);
a([ h(cc.Node) ], e.prototype, "NodeChiTiet", void 0);
a([ h(cc.Node) ], e.prototype, "contentVd", void 0);
a([ h(cc.Node) ], e.prototype, "templateVd", void 0);
return o = a([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../network/Volta.NetworkClient": "Volta.NetworkClient"
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./network/Volta.NetworkClient"), c = t("./Volta.Const"), s = t("./Volta.ThongKe"), l = cc._decorator, h = l.ccclass, p = l.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.m_nGameStatus = 0;
e.m_nLocationIDWin = 0;
e._callback = null;
e.m_nBetType = 1;
e.logoNha = [];
e.logoKhach = [];
e.spriteWinLoseStreak = [];
e.btnCopy = [];
e.streakDoiNha = null;
e.streakDoiKhach = null;
e.bordermsg = null;
e.nodeLive = null;
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
this.defaultPositionNodeWin = this.EffectWinMoney[1].getPosition();
this.nodeLive.active = !1;
this.m_llBetValue = 1e3;
this.m_txtMoney.string = c.VoltaConst.formatNumber(fzgui.UserManager.instance.mainUserInfo.Money);
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
var n = "+" + c.VoltaConst.formatNumber(parseInt(o));
this.EffectWinMoney[0].active = !0;
this.EffectWinMoney[1].active = !0;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.EffectWinMoney[1].setPosition(this.defaultPositionNodeWin);
this.EffectWinMoney[1].runAction(cc.moveBy(3, cc.v2(0, 45)));
} else if (e > 0) {
n = "+" + c.VoltaConst.formatNumber(parseInt(e));
this.m_lblMoneyWin.node.color = cc.Color.YELLOW;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == c.VoltaConst.BetGate.GATE_HOME ? this.m_lblMoneyWin.node.setPosition(565, 207) : this.m_lblMoneyWin.node.setPosition(181, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
} else {
n = "-" + c.VoltaConst.formatNumber(parseInt(t));
this.m_lblMoneyWin.node.color = cc.Color.RED;
this.m_lblMoneyWin.string = n;
this.m_lblMoneyWin.node.active = !0;
this.m_nLocationIDWin == c.VoltaConst.BetGate.GATE_HOME ? this.m_lblMoneyWin.node.setPosition(565, 207) : this.m_lblMoneyWin.node.setPosition(181, 207);
this.m_lblMoneyWin.node.runAction(cc.moveBy(3, cc.v2(0, 40)));
this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function() {
this.m_lblMoneyWin.node.active = !1;
}, this)));
}
};
e.prototype.betOfAccount = function(t) {
if (t.length) {
fzgui.UITextManager.showCenterNotification("Đặt cược thành công");
var e = t[0], o = t[1];
o >= 0 && fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, o);
var n = e.BetSide, i = e.BetValue;
this.setBettedVal(n, i);
this.setBalance(t[1]);
}
};
e.prototype.setBettedVal = function(t, e) {
t == c.VoltaConst.BetGate.GATE_HOME ? this.m_lblBetedValueNha.string = c.VoltaConst.formatNumber(e) : t == c.VoltaConst.BetGate.GATE_AWAY && (this.m_lblBetedValueKhach.string = c.VoltaConst.formatNumber(e));
};
e.prototype.betByaccount = function(t) {
t.BetSide == c.VoltaConst.BetGate.GATE_HOME ? this.m_lblBetedValueNha.string = c.VoltaConst.formatNumber(t.BetValue) : t.BetSide == c.VoltaConst.BetGate.GATE_AWAY && (this.m_lblBetedValueKhach.string = c.VoltaConst.formatNumber(t.BetValue));
};
e.prototype.setBalance = function(t) {
if (!(t < 0)) {
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
this.m_txtMoney.string = c.VoltaConst.formatNumber(t);
}
};
e.prototype.GetCurrentRooms = function() {
r.default.instance.sendSignalR("EnterLobby", [ this.m_nBetType ]);
};
e.prototype.sessionInfo = function(t) {
var e = this;
if (null != t) {
c.VoltaConst.GameSessionID = t.RemoteSessionID;
this.m_llGameSessionID = t.RemoteSessionID;
this.m_nGameStatus = t.CurrentState;
this.m_lblTurnID.string = "#" + this.m_llGameSessionID;
this.Md5AndResultText = this.m_nGameStatus == c.VoltaConst.GameStatus.RESULT ? c.VoltaConst.cutStringWithEllipsis(t.ResultString, 18) : c.VoltaConst.cutStringWithEllipsis(t.Md5String, 19);
this.m_lblResuldMd5.string = this.Md5AndResultText;
this.btnCopy[1].active = this.m_nGameStatus == c.VoltaConst.GameStatus.RESULT;
this.tenDoiKhach[0].string = c.VoltaConst.cutStringWithEllipsis(t.TeamBName, 17).toUpperCase();
this.tenDoiKhach[1].string = c.VoltaConst.cutStringWithEllipsis(t.TeamBName, 15).toUpperCase();
this.tenDoiNha[0].string = c.VoltaConst.cutStringWithEllipsis(t.TeamAName, 17).toUpperCase();
this.tenDoiNha[1].string = c.VoltaConst.cutStringWithEllipsis(t.TeamAName, 15).toUpperCase();
cc.systemEvent.emit("InforGameSessionVolta", "" + this.m_llGameSessionID);
if (this.m_nGameStatus == c.VoltaConst.GameStatus.BETTING) {
this.nodeHomeWin.active = !1;
this.nodeAwayWin.active = !1;
this.m_lblTimer.node.active = !0;
this.m_lblTimer.string = t.Ellapsed;
this.EffectWinMoney[0].active = !1;
this.EffectWinMoney[1].active = !1;
this.EffectWinMoney[1].setPosition(this.defaultPositionNodeWin);
}
if (this.m_nGameStatus != c.VoltaConst.GameStatus.BETTING) {
this.m_lblTimer.string = "";
this.m_lblTimer.node.active = !1;
}
if (this.m_nGameStatus == c.VoltaConst.GameStatus.BETTING) this.nodeLive.active = !1; else if (this.m_nGameStatus == c.VoltaConst.GameStatus.RESULT && 0 == c.VoltaConst.isLoading) {
console.log("vào video");
c.VoltaConst.urlVideo = "https://iuvtr.sb21.net/?link=" + t.VideoUrl;
setTimeout(function() {
e.nodeLive.active = !0;
}, 500);
}
var o = t, n = o.TotalTeamB, i = o.TotalBetTeamB, a = o.TotalTeamA, r = o.TotalBetTeamA;
this.m_lblMoneyNha.string = c.VoltaConst.formatNumber(r);
this.m_lblMoneyKhach.string = c.VoltaConst.formatNumber(i);
this.m_lblUsersNha.string = c.VoltaConst.formatNumber(a);
this.m_lblUsersKhach.string = c.VoltaConst.formatNumber(n);
var s = cc.sequence(cc.scaleTo(.1, 1.1, 1.1), cc.scaleTo(.1, 1, 1));
r !== this._totalBetNha && this.m_lblMoneyNha.node.runAction(s.clone());
i !== this._totalBetKhach && this.m_lblMoneyKhach.node.runAction(s.clone());
a !== this._totalAccountNha && this.m_lblUsersNha.node.runAction(s.clone());
n !== this._totalAccountKhach && this.m_lblUsersKhach.node.runAction(s.clone());
this._totalBetKhach = i;
this._totalBetNha = r;
this._totalAccountKhach = n;
this._totalAccountNha = a;
this.m_nGameStatus == c.VoltaConst.GameStatus.RESULT && this.showResult(o.teamWin);
}
};
e.prototype.allSessionStatistic = function(t) {
this.m_PercentWin[0].string = t.rateTeamA + "%";
this.m_PercentWin[1].string = t.rateTeamB + "%";
s.default.instance.initData(t.history);
};
e.prototype.sessionStatistic = function(t) {
c.VoltaConst.getImage(t.teamALogo, this.logoNha[0]);
c.VoltaConst.getImage(t.teamALogo, this.logoNha[1]);
c.VoltaConst.getImage(t.teamBLogo, this.logoKhach[0]);
c.VoltaConst.getImage(t.teamBLogo, this.logoKhach[1]);
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
t == c.VoltaConst.BetGate.GATE_HOME ? this.nodeHomeWin.active = !0 : t == c.VoltaConst.BetGate.GATE_AWAY && (this.nodeAwayWin.active = !0);
null != this._callback && this._callback(c.VoltaConst.RETURN_RESULT, this.m_nLocationIDWin);
};
e.prototype.touchHome = function() {
this.EffectBet[0].opacity = 255;
this.EffectBet[0].runAction(cc.fadeOut(1));
this.m_nBetGate = c.VoltaConst.BetGate.GATE_HOME;
this.SetBet();
};
e.prototype.touchAway = function() {
this.EffectBet[1].opacity = 255;
this.EffectBet[1].runAction(cc.fadeOut(1));
this.m_nBetGate = c.VoltaConst.BetGate.GATE_AWAY;
this.SetBet();
};
e.prototype.SetBet = function() {
this.m_nGameStatus != c.VoltaConst.GameStatus.RESULT && this.m_nGameStatus != c.VoltaConst.GameStatus.PREPARE_NEW_SESSION && this.m_nGameStatus != c.VoltaConst.GameStatus.END_BETTING ? r.default.instance.sendSignalR("Bet", [ this.m_llBetValue, this.m_nBetGate, 1 ]) : this.showMessage("Hết giờ đặt cửa");
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
1 == this.nodeViewLive.active ? this.nodeViewLive.active = !1 : this.nodeViewLive.active = !0;
};
e.prototype.clickBack = function() {
fzgui.UIScreenManager.instance.popToRootScreen();
};
e.prototype.clickCopy = function() {
fzgui.PlatformInterface.copy(this.Md5AndResultText);
};
var o;
e._instance = null;
a([ p(cc.Sprite) ], e.prototype, "logoNha", void 0);
a([ p(cc.Sprite) ], e.prototype, "logoKhach", void 0);
a([ p(cc.SpriteFrame) ], e.prototype, "spriteWinLoseStreak", void 0);
a([ p(cc.Node) ], e.prototype, "btnCopy", void 0);
a([ p(cc.Node) ], e.prototype, "streakDoiNha", void 0);
a([ p(cc.Node) ], e.prototype, "streakDoiKhach", void 0);
a([ p(cc.Node) ], e.prototype, "bordermsg", void 0);
a([ p(cc.Node) ], e.prototype, "nodeLive", void 0);
a([ p(cc.Node) ], e.prototype, "nodeViewLive", void 0);
a([ p(cc.Node) ], e.prototype, "nodeSelectChip", void 0);
a([ p(cc.Node) ], e.prototype, "nodeHomeWin", void 0);
a([ p(cc.Node) ], e.prototype, "nodeAwayWin", void 0);
a([ p(cc.Node) ], e.prototype, "EffectBet", void 0);
a([ p(cc.Node) ], e.prototype, "EffectWinMoney", void 0);
a([ p(cc.Node) ], e.prototype, "nodeLoading", void 0);
a([ p(cc.Label) ], e.prototype, "m_txtNickName", void 0);
a([ p(cc.Label) ], e.prototype, "m_txtMoney", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblTurnID", void 0);
a([ p(cc.Label) ], e.prototype, "m_PercentWin", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblResuldMd5", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblMessage", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblUsersNha", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblUsersKhach", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblMoneyNha", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblMoneyKhach", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblBetedValueNha", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblBetedValueKhach", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblMoneyWin", void 0);
a([ p(cc.Label) ], e.prototype, "m_lblTimer", void 0);
a([ p(cc.Label) ], e.prototype, "winloseNha", void 0);
a([ p(cc.Label) ], e.prototype, "winloseKhach", void 0);
a([ p(cc.Label) ], e.prototype, "tenDoiNha", void 0);
a([ p(cc.Label) ], e.prototype, "tenDoiKhach", void 0);
return o = a([ h ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("../Volta.Const"), c = t("../Volta.MainGame"), s = cc._decorator, l = s.ccclass, h = (s.property, 
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
c.default.instance.sessionInfo(i);
break;

case "winResult":
c.default.instance.resultOfAccount(i);
break;

case "betSuccess":
c.default.instance.betOfAccount(n.A);
break;

case "betOfAccount":
c.default.instance.betByaccount(i);
break;

case "sessionStatistic":
c.default.instance.sessionStatistic(i);
break;

case "allSessionStatistic":
c.default.instance.allSessionStatistic(i);
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = cc._decorator, c = r.ccclass, s = r.property, l = function(t) {
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
var c = cc.instantiate(this.template);
c.position = new cc.Vec3(0, 0);
c.active = !0;
c.getComponent(cc.Sprite).spriteFrame = "H" === r ? this.ellipseHome : this.ellipseAway;
c.setPosition(this.getPosforSC(o, e));
this.pnlSC.addChild(c);
}
};
e.prototype.getPosforSC = function(t, e) {
var o = -13.5 - 28 * t, n = -13 - 29 * e;
return cc.v2(o, n);
};
var o;
e._instance = null;
a([ s(cc.Node) ], e.prototype, "pnlSC", void 0);
a([ s(cc.Node) ], e.prototype, "template", void 0);
a([ s(cc.SpriteFrame) ], e.prototype, "ellipseHome", void 0);
a([ s(cc.SpriteFrame) ], e.prototype, "ellipseAway", void 0);
return o = a([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"Volta.VinhDanh": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9767m/YnxLBL/bVUWhBNRB", "Volta.VinhDanh");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (r = (a < 3 ? i(r) : a > 3 ? i(e, o, r) : i(e, o)) || r);
return a > 3 && r && Object.defineProperty(e, o, r), r;
}, r = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
var n = Array(t), i = 0;
for (e = 0; e < o; e++) for (var a = arguments[e], r = 0, c = a.length; r < c; r++, 
i++) n[i] = a[r];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../Volta.Const"), s = t("../Volta.MainGame"), l = cc._decorator, h = l.ccclass, p = l.property, u = new Date(), f = u.getDate() + "/" + (u.getMonth() + 1) + "/" + u.getFullYear(), g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.content = null;
e.spfHuanChuong = [];
e.txtDate = null;
e.token = null;
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
this.getTop("", "daily");
};
e.prototype.getTop = function(t, e) {
var o = this, n = "https://gc-api.tieusi.online/hit/top?game=taixiulive&type=" + e + "&date=" + f;
c.VoltaConst.getUrl(n, function(t, e) {
if (e >= 200 && e < 400) {
t && fzgui.UIWaitingLayout.hideWaiting();
o.txtDate.string = t.date;
o.showTopAccountsTaiXiu(t.data);
} else fzgui.UIWaitingLayout.hideWaiting();
});
this.txtDate.string = f;
};
e.prototype.showTopAccountsTaiXiu = function(t) {
var e = this;
if (null != t && null != t) {
t && fzgui.UIWaitingLayout.hideWaiting();
r(this.content.children).forEach(function(t) {
t !== e.template && t.destroy();
});
for (var o = t.length, n = 0; n < o; n++) {
var i = t[n], a = i.fullname, s = i.total, l = cc.instantiate(this.template);
l.position = new cc.Vec3(0, 0, 0);
if (0 == n) {
l.getChildByName("txtHang").active = !1;
l.getChildByName("txtTenTaiKhoan").color = cc.Color.RED;
l.getChildByName("skerank").active = !0;
} else if (1 == n) {
l.getChildByName("txtHang").active = !1;
l.getChildByName("txtTenTaiKhoan").color = cc.Color.GREEN;
l.getChildByName("skerank2").active = !0;
} else if (2 == n) {
l.getChildByName("txtHang").active = !1;
l.getChildByName("sprHuanChuong").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[n];
l.getChildByName("txtTenTaiKhoan").color = cc.Color.YELLOW;
} else {
l.getChildByName("txtHang").active = !0;
l.getChildByName("txtHang").getComponent(cc.Label).string = "" + (n + 1);
}
n > 2 && (l.getChildByName("txtTienThang").color = cc.Color.WHITE);
l.getChildByName("txtTenTaiKhoan").getComponent(cc.Label).string = a;
l.getChildByName("txtTienThang").getComponent(cc.Label).string = c.VoltaConst.formatNumber(s);
l.getChildByName("liner").getComponent(cc.Sprite).spriteFrame = this.spfHuanChuong[3];
l.getChildByName("liner").active = !!(n % 2);
this.content.addChild(l);
}
}
};
e.prototype.close = function() {
s.default.instance.OpacityView();
};
var o;
e._instance = null;
a([ p(cc.Node) ], e.prototype, "template", void 0);
a([ p(cc.Node) ], e.prototype, "content", void 0);
a([ p([ cc.SpriteFrame ]) ], e.prototype, "spfHuanChuong", void 0);
a([ p(cc.Label) ], e.prototype, "txtDate", void 0);
return o = a([ h ], e);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../Volta.Const": "Volta.Const",
"../Volta.MainGame": "Volta.MainGame"
} ],
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
}, {}, [ "LiveVolta", "LoadingVolta", "MoveBulletVolta", "Volta.BatNanCtrl", "Volta.Chat", "Volta.Const", "Volta.HistoryTurn", "Volta.MainGame", "Volta.ThongKe", "Volta.lbCountDown", "Volta.Chat.NetworkClient", "Volta.NetworkClient", "Volta.Guide", "Volta.History", "Volta.ItemHistory", "Volta.Jackpot", "Volta.VinhDanh" ]);