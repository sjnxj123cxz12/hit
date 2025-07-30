window.__require = function t(e, o, n) {
function i(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return i(e[s][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
ChangeTypeLoDe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0ea7aEX0mZI/IpfvwvsGx7E", "ChangeTypeLoDe");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.LoDe = null;
e.LoDeST = null;
return e;
}
e.prototype.onClick = function() {
if (this.LoDeST.active) {
this.LoDeST.active = !1;
this.LoDe.active = !0;
} else {
this.LoDeST.active = !0;
this.LoDe.active = !1;
}
};
r([ c(cc.Node) ], e.prototype, "LoDe", void 0);
r([ c(cc.Node) ], e.prototype, "LoDeST", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"LoDe.Chat.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ca93aOHAFFBTa6JZ2FXloxT", "LoDe.Chat.NetworkClient");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe.Chat"), a = cc._decorator, c = a.ccclass, l = (a.property, function(t) {
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
url: "https://chat." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
ip: "http://18.138.207.162:8092/signalr/negotiate",
hub: "chatHub"
};
cc.systemEvent.off("OnChatLodeSocketEvent", this.onResponeData, this);
cc.systemEvent.on("OnChatLoDeSocketEvent", this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect("OnChatLoDeSocketEvent", t.url, t.hub, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.connect();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
this.closeWS();
lngui.ZLog.log("=====================CLOSE WS NOTI===============================");
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
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if (n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0];
switch (n.M) {
case "receiveMessage":
s.default.instance.receiveMessage(i);
break;

case "listLastMessages":
s.default.instance.listLastMessages(i);
}
}
}
};
e.prototype.registerChat = function() {
this.sendSignalR("RegisterChat", [ "xocdialive" ]);
};
e.prototype.pingPong = function() {
this.sendSignalR("PingPong", []);
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("Connect Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off("OnChatLoDeSocketEvent", this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket=======>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var o;
e._instance = null;
return o = r([ c ], e);
}(cc.Component));
o.default = l;
cc._RF.pop();
}, {
"./LoDe.Chat": "LoDe.Chat"
} ],
"LoDe.Chat": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9c3ffGLsxHjrWoaJNZhuWG", "LoDe.Chat");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe.Chat.NetworkClient"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.templateMessage = null;
e.listChat = null;
e.scrollListChat = null;
e.txtInputChat = null;
return e;
}
o = e;
e.prototype.touchSendChat = function() {
if (this.txtInputChat.string.length) {
s.default.instance.sendSignalR("SendMessage", [ this.txtInputChat.string, "xocdialive" ]);
this.txtInputChat.string = "";
}
};
e.prototype.listLastMessages = function(t) {
if (0 != t.length) {
this.listChat.removeAllChildren();
if (t) for (var e = 0; e < t.length; e++) {
var o = t[e], n = o.n, i = o.c;
if ("SYSTEM" == n || "SYSTEM" == i) return;
if (void 0 === n || void 0 === i) return;
if (n.length > 0 && i.length > 0) {
var r = i, s = cc.instantiate(this.templateMessage), a = o.n, c = n;
s.active = !0;
a = (a.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), c);
s.getComponent(cc.Label).string = a + ": " + r;
if (1 == t.IsVipTx) {
s.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_nameVip").getComponent(cc.Label).string = a + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_nameVip").getContentSize().height) / 2;
s.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
s.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
s.getChildByName("lb_name").getComponent(cc.Label).string = a + ": ";
s.off(cc.Node.EventType.SIZE_CHANGED);
s.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (s.getContentSize().height - s.getChildByName("lb_name").getContentSize().height) / 2;
s.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(s);
}
this.scrollListChat.scrollToBottom();
}
}
};
e.prototype.receiveMessage = function(t) {
var e = t.n, o = t.c;
if ("SYSTEM" != e && "SYSTEM" != o && void 0 !== e && void 0 !== o) {
if (e.length > 0 && o.length > 0) {
var n = o, i = cc.instantiate(this.templateMessage), r = t.n, s = e;
i.active = !0;
r = (r.localeCompare(lngui.UserManager.instance.mainUserInfo.NickName), s);
i.getComponent(cc.Label).string = r + ": " + n;
if (1 == t.IsVipTx) {
i.getChildByName("lb_name").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_nameVip").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_nameVip").getContentSize().height) / 2;
i.getChildByName("lb_nameVip").setPosition(cc.v2(0, t));
});
} else {
i.getChildByName("lb_nameVip").getComponent(cc.Label).node.active = !1;
i.getChildByName("lb_name").getComponent(cc.Label).string = r + ": ";
i.off(cc.Node.EventType.SIZE_CHANGED);
i.on(cc.Node.EventType.SIZE_CHANGED, function() {
var t = (i.getContentSize().height - i.getChildByName("lb_name").getContentSize().height) / 2;
i.getChildByName("lb_name").setPosition(cc.v2(0, t));
});
}
this.listChat.addChild(i);
}
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
r([ l(cc.Node) ], e.prototype, "templateMessage", void 0);
r([ l(cc.Node) ], e.prototype, "listChat", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrollListChat", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtInputChat", void 0);
return o = r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LoDe.Chat.NetworkClient": "LoDe.Chat.NetworkClient"
} ],
LoDeBetItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "488d3w6/DlHZYVZzfN9bsiO", "LoDeBetItem");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.mIdx = -1;
return e;
}
e.prototype.setDataMyBet = function(t, e) {
this.mIdx = e;
this.label.string = "Bạn đặt <color=yellow><b>" + s.default.formatNumber(t.TotalBetValue) + " Gold</b></c>\n<color=green>" + t.GateName + "</c> (" + t.BetData + ")\n<color=white><i>" + s.default.formatDateTime(t.CreatedDate, !0, !0) + "</i></c>\n";
};
e.prototype.setDataCurBet = function(t, e) {
this.mIdx = e;
this.label.string = "<color=#FFC85E>" + t.DisplayName + "</c> đã đặt cược\n<color=yellow><b>" + s.default.formatNumber(t.TotalBetValue) + " Gold </c></b>\n<color=green>" + t.GateName + "</c> (" + t.BetData + ")\n<color=white><i>" + s.default.formatDateTime(t.CreatedDate, !0, !0) + "</i></c>\n";
};
r([ l(cc.RichText) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeBetNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e9eeamyXYpNXbWqh2nWdqMC", "LoDeBetNumber");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNumber = null;
e.tgNumber = null;
e.numBet = 0;
return e;
}
r([ c(cc.Label) ], e.prototype, "lbNumber", void 0);
r([ c(cc.Toggle) ], e.prototype, "tgNumber", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeCurBets: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bffd4ksvddIwrrHlfkmLrL8", "LoDeCurBets");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), a = cc._decorator, c = a.ccclass, l = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeBetItem");
s.setDataCurBet(this.mListDataCell[i], i);
var a = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, a);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
return r([ c ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeHistoryBet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4ff13xzv6JFy6+OQEC5qI/8", "LoDeHistoryBet");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollview = null;
e.cellHistory = null;
e.heightItem = 0;
e.spacing = 0;
e.spawnCount = 0;
e.bufferZone = 0;
e.lastContentPosY = 0;
e.updateTimer = 0;
e.updateInterval = .2;
e.mListDataCell = [];
e.mListCell = [];
e.type = 0;
return e;
}
e.prototype.update = function(t) {
if (this.node.active) {
this.updateTimer += t;
if (this.updateTimer < this.updateInterval) return;
this.updateTimer = 0;
for (var e = this.bufferZone, o = this.scrollview.content.y < this.lastContentPosY, n = (this.heightItem + this.spacing) * this.mListCell.length, i = 0; i < this.mListCell.length; ++i) {
var r = this.mListCell[i].node, s = this.getPositionInView(r);
if (o) {
if (s.y < -e && r.y + n < 0) {
r.y = r.y + n;
var a = this.mListCell[i], c = a.mIdx - this.mListCell.length;
1 == this.type ? a.setDataMyBet(this.mListDataCell[c], c) : 2 == this.type ? a.setDataCurBet(this.mListDataCell[c], c) : 3 == this.type && a.setData(this.mListDataCell[c], c);
}
} else if (s.y > e && r.y - n > -this.scrollview.content.height) {
r.y = r.y - n;
var l = this.mListCell[i];
c = l.mIdx + this.mListCell.length;
1 == this.type ? l.setDataMyBet(this.mListDataCell[c], c) : 2 == this.type ? l.setDataCurBet(this.mListDataCell[c], c) : 3 == this.type && l.setData(this.mListDataCell[c], c);
}
}
this.lastContentPosY = this.scrollview.content.y;
}
};
e.prototype.getPositionInView = function(t) {
var e = t.parent.convertToWorldSpaceAR(t.position);
return this.scrollview.node.convertToNodeSpaceAR(e);
};
r([ c(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ c(cc.Prefab) ], e.prototype, "cellHistory", void 0);
r([ c(cc.Integer) ], e.prototype, "heightItem", void 0);
r([ c(cc.Integer) ], e.prototype, "spacing", void 0);
r([ c(cc.Integer) ], e.prototype, "spawnCount", void 0);
r([ c(cc.Integer) ], e.prototype, "bufferZone", void 0);
r([ c(cc.Integer) ], e.prototype, "type", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f9664N/H9RBL4ImCjhzPwy3", "LoDeHistoryCell");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bg = null;
e.lbPhien = null;
e.lbTime = null;
e.lbType = null;
e.lbNumSelect = null;
e.lbBet = null;
e.lbResult = null;
e.mIdx = -1;
return e;
}
e.prototype.setData = function(t, e) {
this.mIdx = e;
this.bg.active = !(e % 2);
this.lbPhien.string = t.SessionID;
this.lbTime.string = s.default.formatDateTime(t.CreatedDate, !0, !0);
this.lbType.string = t.GateName;
this.lbNumSelect.string = t.BetData;
this.lbBet.string = s.default.formatNumber(t.TotalBetValue);
this.lbResult.string = s.default.formatNumber(t.TotalAwardValue);
};
r([ l(cc.Node) ], e.prototype, "bg", void 0);
r([ l(cc.Label) ], e.prototype, "lbPhien", void 0);
r([ l(cc.Label) ], e.prototype, "lbTime", void 0);
r([ l(cc.Label) ], e.prototype, "lbType", void 0);
r([ l(cc.Label) ], e.prototype, "lbNumSelect", void 0);
r([ l(cc.Label) ], e.prototype, "lbBet", void 0);
r([ l(cc.Label) ], e.prototype, "lbResult", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeHistoryDialog: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b5adalbF/JLkpwlUBr5sbCE", "LoDeHistoryDialog");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistory"), a = t("./LoDeVar"), c = cc._decorator, l = c.ccclass, u = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
a.default.get(a.default.api.GetBetAccountHistory, {
top: 50
}, function(t, e) {
s.default.instance.setData(-1, e);
});
};
return r([ l ], e);
}(lngui.UIPopup));
o.default = u;
cc._RF.pop();
}, {
"./LoDeHistory": "LoDeHistory",
"./LoDeVar": "LoDeVar"
} ],
LoDeHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b1628xPg6xAuo5gh9kuFdiz", "LoDeHistory");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), a = cc._decorator, c = a.ccclass, l = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
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
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeHistoryCell");
s.setData(this.mListDataCell[i], i);
var a = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, a);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
var o;
e._instance = null;
return o = r([ c ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeMyBets: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e555fnAK29PaKQtIVBOSaKl", "LoDeMyBets");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeHistoryBet"), a = cc._decorator, c = a.ccclass, l = (a.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.setData = function(t, e) {
this.mListDataCell = e;
this.scrollview.content.removeAllChildren();
this.mListCell = [];
var o = e.length;
this.scrollview.content.height = o * (this.heightItem + this.spacing) + this.spacing;
for (var n = this.spawnCount <= o ? this.spawnCount : o, i = 0; i < n; i++) {
var r = cc.instantiate(this.cellHistory), s = r.getComponent("LoDeBetItem");
s.setDataMyBet(this.mListDataCell[i], i);
var a = -s.node.height * (.5 + i) - this.spacing * (i + 1);
s.node.setPosition(0, a);
this.scrollview.content.addChild(r);
this.mListCell.push(s);
}
};
return r([ c ], e);
}(s.default));
o.default = l;
cc._RF.pop();
}, {
"./LoDeHistoryBet": "LoDeHistoryBet"
} ],
LoDeNetwork: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e71dc2/X0pD+ZqMESPrxkyL", "LoDeNetwork");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/Util"), a = t("./LoDe"), c = t("./LoDeCurBets"), l = t("./LoDeMyBets"), u = t("./LoDeUI"), p = t("./LoDeVar"), h = cc._decorator, d = h.ccclass, f = h.property, g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UI = null;
e.LoDeCurBets = null;
e.LoDeMyBets = null;
e.mainGame = null;
e.arrayDataMyBet = [];
e._gameStatus = -1;
e._timer = 0;
e.mListenerKey = "LoDe";
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
e.prototype.onDisable = function() {
console.log("lngui.UserManager.instance.mainUserInfo.Money===>" + lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, p.default.api.negotiate, p.default.api.hub, p.default.api.gate, lngui.UserManager.instance.mainUserInfo.cookie, !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) this.mSignalr.send("EnterLobby", []); else {
if (!t.M || !Array.isArray(t.M) || 0 == t.M.length) return;
for (var e = t.M.length, o = 0; o < e; ++o) {
var n = t.M[o];
if ("object" == typeof n && "string" == typeof n.M && n.A && null != n.A[0] && null != n.A[0]) {
var i = n.A[0], r = n.A[1];
switch (n.M) {
case "currSessionInfo":
this.parseGetCurrentData(i);
break;

case "message":
this.mainGame.showTooltip(i);
break;

case "betSuccess":
this.parseSetBetData(r);
}
}
}
}
};
e.prototype.init = function(t) {
this.connect();
this.mainGame = t;
this.getGameSessionBetAccount();
this.getBetAccountHistory();
this._timer = 0;
this.arrayDataMyBet = [];
};
e.prototype.timeCounter = function() {
this._timer > 0 && this._timer--;
if (this._timer <= 0) {
this.getGameSessionBetAccount();
this.unschedule(this.timeCounter);
}
this._gameStatus === p.default.GAME_STATUS.BETTING ? this.UI.lbStatus.string = s.default.parseTime(this._timer, !0) : this._gameStatus === p.default.GAME_STATUS.WAITING && (this.UI.lbStatus.string = "Chờ phiên sau: " + s.default.parseTime(this._timer, !0));
};
e.prototype.requestGetCurrentData = function() {};
e.prototype.parseGetCurrentData = function(t) {
console.log("-=-=parseGetCurrentData ", t);
this.mainGame.currentGameSessionID = t.SessionID;
a.default.instance.LstGateInfo = t.LstGateInfo;
this.node.runAction(cc.sequence(cc.callFunc(function() {
this.getGameSessionBetAccount();
}.bind(this)), cc.delayTime(60)).repeatForever());
this.mainGame.dateList = [];
this._gameStatus = t.Phrase;
if (this._gameStatus === p.default.GAME_STATUS.BETTING) {
this._timer = t.Elapsed + 1;
this.UI.lbStatus.node.color = cc.color(255, 200, 94);
this.schedule(this.timeCounter, 1);
this.timeCounter();
} else if (this._gameStatus === p.default.GAME_STATUS.WAITING) {
this._timer = t.Elapsed + 1;
this.UI.lbStatus.node.color = cc.Color.RED;
this.schedule(this.timeCounter, 1);
this.timeCounter();
}
var e = t.OpenDate, o = e.substring(0, 4), n = e.substring(5, 7), i = e.substring(8, 10);
this.UI.lbTitle.string = i + "-" + n;
for (var r = new Date(o, parseInt(n) - 1, i), s = 0; s < 11; s++) {
var c = r.getFullYear() + (r.getMonth() + 1 < 10 ? "0" : "") + (r.getMonth() + 1) + (r.getDate() < 10 ? "0" : "") + r.getDate();
this.mainGame.dateList.push(c);
r.setDate(r.getDate() - 1);
}
this.getKQ(void 0, t.Result);
};
e.prototype.getHisKQ = function(t) {
var e = this, o = t.substring(6, 8), n = t.substring(4, 6), i = t.substring(0, 4);
console.log(t);
p.default.get(p.default.api.GetHistoryKetQua, {
openDate: n + "-" + o + "-" + i
}, function(o, n) {
e.getKQ(t, n);
});
};
e.prototype.getKQ = function(t, e) {
void 0 === t && (t = null);
console.log(e);
for (var o = 0; o < this.UI.txtKQ.length; o++) this.UI.txtKQ[o].string = "";
var n = (t = t || this.mainGame.dateList[1]).toString(), i = n.substring(6, 8), r = n.substring(4, 6);
n.substring(0, 4);
this.UI.lbTitle.string = i + "-" + r;
this.parseDataKQ(e);
};
e.prototype.parseDataKQ = function(t) {
if (t && t[0] && t[0].DateInt) {
var e = t[0].DateInt.toString();
this.UI.lbTitle.string = "XSMB " + e.substring(6, 8) + "-" + e.substring(4, 6) + "-" + e.substring(0, 4);
}
for (var o = 0, n = [ "SpecialPrizeData", "FirstPrizeData", "SecondPrizeData", "ThirdPrizeData", "FourthPrizeData", "FifthPrizeData", "SixthPrizeData", "SeventhPrizeData", "EighthPrizeData" ], i = 0; i < 8; i++) if (t && t[n[i]]) {
var r = t[n[i]].split(",");
for (var s in r) {
this.UI.txtKQ[o].string = r[s];
o += 1;
}
}
};
e.prototype.getGameSessionBetAccount = function() {
var t = this;
p.default.get(p.default.api.GetGameSessionBetAccount, {
bettingType: 1
}, function(e, o) {
t.arrayDataMyBet = [];
if (o.length > 0) {
for (var n = 0; n < o.length; n++) t.arrayDataMyBet.push(o[n]);
t.updateListViewMyBet();
}
});
};
e.prototype.getBetAccountHistory = function() {
var t = this;
p.default.get(p.default.api.GetGameSessionBetAccount, {
bettingType: 2
}, function(e, o) {
t.LoDeMyBets.setData(0, o);
});
};
e.prototype.updateListViewMyBet = function() {
this.arrayDataMyBet.length > 0 && this.LoDeCurBets.setData(0, this.arrayDataMyBet);
};
e.prototype.parseSetBetData = function(t) {
this.UI.nodepopupbet.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = t;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
this.mainGame.showTooltip("Đặt cược thành công");
a.default.instance.updateMoney();
this.getGameSessionBetAccount();
this.getBetAccountHistory();
};
e.prototype.setBet = function(t, e, o, n, i) {
this.mSignalr.send("Bet", [ t, e, o, n, i ]);
};
var o;
e._instance = null;
r([ f(u.default) ], e.prototype, "UI", void 0);
r([ f(c.default) ], e.prototype, "LoDeCurBets", void 0);
r([ f(l.default) ], e.prototype, "LoDeMyBets", void 0);
return o = r([ d ], e);
}(cc.Component);
o.default = g;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0,
"./LoDe": "LoDe",
"./LoDeCurBets": "LoDeCurBets",
"./LoDeMyBets": "LoDeMyBets",
"./LoDeUI": "LoDeUI",
"./LoDeVar": "LoDeVar"
} ],
LoDeRankCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "28956x3gmhArLLYPBkQunxw", "LoDeRankCell");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.rank = null;
e.nameUser = null;
e.moneyWin = null;
return e;
}
e.prototype.setData = function(t) {
this.nameUser.string = t.DisplayName;
this.moneyWin.string = s.default.formatNumber(t.Profit);
};
r([ l(cc.Label) ], e.prototype, "rank", void 0);
r([ l(cc.Label) ], e.prototype, "nameUser", void 0);
r([ l(cc.Label) ], e.prototype, "moneyWin", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0
} ],
LoDeRank: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "327de9b3o1GOouRjSraJhtO", "LoDeRank");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDe"), a = t("./LoDeRankCell"), c = t("./LoDeVar"), l = t("./Utils/LoDeSelectBoxUtil"), u = t("./Utils/LoDeSelectItemData"), p = cc._decorator, h = p.ccclass, d = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listCells = [];
e.sbuDate = null;
e._currentDateId = 0;
e._dateList = null;
return e;
}
e.prototype.onLoad = function() {
this._dateList = s.default.instance.dateList;
this.setContentDate(s.default.instance.dateList);
this.sbuDate.setCallbackSelect(this.onSelectDate, this);
};
e.prototype.setContentDate = function(t) {
for (var e = [], o = 0; o < 10; o++) {
var n = new u.default();
n.id = o;
var i = t[o].toString();
n.value = i.substring(6, 8) + "-" + i.substring(4, 6) + "-" + i.substring(0, 4);
e.push(n);
}
if (e.length > 0) {
this.sbuDate.setContentSelectBox(e);
this.sbuDate.setDescription(e[1].value);
}
this.onSelectDate(1);
};
e.prototype.onSelectDate = function(t) {
this._currentDateId = t;
this.getRank(t);
};
e.prototype.getRank = function(t) {
var e = this, o = this._dateList[t].toString();
c.default.get(c.default.api.GetTopWins, {
openDate: o.substring(4, 6) + "-" + o.substring(6, 8) + "-" + o.substring(0, 4)
}, function(t, o) {
e.parseData(o);
});
};
e.prototype.parseData = function(t) {
for (var e = 0; e < this.listCells.length; e++) if (t[e]) {
this.listCells[e].node.active = !0;
this.listCells[e].setData(t[e]);
} else this.listCells[e].node.active = !1;
};
r([ d(a.default) ], e.prototype, "listCells", void 0);
r([ d(l.default) ], e.prototype, "sbuDate", void 0);
return r([ h ], e);
}(lngui.UIPopup);
o.default = f;
cc._RF.pop();
}, {
"./LoDe": "LoDe",
"./LoDeRankCell": "LoDeRankCell",
"./LoDeVar": "LoDeVar",
"./Utils/LoDeSelectBoxUtil": "LoDeSelectBoxUtil",
"./Utils/LoDeSelectItemData": "LoDeSelectItemData"
} ],
LoDeSelectBoxItem: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "11a68Xep0FE8rj9lAtxGRRr", "LoDeSelectBoxItem");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lbValue = null;
e.id = "undefined";
e.idx = 0;
e._valueItem = null;
e._delegate = null;
return e;
}
e.prototype.init = function(t) {
this._delegate = t;
};
e.prototype.onLoad = function() {
this.nodeBg.active = !1;
};
e.prototype.setValue = function(t, e, o) {
void 0 === o && (o = 0);
this.id = t;
this.lbValue.string = e;
this._valueItem = e;
this.idx = o;
};
e.prototype.getId = function() {
return this.id;
};
e.prototype.getValue = function() {
return this._valueItem;
};
e.prototype.setSelected = function(t) {
this.nodeBg.active = t;
};
e.prototype.onTouchSelectItem = function() {
this._delegate.onTouchSelectItem(this.id, this._valueItem, this.idx);
};
r([ c(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ c(cc.Label) ], e.prototype, "lbValue", void 0);
return r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeSelectBoxUtil: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2e65fNGrQZKi5X8/zuaf0Ly", "LoDeSelectBoxUtil");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeSelectBoxItem"), a = t("./LoDeSelectItemData"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbDescription = null;
e.buttonSelect = null;
e.scrollViewSelect = null;
e.selectBoxItemPrefab = null;
e.nodeContent = null;
e.fontSizeCell = 0;
e.colorLblCell = cc.Color.BLACK;
e.itemDatas = [];
e.arrDropDownItem = [];
e._currentItemData = null;
e._description = null;
e._callbackSelect = null;
e._targetCbSelect = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeContent.active = !1;
};
e.prototype.setCallbackSelect = function(t, e) {
this._callbackSelect = t;
this._targetCbSelect = e;
};
e.prototype.setContentSelectBox = function(t) {
for (var e = 0; e < this.arrDropDownItem.length; e++) {
this.arrDropDownItem[e].node.active = !1;
this.arrDropDownItem[e].setSelected(!1);
}
this.itemDatas = t;
for (e = 0; e < t.length; e++) {
if (!this.arrDropDownItem[e]) {
var o = cc.instantiate(this.selectBoxItemPrefab);
this.scrollViewSelect.content.addChild(o);
this.arrDropDownItem[e] = o.getComponent(s.default);
this.arrDropDownItem[e].lbValue.fontSize = this.fontSizeCell > 0 ? this.fontSizeCell : this.lbDescription.fontSize;
this.arrDropDownItem[e].node.color = this.colorLblCell;
}
this.arrDropDownItem[e].node.active = !0;
this.arrDropDownItem[e].setSelected(!1);
this.arrDropDownItem[e].init(this);
this.arrDropDownItem[e].setValue(t[e].id, t[e].value, e);
}
this.arrDropDownItem.length > 0 && this.arrDropDownItem[0].setSelected(!0);
};
e.prototype.setDescription = function(t) {
this._description = t;
this.lbDescription.string = t;
};
e.prototype.setCurrentValue = function(t, e) {
this._currentItemData = new a.default();
this._currentItemData.id = t;
this._currentItemData.value = e;
this.lbDescription.string = e;
};
e.prototype.onTouchSelectItem = function(t, e, o) {
for (var n = 0; n < this.arrDropDownItem.length; n++) o == n ? this.arrDropDownItem[n].setSelected(!0) : this.arrDropDownItem[n].setSelected(!1);
this.setCurrentValue(t, e, o);
this.nodeContent.active = !1;
this._callbackSelect && (this._targetCbSelect ? this._callbackSelect.call(this._targetCbSelect, t) : this._callbackSelect(t));
};
e.prototype.onTouchSelectDropDown = function() {
this.nodeContent.active = !this.nodeContent.active;
};
r([ u(cc.Label) ], e.prototype, "lbDescription", void 0);
r([ u(cc.Button) ], e.prototype, "buttonSelect", void 0);
r([ u(cc.ScrollView) ], e.prototype, "scrollViewSelect", void 0);
r([ u(cc.Prefab) ], e.prototype, "selectBoxItemPrefab", void 0);
r([ u(cc.Node) ], e.prototype, "nodeContent", void 0);
r([ u ], e.prototype, "fontSizeCell", void 0);
r([ u(cc.Color) ], e.prototype, "colorLblCell", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./LoDeSelectBoxItem": "LoDeSelectBoxItem",
"./LoDeSelectItemData": "LoDeSelectItemData"
} ],
LoDeSelectItemData: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ac314XzClpI8JY2P+WMsphQ", "LoDeSelectItemData");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, r = i.ccclass, s = (i.property, function() {
function t() {}
return n([ r ], t);
}());
o.default = s;
cc._RF.pop();
}, {} ],
LoDeSelectNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "55753RGD0JLbpVe6x8jE8d6", "LoDeSelectNumber");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/FormatUtil"), a = t("../../base_slot/util/Util"), c = t("./LoDeNetwork"), l = t("./Utils/LoDeUIDialog2Button"), u = cc._decorator, p = u.ccclass, h = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listNumber1 = null;
e.listNumber2 = null;
e.lbNotice = null;
e.ipMoney = null;
e.pickLimit = -1;
e.locationID = -1;
e.numberSelect = [];
e.mainGame = null;
return e;
}
e.prototype.init = function(t, e, o) {
this.mainGame = t;
this.numberSelect = [];
this.lbNotice.string = e + "";
this.pickLimit = e;
this.locationID = o;
this.ipMoney.string = "";
if (2 === o || 3 === o) {
this.listNumber2.active = !0;
this.listNumber1.active = !1;
for (var n = 0; n < this.listNumber2.children.length; n++) {
(i = this.listNumber2.children[n].getComponent("LoDeBetNumber")).lbNumber.string = n;
i.numBet = n;
i.tgNumber.isChecked = !1;
}
} else {
this.listNumber1.active = !0;
this.listNumber2.active = !1;
for (n = 0; n < this.listNumber1.children.length; n++) {
var i;
(i = this.listNumber1.children[n].getComponent("LoDeBetNumber")).lbNumber.string = n < 10 ? "0" + n : n;
i.numBet = n;
i.tgNumber.isChecked = !1;
}
}
};
e.prototype.onSelectNumber = function(t) {
var e = t.getComponent("LoDeBetNumber");
if (e.tgNumber.isChecked) {
if (this.numberSelect.length == this.pickLimit) {
var o = this.numberSelect.shift();
o && (o.tgNumber.isChecked = !1);
}
this.numberSelect.push(e);
} else {
var n = this.numberSelect.indexOf(e);
-1 != n && this.numberSelect.splice(n, 1);
}
};
e.prototype.onBtnBet = function() {
if (this.ipMoney.string && parseInt(a.default.removeDot(this.ipMoney.string)) > 0) if (this.numberSelect.length < this.pickLimit) this.mainGame.showTooltip("Bạn chưa chọn đủ số cần chọn"); else {
for (var t = "", e = 0; e < this.numberSelect.length; e++) 2 === this.locationID || 3 === this.locationID ? t += this.numberSelect[e].numBet : t += (this.numberSelect[e].numBet < 10 ? "0" : "") + this.numberSelect[e].numBet + (e == this.numberSelect.length - 1 ? "" : ",");
lngui.UIPopupManager.instance.showPopupFromPrefab(this.mainGame.UI.mDialogConfirm);
l.default.instance.nodePopup.getChildByName("Number").getComponent(cc.Label).string = t;
l.default.instance.nodePopup.getChildByName("Money").getComponent(cc.Label).string = this.ipMoney.string + " Gold";
l.default.instance.showDialog("Bạn có chắc chắn muốn đặt số", "ĐỒNG Ý", function() {
c.default.instance.setBet(this.locationID, parseInt(a.default.removeDot(this.ipMoney.string)), t, 4, 1);
this.mainGame.onBtnAll(null, "closeSelectNumber");
}.bind(this));
} else this.mainGame.showTooltip("Bạn hãy điền tiền cược");
};
e.prototype.inputNumber = function() {
this.ipMoney.string = s.default.formatNumber(a.default.removeDot(this.ipMoney.string));
};
r([ h(cc.Node) ], e.prototype, "listNumber1", void 0);
r([ h(cc.Node) ], e.prototype, "listNumber2", void 0);
r([ h(cc.Label) ], e.prototype, "lbNotice", void 0);
r([ h(cc.EditBox) ], e.prototype, "ipMoney", void 0);
return r([ p ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../base_slot/util/FormatUtil": void 0,
"../../base_slot/util/Util": void 0,
"./LoDeNetwork": "LoDeNetwork",
"./Utils/LoDeUIDialog2Button": "LoDeUIDialog2Button"
} ],
LoDeTutorial: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "42ef5EeIjJAFaCCPry6F5/e", "LoDeTutorial");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = (s.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ a ], e);
}(lngui.UIPopup));
o.default = c;
cc._RF.pop();
}, {} ],
LoDeUIDialog2Button: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "16e240RKFtK+ICFyUS2JkJT", "LoDeUIDialog2Button");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblContent = null;
e.lblTitleBtnOk = null;
e.nodePopup = null;
e.mCallbackOk = null;
e.mTargetOk = null;
e.mCallbackCancel = null;
e.mTargetCancel = null;
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
e.prototype.showDialog = function(t, e, o, n, i, r) {
void 0 === e && (e = "ĐỒNG Ý");
void 0 === o && (o = null);
void 0 === n && (n = null);
void 0 === i && (i = null);
void 0 === r && (r = null);
this.mCallbackOk = o;
this.mTargetOk = n;
this.mCallbackCancel = i;
this.mTargetCancel = r;
"" != t && (this.lblContent.string = t);
this.lblTitleBtnOk.string = e;
};
e.prototype.onTouchOk = function() {
if (this.mCallbackOk) {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
this.mCallbackOk.call(this.mTargetOk);
}
t.prototype.hide.call(this);
};
e.prototype.onTouchCancel = function() {
this.mCallbackCancel && this.mCallbackCancel.call(this.mTargetCancel);
t.prototype.hide.call(this);
};
var o;
e._instance = null;
r([ c(cc.Label) ], e.prototype, "lblContent", void 0);
r([ c(cc.Label) ], e.prototype, "lblTitleBtnOk", void 0);
r([ c(cc.Node) ], e.prototype, "nodePopup", void 0);
return o = r([ a ], e);
}(lngui.UIPopup);
o.default = l;
cc._RF.pop();
}, {} ],
LoDeUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "eee3aYuayZFs6/CAhxp/lHU", "LoDeUI");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LoDeSelectNumber"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tabDangDat = null;
e.tabDaDat = null;
e.txtKQ = [];
e.lbStatus = null;
e.lbTitle = null;
e.realdate = null;
e.lblmmoney = null;
e.lblTotalWinMoney = null;
e.lblsolo = null;
e.lbltienan = null;
e.lbltongcuoc = null;
e.txtthongbaocuoc = [];
e.edbTienCuoc = null;
e.edbTongCuoc = null;
e.edbSoCuoc = null;
e.btnDat = [];
e.nodeinfocuocmb = [];
e.nodechatkqvc = [];
e.nodemenu = null;
e.nodepopupbet = null;
e.nodeSelectBet = null;
e.mPreTooltip = null;
e.mTutorial = null;
e.mTop = null;
e.mHistory = null;
e.toastNode = null;
e.dialogNode = null;
e.mDialogConfirm = null;
return e;
}
r([ l(cc.ScrollView) ], e.prototype, "tabDangDat", void 0);
r([ l(cc.ScrollView) ], e.prototype, "tabDaDat", void 0);
r([ l(cc.Label) ], e.prototype, "txtKQ", void 0);
r([ l(cc.Label) ], e.prototype, "lbStatus", void 0);
r([ l(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ l(cc.Label) ], e.prototype, "realdate", void 0);
r([ l(cc.Label) ], e.prototype, "lblmmoney", void 0);
r([ l(cc.Label) ], e.prototype, "lblTotalWinMoney", void 0);
r([ l(cc.Label) ], e.prototype, "lblsolo", void 0);
r([ l(cc.Label) ], e.prototype, "lbltienan", void 0);
r([ l(cc.Label) ], e.prototype, "lbltongcuoc", void 0);
r([ l(cc.Label) ], e.prototype, "txtthongbaocuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbTienCuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbTongCuoc", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoCuoc", void 0);
r([ l(cc.Node) ], e.prototype, "btnDat", void 0);
r([ l(cc.Node) ], e.prototype, "nodeinfocuocmb", void 0);
r([ l(cc.Node) ], e.prototype, "nodechatkqvc", void 0);
r([ l(cc.Node) ], e.prototype, "nodemenu", void 0);
r([ l(cc.Node) ], e.prototype, "nodepopupbet", void 0);
r([ l(s.default) ], e.prototype, "nodeSelectBet", void 0);
r([ l(cc.Prefab) ], e.prototype, "mPreTooltip", void 0);
r([ l(cc.Prefab) ], e.prototype, "mTutorial", void 0);
r([ l(cc.Prefab) ], e.prototype, "mTop", void 0);
r([ l(cc.Prefab) ], e.prototype, "mHistory", void 0);
r([ l(cc.Node) ], e.prototype, "toastNode", void 0);
r([ l(cc.Node) ], e.prototype, "dialogNode", void 0);
r([ l(cc.Prefab) ], e.prototype, "mDialogConfirm", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LoDeSelectNumber": "LoDeSelectNumber"
} ],
LoDeVar: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb03bMT33VA97L1YcYrxmYT", "LoDeVar");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.getRaw = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send();
};
t.postRaw = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("POST", t);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send(JSON.stringify(e));
};
t.post = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("POST", t + this.getToken());
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send(JSON.stringify(e));
};
t.get = function(t, e, o, n, i) {
void 0 === n && (n = !1);
void 0 === i && (i = !1);
e.token = lngui.UserManager.instance.mainUserInfo.GameToken;
n && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.timeout = 3e4;
r.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
r.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
r.onreadystatechange = function() {
if (4 == r.readyState) if (r.status >= 200 && r.status < 400) {
n && console.log("ResponseText <=========\nstt=" + r.status + "\ndata=" + r.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, JSON.parse(r.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
o && o(r.status, r.responseText);
}
};
r.send();
};
t.getToken = function() {
return this.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var o = [];
for (var n in t) o.push(n + "=" + encodeURIComponent(t[n]));
return "?" + o.join("&");
};
t.api = {
GetLotteryResults: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Xoso/GetBettingOnDay",
GetGameSessionBetAccount: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Xoso/GetBettingOnDay",
GetBetAccountHistory: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Xoso/GetHistory",
GetHistoryKetQua: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Xoso/GetSessionResult",
GetBetAccountGameSession: "",
GetCurrentData: "",
GetLocations: "",
SetBet: "",
SetBet_FreeSpin: "",
GetTopWins: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Xoso/GetBigWinner",
negotiate: "https://xoso." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
hub: "xosoHub",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.GAME_TYPE = [ "DanhLo", "DanhDe", "LoXien", "DauDuoi", "LoTruot" ];
t.GAME_STATUS = {
WAITING: 0,
BETTING: 1,
END: 2
};
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
LoDe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3c2f0LMvrpFG4b1AXx6A7bH", "LoDe");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../base_slot/util/ToolTip"), a = t("./LoDeNetwork"), c = t("./LoDeUI"), l = t("./Utils/Lode.Const"), u = cc._decorator, p = u.ccclass, h = u.property, d = new Date(), f = d.getDate(), g = d.getMonth() + 1, b = d.getFullYear(), _ = f + "-" + g, y = f + "-" + g + "-" + b, m = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curGameId = 104;
e.currentGameSessionID = -1;
e.currrentIndexDateList = 1;
e.dateList = [];
e.LstGateInfo = [];
e.gateID = 4;
e.picklimit = 1;
e.numberbet = null;
e.countnumber = 1;
e.isopenmenu = !1;
e.mincuoc = 27;
e.UI = null;
e.Network = null;
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
this.UI.lblmmoney.string = l.LodeConst.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
o._instance = this;
this.Network.init(this);
this.currrentIndexDateList = 1;
this.UI.realdate.string = _;
this.UI.nodepopupbet.active = !1;
this.UI.edbTienCuoc.string = "1";
this.UI.edbTongCuoc.string = "27";
this.UI.lbltongcuoc.string = "27";
this.onchangetype();
};
e.prototype.onBtnSellectTypeBet = function(t, e) {
this.gateID = parseInt(e);
this.onchangetype();
5 == parseInt(e) ? this.picklimit = 2 : 6 == parseInt(e) ? this.picklimit = 3 : 7 == parseInt(e) ? this.picklimit = 4 : this.picklimit = 1;
};
e.prototype.onBtnAll = function(t, e) {
switch (e) {
case "dangDat":
this.UI.tabDangDat.node.active = !0;
this.UI.tabDaDat.node.active = !1;
break;

case "daDat":
this.UI.tabDaDat.node.active = !0;
this.UI.tabDangDat.node.active = !1;
break;

case "backLobby":
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.GameCoreManager.instance.onBackToLobby();
break;

case "preResult":
this.currrentIndexDateList++;
if (!this.dateList[this.currrentIndexDateList]) {
this.currrentIndexDateList--;
return;
}
a.default.instance.getHisKQ(this.dateList[this.currrentIndexDateList]);
break;

case "nextResult":
this.currrentIndexDateList--;
if (!this.dateList[this.currrentIndexDateList]) {
this.currrentIndexDateList++;
return;
}
a.default.instance.getHisKQ(this.dateList[this.currrentIndexDateList]);
break;

case "bet":
this.onBtnBet(this.picklimit, this.gateID);
break;

case "closeSelectNumber":
this.UI.nodeSelectBet.node.active = !1;
this.node.active = !0;
}
};
e.prototype.onbtnselecttypemb = function(t, e) {
for (var o = [ {
index: 0,
gateID: 4
}, {
index: 1,
gateID: 2
}, {
index: 2,
gateID: 10
}, {
index: 3,
gateID: 5
}, {
index: 4,
gateID: 8
} ], n = 0; n < this.UI.nodeinfocuocmb.length; n++) {
var i = n === parseInt(e, 10);
this.UI.nodeinfocuocmb[n].active = i;
if (i) {
this.gateID = o[n].gateID;
this.onchangetype();
}
}
};
e.prototype.ontouchchatkqcuoc = function(t, e) {
var o = parseInt(e, 10);
!isNaN(o) && o >= 0 && o < this.UI.nodechatkqvc.length && this.UI.nodechatkqvc.forEach(function(t, e) {
t.active = e === o;
});
};
e.prototype.onBtnBet = function(t, e) {
this.UI.nodeSelectBet.init(this, t, e);
this.UI.nodeSelectBet.node.active = !0;
};
e.prototype.onEdbcuocChange = function() {
this.onchangetype();
};
e.prototype.onEdbTongCuocChange = function() {
var t = this, e = this.LstGateInfo.find(function(e) {
return e.GateID === t.gateID;
});
if (e) {
this.UI.lblsolo.string = e.GateValue + "";
this.UI.lbltienan.string = e.Multiplier + "";
var o = parseInt(this.UI.edbTongCuoc.string) / e.GateValue;
if (5 === this.gateID || 6 === this.gateID || 7 === this.gateID) if (o < 1) {
this.showTooltip("Tiền cược 1 con tối thiểu là 1k");
this.UI.edbTongCuoc.string = e.GateValue;
this.UI.edbTienCuoc.string = "1";
} else this.UI.edbTienCuoc.string = o.toFixed(2); else if ((o /= this.countnumber) < 1) {
this.showTooltip("Tiền cược 1 con tối thiểu là 1k");
this.UI.edbTongCuoc.string = e.GateValue;
this.UI.edbTienCuoc.string = o.toFixed(2);
} else this.UI.edbTienCuoc.string = o.toFixed(2);
var n = e.Multiplier * parseFloat(this.UI.edbTienCuoc.string);
this.UI.lblTotalWinMoney.string = n.toFixed(2) + " K";
this.UI.txtthongbaocuoc[0].string = y;
this.UI.txtthongbaocuoc[1].string = e.GateName;
this.UI.txtthongbaocuoc[2].string = this.UI.edbSoCuoc.string;
this.UI.txtthongbaocuoc[3].string = l.LodeConst.formatNumber(1e3 * parseFloat(this.UI.edbTienCuoc.string));
this.UI.txtthongbaocuoc[4].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTongCuoc.string));
this.UI.txtthongbaocuoc[5].string = l.LodeConst.formatNumber(1e3 * n);
}
};
e.prototype.onEdbSoCuocChange = function() {
if (2 === this.gateID || 3 === this.gateID) {
var t = Array.from(new Set(this.UI.edbSoCuoc.string.split(""))), e = t.join("-");
this.countnumber = t.length;
this.numberbet = t.join(",");
this.UI.edbSoCuoc.string = e;
} else if (0 === this.gateID || 1 === this.gateID || 4 === this.gateID || 5 === this.gateID || 6 === this.gateID || 7 === this.gateID || 10 === this.gateID) {
var o = this.UI.edbSoCuoc.string.match(/(\d{2})/g);
e = (n = Array.from(new Set(o))).join("-");
this.numberbet = n.join(",");
this.countnumber = n.length;
this.UI.edbSoCuoc.string = e;
} else if (8 === this.gateID || 9 === this.gateID) {
var n;
o = this.UI.edbSoCuoc.string.match(/(\d{3})/g), e = (n = Array.from(new Set(o))).join("-");
this.countnumber = n.length;
this.numberbet = n.join(",");
this.UI.edbSoCuoc.string = e;
}
this.onchangetype();
};
e.prototype.onBtnBetMainGame = function() {
if (null != this.UI.edbSoCuoc.string) if (5 != this.gateID || 2 == this.countnumber) if (6 != this.gateID || 3 == this.countnumber) if (7 != this.gateID || 4 == this.countnumber) if (5 == this.gateID || 6 == this.gateID || 7 == this.gateID) a.default.instance.setBet(this.gateID, 1e3 * parseInt(this.UI.edbTienCuoc.string), this.numberbet, 4, 1); else for (var t = 0, e = this.numberbet.split(","); t < e.length; t++) {
var o = e[t];
a.default.instance.setBet(this.gateID, 1e3 * parseInt(this.UI.edbTienCuoc.string), o, 4, 1);
} else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định"); else this.showTooltip("Bạn chưa chọn đủ số hoặc sai số quy định");
};
e.prototype.btnshowpucuoc = function() {
if ("" != this.UI.edbSoCuoc.string) {
console.log(this.UI.edbSoCuoc.string);
this.UI.nodepopupbet.active = !0;
} else this.showTooltip("Bạn chưa chọn số cược");
};
e.prototype.btnhidepucuoc = function() {
this.UI.nodepopupbet.active = !1;
};
e.prototype.showTooltip = function(t, e) {
void 0 === e && (e = 2);
if (this.UI.mPreTooltip) {
var o = cc.instantiate(this.UI.mPreTooltip);
o.zIndex = 100;
o.getComponent(s.default).show(t);
this.UI.toastNode.destroyAllChildren();
this.UI.toastNode.addChild(o);
}
};
e.prototype.onchangetype = function() {
var t = this, e = this.LstGateInfo.find(function(e) {
return e.GateID == t.gateID;
});
if (e) {
this.UI.lblsolo.string = e.GateValue + "";
this.UI.lbltienan.string = e.Multiplier + "";
if (5 == this.gateID || 6 == this.gateID || 7 == this.gateID) {
var o = e.GateValue * parseInt(this.UI.edbTienCuoc.string) + "";
this.UI.edbTongCuoc.string = o;
} else {
o = e.GateValue * parseInt(this.UI.edbTienCuoc.string) * this.countnumber + "";
this.UI.edbTongCuoc.string = o;
}
var n = e.Multiplier * parseInt(this.UI.edbTienCuoc.string);
this.UI.lblTotalWinMoney.string = n + " K";
this.UI.txtthongbaocuoc[0].string = y;
this.UI.txtthongbaocuoc[1].string = e.GateName;
this.UI.txtthongbaocuoc[2].string = this.UI.edbSoCuoc.string;
this.UI.txtthongbaocuoc[3].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTienCuoc.string));
this.UI.txtthongbaocuoc[4].string = l.LodeConst.formatNumber(1e3 * parseInt(this.UI.edbTongCuoc.string));
this.UI.txtthongbaocuoc[5].string = l.LodeConst.formatNumber(1e3 * n);
}
};
e.prototype.clickshowmenu = function() {
if (0 == this.isopenmenu) {
this.isopenmenu = !0;
this.UI.nodemenu.runAction(cc.moveTo(.2, cc.v2(-610, 210)));
} else {
this.isopenmenu = !1;
this.UI.nodemenu.runAction(cc.moveTo(.2, cc.v2(-1e3, 210)));
}
};
e.prototype.updateMoney = function() {
this.UI.lblmmoney.string = l.LodeConst.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
};
var o;
e._instance = null;
r([ h(c.default) ], e.prototype, "UI", void 0);
r([ h(a.default) ], e.prototype, "Network", void 0);
return o = r([ p ], e);
}(cc.Component);
o.default = m;
cc._RF.pop();
}, {
"../../base_slot/util/ToolTip": void 0,
"./LoDeNetwork": "LoDeNetwork",
"./LoDeUI": "LoDeUI",
"./Utils/Lode.Const": "Lode.Const"
} ],
"Lode.Const": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1f7c2yrYNhPXa6YpgNFntSC", "Lode.Const");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LodeConst = void 0;
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
t.toInt = function(t) {
if ("" == t) return 0;
var e = t.split(",").join("");
return parseInt(e);
};
return t;
}();
o.LodeConst = n;
cc._RF.pop();
}, {} ],
"LodeST.Http": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0b516sbgq5P0LzrIGzXKGFp", "LodeST.Http");
var n = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = t("../LodeSTConfig"), r = cc._decorator, s = r.ccclass, a = (r.property, 
function() {
function t() {}
t.sendRequest = function(t, e, o, n, r) {
var s = i.default.App.USE_WSS ? "https://" : "http://", a = cc.loader.getXMLHttpRequest();
s = s + e + "/" + o;
i.default.App.ACCESS_TOKEN && (s.includes("?") ? s += "&access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN) : s += "?access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN));
a.timeout = 6e4;
a.open(t, s);
a.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
cc.sys.isNative || (a.withCredentials = !0);
a.onreadystatechange = function() {
if (4 === a.readyState && 200 === a.status) {
var t = null, e = null;
try {
t = JSON.parse(a.responseText);
} catch (t) {
e = t;
}
r(e, t);
} else 200 !== a.status && r(a.status, null);
};
var c = null;
if (n) {
c = JSON.stringify(n);
a.send(c);
} else a.send();
};
return n([ s ], t);
}());
o.default = a;
cc._RF.pop();
}, {
"../LodeSTConfig": "LodeSTConfig"
} ],
"LodeST.Network.Service": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "38348K8FkJK6JnbcCIS5m1E", "LodeST.Network.Service");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = function(t, e, o) {
this.target = t;
this.callback = e;
this.cbLogin = o;
};
cc._RF.pop();
}, {} ],
"LodeST.NetworkClient": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1f4b7COyZdMr5MtdcJVFKus", "LodeST.NetworkClient");
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
});
Object.defineProperty(o, "__esModule", {
value: !0
});
var r = t("./LodeST.Network.Service"), s = t("../LodeSTConfig"), a = t("../LodeSTController"), c = t("../LodeSTUtils"), l = t("./LodeST.Http"), u = t("./LodeST.Network"), p = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
}, h = function(t) {
i(e, t);
function e() {
var e = t.call(this) || this;
e.services = new Array();
e.isLogin = !1;
e.onLogined = null;
e.intervalPing = -1;
e.lastID = 0;
e.ID = 0;
e.isUseWSS = s.default.App.USE_WSS;
e.lastID = 0;
e.ID = 0;
return e;
}
e.getInstance = function() {
null == this.instance && (this.instance = new e());
return this.instance;
};
e.prototype.checkConnect = function(t) {
var e = this;
void 0 === t && (t = null);
this.onLogined = t;
if (this.isConnected()) this.isLogin && null != this.onLogined && this.onLogined(!0); else {
var o = this;
l.default.sendRequest("GET", s.default.App.HOST_LODE_SIEUTOC.host, "signalr/negotiate", null, function(t, n) {
if (null == t) {
o.connectToken = n.ConnectionToken;
o.tid = n.ConnectionId;
o.data = "gamehub";
o.connect();
null != e.onLogined && e.onLogined(!0);
} else e.onLogined(!1);
});
}
};
e.prototype.onError = function(t) {
console.log(t);
};
e.prototype.connect = function() {
t.prototype.connect.call(this, s.default.App.HOST_LODE_SIEUTOC.host, null);
};
e.prototype.reConnect = function() {
this.isReconnect = !0;
t.prototype.connect.call(this, s.default.App.HOST_LODE_SIEUTOC.host, null);
};
e.prototype.onOpen = function(e) {
var o = this;
t.prototype.onOpen.call(this, e);
this.sendLogin();
this.intervalPing = setInterval(function() {
return o.sendPingPoong();
}, 5e3);
};
e.prototype.sendLogin = function() {
var t = new p();
t.M = "EnterLobby";
t.A = [ c.default.Utils.getDeviceType(), s.default.App.VIP_PLAYER ];
this.send(t);
};
e.prototype.sendPlayNow = function() {
a.default.instance.showLoading();
var t = new p();
t.M = "PlayNow";
t.A = [ a.default.instance.RoomInfo.roomID, c.default.Utils.getDeviceType(), s.default.App.VIP_PLAYER, a.default.instance.RoomInfo.currentRoomId ];
this.send(t);
};
e.prototype.sendPingPoong = function() {
var t = new p();
t.M = "PingPong";
this.send(t);
};
e.prototype.send = function(t) {
if (this.ws && this.isConnected()) {
this.lastID = this.ID;
t.H = "gamehub";
t.I = this.ID;
this.ID++;
this.ws.send(JSON.stringify(t));
}
};
e.prototype.ping = function() {
null != this.ws && (this.ws.readyState, WebSocket.OPEN);
};
e.prototype.removeServices = function(t) {
for (var e = 0; e < this.services.length; e++) this.services[e].target === t && this.services.splice(e, 1);
};
e.prototype.onMessage = function(t) {
var e = JSON.parse(t.data);
if (void 0 !== e.M && e.M.length > 0) for (var o = e.M[0], n = o.A, i = 0; i < this.services.length; i++) {
var r = this.services[i];
if (r.target && r.target instanceof Object && r.target.node) {
r.callback(o.M, n);
e.M && e.M.length > 1 && e.M.forEach(function(t) {
"" != t.M && r.callback(t.M, t.A);
});
if (!this.isLogin && null != r.cbLogin) {
this.isLogin = !0;
r.cbLogin();
}
} else {
this.services.splice(i, 1);
i--;
}
} else if (e.R && e.R.AccountID) {
lngui.UIWaitingLayout.showWaiting();
this.sendPlayNow();
setTimeout(function() {
lngui.UIWaitingLayout.hideWaiting();
}, 2e3);
} else if (e.R && e.I === this.lastID.toString()) {
this.lastID = 0;
lngui.UIWaitingLayout.hideWaiting();
} else e.I && (this.lastID.toString(), e.I);
};
e.prototype.onClose = function() {
for (var t = 0; t < this._onCloses.length; t++) {
var e = this._onCloses[t];
if (e.target && e.target instanceof Object && e.target.node) e.callback(null, null); else {
this._onCloses.splice(t, 1);
t--;
}
}
this.isLogin = !1;
this.ws.onopen = null;
this.ws.onmessage = null;
this.ws.onerror = null;
this.ws.onclose = null;
this.ws = null;
};
e.prototype.addListener = function(t, e, o) {
this.services.filter(function(t) {
return t.target === e;
}).length > 0 || this.services.push(new r.default(e, t, o));
};
return e;
}(u.default);
o.default = h;
cc._RF.pop();
}, {
"../LodeSTConfig": "LodeSTConfig",
"../LodeSTController": "LodeSTController",
"../LodeSTUtils": "LodeSTUtils",
"./LodeST.Http": "LodeST.Http",
"./LodeST.Network": "LodeST.Network",
"./LodeST.Network.Service": "LodeST.Network.Service"
} ],
"LodeST.Network": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb7307XaSdJ0pUnn+J2Iytb", "LodeST.Network");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./LodeST.Network.Service"), i = t("../LodeSTConfig"), r = function() {
function t() {
this.ws = null;
this.host = null;
this.port = null;
this.connectToken = null;
this.tid = null;
this.data = null;
this.url = null;
this.isForceClose = !1;
this.isAutoReconnect = !0;
this.isUseWSS = !1;
this.isReconnect = !1;
this._onOpenes = new Array();
this._onCloses = new Array();
}
t.prototype.connect = function(t, e) {
this.isForceClose = !1;
this.host = t;
this.port = e;
var o = JSON.stringify([ {
name: this.data
} ]);
null != this.port ? this.url = this.host + ":" + this.port + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(o) + "&tid=" + encodeURIComponent(this.tid) + "&access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN) : this.url = this.host + "/signalr/connect?transport=webSockets&connectionToken=" + encodeURIComponent(this.connectToken) + "&connectionData=" + encodeURIComponent(o) + "&tid=" + encodeURIComponent(this.tid) + "&access_token=" + encodeURIComponent(i.default.App.ACCESS_TOKEN);
this.isReconnect && (this.url = this.url.replace("/signalr/connect?", "/signalr/reconnect?"));
if (null == this.ws) {
this.isUseWSS ? cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("wss://" + this.url, [], cc.url.raw("resources/cacert.pem")) : this.ws = new WebSocket("wss://" + this.url, []) : cc.sys.isNative && cc.sys.os === cc.sys.OS_ANDROID ? this.ws = new WebSocket("ws://" + this.url, []) : this.ws = new WebSocket("ws://" + this.url);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect(t, e);
}
};
t.prototype.onOpen = function() {};
t.prototype.onMessage = function() {};
t.prototype.onError = function(t) {
console.log(t);
};
t.prototype.onClose = function(t) {
console.log(t);
};
t.prototype.addOpen = function(t, e, o) {
this._onOpenes.filter(function(t) {
return t.target === e;
}).length > 0 || this._onOpenes.push(new n.default(e, t, o));
};
t.prototype.addOnClose = function(t, e, o) {
this._onCloses.filter(function(t) {
return t.target === e;
}).length > 0 || this._onCloses.push(new n.default(e, t, o));
};
t.prototype.close = function() {
this.isForceClose = !0;
this.ws && this.ws.close();
};
t.prototype.isConnected = function() {
return !!this.ws && this.ws.readyState === WebSocket.OPEN;
};
return t;
}();
o.default = r;
cc._RF.pop();
}, {
"../LodeSTConfig": "LodeSTConfig",
"./LodeST.Network.Service": "LodeST.Network.Service"
} ],
LodeSTBet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f3f470Y4plHg5N1Tq0du5sz", "LodeSTBet");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../framework/common/Utils"), a = t("../LodeSTController"), c = t("../LodeSTUtils"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeContent = null;
e.template = null;
e.lbText = null;
return e;
}
e.prototype.onEnable = function() {
if (a.default.instance.BetSession.length > 0) {
this.lbText.node.active = !1;
this.lbText.string = "";
} else {
this.lbText.node.active = !0;
this.lbText.string = "Quý khách chưa đặt cược";
this.resetLayoutConent();
}
};
e.prototype.resetListView = function() {
this.nodeContent && this.nodeContent.removeAllChildren();
this.lbText.node.active = !0;
this.lbText.string = "Quý khách chưa đặt cược";
};
e.prototype.showListBetSession = function() {
this.nodeContent && this.nodeContent.removeAllChildren();
if (a.default.instance.BetSession.length > 0) {
this.lbText.node.active = !1;
for (var t = 0; t < a.default.instance.BetSession.length; t++) {
var e = a.default.instance.BetSession[t], o = cc.instantiate(this.template);
o.active = !0;
var n = o.children[0];
n.children[0].getComponent(cc.Label).string = c.default.Utils.convertGateIDToName(e.GateID);
n.children[1].getComponent(cc.Label).string = "[" + e.BetData + "]";
o.children[1].children[0].getComponent(cc.Label).string = s.default.formatNumber(e.TotalBetValue) + "K";
o.parent = this.nodeContent;
}
}
};
e.prototype.addBetSession = function(t) {
this.lbText.node.active = !1;
var e = cc.instantiate(this.template);
e.active = !0;
var o = e.children[0];
o.children[0].getComponent(cc.Label).string = c.default.Utils.convertGateIDToName(t.GateID);
o.children[1].getComponent(cc.Label).string = "[" + t.BetData + "]";
e.children[1].children[0].getComponent(cc.Label).string = s.default.formatNumber(t.BetValue) + "K";
e.parent = this.nodeContent;
};
e.prototype.resetLayoutConent = function() {
this.nodeContent && this.nodeContent.removeAllChildren();
};
r([ p(cc.Node) ], e.prototype, "nodeContent", void 0);
r([ p(cc.Node) ], e.prototype, "template", void 0);
r([ p(cc.Label) ], e.prototype, "lbText", void 0);
return r([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0,
"../LodeSTController": "LodeSTController",
"../LodeSTUtils": "LodeSTUtils"
} ],
LodeSTChooseNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0a16dBmkZtFxKwJ+bohIRoI", "LodeSTChooseNumber");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LodeSTPopupNumber"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNumber = null;
e.callback = null;
return e;
}
e.prototype.onSetNumber = function(t, e) {
void 0 === e && (e = null);
this.lbNumber.string = t;
this.callback = e;
};
e.prototype.actClickNumber = function() {
s.default.instance.setArrayNumberChose(this.node, this.lbNumber.string);
};
r([ l(cc.Label) ], e.prototype, "lbNumber", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LodeSTPopupNumber": "LodeSTPopupNumber"
} ],
LodeSTConfig: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0ee1dJrTrJHvrGfvrsvj4H4", "LodeSTConfig");
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = function() {
function t() {}
t.App = {
USE_WSS: !0,
HOST_LODE_SIEUTOC: {
host: "ldst." + lngui.ConfigManager.instance.ConfigInfo.Api
},
ACCESS_TOKEN: "",
GATE: lngui.ConfigManager.instance.ConfigInfo.Gate,
VIP_PLAYER: 1
};
t.CPName = "";
return t;
}();
o.default = n;
cc._RF.pop();
}, {} ],
LodeSTController: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e4559pkOsFDJ6wOzlpgER+k", "LodeSTController");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Dialog"), a = t("../../../framework/common/Tween"), c = t("../../../framework/common/Utils"), l = t("./LodeSTConfig"), u = t("./LodeSTUtils"), p = t("./LodeSTView"), h = t("./network/LodeST.NetworkClient"), d = t("./tableft/LodeSTBet"), f = t("./LodeSTRoomID"), g = cc._decorator, b = g.ccclass, _ = g.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbPhien = null;
e.lbDBresult = null;
e.lbG1result = null;
e.lbG2result = [];
e.lbG3result = [];
e.lbG4result = [];
e.lbG5result = [];
e.lbG6result = [];
e.lbG7result = [];
e.LoadingNode = [];
e.listAvatar = [];
e.sprAvatar = null;
e.lbNickname = null;
e.lbGold = null;
e.lbTime = null;
e.lbMd5 = null;
e.lbResult = null;
e.lbSessionId = null;
e.msgSystem = null;
e.lbMsg = null;
e.nodeSelectRoomID = null;
e.btnTables = [];
e.LodeSTBet = null;
e.dateNow = null;
e.historySession = new Array();
e.historySessionThongKe = new Array();
e.historySessionPair = new Array();
e.newSessionInfo = null;
e.popupResult = null;
e.UserInfo = new u.default.UserInfo();
e.SessionInfo = new u.default.SessionInfo();
e.RoomInfo = null;
e.BetSession = new Array();
e.tabLeftIndex = 1;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
l.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
this.RoomInfo = new u.default.RoomInfo();
this.newSessionInfo = new u.default.SessionHistory();
this.BetSession = new Array();
this.RoomInfo.roomID = u.default.RoomID.P1P;
this.RoomInfo.currentRoomId = -1;
this.RoomInfo.betGroup = u.default.BETGROUP.DANH_DE;
this.RoomInfo.betGate = u.default.GATEBET.DE_DAU;
this.RoomInfo.thanhtoanLode = u.default.THANH_TOAN_LO.LO_4;
this.RoomInfo.lenghtBetGate = u.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
this.RoomInfo.betData = new Array();
};
e.prototype.start = function() {
p.default.instance.SelectTab(null, this.RoomInfo.betGroup);
};
e.prototype.getAccessToken = function() {
l.default.App.ACCESS_TOKEN = lngui.UserManager.instance.mainUserInfo.GameToken;
return l.default.App.ACCESS_TOKEN;
};
e.prototype.onEnable = function() {
var t = this;
this.showLoading();
null != l.default.App.ACCESS_TOKEN ? h.default.getInstance().checkConnect(function(e) {
if (e) {
h.default.getInstance().addOnClose(function() {
console.log("on close server lode sieutoc!");
t.gameExit();
}, t, null);
h.default.getInstance().addListener(function(e, o) {
switch (e) {
case "joinGame":
t.hideLoading();
if (o[0] && o[0].Account) {
t.UserInfo = o[0].Account;
t.UserInfo.Balance = lngui.UserManager.instance.mainUserInfo.Money;
t.lbNickname.string = t.UserInfo.NickName;
t.lbGold.string = c.default.formatNumber(t.UserInfo.Balance);
t.sprAvatar.spriteFrame = t.listAvatar[t.UserInfo.Avatar - 1];
t.nodeSelectRoomID.setCheckCallback(t.onCheckRoomIDSelected.bind(t));
t.dateNow = u.default.Utils.getDateNow();
u.default.Utils.loadShortHistory(t.dateNow, t.RoomInfo.roomID, 5);
u.default.Utils.loadShortHistoryThongKe(u.default.Utils.getCurrenDate(1), t.dateNow, t.RoomInfo.roomID, 15);
u.default.Utils.loadShortHistoryPair(u.default.Utils.getCurrenDate(1), t.dateNow, t.RoomInfo.roomID, 15);
t.tabLeftIndex = 1;
t.popupResult.active = !1;
for (var n = 0; n < t.btnTables.length; n++) n == t.tabLeftIndex ? t.btnTables[n].node.children[0].active = !0 : t.btnTables[n].node.children[0].active = !1;
} else t.gameExit();
break;

case "startActionTimer":
t.SessionInfo = o[0];
var i = t.lbMd5.node.getComponent("TypingEffect");
t.lbSessionId.string = "#" + t.SessionInfo.SessionIdString;
t.lbMd5.string = u.default.Utils.truncateString(t.SessionInfo.Md5Result, 20);
if (t.SessionInfo.Phrase == u.default.GAMESTATE.BETTING) {
t.lbTime.node.color = cc.Color.GREEN;
t.popupResult.active = !1;
t.newSessionInfo = null;
t.BetSession = new Array();
t.LodeSTBet.resetListView();
p.default.instance.resetDataBet();
} else if (t.SessionInfo.Phrase == u.default.GAMESTATE.SHAKING) {
t.showMsg("Hết thời gian đặt cược!");
t.lbTime.node.color = cc.Color.RED;
t.newSessionInfo = new u.default.SessionHistory();
t.newSessionInfo.RoomID = t.RoomInfo.roomID;
t.newSessionInfo.SessionID = t.SessionInfo.SessionID;
t.newSessionInfo.SessionIdString = t.SessionInfo.SessionIdString;
t.newSessionInfo.SpecialPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.SpecialPrizeData);
t.newSessionInfo.FirstPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.FirstPrizeData);
t.newSessionInfo.SecondPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.SecondPrizeData);
t.newSessionInfo.ThirdPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.ThirdPrizeData);
t.newSessionInfo.FourthPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.FourthPrizeData);
t.newSessionInfo.FifthPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.FifthPrizeData);
t.newSessionInfo.SixthPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.SixthPrizeData);
t.newSessionInfo.SeventhPrizeData = u.default.Utils.convertArrayToString(t.SessionInfo.SeventhPrizeData);
if (t.historySession && t.historySession[0] && t.historySession[0].SessionIdString != t.newSessionInfo.SessionIdString) {
t.historySession.unshift(t.newSessionInfo);
t.historySession.length > 5 && t.historySession.pop();
}
if (t.historySessionThongKe && t.historySessionThongKe[0] && t.historySessionThongKe[0].SessionIdString != t.newSessionInfo.SessionIdString) {
t.historySessionThongKe.unshift(t.newSessionInfo);
var r = t.historySessionThongKe[t.historySessionThongKe.length - 1];
t.historySessionPair.unshift(r);
t.historySessionThongKe.length > 50 && t.historySessionThongKe.pop();
t.historySessionPair.length > 50 && t.historySessionThongKe.pop();
}
if (null != t.newSessionInfo.RoomID || null != t.newSessionInfo.RoomID) {
t.popupResult.active = !0;
t.clearData();
for (n = 0; n < t.LoadingNode.length; n++) t.LoadingNode[n] && (t.LoadingNode[n].active = !0);
}
t.actTabSelect(null, 1);
} else if (t.SessionInfo.Phrase == u.default.GAMESTATE.SHOW_RESULT) {
t.lbTime.node.color = cc.Color.RED;
t.popupResult.active = !1;
} else if (t.SessionInfo.Phrase == u.default.GAMESTATE.WAITING) {
i.startTyping(u.default.Utils.truncateString(t.SessionInfo.Md5Result, 20));
t.SessionInfo.ResultString = "";
}
break;

