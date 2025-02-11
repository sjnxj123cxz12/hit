window.__require = function t(e, o, i) {
function n(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(a, !0);
if (r) return r(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return n(e[c][1][t] || t);
}, u, u.exports, t, e, o, i);
}
return o[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
return n;
}({
HistoryLocThuCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "279d9s1qfRJ6Ko5PxInnyH9", "HistoryLocThuCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../base_slot/util/Util"), s = cc._decorator, a = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblSession = null;
e.lblTime = null;
e.lblBet = null;
e.lblWin = null;
e.mDataCell = null;
e.mPopupHistory = null;
return e;
}
e.prototype.init = function(t) {
this.mPopupHistory = t;
};
e.prototype.setDataCell = function(t, e) {
console.log(e);
this.mDataCell = e.ListBet[0];
this.nodeBg.active = t % 2 != 0;
var o = this.mDataCell.StartTime.split("T"), i = o[0].split("-"), n = o[1].split(":");
this.lblSession.string = this.mDataCell.GameSessionID;
this.lblTime.string = n[0] + ":" + n[1] + " " + i[2] + "-" + i[1] + "-" + i[0];
this.lblBet.string = c.default.formatNumber(this.mDataCell.BetValue);
this.lblWin.string = c.default.formatNumber(this.mDataCell.PrizeValue);
};
e.prototype.onTouchDetail = function() {
this.mPopupHistory && this.mPopupHistory.onTouchHistoryDetail(this.mDataCell);
};
r([ l(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ l(cc.Label) ], e.prototype, "lblSession", void 0);
r([ l(cc.Label) ], e.prototype, "lblTime", void 0);
r([ l(cc.Label) ], e.prototype, "lblBet", void 0);
r([ l(cc.Label) ], e.prototype, "lblWin", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0
} ],
LocThuBoxBetUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "901ef9hnV9LdJZetBAp8cdq", "LocThuBoxBetUI");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../base_slot/util/NumberUtil"), s = t("../../base_slot/util/Util"), a = cc._decorator, l = a.ccclass, u = a.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblBet = null;
e.lblTotalBet = null;
e.nodeMulti2 = null;
e.nodeMulti3 = null;
e.nodeWin = null;
e.Id = 0;
e.mUserBet = 0;
e.mUserOldBet = 0;
return e;
}
e.prototype.onLoad = function() {
this.setDefault();
};
e.prototype.setDefault = function() {
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !1;
this.nodeWin.active = !1;
this.lblTotalBet.getComponent(cc.Label).string = "";
this.mUserBet = 0;
this.lblBet.getComponent(cc.Label).string = "0";
this.lblBet.node.color = cc.Color.WHITE;
this.node.opacity = 255;
};
e.prototype.resetUserBet = function() {
this.mUserOldBet = this.mUserBet;
this.mUserBet = 0;
};
e.prototype.showWin = function() {
this.nodeWin.active = !0;
this.nodeWin.getComponent(cc.Animation).play().repeatCount;
};
e.prototype.showLose = function() {};
e.prototype.showMulti = function(t) {
if (2 == t) {
this.nodeMulti2.active = !0;
this.nodeMulti3.active = !1;
} else if (3 == t) {
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !0;
} else {
this.nodeMulti2.active = !1;
this.nodeMulti3.active = !1;
}
};
e.prototype.setUserBet = function(t) {
console.log(t);
this.mUserBet = t;
if (this.mUserBet > 0) {
this.lblBet.getComponent(cc.Label).string = s.default.formatNumber(this.mUserBet);
this.lblBet.node.color = cc.Color.YELLOW;
this.mUserOldBet = 0;
}
};
e.prototype.setValue = function(t) {
if (0 != t) {
"Đặt" == this.lblBet.getComponent(cc.Label).string && (this.lblBet.getComponent(cc.Label).string = s.default.formatNumber(0));
this.lblBet.getComponent(cc.Label).string = s.default.formatNumber(t);
} else {
this.lblBet.getComponent(cc.Label).string = s.default.formatNumber(0);
this.lblBet.node.color = cc.Color.WHITE;
}
};
e.prototype.setTotalBet = function(t) {
0 == t && (this.lblTotalBet.getComponent(cc.Label).string = "");
"" == this.lblTotalBet.getComponent(cc.Label).string && this.lblTotalBet.setValueNumber(0);
this.lblTotalBet.setNumber(t);
};
r([ u(c.default) ], e.prototype, "lblBet", void 0);
r([ u(c.default) ], e.prototype, "lblTotalBet", void 0);
r([ u(cc.Node) ], e.prototype, "nodeMulti2", void 0);
r([ u(cc.Node) ], e.prototype, "nodeMulti3", void 0);
r([ u(cc.Node) ], e.prototype, "nodeWin", void 0);
r([ u ], e.prototype, "Id", void 0);
return r([ l ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../base_slot/util/NumberUtil": void 0,
"../../base_slot/util/Util": void 0
} ],
LocThuConstant: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bf5fbUM51tH+LlcB3mlQU0R", "LocThuConstant");
var i = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = cc._decorator, r = n.ccclass, c = (n.property, function() {
function t() {}
t.api = {
hub: "baucuahub",
gate: fzgui.ConfigManager.instance.ConfigInfo.Gate,
negotiate: "https://baucua." + fzgui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
portal: "https://w-locthu.luxy.club/",
getTopWinners: "https://w-locthu.luxy.club/api/GetTopWinners?betType=1&topCount=10",
getAccountHistory: "https://w-locthu.luxy.club/api/GetAccountHistory?betType=1&topCount=100"
};
return i([ r ], t);
}());
o.default = c;
cc._RF.pop();
}, {} ],
LocThuHandler: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9efdcgBO8FGOLtZglxTfgvC", "LocThuHandler");
var i = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("./LocThuConstant"), r = cc._decorator, c = r.ccclass, s = (r.property, 
function() {
function t() {
this.mSignalr = null;
this.mListenerKey = "LocThuListener";
this.mLocThuMain = null;
this.isConnect = !1;
}
t.prototype.init = function(t) {
this.mLocThuMain = t;
};
t.prototype.connect = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new fzgui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, n.default.api.negotiate, n.default.api.hub, n.default.api.gate, !1);
fzgui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
t.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
};
t.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
t.prototype.onWebSocketCallback = function(t) {
if ("open" == t.s || "reconnect" == t.s) {
this.getCurrentRooms();
this.getCurrentSession();
} else {
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

case -48:
fzgui.UITextManager.showCenterNotification("Game đã bị khóa, vui lòng mở khóa để tiếp tục giao dịch");
break;

default:
fzgui.UITextManager.showCenterNotification("Đặt cửa thất bại");
}
if (!t.M) return;
var e = t.M;
if (e && e.length > 0) for (var o = 0; o < e.length; o++) {
var i = e[o].M;
if (e[o].A) var n = e[o].A[0];
switch (i) {
case "message":
break;

case "currentResult":
if (!n) break;
this.mLocThuMain.showResult(n);
break;

case "currentSession":
if (!n) break;
this.mLocThuMain.setSession(n);
break;

case "currentRoomsInfo":
this.mLocThuMain.setCurrentBetValue(n);
break;

case "betOfAccount":
this.mLocThuMain.showResultUserBet(n);
e[o].A[1] >= 0 && fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e[o].A[1]);
break;

case "currentAccount":
break;

case "resultOfAccount":
this.mLocThuMain.showResultAccount(n);
break;

case "history":
case "taiXiuAccountHistory":
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.mLocThuMain.prefPopupHistory, function(t) {
t.loadContent(n);
});
break;

case "taiXiuTopWinner":
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.mLocThuMain.prefPopupTop, function(t) {
t.loadContent(n);
});
break;