case "updateRoomTime":
t.SessionInfo.Phrase == u.default.GAMESTATE.BETTING ? u.default.Utils.formatTimeSession(t.lbTime, o[0]) : u.default.Utils.formatTimeSession(t.lbTime, 0);
if (t.SessionInfo.Phrase == u.default.GAMESTATE.SHAKING) {
t.lbPhien.string = "#" + t.SessionInfo.SessionIdString;
var s = t.lbResult.node.getComponent("TypingEffect");
if (t.popupResult.active) {
if (15 == o[0]) {
s.startTyping(u.default.Utils.truncateString(t.SessionInfo.ResultString, 29));
console.log("Vào dây?");
} else t.lbResult.string = u.default.Utils.truncateString(t.SessionInfo.ResultString, 29);
switch (o[0]) {
case 14:
t.stopLoadingNode(9);
break;

case 12:
t.stopLoadingNode(8);
break;

case 10:
t.stopLoadingNode(7);
t.stopLoadingNode(6);
break;

case 9:
t.stopLoadingNode(5);
break;

case 8:
t.stopLoadingNode(4);
t.stopLoadingNode(3);
break;

case 6:
t.stopLoadingNode(2);
break;

case 5:
t.stopLoadingNode(1);
break;

case 3:
t.stopLoadingNode(0);
}
}
}
break;

case "betSuccess":
if (o && o[0] && o[1]) {
a.default.numberTo(t.lbGold, o[1], 1);
t.UserInfo.Balance = o[1];
lngui.GameCoreManager.instance.updateTotalGold(t.UserInfo.Balance);
var l = o[0];
if (l) {
t.BetSession.push(l);
t.LodeSTBet.addBetSession(l);
}
p.default.instance.resetDataBet();
t.showMsg("Đặt cược thành công");
}
break;

case "gameBetSessionHistory":
if (o[0] && o[0].length > 0) {
t.BetSession = o[0];
t.LodeSTBet.showListBetSession();
} else {
t.BetSession = new Array();
t.LodeSTBet.resetLayoutConent();
}
break;

case "winResult":
if (o[0] && o[0].AccountID) {
a.default.numberTo(t.lbGold, o[0].Balance, 1);
t.showMsg("Thắng cược - Số tiền nhận: " + c.default.formatNumber(o[0].Award));
}
break;

case "message":
o[0] && t.showMsg(o[0]);
}
}, t, function() {});
} else {
console.log("cannot connect to server lode sieu toc!");
t.gameExit();
}
}) : console.log("Not foud access token lode sieutoc!");
};
e.prototype.onCheckRoomIDSelected = function(t) {
if (t != this.RoomInfo.roomID) {
this.RoomInfo.currentRoomId = this.RoomInfo.roomID;
this.RoomInfo.roomID = t;
h.default.getInstance().sendPlayNow();
this.actTabSelect(null, 1);
u.default.Utils.loadShortHistory(this.dateNow, this.RoomInfo.roomID, 5);
u.default.Utils.loadShortHistoryThongKe(u.default.Utils.getCurrenDate(1), this.dateNow, this.RoomInfo.roomID, 15);
u.default.Utils.loadShortHistoryPair(u.default.Utils.getCurrenDate(1), this.dateNow, this.RoomInfo.roomID, 15);
}
};
e.prototype.stopLoadingNode = function(t) {
var e = this;
this.LoadingNode.forEach(function(o, n) {
if (n >= t && o.active) {
o.active = !1;
switch (n) {
case 9:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.SeventhPrizeData, e.lbG7result);
break;

case 8:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.SixthPrizeData, e.lbG6result);
break;

case 7:
case 6:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.FifthPrizeData, e.lbG5result);
break;

case 5:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.FourthPrizeData, e.lbG4result);
break;

case 3:
case 4:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.ThirdPrizeData, e.lbG3result);
break;