case "gameHistory":
this.mLocThuMain.setHistoryTable(n);
}
}
}
};
t.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
t.prototype.connectSuccess = function() {};
t.prototype.sendSignalR = function(t, e) {
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
t.prototype.getCurrentRooms = function() {
this.sendSignalR("GetCurrentRooms", []);
};
t.prototype.getCurrentSession = function() {
this.sendSignalR("GetCurrentSession", []);
};
t.prototype.getAccountResult = function(t) {
this.sendSignalR("GetAccountResult", [ t ]);
};
t.prototype.sendBet = function(t, e) {
this.sendSignalR("SetBet", [ t, e ]);
};
t.prototype.sendGetAccountHistory = function() {
this.sendSignalR("GetAccountHistory", []);
};
t.prototype.sendGetTopWinners = function() {
this.sendSignalR("GetTopWinner", [ 10 ]);
};
return i([ c ], t);
}());
o.default = s;
cc._RF.pop();
}, {
"./LocThuConstant": "LocThuConstant"
} ],
LocThuHistoryCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "72a46xB8NZK4o3CKfPaeal1", "LocThuHistoryCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arrSprIcon = [];
e.arrSfrIcon = [];
return e;
}
e.prototype.setData = function(t) {
this.arrSprIcon[0].spriteFrame = this.arrSfrIcon[t.Dice1 - 1];
this.arrSprIcon[1].spriteFrame = this.arrSfrIcon[t.Dice2 - 1];
this.arrSprIcon[2].spriteFrame = this.arrSfrIcon[t.Dice3 - 1];
};
r([ a(cc.Sprite) ], e.prototype, "arrSprIcon", void 0);
r([ a(cc.SpriteFrame) ], e.prototype, "arrSfrIcon", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LocThuHistoryTableUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a83baNJK0BE6pKrootRzAIK", "LocThuHistoryTableUI");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./LocThuHistoryCell"), s = cc._decorator, a = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scvHistory = null;
e.prefHistoryCell = null;
e.mArrCell = [];
e.mListData = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.onLoad = function() {
this.node.opacity = 0;
this.node.x = 200;
this.node.active = !1;
};
e.prototype.setContent = function(t) {
for (var e = 0; e < this.mArrCell.length; e++) this.mArrCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.showTable = function() {
this.node.active = !0;
cc.tween(this.node).to(.15, {
x: 615,
opacity: 255
}, {
easing: "sineOut"
}).start();
};
e.prototype.hideTable = function() {
var t = this;
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
x: 200,
opacity: 0
}, {
easing: "sineIn"
}).call(function() {
t.node.active = !1;
}).start();
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrCell[this.mCurrentIndex]) {
this.mArrCell[this.mCurrentIndex] = cc.instantiate(this.prefHistoryCell);
this.scvHistory.content.addChild(this.mArrCell[this.mCurrentIndex]);
}
this.mArrCell[this.mCurrentIndex].active = !0;
this.mArrCell[this.mCurrentIndex].getComponent(c.default).setData(this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvHistory", void 0);
r([ l(cc.Prefab) ], e.prototype, "prefHistoryCell", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"./LocThuHistoryCell": "LocThuHistoryCell"
} ],
LocThuKeyboardUI: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8aa4ftDziJKw4qoG5tXkqSD", "LocThuKeyboardUI");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSelectChip = [];
e.mLocThuMain = null;
e.mBoxBet = null;
e.mCurrentValue = 0;
e.mTimeCountDown = 0;
e.totalValueBet = 0;
return e;
}
e.prototype.init = function(t) {
this.mLocThuMain = t;
};
e.prototype.onLoad = function() {
this.mCurrentValue = 1e3;
this.nodeSelectChip[0].scale = .7;
this.nodeSelectChip[0].getChildByName("glow").active = !0;
this.nodeSelectChip[0].getChildByName("glow").getComponent(cc.Animation).play();
};
e.prototype.setDefault = function() {
this.totalValueBet = 0;
};
e.prototype.setBet = function(t) {
this.mBoxBet = t;
if (this.mCurrentValue > fzgui.UserManager.instance.mainUserInfo.Money) fzgui.UITextManager.showCenterNotification("Số dư không đủ"); else if (this.mCurrentValue > 0) {
this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, this.mCurrentValue);
this.setTotalBet(this.mCurrentValue);
}
};
e.prototype.showKeyboard = function(t) {
this.mBoxBet = t;
this.mCurrentValue = 0;
this.mBoxBet.setValue(this.mCurrentValue);
this.node.active = !0;
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
y: -255,
opacity: 255
}, {
easing: "sineOut"
}).start();
};
e.prototype.hideKeyboard = function(t) {
var e = this;
t || (this.mBoxBet && 0 == this.mBoxBet.mUserBet ? this.mBoxBet.lblBet.getComponent(cc.Label).string = "Đặt" : this.mBoxBet && this.mBoxBet.setUserBet(this.mBoxBet.mUserBet));
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).to(.15, {
y: 0,
opacity: 0
}, {
easing: "sineIn"
}).call(function() {
e.node.active = !1;
e.mBoxBet = null;
}).start();
};
e.prototype.setTotalBet = function(t) {
this.totalValueBet += t;
this.mBoxBet && this.mBoxBet.setValue(this.mCurrentValue);
};
e.prototype.onTouchSelectValueBet = function(t, e) {
this.nodeSelectChip.forEach(function(t) {
t.getChildByName("glow").active = !1;
t.scale = .6;
});
t.target.scale = .7;
t.target.getChildByName("glow").active = !0;
t.target.getChildByName("glow").getComponent(cc.Animation).play();
this.mCurrentValue = parseInt(e);
};
e.prototype.onTouchDel = function() {
this.mCurrentValue = parseInt(this.mCurrentValue / 10 + "");
this.mBoxBet && this.mBoxBet.setValue(this.mCurrentValue);
};
e.prototype.onTouchCancel = function() {
this.mBoxBet.mUserBet > 0 && this.mBoxBet.setUserBet(this.mBoxBet.mUserBet);
this.hideKeyboard(!1);
};
e.prototype.onTouchBetAgain = function() {
var t = !1;
if (this.mBoxBet.mUserOldBet > 0) {
this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, this.mBoxBet.mUserOldBet);
t = !0;
}
this.hideKeyboard(t);
};
e.prototype.onTouchX2 = function() {
var t = !1;
if (this.mBoxBet.mUserOldBet > 0) {
this.mLocThuMain.mLocThuHandler.sendBet(this.mBoxBet.Id, 2 * this.mBoxBet.mUserOldBet);
t = !0;
}
this.hideKeyboard(t);
};
r([ a(cc.Node) ], e.prototype, "nodeSelectChip", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
LocThuMain: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b0ceG1m81J9b078Alwgtz8", "LocThuMain");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./LocThuHandler"), s = t("./LocThuKeyboardUI"), a = t("./LocThuHistoryTableUI"), l = t("./LocThuBoxBetUI"), u = t("../../base_slot/util/Util"), p = cc._decorator, h = p.ccclass, f = p.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeMain = null;
e.nodeDish = null;
e.nodeBtnNanOn = null;
e.nodeBtnNanOff = null;
e.nodeBtnSoiCauOn = null;
e.nodeBtnSoiCauOff = null;
e.lblSession = null;
e.lblTimeCircle = null;
e.nodeTimeCount = null;
e.lblTimeCount = null;
e.arrLblWin = [];
e.arrSprDice = [];
e.arrSfrDice = [];
e.skeDice = null;
e.uiKeyboard = null;
e.uiHistoryTable = null;
e.arrUIBoxBet = [];
e.prefPopupHelp = null;
e.prefPopupTop = null;
e.prefPopupHistory = null;
e.mLocThuHandler = null;
e.mIsNan = !1;
e.mGameStatus = -1;
e.mTimer = null;
e.mTimeCountDown = 0;
e.mSessionId = 0;
return e;
}
e.prototype.onLoad = function() {
this.uiKeyboard.init(this);
this.setDefault();
this.mLocThuHandler = new c.default();
this.mLocThuHandler.init(this);
this.mLocThuHandler.connect();
};
e.prototype.onDestroy = function() {
this.mTimer && clearInterval(this.mTimer);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.LOGIN_SUCCESS, this.mLocThuHandler.connect, this);
this.mLocThuHandler.closeWS();
fzgui.ZLog.log("=====================CLOSE WS NOTI===============================");
};
e.prototype.setDefault = function() {
this.nodeBtnSoiCauOff.active = !1;
this.nodeBtnSoiCauOn.active = !0;
this.mIsNan = !1;
this.nodeBtnNanOn.active = !0;
this.nodeBtnNanOff.active = !1;
for (var t = 0; t < this.arrUIBoxBet.length; t++) this.arrUIBoxBet[t].setDefault();
this.lblSession.string = "";
this.lblTimeCircle.string = "";
this.lblTimeCount.string = "";
this.nodeTimeCount.active = !1;
this.nodeDish.active = !1;
this.skeDice.node.active = !1;
for (t = 0; t < this.arrSprDice.length; t++) this.arrSprDice[t].node.active = !1;
for (t = 0; t < this.arrLblWin.length; t++) this.arrLblWin[t].node.active = !1;
};
e.prototype.setCurrentBetValue = function(t) {
for (var e = 0; e < t.length; e++) 0 != t[e].GateID && this.arrUIBoxBet[t[e].GateID - 1].setTotalBet(t[e].TotalBetValue);
};
e.prototype.setSession = function(t) {
this.mSessionId = t.GameSessionID;
this.lblSession.string = "#" + t.GameSessionID;
this.mGameStatus = t.GameStatus;
if (1 == this.mGameStatus) {
for (var e = 0; e < this.arrUIBoxBet.length; e++) {
this.arrUIBoxBet[e].resetUserBet();
this.arrUIBoxBet[e].setDefault();
}
for (e = 0; e < this.arrSprDice.length; e++) this.arrSprDice[e].node.active = !1;
for (e = 0; e < this.arrLblWin.length; e++) this.arrLblWin[e].node.active = !1;
this.uiKeyboard.setDefault();
this.skeDice.node.active = !1;
}
1 == this.mGameStatus && t.RemainBetting > 0 && this.updateTimeCircle(t.RemainBetting);
2 == this.mGameStatus && t.RemainWaiting > 0 && this.updateTimeCountDown(t.RemainWaiting);
};
e.prototype.setHistoryTable = function(t) {
this.uiHistoryTable.setContent(t);
};
e.prototype.showResultAccount = function(t) {
for (var e = 0, o = 0; o < t.length; o++) {
e += t[o].PrizeValue + t[o].RefundValue;
if (t[o].PrizeValue + t[o].RefundValue > 0) {
this.arrLblWin[t[o].GateID - 1].string = "+" + u.default.formatNumber(t[o].PrizeValue + t[o].RefundValue);
this.arrLblWin[t[o].GateID - 1].node.active = !0;
this.arrLblWin[t[o].GateID - 1].node.y = -55;
this.arrLblWin[t[o].GateID - 1].node.scale = .3;
cc.tween(this.arrLblWin[t[o].GateID - 1].node).to(.25, {
y: 0,
scale: 1
}, {
easing: "sineOut"
}).start();
}
}
e > 0 && fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.showResultUserBet = function(t) {
for (var e = 0; e < t.length; e++) this.arrUIBoxBet[t[e].GateID - 1].setUserBet(t[e].BetValue);
};
e.prototype.showResult = function(t) {
var e = this;
this.arrSprDice[0].spriteFrame = this.arrSfrDice[t.Dice1 - 1];
this.arrSprDice[1].spriteFrame = this.arrSfrDice[t.Dice2 - 1];
this.arrSprDice[2].spriteFrame = this.arrSfrDice[t.Dice3 - 1];
this.skeDice.node.active = !0;
this.skeDice.play();
this.skeDice.once("finished", function() {
e.nodeTimeCount.active = !0;
e.skeDice.node.active = !1;
for (var o = 0; o < e.arrSprDice.length; o++) e.arrSprDice[o].node.active = !0;
if (e.mIsNan) {
e.nodeDish.active = !0;
e.nodeDish.x = 0;
e.nodeDish.y = 0;
setTimeout(function() {
e.nodeDish.active = !1;
for (var o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showLose();
e.arrUIBoxBet[t.Dice1 - 1].showWin();
e.arrUIBoxBet[t.Dice2 - 1].showWin();
e.arrUIBoxBet[t.Dice3 - 1].showWin();
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showMulti(t["Multi" + (o + 1)]);
}, 1e4);
} else {
e.nodeDish.active = !1;
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showLose();
e.arrUIBoxBet[t.Dice1 - 1].showWin();
e.arrUIBoxBet[t.Dice2 - 1].showWin();
e.arrUIBoxBet[t.Dice3 - 1].showWin();
for (o = 0; o < e.arrUIBoxBet.length; o++) e.arrUIBoxBet[o].showMulti(t["Multi" + (o + 1)]);
}
});
};
e.prototype.parseTime = function(t) {
var e = t - 60 * Math.floor(t / 60);
return e < 10 ? "0" + e : e;
};
e.prototype.updateTimeCircle = function(t) {
var e = this;
this.mTimeCountDown = t;
this.lblTimeCircle.string = this.parseTime(t) + "";
this.nodeTimeCount.active = !1;
this.mTimer && clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e.mTimeCountDown--;
e.lblTimeCircle.string = e.parseTime(e.mTimeCountDown) + "";
if (e.mTimeCountDown <= 0) {
clearInterval(e.mTimer);
e.lblTimeCircle.string = "";
}
}, 1e3);
};
e.prototype.updateTimeCountDown = function(t) {
var e = this;
this.mTimeCountDown = t;
this.lblTimeCircle.string = "";
this.lblTimeCount.string = this.parseTime(this.mTimeCountDown) + "";
t < 25 && (this.nodeTimeCount.active = !0);
this.mTimer && clearInterval(this.mTimer);
this.mTimer = setInterval(function() {
e.mTimeCountDown--;
e.lblTimeCount.string = e.parseTime(e.mTimeCountDown) + "";
5 == e.mTimeCountDown && e.mLocThuHandler.getAccountResult(e.mSessionId);
if (e.mTimeCountDown <= 0) {
clearInterval(e.mTimer);
e.nodeTimeCount.active = !1;
}
}, 1e3);
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
case "minimize":
this.onTouchClose();
break;

case "top":
this.onTouchTop();
break;

case "help":
this.onTouchHelp();
break;

case "history":
this.onTouchHistory();
break;

case "select_bet":
this.onTouchSelectBet(t.target);
break;

case "nan_on":
this.onTouchNanOn();
break;

case "nan_off":
this.onTouchNanOff();
break;

case "soicau_on":
this.onTouchSoiCauOn();
break;

case "soicau_off":
this.onTouchSoiCauOff();
}
};
e.prototype.onTouchClose = function() {
this.mLocThuHandler.closeWS();
this.node.destroy();
clearInterval(this.mTimer);
};
e.prototype.onTouchMinimize = function() {
this.node.scale = 0;
};
e.prototype.onTouchTop = function() {
this.mLocThuHandler.sendGetTopWinners();
};
e.prototype.onTouchHelp = function() {
fzgui.UIPopupManager.instance.showPopupFromPrefab(this.prefPopupHelp);
};
e.prototype.onTouchHistory = function() {
this.mLocThuHandler.sendGetAccountHistory();
};
e.prototype.onTouchSelectBet = function(t) {
1 == this.mGameStatus && this.uiKeyboard.setBet(t.getComponent(l.default));
};
e.prototype.onTouchNanOn = function() {
this.nodeBtnNanOn.active = !1;
this.nodeBtnNanOff.active = !0;
this.mIsNan = !0;
};
e.prototype.onTouchNanOff = function() {
this.nodeBtnNanOn.active = !0;
this.nodeBtnNanOff.active = !1;
this.mIsNan = !1;
};
e.prototype.onTouchSoiCauOn = function() {
this.nodeBtnSoiCauOn.active = !1;
this.nodeBtnSoiCauOff.active = !0;
this.uiHistoryTable.showTable();
};
e.prototype.onTouchSoiCauOff = function() {
this.nodeBtnSoiCauOn.active = !0;
this.nodeBtnSoiCauOff.active = !1;
this.uiHistoryTable.hideTable();
};
r([ f(cc.Node) ], e.prototype, "nodeMain", void 0);
r([ f(cc.Node) ], e.prototype, "nodeDish", void 0);
r([ f(cc.Node) ], e.prototype, "nodeBtnNanOn", void 0);
r([ f(cc.Node) ], e.prototype, "nodeBtnNanOff", void 0);
r([ f(cc.Node) ], e.prototype, "nodeBtnSoiCauOn", void 0);
r([ f(cc.Node) ], e.prototype, "nodeBtnSoiCauOff", void 0);
r([ f(cc.Label) ], e.prototype, "lblSession", void 0);
r([ f(cc.Label) ], e.prototype, "lblTimeCircle", void 0);
r([ f(cc.Node) ], e.prototype, "nodeTimeCount", void 0);
r([ f(cc.Label) ], e.prototype, "lblTimeCount", void 0);
r([ f(cc.Label) ], e.prototype, "arrLblWin", void 0);
r([ f(cc.Sprite) ], e.prototype, "arrSprDice", void 0);
r([ f(cc.SpriteFrame) ], e.prototype, "arrSfrDice", void 0);
r([ f(cc.Animation) ], e.prototype, "skeDice", void 0);
r([ f(s.default) ], e.prototype, "uiKeyboard", void 0);
r([ f(a.default) ], e.prototype, "uiHistoryTable", void 0);
r([ f(l.default) ], e.prototype, "arrUIBoxBet", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefPopupHelp", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefPopupTop", void 0);
r([ f(cc.Prefab) ], e.prototype, "prefPopupHistory", void 0);
return r([ h ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../base_slot/util/Util": void 0,
"./LocThuBoxBetUI": "LocThuBoxBetUI",
"./LocThuHandler": "LocThuHandler",
"./LocThuHistoryTableUI": "LocThuHistoryTableUI",
"./LocThuKeyboardUI": "LocThuKeyboardUI"
} ],
PopupHelpLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "511e7w9P+tAl5yiqgWQ2Cb0", "PopupHelpLocThu");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
}
};
r([ a(cc.Label) ], e.prototype, "label", void 0);
return r([ s ], e);
}(fzgui.UIPopup);
o.default = l;
cc._RF.pop();
}, {} ],
PopupHistoryLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "56155ERQ5xGKZMO9Jo53RmP", "PopupHistoryLocThu");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./HistoryLocThuCell"), s = t("../LocThuBoxBetUI"), a = t("../../../base_slot/util/Util"), l = cc._decorator, u = l.ccclass, p = l.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeListHistory = null;
e.nodeHistoryDetail = null;
e.scvHistory = null;
e.prefHistoryCell = null;
e.arrSprDice = [];
e.arrSfrDice = [];
e.arrBoxBetUI = [];
e.lblSession = null;
e.lblTotalBet = null;
e.lblTotalWin = null;
e.mListData = [];
e.mArrHistoryCell = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.onLoad = function() {
this.nodeListHistory.active = !0;
this.nodeHistoryDetail.active = !1;
for (var t = 0; t < this.arrBoxBetUI.length; t++) this.arrBoxBetUI[t].setDefault();
};
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrHistoryCell.length; e++) this.mArrHistoryCell[e].active = !1;
if (!(t.length <= 0)) {
var o = [], i = {
GameSessionID: t[0].GameSessionID,
CreatedDate: t[0].CreatedDate,
BetValue: t[0].BetValue,
PrizeValue: t[0].PrizeValue,
ListBet: []
};
i.ListBet.push(t[0]);
o.push(i);
for (e = 1; e < t.length; e++) if (i.GameSessionID == t[e].GameSessionID) {
i.ListBet.push(t[e]);
i.BetValue += t[e].BetValue;
i.PrizeValue += t[e].PrizeValue;
} else {
(i = {
GameSessionID: t[e].GameSessionID,
CreatedDate: t[e].CreatedDate,
BetValue: t[e].BetValue,
PrizeValue: t[e].PrizeValue,
ListBet: []
}).ListBet.push(t[e]);
o.push(i);
}
this.mListData = o;
this.mCurrentIndex = 0;
}
};
e.prototype.onTouchAllBtn = function(t, e) {
switch (e) {
case "close":
this.hide();
break;

case "back":
this.onTouchBack();
}
};
e.prototype.onTouchBack = function() {
this.nodeListHistory.active = !0;
this.nodeHistoryDetail.active = !1;
};
e.prototype.onTouchHistoryDetail = function(t) {
console.log(t);
this.nodeListHistory.active = !1;
this.nodeHistoryDetail.active = !0;
this.lblSession.string = "#" + t.GameSessionID;
for (var e = 0; e < this.arrBoxBetUI.length; e++) {
this.arrBoxBetUI[e].setDefault();
this.arrBoxBetUI[e].showLose();
}
this.lblTotalBet.string = a.default.formatNumber(t.BetValue);
this.lblTotalWin.string = a.default.formatNumber(t.PrizeValue);
for (e = 0; e < this.arrSprDice.length; e++) {
this.arrSprDice[e].spriteFrame = this.arrSfrDice[t["Dice" + (e + 1)] - 1];
this.arrBoxBetUI[t["Dice" + (e + 1)] - 1].showWin();
}
for (e = 0; e < t.length; e++) this.arrBoxBetUI[t[e].LocationID - 1].setUserBet(this.arrBoxBetUI[t[e].LocationID - 1].mUserBet + t[e].BetValue);
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrHistoryCell[this.mCurrentIndex]) {
this.mArrHistoryCell[this.mCurrentIndex] = cc.instantiate(this.prefHistoryCell);
this.scvHistory.content.addChild(this.mArrHistoryCell[this.mCurrentIndex]);
}
this.mArrHistoryCell[this.mCurrentIndex].active = !0;
this.mArrHistoryCell[this.mCurrentIndex].getComponent(c.default).init(this);
this.mArrHistoryCell[this.mCurrentIndex].getComponent(c.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ p(cc.Node) ], e.prototype, "nodeListHistory", void 0);
r([ p(cc.Node) ], e.prototype, "nodeHistoryDetail", void 0);
r([ p(cc.ScrollView) ], e.prototype, "scvHistory", void 0);
r([ p(cc.Prefab) ], e.prototype, "prefHistoryCell", void 0);
r([ p(cc.Sprite) ], e.prototype, "arrSprDice", void 0);
r([ p(cc.SpriteFrame) ], e.prototype, "arrSfrDice", void 0);
r([ p(s.default) ], e.prototype, "arrBoxBetUI", void 0);
r([ p(cc.Label) ], e.prototype, "lblSession", void 0);
r([ p(cc.Label) ], e.prototype, "lblTotalBet", void 0);
r([ p(cc.Label) ], e.prototype, "lblTotalWin", void 0);
return r([ u ], e);
}(fzgui.UIPopup);
o.default = h;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0,
"../LocThuBoxBetUI": "LocThuBoxBetUI",
"./HistoryLocThuCell": "HistoryLocThuCell"
} ],
PopupTopLocThu: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f106d1Y3yNDmLqU4L3U27oz", "PopupTopLocThu");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("./TopLocThuCell"), s = cc._decorator, a = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scvTop = null;
e.preTopCell = null;
e.mListData = [];
e.mArrTopCell = [];
e.mCurrentIndex = 0;
return e;
}
e.prototype.loadContent = function(t) {
for (var e = 0; e < this.mArrTopCell.length; e++) this.mArrTopCell[e].active = !1;
this.mListData = t;
this.mCurrentIndex = 0;
};
e.prototype.onTouchAllBtn = function(e, o) {
switch (o) {
case "close":
t.prototype.hide.call(this);
}
};
e.prototype.update = function() {
if (!(this.mListData.length <= 0 || this.mCurrentIndex >= this.mListData.length)) {
if (!this.mArrTopCell[this.mCurrentIndex]) {
this.mArrTopCell[this.mCurrentIndex] = cc.instantiate(this.preTopCell);
this.scvTop.content.addChild(this.mArrTopCell[this.mCurrentIndex]);
}
this.mArrTopCell[this.mCurrentIndex].active = !0;
this.mArrTopCell[this.mCurrentIndex].getComponent(c.default).setDataCell(this.mCurrentIndex, this.mListData[this.mCurrentIndex]);
this.mCurrentIndex++;
}
};
r([ l(cc.ScrollView) ], e.prototype, "scvTop", void 0);
r([ l(cc.Prefab) ], e.prototype, "preTopCell", void 0);
return r([ a ], e);
}(fzgui.UIPopup);
o.default = u;
cc._RF.pop();
}, {
"./TopLocThuCell": "TopLocThuCell"
} ],
ScrollControl: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa8d50W3yRNtLoFV/6iA1qU", "ScrollControl");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrollView = null;
e.scrollStep = 300;
e.contentWidth = 0;
e.nextButton = null;
e.previousButton = null;
return e;
}
e.prototype.onNextClicked = function() {
var t = this.scrollView.getScrollOffset(), e = t.x + this.scrollStep;
e = Math.min(e, this.contentWidth - this.scrollView.node.width);
this.scrollView.scrollToOffset(cc.v2(e, t.y), .3);
this.updateButtonState(e);
};
e.prototype.onPreviousClicked = function() {
var t = this.scrollView.getScrollOffset(), e = t.x - this.scrollStep;
e = Math.max(e, 0);
this.scrollView.scrollToOffset(cc.v2(e, t.y), .3);
this.updateButtonState(e);
};
e.prototype.updateButtonState = function(t) {
this.previousButton && (this.previousButton.interactable = t > 0);
this.nextButton && (this.nextButton.interactable = t < this.contentWidth - this.scrollView.node.width);
};
e.prototype.onLoad = function() {
var t = this.scrollView.getScrollOffset();
this.updateButtonState(t.x);
};
r([ a(cc.ScrollView) ], e.prototype, "scrollView", void 0);
r([ a ], e.prototype, "scrollStep", void 0);
r([ a ], e.prototype, "contentWidth", void 0);
r([ a(cc.Button) ], e.prototype, "nextButton", void 0);
r([ a(cc.Button) ], e.prototype, "previousButton", void 0);
return r([ s ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
TopLocThuCell: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f12f0lYfkBFr74gQiugLuTW", "TopLocThuCell");
var i, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, i) {
var n, r = arguments.length, c = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (r < 3 ? n(c) : r > 3 ? n(e, o, c) : n(e, o)) || c);
return r > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = t("../../../base_slot/util/Util"), s = cc._decorator, a = s.ccclass, l = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeBg = null;
e.lblStt = null;
e.lblNickName = null;
e.lblPrize = null;
return e;
}
e.prototype.setDataCell = function(t, e) {
this.nodeBg.active = t % 2 != 0;
this.lblStt.string = t + 1;
this.lblNickName.string = e.UserName;
this.lblPrize.string = c.default.formatNumber(e.PrizeValue);
};
r([ l(cc.Node) ], e.prototype, "nodeBg", void 0);
r([ l(cc.Label) ], e.prototype, "lblStt", void 0);
r([ l(cc.Label) ], e.prototype, "lblNickName", void 0);
r([ l(cc.Label) ], e.prototype, "lblPrize", void 0);
return r([ a ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../base_slot/util/Util": void 0
} ]
}, {}, [ "LocThuBoxBetUI", "LocThuConstant", "LocThuHandler", "LocThuHistoryCell", "LocThuHistoryTableUI", "LocThuKeyboardUI", "LocThuMain", "ScrollControl", "HistoryLocThuCell", "PopupHelpLocThu", "PopupHistoryLocThu", "PopupTopLocThu", "TopLocThuCell" ]);