case 2:
u.default.Utils.mapResultPrizeToUI(e.newSessionInfo.SecondPrizeData, e.lbG2result);
break;

case 1:
e.lbG1result.string = e.newSessionInfo.FirstPrizeData;
break;

case 0:
e.lbDBresult.string = e.newSessionInfo.SpecialPrizeData;
}
}
});
};
e.prototype.showMsg = function(t) {
this.lbMsg.string = t;
this.msgSystem.showMsgSystem();
};
e.prototype.clearData = function() {
this.lbDBresult.string = "";
this.lbG1result.string = "";
u.default.Utils.mapResultPrizeToUI("", this.lbG2result);
u.default.Utils.mapResultPrizeToUI("", this.lbG3result);
u.default.Utils.mapResultPrizeToUI("", this.lbG4result);
u.default.Utils.mapResultPrizeToUI("", this.lbG5result);
u.default.Utils.mapResultPrizeToUI("", this.lbG6result);
u.default.Utils.mapResultPrizeToUI("", this.lbG7result);
};
e.prototype.actTabSelect = function(t, e) {
var o = parseInt(e);
if (o != this.tabLeftIndex) if (this.SessionInfo.Phrase == u.default.GAMESTATE.SHAKING) {
if (1 == o) {
this.tabLeftIndex = o;
for (var n = 0; n < this.btnTables.length; n++) n == this.tabLeftIndex ? this.btnTables[n].node.children[0].active = !0 : this.btnTables[n].node.children[0].active = !1;
}
} else {
this.tabLeftIndex = o;
for (n = 0; n < this.btnTables.length; n++) n == this.tabLeftIndex ? this.btnTables[n].node.children[0].active = !0 : this.btnTables[n].node.children[0].active = !1;
}
};
e.prototype.showLoading = function() {
lngui.UIWaitingLayout.showWaiting();
};
e.prototype.hideLoading = function() {
lngui.UIWaitingLayout.hideWaiting();
};
e.prototype.gameExit = function() {
lngui.UIScreenManager.instance.popToRootScreen();
this.unscheduleAllCallbacks();
this.msgSystem._onDestroy();
this.UserInfo = null;
var t = new u.default.ModelsSignalr();
t.M = "ExitLobby";
t.A = [];
h.default.getInstance().send(t);
h.default.getInstance().close();
};
var o;
e.instance = null;
r([ _(cc.Label) ], e.prototype, "lbPhien", void 0);
r([ _(cc.Label) ], e.prototype, "lbDBresult", void 0);
r([ _(cc.Label) ], e.prototype, "lbG1result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG2result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG3result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG4result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG5result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG6result", void 0);
r([ _(cc.Label) ], e.prototype, "lbG7result", void 0);
r([ _(cc.Node) ], e.prototype, "LoadingNode", void 0);
r([ _([ cc.SpriteFrame ]) ], e.prototype, "listAvatar", void 0);
r([ _(cc.Sprite) ], e.prototype, "sprAvatar", void 0);
r([ _(cc.Label) ], e.prototype, "lbNickname", void 0);
r([ _(cc.Label) ], e.prototype, "lbGold", void 0);
r([ _(cc.Label) ], e.prototype, "lbTime", void 0);
r([ _(cc.Label) ], e.prototype, "lbMd5", void 0);
r([ _(cc.Label) ], e.prototype, "lbResult", void 0);
r([ _(cc.Label) ], e.prototype, "lbSessionId", void 0);
r([ _(s.default) ], e.prototype, "msgSystem", void 0);
r([ _(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ _(f.default) ], e.prototype, "nodeSelectRoomID", void 0);
r([ _([ cc.Button ]) ], e.prototype, "btnTables", void 0);
r([ _(d.default) ], e.prototype, "LodeSTBet", void 0);
r([ _(cc.Node) ], e.prototype, "popupResult", void 0);
return o = r([ b ], e);
}(cc.Component);
o.default = y;
cc._RF.pop();
}, {
"../../../framework/common/Dialog": void 0,
"../../../framework/common/Tween": void 0,
"../../../framework/common/Utils": void 0,
"./LodeSTConfig": "LodeSTConfig",
"./LodeSTRoomID": "LodeSTRoomID",
"./LodeSTUtils": "LodeSTUtils",
"./LodeSTView": "LodeSTView",
"./network/LodeST.NetworkClient": "LodeST.NetworkClient",
"./tableft/LodeSTBet": "LodeSTBet"
} ],
LodeSTHandleButtonThongKe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d46b9xBUbVO7bGvXspzL7TJ", "LodeSTHandleButtonThongKe");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LodeSTThongKe"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNumber = null;
e.callback = null;
return e;
}
e.prototype.onSetNumber = function(t, e) {
void 0 === e && (e = null);
this.lbNumber.string = t;
this.callback = e;
};
e.prototype.actClickNumber = function() {
s.default.instance.setArrayNumberChose(this.node, this.lbNumber.string);
};
r([ l(cc.Label) ], e.prototype, "lbNumber", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LodeSTThongKe": "LodeSTThongKe"
} ],
LodeSTPool: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2df186u7FhIUY1Cqgb8Zj7O", "LodeSTPool");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, a = s.ccclass, c = s.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnNumber = null;
e.nodePool = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
this.createNodePool();
};
e.prototype.createNodePool = function() {
this.nodePool = new cc.NodePool();
for (var t = 0; t < 10; t++) this.nodePool.put(cc.instantiate(this.btnNumber));
};
e.prototype.putToPool = function(t) {
try {
this.nodePool && this.nodePool.put(t);
} catch (t) {}
};
e.prototype.clearPool = function() {
this.nodePool && this.nodePool.clear();
};
e.prototype.createBtnNumber = function() {
return this.nodePool.size() > 0 ? this.nodePool.get() : cc.instantiate(this.btnNumber);
};
var o;
e.instance = null;
r([ c(cc.Prefab) ], e.prototype, "btnNumber", void 0);
return o = r([ a ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LodeSTPopupBetHistory: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "91f186eKZVEW4LQZ5HCTJPg", "LodeSTPopupBetHistory");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../framework/common/Dialog"), a = t("../../../../framework/common/Utils"), c = t("../LodeSTConfig"), l = t("../LodeSTController"), u = t("../LodeSTUtils"), p = t("../network/LodeST.Http"), h = t("../LodeSTRoomID"), d = cc._decorator, f = d.ccclass, g = d.property, b = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.template = null;
e.lbTotalPage = null;
e.btnBackHis = null;
e.btnNextHis = null;
e.nodeSelectRoomID = null;
e.currentIndexPage = 1;
e.totalPage = 1;
e.roomId = -1;
return e;
}
o = e;
e.prototype._show = function() {
o.instance = this;
this.roomId = l.default.instance.RoomInfo.roomID;
this.nodeSelectRoomID.setCheckCallback(this.onCheckSelectRoomId.bind(this));
this.template.active = !1;
this.currentIndexPage = 1;
this.totalPage = 1;
this.loadData();
t.prototype.show.call(this);
};
e.prototype.loadData = function() {
var t = this;
this.content.removeAllChildren();
p.default.sendRequest("GET", c.default.App.HOST_LODE_SIEUTOC.host, "api/LodeSieuToc/GetHistory?roomId=" + this.roomId + "&page=" + this.currentIndexPage + "&top=5", null, function(e, o) {
if (null == e) {
if (o && 0 == o.Status) {
var n = o.Data, i = o.TotalPage;
t.totalPage = Math.floor(i / 5);
if (t.currentIndexPage >= t.totalPage) {
t.btnNextHis.interactable = !1;
t.btnNextHis.node.color = cc.Color.GRAY;
} else if (1 == t.currentIndexPage) {
t.btnBackHis.interactable = !1;
t.btnBackHis.node.color = cc.Color.GRAY;
} else {
t.btnBackHis.interactable = !0;
t.btnNextHis.interactable = !0;
t.btnBackHis.node.color = cc.Color.WHITE;
t.btnNextHis.node.color = cc.Color.WHITE;
}
t.lbTotalPage.string = t.currentIndexPage + "/" + t.totalPage;
if (n && n.length > 0) for (var r = 0; r < n.length; r++) {
var s = cc.instantiate(t.template);
s.children[0].getComponent(cc.Label).string = n[r].CreatedDateFm;
s.children[1].getComponent(cc.Label).string = n[r].SessionID;
s.children[2].getComponent(cc.Label).string = u.default.Utils.convertGateIDToName(parseInt(n[r].GateID));
s.children[3].getComponent(cc.Label).string = n[r].BetData;
s.children[4].getComponent(cc.Label).string = a.default.formatNumber(n[r].TotalBetValue);
s.children[5].getComponent(cc.Label).string = a.default.formatNumber(n[r].TotalAwardValue);
s.active = !0;
s.parent = t.content;
}
}
} else console.log("error!");
});
};
e.prototype.onCheckSelectRoomId = function(t) {
if (t != this.roomId) {
this.currentIndexPage = 1;
this.totalPage = 1;
this.roomId = t;
this.loadData();
}
};
e.prototype.actBackHis = function() {
this.currentIndexPage--;
this.currentIndexPage < 1 && (this.currentIndexPage = 1);
this.loadData();
};
e.prototype.actNextHis = function() {
this.currentIndexPage++;
this.currentIndexPage > this.totalPage && (this.currentIndexPage = this.totalPage);
this.loadData();
};
e.prototype.close = function() {
t.prototype.dismiss.call(this);
};
var o;
e.instance = null;
r([ g(cc.Node) ], e.prototype, "content", void 0);
r([ g(cc.Node) ], e.prototype, "template", void 0);
r([ g(cc.Label) ], e.prototype, "lbTotalPage", void 0);
r([ g(cc.Button) ], e.prototype, "btnBackHis", void 0);
r([ g(cc.Button) ], e.prototype, "btnNextHis", void 0);
r([ g(h.default) ], e.prototype, "nodeSelectRoomID", void 0);
return o = r([ f ], e);
}(s.default);
o.default = b;
cc._RF.pop();
}, {
"../../../../framework/common/Dialog": void 0,
"../../../../framework/common/Utils": void 0,
"../LodeSTConfig": "LodeSTConfig",
"../LodeSTController": "LodeSTController",
"../LodeSTRoomID": "LodeSTRoomID",
"../LodeSTUtils": "LodeSTUtils",
"../network/LodeST.Http": "LodeST.Http"
} ],
LodeSTPopupGuid: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6dd33Mg2FhHsps2S2yuTtSu", "LodeSTPopupGuid");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../framework/common/Dialog"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.lbContent = null;
return e;
}
e.prototype._show = function(e, o) {
this.lbTitle.string = e;
this.lbContent.string = o;
t.prototype.show.call(this);
};
e.prototype.close = function() {
t.prototype.dismiss.call(this);
};
r([ l(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
return r([ c ], e);
}(s.default);
o.default = u;
cc._RF.pop();
}, {
"../../../../framework/common/Dialog": void 0
} ],
LodeSTPopupHistorySession: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "abfe3mt+odNrLp3OiIVy7/S", "LodeSTPopupHistorySession");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../framework/common/Dialog"), a = t("../LodeSTConfig"), c = t("../LodeSTController"), l = t("../LodeSTUtils"), u = t("../network/LodeST.Http"), p = t("../LodeSTRoomID"), h = cc._decorator, d = h.ccclass, f = h.property, g = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSelectDate = null;
e.lbDate = null;
e.nodeResult = [];
e.nodeSelectRoomID = null;
e.lbSession_1 = null;
e.lbDB_1 = null;
e.lbG1_1 = null;
e.lbG2_1 = [];
e.lbG3_1 = [];
e.lbG4_1 = [];
e.lbG5_1 = [];
e.lbG6_1 = [];
e.lbG7_1 = [];
e.lbSession_2 = null;
e.lbDB_2 = null;
e.lbG1_2 = null;
e.lbG2_2 = [];
e.lbG3_2 = [];
e.lbG4_2 = [];
e.lbG5_2 = [];
e.lbG6_2 = [];
e.lbG7_2 = [];
e.lbSession_3 = null;
e.lbDB_3 = null;
e.lbG1_3 = null;
e.lbG2_3 = [];
e.lbG3_3 = [];
e.lbG4_3 = [];
e.lbG5_3 = [];
e.lbG6_3 = [];
e.lbG7_3 = [];
e.lbTotalPage = null;
e.btnBackSession = null;
e.btnNextSession = null;
e.currentIndexSelectDate = 0;
e.strDateFrom = null;
e.strDateTo = null;
e.currentIndexPage = 1;
e.totalPage = 1;
e.roomId = -1;
return e;
}
e.prototype._show = function() {
this.strDateFrom = l.default.Utils.getDateNow();
this.strDateTo = l.default.Utils.getDateNow();
this.roomId = c.default.instance.RoomInfo.roomID;
this.nodeSelectRoomID.setCheckCallback(this.onCheckSelectRoomId.bind(this));
this.currentIndexPage = 1;
this.totalPage = 1;
this.loadData();
this.nodeResult[0].active = !1;
this.nodeResult[1].active = !1;
this.nodeResult[2].active = !1;
t.prototype.show.call(this);
};
e.prototype.loadData = function() {
var t = this;
switch (this.currentIndexSelectDate) {
case 1:
this.strDateFrom = l.default.Utils.getDateNow();
this.strDateTo = l.default.Utils.getDateNow();
this.lbDate.string = "Hôm nay";
break;

case 2:
this.strDateFrom = l.default.Utils.getCurrenDate(1);
this.strDateTo = l.default.Utils.getCurrenDate(1);
this.lbDate.string = "Hôm qua";
break;

case 3:
this.strDateFrom = l.default.Utils.getCurrenDate(7);
this.strDateTo = l.default.Utils.getDateNow();
this.lbDate.string = "7 ngày trước";
}
u.default.sendRequest("GET", a.default.App.HOST_LODE_SIEUTOC.host, "api/LodeSieuToc/GetSessionInfo?openDateFrom=" + this.strDateFrom + "&openDateTo=" + this.strDateTo + "&roomId=" + this.roomId + "&page=" + this.currentIndexPage + "&top=3", null, function(e, o) {
if (null == e) {
if (0 == o.Status) {
var n = o.PageCount;
t.totalPage = Math.floor(n / 3);
if (t.currentIndexPage >= t.totalPage) {
t.btnNextSession.interactable = !1;
t.btnNextSession.node.color = cc.Color.GRAY;
} else if (1 == t.currentIndexPage) {
t.btnBackSession.interactable = !1;
t.btnBackSession.node.color = cc.Color.GRAY;
} else {
t.btnBackSession.interactable = !0;
t.btnBackSession.node.color = cc.Color.WHITE;
t.btnNextSession.interactable = !0;
t.btnNextSession.node.color = cc.Color.WHITE;
}
t.lbTotalPage.string = t.currentIndexPage + "/" + t.totalPage;
var i = o.Data;
if (null != i[0]) {
var r = i[0];
t.nodeResult[0].active = !0;
t.lbSession_1.string = r.SessionIdString;
t.lbDB_1.string = r.SpecialPrizeData;
t.lbG1_1.string = r.FirstPrizeData;
l.default.Utils.mapResultPrizeToUI(r.SecondPrizeData, t.lbG2_1);
l.default.Utils.mapResultPrizeToUI(r.ThirdPrizeData, t.lbG3_1);
l.default.Utils.mapResultPrizeToUI(r.FourthPrizeData, t.lbG4_1);
l.default.Utils.mapResultPrizeToUI(r.FifthPrizeData, t.lbG5_1);
l.default.Utils.mapResultPrizeToUI(r.SixthPrizeData, t.lbG6_1);
l.default.Utils.mapResultPrizeToUI(r.SeventhPrizeData, t.lbG7_1);
} else t.nodeResult[0].active = !1;
if (null != i[1]) {
var s = i[1];
t.nodeResult[1].active = !0;
t.lbSession_2.string = s.SessionIdString;
t.lbDB_2.string = s.SpecialPrizeData;
t.lbG1_2.string = s.FirstPrizeData;
l.default.Utils.mapResultPrizeToUI(s.SecondPrizeData, t.lbG2_2);
l.default.Utils.mapResultPrizeToUI(s.ThirdPrizeData, t.lbG3_2);
l.default.Utils.mapResultPrizeToUI(s.FourthPrizeData, t.lbG4_2);
l.default.Utils.mapResultPrizeToUI(s.FifthPrizeData, t.lbG5_2);
l.default.Utils.mapResultPrizeToUI(s.SixthPrizeData, t.lbG6_2);
l.default.Utils.mapResultPrizeToUI(s.SeventhPrizeData, t.lbG7_2);
} else t.nodeResult[1].active = !1;
if (null != i[2]) {
var a = i[2];
t.nodeResult[2].active = !0;
t.lbSession_3.string = a.SessionIdString;
t.lbDB_3.string = a.SpecialPrizeData;
t.lbG1_3.string = a.FirstPrizeData;
l.default.Utils.mapResultPrizeToUI(a.SecondPrizeData, t.lbG2_3);
l.default.Utils.mapResultPrizeToUI(a.ThirdPrizeData, t.lbG3_3);
l.default.Utils.mapResultPrizeToUI(a.FourthPrizeData, t.lbG4_3);
l.default.Utils.mapResultPrizeToUI(a.FifthPrizeData, t.lbG5_3);
l.default.Utils.mapResultPrizeToUI(a.SixthPrizeData, t.lbG6_3);
l.default.Utils.mapResultPrizeToUI(a.SeventhPrizeData, t.lbG7_3);
} else t.nodeResult[2].active = !1;
}
} else console.log("Hệ thống đang gián đoạn, thử lại sau!");
});
};
e.prototype.onCheckSelectRoomId = function(t) {
if (t != this.roomId) {
this.currentIndexPage = 1;
this.totalPage = 1;
this.nodeResult[0].active = !1;
this.nodeResult[1].active = !1;
this.nodeResult[2].active = !1;
this.roomId = t;
this.loadData();
}
};
e.prototype.actSelectDate = function(t, e) {
var o = parseInt(e);
if (o != this.currentIndexSelectDate) {
this.currentIndexSelectDate = o;
this.totalPage = 0;
this.currentIndexPage = 1;
this.actDismissDate();
this.loadData();
} else this.actDismissDate();
};
e.prototype.actBackSession = function() {
this.currentIndexPage--;
this.currentIndexPage < 1 && (this.currentIndexPage = 1);
this.loadData();
};
e.prototype.actNextSession = function() {
this.currentIndexPage++;
this.currentIndexPage > this.totalPage && (this.currentIndexPage = this.totalPage);
this.loadData();
};
e.prototype.actDismissDate = function() {
this.nodeSelectDate.active = !this.nodeSelectDate.active;
};
e.prototype.close = function() {
t.prototype.dismiss.call(this);
};
r([ f(cc.Node) ], e.prototype, "nodeSelectDate", void 0);
r([ f(cc.Label) ], e.prototype, "lbDate", void 0);
r([ f([ cc.Node ]) ], e.prototype, "nodeResult", void 0);
r([ f(p.default) ], e.prototype, "nodeSelectRoomID", void 0);
r([ f(cc.Label) ], e.prototype, "lbSession_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbDB_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG1_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG2_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG3_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG4_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG5_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG6_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbG7_1", void 0);
r([ f(cc.Label) ], e.prototype, "lbSession_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbDB_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG1_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG2_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG3_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG4_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG5_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG6_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbG7_2", void 0);
r([ f(cc.Label) ], e.prototype, "lbSession_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbDB_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG1_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG2_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG3_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG4_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG5_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG6_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbG7_3", void 0);
r([ f(cc.Label) ], e.prototype, "lbTotalPage", void 0);
r([ f(cc.Button) ], e.prototype, "btnBackSession", void 0);
r([ f(cc.Button) ], e.prototype, "btnNextSession", void 0);
return r([ d ], e);
}(s.default);
o.default = g;
cc._RF.pop();
}, {
"../../../../framework/common/Dialog": void 0,
"../LodeSTConfig": "LodeSTConfig",
"../LodeSTController": "LodeSTController",
"../LodeSTRoomID": "LodeSTRoomID",
"../LodeSTUtils": "LodeSTUtils",
"../network/LodeST.Http": "LodeST.Http"
} ],
LodeSTPopupNumber: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1fd3cfDZIpOsryX8Jx4vHE8", "LodeSTPopupNumber");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../../framework/common/Dialog"), a = t("../LodeSTController"), c = t("../LodeSTPool"), l = t("../LodeSTUtils"), u = t("../LodeSTView"), p = cc._decorator, h = p.ccclass, d = p.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.sprBtnNumber = [];
e.btnConfirmNumber = null;
e.nodeGroupButton3Number = null;
e.sprBtnTab = [];
e.msgDialog = null;
e.lbMsg = null;
e.arrayNumber = new Array();
e.currenIndex = 0;
return e;
}
o = e;
e.prototype._show = function() {
var e = this;
o.instance = this;
this.arrayNumber = new Array();
this.content && this.content.removeAllChildren();
this.disBtn(!0);
this.currenIndex = -1;
if (a.default.instance.RoomInfo.betGate == l.default.GATEBET.BA_CANG || a.default.instance.RoomInfo.betGate == l.default.GATEBET.BAO_LO_3_SO) {
this.currenIndex = -1;
this.nodeGroupButton3Number.active = !0;
setTimeout(function() {
e.node && e.actSelectTab3Number(null, "0");
}, 500);
} else if (a.default.instance.RoomInfo.betGate == l.default.GATEBET.DAU || a.default.instance.RoomInfo.betGate == l.default.GATEBET.DUOI) {
this.nodeGroupButton3Number.active = !1;
this.scheduleOnce(this.setNewContent1Number, .5);
} else {
this.nodeGroupButton3Number.active = !1;
this.scheduleOnce(this.setNewContentNumber, .5);
}
t.prototype.show.call(this);
};
e.prototype.disBtn = function(t) {
if (t) {
this.btnConfirmNumber.getComponent(cc.Button).interactable = !1;
this.btnConfirmNumber.color = cc.Color.GRAY;
} else {
this.btnConfirmNumber.getComponent(cc.Button).interactable = !0;
this.btnConfirmNumber.color = cc.Color.WHITE;
}
};
e.prototype.actConfirmChooseNumber = function() {
u.default.instance.onGetChooseNumberBet(this.arrayNumber);
this.dismiss();
};
e.prototype.setNewContent1Number = function() {
var t;
t = this.generateNumber0To9();
for (var e = 0; e < t.length; e++) {
var o = c.default.instance.createBtnNumber();
o.active = !0;
o.children[0].getComponent(cc.Label).string = t[e];
o.parent = this.content;
}
};
e.prototype.setNewContentNumber = function() {
var t;
t = this.generateNumbersFrom00To99();
for (var e = 0; e < t.length; e++) {
var o = c.default.instance.createBtnNumber();
o.active = !0;
o.children[0].getComponent(cc.Label).string = t[e];
o.parent = this.content;
}
};
e.prototype.setArrayNumberChose = function(t, e) {
var o = 0;
switch (a.default.instance.RoomInfo.betGate) {
case l.default.GATEBET.DAU:
case l.default.GATEBET.DUOI:
case l.default.GATEBET.BA_CANG:
case l.default.GATEBET.DE_DAU:
case l.default.GATEBET.DE_DAC_BIET:
case l.default.GATEBET.BAO_LO_2_SO:
case l.default.GATEBET.BAO_LO_3_SO:
o = 10;
break;

case l.default.GATEBET.LO_TRUOT_XIEN_4:
o = 4;
break;

case l.default.GATEBET.LO_TRUOT_XIEN_8:
o = 8;
break;

case l.default.GATEBET.LO_TRUOT_XIEN_10:
o = 10;
break;

case l.default.GATEBET.LO_XIEN_2:
o = 2;
break;

case l.default.GATEBET.LO_XIEN_3:
o = 3;
break;

case l.default.GATEBET.LO_XIEN_4:
o = 4;
}
if (this.arrayNumber.filter(function(t) {
return t == e;
}).length > 0) {
var n = this.arrayNumber.indexOf(e);
this.arrayNumber.splice(n, 1);
t.getComponent(cc.Sprite).spriteFrame = this.sprBtnNumber[0];
0 == this.arrayNumber.length && this.disBtn(!0);
} else {
this.arrayNumber.push(e);
if (this.arrayNumber.length > o) {
this.showMsg("Bạn chỉ được chọn " + o + " số");
n = this.arrayNumber.indexOf(e);
this.arrayNumber.splice(n, 1);
t.getComponent(cc.Sprite).spriteFrame = this.sprBtnNumber[0];
return;
}
switch (a.default.instance.RoomInfo.betGate) {
case l.default.GATEBET.DAU:
case l.default.GATEBET.DUOI:
case l.default.GATEBET.BA_CANG:
case l.default.GATEBET.DE_DAU:
case l.default.GATEBET.DE_DAC_BIET:
case l.default.GATEBET.BAO_LO_2_SO:
case l.default.GATEBET.BAO_LO_3_SO:
this.arrayNumber.length >= 1 ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_TRUOT_XIEN_4:
4 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_TRUOT_XIEN_8:
8 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_TRUOT_XIEN_10:
10 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_XIEN_2:
2 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_XIEN_3:
3 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
break;

case l.default.GATEBET.LO_XIEN_4:
4 == this.arrayNumber.length ? this.disBtn(!1) : this.disBtn(!0);
}
t.getComponent(cc.Sprite).spriteFrame = this.sprBtnNumber[1];
}
};
e.prototype.actSelectTab3Number = function(t, e) {
var o = parseInt(e);
if (this.currenIndex != o) {
this.currenIndex = o;
var n, i = 100 * o, r = i + 99;
this.arrayNumber = [];
this.content.removeAllChildren();
n = this.generateNumbersInRange(i, r);
for (var s = 0; s < n.length; s++) {
var a = c.default.instance.createBtnNumber();
a.active = !0;
a.children[0].getComponent(cc.Label).string = n[s];
a.parent = this.content;
}
for (s = 0; s < this.nodeGroupButton3Number.childrenCount; s++) s == this.currenIndex ? this.nodeGroupButton3Number.children[s].color = cc.Color.GREEN : this.nodeGroupButton3Number.children[s].color = cc.Color.WHITE;
}
};
e.prototype.showMsg = function(t) {
this.lbMsg.string = t;
this.msgDialog.showMsgSystem();
};
e.prototype.generateNumber0To9 = function() {
for (var t = [], e = 0; e < 10; e++) {
var o = e.toString();
t.push(o);
}
return t;
};
e.prototype.generateNumbersFrom00To99 = function() {
for (var t = [], e = 0; e < 10; e++) for (var o = 0; o < 10; o++) {
var n = e.toString() + o.toString();
t.push(n);
}
return t;
};
e.prototype.generateNumbersInRange = function(t, e) {
for (var o = [], n = t; n <= e; n++) {
var i = n.toString().padStart(3, "0");
o.push(i);
}
return o;
};
e.prototype.close = function() {
t.prototype.dismiss.call(this);
};
var o;
e.instance = null;
r([ d(cc.Node) ], e.prototype, "content", void 0);
r([ d([ cc.SpriteFrame ]) ], e.prototype, "sprBtnNumber", void 0);
r([ d(cc.Node) ], e.prototype, "btnConfirmNumber", void 0);
r([ d(cc.Node) ], e.prototype, "nodeGroupButton3Number", void 0);
r([ d([ cc.SpriteFrame ]) ], e.prototype, "sprBtnTab", void 0);
r([ d(s.default) ], e.prototype, "msgDialog", void 0);
r([ d(cc.Label) ], e.prototype, "lbMsg", void 0);
return o = r([ h ], e);
}(s.default);
o.default = f;
cc._RF.pop();
}, {
"../../../../framework/common/Dialog": void 0,
"../LodeSTController": "LodeSTController",
"../LodeSTPool": "LodeSTPool",
"../LodeSTUtils": "LodeSTUtils",
"../LodeSTView": "LodeSTView"
} ],
LodeSTResultSessionView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bdd34/sbchN2pnMgBhPmN+8", "LodeSTResultSessionView");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../LodeSTController"), a = t("../LodeSTUtils"), c = t("../LodeSTView"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbSession = null;
e.lbDB = null;
e.lbG1 = null;
e.lbG2 = [];
e.lbG3 = [];
e.lbG4 = [];
e.lbG5 = [];
e.lbG6 = [];
e.lbG7 = [];
e.btnView = [];
e.sprButton = [];
e.nodeSelectSession = null;
e.templateSessionId = [];
e.listSession = new Array();
e.currentData = null;
e.stateView = 0;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.onEnable = function() {
console.log("show tab result history!");
this.listSession = [];
this.stateView = 0;
this.currentData = null;
for (var t = 0; t < s.default.instance.historySession.length; t++) this.listSession.push(s.default.instance.historySession[t].SessionID);
this.currSession = this.listSession[0];
this.loadSession();
this.nodeSelectSession.active = !1;
};
e.prototype.loadSession = function() {
var t = this;
this.currentData = s.default.instance.historySession.filter(function(e) {
return e.SessionID == t.currSession;
})[0];
if (this.currentData) {
this.lbSession.string = "#" + this.currentData.SessionIdString;
var e = this.currentData.SpecialPrizeData, o = this.currentData.FirstPrizeData, n = this.currentData.SecondPrizeData, i = this.currentData.ThirdPrizeData, r = this.currentData.FourthPrizeData, c = this.currentData.FifthPrizeData, l = this.currentData.SixthPrizeData, u = this.currentData.SeventhPrizeData;
this.lbDB.string = e || "";
this.lbG1.string = o || "";
a.default.Utils.mapResultPrizeToUI(n, this.lbG2);
a.default.Utils.mapResultPrizeToUI(i, this.lbG3);
a.default.Utils.mapResultPrizeToUI(r, this.lbG4);
a.default.Utils.mapResultPrizeToUI(c, this.lbG5);
a.default.Utils.mapResultPrizeToUI(l, this.lbG6);
a.default.Utils.mapResultPrizeToUI(u, this.lbG7);
this.showNumberFromTypeView();
}
};
e.prototype.actSelectTypeView = function(t, e) {
var o = parseInt(e);
if (o != this.stateView) {
this.stateView = o;
this.loadSession();
for (var n = 0; n < this.btnView.length; n++) n == this.stateView ? this.btnView[n].node.getComponent(cc.Sprite).spriteFrame = this.sprButton[0] : this.btnView[n].node.getComponent(cc.Sprite).spriteFrame = this.sprButton[1];
}
};
e.prototype.atcShowSession = function() {
this.nodeSelectSession.active = !this.nodeSelectSession.active;
if (this.nodeSelectSession.active) for (var t = 0; t < this.templateSessionId.length - 1; t++) null != s.default.instance.historySession[t].SessionIdString && (this.templateSessionId[t].getComponent(cc.Label).string = "#" + s.default.instance.historySession[t].SessionIdString);
};
e.prototype.atcSelectSession = function(t, e) {
var o = parseInt(e);
this.atcShowSession(null);
if (5 != o) {
this.currSession = s.default.instance.historySession[o].SessionIdString;
this.loadSession();
} else c.default.instance.LodeSTPopupHistorySession._show();
};
e.prototype.showNumberFromTypeView = function() {
switch (this.stateView) {
case 1:
this.twoNumber();
break;

case 2:
this.threeNumber();
}
};
e.prototype.twoNumber = function() {
this.lbDB.string = this.lbDB.string.substr(-2);
this.lbG1.string = this.lbG1.string.substr(-2);
this.cover2Number(this.lbG2);
this.cover2Number(this.lbG3);
this.cover2Number(this.lbG4);
this.cover2Number(this.lbG5);
this.cover2Number(this.lbG6);
};
e.prototype.threeNumber = function() {
this.lbDB.string = this.lbDB.string.substr(-3);
this.lbG1.string = this.lbG1.string.substr(-3);
this.cover3Number(this.lbG2);
this.cover3Number(this.lbG3);
this.cover3Number(this.lbG4);
this.cover3Number(this.lbG5);
this.cover3Number(this.lbG6);
};
e.prototype.cover2Number = function(t) {
t.map(function(t) {
t.string = t.string.substr(-2);
});
};
e.prototype.cover3Number = function(t) {
t.map(function(t) {
t.string = t.string.substr(-3);
});
};
var o;
e.instance = null;
r([ p(cc.Label) ], e.prototype, "lbSession", void 0);
r([ p(cc.Label) ], e.prototype, "lbDB", void 0);
r([ p(cc.Label) ], e.prototype, "lbG1", void 0);
r([ p(cc.Label) ], e.prototype, "lbG2", void 0);
r([ p(cc.Label) ], e.prototype, "lbG3", void 0);
r([ p(cc.Label) ], e.prototype, "lbG4", void 0);
r([ p(cc.Label) ], e.prototype, "lbG5", void 0);
r([ p(cc.Label) ], e.prototype, "lbG6", void 0);
r([ p(cc.Label) ], e.prototype, "lbG7", void 0);
r([ p([ cc.Button ]) ], e.prototype, "btnView", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "sprButton", void 0);
r([ p(cc.Node) ], e.prototype, "nodeSelectSession", void 0);
r([ p([ cc.Node ]) ], e.prototype, "templateSessionId", void 0);
return o = r([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../LodeSTController": "LodeSTController",
"../LodeSTUtils": "LodeSTUtils",
"../LodeSTView": "LodeSTView"
} ],
LodeSTRoomID: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e0989TP9glISZ3I2Mnth3/V", "LodeSTRoomID");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LodeSTController"), a = cc._decorator, c = a.ccclass, l = a.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbRoomId = null;
e.nodeSelectRoomId = null;
e.currentRoomId = -1;
return e;
}
e.prototype.onEnable = function() {
this.nodeSelectRoomId.active = !1;
this.currentRoomId = s.default.instance.RoomInfo.roomID;
this.updateSelect();
};
e.prototype.setCheckCallback = function(t) {
this.callback = t;
};
e.prototype.actOpenSelectRoomId = function() {
this.nodeSelectRoomId.active = !this.nodeSelectRoomId.active;
};
e.prototype.actSelectRoomID = function(t, e) {
var o = parseInt(e);
if (o != this.currentRoomId) {
this.currentRoomId = o;
this.updateSelect();
null != this.callback && this.callback(this.currentRoomId);
} else this.updateSelect();
};
e.prototype.updateSelect = function() {
this.nodeSelectRoomId.active = !1;
this.lbRoomId.string = this.currentRoomId + " phút";
};
r([ l(cc.Label) ], e.prototype, "lbRoomId", void 0);
r([ l(cc.Node) ], e.prototype, "nodeSelectRoomId", void 0);
return r([ c ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LodeSTController": "LodeSTController"
} ],
LodeSTThongKe: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "154c6+djiFOurmoLIVZAnv7", "LodeSTThongKe");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../LodeSTController"), a = t("../LodeSTUtils"), c = t("../LodeSTView"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.selectTabs = [];
e.sprTabs = [];
e.sprButtonNumber = [];
e.content = null;
e.template = null;
e.btnGetNumber = null;
e.lbTxt = null;
e.currentSelect = 0;
e.currentArrayAuto = new Array();
e.lstLatestNumber = null;
e.lstNumberPair = null;
return e;
}
o = e;
e.prototype.onEnable = function() {
o.instance = this;
this.currentSelect = 0;
this.lstLatestNumber = "";
this.lstNumberPair = "";
this.currentArrayAuto = new Array();
for (var t = 0; t < this.selectTabs.length; t++) t == this.currentSelect ? this.selectTabs[t].getComponent(cc.Sprite).spriteFrame = this.sprTabs[0] : this.selectTabs[t].getComponent(cc.Sprite).spriteFrame = this.sprTabs[1];
if (null == s.default.instance.historySessionThongKe || null == s.default.instance.historySessionPair) {
this.lstLatestNumber = "";
this.lstNumberPair = "";
} else {
var e = "";
for (t = 0; t < s.default.instance.historySessionThongKe.length; t++) {
e += (i = s.default.instance.historySessionThongKe[t]).SpecialPrizeData;
e += "," + i.FirstPrizeData;
e += "," + i.SecondPrizeData;
e += "," + i.ThirdPrizeData;
e += "," + i.FourthPrizeData;
e += "," + i.FifthPrizeData;
e += "," + i.SixthPrizeData;
e += "," + i.SeventhPrizeData;
}
var n = "";
for (t = 0; t < s.default.instance.historySessionPair.length; t++) {
var i;
n += (i = s.default.instance.historySessionPair[t]).SpecialPrizeData;
n += "," + i.FirstPrizeData;
n += "," + i.SecondPrizeData;
n += "," + i.ThirdPrizeData;
n += "," + i.FourthPrizeData;
n += "," + i.FifthPrizeData;
n += "," + i.SixthPrizeData;
n += "," + i.SeventhPrizeData;
}
if ("" == e || "" == n) return;
this.lstLatestNumber = a.default.Utils.convertStringTo2Number(e);
this.lstNumberPair = a.default.Utils.convertStringTo2Number(n);
}
this.loadDataTab1();
};
e.prototype.loadDataTab1 = function() {
this.content.removeAllChildren();
if ("" != this.lstLatestNumber && "" != this.lstNumberPair) {
this.btnGetNumber.node.active = !0;
this.lbTxt.string = "Lấy các số chưa về";
this.currentArrayAuto = new Array();
for (var t, e = this.lstLatestNumber.split(",").map(Number), o = a.default.Utils.findLowestFrequencyNumbers(this.lstLatestNumber, 10), n = function(o) {
var n = e.filter(function(t) {
return t === o;
}).length;
(t = cc.instantiate(i.template)).children[0].children[0].getComponent(cc.Label).string = o < 10 ? "0" + o : o + "";
t.children[0].children[1].getComponent(cc.Label).string = n + " lần";
t.children[0].children[2].active = !1;
t.children[0].children[3].active = !1;
t.active = !0;
t.parent = i.content;
i.currentArrayAuto.push(o < 10 ? "0" + o : o);
}, i = this, r = 0, s = o; r < s.length; r++) n(s[r]);
}
};
e.prototype.loadDataTab2 = function() {
this.content.removeAllChildren();
if ("" != this.lstLatestNumber && "" != this.lstNumberPair) {
this.currentArrayAuto = new Array();
this.btnGetNumber.node.active = !1;
this.lbTxt.string = "";
for (var t = 0, e = a.default.Utils.findHighestFrequencyNumbers(this.lstLatestNumber, 15); t < e.length; t++) {
var o = e[t], n = a.default.Utils.countOccurrences(this.lstLatestNumber).get(o) || 0, i = a.default.Utils.countOccurrences(this.lstNumberPair).get(o) || 0, r = cc.instantiate(this.template);
r.children[0].children[0].getComponent(cc.Label).string = parseInt(o) < 10 ? "0" + o : o + "";
r.children[0].children[1].getComponent(cc.Label).string = n + " lần";
var s = n - i;
if (s < 0) {
r.children[0].children[2].getComponent(cc.Sprite).spriteFrame = this.sprButtonNumber[1];
r.children[0].children[3].getComponent(cc.Label).string = (-1 * s).toString();
r.children[0].children[3].color = cc.Color.RED;
} else {
r.children[0].children[2].getComponent(cc.Sprite).spriteFrame = this.sprButtonNumber[0];
r.children[0].children[3].getComponent(cc.Label).string = s.toString();
r.children[0].children[3].color = cc.Color.YELLOW;
}
r.active = !0;
r.parent = this.content;
}
}
};
e.prototype.loadDataTab3 = function() {
this.content.removeAllChildren();
if ("" != this.lstLatestNumber && "" != this.lstNumberPair) {
this.currentArrayAuto = new Array();
this.btnGetNumber.node.active = !0;
this.lbTxt.string = "Lấy các số về ít";
for (var t = 0, e = a.default.Utils.findLowestFrequencyNumbers(this.lstNumberPair, 10); t < e.length; t++) {
var o = e[t], n = a.default.Utils.countOccurrences(this.lstNumberPair).get(o) || 0, i = a.default.Utils.countOccurrences(this.lstLatestNumber).get(o) || 0, r = cc.instantiate(this.template);
r.children[0].children[0].getComponent(cc.Label).string = parseInt(o) < 10 ? "0" + o : o + "";
r.children[0].children[1].getComponent(cc.Label).string = n + " lần";
var s = n - i;
if (s < 0) {
r.children[0].children[2].getComponent(cc.Sprite).spriteFrame = this.sprButtonNumber[1];
r.children[0].children[3].getComponent(cc.Label).string = (-1 * s).toString();
r.children[0].children[3].color = cc.Color.RED;
} else {
r.children[0].children[2].getComponent(cc.Sprite).spriteFrame = this.sprButtonNumber[0];
r.children[0].children[3].getComponent(cc.Label).string = s.toString();
r.children[0].children[3].color = cc.Color.YELLOW;
}
r.active = !0;
r.parent = this.content;
this.currentArrayAuto.push(o < 10 ? "0" + o : o);
}
}
};
e.prototype.actGetNumber = function() {
var t = this.currentArrayAuto, e = s.default.instance.RoomInfo.lenghtBetGate;
if (2 == e || 1 == e) c.default.instance.onGetChooseNumberBet(t); else {
var o = t.map(function(t) {
return t.toString().padStart(3, "0");
});
c.default.instance.onGetChooseNumberBet(o);
}
};
e.prototype.setArrayNumberChose = function(t, e) {
c.default.instance.onGetChooseNumberBetBytoBy(e);
};
e.prototype.actSelectKy = function(t, e) {
var o = parseInt(e);
if (this.currentSelect != o) {
this.currentSelect = o;
for (var n = 0; n < this.selectTabs.length; n++) n == this.currentSelect ? this.selectTabs[n].getComponent(cc.Sprite).spriteFrame = this.sprTabs[0] : this.selectTabs[n].getComponent(cc.Sprite).spriteFrame = this.sprTabs[1];
switch (this.currentSelect) {
case 0:
this.loadDataTab1();
break;

case 1:
this.loadDataTab2();
break;

case 2:
this.loadDataTab3();
}
}
};
var o;
e.instance = null;
r([ p([ cc.Node ]) ], e.prototype, "selectTabs", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "sprTabs", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "sprButtonNumber", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p(cc.Node) ], e.prototype, "template", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetNumber", void 0);
r([ p(cc.Label) ], e.prototype, "lbTxt", void 0);
return o = r([ u ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../LodeSTController": "LodeSTController",
"../LodeSTUtils": "LodeSTUtils",
"../LodeSTView": "LodeSTView"
} ],
LodeSTUtils: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "51e51iprLlF3rLqX/a+iPKZ", "LodeSTUtils");
var n = this && this.__spreadArrays || function() {
for (var t = 0, e = 0, o = arguments.length; e < o; e++) t += arguments[e].length;
var n = Array(t), i = 0;
for (e = 0; e < o; e++) for (var r = arguments[e], s = 0, a = r.length; s < a; s++, 
i++) n[i] = r[s];
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i, r = t("./LodeSTConfig"), s = t("./LodeSTController"), a = t("./network/LodeST.Http");
(function(t) {
var e;
t.ModelsSignalr = function() {
this.M = null;
this.A = null;
this.H = null;
this.I = null;
};
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.WAITING = 0] = "WAITING";
t[t.BETTING = 1] = "BETTING";
t[t.SHAKING = 2] = "SHAKING";
t[t.SHOW_RESULT = 3] = "SHOW_RESULT";
})(t.GAMESTATE || (t.GAMESTATE = {}));
(function(t) {
t[t.BAO_LO = 0] = "BAO_LO";
t[t.LO_XIEN = 1] = "LO_XIEN";
t[t.LO_TRUOT = 2] = "LO_TRUOT";
t[t.DANH_DE = 3] = "DANH_DE";
t[t.BA_CANG = 4] = "BA_CANG";
t[t.DAU_DUOI = 5] = "DAU_DUOI";
})(e = t.BETGROUP || (t.BETGROUP = {}));
(function(t) {
t[t.DAU = 1] = "DAU";
t[t.DUOI = 2] = "DUOI";
t[t.BA_CANG = 3] = "BA_CANG";
t[t.DE_DAU = 4] = "DE_DAU";
t[t.DE_DAC_BIET = 5] = "DE_DAC_BIET";
t[t.LO_TRUOT_XIEN_4 = 6] = "LO_TRUOT_XIEN_4";
t[t.LO_TRUOT_XIEN_8 = 7] = "LO_TRUOT_XIEN_8";
t[t.LO_TRUOT_XIEN_10 = 8] = "LO_TRUOT_XIEN_10";
t[t.LO_XIEN_2 = 9] = "LO_XIEN_2";
t[t.LO_XIEN_3 = 10] = "LO_XIEN_3";
t[t.LO_XIEN_4 = 11] = "LO_XIEN_4";
t[t.BAO_LO_2_SO = 12] = "BAO_LO_2_SO";
t[t.BAO_LO_3_SO = 13] = "BAO_LO_3_SO";
})(t.GATEBET || (t.GATEBET = {}));
(function(t) {
t[t.MOT_SO = 1] = "MOT_SO";
t[t.HAI_SO = 2] = "HAI_SO";
t[t.BA_SO = 3] = "BA_SO";
})(t.LENGTH_NUMBER_BET_GATE || (t.LENGTH_NUMBER_BET_GATE = {}));
(function(t) {
t[t.LO_1 = 1] = "LO_1";
t[t.LO_4 = 4] = "LO_4";
t[t.LO_23 = 23] = "LO_23";
t[t.LO_27 = 27] = "LO_27";
})(t.THANH_TOAN_LO || (t.THANH_TOAN_LO = {}));
(function(t) {
t[t.DAU_DUOI = 9.5] = "DAU_DUOI";
t[t.BA_CANG = 900] = "BA_CANG";
t[t.DANH_DE = 95] = "DANH_DE";
t[t.LO_TRUOT_XIEN_4 = 2.9] = "LO_TRUOT_XIEN_4";
t[t.LO_TRUOT_XIEN_8 = 9.1] = "LO_TRUOT_XIEN_8";
t[t.LO_TRUOT_XIEN_10 = 16.4] = "LO_TRUOT_XIEN_10";
t[t.LO_XIEN_2 = 17] = "LO_XIEN_2";
t[t.LO_XIEN_3 = 65] = "LO_XIEN_3";
t[t.LO_XIEN_4 = 250] = "LO_XIEN_4";
t[t.BAO_LO_2_SO = 98] = "BAO_LO_2_SO";
t[t.BAO_LO_3_SO = 900] = "BAO_LO_3_SO";
})(t.TI_LE_WIN || (t.TI_LE_WIN = {}));
t.UserInfo = function() {
this.AccountID = -1;
this.Avatar = -1;
this.Balance = -1;
this.NickName = null;
};
t.SessionInfo = function() {
this.Elapsed = 0;
this.Phrase = t.GAMESTATE.NONE;
this.SessionID = 0;
this.SessionIdString = "";
this.Md5Result = "";
this.ResultString = "";
this.SpecialPrizeData = new Array();
this.FirstPrizeData = new Array();
this.SecondPrizeData = new Array();
this.ThirdPrizeData = new Array();
this.FourthPrizeData = new Array();
this.FifthPrizeData = new Array();
this.SixthPrizeData = new Array();
this.SeventhPrizeData = new Array();
};
t.SessionHistory = function() {
this.SessionID = 0;
this.RoomID = 0;
this.SessionIdString = null;
this.Md5Result = null;
this.ResultString = null;
this.SpecialPrizeData = null;
this.FirstPrizeData = null;
this.SecondPrizeData = null;
this.ThirdPrizeData = null;
this.FourthPrizeData = null;
this.FifthPrizeData = null;
this.SixthPrizeData = null;
this.SeventhPrizeData = null;
};
var o = function() {
function e() {}
e.getDateNow = function() {
var t = new Date();
return t.getMonth() + 1 + "-" + t.getDate() + "-" + t.getFullYear();
};
e.getCurrenDate = function(t) {
var e = new Date(), o = new Date(e.getTime() - 864e5 * t);
return o.getMonth() + 1 + "-" + o.getDate() + "-" + o.getFullYear();
};
e.getDeviceType = function() {
return cc.sys.os === cc.sys.OS_IOS ? 3 : cc.sys.os === cc.sys.OS_ANDROID ? 2 : 1;
};
e.formatTimeSession = function(t, e) {
var o = Math.floor(e / 60), n = e % 60;
t && (t.string = o.toString().padStart(2, 0) + ":" + n.toString().padStart(2, "0"));
};
e.mapResultPrizeToUI = function(t, e) {
t && e.length > 0 ? e.map(function(e, o) {
e.string = t ? t.split(",")[o] : "";
}) : e.map(function(t) {
t.string = "";
});
};
e.loadShortHistory = function(t) {
a.default.sendRequest("GET", r.default.App.HOST_LODE_SIEUTOC.host, "api/LodeSieuToc/GetSessionInfo?openDateFrom=" + t + "&openDateTo=" + t + "&roomId=" + s.default.instance.RoomInfo.roomID + "&page=1&top=5", null, function(t, e) {
if (t) console.log(t); else {
console.log(e);
if (null != e.Data && e.Data.length > 0) {
var o = e.Data;
s.default.instance.historySession = o;
} else {
console.log("no-data");
s.default.instance.historySession = null;
}
}
});
};
e.loadShortHistoryThongKe = function(t, e) {
a.default.sendRequest("GET", r.default.App.HOST_LODE_SIEUTOC.host, "api/LodeSieuToc/GetSessionInfo?openDateFrom=" + t + "&openDateTo=" + e + "&roomId=" + s.default.instance.RoomInfo.roomID + "&page=1&top=100", null, function(t, e) {
if (t) console.log(t); else {
console.log(e);
if (null != e.Data && e.Data.length > 0) {
var o = e.Data, n = o.length;
s.default.instance.historySessionThongKe = o.slice(0, n / 2);
s.default.instance.historySessionPair = o.slice(n / 2);
} else {
console.log("no-data");
s.default.instance.historySessionThongKe = [];
s.default.instance.historySessionPair = [];
}
}
});
};
e.loadShortHistoryPair = function(t, e) {
a.default.sendRequest("GET", r.default.App.HOST_LODE_SIEUTOC.host, "api/LodeSieuToc/GetSessionInfo?openDateFrom=" + t + "&openDateTo=" + e + "&roomId=" + s.default.instance.RoomInfo.roomID + "&page=2&top=50", null, function(t, e) {
if (t) console.log(t); else {
console.log(e);
if (null != e.Data && e.Data.length > 0) {
var o = e.Data;
s.default.instance.historySessionPair = o;
} else {
console.log("no-data");
s.default.instance.historySessionPair = [];
}
}
});
};
e.findHighestFrequencyNumbers = function(e, o) {
var i = t.Utils.countOccurrences(e);
return n(i.entries()).sort(function(t, e) {
return e[1] - t[1];
}).slice(0, o).map(function(t) {
return t[0];
});
};
e.findLowestFrequencyNumbers = function(t, e) {
for (var o = t.split(",").map(Number), i = new Map(), r = 0, s = o; r < s.length; r++) {
var a = s[r];
i.set(a, (i.get(a) || 0) + 1);
}
return n(i.entries()).sort(function(t, e) {
return t[1] - e[1];
}).slice(0, e).map(function(t) {
return t[0];
});
};
e.countOccurrences = function(t) {
for (var e = t.split(",").map(Number), o = new Map(), n = 0, i = e; n < i.length; n++) {
var r = i[n];
o.set(r, (o.get(r) || 0) + 1);
}
return o;
};
e.convertStringTo2Number = function(t) {
if (!(null == t || t.length < 1)) return t.split(",").map(function(t) {
return t.slice(-2);
}).join(",");
};
e.convertArrayToString = function(t) {
var e = "";
t && t.forEach(function(o, n) {
n == t.length - 1 ? e += o : e += o + ",";
});
return e;
};
e.truncateString = function(t, e) {
return t.length > e ? t.slice(0, e) + "..." : t;
};
e.convertGateIDToName = function(e) {
switch (e) {
case t.GATEBET.DAU:
return "Đầu";

case t.GATEBET.DUOI:
return "Đuôi";

case t.GATEBET.BA_CANG:
return "3 Càng";

case t.GATEBET.DE_DAU:
return "Đề Đầu";

case t.GATEBET.DE_DAC_BIET:
return "Đề Đặc Biệt";

case t.GATEBET.LO_TRUOT_XIEN_4:
return "Lô Trượt Xiên 4";

case t.GATEBET.LO_TRUOT_XIEN_8:
return "Lô Trượt Xiên 8";

case t.GATEBET.LO_TRUOT_XIEN_10:
return "Lô Trượt Xiên 10";

case t.GATEBET.LO_XIEN_2:
return "Lô Xiên 2";

case t.GATEBET.LO_XIEN_3:
return "Lô Xiên 3";

case t.GATEBET.LO_XIEN_4:
return "Lô Xiên 4";

case t.GATEBET.BAO_LO_2_SO:
return "Bao Lô 2 Số";

case t.GATEBET.BAO_LO_3_SO:
return "Bao Lô 3 Số";

default:
return "UNDEFIEND";
}
};
e.generateRandomNumberString = function() {
for (var t = "", e = 0; e < 55; e++) t += Math.floor(10 * Math.random()).toString();
return t;
};
return e;
}();
t.Utils = o;
var i = function() {
function t() {}
t.P1P = 1;
t.P3P = 3;
t.P5P = 5;
return t;
}();
t.RoomID = i;
t.RoomInfo = function() {
this.roomID = -1;
this.currentRoomId = -1;
this.betGroup = e.LO_TRUOT;
this.betGate = null;
this.thanhtoanLode = null;
this.lenghtBetGate = null;
this.tiLeWin = null;
this.betData = new Array();
};
})(i || (i = {}));
o.default = i;
cc._RF.pop();
}, {
"./LodeSTConfig": "LodeSTConfig",
"./LodeSTController": "LodeSTController",
"./network/LodeST.Http": "LodeST.Http"
} ],
LodeSTView: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9cd45+GuZxLuIcgQMBTCpDC", "LodeSTView");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("../../../framework/common/Utils"), a = t("./LodeSTController"), c = t("./LodeSTUtils"), l = t("./network/LodeST.NetworkClient"), u = t("./popups/LodeSTPopupBetHistory"), p = t("./popups/LodeSTPopupGuid"), h = t("./popups/LodeSTPopupHistorySession"), d = t("./popups/LodeSTPopupNumber"), f = cc._decorator, g = f.ccclass, b = f.property, _ = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprButton = [];
e.sprButtonGate = [];
e.btnGroup = [];
e.btnGateBet = [];
e.nodeGateBet = [];
e.nodeConfirmBet = [];
e.rtxtDescriptionsGate = null;
e.fontBtnGroup = [];
e.edBetData = null;
e.edBetMoney = null;
e.lbWinInBet = null;
e.lbTotalRecharge = null;
e.LodeSTPopupGuid = null;
e.LodeSTPopupNumber = null;
e.LodeSTPopupHistorySession = null;
e.LodeSTPopupBetHistory = null;
e.lbDataBet = null;
e.isOpenSelectTime = !1;
e.showScale = 1.1;
e.startScale = .7;
return e;
}
o = e;
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.start = function() {
this.edBetMoney.string = "1";
};
e.prototype.onCheckMaxInputLength = function() {
switch (a.default.instance.RoomInfo.betGate) {
case c.default.GATEBET.DAU:
case c.default.GATEBET.DUOI:
this.edBetData.maxLength = 19;
break;

case c.default.GATEBET.BA_CANG:
case c.default.GATEBET.BAO_LO_3_SO:
this.edBetData.maxLength = 39;
break;

case c.default.GATEBET.DE_DAU:
case c.default.GATEBET.DE_DAC_BIET:
case c.default.GATEBET.BAO_LO_2_SO:
this.edBetData.maxLength = 29;
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
this.edBetData.maxLength = 11;
break;

case c.default.GATEBET.LO_TRUOT_XIEN_8:
this.edBetData.maxLength = 23;
break;

case c.default.GATEBET.LO_TRUOT_XIEN_10:
this.edBetData.maxLength = 29;
break;

case c.default.GATEBET.LO_XIEN_2:
this.edBetData.maxLength = 5;
break;

case c.default.GATEBET.LO_XIEN_3:
this.edBetData.maxLength = 8;
break;

case c.default.GATEBET.LO_XIEN_4:
this.edBetData.maxLength = 11;
break;

default:
this.edBetData.maxLength = 0;
}
};
e.prototype.actBetComfirm = function() {
var t = this.edBetMoney.string, e = 1e3 * parseInt(t), o = parseInt(this.lbTotalRecharge.string);
if (e <= 0 || a.default.instance.RoomInfo.betData.length < 1) a.default.instance.showMsg("Cửa đặt không hợp lệ!"); else if (o > a.default.instance.UserInfo.Balance) a.default.instance.showMsg("Số tiền không đủ, vui lòng nạp thêm!"); else {
var n = c.default.Utils.convertArrayToString(a.default.instance.RoomInfo.betData), i = new c.default.ModelsSignalr();
i.M = "Bet";
i.A = [ e, a.default.instance.RoomInfo.betGate, a.default.instance.RoomInfo.roomID, n ];
console.log(i);
l.default.getInstance().send(i);
}
};
e.prototype.onChangeEdBoxBetData = function(t, e) {
var o = e.string.replace(/-/g, "");
a.default.instance.RoomInfo.betData = new Array();
for (var n = new Array(), i = a.default.instance.RoomInfo.lenghtBetGate, r = function(t) {
if (o.slice(t, t + i).length == i && !(n.filter(function(e) {
return e == o.slice(t, t + i);
}).length > 0)) {
a.default.instance.RoomInfo.betData.push(o.slice(t, t + i));
n.push(o.slice(t, t + i));
}
}, s = 0; s < o.length; s += i) r(s);
this.edBetData.string = a.default.instance.RoomInfo.betData.join("-");
this.onGetTotalBetMoney();
};
e.prototype.onChangeEdBoxMoney = function() {
this.onGetTotalBetMoney();
};
e.prototype.onGetTotalBetMoney = function() {
if (this.edBetMoney.string.length > 0) {
var t = parseInt(this.edBetMoney.string), e = t * a.default.instance.RoomInfo.tiLeWin, o = 0;
switch (a.default.instance.RoomInfo.betGate) {
case c.default.GATEBET.DAU:
case c.default.GATEBET.DUOI:
case c.default.GATEBET.BA_CANG:
case c.default.GATEBET.DE_DAU:
case c.default.GATEBET.DE_DAC_BIET:
case c.default.GATEBET.BAO_LO_2_SO:
case c.default.GATEBET.BAO_LO_3_SO:
o = t * a.default.instance.RoomInfo.betData.length * a.default.instance.RoomInfo.thanhtoanLode;
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
case c.default.GATEBET.LO_TRUOT_XIEN_8:
case c.default.GATEBET.LO_TRUOT_XIEN_10:
case c.default.GATEBET.LO_XIEN_2:
case c.default.GATEBET.LO_XIEN_3:
case c.default.GATEBET.LO_XIEN_4:
o = t * a.default.instance.RoomInfo.thanhtoanLode;
}
this.lbWinInBet.string = s.default.formatNumber(e) + " K";
this.lbTotalRecharge.string = s.default.formatNumber(o);
} else {
this.lbWinInBet.string = "0 K";
this.lbTotalRecharge.string = "0";
}
};
e.prototype.actRandomNumber = function() {
this.edBetData.string = "";
a.default.instance.RoomInfo.betData = new Array();
var t = "";
switch (a.default.instance.RoomInfo.betGate) {
case c.default.GATEBET.DAU:
case c.default.GATEBET.DUOI:
t = c.default.Utils.generateRandomNumberString(1);
break;

case c.default.GATEBET.BA_CANG:
t = c.default.Utils.generateRandomNumberString(30);
break;

case c.default.GATEBET.DE_DAU:
case c.default.GATEBET.DE_DAC_BIET:
t = c.default.Utils.generateRandomNumberString(20);
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
t = c.default.Utils.generateRandomNumberString(8);
break;

case c.default.GATEBET.LO_TRUOT_XIEN_8:
t = c.default.Utils.generateRandomNumberString(16);
break;

case c.default.GATEBET.LO_TRUOT_XIEN_10:
t = c.default.Utils.generateRandomNumberString(20);
break;

case c.default.GATEBET.LO_XIEN_2:
t = c.default.Utils.generateRandomNumberString(4);
break;

case c.default.GATEBET.LO_XIEN_3:
t = c.default.Utils.generateRandomNumberString(6);
break;

case c.default.GATEBET.LO_XIEN_4:
t = c.default.Utils.generateRandomNumberString(8);
break;

case c.default.GATEBET.BAO_LO_2_SO:
t = c.default.Utils.generateRandomNumberString(20);
break;

case c.default.GATEBET.BAO_LO_3_SO:
t = c.default.Utils.generateRandomNumberString(30);
}
for (var e = a.default.instance.RoomInfo.lenghtBetGate, o = new Array(), n = function(n) {
if (t.slice(n, n + e).length == e && !(o.filter(function(o) {
return o == t.slice(n, n + e);
}).length > 0)) {
switch (a.default.instance.RoomInfo.betGate) {
case c.default.GATEBET.DAU:
case c.default.GATEBET.DUOI:
a.default.instance.RoomInfo.betData.length < 1 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.BA_CANG:
case c.default.GATEBET.DE_DAU:
case c.default.GATEBET.DE_DAC_BIET:
case c.default.GATEBET.BAO_LO_2_SO:
case c.default.GATEBET.BAO_LO_3_SO:
a.default.instance.RoomInfo.betData.length < 10 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
a.default.instance.RoomInfo.betData.length < 4 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_TRUOT_XIEN_8:
a.default.instance.RoomInfo.betData.length < 8 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_TRUOT_XIEN_10:
a.default.instance.RoomInfo.betData.length < 10 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_XIEN_2:
a.default.instance.RoomInfo.betData.length < 2 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_XIEN_3:
a.default.instance.RoomInfo.betData.length < 3 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
break;

case c.default.GATEBET.LO_XIEN_4:
a.default.instance.RoomInfo.betData.length < 4 && a.default.instance.RoomInfo.betData.push(t.slice(n, n + e));
}
o.push(t.slice(n, n + e));
}
}, i = 0; i < t.length; i += e) n(i);
this.edBetData.string = a.default.instance.RoomInfo.betData.join("-");
this.onGetTotalBetMoney();
};
e.prototype.onGetChooseNumberBetBytoBy = function(t) {
var e = a.default.instance.RoomInfo.lenghtBetGate;
3 == e && (t = t.toString().padStart(3, "0"));
this.edBetData.string = this.edBetData.string + t;
a.default.instance.RoomInfo.betData = new Array();
for (var o = this.edBetData.string.split("-").join(""), n = new Array(), i = function(t) {
if (o.slice(t, t + e).length == e && !(n.filter(function(n) {
return n == o.slice(t, t + e);
}).length > 0)) {
a.default.instance.RoomInfo.betData.push(o.slice(t, t + e));
n.push(o.slice(t, t + e));
}
}, r = 0; r < o.length; r += e) i(r);
this.edBetData.string = a.default.instance.RoomInfo.betData.join("-");
this.onGetTotalBetMoney();
};
e.prototype.onGetChooseNumberBet = function(t) {
this.edBetData.string = "";
a.default.instance.RoomInfo.betData = new Array();
for (var e = t.join(""), o = a.default.instance.RoomInfo.lenghtBetGate, n = new Array(), i = function(t) {
if (e.slice(t, t + o).length == o && !(n.filter(function(n) {
return n == e.slice(t, t + o);
}).length > 0)) {
a.default.instance.RoomInfo.betData.push(e.slice(t, t + o));
n.push(e.slice(t, t + o));
}
}, r = 0; r < e.length; r += o) i(r);
this.edBetData.string = a.default.instance.RoomInfo.betData.join("-");
this.onGetTotalBetMoney();
};
e.prototype.resetDataBet = function() {
this.edBetData.string = "";
a.default.instance.RoomInfo.betData = new Array();
this.onGetTotalBetMoney();
};
e.prototype.actClearInputNumberBet = function() {
this.edBetData.string = "";
a.default.instance.RoomInfo.betData = new Array();
this.onGetTotalBetMoney();
};
e.prototype.actClearInputMoneyBet = function() {
this.edBetMoney.string = "0";
this.onGetTotalBetMoney();
};
e.prototype.actInputBetValue = function(t, e) {
var o = parseInt(e);
if (o > 0) {
var n = this.edBetMoney.string;
null != n && null != n && "" != n || (n = "0");
var i = parseInt(n);
i += o;
this.edBetMoney.string = i.toString();
this.onGetTotalBetMoney();
}
};
e.prototype.SelectTab = function(t, e) {
e = parseInt(e);
for (var o = 0; o < this.btnGroup.length; o++) if (o == e) {
this.btnGroup[e].getComponent(cc.Sprite).spriteFrame = this.sprButton[0];
this.btnGroup[e].node.children[0].getComponent(cc.Label).font = this.fontBtnGroup[0];
this.btnGroup[e].node.children[0].getComponent(cc.Label).fontSize = 22;
this.btnGroup[e].node.children[0].setPosition(0, 36);
this.btnGroup[e].node.children[0].opacity = 255;
this.btnGroup[e].node.children[0].color = cc.color(255, 255, 255);
switch (e) {
case c.default.BETGROUP.BAO_LO:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.BAO_LO_2_SO;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_27;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
break;

case c.default.BETGROUP.LO_XIEN:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_XIEN_2;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
break;

case c.default.BETGROUP.LO_TRUOT:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_TRUOT_XIEN_4;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
break;

case c.default.BETGROUP.DANH_DE:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DE_DAU;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_4;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
break;

case c.default.BETGROUP.BA_CANG:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.BA_CANG;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.BA_SO;
break;

case c.default.BETGROUP.DAU_DUOI:
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DAU;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.MOT_SO;
}
this.nodeGateBet[e].active = !0;
this.ChooseBet(null, a.default.instance.RoomInfo.betGate);
} else {
this.btnGroup[o].getComponent(cc.Sprite).spriteFrame = this.sprButton[1];
this.btnGroup[o].node.children[0].getComponent(cc.Label).font = this.fontBtnGroup[1];
this.btnGroup[o].node.children[0].opacity = 195;
this.btnGroup[o].node.children[0].getComponent(cc.Label).fontSize = 30;
this.btnGroup[o].node.children[0].color = cc.color(255, 224, 61);
this.btnGroup[o].node.children[0].setPosition(0, 8);
this.nodeGateBet[o].active = !1;
}
};
e.prototype.ChooseBet = function(t, e) {
e = parseInt(e);
this.edBetData.string = "";
a.default.instance.RoomInfo.betData = new Array();
for (var o = 0; o < this.btnGateBet.length; o++) if (o == e) {
if (this.btnGateBet[e]) {
this.btnGateBet[e].getComponent(cc.Sprite).spriteFrame = null;
this.btnGateBet[e].node.children[0].active = !0;
}
switch (e) {
case c.default.GATEBET.BAO_LO_2_SO:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.BAO_LO_2_SO;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_27;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.BAO_LO_2_SO;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.HAI_SO;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>27</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>98</c>";
break;

case c.default.GATEBET.BAO_LO_3_SO:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.BAO_LO_3_SO;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_23;
a.default.instance.RoomInfo.lenghtBetGate = c.default.LENGTH_NUMBER_BET_GATE.BA_SO;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.BAO_LO_3_SO;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>23</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>900</c>";
break;

case c.default.GATEBET.LO_XIEN_2:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_XIEN_2;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_XIEN_2;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>17</c>";
break;

case c.default.GATEBET.LO_XIEN_3:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_XIEN_3;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_XIEN_3;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>65</c>";
break;

case c.default.GATEBET.LO_XIEN_4:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_XIEN_4;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_XIEN_4;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>250</c>";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_TRUOT_XIEN_4;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_TRUOT_XIEN_4;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>2,9</c>";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_8:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_TRUOT_XIEN_8;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_TRUOT_XIEN_8;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>9,1</c>";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_10:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.LO_TRUOT_XIEN_10;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.LO_TRUOT_XIEN_10;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>16,4</c>";
break;

case c.default.GATEBET.DE_DAU:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.DANH_DE;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_4;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DE_DAU;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>4</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>95</c>";
break;

case c.default.GATEBET.DE_DAC_BIET:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.DANH_DE;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DE_DAC_BIET;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>95</c>";
break;

case c.default.GATEBET.BA_CANG:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.BA_CANG;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.BA_CANG;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>900</c>";
break;

case c.default.GATEBET.DAU:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.DAU_DUOI;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DAU;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>9,5</c>";
break;

case c.default.GATEBET.DUOI:
a.default.instance.RoomInfo.tiLeWin = c.default.TI_LE_WIN.DAU_DUOI;
a.default.instance.RoomInfo.thanhtoanLode = c.default.THANH_TOAN_LO.LO_1;
a.default.instance.RoomInfo.betGate = c.default.GATEBET.DUOI;
this.rtxtDescriptionsGate.string = "<color=#FFFFFF>Cược </c><color=#FCCF55>1</c> lô, đặt <color=#FCCF55>1</color> ăn <color=#FCCF55>9,5</c>";
}
this.onCheckMaxInputLength();
this.onGetTotalBetMoney();
} else if (this.btnGateBet[o]) {
this.btnGateBet[o].getComponent(cc.Sprite).spriteFrame = this.sprButtonGate[1];
this.btnGateBet[o].node.children[0].active = !1;
}
};
e.prototype.actOpenGuid = function() {
var t = "", e = "";
switch (a.default.instance.RoomInfo.betGate) {
case c.default.GATEBET.DAU:
t = "Siêu tốc - Đầu đuôi - Đề đầu";
e = "👉 Đánh 1 chữ số ở hàng chục của giải Đặc biệt,\nthắng gấp 9,5 lần.\n👉VD: Đánh 1K cho số 7, tổng thanh toán: 1K. \nNếu giải ĐB là xxx7x thì Tiền thắng 1 x 9,5 = 9,5K";
break;

case c.default.GATEBET.DUOI:
t = "Siêu tốc - Đầu đuôi - Đề đuôi";
e = "👉 Đánh 1 chữ số ở hàng đơn vị của giải Đặc biệt,\nthắng gấp 9,5 lần.\n👉 VD: Đánh 1K cho số 7, tổng thanh toán: 1K. \nNếu giải ĐB là xxxx7 thì Tiền thắng 1 x 9,5 = 9,5K";
break;

case c.default.GATEBET.BA_CANG:
t = "Siêu tốc - 3 Càng - Lô giải Đặc biệt";
e = "👉 Đánh 3 chữ số cuối của giải Đặc biệt, thắng \ngấp 900 lần\n👉VD: đánh 1K cho số 879, tổng thanh toán: 1K.\nNếu giải Đặc biệt là xx879 thì Tiền thắng: 1K x 900 = 900k";
break;

case c.default.GATEBET.DE_DAU:
t = "Siêu tốc - Đánh đề - Đề đầu";
e = "👉 Đánh lô giải 7 (có 4 giải, thanh toán đủ), thắng\n gấp 95 lần.\n👉VD: đánh 1K cho số 79, tổng thanh toán:\n 1K x 4 = 4K. Nếu trong lô giải 7 có 1 số 79 thì tiền thắng:\n1K x 95 = 95K";
break;

case c.default.GATEBET.DE_DAC_BIET:
t = "Siêu tốc - Đánh Đề - Đề đặc biệt";
e = "👉 Đánh 2 chữ số cuối cùng trong giải đặc biệt,\nthắng gấp 95 lần.\n👉VD: Đánh 1K cho số 79, tổng thanh toán: 1K.\nNếu gỉải ĐB là xxx79 thì Tiền thắng 1K x 95 = 95K";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_4:
t = "Siêu tốc - Lô trượt - Trượt xiên 4";
e = "👉 Trượt xiên 4 của 2 chữ số cuối trong lô 27 giải.\nThắng gấp 2,9 lần.\n👉VD: đánh 1K cho trượt xiên 19, 39, 79, 99.\n Tổng thanh toán: 1K, Nếu trong lô không xuất\nhiện 19, 39, 79, 99 thì tiền thắng: 1K x 2,9 = 2,9K";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_8:
t = "Siêu tốc - Lô trượt - Trượt xiên 8";
e = "👉 Trượt xiên 8 của 2 chữ số cuối trong lô 27 giải.\nThắng gấp 9,1 lần.\n👉VD: đánh 1K cho trượt xiên 19, 39, 79, 99, 54, 65, 78,\n80. Tổng thanh toán: 1K, Nếu trong lô không xuất hiện 19, 39, 79, 99, 54, 65,\n78, 80 thì tiền thắng: 1K x 9,1 = 9,1K";
break;

case c.default.GATEBET.LO_TRUOT_XIEN_10:
t = "Siêu tốc - Lô trượt - Trượt xiên 10";
e = "👉 Trượt xiên 10 của 2 chữ số cuối trong lô 27 giải.\nThắng gấp 16,4 lần.\n👉 VD: Đánh 1K cho trượt xiên 09, 19, 29, 39, 49, 59,\n69, 79, 89, 99 tổng thanh toán: 1K Nếu trong lô\nkhông xuất hiện 09, 19, 29, 39, 49, 59, 69, 79, 89, 99\nthì Tiền thắng 1K x 16,4 = 16,4K";
break;

case c.default.GATEBET.LO_XIEN_2:
t = "Siêu tốc - Lô Xiên - Xiên 2";
e = "👉 Xiên 2 của 2 chữ số cuối cùng trong lô 27 giải,\nthắng gấp 17 lần.\n👉 VD: Đánh 1K cho xiên 11, 13, Tổng thanh toán: 1K.\nNếu trong lô có 2 chữ số cuối là 11 và 2 chữ số cuối\nlà 13 thì Tiền thắng: 1K x 17 = 17K.";
break;

case c.default.GATEBET.LO_XIEN_3:
t = "Siêu tốc - Lô Xiên - Xiên 3";
e = "👉 Xiên 2 của 2 chữ số cuối cùng trong lô 27 giải, thắng\ngấp 65 lần\n👉 VD: Đánh 1K cho xiên 11, 13, 15 Tổng thanh toán: 1K.\nNếu trong lô có 2 chữ số cuối là 11, 13 ,15 thì\nTiền thắng: 1K x 65 = 65K.";
break;

case c.default.GATEBET.LO_XIEN_4:
t = "Siêu tốc - Lô Xiên - Xiên 4";
e = "👉 Xiên 4 của 2 chữ số cuối cùng trong lô 27 giải, thắng\ngấp 250 lần\n👉 VD: Đánh 1K cho xiên 11, 13, 15 Tổng thanh toán: 1K.\nNếu trong lô có 2 chữ số cuối là 19, 39 ,79 , 99 thì\nTiền thắng: 1K x 250 = 250K.";
break;

case c.default.GATEBET.BAO_LO_2_SO:
t = "Siêu tốc - Bao lô - Lô 2 số";
e = "👉 Đánh 2 chữ số cuối trong lô 27 giải Thắng gấp 98\nlần, nếu số đó về N lần thì tính kết quả x N lần\n👉 VD: Bao lô 79 - 1 con 1K, tổng thanh toán : 1K x \n27 = 27K. Nếu trong lô có 2 chữ số cuối là 79 thì\nTiền thắng: 1K x 98 = 98K , nếu có N lần 2 chữ số\ncuối là 79 thì Tiền thắng là : 1K x 98 x N lần";
break;

case c.default.GATEBET.BAO_LO_3_SO:
t = "Siêu tốc - Bao lô - Lô 3 số";
e = "👉 Đánh 3 chữ số cuối trong lô 23 giải Thắng gấp\n900 lần, nếu số đó về N lần thì tính kết quả x N lần\n👉 VD: Bao lô 789 - 1 con 1K, tổng thanh toán : 1K x \n23 = 23K. Nếu trong lô có 3 chữ số cuối là 789 thì\nTiền thắng: 1K x 900 = 900K , nếu có N lần 3 chữ\nsố cuối là 789 thì Tiền thắng là : 1K x 900 x N lần";
}
this.LodeSTPopupGuid._show(t, e);
};
e.prototype.actShowPopupNumber = function() {
this.LodeSTPopupNumber._show();
};
var o;
e.instance = null;
r([ b([ cc.SpriteFrame ]) ], e.prototype, "sprButton", void 0);
r([ b([ cc.SpriteFrame ]) ], e.prototype, "sprButtonGate", void 0);
r([ b([ cc.Button ]) ], e.prototype, "btnGroup", void 0);
r([ b([ cc.Button ]) ], e.prototype, "btnGateBet", void 0);
r([ b([ cc.Node ]) ], e.prototype, "nodeGateBet", void 0);
r([ b([ cc.Node ]) ], e.prototype, "nodeConfirmBet", void 0);
r([ b(cc.RichText) ], e.prototype, "rtxtDescriptionsGate", void 0);
r([ b([ cc.Font ]) ], e.prototype, "fontBtnGroup", void 0);
r([ b(cc.EditBox) ], e.prototype, "edBetData", void 0);
r([ b(cc.EditBox) ], e.prototype, "edBetMoney", void 0);
r([ b(cc.Label) ], e.prototype, "lbWinInBet", void 0);
r([ b(cc.Label) ], e.prototype, "lbTotalRecharge", void 0);
r([ b(p.default) ], e.prototype, "LodeSTPopupGuid", void 0);
r([ b(d.default) ], e.prototype, "LodeSTPopupNumber", void 0);
r([ b(h.default) ], e.prototype, "LodeSTPopupHistorySession", void 0);
r([ b(u.default) ], e.prototype, "LodeSTPopupBetHistory", void 0);
return o = r([ g ], e);
}(cc.Component);
o.default = _;
cc._RF.pop();
}, {
"../../../framework/common/Utils": void 0,
"./LodeSTController": "LodeSTController",
"./LodeSTUtils": "LodeSTUtils",
"./network/LodeST.NetworkClient": "LodeST.NetworkClient",
"./popups/LodeSTPopupBetHistory": "LodeSTPopupBetHistory",
"./popups/LodeSTPopupGuid": "LodeSTPopupGuid",
"./popups/LodeSTPopupHistorySession": "LodeSTPopupHistorySession",
"./popups/LodeSTPopupNumber": "LodeSTPopupNumber"
} ],
Settings: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "25bd5NfZKhJvqHAZ/FRTlV+", "Settings");
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
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = t("./LodeSTController"), a = t("./LodeSTView"), c = cc._decorator, l = c.ccclass, u = c.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeDismiss = null;
e.nodeSelectTime = null;
e.isOpenMenu = !1;
e.isOpenSelectTime = !1;
e.showScale = 1.1;
e.isAnimated = !0;
e.panel_option = null;
e.startScale = .7;
e.musicBackground = null;
e.musicToggle = null;
e.isMusicBackground = !0;
return e;
}
e.prototype.start = function() {};
e.prototype.onEnable = function() {
this.nodeDismiss.active = this.isOpenMenu;
if (null != cc.sys.localStorage.getItem("@onAudioBg") && "true" == cc.sys.localStorage.getItem("@onAudioBg")) {
this.isMusicBackground = !0;
this.enableMusicBackground();
console.log("1");
} else {
this.isMusicBackground = !1;
this.enableMusicBackground();
console.log("2");
}
this.musicToggle.isChecked = this.isMusicBackground;
this.isOpenMenu = !1;
this.nodeDismiss.active = this.isOpenMenu;
};
e.prototype.selectMusic = function() {
this.isMusicBackground = !this.isMusicBackground;
cc.sys.localStorage.setItem("@onAudioBg", this.isMusicBackground);
this.musicToggle.isChecked = this.isMusicBackground;
this.enableMusicBackground();
};
e.prototype.enableMusicBackground = function() {
if (this.musicBackground && this.isMusicBackground) {
if (!this.musicBackground.isPlaying) {
this.musicBackground.volume = .3;
this.musicBackground.play();
}
} else this.musicBackground && this.musicBackground.stop();
};
e.prototype.onSelectMenu = function() {
if (0 == this.isOpenMenu) {
this.isOpenMenu = !0;
this.node.stopAllActions();
(e = cc.moveTo(.5, cc.v2(-555, 0))).easing(cc.easeQuadraticActionInOut());
var t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
} else {
this.isOpenMenu = !1;
this.node.stopAllActions();
var e;
(e = cc.moveTo(.5, cc.v2(-1200, 0))).easing(cc.easeQuadraticActionInOut());
t = cc.callFunc(this.onShowFinish.bind(this), null);
this.node.runAction(cc.sequence(e, t));
}
};
e.prototype.onShowFinish = function() {
this.nodeDismiss.active = this.isOpenMenu;
};
e.prototype.onShow = function() {
this.nodeSelectTime.active = !0;
};
e.prototype.backLobby = function() {
s.default.instance.gameExit();
};
e.prototype.actSelectBetHistory = function() {
this.onSelectMenu();
a.default.instance.LodeSTPopupBetHistory._show();
};
e.prototype.actSelectHisSession = function() {
this.onSelectMenu();
a.default.instance.LodeSTPopupHistorySession._show();
};
e.prototype.show = function() {
if (0 == this.isOpenSelectTime) {
this.isOpenSelectTime = !0;
this.nodeSelectTime.active = !0;
this.nodeSelectTime.stopAllActions();
this.nodeSelectTime.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, this.showScale), cc.fadeIn(.2)), cc.scaleTo(.1, .95)));
} else {
this.isOpenSelectTime = !1;
this.nodeSelectTime.active = !1;
this.nodeSelectTime.stopAllActions();
this.nodeSelectTime.runAction(cc.sequence(cc.scaleTo(.1, this.showScale), cc.spawn(cc.scaleTo(.2, this.startScale), cc.fadeOut(.2))));
}
};
e.prototype.showSelectTime = function() {};
e.prototype._onShowed = function() {
this.isAnimated = !0;
};
r([ u(cc.Node) ], e.prototype, "nodeDismiss", void 0);
r([ u(cc.Node) ], e.prototype, "nodeSelectTime", void 0);
r([ u(cc.AudioSource) ], e.prototype, "musicBackground", void 0);
r([ u(cc.Toggle) ], e.prototype, "musicToggle", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./LodeSTController": "LodeSTController",
"./LodeSTView": "LodeSTView"
} ]
}, {}, [ "ChangeTypeLoDe", "LodeSTConfig", "LodeSTController", "LodeSTPool", "LodeSTRoomID", "LodeSTUtils", "LodeSTView", "Settings", "LodeST.Http", "LodeST.Network.Service", "LodeST.Network", "LodeST.NetworkClient", "LodeSTChooseNumber", "LodeSTPopupBetHistory", "LodeSTPopupGuid", "LodeSTPopupHistorySession", "LodeSTPopupNumber", "LodeSTBet", "LodeSTHandleButtonThongKe", "LodeSTResultSessionView", "LodeSTThongKe", "LoDe.Chat.NetworkClient", "LoDe.Chat", "LoDe", "LoDeBetItem", "LoDeBetNumber", "LoDeCurBets", "LoDeHistory", "LoDeHistoryBet", "LoDeHistoryCell", "LoDeHistoryDialog", "LoDeMyBets", "LoDeNetwork", "LoDeRank", "LoDeRankCell", "LoDeSelectNumber", "LoDeTutorial", "LoDeUI", "LoDeVar", "LoDeSelectBoxItem", "LoDeSelectBoxUtil", "LoDeSelectItemData", "LoDeUIDialog2Button", "Lode.Const" ]);