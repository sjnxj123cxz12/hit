window.__require = function t(e, n, o) {
function i(a, c) {
if (!n[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(s, !0);
if (r) return r(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var l = n[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return i(e[a][1][t] || t);
}, l, l.exports, t, e, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
AutoDestroyNode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "354dchEtBhLF5OfR0cKfwUO", "AutoDestroyNode");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageView = null;
return e;
}
n = e;
e.getInstance = function() {
this._instance || (this._instance = new n());
return this._instance;
};
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.checkAndCleanContent = function() {
if (this.pageView && this.pageView.content) {
var t = this.pageView.content;
t.children.forEach(function(t) {
if (!t.getComponent(cc.Sprite)) {
cc.warn('Node "' + t.name + '" không có Sprite hoặc Sprite bị null. Đang xóa node.');
t.destroy();
}
});
t.getComponent(cc.Layout) && t.getComponent(cc.Layout).updateLayout();
this.pageView.setCurrentPageIndex(0);
} else cc.warn("PageView hoặc Content không được thiết lập!");
};
var n;
e._instance = null;
r([ s(cc.PageView) ], e.prototype, "pageView", void 0);
return n = r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
AutoScroll: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "781548XAiZBNp1chTLEyRwr", "AutoScroll");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pageView = null;
e.autoNextDelay = 2;
e.direction = 1;
return e;
}
e.prototype.onLoad = function() {
this.schedule(this.autoNextPage, this.autoNextDelay);
};
e.prototype.autoNextPage = function() {
var t = this.pageView.getCurrentPageIndex(), e = this.pageView.getPages().length;
if ((t += this.direction) >= e) {
t = e - 1;
this.direction = -1;
} else if (t < 0) {
t = 0;
this.direction = 1;
}
this.pageView.scrollToPage(t, .5);
};
r([ s(cc.PageView) ], e.prototype, "pageView", void 0);
r([ s ], e.prototype, "autoNextDelay", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
BannerPromotion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6e4091lTYFCTpNS41XbeME3", "BannerPromotion");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(lngui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
BetTX: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1cdb7vo8odKYLfIyfp3s/FI", "BetTX");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = a.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
e.NodeHistory = null;
e.sprdot = [];
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e, n = this, o = a.LobbyConst.history;
a.LobbyConst.slotByKeys.forEach(function(e, o) {
o != n.gameID || (t = e);
});
if (this.NodeHistory) switch (this.gameID) {
case 89:
e = o.TAIXIU.split(",");
this.NodeHistory.children.forEach(function(t, o) {
t.getComponent(cc.Sprite).spriteFrame = n.sprdot[e[o]];
});
break;

case 90:
e = o.TAIXIU_MD5.split(",");
this.NodeHistory.children.forEach(function(t, o) {
t.getComponent(cc.Sprite).spriteFrame = n.sprdot[e[o]];
});
break;

case 521:
e = o.TAIXIU_LIVE.split(",");
this.NodeHistory.children.forEach(function(t, o) {
t.getComponent(cc.Sprite).spriteFrame = n.sprdot[e[o]];
});
break;

case 333:
e = o.XOCDIA.split(",");
this.NodeHistory.children.forEach(function(t, o) {
t.getComponent(cc.Sprite).spriteFrame = n.sprdot[e[o]];
});
break;

case 522:
e = o.XOCDIA_LIVE.split(",");
this.NodeHistory.children.forEach(function(t, o) {
t.getComponent(cc.Sprite).spriteFrame = n.sprdot[e[o]];
});
}
if (t) {
if (1236 != this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetValue1, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetValue2, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund, 2);
}
if (1236 == this.gameID) {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetXiu, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetTai, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund, 2);
}
}
};
r([ l({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot3", void 0);
r([ l(cc.Node) ], e.prototype, "NodeHistory", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "sprdot", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
BundleMiniGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d7ae8W+pkhKN71C0SrSO2su", "BundleMiniGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = a.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
var e = this;
if (!cc.Canvas.instance.node.getChildByName(this.prefabMainNameURL)) {
lngui.UIWindowManager.instance.showWindowFromPrefab(t, function(t) {
t.node.name = e.prefabMainNameURL;
});
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS);
}
};
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
BundleSceneGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "19083XsaEZMx7wDy6oqmR1j", "BundleSceneGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bundleName = "";
e.prefabMainNameURL = "";
e.prgLoadGame = null;
e.lbMsg = null;
e.isClicked = !0;
e.gameID = a.GAME_IDS.NONE;
e.isTest = !1;
e.numOfClick = 10;
return e;
}
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
};
e.prototype.onFuturePrefabLoadDone = function(t) {
lngui.UIScreenManager.instance.pushScreen(t);
};
r([ p(cc.String) ], e.prototype, "bundleName", void 0);
r([ p(cc.String) ], e.prototype, "prefabMainNameURL", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "prgLoadGame", void 0);
r([ p(cc.Label) ], e.prototype, "lbMsg", void 0);
r([ p(cc.Boolean) ], e.prototype, "isClicked", void 0);
r([ p({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTest", void 0);
r([ p({
visible: function() {
return this.isTest;
}
}) ], e.prototype, "numOfClick", void 0);
return r([ s ], e);
}(lngui.BundleDownLoad);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
CapchaZ: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ce052fYL1H45r8huNtFn/M", "CapchaZ");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = {
Login: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Captcha/GetV2",
Telco: ""
}, c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.capcha = null;
e.txtguide = null;
e.isTelco = !1;
e.capchaId = "";
e.mUrl = "";
return e;
}
e.prototype.start = function() {
this.refreshCapcha();
};
e.prototype.refreshCapcha = function() {
var t = a.Login;
this.isTelco && (t = a.Telco);
this.sendGetCaptcha(t);
};
e.prototype.getCapChaId = function() {
return this.capchaId;
};
e.prototype.resetCapcha = function() {
this.capcha.node.active = !1;
};
e.prototype.sendGetCaptcha = function(t) {
this.mUrl = t;
var e = this;
lngui.Https.get(t, function(t) {
var n = t;
e.capchaId = n[0];
var o = n[1];
o = o.replace(/\r\n/g, "");
e.loadImgBinary(o);
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 150;
n.height = 60;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.capcha.node.active = !0;
o.capcha.spriteFrame = e;
};
n.src = e;
};
r([ p(cc.Sprite) ], e.prototype, "capcha", void 0);
r([ p(cc.Label) ], e.prototype, "txtguide", void 0);
r([ p(cc.Boolean) ], e.prototype, "isTelco", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {} ],
ChangeAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b20b1ey4YhFErf8O5cu9ldM", "ChangeAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = t("./SetAvatar"), s = t("./ListAvatar"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.BtnSelectAvt = null;
e.SpritetAvatar = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.BtnSelectAvt.children.forEach(function(e, n) {
var o = e.getChildByName("Avatar");
o && (o.getComponent(cc.Sprite).spriteFrame = t.SpritetAvatar.ListSpriteAvatar[n]);
});
};
e.prototype.ClickChangeAvatar = function(t, e) {
lngui.UIWaitingLayout.showWaiting();
var n = "" + a.LobbyConst.API.URL + a.LobbyConst.API.UPDATE_AVATAR + "?AvatarId=" + e + "&token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(n, function(t) {
if (t) {
lngui.UIWaitingLayout.hideWaiting();
lngui.UserManager.instance.mainUserInfo.Avatar = parseFloat(e);
c.default.instance.SetAvatar();
}
});
};
r([ u(cc.Node) ], e.prototype, "BtnSelectAvt", void 0);
r([ u(s.default) ], e.prototype, "SpritetAvatar", void 0);
return r([ l ], e);
}(lngui.UIPopup);
n.default = h;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"./ListAvatar": "ListAvatar",
"./SetAvatar": "SetAvatar"
} ],
CheckAndSaveToken: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a19da4eEtlLk4up52r0rbOs", "CheckAndSaveToken");
Object.defineProperty(n, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.saveData = function(t) {
var e = {
value: t,
timestamp: Date.now()
};
localStorage.setItem("myGameData", JSON.stringify(e));
};
t.loadData = function() {
var t = localStorage.getItem("myGameData");
if (t) try {
var e = JSON.parse(t);
Date.now(), e.timestamp;
return e.value;
} catch (t) {}
return null;
};
t.clearData = function() {
localStorage.removeItem("myGameData");
};
return t;
}();
n.default = o;
cc._RF.pop();
}, {} ],
CheckAutoLogin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "594a0qFuU9EEo9aYvAWMaCg", "CheckAutoLogin");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./CheckAndSaveToken"), c = t("../../LobbyConst"), s = t("../MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PrefabLogin = null;
e.token = null;
return e;
}
e.prototype.onLoad = function() {
this.token = a.default.loadData();
null !== this.token && this.onAutoLogin();
};
e.prototype.onAutoLogin = function() {
var t = this, e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/info?access_token=" + this.token;
lngui.Https.get(e, function(e) {
e ? t.onLoginSuccess(e, function() {
s.MVUtils.get(c.LobbyConst.API.URL + c.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(t, e) {
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = e.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = e.VipPoint;
lngui.UserManager.instance.mainUserInfo.Level = e.Level;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
});
}) : console.log("không có token");
});
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, lngui.UserManager.instance.mainUserInfo.TotalVipPoint);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(c.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
e && e();
};
r([ u(cc.Prefab) ], e.prototype, "PrefabLogin", void 0);
return r([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../MVUtils": "MVUtils",
"./CheckAndSaveToken": "CheckAndSaveToken"
} ],
CheckSoDu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8960ckFdXhNsb55SHhkmqJP", "CheckSoDu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.start = function() {
this.label.string = this.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.formatNumber = function(t) {
return void 0 === t ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " đ";
};
r([ s(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
EventEDB: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "380ffD+S4FA+ZeF4/5i+Dl+", "EventEDB");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.displayLabel = null;
e.editBox = null;
e.placeholerdefault = "";
return e;
}
e.prototype.onLoad = function() {
this.placeholerdefault = this.editBox.placeholder;
this.editBox.node.on("editing-did-began", this.onEdbStart, this);
this.editBox.node.on("editing-did-ended", this.onEdbDone, this);
};
e.prototype.onEdbStart = function() {
this.editBox.placeholder = "";
};
e.prototype.onEdbDone = function() {
this.editBox.placeholder = this.placeholerdefault;
};
r([ s(cc.Label) ], e.prototype, "displayLabel", void 0);
r([ s(cc.EditBox) ], e.prototype, "editBox", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
FakeLoading: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b0c022dlidLOp+h1wir0VBZ", "FakeLoading");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyCtrl"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodechinhahng = null;
e.progress = null;
e.progresslabel = null;
e.speed = .3;
e.count = 0;
e.isFull = !1;
return e;
}
e.prototype.onEnable = function() {
this.progress.progress = 0;
this.isFull = !1;
cc.sys.isNative && (this.nodechinhahng.active = !1);
};
e.prototype.update = function(t) {
if (this.progress.node.parent.active) {
if (this.progress.progress >= 1) {
if (!this.isFull) {
this.isFull = !0;
this.onJoinRoom();
}
return;
}
this.progress.progress += t * this.speed;
this.progresslabel && (this.progresslabel.string = Math.round(100 * this.progress.progress) + "%");
}
};
e.prototype.onJoinRoom = function() {
this.progress.node.parent.active = !1;
this.isFull = !1;
a.default.instance.checkLoading();
};
e.prototype.onDisable = function() {
this.progress.progress = 0;
this.isFull = !1;
};
r([ p(cc.Node) ], e.prototype, "nodechinhahng", void 0);
r([ p(cc.ProgressBar) ], e.prototype, "progress", void 0);
r([ p(cc.Label) ], e.prototype, "progresslabel", void 0);
r([ p ], e.prototype, "speed", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyCtrl": "LobbyCtrl"
} ],
FavClick: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "436a4gxxAxCWahKeWp+0g7E", "FavClick");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.toggle = null;
return e;
}
e.prototype.onclick = function() {
var t = this.toggle.isChecked ? "Đã thêm vào yêu thích" : "Đã bỏ Yêu Thích";
lngui.UITextManager.showCenterNotification(t);
};
r([ s(cc.Toggle) ], e.prototype, "toggle", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ForgetPassCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "53d8e/wmD9P54A6oSlG7fWr", "ForgetPassCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nStep1 = null;
e.nStep2 = null;
e.ebAccount = null;
e.ebPhoneNumber = null;
e.btnGetOtp = null;
e.edbOTP = null;
e.edbCaptcha = null;
e.UICaptcha = null;
e.txtNewPass = null;
e.txtReNewPass = null;
return e;
}
e.prototype.onLoad = function() {
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onContinueClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.nStep1.active = !1;
this.nStep2.active = !0;
}
};
e.prototype.onGetOTPClicked = function() {
if (this.ebAccount.string.length < 6) lngui.UIPopupManager.instance.showPopup("Tên đăng nhập không đúng!"); else if (this.ebPhoneNumber.string.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không đúng!"); else {
this.btnGetOtp.interactable = !1;
this.btnGetOtp.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
a.LobbyConst.timerSMS--;
if (a.LobbyConst.timerSMS <= 0) {
this.btnGetOtp.interactable = !0;
a.LobbyConst.timerSMS = 30;
this.btnGetOtp.node.stopAllActions();
}
}, this)).repeatForever());
lngui.UIWaitingLayout.showWaiting();
var t = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string
}, e = a.LobbyConst.API.OTP_RESET_PASSWORD, n = this, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == o.readyState) if (200 == o.status) {
var t = JSON.parse(o.responseText);
cc.log("otppp ====> pass: ", t);
n.btnGetOtp.interactable = !0;
a.LobbyConst.timerSMS = 30;
n.btnGetOtp.node.stopAllActions();
lngui.UIPopupManager.instance.showPopup("OTP đã gửi về số điện thoại của bạn");
n.onContinueClicked();
} else o.responseText.length > 0 && lngui.UIPopupManager.instance.showPopup(o.responseText);
};
o.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
};
o.timeout = 3e3;
o.open("POST", e, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send(JSON.stringify(t));
}
};
e.prototype.onBackClicked = function() {
this.btnGetOtp.interactable = !0;
this.nStep1.active = !0;
this.nStep2.active = !1;
};
e.prototype.onChangePassClicked = function() {
var t = this.edbOTP.string.trim(), e = this.txtNewPass.string, n = this.txtReNewPass.string, o = this.edbCaptcha.string;
if (0 != t.length) if (0 != e.length) if (e === n) if (0 != o.length) {
lngui.UIWaitingLayout.showWaiting();
var i = {
AccountName: this.ebAccount.string,
Mobile: this.ebPhoneNumber.string,
Token: this.UICaptcha.getComponent(c.default).getCapChaId(),
Captcha: this.edbCaptcha.string,
OtpType: 1,
NewPassword: e,
Otp: t
};
cc.log(JSON.stringify(i));
var r = a.LobbyConst.API.URL + a.LobbyConst.API.RESET_PASSWORD, s = this, p = cc.loader.getXMLHttpRequest();
p.onreadystatechange = function() {
lngui.UIWaitingLayout.hideWaiting();
if (4 == p.readyState) {
s.onRefreshCaptchaClicked();
if (200 == p.status) {
s.hide();
var t = JSON.parse(p.responseText);
cc.log("change pass: ", t);
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu thành công");
} else p.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(p.responseText) : lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
}
};
p.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup("Đổi mật khẩu không thành công");
};
p.timeout = 3e4;
p.open("POST", r, !0);
p.setRequestHeader("Content-Type", "application/json");
p.withCredentials = !0;
p.send(JSON.stringify(i));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(cc.Node) ], e.prototype, "nStep1", void 0);
r([ l(cc.Node) ], e.prototype, "nStep2", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebAccount", void 0);
r([ l(cc.EditBox) ], e.prototype, "ebPhoneNumber", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtp", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTP", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(c.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIAccountChangePass: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "af430Za50VKKrBLoGZg4QQA", "GUIAccountChangePass");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.GuideCaptcha = null;
e.Captcha = null;
e.txtOldPass = null;
e.txtNewPass = null;
e.txtReNewPass = null;
e.txtCaptchaChangePass = null;
e.nodeStep1 = null;
e.nodeStep2 = null;
e.captchafake = [];
e.isRequesting = !1;
return e;
}
e.prototype.onLoad = function() {
this.captchafake = [ {
code: 200,
data: {
b64: "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",
token: "2a3a025f168a394b8432ec129e215737",
message: "Hãy nhập các ký tự màu đen"
}
}, {
code: 200,
data: {
b64: "iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAIAAACWMwO2AAARDklEQVR4nORdCVRUV5q+rxaqih2KTaBQNkEDipYLoAZBgSYYlcSTOJ3OtPYEktgzMW0npm0z6TCJTbdtm44zJ1HM0pPFk5xoiEHNiIyA4E4hESKbIPtqgUABtb85xS1vPd57VbxaKae/k5Pz3/fuu++/93789///d2/JqT6WC+YI4rzCuXq1PSApzLPgKakoBwrCriJba2R3mJhBbA6JRcQjSjLLyIQgFeU4CZ8Qvy2mOGkGnYVYRDg5yawkk3NaKSLFbUIyZyQWEU5CMuvJ5OQg2U5UtJhkzk4sIhxMMtuSyQmtFIIxVpGKsAtM9BfnFXLspq3tQZ1pG1LN3jbJCflkLszqwqNELCqYsEGcVzhXC5n1zorDQFTVJniUlsJHC84T8ZkGdeEjVTC3F3AZebQtlhPC8b7UvvrAgrgBsx5B3hKtoSLxzLIecYj6mahnruoOgDjvuKTQicwtc9+WiFOLG1b1hIhGPWnvmp4UiIK4AYbVSEpCWzXrIkhMQzDvHYf0YmOgqj5XVBPnHYeCpDAXySYAq9mbgmYNeqFYMiKQK9kaNyX3RHw9AGB1T8hvryT9cYTtXx9NrMlwkI1VIxob/QzWX5m+oJMLgHmMcVC6gUg1u5IMssdifhDJZ3N6mWWlhtwmbgcOtPqMFIprSLdYSu6Svz/1hlAVLRU6TCviDL6WlYxky0wUBIrTbeO824pkvyz4rk8qKzn0C1hElLJeQ5s3aO7C90/bTrX4DpuowFez4wcDPzyTbYEmpGQmc63Qs7OSjCFsTCwirCHZ0e+rPzp7y9dDwHWdOnYMhA7YZf2ykl7mUmqULz8d03Rk9Q105cOz2WqWtlkoLYptEI15XQ3tRre+/fqZsFEve6tEfJCaC7WGZIhYto8KiWQyl2Sbk2M+PndreHwKjIOD+0VHXrG5dgBRyrKF1azVYV99oJatKfvLQS1Ho/NrJtzWdYQtGQhc2RMMAEjqCt1e/9gEV/XEcyfULC185EZID3NiIT7ZNgJFMyUV5Rz64QrhuhmN2DfdYIxk1LsQ75V+heM6AcPArr3vSv39qWEL7SCaCG1ILVg2B0ymcFep2l3oz+a6oCv5S3uT/+UTKN88/gKGY6RHJriqt9dXIFY9f3vJtjuLmWhCVGbe2Vt92css6BQ1s0AtEsk06wwSP4Q4Lo9FVAKOzj7CXwM0uatX+pSVHQQA4DioPHkkd9Ny5hbCq/3Us/knxyeVWjbv2XWRuZuWozQMMbpG9VFQycRuGdNhX33g5OiIampSZ2y++fTTN7bERwSgu8rp/yf0B/3yx6VUVgEAfKcEkSM+V0RdsChzURpTAPFpXt0XnvXdgr5hzpicpdZo+FzhlebJMKHGjQ8rqF1d5EHes/aIeR8RqIbARArNxsSi/WAJ5bBLx8YCUgAAGhcXeP21LH1lcd7xjFfeBABo1SyOC0+tVAAAiq80v5C9jLmBqarr7BgYnRanUpbOR9dNtGCZm0VyQQ4dPnyhtBQWRwNTpKJY9MYHITkHqsMzazppB0RfdI0H4DYssniLSQ44sSjoHQk9dd2zvouqUtR/nUfy2OLQlt1ZFvSLBCYjb8K9sYRYJvK26CKVXrEHi4H2NABA4e9R/+52Qe9I4OTXwsuNbh1DoAwUpOpV/FNSxMmKBgBAr3T8pfPyYz8TMNSq+EozFCLCwxeKzAvaZ/W3dl92cfXygfJrWcmGQe8q4k10oGpeAxVCtwY0LAGdRZmdNJQixvNjmt+gxxd1DVE3RcEh5bb7LTr4CabRUHXryVkVUnTDrP46ALNEhdZ/OYIQv/QRmPaeFP4ejb/PWZx/kvtgEt2tPbJDw+MCABo77//igL79zJWRB15IY+L+3/PeuP3nP9dMD3pebu7TOWSfzHQcboxVu0rVUOAKXN/ank1sEMlv/738zNUWKJPWQSZ4J+XS6ZgmKL95ad3WxlgoExX2vt0R+UEJwPWPDCck9KalTc2bh2OYX8v/8AbH2ja/vG7nTnjXVubKApB2mtBbLLt+8Ar+XkJkFRGxYX7Rob4t3cMAgIu37o1NKJi4/+Xl5ZBVbBaWlppKyu8R/0/7UuhswbUYQaNS3vjmIJTTN24Udhn1fqxBq48hs5XYHUod9nGP1CVfvIxY1bU9eTD1MQDGWWAcAHB3yx7deNZ+Zg/drMQMYjngAyp7SuVX2ahb6bauCL5dPeoWxu9/QKywZU3Moa+vAgBUau256y3b0wxhCa3zCAC4dvIjWPQJi/z46h34vQLoP18EFoDpxMy0bFStV94siBsgmq66tsGLD29OL3bhNuj8THR5jdUHDEF5XWdYkMxdql9sDRORcHgvdxQ6jmA4MWqaVQZQp0nFD7A4p2VbcBy8Z4gjkwMA+p4U92UtCz5VffejTFKF7MRoSCwAwHdVjURiUVEQN9DaO3xhqB8WX8+cn0BwgFC6ryBugHl0CQdkdKIRgNMWdZEpTsTXQYGv5uxsf0sqCiZaVigILzej+r1PimdtkysfpG4pnhOecRz/StnCeb3Zy4x9P/Zw5blw2Eq1bmm72zMya2vIZ/dwd4/L3k0aU6kopwDofSzT3JKKckp+yAEi/Rx4DQxa1DmmuOM/dHLxHSi/+tOekIlgqm4slZo9pV+CZeHhCj/6HRC0ILXm+M1hLEe+bPqFWMdzawGGmYj2U5ctQPJP7aYmWKPVnrt2F8qZYlFgXzHKHMJxJNoAYyOLcl3CrqKMrCes6x4jyFyUf0gth47TixLxtusjSBPiFijtaBR6RC7iWfNGOA7EzVX2hiMSpMSQsP7d7abDexzHz99shbK7gPvYAqNx1r7j/3uhug3KMCIjnWGicot2jaASrq5tcOef9evgpqTot3esp1XAspBQ5qJcv+O/ofyiRJwrWY74RMxKxB19K/j7alite9vqgfQltK3xpONxv/8KyqZDQtSyPTxp6uGD2YlFdQapyRgbqohh2Dyhe59UppuDKZVCpeZxaZQcn1RW1OoTSAuCvGad1FlHc4yn8FRYZRWYQIvhv92kd6121C7NlSwnakUkvaDXEDCOhiYBMGETBUx8w7EtaOaM1u+j+vikDB5t6/pb2MfQYqH2id4Mlaabk2uOFUtgsbT6XnZSNLXlkput0A8DAKT9zPBXiIRmr2aN9yIAwKIHsQ3eujjUa7BC5wIbCQ0H3WQb2iKMjpMtcD9s66H4wxK/GgBAnmR5noTGGUf642qDR+U6flsOIm2uz6wZPmtgIJbpd1AvEq+YcF90tx6ySstxh1fgUmjsK8e6ba8UntmBTz9VVNWY+Mxe4ltgzSLJJXgRw7CNGzZQNXk94zM5WwEA+NvVw68m7Zl1IP5cugHltOp+t2XW+ubiftjW/4x8tTREt3TuvZz8zE8zEgfULzn8kR50F9Noba4P8XX2sF4c6jtsCFKbLLXMGB2Jcqy8alVs8PUG3cjW3u2XVX86P9CbaNs6B0Ybm/QJ61WxwQsnLwFqwhXX2zMmrNItPSquBR1kAqj2sQV7zkbrWIUBQGIV7bJAhIIXA4C9uIUUsK31ctJTOlvXxkJiTWezmnY/vZrY4TPXDNkd2oVSF1q2L1Cwddy6GH4v7R5NerNFKO3yHEPF5C6RrTth+EvAAV6UpVuOWTiWX04fChAf0YWBPiGuHfr0qW9zpWz5Gtr6MC9oE5DiGyvp5aTEWp+wwNOVNzapW8vOXG3+9daVHLY+M4Lj+NmHsZgbn7thOX1O/J2LqVDYm1568MJG0t0ur7Hnc75FxQ10zJsVozKFibtoccEB/sfHq6Ctyi9fn9USRVsZCgbTxZehu26t9DkXllob9mWVBZqbhrkH6mnh8DwWM3A5rKzV+gkYGZdX1XWiWzcbewdG9CHSRnEEbcxIBJVVU1z1axklMhcVLEaM+LxdnmKuhhU/tlcStCKCuAkMAPB+4vWiWJ25eql6BS2raLMeUyGGDRqunff5+h1BMyD66rJrx31zNWcIqJLFqS8nJRYAIGddLJJPX25CMkq1h/h5PJm80IKW33m8otVHn5N0U3H/WpJuroPV3v/gD5+Wky6iDCSRJSfi675YUgcPeP2qJsF0s+gpYVeRLGpG+Bp66jqpcsjpm/Crq11hMb2cl1hRIb6L5/tD+XJd19D0hogphaqs9h68+ERidEJUkLnNnoivK4lsQ8X8svUik3vMNRqcdKWtd+Tl987KplSk68SMP8SNkJ73kq5B+XdVazFAs4nU2HIjCw9Q+rqjotePHfO/rORM6BZf/uBo5IclQedqYVLUZHdtA0Qv5o84qY8FsWVNzJ1pB1aL48VXm36VtaxUck+u1Id7TyaZba5qg/rfTzT86e+sTVjfvsD0I9DPI+KfC76TK9W+HoLoUF8UYYwGpgDQQKr5ZloZZCUbx4yddS6O0RngRUN+UcO+M25g2EDGEr+qJkG3FF7wu9ToV9moEfDYD1VS+rr1PLXK8043g67bAGb5W85rsQAAmasMWcHTVU3EdXB59LxgPw+zWhtym3wjvVSD6S1QYnfIrpsraGtyOYZhgZvDYFJtfFL5yQ+35Eo134X9113p/t6uqJrXQAWpkRGBfFgwBeXNTTHEW8Uxzei//JSK/JSKqjAad20oZdHdf81QEd4CcIBYpXbn3/23LI2ri1mD4DA4tcVyF7jwuGyFSmeieu6Pdw+N1bT0wVvmelcqtvb19AvShzMdJHM/cDGN9oADAMDT1fBtZ/DBxGfnfyw8UyP0FPRJZVoc93bnHd6VGR8ReEIyCUCLsTceSjYcFclujoaWCSI/hcxCWuAsltLHvWH/U2FfVnrXdhBvjT0m6nxurULozpOOM2nK8XAEsSRHXwAAiF+ccdSd4bG+DeJwtH/hwOeVUOC7sDeKzUsQHE66Wh+gD9pdNOxDJelecr6xyvOE7q487qRC70Ud+fYGZDYsfnD0Y6GvrxQA3sRuYxu77/gPnY/Uf0rnaLFOr9H/SLlklsIIKk9B68sZvPvjbm0D3NFJjYAniwq07ByO9WC+zctxFkti0ZHrLWtiELFuNvVCITUhXMAzI447F93yzcPNTwCA/ZXrYu/7maiPYdj6ZfMv1hj8OQg2C8tYEblwogJ+ETa26wEA8PnS20hWs3ATrKpmdlJI4eehMHPptxOo2xFo4dRLIfSlQv09uodmGHxz18EDj1ci+amG2Oxm+mQ9EbnZ4py1sf/+SXn/sAwAsPvp1e4L0+Lj4328vQEDHxatubRgSKZHAg95Rt6uM2fEYnimD8OwzWtiPviuGl0J8nVbGRvM8C3jPEWfuwx+2wEAxA0GvH6F/tsICaIAT1GAZ9E7z9be7W/vf5D2/H7dCI6XAUtdmv9PZGKCubRYDN2szckxR09LtA+3SDyRGI1h9E43CTjA96eVtXvrD2v4Tgn+ciGdqzEjEOZyWCtjgyPSf23Zl41/NDIRwZnD335lCD8v1xvT7v+Kafd/UyLTdbBQXINOr7Nx7E+lG/wnXE0/QuK6xd/LCos3mfuI5cBxwOwvzSZgmCbFcJycWaaFnchnv9/auzS/Y09mCSr+5lric7fj51Afy+Bsvzdu7JdwM7Is9bGoPXRmO9flNfZWahkqZrZGzsqqY2LJi3RbOh0Ju/4LCXaaQWPOO1OLZRrWqGgPI/F+4vXPlxgCfm85n6udxbXa2BZxIq7e8ebq0fo3XYz9oxWWHKZgAmK75pLMHj8+i4MZfy0P+DbbDUeCZcd9nYRMRFgzg7SwjcUyhrlaLv+WeA1uVmEOnHEGxNhhE9PEckIyMQFpBo39SAy1d/YlFhGmSWY/r3lF3nEmYb9pBUiWifpjbrTEekTJZAySwjzmzvv/BQAA///Y026Ezq9MfgAAAABJRU5ErkJggg==",
token: "84dc72b234df0ba2ea46c7572c7881ba",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "70140a3025c672f982d8194bd7ceca64",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "f08e366efcc040e74a0ae8fcf1cedaea",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "0377be3e4790d5f2cd69a8701d5f3dd5",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "iVBORw0KGgoAAAANSUhEUgAAAMgAAAAyCAIAAACWMwO2AAAWFElEQVR4nOxdB1hU17be0ygzlIFB+gDSlaIIKiLEa1QiiiYYNVfTvhglmmeMxpJo6jWFFG9MTPJyLSnXXIMlig0hGCtFI6AohF6EoUiZgQGGmWHKed+wD3sOZwoDzIz43vs/P7919uyzzzpn/2fttdde+0Av2L8OPCREJh8glRQeSNb100OEgVqhakZBZPLBwgMPrWsMQWTyQQAwUiF6CJSHSCwixhWT9AM+O6iwcclExCNBLKKGpB6km0cJPjeJw0vTU4HYW+PfdJmUUo8oSD1INc9V9bMKofBAMqnD/r//Hi2gHjTfUDis0RoWZrZeRKtpfn6P86FwWPXMNBRCozVGbmn2rhGppoc6j6LVzLxV/eXxm1Be8bfJ6xKnmfPqkckHzEcso3CLBEO6/KHYm4eLpo7ulCM5IokMHook/ebXwazEAgBgGPYHf2JzwenWTtH2v8eY4Yr/p1ilUCpf/vxcSV0bKnluQdjm5dHGvYohw7ShxBqjpVEqMSqVcjqn/MC5lW1dIlToZM/093SICfFi0M00jXi0QJUplAyagZVvlTfllzUTWfVQAP0TQ4k1xlHsm7RbrZ29Wfm1xMIT10qhYMu0uLL3xdG1/L8JHmfyGcI+ikyptKI3Zc6IfPWgMpHe9nho01PThz1XKJK89+PVDmEfPKRSKEqMHL00CgycVZhjKLxb8+CXrHvqS9IoibMCo4Lc3/nhCizp6es/lH57TUIElUoxgz5jBJ+bZHgAxUDQpDLb8ibXC0VDStMAFchtqlv1n/t8aqNzZ+m1u/WoZG6ET2N7d1WjwIgajhQ4sXaWuAAAUkKHuYdRYMPe9PzyZihbW9L3vbYwIsANHpaKXM6eOdUrVrmWBRXNz84Pt7Y0t883IhApZaxZCPfYDaecMmq/QvvPc0DF6kT9LdTmZpXJ8NNdHVmp7y5P/uc5yCqjO1iGB0HwjoSUgvTSitFxrq6lE7EKALBlRTRiFQDgjbm2ixIO7nhjYzO/p6Ci5f2frn6+fv4ormJOGNdQ0UVS58sl6LBmwwKFtYVFl8imutX+bj1D2Pdj/9yjOjoF9Yh0kFVrF0cUWYV9UsttkeDdmt3Bah08fexWwxBWoQAQXauumlBxriQPABdDKiPkFPOQ7M6xTYoNJlUIluRs3/XBlq1bAQCX79RhGEahPJzRcOGOI8fef9qeZYVKoH1C/qXRr2hT2+b7rywoiz0cBTP8N9BnAhkALACmAEo4FtF4f0UCc03yR1q7k2QFpvq7JCdGDvgSraus5FUDhXFOos2D3aRpNUZEtYEl5xHA0KEHKYGGAKKiulS88VcjkhfO9NNKmjib8ulRUfkFBQCAczcql8YEjegGxoLr9+o/OpwNZUGP+FSVzdIlS9CvaMgjjXq7Ft8vZZf+cF1FtaefOX7w7BJHsfVIL21T2xbwVTpVKpfRaN/HxZ8Pi9TyGMOYA+GSdVpNBaxc19I5L3leiI+zG8dG/xU1+8iQHiRiRCsBI/NpiI+YqIqmip094gXb/gNLKBSQve8lKws6aoQ4plwsqIWsAgD8eKEoMTrQPC78q4eKbuXno8NgL6eXpsrB0MkviVJQ807K2kZWc3LMKgDA9+cXj4JVE7ekOvb1AgBkNNq9/14zG4DZYDTjlEyu2Hnw8tH3niYWrvrwpIEOlv4eRIC0NoRVxIWQkRFLV9BBU8WuFrWtcnO0FfmtsBocUEinRwYSvK6V0eZhFb+7r6CwkFhS3tBR0yzwc3fUeQq68Smq/+rthSO6Iuo5O4n4twFWAQCan4s15FxNo5Vb0nDzr6bUAf8MKoYGawXjDwBGPB/URbKsfdoH4mFh5FkYn5uUAlRP/7StO7IGfZbsPRl52xK0MBLDsC9P3ECH2XcbHgv3Nq5KWnHhZrVSqSQVnsurJL7isKtI3TYiaDUDXqm5UBCGcTtiAg1sCnILCoJu8Qc/X+vskcCfSG87TTYyxmsCqRqZfDB+0zua5YZgxMTSNFrER48Exo3PUYXp7oyU0NadGUN8f6joF8fyMm/VoJLs4oaR6jM6nMmt0Cw8n89bvekTGmGwRreG7mtDYnq+e7PWNg3xjq1buiZcL4Nyy+KRLQxDyzFt3cHYMC5i1ZOzg4w+V4WANlKXJYPQQ7XRWyz09OFdoXvj8NJOXitL+TUHHj45O+jdFx4jKXHiaulnqbkXAaAxGA6ePp2N92F5h7CvkjUnUHRt1FoNi+Latpc+OwNlWxubnt5e9NP7z86k0WiaDhaxRGaZDwBOrAtHVu/90xedPuwL7X0k2+l6OQCgn2NT/MmqUSh/5GJx1CsAAB6DTpXJld4u9tueiSGOkoY7WLqA7KKu6YLuE42UQarnLZEp1OE+C42lrow/qz9LzaVQAI1K3bdxQUUD/+tBYu3fupjj6AhE6pfD6DHbczfUtmr3i7O3fPe7+qe8ysmLtZ8FSbazxKXBrwtw8MKUCqe9BqtHUSrZt+ug3D3ZU2sdx1vV3SGeckLIg4iy+o5v0v6E8str1oaHh/v5+lrz0j5fP2+eMZJiEKWM0NboiDXsuiGDpiYTnTpkdTm3pOGDn6+qJu3PxtmxLGYEezwQqG3GV4VKz/68lFCwLSEGXmhniYsRuSWVybPy8ZE32MspLtxrWoDb7aoWWHL9Xv2rPT0cQn1SqD0FpG2w6UeO8c6gDiBiGXhp2/Jmeq8UymJP9UXsS3jWzZ30XrHSguF2rhBQKe1xwU3LZiisLIini6Xytw9dliswAMDsUO7aSCwyeSMkwZv7L504cWmwos7Jhy6gAJVx8wpNsoSCIgsAAOJSaFH1gx3/+kOhxF59KiopDg+WMi0ZqMJs1oP1oa0qMgF1XxrRel26XdcrxrOUoHeyJCYQEUuuUF65enXpEtxP36NyClXYlpAE5ZTQ4S9RyeFL6SqDbS2j+wvU3WxT/QDJEhd7KFAUSv9vMoecr8QmXCtj1bVXbU5ApovPTfr6m28a2oQwdhMb5nXpdi0YdOfBK2DFCvxsHx+c9kKr4jrHYihHRAA/PzVvSKFOE+WpjpJY+r1FK0u1xZLK5ACAxvZusVS2+dtMqUzx7PywNQkRqAIxvtAnlREJBK+SYqTYMRzsoMBgMGYu28xnsSKelFgdvSmR4rbk8G9plXTcnGxLiMFDwaopbQy000QfSxN5XN6mBJwou7JjicSybupEsozNBBjmfLXU7fxt4ukYnUaRq0jJbOjwPny9ZkM8Mpn5N3C/E8PAZwPzys9eAZfWzwMABHjeQevN9+8P3uk51T+IHX+PWTk3xESWSRfG5LzropejLRPJQpG0Q9j36t4LUpm8VyxbMitw8/KZxMpyuXraLxo0J1qhP3as5yxYTdIjRAuXjj4B31+/C2WHiUEt5XjyRU/7g7WOZTCaxSe0AGUOL+0QbzoA0wEAURpLHEIrye45ePfPavRcVjaJ+Kt1szq2hFGp/t9l2Q9MgevWzetnM2nifrvyJv7MgKA956kDbxe7qN6utBEAnS/wm/vx4Y+4ayHqFZ0LL2bOoDe+887v7lu3B39ZfN0ceG3dC3ccmRbgZsu0+GL9AlL882xuxe7D16G8JCYQzh8h4MT+qxtfxhaX6dLBEIsFvbSD52/vP4dHRD/+8MMnnBvAQLD7ksD3Yrk6pef5+HCcVYNBLOLMlxhruHBktTPBwRJaSea98ItqyOu3OH5iufNQ3yv03WOWbd1Q/mv3ypD3jgMqRRAdIAzzEkTh80qZPdO2sgWyCgDQPnMm8vE3fn2BbWPFthni1Ke+OyTg3tPXP3fLv6HMtrGawMbf7ZcSpsZH+Q37lMYIzX17xvexOHZMlhUDJlzXtqjsfxCXs3djPING04yqS/rlSCZ6ZgibZ73xFfhyZulfDMUoU0xTQlsxDEODoJM9c1pEBGjCA2ZTwsNdHVkPBHhSa3pB4+pNn1AHJhy6Fna04uM4PLyyPS/GWcOjt+gUIZl7NFduY1n92kKRjzOxTp+Xk9TZ3iOtgCJXPRNOUSEPC8MGVle/fX2R5hVXfXgSCiSGAQASZwUYPR3ZQGjPbjAWArmcO1W4r8p1tvv29QTW0DkOQntXH5K1Egty64jkcFBVNgCg16I/y6+m2KWtjyFzFFu/mTPbEH1uV7U083ugvDg6gEqlokg6BYC58UtSjx6FhwKBoCrr25gQrtZQu8zSWauDdSGg6vLEOgDAnHrvxZUBpF8pGEaRqeMvdqVNVVsWkVgF0Rawss87g1WjMqVUqdyyTShxYeu6KU0+jSuYhFjRkzwRsTYmTXew1blM2y5Uv8ocO53VHJozf53l7Pqg5OPHsoWWUlQe1ew2574PXTmMMSPG2Umhaj43aWUIlkqofC6vMiaEq7UdhlRLOnkbS/T5bNWckS2xfPt6nGYFmobj2B3soVkN2kWxGxsSS9U3PRIwvA85TmESYsWFe31/Fk9YKKlrnzfNV1fNasJcyVv321nhxN8XkioPIydxvzn/kme37UeXHw9t02IAEC4V4pHJKX4uXi72/KG/cp3tpvi53B3szmtF9T19/cR8LIKcTmoZA9gHf7vWa6Gq/2ZurNZMByphuFc5Q8HupArEaJmCaYnKaQ9j25axYJK9MYFczlR//F3Lyq9RaCz3QsjkiuomdS97D0Z3NPFV9E05FWeVay8rrsHLpwuv3GjXsz7xfOmEdl3niiT9KMdyiY5F3yUxgQwGHk7rlytO1dginx2t6mh1s06ElN7yaILyghrt7w9pm01XxETiITRUqHElwR9Q6PAfHgmYatNVcmIkFFo7RchxJqGwsgWGkgEALCuGxwRbXa3V2wsZSipDSd2VHftzzvG9mU/8dnzlrmw850RCV2x9IkvMkGs992IBvjWIQadGT/bs6esXiUQNjvHwH5SD56+VydQD1pX0Y1qbGvCxhuDraHyNZX7tRF3KKwkRYJW2rmrDrDktoErVd0G0Xo8cTLV5YcYkj6TY4LSccgDA3hM3Q3wmBHgSF0tAVaPgwp9V6HDmJE8aVR/L3786hyNmTm9yB+A07I9lZZM+GZyLtTP7fgm/m1wYSTqrvrUL0VomVybuhN7Uv/UrX1LXzmts5GiUk3ys++wuKU1lCx0kVm/l6MysUtKpSgs6GhAVAxtGdG31sWzHoxIYjSJ1ttOv53iGCbeJ7liFT9lEEhlKKIDo7BHvOnQp80982Y5tYxUbpt1fhniyImhhtf8AqwBarORzk5aXqoOQJyeXKSlkJ+xsbiVynvSDOjRtOuvixXaPJ+FVUIIysYKCqnz3cXz72vbcGLZE+8oxBJEiNImMNPwhUDCMVYdrK/bgKOmGblWFezPHyafOIEy43YpBp86a7HmjtHEgXqX4Li0/JtSTQqGU1LX952Ix2loJAFg9PzR+ur4g3su3I0glsFfWCCJOTSqHfOJbi++4tUQ2q11jpRJLv6k2imrqUCgArWAOyhnp6T8fPoziDn9cuhTr1gOnh6TcUYhD0+6UOXVAOdu7Ib5Gn/4SNwfrwVUXmcJPV1TMvriBIRRDWTDDX0+DujB+uGXafXz7Ni38Jevejxl3esWynzKLfsos0qwT7uvy/IIppC32pFU5XQEFmuNzwR0XkedeOqGDSKwbpTxE3w1Lo15eHIEa12yKw0sjxh0EAgGKO2jlQRtLHSjJ8K8OaZsQ3OE09YGrVj1FPhMcBrMqXG9l8CbO0pobwz2KJ9MqrC34sw1NLh2fMO0XEygUygtPTMn64vlPk+eRfqLTVJf2cWXv2bCAyKoR7TPm8NL8xOqVx2rHIbneZ3IqB9UAiTEBxLNIIxEcW5mRL06ePBkVXr3Lg3EHBKLzvj03ZmIX21KJ+9d7Z93cvjCnyn+OVj27pvp0++MWiH2nzimzlXS/MDpvMRjF5T0TI3+UPXczbbG3YNDmR/o+H9/e1imSK5QujixfN4d50yZ+dzp/y4poSwZZB825Uqf7QprESSvb/JrbgRcuCy0lqLxbJL1+D991HhXk7uKgZXeU5qLNskhOKf5BCSCTyU7V2CYuWoTyz4jOu9g5cVfx4zzlr7vnXFfZGArWadGZErI1RXaQrtR4qlzAqmuzq64eCGspPLKy+jxeqhtIdvHKPtBrH+1QXOx9GndDa1avrln5nOZ+RlPkH5sO5tvS/vrTM0klb63WPpMafKDqvVkOzZkcEUtzCOPw0pgy9WS+21JtYDJvVcsVePxMV/iK2A4U4qP89hzLkwxueL+SfuzFMCkh5z2dqFKQiBUBgvI9mjP8q2HhPZfWn7lvoYUmovUVRPm6ZN1jNuBuWcBPP7nmZfJnB/n8eBWA07BQ6mzfuHxG1xSW1l38ukhm3E+OGQvj9FsJqic1Q0c54VHyuUlStg0AeNCBwnBBT/9k/mV01rxpOoNMJDCtGHOnTsy4hROlpK79/oMuHzCY+T5Fyym7suPKnNrvs/G9MScml4a1Oi+qCiDbGAql7uW5wZ+eRis8thUtthUtxKb++scKjLBOT6KLHjIRN20beKemxnj8KpWmZep0X6hrAxal5yaSOULcR+HnHaqpwZ1lJpOpOdrqAcm86YruIljL6J/+Md9SoQ4NfPxY9q2QKZoKS1zZta/MV1rSRX7qJUDhFG9+TGDLksiKHUsxg/dUooDL+DRX49Ri6RkKUW8hQWAtVlcbCCZxeGnfF6uzCR6LNWhTKML0YHeYSGP41N1f4Lg1b1ahe8vvfio2S2mKj8J3HjmVhAELChjCle5JnmXvLJM421s3CdhF9Zb8nvuEFDT9IDFVqz3Ts//RzPyjj89PdBo+FFa6q5OfuIp4AECb+9LLV56FJa6urvELFgAwjNUhgkKhnE9ZPVKFl5VNmiHZUuz2WjOzGQDQbNvz9uNXJrc7rS+IItWUONvDr4CIPUa88YF4+4hD8QkJWRkZWuuQBK2tmQh0rel/Dxe6ZoWaNTEKVmJfgA5nlTcCFnBuPnv5i2eGPEfeCIg1anjWZf6zO/rFp870D6zz5HF5+zIWjrFN/RZo8EElxCckAJAAACAyTOspmlQzEb2GDIV6vm5tTs4ZOBTKqfIizu0uKzw9K5DP8RM48llD2tHfN8YC6qEAPifvhzVjbIeIAcYQgQ4TtPYIYhipsi7Omc5oUbDRfqnSRFRD79Pap/OLOHik3ltoH8B33F7xHeKKZeuxf/ztWqMjo8oOX7TZXLIpgafTQhjlCcKc94KBXQltLBEpBXl0UzMimTRoZFpkZWQYi1iaJmn0xCLCiCRDbz+RWBAra1d4tvIUVKzCg33T6SqyVQCAYGHQ4eNxVIyi1bfg6PjQzRg1HNah1t8ChJnJpAtj7EFNYhlnVkhsd+wk0xwKIY77ngDacukcJFbb7m2lYuT6pDaNGEsk+s7E8L2eU8YhmYgwbg+aJNxgFBVJs8LUk8sE1uL/WjTES/DosW2y7XHvc/+oYLeHyJ3PxTdLaYYkiM0akVuPOpl0wSg9OOSPNJn0ryAZqKLmmBWVfPDIlcNOEqcM7u+Y6KaVnM5gzomsrOYK7ffPUa7JAQwFVdcIaOoVD9Ln/6CA7Jl5yER8sA+rBzWv+z8BAAD//8bshQDJYxSZAAAAAElFTkSuQmCC",
token: "7e61e7bb5c4add82354d5fe638e48222",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "9ba04e286ab8d1864beeaf45d7541bd0",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "357c1f14071b2472cd02929e91d2b76a",
message: "Hãy nhập các ký tự màu đen"
}
}, {
code: 200,
data: {
b64: "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",
token: "447fc8a278805f174bd9bf92c7a59e30",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "2b830230159b1737768fa68325c2fcb9",
message: "Hãy nhập các ký tự màu đen"
}
} ];
this.getCaptchaFake();
};
e.prototype.onChangePass = function() {
var t = this, e = this.txtOldPass.string, n = this.txtNewPass.string, o = this.txtReNewPass.string, i = this.txtCaptchaChangePass.string;
if (0 != e.length) if (0 != n.length) if (n === o) if (0 != i.length) if (cc.sys.isBrowser) lngui.UIPopupManager.instance.showPopup("Chỉ hỗ trợ đổi mật khẩu trên thiết bị di động, vui lòng tải app và tiếp tục"); else if (cc.sys.isNative) lngui.UIPopupManager.instance.showPopup("Vui lòng liên hệ hỗ trợ"); else {
var r = {
sourceId: a.LobbyConst.platform,
newPass: window.md5(n),
oldPass: window.md5(e),
captchaText: i,
captchaToken: ""
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CHANGE_PASS, r, function(e, n) {
if (e >= 200 && e < 400) {
var o = n;
if (null != o) if (null != o.IsOtp && 1 == o.IsOtp) lngui.UIPopupManager.instance.showPopupFromPrefab(lngui.CommonAssetDefined.instance.getPrefabByName("GUI_OTP"), function(t) {
t.initData(o.OtpToken, Global.SERVICEID.OTP_SERVICE_CHANGE_PASSWORD);
}); else {
var i = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký OTP để thực hiện chức năng này.\nBạn muốn đăng ký OTP không?", i);
t.clearInput();
}
} else {
t.clearInput();
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã xác nhận"); else lngui.UIPopupManager.instance.showPopup("Nhập lại mật khẩu mới không đúng"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu mới"); else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu cũ");
};
e.prototype.clearInput = function() {
this.onRefreshCaptchaClicked();
this.txtOldPass.string = "";
this.txtNewPass.string = "";
this.txtReNewPass.string = "";
this.txtCaptchaChangePass.string = "";
};
e.prototype.onRefreshCaptchaClicked = function() {
this.getCaptchaFake();
};
e.prototype.getCaptchaFake = function() {
var t = this;
if (this.isRequesting) lngui.UITextManager.showCenterNotification("Vui lòng không tạo Mã Xác Thực quá nhanh."); else {
this.isRequesting = !0;
setTimeout(function() {
t.isRequesting = !1;
}, 3e3);
var e = this.captchafake[Math.floor(Math.random() * this.captchafake.length)];
this.GuideCaptcha.string = e.data.message;
this.loadImgBinary(e.data.b64);
}
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 200;
n.height = 50;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.Captcha.spriteFrame = e;
};
n.src = e;
};
r([ l(cc.Label) ], e.prototype, "GuideCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "Captcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtOldPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtReNewPass", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptchaChangePass", void 0);
r([ l(cc.Node) ], e.prototype, "nodeStep1", void 0);
r([ l(cc.Node) ], e.prototype, "nodeStep2", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountDetail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b4aaemL11lLvoXxIBnIZrTq", "GUIAccountDetail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./ChangeAvatar/ListAvatar"), p = t("./autologin/CheckAndSaveToken"), l = t("./LobbyCtrl"), u = cc._decorator, h = u.ccclass, f = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblNickname = null;
e.lbCoin = null;
e.lblPhone = null;
e.lblDiemVip = null;
e.lblLevel = null;
e.avatar = null;
e.btnSms = null;
e.PrefabKet = null;
e.SpritetAvatar = null;
e.Avatar = null;
return e;
}
e.prototype.onLoad = function() {
this.setData();
};
e.prototype.setData = function() {
this.lblNickname.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lbCoin.string = lngui.StringUtils.formatNumber(lngui.UserManager.instance.mainUserInfo.Money);
lngui.UserManager.instance.mainUserInfo.Mobile ? this.lblPhone.string = c.MVUtils.hideMiddle(lngui.UserManager.instance.mainUserInfo.Mobile, 2, 3) : this.lblPhone.string = "";
this.lblDiemVip.string = lngui.UserManager.instance.mainUserInfo.VipPoint + "";
this.lblLevel.string = lngui.UserManager.instance.mainUserInfo.Level + "";
this.Avatar.spriteFrame = this.SpritetAvatar.ListSpriteAvatar[lngui.UserManager.instance.mainUserInfo.Avatar];
this.btnSms.active = !(this.lblPhone.string.length > 0);
};
e.prototype.openGuideOTP = function() {
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.CHANGE_TAB_UI, 3);
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
p.default.clearData();
l.default.instance.activeLoading();
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn đăng xuất?", t);
};
e.prototype.onbtnket = function() {
1 == lngui.UserManager.instance.mainUserInfo.IsMobileActived ? lngui.UIPopupManager.instance.showPopupFromPrefab(this.PrefabKet) : lngui.UIPopupManager.instance.showPopup("Bạn cần đăng ký bảo mật để tiếp tục");
};
r([ f(cc.Label) ], e.prototype, "lblNickname", void 0);
r([ f(cc.Label) ], e.prototype, "lbCoin", void 0);
r([ f(cc.Label) ], e.prototype, "lblPhone", void 0);
r([ f(cc.Label) ], e.prototype, "lblDiemVip", void 0);
r([ f(cc.Label) ], e.prototype, "lblLevel", void 0);
r([ f(cc.Sprite) ], e.prototype, "avatar", void 0);
r([ f(cc.Node) ], e.prototype, "btnSms", void 0);
r([ f(cc.Prefab) ], e.prototype, "PrefabKet", void 0);
r([ f(s.default) ], e.prototype, "SpritetAvatar", void 0);
r([ f(cc.Sprite) ], e.prototype, "Avatar", void 0);
return r([ h ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ChangeAvatar/ListAvatar": "ListAvatar",
"./LobbyCtrl": "LobbyCtrl",
"./MVUtils": "MVUtils",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken"
} ],
GUIAccountMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7f47c5fYaZANqorDhathbD5", "GUIAccountMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mailTemplate = null;
e.mailList = null;
e.mailDetail = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onEnable = function() {
n._instance = this;
this.mailDetail.active = !1;
this.requestMail();
};
e.prototype.onDisable = function() {};
e.prototype.requestMail = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_LIST_MAIL;
c.MVUtils.post(e, {
MailType: 2,
CurrentPage: 1,
PageSize: 25
}, function(e, n) {
e >= 200 && e < 400 ? t.initPanelInbox(n.List) : console.log("err", n);
});
};
e.prototype.initPanelInbox = function(t) {
console.log(t);
if (null != t && !(t.length <= 0)) {
this.mailList.removeAllChildren();
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.mailTemplate);
n.getComponent("ItemMail").initData(t[e]);
n.getComponent(cc.Button).clickEvents[0].customEventData = t[e];
n.getChildByName("btnDelete").getComponent(cc.Button).clickEvents[0].customEventData = t[e].ID;
this.mailList.addChild(n);
}
}
};
e.prototype.initMailContent = function(t) {
this.mailDetail.getChildByName("lblTitle").getComponent(cc.Label).string = t.Title;
this.mailDetail.getChildByName("lblContent").getComponent(cc.Label).string = t.Content;
this.mailDetail.getChildByName("btnUse").active = !1;
};
e.prototype.onActBack = function() {
this.mailList.active = !0;
this.mailDetail.active = !1;
};
var n;
e._instance = null;
r([ l(cc.Prefab) ], e.prototype, "mailTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "mailList", void 0);
r([ l(cc.Node) ], e.prototype, "mailDetail", void 0);
return n = r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSafe: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e9512sLjkFEb7wom0HBexVs", "GUIAccountSafe");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.panelOTPSafe = null;
e.cbxFreeze = null;
e.cbxOpenFreeze = null;
e.lblBalance = null;
e.lblFreezeBalance = null;
e.edbMoneyFreeze = null;
e.edbOTPSafeStep2 = null;
e.btnAccept = null;
e.btnGetOtpFreezeSafe = null;
e.frozenVal = 0;
return e;
}
e.prototype.onEnable = function() {
this.panelOTPSafe.active = !1;
this.edbMoneyFreeze.string = "";
this.edbOTPSafeStep2.string = "";
this.btnGetOtpFreezeSafe.interactable = !0;
this.cbxFreeze.interactable = !1;
this.getFrozenValue();
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbMoneyFreeze.string);
t = Math.abs(t);
this.edbMoneyFreeze.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbMoneyFreeze.focus();
};
e.prototype.getFrozenValue = function() {
var t = this;
lngui.UIWaitingLayout.showWaiting();
var e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_FROZEB, n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, o = lngui.Https.packDataForRequest(n);
lngui.Https.getRaw(e + o, function(e, n) {
console.log("getFrozenValue ===" + n);
if (e >= 200 && e < 400) {
lngui.UIWaitingLayout.hideWaiting();
var o = JSON.parse(n), i = o.FrozenValue;
t.frozenVal = i;
var r = o.Balance;
t.lblFreezeBalance.string = lngui.StringUtils.formatNumber(i);
t.lblBalance.string = lngui.StringUtils.formatNumber(r);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, r);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(n);
}
});
};
e.prototype.onClickFreeze = function() {
if (this.cbxFreeze.isChecked) {
this.cbxFreeze.isChecked = !0;
this.cbxOpenFreeze.isChecked = !1;
this.panelOTPSafe.active = !1;
this.cbxFreeze.interactable = !1;
this.cbxOpenFreeze.interactable = !0;
}
};
e.prototype.onClickOpenFreeze = function() {
if (this.cbxOpenFreeze.isChecked) {
this.cbxOpenFreeze.isChecked = !0;
this.cbxFreeze.isChecked = !1;
this.panelOTPSafe.active = !0;
this.cbxFreeze.interactable = !0;
this.cbxOpenFreeze.interactable = !1;
}
};
e.prototype.acceptFreeze = function() {
var t = this;
this.btnAccept.interactable = !1;
if (0 != this.edbMoneyFreeze.string.length) {
var e = this.toNumber(this.edbMoneyFreeze.string), n = this.cbxFreeze.isChecked ? a.LobbyConst.SETTING_ID.FROZEN : a.LobbyConst.SETTING_ID.UNFROZEN;
if (e <= 0) {
var o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải lớn hơn 0", o);
} else if (e > lngui.UserManager.instance.mainUserInfo.Money && n == a.LobbyConst.SETTING_ID.FROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư của bạn", o);
} else if (e > this.frozenVal && n == a.LobbyConst.SETTING_ID.UNFROZEN) {
o = [ lngui.PopupAction.make("OK", function() {
t.btnAccept.interactable = !0;
}) ];
lngui.UIPopupManager.instance.showPopup("Giá trị Coin phải nhỏ hơn hoặc bằng số dư đóng băng của bạn", o);
} else {
lngui.UIWaitingLayout.showWaiting();
var i = a.LobbyConst.API.URL + a.LobbyConst.API.FROZEB, r = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
amount: e,
isFrozen: n,
sourceId: a.LobbyConst.platform,
otp: this.edbOTPSafeStep2.string,
otpType: 1
};
this.executeGETMethod(i, r, function(o, i) {
lngui.UIWaitingLayout.hideWaiting();
if (i >= 200 && i < 400) {
var r = JSON.parse(o), c = r.FrozenValue, s = r.Balance;
t.frozenVal = c;
lngui.UserManager.instance.mainUserInfo.Money = s;
t.lblFreezeBalance.string = lngui.StringUtils.formatNumber(c);
t.lblBalance.string = lngui.StringUtils.formatNumber(s);
t.edbOTPSafeStep2.string = "";
t.edbMoneyFreeze.string = "";
n == a.LobbyConst.SETTING_ID.FROZEN ? lngui.UIPopupManager.instance.showPopup("Bạn đã đóng băng thành công " + e + " Coin") : lngui.UIPopupManager.instance.showPopup("Bạn đã mở băng thành công " + e + " Coin");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, s);
} else {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(o);
}
t.btnAccept.interactable = !0;
});
}
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập số Coin");
};
e.prototype.getOtpFreez = function() {
var t = this;
this.btnGetOtpFreezeSafe.interactable = !1;
this.scheduleOnce(function() {
t.btnGetOtpFreezeSafe.interactable = !0;
}, 3);
var e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_OTP_SMS;
lngui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.toNumber = function(t) {
if (t.indexOf(".") >= 0) {
for (var e = t; e.indexOf(".") >= 0; ) e = e.replace(".", "");
return parseInt(e);
}
return parseInt(t);
};
e.prototype.executeGETMethod = function(t, e, n) {
e || (e = {});
if (lngui.UserManager.instance.mainUserInfo.GameToken) {
e.token = void 0;
e = Object.assign(e, {
token: lngui.UserManager.instance.mainUserInfo.GameToken
});
}
var o = t + a.getStringBodyByObject(e), i = cc.loader.getXMLHttpRequest();
i.onreadystatechange = function() {
4 === i.readyState && (200 == i.status ? n(i.responseText, i.status) : i.responseText.length > 0 ? n(i.responseText, i.status) : n("error_code : " + i.status, null));
};
i.ontimeout = function() {
n("Hệ thống không phản hồi.", null);
};
i.timeout = 3e4;
i.open("GET", o, !0);
i.setRequestHeader("Content-Type", "application/json");
i.withCredentials = !0;
i.send();
};
r([ l(cc.Node) ], e.prototype, "panelOTPSafe", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxFreeze", void 0);
r([ l(cc.Toggle) ], e.prototype, "cbxOpenFreeze", void 0);
r([ l(cc.Label) ], e.prototype, "lblBalance", void 0);
r([ l(cc.Label) ], e.prototype, "lblFreezeBalance", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbMoneyFreeze", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPSafeStep2", void 0);
r([ l(cc.Button) ], e.prototype, "btnAccept", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpFreezeSafe", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurityNew: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "27a50sSsyhLlandscRFb+A+", "GUIAccountSecurityNew");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeFAQ = null;
e.NodeRegOtp = null;
e.NodeOtpActive = null;
e.edbOtp = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
if (0 == lngui.UserManager.instance.mainUserInfo.IsMobileActived) {
this.NodeRegOtp.active = !0;
this.NodeOtpActive.active = !1;
} else {
this.NodeRegOtp.active = !1;
this.NodeOtpActive.active = !0;
}
};
e.prototype.registerOTP = function() {
var t = this, e = this.edbOtp.string;
if (0 != e.length) {
var n = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 1,
SecureCode: e,
Mobile: 123123
};
c.MVUtils.post2(a.LobbyConst.API.URL + a.LobbyConst.API.REG_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !0;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !1;
t.NodeOtpActive.active = !0;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.deletaOTP = function() {
var t = this;
if (0 != this.edbOtp.string.length) {
var e = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: 2,
SecureCode: 987654,
Mobile: 123123
};
c.MVUtils.post2(a.LobbyConst.API.URL + a.LobbyConst.API.REG_MOBILE, e, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.IsMobileActived = !1;
lngui.UIPopupManager.instance.showPopup(n);
t.NodeRegOtp.active = !0;
t.NodeOtpActive.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.btnshowfaq = function() {
this.NodeFAQ.active = !0;
};
e.prototype.btnhidefaq = function() {
this.NodeFAQ.active = !1;
};
r([ l(cc.Node) ], e.prototype, "NodeFAQ", void 0);
r([ l(cc.Node) ], e.prototype, "NodeRegOtp", void 0);
r([ l(cc.Node) ], e.prototype, "NodeOtpActive", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOtp", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIAccountSecurity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "45a32kM0iRKY6Kqe7N+mRwQ", "GUIAccountSecurity");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblPhoneSMSPlus = null;
e.lblAccount = null;
e.lblTitleSMSPlus = null;
e.edbPhoneSMSPlus = null;
e.edbOTPRegisterAndDel = null;
e.panelRegisterSMSPlus = null;
e.btnGetOtpDeletePhone = null;
e.btnGetOtpRegisterPhone = null;
e.btnRegisterSMSPlus = null;
e.btnRemovePhoneSMSPlus = null;
e.btnUpdatePhoneSMSPlus = null;
e.btnBack = null;
e.btnDeleteMobile = null;
e._phoneNumber = "";
e.g_isOTP = !1;
return e;
}
e.prototype.onEnable = function() {
this.lblAccount.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.setInfo();
};
e.prototype.setInfo = function() {
this.g_isOTP = lngui.UserManager.instance.mainUserInfo.IsMobileActived;
this._phoneNumber = lngui.UserManager.instance.mainUserInfo.Mobile || 0;
this.lblPhoneSMSPlus.string = this._phoneNumber;
this.g_isOTP ? this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO) : this._phoneNumber && this._phoneNumber.length > 0 ? this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) : this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO);
};
e.prototype.showPanelSMSPlus = function(t) {
this.panelRegisterSMSPlus.active = !1;
this.edbOTPRegisterAndDel.string = "";
if (t == a.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "HỦY SỐ ĐIỆN THOẠI";
this.btnGetOtpDeletePhone.node.active = !0;
this.btnGetOtpRegisterPhone.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !0;
this.btnDeleteMobile.node.active = !0;
this.btnRegisterSMSPlus.node.active = !1;
this.btnRegisterSMSPlus.getComponent(cc.Button).clickEvents[0].customEventData = "3";
} else if (t == a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER) {
this.panelRegisterSMSPlus.active = !0;
this.lblTitleSMSPlus.string = "ĐĂNG KÝ BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
this.btnGetOtpDeletePhone.node.active = !1;
this.btnGetOtpRegisterPhone.node.active = !0;
this.edbPhoneSMSPlus.node.active = !1;
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
this.btnRegisterSMSPlus.node.active = !0;
} else if (t == a.LobbyConst.SETTING_ID.SMSPLUS_INFO) {
this.btnBack.node.active = !1;
this.btnDeleteMobile.node.active = !1;
if (this.g_isOTP) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = c.MVUtils.hideMiddle(this._phoneNumber, 2, 3);
this.edbPhoneSMSPlus.node.active = !1;
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !1;
} else if (this._phoneNumber && this._phoneNumber.length > 0) {
this.lblTitleSMSPlus.string = "THÔNG TIN BẢO MẬT OTP";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.edbPhoneSMSPlus.node.active = !1;
} else {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
} else if (999 == t) {
this.lblTitleSMSPlus.string = "CẬP NHẬT THÔNG TIN BẢO MẬT OTP";
this.lblPhoneSMSPlus.string = "";
this.edbPhoneSMSPlus.node.active = !0;
this.edbPhoneSMSPlus.string = "";
this.btnRemovePhoneSMSPlus.node.active = !1;
this.btnUpdatePhoneSMSPlus.node.active = !0;
}
};
e.prototype.touchUpdate = function() {
var t = this, e = this.edbPhoneSMSPlus.string;
if (e.length < 10) lngui.UIPopupManager.instance.showPopup("Số điện thoại không hợp lệ!"); else {
var n = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: e
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.UPDATE_MOBILE, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Cập nhật thông tin thành công!");
lngui.UserManager.instance.mainUserInfo.Mobile = n.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = n.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = n.IsOTP;
t.setInfo();
} else lngui.UIPopupManager.instance.showPopup(n);
}, !0);
}
};
e.prototype.registerOTP = function(t, e) {
var n = this;
console.log(e);
var o = this.edbOTPRegisterAndDel.string, i = e;
if (0 != o.length) {
var r = {
AccountName: lngui.UserManager.instance.mainUserInfo.UserName,
AccountId: lngui.UserManager.instance.mainUserInfo.AccountID,
Type: parseInt(i),
SecureCode: o,
Mobile: this._phoneNumber
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.REG_MOBILE, r, function(t, e) {
if (t >= 200 && t < 400) {
var o = e;
lngui.UserManager.instance.mainUserInfo.Mobile = o.Mobile;
lngui.UserManager.instance.mainUserInfo.IsMobileActived = o.IsMobileActived;
lngui.UserManager.instance.mainUserInfo.IsOtp = o.IsOTP;
n.setInfo();
if (i == a.LobbyConst.SETTING_ID.SMSPLUS_REGISTER_TYPE) {
lngui.UIPopupManager.instance.showPopup("Đăng ký bảo mật thành công!");
n.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_INFO);
} else i == a.LobbyConst.SETTING_ID.SMSPLUS_DEL_OTP_TYPE && c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.DELETE_MOBILE, {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
mobile: lngui.UserManager.instance.mainUserInfo.Mobile
}, function(t, e) {
if (t >= 200 && t < 400) {
var n = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}) ];
lngui.UIPopupManager.instance.showPopup("Hủy số điện thoại thành công!", n);
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup(e);
});
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP!");
};
e.prototype.touchGetOtpRegisterPhone = function() {};
e.prototype.onShowPanelRemovePhone = function() {
this.showPanelSMSPlus(a.LobbyConst.SETTING_ID.SMSPLUS_DEL_PHONE);
};
r([ l(cc.Label) ], e.prototype, "lblPhoneSMSPlus", void 0);
r([ l(cc.Label) ], e.prototype, "lblAccount", void 0);
r([ l(cc.Label) ], e.prototype, "lblTitleSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbPhoneSMSPlus", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPRegisterAndDel", void 0);
r([ l(cc.Node) ], e.prototype, "panelRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpDeletePhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnGetOtpRegisterPhone", void 0);
r([ l(cc.Button) ], e.prototype, "btnRegisterSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnRemovePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnUpdatePhoneSMSPlus", void 0);
r([ l(cc.Button) ], e.prototype, "btnBack", void 0);
r([ l(cc.Button) ], e.prototype, "btnDeleteMobile", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIEventBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "902523ic5hBB4yIcUG7XBpS", "GUIEventBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a, c, s = t("./ItemGiftBigBang"), p = t("./ItemRankBigBang"), l = t("./MVUtils"), u = cc._decorator, h = u.ccclass, f = u.property;
(function(t) {
t[t.DAY = 0] = "DAY";
t[t.FINAL = 1] = "FINAL";
})(a || (a = {}));
(function(t) {
t[t.RANK = 0] = "RANK";
t[t.GIFT = 1] = "GIFT";
t[t.RULE = 2] = "RULE";
})(c || (c = {}));
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.itemTempleRank = null;
e.itemTempleGift = null;
e.itemTempleDate = null;
e.listView = [];
e.ls_btn_tab_top = [];
e.ls_btn_tab_left = [];
e.lb_me = null;
e.dropDay = null;
e.lb_date = null;
return e;
}
e.prototype.start = function() {
this.itemTempleRank.active = !1;
this.itemTempleGift.active = !1;
this.itemTempleDate.active = !1;
this.lb_me.string = "";
this.lb_date.string = "Hôm nay";
this.loadListDate();
this.onClickTabLeft();
};
e.prototype.loadListRank = function(t) {
if (t) for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleRank).getComponent(p.default);
n.node.parent = this.listView[c.RANK].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListGift = function(t) {
for (var e = 0; e < t.length; e++) {
var n = cc.instantiate(this.itemTempleGift).getComponent(s.default);
n.node.parent = this.listView[c.GIFT].content;
n.node.active = !0;
n.setInfo(t[e], e + 1);
}
};
e.prototype.loadListDate = function() {
var t = new Date();
if (t.getDate() > 5) {
this.dropDay.node.height = 250;
this.dropDay.node.y = -150;
} else {
this.dropDay.node.height = 40 * t.getDate();
this.dropDay.node.y = 0 - this.dropDay.node.height / 2 - 25;
}
for (var e = t.getDate(); e >= 1; e--) {
var n = e < 10 ? "0" + e : e, o = t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1, i = t.getFullYear(), r = "" + i + o + n, a = cc.instantiate(this.itemTempleDate);
a.active = !0;
a.dataDate = r;
a.parent = this.dropDay.content;
a.getComponentInChildren(cc.Label).string = n + "/" + o + "/" + i;
var c = new cc.Component.EventHandler();
c.target = this.node;
c.component = "GUIEventBigBang";
c.handler = "onClickSelectDate";
a.getComponent(cc.Button).clickEvents = [ c ];
}
};
e.prototype.onClickSelectDate = function(t) {
this.listView[c.RANK].content.destroyAllChildren();
var e = t.target.dataDate, n = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPDaily", o = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
recallCode: e
};
this.reloadListRank(n, o);
var i = e.slice(0, 4), r = e.slice(4, 6), a = e.slice(6, 8);
new Date().getDate() == parseInt(a) ? this.lb_date.string = "Hôm nay" : this.lb_date.string = a + "/" + r + "/" + i;
this.dropDay.node.active = !1;
};
e.prototype.onClickDropDate = function() {
this.dropDay.node.active = !this.dropDay.node.active;
};
e.prototype.onClickTabTop = function() {
if (this.ls_btn_tab_top[1].isChecked) {
this.lb_date.node.parent.active = !1;
this.listView[c.RANK].content.destroyAllChildren();
var t = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetEventRaceVPMonthly", e = {
token: lngui.UserManager.instance.mainUserInfo.GameToken
};
this.reloadListRank(t, e);
} else {
this.lb_date.node.parent.active = !0;
this.onClickSelectDate({
target: this.dropDay.content.children[0]
}, "");
}
};
e.prototype.reloadListRank = function(t, e) {
var n = this;
l.MVUtils.get(t, e, function(t, e) {
if (t >= 200 && t < 400) {
n.loadListRank(e.LstEventHonors);
null == e.TotalVP ? n.lb_me.string = "Bạn chưa có hạng!" : null == e.TopNo ? n.lb_me.string = "Bạn chưa có hạng!" : n.lb_me.string = "Điểm của bạn <color=yellow>" + e.TotalVP + "</color>   Hạng <color=yellow>" + e.TopNo + "</color>";
} else console.log(e);
});
};
e.prototype.onClickTabLeft = function() {
var t = this;
this.listView[0].node.active = !1;
this.listView[1].node.active = !1;
this.listView[2].node.active = !1;
if (this.ls_btn_tab_left[0].isChecked) {
this.onClickTabTop();
this.listView[0].node.active = !0;
} else if (this.ls_btn_tab_left[1].isChecked) {
this.listView[1].node.active = !0;
this.listView[c.GIFT].content.destroyAllChildren();
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetDailyRewardList", n = {
token: lngui.UserManager.instance.mainUserInfo.GameToken
};
l.MVUtils.get(e, n, function(e, n) {
if (e >= 200 && e < 400) {
console.log("-=-=res gift   ", n);
n.List && t.loadListGift(n.List);
} else console.log(n);
});
} else this.listView[2].node.active = !0;
};
r([ f(cc.Node) ], e.prototype, "itemTempleRank", void 0);
r([ f(cc.Node) ], e.prototype, "itemTempleGift", void 0);
r([ f(cc.Node) ], e.prototype, "itemTempleDate", void 0);
r([ f([ cc.ScrollView ]) ], e.prototype, "listView", void 0);
r([ f([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_top", void 0);
r([ f([ cc.Toggle ]) ], e.prototype, "ls_btn_tab_left", void 0);
r([ f(cc.RichText) ], e.prototype, "lb_me", void 0);
r([ f(cc.ScrollView) ], e.prototype, "dropDay", void 0);
r([ f(cc.Label) ], e.prototype, "lb_date", void 0);
return r([ h ], e);
}(lngui.UIPopup);
n.default = d;
cc._RF.pop();
}, {
"./ItemGiftBigBang": "ItemGiftBigBang",
"./ItemRankBigBang": "ItemRankBigBang",
"./MVUtils": "MVUtils"
} ],
GUIEventX3Nap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e2c7a960IZIcLR8JtQsG2yn", "GUIEventX3Nap");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./ItemNapX3"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.template = null;
e.listView = null;
e.node_progress = null;
e.node_rule = null;
e.ls_btn_tab = [];
return e;
}
e.prototype.onEnable = function() {
var t = this;
this.template.active = !1;
this.listView.content.removeAllChildren();
c.MVUtils.get("https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetX3Infor", {}, function(e, n) {
e >= 200 && e < 400 && t.parseData(n);
});
};
e.prototype.parseData = function(t) {
console.log("-=-=parseData ", t);
if (1 == t.ResponseCode) {
for (var e = 0; e < t.List.length; e++) {
var n = cc.instantiate(this.template).getComponent(a.default);
n.node.active = !0;
n.updateInfo(t.List[e]);
n.node.parent = this.listView.content;
}
this.listView.vertical = t.List.length > 3;
}
};
e.prototype.onClickTab = function(t) {
for (var e = 0; e < this.ls_btn_tab.length; e++) {
var n = this.ls_btn_tab[e].children[0];
if (t.target === this.ls_btn_tab[e]) {
n.active = !0;
if (0 === e) {
this.node_progress.active = !0;
this.node_rule.active = !1;
} else {
this.node_progress.active = !1;
this.node_rule.active = !0;
}
} else n.active = !1;
}
};
r([ l(cc.Node) ], e.prototype, "template", void 0);
r([ l(cc.ScrollView) ], e.prototype, "listView", void 0);
r([ l(cc.Node) ], e.prototype, "node_progress", void 0);
r([ l(cc.Node) ], e.prototype, "node_rule", void 0);
r([ l([ cc.Node ]) ], e.prototype, "ls_btn_tab", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"./ItemNapX3": "ItemNapX3",
"./MVUtils": "MVUtils"
} ],
GUIGiftCode: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be5cKI7zJMq7+CMpvb7Ae2", "GUIGiftCode");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/CapchaZ"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.UICaptcha = null;
e.txtGiftCode = null;
e.txtCaptcha = null;
e.imgCaptcha = null;
e._codeType = 1;
return e;
}
e.prototype.initData = function(t, e) {
void 0 === e && (e = null);
this._codeType = a.LobbyConst.SETTING_ID.GIFT_CODE;
null != t && (this._codeType = t);
null != e && (this._uiid = e);
this.init();
};
e.prototype.init = function() {
var t = "";
this._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE && (t = a.LobbyConst.StringDefine.INPUT_GIFT_CODE);
this.txtGiftCode.placeholder = t;
this.onRefreshCaptchaClicked();
};
e.prototype.setGiftcodeText = function(t) {
this.txtGiftCode.string = t;
};
e.prototype.touchBtnGiftcode = function() {
var t, e = this, n = this.txtGiftCode.string;
n = n.replace(" ", "");
var o = this.txtCaptcha.string;
if (n.length <= 0) this._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE ? lngui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_GIFT_CODE) : this._codeType == a.LobbyConst.SETTING_ID.VIP_CODE ? lngui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_VIP_CODE) : this._codeType == a.LobbyConst.SETTING_ID.OTP && lngui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.INPUT_OTP); else {
lngui.UIWaitingLayout.showWaiting();
var i = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID,
accountName: lngui.UserManager.instance.mainUserInfo.UserName,
nickName: lngui.UserManager.instance.mainUserInfo.NickName,
giftcode: n,
captcha: o,
verifyCaptcha: this.UICaptcha.getCapChaId(),
uiid: this._uiid,
merchantKey: a.LobbyConst.MERCHANT_GIFTCODE.KEY,
merchantId: a.LobbyConst.MERCHANT_GIFTCODE.ID,
sourceId: a.LobbyConst.platform
}, r = a.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
});
t = a.LobbyConst.API.URL + a.LobbyConst.API.GIFT_CODE + r + a.LobbyConst.URL.Gate;
var c = cc.loader.getXMLHttpRequest();
c.onreadystatechange = function() {
if (4 == c.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == c.status) e._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE && e.onCheckGiftCode(c.responseText); else if (400 == c.status) {
lngui.UIPopupManager.instance.showPopup(c.responseText);
e.onRefreshCaptchaClicked();
} else if (e._codeType == a.LobbyConst.SETTING_ID.GIFT_CODE) {
lngui.UIPopupManager.instance.showPopup("Nhập GiftCode không thành công.\nVui lòng thử lại.");
e.onRefreshCaptchaClicked();
}
}
};
c.ontimeout = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
c.onerror = function() {
lngui.UIWaitingLayout.hideWaiting();
lngui.UIPopupManager.instance.showPopup(a.LobbyConst.StringDefine.STR_NETWORK_ERROR);
};
c.timeout = 3e4;
c.open("POST", t, !0);
c.setRequestHeader("Content-Type", "application/json");
c.withCredentials = !0;
c.send(JSON.stringify(i));
}
};
e.prototype.onCheckGiftCode = function(t) {
if (null != t) {
var e = JSON.parse(t);
if (e.Response >= 0) {
var n = "Chúc mừng bạn đã nhận được\n" + lngui.StringUtils.formatNumber(e.Response);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, e.Balance);
var o = [ lngui.PopupAction.make("OK", function() {}) ];
lngui.UIPopupManager.instance.showPopup(n, o);
}
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.refreshCapcha();
};
r([ l(c.default) ], e.prototype, "UICaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtGiftCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "txtCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "imgCaptcha", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/CapchaZ": "CapchaZ"
} ],
GUIOTP: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a890yymXtHIZDKEQ8N6vs+", "GUIOTP");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtOTP = null;
e.btnGetOtpSms = null;
e.otpToken = null;
e.serviceId = null;
e.otpType = 1;
return e;
}
e.prototype.initData = function(t, e) {
this.otpToken = t;
this.serviceId = e;
this.initUI();
};
e.prototype.initUI = function() {
this.otpType = 1;
};
e.prototype.getOTP = function() {
var t = this;
this.btnGetOtpSms.interactable = !1;
var e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_OTP_SMS;
3 == this.otpType && (e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_OTP_TRANFER);
this.scheduleOnce(function() {
t.btnGetOtpSms.interactable = !0;
}, 3);
lngui.Https.get(e, function(t) {
if (cc.js.isNumber(t)) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.touchXacThuc = function() {
var t = this, e = this.txtOTP.string;
if (0 != e.length) {
var n = {
Otp: e,
OtpType: this.otpType,
OtpToken: this.otpToken,
ServiceId: this.serviceId
}, o = a.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}), i = a.LobbyConst.API.URL + a.LobbyConst.API.CHECK_OTP + o;
lngui.UIWaitingLayout.showWaiting();
var r = cc.loader.getXMLHttpRequest();
r.onreadystatechange = function() {
if (4 == r.readyState) {
lngui.UIWaitingLayout.hideWaiting();
if (200 == r.status) {
lngui.UIPopupManager.instance.showPopup(r.responseText);
t.hide();
} else r.responseText.length > 0 ? lngui.UIPopupManager.instance.showPopup(r.responseText) : lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, Vui lòng thử lại!");
}
};
r.ontimeout = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công, kiểm tra kết nối internet của bạn!");
lngui.UIWaitingLayout.hideWaiting();
};
r.onerror = function() {
lngui.UIPopupManager.instance.showPopup("Kiểm tra OTP không thành công. Vui lòng thử lại!");
lngui.UIWaitingLayout.hideWaiting();
};
r.timeout = 3e4;
r.open("POST", i, !0);
r.setRequestHeader("Content-Type", "application/json");
r.withCredentials = !0;
r.send(JSON.stringify(n));
} else lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mã OTP");
};
r([ p(cc.EditBox) ], e.prototype, "txtOTP", void 0);
r([ p(cc.Button) ], e.prototype, "btnGetOtpSms", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUISettingCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eb28aej8ZpC7IBPcvjreNwP", "GUISettingCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.cbSound = null;
e.cbMusic = null;
return e;
}
e.prototype.onCbSound = function(t) {
lngui.AudioManager.instance.sfxVolume = t.isChecked ? 1 : 0;
};
e.prototype.onCbMusic = function(t) {
lngui.AudioManager.instance.musicVolume = t.isChecked ? 1 : 0;
};
e.prototype.onEnable = function() {
var t = lngui.ClientData.getNumber("music", 1), e = lngui.ClientData.getNumber("sfx", 1);
0 == t ? this.cbMusic.uncheck() : this.cbMusic.check();
0 == e ? this.cbSound.uncheck() : this.cbSound.check();
};
r([ s(cc.Toggle) ], e.prototype, "cbSound", void 0);
r([ s(cc.Toggle) ], e.prototype, "cbMusic", void 0);
return r([ c ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "e4903cXk/RKWIdtsKgPq6fc", "GUITopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./game_icon/BundleMiniGame"), s = t("./game_icon/BundleSceneGame"), p = t("./ItemTopJackpotCtrl"), l = t("./utils/Lobby_UITableView"), u = cc._decorator, h = u.ccclass, f = u.property, d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tbvJackpot = null;
e.listIconDownLoad = [];
e._dataOld = new Map();
e._data = [];
return e;
}
e.prototype.numberOfCellsInTableView = function() {
return this._data.length || 0;
};
e.prototype.tableCellAtIndex = function(t, e) {
var n = t.dequeueCell(), o = n.getComponent(p.default), i = this._data[e], r = this._dataOld.get(e);
r = r || 0;
o.lbJackpot.data = r;
o.lbJackpot.setString(lngui.StringUtils.formatNumber(r));
this._dataOld.set(e, this._data[e].jackpot);
o.setData(i.gameID, this._data[e].jackpot);
return n;
};
e.prototype.onTabbarSelected = function() {
if (this.tbvJackpot && this.tbvJackpot._isOnLoadCalled) {
this.refreshData();
this.tbvJackpot.reloadData();
this.tbvJackpot.scrollToTop(!1);
}
};
e.prototype.onEnable = function() {
this.tbvJackpot.dataSource = this;
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.on(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
this.onUpdateListJackpot();
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.onUpdateListJackpot, this);
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.onDownloadGameFromItem, this);
this.node.off(lngui.ControlEvent.TabbarItemSelected, this.onTabbarSelected, this);
};
e.prototype.onDownloadGameFromItem = function(t) {
this.listIconDownLoad.forEach(function(e) {
if (e) {
var n = e.getComponent(c.default) && e.getComponent(c.default).gameID, o = e.getComponent(s.default) && e.getComponent(s.default).gameID;
if (n && n == t || o && o == t) {
e.getComponent(c.default) && e.getComponent(c.default)._onClicked();
e.getComponent(s.default) && e.getComponent(s.default)._onClicked();
}
}
});
};
e.prototype.refreshData = function() {
var t = a.LobbyConst.slotByKeys;
this._data = [];
var e = [], n = Math.max(this.node.getComponent("UITabbarController").curSelectedIndex, 0);
t.forEach(function(t, o) {
t.length - 1 >= n && e.push({
gameID: o,
jackpot: t[n]
});
});
this._data = e.sort(function(t, e) {
return e.jackpot - t.jackpot;
});
};
e.prototype.onUpdateListJackpot = function() {
this.refreshData();
this.tbvJackpot.reloadData();
};
r([ f(l.default) ], e.prototype, "tbvJackpot", void 0);
r([ f(cc.Node) ], e.prototype, "listIconDownLoad", void 0);
return r([ h ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./ItemTopJackpotCtrl": "ItemTopJackpotCtrl",
"./game_icon/BundleMiniGame": "BundleMiniGame",
"./game_icon/BundleSceneGame": "BundleSceneGame",
"./utils/Lobby_UITableView": "Lobby_UITableView"
} ],
GUITopupBankFast: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0bbb8z3lUdLd7TSFTqNjZmX", "GUITopupBankFast");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.QR = null;
e.lbTimeRemain = null;
e.nodeInfoTransfer = null;
e.lbStk = null;
e.lbBankName = null;
e.lbAccName = null;
e.lbContent = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_IN + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, function(e) {
if (e) {
t.listBank = e;
t.bank = e[Math.floor(Math.random() * e.length)].Code;
t.onClickConfirm();
} else lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickConfirm = function() {
var t = this;
if (null != this.bank) {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_BANK + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, n = {
os: a.LobbyConst.platform,
amount: 6e4,
provider: this.bank
};
lngui.Https.post(e, n, function(e, n) {
if (n.ResponseCode < 0) lngui.UIPopupManager.instance.showPopup(n.Description); else if (n) {
t.lbStk.string = n.Data.BankNumber;
t.lbBankName.string = n.Data.BankName;
t.lbAccName.string = n.Data.BankAccountName;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
t.setTimeCountDown();
} else lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!");
};
e.prototype.setTimeCountDown = function() {
var t = this;
this.schedule(function() {
t.lbTimeRemain.string = t.timeRemain.toString();
t.timeRemain--;
}, 1, this.timeRemain);
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbStk.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QR.spriteFrame = e;
};
n.src = e;
};
r([ p(cc.Sprite) ], e.prototype, "QR", void 0);
r([ p(cc.Label) ], e.prototype, "lbTimeRemain", void 0);
r([ p(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ p(cc.Label) ], e.prototype, "lbStk", void 0);
r([ p(cc.Label) ], e.prototype, "lbBankName", void 0);
r([ p(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ p(cc.Label) ], e.prototype, "lbContent", void 0);
r([ p(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
GUITopupBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f998809LCRBorWJUmvHKdwm", "GUITopupBankManual");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank2.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbsender = null;
e.edbnote = null;
e.lbTypeBank = null;
e.lbAccountId = null;
e.lbAccountName = null;
e.lbContent = null;
e.nodeSpiner = null;
e.nodeInfoTransfer = null;
e.QR = null;
e.textanhienqr = null;
e.nodeguide = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_IN + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.Name;
}, function(e) {
t.lbTypeBank.string = e.Name;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
t.onClickConfirm();
});
this.nodeSpiner.node.y = 367;
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if (null != this.bank) {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_BANK + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, n = {
os: a.LobbyConst.platform,
amount: 15e4,
provider: this.bank
};
lngui.Https.post(e, n, function(e, n) {
if (n.ResponseCode < 0) lngui.UIPopupManager.instance.showPopup(n.Description); else if (n) {
t.lbAccountId.string = n.Data.BankNumber;
t.lbAccountName.string = n.Data.BankAccountName;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
} else lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!");
};
e.prototype.onClickNapTien = function() {
this.edbAmount.string && this.edbnote.string && this.edbsender.string ? lngui.UIPopupManager.instance.showPopup("Đã tạo phiếu nạp thành công") : lngui.UIPopupManager.instance.showPopup("Bạn cần nhập đầy đủ thông tin!");
};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbAccountId.string);
};
e.prototype.onClickCopyNoiDung = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.clickAnHienQr = function() {
if (1 == this.QR.node.active) {
this.QR.node.active = !1;
this.textanhienqr.string = "Hiện Qr Code";
this.textanhienqr.node.runAction(cc.moveTo(.3, cc.v2(-535, -235)));
} else {
this.QR.node.active = !0;
this.textanhienqr.string = "Ẩn Qr Code";
this.textanhienqr.node.runAction(cc.moveTo(.1, cc.v2(-535, -310)));
}
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 300;
n.height = 300;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QR.spriteFrame = e;
};
n.src = e;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbsender", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbnote", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountId", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccountName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Sprite) ], e.prototype, "QR", void 0);
r([ l(cc.Label) ], e.prototype, "textanhienqr", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6f83aop94JNioUx6gMraHaS", "GUITopupBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GuiTopupBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbAccountName = null;
e.QRCode = null;
e.lbTypeBank = null;
e.Timer = null;
e.nodeSpinerCode2 = null;
e.nodeDefault = null;
e.nodeInfoTransfer = null;
e.nodeEdbAmount = null;
e.lbStk = null;
e.lbBankName = null;
e.lbAccName = null;
e.lbContent = null;
e.lbAmount = null;
e.nodeguide = null;
e.nodeguide2 = null;
e.nodeUpdateInfo = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 6e4;
e.listBank = [];
e.timeRemain = 30;
e.timerBank = 1800;
e.countdownInterval = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeInfoTransfer.active = !1;
this.nodeUpdateInfo.active = !1;
this.onCheckInfoAccount();
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_IN + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onClickChooseBankCode = function() {
var t = this;
this.nodeSpinerCode2.node.active = !this.nodeSpinerCode2.node.active;
this.nodeSpinerCode2.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.Name;
}, function(e) {
t.lbTypeBank.string = e.Name;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
});
this.nodeSpinerCode2.node.y = 85;
};
e.prototype.onCheckInfoAccount = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_BANK_ACCOUNTINFO + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
e && (1 != e.Data.HasDeposit || e.Data.UserData || (t.nodeUpdateInfo.active = !0));
});
};
e.prototype.updateInfoAccount = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.UPDATE_BANK_ACCOUNTINFO, n = {
bankAccountName: this.edbAccountName.string
};
0 != c.MVUtils.isValidNameWithoutDiacritics(this.edbAccountName.string) ? c.MVUtils.post2(e, n, function(e, n) {
n && (t.nodeUpdateInfo.active = !1);
}) : lngui.UIPopupManager.instance.showPopup("Họ tên đầy đủ không chính xác");
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("HDB" == this.bank && c.MVUtils.toInt(this.edbAmount.string) < 15e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 150.000"); else if ("" != this.edbAmount.string) if (c.MVUtils.toInt(this.edbAmount.string) < 1e4 || c.MVUtils.toInt(this.edbAmount.string) > 3e8) lngui.UITextManager.showCenterNotification("Số tiền nạp tối thiểu là 10,000 và tối đa 300,000,000"); else {
this.amount = c.MVUtils.toInt(this.edbAmount.string);
if (null != this.bank) {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_BANK + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, n = {
os: a.LobbyConst.platform,
amount: this.amount,
provider: this.bank
};
lngui.Https.post(e, n, function(e, n) {
if (n.ResponseCode < 0) lngui.UIPopupManager.instance.showPopup(n.Description); else if (n) {
t.nodeDefault.active = !1;
t.lbStk.string = n.Data.BankNumber;
t.lbBankName.string = n.Data.BankName;
t.lbAccName.string = n.Data.BankAccountName;
t.lbAmount.string = t.edbAmount.string;
t.lbContent.string = n.Data.Content;
t.nodeInfoTransfer.active = !0;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
t.startCountdown();
}
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn ngân hàng!");
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.Timer.string = "QR code hết hạn sau " + this.longToTime(this.timerBank);
this.countdownInterval = setInterval(function() {
t.timerBank--;
if (t.timerBank >= 0) t.Timer.string = "QR code hết hạn sau " + t.longToTime(t.timerBank); else {
clearInterval(t.countdownInterval);
t.onBtnHuyBo();
}
}, 1e3);
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e + "s";
};
e.prototype.onClickCancel = function() {
var t = this, e = [ lngui.PopupAction.make("OK", function() {
t.onBtnHuyBo();
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn muốn đổi ngân hàng khác?", e);
};
e.prototype.onBtnHuyBo = function() {
clearInterval(this.countdownInterval);
this.nodeDefault.active = !0;
this.nodeInfoTransfer.active = !1;
this.edbAmount.string = "";
this.lbTypeBank.string = "Chọn ngân hàng";
this.bank = null;
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbStk.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.clickAnHienQr = function() {};
e.prototype.onDestroy = function() {
clearInterval(this.countdownInterval);
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QRCode.spriteFrame = e;
};
n.src = e;
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAccountName", void 0);
r([ l(cc.Sprite) ], e.prototype, "QRCode", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.Label) ], e.prototype, "Timer", void 0);
r([ l(u) ], e.prototype, "nodeSpinerCode2", void 0);
r([ l(cc.Node) ], e.prototype, "nodeDefault", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeEdbAmount", void 0);
r([ l(cc.Label) ], e.prototype, "lbStk", void 0);
r([ l(cc.Label) ], e.prototype, "lbBankName", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Label) ], e.prototype, "lbAmount", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide2", void 0);
r([ l(cc.Node) ], e.prototype, "nodeUpdateInfo", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32701gpeuBPPb09K5EcN62J", "GUITopupCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(lngui.UIPopup));
n.default = s;
cc._RF.pop();
}, {} ],
GUITopupEWallet: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ed3c3pD0dI3oRCO5rUdcbj", "GUITopupEWallet");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupEWallet.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.nodeInfoTransfer = null;
e.nodeEdbAmount = null;
e.nodeguide = null;
e.Timer = null;
e.lbSdt = null;
e.lbAccName = null;
e.lbContent = null;
e.QRCode = null;
e._verifyCaptcha = null;
e.bank = null;
e.amount = 0;
e.listBank = [];
e.timeRemain = 30;
e.timerOTP = 1800;
e.countdownInterval = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeInfoTransfer.active = !1;
this.nodeEdbAmount.active = !0;
};
e.prototype.start = function() {};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAmount.string) if (c.MVUtils.toInt(this.edbAmount.string) < 1e4) lngui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10.000"); else if (c.MVUtils.toInt(this.edbAmount.string) > 1e7) lngui.UIPopupManager.instance.showPopup("Số tiền tối đa là 10.000.000"); else {
var e = a.LobbyConst.API.URL + a.LobbyConst.API.MOMO_REQUEST + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, n = {
os: a.LobbyConst.platform,
amount: this.amount,
type: "momo"
};
lngui.Https.post(e, n, function(e, n) {
if (1 == n.ResponseCode) {
if (n) {
t.nodeInfoTransfer.active = !0;
t.nodeEdbAmount.active = !1;
t.lbSdt.string = n.Data.Banknumber;
t.lbAccName.string = n.Data.Bankname;
t.lbContent.string = n.Data.Content;
var o = n.Data.QrCode;
o = o.replace(/\r\n/g, "");
t.loadImgBinary(o);
t.startCountdown();
}
} else lngui.UIPopupManager.instance.showPopup(n.Description);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập số tiền!");
};
e.prototype.onClickCancel = function() {
var t = this, e = [ lngui.PopupAction.make("OK", function() {
t.onBtnHuyBo();
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn muốn hủy giao dịch này?", e);
};
e.prototype.onclickDaChuyen = function() {
lngui.UIPopupManager.instance.showPopup("Đã tạo phiếu nạp thành công");
this.onBtnHuyBo();
};
e.prototype.onBtnHuyBo = function() {
this.nodeInfoTransfer.active = !1;
this.nodeEdbAmount.active = !0;
this.edbAmount.string = "";
clearInterval(this.countdownInterval);
};
e.prototype.onClickCopySTK = function() {
lngui.PlatformInterface.copy(this.lbSdt.string);
};
e.prototype.onClickCopyContent = function() {
lngui.PlatformInterface.copy(this.lbContent.string);
};
e.prototype.clearInput = function() {
this.bank = null;
this.edbAmount.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QRCode.spriteFrame = e;
};
n.src = e;
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.Timer.string = "QR code hết hạn sau " + this.longToTime(this.timerOTP);
this.countdownInterval = setInterval(function() {
t.timerOTP--;
if (t.timerOTP >= 0) t.Timer.string = "QR code hết hạn sau " + t.longToTime(t.timerOTP); else {
clearInterval(t.countdownInterval);
t.onBtnHuyBo();
}
}, 1e3);
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e + "s";
};
e.prototype.onDestroy = function() {
clearInterval(this.countdownInterval);
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.Node) ], e.prototype, "nodeInfoTransfer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeEdbAmount", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
r([ l(cc.Label) ], e.prototype, "Timer", void 0);
r([ l(cc.Label) ], e.prototype, "lbSdt", void 0);
r([ l(cc.Label) ], e.prototype, "lbAccName", void 0);
r([ l(cc.Label) ], e.prototype, "lbContent", void 0);
r([ l(cc.Sprite) ], e.prototype, "QRCode", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupExchange: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fefcdRa9qVKjLiaLguJ46lr", "GUITopupExchange");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TabCashCard = n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupExchange.Spinner") ], t);
}();
n.Spinner = u;
var h = function() {
function t() {
this.step1 = null;
this.sprCaptcha = null;
this._verifyCaptcha = null;
}
t.prototype.setInfo = function() {};
r([ l(cc.Node) ], t.prototype, "step1", void 0);
r([ l(cc.Sprite) ], t.prototype, "sprCaptcha", void 0);
return r([ p("GuiTopupExchange.TabCashCard") ], t);
}();
n.TabCashCard = h;
var f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpiner = null;
e.tabCashCard = null;
e.lbTypeCard = null;
e.lbRequiredChip = null;
e.lbValue = null;
e.sprCaptcha = null;
e.edbCaptcha = null;
e.pnlOTPVerify = null;
e.edbOTPVerify = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.nodeguide = null;
e.listProvider = [];
e.listCardRate = [];
e.provider = null;
e.currentCardValue = 0;
return e;
}
e.prototype.onLoad = function() {
var t = this;
0 == this.listProvider.length && lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.CARD_TYPE + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.listProvider = e.Data;
});
0 == this.listCardRate.length && lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.RATE_CARD + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
console.log(e.Data[0]);
console.log(e.Data[0].LstCashInDisplay);
if (e) {
var n = e.Data[0].LstCashInDisplay.filter(function(t) {
return t.Amount >= 2e5;
});
t.listCardRate = n;
}
t.ExchangeRate = e.Data[0].ExchangeRate;
t.loadListTiGia();
});
this.provider = "VT";
};
e.prototype.loadListTiGia = function() {
for (var t = this.listCardRate, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblBalance").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount * this.ExchangeRate);
}
};
e.prototype.onClickChangeProvider = function(t, e) {
this.provider = e;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpiner.type = 1;
this.nodeSpiner.thisNode.active = !this.nodeSpiner.thisNode.active;
this.nodeSpiner.thisNode.y = 270;
this.nodeSpiner.setInfo(this.listCardRate, function(t, e) {
t.getComponentInChildren(cc.Label).string = c.MVUtils.formatNumber(e.Amount);
}, function(e) {
console.log(e);
t.lbValue.string = c.MVUtils.formatNumber(e.Amount);
t.currentCardValue = e.Amount;
t.lbRequiredChip.string = c.MVUtils.formatNumber(e.Amount * t.ExchangeRate);
});
};
e.prototype.onClickConfirmExChange = function() {
var t = this;
if (0 != this.currentCardValue) {
var e = "";
"VT" == this.provider && (e = "VTT");
"Vina" == this.provider && (e = "VNP");
"Mobi" == this.provider && (e = "VMS");
var n = {
provider: e,
type: 0,
captchaText: this.edbCaptcha.string,
captchaToken: this.sprCaptcha.getComponent("CapchaZ").getCapChaId(),
amount: this.currentCardValue,
merchantId: 1,
sourceId: 1,
quantity: 1
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.MUA_THE, n, function(e, n) {
if (e >= 200 && e < 400) {
t.data = n;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardType").getComponent(cc.Label).string = t.provider;
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.currentCardValue);
t.pnlOTPVerify.getChildByName("pnlContent").getChildByName("lblBigDoi").getComponent(cc.Label).string = t.lbRequiredChip.string;
t.pnlOTPVerify.active = !0;
t.tabCashCard.step1.active = !1;
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Xin vui lòng chọn mệnh giá!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2001
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Rút thẻ thành công\nVui lòng đợi NPH duyệt!");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.currentCardValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnHuy = function() {
this.tabCashCard.step1.active = !0;
this.pnlOTPVerify.active = !1;
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(h) ], e.prototype, "tabCashCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbRequiredChip", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "pnlOTPVerify", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryAllGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "62760o5vXBKybXWQZVvHxI1", "GUITopupHistoryAllGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
e.listHistory = [];
return e;
}
e.prototype.onLoad = function() {
var t = this, e = {
accountId: lngui.UserManager.instance.mainUserInfo.AccountID
};
lngui.UIWaitingLayout.showWaiting();
c.MVUtils.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY_ALLGAME, e, function(e, n) {
lngui.UIWaitingLayout.hideWaiting();
e >= 200 && e < 400 ? t.loadListHistory(n) : console.log("err===>", n);
});
};
e.prototype.loadListHistory = function(t) {
var e;
this.listHistory = t;
for (var n = 0; n < this.listHistory.length; n++) {
var o = this.listHistory[n], i = this.scrHistory.content.children[n];
if (!i) {
i = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(i);
}
i.active = !0;
var r = o.CreatedTime, a = o.betValue, s = o.Amount < 0 ? o.Amount : o.Amount - a;
r = (r = r.replace("T", "\n")).substring(0, r.indexOf("."));
i.getChildByName("lblThoiGian").getComponent(cc.Label).string = r;
i.getChildByName("lblGame").getComponent(cc.Label).string = o.ServiceName;
i.getChildByName("lblBetValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(a);
i.getChildByName("lblWinValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(s);
i.getChildByName("lblMoney").getComponent(cc.Label).string = c.MVUtils.formatNumber(o.SubAmount);
(null === (e = null == o ? void 0 : o.Description) || void 0 === e ? void 0 : e.length) > 29 && (o.Description = o.Description.substring(0, 29) + "...");
i.getChildByName("lblNote").getComponent(cc.Label).string = o.Description;
}
};
e.prototype.start = function() {};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryBankManual: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9e60OJcYNGzbGLDcRuAlka", "GUITopupHistoryBankManual");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY_BANKMANUAL + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
t.loadListHistory(e.Data);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreatedDate;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.BankName;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(n.Amount);
-1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = n.Reason : 1 == n.Status ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.Status && (o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ duyệt");
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryNap: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0f1edg/gHBB44ZE3KZnNhOB", "GUITopupHistoryNap");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
t.loadListHistory(e);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
var i = n.CreateTime;
i = (i = i.replace("T", "\n")).substring(0, i.indexOf("."));
o.getChildByName("lblGD").getComponent(cc.Label).string = n.Id;
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
1 == n.InOut ? o.getChildByName("lblCardType").getComponent(cc.Label).string = n.Type : o.getChildByName("lblCardType").getComponent(cc.Label).string = "Rút " + ("Bank" == n.Type ? "Internet\nBanking" : n.Type);
o.getChildByName("lblGate").getComponent(cc.Label).string = n.Provider;
1 == n.InOut && 1 != n.Status ? o.getChildByName("lblCardValue").getComponent(cc.Label).string = "" : o.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(n.Amount);
o.getChildByName("lblStatus").getComponent(cc.Label).string = n.StatusString;
-1 != n.Status && 4 != n.Status && 5 != n.Status || (o.getChildByName("lblStatus").color = cc.Color.RED);
-1 == n.Status && 1 == n.InOut && (o.getChildByName("lblNote").getComponent(cc.Label).string = "Hệ thống chưa nhận được tiền, quý khách vui lòng liên hệ CSKH");
o.getChildByName("lblNote").getComponent(cc.Label).string = n.Result;
o.getChildByName("line").active = !0;
o.getChildByName("bgline").active = !!(e % 2);
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupHistoryRut: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8469c0qIoFMaIBwMQGjt0eo", "GUITopupHistoryRut");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.scrHistory = null;
e.itemTemplate = null;
return e;
}
e.prototype.onLoad = function() {
this.requestHistory();
};
e.prototype.requestHistory = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.LIST_HISTORY + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&inOut=2";
lngui.Https.get(e, function(e) {
t.loadListHistory(e);
});
};
e.prototype.loadListHistory = function(t) {
this.scrHistory.content.removeAllChildren(!0);
if (t && 0 != t.length) {
t = t.filter(function(t) {
return 2 == t.InOut;
});
for (var e = 0; e < t.length; e++) {
var n = t[e], o = this.scrHistory.content.children[e];
if (!o) {
o = cc.instantiate(this.itemTemplate);
this.scrHistory.content.addChild(o);
}
o.active = !0;
o.getChildByName("lblSTT").getComponent(cc.Label).string = n.Id;
var i = n.CreateTime;
i = (i = i.replace("T", " ")).substring(0, i.indexOf("."));
o.getChildByName("lblTime").getComponent(cc.Label).string = i;
o.getChildByName("lblCardType").getComponent(cc.Label).string = n.Type;
o.getChildByName("lblCardValue").getComponent(cc.Label).string = c.MVUtils.formatNumber(n.Amount);
"Từ chối" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Từ chối" : "Thành công" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Thành công" : "Đang chờ" == n.StatusString ? o.getChildByName("lblStatus").getComponent(cc.Label).string = "Đang chờ" : o.getChildByName("lblStatus").getComponent(cc.Label).string = n.StatusString;
}
}
};
e.prototype.onCBXClick = function() {
this.requestHistory();
};
r([ l(cc.ScrollView) ], e.prototype, "scrHistory", void 0);
r([ l(cc.Node) ], e.prototype, "itemTemplate", void 0);
return r([ p ], e);
}(lngui.UIPopup);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupRutBank: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "773aePSP/pNJZowO2fOnd+Y", "GUITopupRutBank");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.node = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.node.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "node", void 0);
return r([ p("GUITopupRutBank.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSoTk = null;
e.edbChuTaiKhoan = null;
e.nodeSpiner = null;
e.lbTypeBank = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e.nodeguide = null;
e.PopupOTP = null;
e.BtnGetOTp = null;
e.NodeTimerOtp = null;
e.Timeer = null;
e.nodeUpdateInfo = null;
e.edbAccountName = null;
e._verifyCaptcha = null;
e.bank = null;
e.listBank = [];
e.timerOTP = 180;
e.countdownInterval = null;
e.NeedUpdate = !1;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.nodeUpdateInfo.active = !1;
this.onCheckInfoAccount();
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.LIST_BANK_OUT + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + a.LobbyConst.URL.Gate, function(e) {
e ? t.listBank = e : lngui.UIPopupManager.instance.showPopup("Có lỗi xảy ra");
});
};
e.prototype.start = function() {};
e.prototype.onCheckInfoAccount = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_BANK_ACCOUNTINFO + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
if (e) {
if (null == e.Data.UserData) return;
t.NeedUpdate = e.Data.UserData.NeedUpdate;
t.edbChuTaiKhoan.string = e.Data.UserData.BankAccountName;
t.edbChuTaiKhoan.enabled = !1;
}
});
};
e.prototype.updateInfoAccount = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.UPDATE_BANK_ACCOUNTINFO, n = {
bankAccountName: this.edbAccountName.string
};
0 != c.MVUtils.isValidNameWithoutDiacritics(this.edbAccountName.string) ? c.MVUtils.post2(e, n, function(e, n) {
if (n) {
t.nodeUpdateInfo.active = !1;
t.NeedUpdate = !1;
}
}) : lngui.UIPopupManager.instance.showPopup("Họ tên đầy đủ không chính xác");
};
e.prototype.onClickChooseBank = function() {
var t = this;
this.nodeSpiner.node.active = !this.nodeSpiner.node.active;
this.nodeSpiner.setInfo(this.listBank, function(t, e) {
t.getComponentInChildren(cc.Label).string = e.ShortName;
}, function(e) {
t.lbTypeBank.string = e.ShortName;
t.lbTypeBank.node.color = cc.Color.WHITE;
t.bank = e.Code;
});
this.nodeSpiner.node.y = 435;
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(",").join("")) < 2e5) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000"); else if (parseInt(this.edbAmount.string.split(",").join("")) > 3e8) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 300,000,000"); else if (1 != c.MVUtils.isValidString(this.edbAmount.string)) if (1 != c.MVUtils.isValidString(this.edbSoTk.string)) if (1 != c.MVUtils.isValidString(this.edbChuTaiKhoan.string)) if (1 != this.NeedUpdate) {
this._verifyCaptcha = "";
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: c.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSoTk.string,
bankAccountName: c.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.data.OtpToken = o.OtpToken;
t.onClickVerifyOTP();
} else lngui.UIPopupManager.instance.showPopup(o);
});
} else this.nodeUpdateInfo.active = !0; else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Số Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền số tiền");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else {
lngui.UIPopupManager.instance.showPopup(n);
t.onClickRefreshCaptcha();
}
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onEnded = function() {
var t = this;
setTimeout(function() {
var e = c.MVUtils.toInt(t.edbAmount.string);
e = Math.abs(e);
t.edbAmount.string = c.MVUtils.formatNumber(e);
}, 500);
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.requestOTP = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_OTP;
c.MVUtils.post2(e, {
type: "cashout"
}, function(e, n) {
n && t.startCountdown();
});
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.BtnGetOTp.active = !1;
this.NodeTimerOtp.active = !0;
this.Timeer.string = this.longToTime(this.timerOTP);
this.countdownInterval = setInterval(function() {
t.timerOTP--;
if (t.timerOTP >= 0) t.Timeer.string = t.longToTime(t.timerOTP); else {
clearInterval(t.countdownInterval);
t.resetPuOtp();
}
}, 1e3);
};
e.prototype.resetPuOtp = function() {
clearInterval(this.countdownInterval);
this.timerOTP = 180;
this.BtnGetOTp.active = !0;
this.NodeTimerOtp.active = !1;
this.edbOTPVerify.string = "";
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return "0" + parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e + "s";
};
e.prototype.onClickHuy = function() {
this.layoutOTP.active = !1;
this.onClickRefreshCaptcha();
this.resetPuOtp();
};
e.prototype.clearInput = function() {
this.edbCaptcha.string = "";
this.edbSoTk.string = "";
this.edbAmount.string = "0";
this.edbOTPVerify.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
e.prototype.locTenBank = function(t) {
var e = t.match(/\((.*?)\)/g);
return e ? e.map(function(t) {
return t.slice(1, -1);
}) : [];
};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSoTk", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(u) ], e.prototype, "nodeSpiner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeBank", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
r([ l(cc.Node) ], e.prototype, "PopupOTP", void 0);
r([ l(cc.Node) ], e.prototype, "BtnGetOTp", void 0);
r([ l(cc.Node) ], e.prototype, "NodeTimerOtp", void 0);
r([ l(cc.Label) ], e.prototype, "Timeer", void 0);
r([ l(cc.Node) ], e.prototype, "nodeUpdateInfo", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAccountName", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTelco: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d4303PCXcRKZrcQyq2peaWg", "GUITopupTelco");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.Spinner = void 0;
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function() {
function t() {
this.container = null;
this.itemTemplate = null;
this.thisNode = null;
this.type = -1;
}
t.prototype.setInfo = function(t, e, n) {
var o = this;
this.container.children.forEach(function(t) {
t.active = !1;
});
for (var i = function(i) {
var a = r.container.children[i];
a || ((a = cc.instantiate(r.itemTemplate)).parent = r.container);
a.active = !0;
e(a, t[i]);
a.off(cc.Node.EventType.TOUCH_END);
a.on(cc.Node.EventType.TOUCH_END, function() {
n(t[i]);
o.thisNode.active = !1;
});
}, r = this, a = 0; a < t.length; a++) i(a);
};
r([ l(cc.Node) ], t.prototype, "container", void 0);
r([ l(cc.Node) ], t.prototype, "itemTemplate", void 0);
r([ l(cc.Node) ], t.prototype, "thisNode", void 0);
return r([ p("GuiTopupTelco.Spinner") ], t);
}();
n.Spinner = u;
var h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeSpinner = null;
e.lbTypeCard = null;
e.lbValue = null;
e.tiGiaContainer = null;
e.itemTiGiaTemplate = null;
e.edbCaptcha = null;
e.edbCardCode = null;
e.edbCardSeri = null;
e.sprCaptcha = null;
e.nodeguide = null;
e.currentMenhGia = 0;
e.provider = null;
e._verifyCaptcha = "";
e.listProvider = [];
e.currentRateProvider = {};
e.rateCard = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.RATE_CARD + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
t.rateCard = e.Data[0];
});
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.CARD_TYPE + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(e) {
if (1 == e.ResponseCode) {
console.log(e.Data);
t.listProvider = e.Data;
t.currentRateProvider = t.listProvider[0];
}
t.loadListTiGia();
});
this.provider = "VT";
};
e.prototype.onClickChangeProvider = function(t, e) {
this.provider = e;
};
e.prototype.onClickValue = function() {
var t = this;
this.nodeSpinner.type = 1;
this.nodeSpinner.thisNode.active = !this.nodeSpinner.thisNode.active;
this.nodeSpinner.thisNode.y = 372;
var e = this.rateCard.LstCashInDisplay;
this.nodeSpinner.setInfo(e, function(e, n) {
"VT" == t.provider ? e.getComponentInChildren(cc.Label).string = "Viettel " + c.MVUtils.formatNumber(n.Amount) : "Vina" == t.provider ? e.getComponentInChildren(cc.Label).string = "Vina " + c.MVUtils.formatNumber(n.Amount) : e.getComponentInChildren(cc.Label).string = "Mobi " + c.MVUtils.formatNumber(n.Amount);
}, function(e) {
cc.log("onClickValue");
"VT" == t.provider ? t.lbValue.string = "Viettel " + c.MVUtils.formatNumber(e.Amount) : "Vina" == t.provider ? t.lbValue.string = "Vina " + c.MVUtils.formatNumber(e.Amount) : t.lbValue.string = "Mobi " + c.MVUtils.formatNumber(e.Amount);
t.currentMenhGia = e.Amount;
});
};
e.prototype.loadListTiGia = function() {
for (var t = this.currentRateProvider.List, e = 0; e < t.length; e++) {
var n = this.tiGiaContainer.children[e];
n || ((n = cc.instantiate(this.itemTiGiaTemplate)).parent = this.tiGiaContainer);
n.getChildByName("lblAmout").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].Amount);
n.getChildByName("lblNo").getComponent(cc.Label).string = c.MVUtils.formatNumber(t[e].AmountReceive);
n.getChildByName("icMoney");
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if (0 != this.currentMenhGia) if (null != this.provider) if ("" != this.edbCardCode.string && "" != this.edbCardSeri.string) {
this._verifyCaptcha = this.sprCaptcha.node.getComponent("CapchaZ").getCapChaId();
var e = this.edbCardSeri.string, n = this.edbCardCode.string, o = this.edbCaptcha.string, i = {
cardType: this.provider,
cardSerial: e,
amount: this.currentMenhGia,
cardPin: n,
captcha: o,
CardUserAmount: this.currentMenhGia,
verify: this._verifyCaptcha,
os: a.LobbyConst.platform
};
cc.log("Body==", JSON.stringify(i));
var r = a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_CARD + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.post(r, i, function(e, n) {
200 != e && 0 != n.ResponseCode || t.clearInput();
t.onClickResetCaptcha();
lngui.UIPopupManager.instance.showPopup(n.Description);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn loại thẻ!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng chọn mệnh giá thẻ!");
};
e.prototype.onClickResetCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.clearInput = function() {
this.onClickResetCaptcha();
this.provider = null;
this.currentMenhGia = 0;
this.lbTypeCard.string = "Chọn nhà mạng";
this.lbValue.string = "Chọn mệnh giá";
this.edbCaptcha.string = "";
};
e.prototype.clickshowguide = function() {
this.nodeguide.active = !0;
};
e.prototype.clickhideguide = function() {
this.nodeguide.active = !1;
};
r([ l(u) ], e.prototype, "nodeSpinner", void 0);
r([ l(cc.Label) ], e.prototype, "lbTypeCard", void 0);
r([ l(cc.Label) ], e.prototype, "lbValue", void 0);
r([ l(cc.Node) ], e.prototype, "tiGiaContainer", void 0);
r([ l(cc.Node) ], e.prototype, "itemTiGiaTemplate", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardCode", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCardSeri", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Node) ], e.prototype, "nodeguide", void 0);
return r([ p ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUITopupTienAo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0bc0f7hiKNE/7hZ02YmsWod", "GUITopupTienAo");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.start = function() {};
e.prototype.onClickCopy = function() {
lngui.PlatformInterface.copy(this.label.string);
};
r([ s(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GUITopupTranfers: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5f9XP3mtEer426/J4XmR4", "GUITopupTranfers");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbTVN = null;
e.edbReTVN = null;
e.edbAmount = null;
e.edbCaptcha = null;
e.edbAccountInfo = null;
e.sprCaptcha = null;
e.lbFee = null;
e.lbBigReceive = null;
e.scrView = null;
e.transferLayer = null;
e.otpLayer = null;
e.edbOTPVerify = null;
e.listAgency = [];
e.amount = 0;
e._verifyCaptcha = "";
return e;
}
e.prototype.onLoad = function() {};
e.prototype.start = function() {};
e.prototype.loadListAgency = function() {
for (var t = 0; t < this.listAgency.length; t++) {
var e = this.scrView.content.children[t], n = this.listAgency[t];
if (!e) {
e = cc.instantiate(this.scrView.content.children[0]);
this.scrView.content.addChild(e);
}
e.active = !0;
e.getChildByName("lbStt").getComponent(cc.Label).string = t + 1 + "";
e.getChildByName("lbName").getComponent(cc.Label).string = n.StaffName;
e.getChildByName("lbNickName").getComponent(cc.Label).string = n.NickName;
}
};
e.prototype.onClickConfirm = function() {
var t = this;
if ("" != this.edbAccountInfo.string && "" != this.edbAmount.string && "" != this.edbReTVN.string && "" != this.edbTVN.string) if (this.edbTVN.string == this.edbReTVN.string) {
var e = this.edbAccountInfo.string;
this.data = {
accountIdTrans: lngui.UserManager.instance.mainUserInfo.AccountID,
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: this.amount,
nickNameRecv: this.edbReTVN.string,
sourceId: a.LobbyConst.platform,
captchaText: this.edbCaptcha.string,
captchaToken: "",
transferType: 0,
Otp: this.edbOTPVerify.string,
OtpType: 1,
reason: e
};
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.REQUEST_TRANSFER, this.data, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo.Money = n;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
t.clearInput();
} else lngui.UIPopupManager.instance.showPopup(n);
});
} else lngui.UIPopupManager.instance.showPopup("Vui lòng xác minh lại tên nhân vật!"); else lngui.UIPopupManager.instance.showPopup("Vui lòng nhập đủ thông tin!");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2002
}, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UIPopupManager.instance.showPopup("Chuyển khoản thành công");
t.transferLayer.active = !0;
t.otpLayer.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
t.clearInput();
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
this.edbCaptcha.string = "";
};
e.prototype.onClickSendOTPSMS = function() {};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.amount = t;
this.edbAmount.string = c.MVUtils.formatNumber(t);
this.lbFee.string = c.MVUtils.formatNumber(Math.floor(.02 * t));
this.lbBigReceive.string = c.MVUtils.formatNumber(Math.floor(1.02 * t));
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickHuy = function() {
this.transferLayer.active = !0;
this.otpLayer.active = !1;
this.onClickRefreshCaptcha();
};
e.prototype.clearInput = function() {
this.edbCaptcha.string = "";
this.edbTVN.string = "";
this.edbCaptcha.string = "";
this.edbReTVN.string = "";
this.edbAmount.string = "0";
this.edbOTPVerify.string = "";
this.edbAccountInfo.string = "";
this.lbBigReceive.string = "0";
this.lbFee.string = "0";
};
r([ l(cc.EditBox) ], e.prototype, "edbTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbReTVN", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbAccountInfo", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.Label) ], e.prototype, "lbFee", void 0);
r([ l(cc.Label) ], e.prototype, "lbBigReceive", void 0);
r([ l(cc.ScrollView) ], e.prototype, "scrView", void 0);
r([ l(cc.Node) ], e.prototype, "transferLayer", void 0);
r([ l(cc.Node) ], e.prototype, "otpLayer", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
GUIUpdateDisplayName: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "034b8Kz6f1Gk4jn9VbUoqSY", "GUIUpdateDisplayName");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./utils/CapchaZ"), p = t("./autologin/CheckAndSaveToken"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbNickName = null;
e.edbCaptcha = null;
e.UICaptcha = null;
return e;
}
e.prototype.onAcceptClicked = function() {
var t = this, e = this.edbNickName.string;
this.edbCaptcha.string;
if (e.length < 6 || e.length > 16 || e.indexOf(" ") > 0 || e.indexOf("@") > 0 || e === lngui.UserManager.instance.mainUserInfo.NickName) lngui.UIPopupManager.instance.showPopup("Tên người chơi phải từ 6 - 15 ký tự, viết liền không dấu, không trùng tên tài khoản, không chứa ký tự đặc biệt!"); else {
var n = {
fullName: this.edbNickName.string,
captcha: this.edbCaptcha.string,
captchaToken: this.UICaptcha.getComponent(s.default).getCapChaId(),
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
c.MVUtils.get(a.LobbyConst.API.URL + a.LobbyConst.API.UPDATE_DISPLAYNAME, n, function(e, n) {
if (e >= 200 && e < 400) {
lngui.UserManager.instance.mainUserInfo = n;
p.default.saveData(lngui.UserManager.instance.mainUserInfo.GameToken);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.hide();
} else {
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
}
};
e.prototype.onRefreshCaptchaClicked = function() {
this.UICaptcha.getComponent(s.default).refreshCapcha();
};
r([ h(cc.EditBox) ], e.prototype, "edbNickName", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ h(cc.Node) ], e.prototype, "UICaptcha", void 0);
return r([ u ], e);
}(lngui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken",
"./utils/CapchaZ": "CapchaZ"
} ],
GateJackpotNoti: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "367a3lByDhFzIpqOJuHzIje", "GateJackpotNoti");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNameNick = null;
e.lbGameName = null;
e.lbMoneyWin = null;
e.lbTime = null;
e.timeSche = null;
return e;
}
e.prototype.showJackpot = function(t, e) {
var n = this;
void 0 === e && (e = 5);
this.lbNameNick.string = t.NickName;
this.lbGameName.string = t.GameName;
this.lbMoneyWin.string = lngui.StringUtils.formatNumber(t.JackpotValue);
cc.Tween.stopAllByTarget(this.node);
cc.tween(this.node).set({
x: 0,
y: -200
}).to(1, {
x: 0,
y: 0
}, {
easing: cc.easing.backOut
}).delay(e).to(1, {
y: cc.winSize.height / 2 + 500
}, {
easing: cc.easing.backIn
}).call(function() {
n.node.active = !1;
}).start();
this.unschedule(this.timeSche);
this.lbTime.string = e.toString();
this.schedule(this.timeSche = function() {
e--;
n.lbTime.string = e.toString();
}, 1, e + 2);
};
e.prototype.hideJackpot = function() {};
e.prototype.onClickXinLoc = function() {};
r([ s(cc.Label) ], e.prototype, "lbNameNick", void 0);
r([ s(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ s(cc.Label) ], e.prototype, "lbMoneyWin", void 0);
r([ s(cc.Label) ], e.prototype, "lbTime", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GateSettingPopup: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ab674brdgFE/IvGLzEgsLaf", "GateSettingPopup");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodesp = null;
e.nodebtn = null;
return e;
}
e.prototype.shownodesp = function() {
this.nodesp.active = !0;
this.nodebtn.active = !0;
};
e.prototype.hidenodesp = function() {
this.nodesp.active = !1;
this.nodebtn.active = !1;
};
r([ s(cc.Node) ], e.prototype, "nodesp", void 0);
r([ s(cc.Node) ], e.prototype, "nodebtn", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GetVersion: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c172e16X2tKarPwmWb5BlAc", "GetVersion");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
return e;
}
e.prototype.start = function() {
this.label.string = lngui.ConfigManager.instance.ConfigInfo.Version;
};
r([ s(cc.Label) ], e.prototype, "label", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
GuiTopupRutMomo: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3ab46hpQlJGOqMVrJBMlUzb", "GuiTopupRutMomo");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAmount = null;
e.edbSDT = null;
e.edbChuTaiKhoan = null;
e.edbCaptcha = null;
e.sprCaptcha = null;
e.edbOTPVerify = null;
e.layoutCastOut = null;
e.layoutOTP = null;
e._verifyCaptcha = null;
e.bank = null;
return e;
}
e.prototype.onLoad = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.start = function() {
this.bank = "momo";
};
e.prototype.onClickRutTien = function() {
var t = this;
if (parseInt(this.edbAmount.string.split(".").join("")) < 2e5) lngui.UIPopupManager.instance.showPopup("Số tiền rút tối thiểu là 200,000 Gold"); else if ("" != this.edbSDT.string) if ("" != this.edbChuTaiKhoan.string) if ("" != this.edbCaptcha.string) {
this._verifyCaptcha = this.sprCaptcha.getComponent("CapchaZ").getCapChaId();
this.data = {
nickNameTrans: lngui.UserManager.instance.mainUserInfo.NickName,
transferValue: c.MVUtils.toInt(this.edbAmount.string),
sourceId: 1,
captchaText: this.edbCaptcha.string,
captchaToken: this._verifyCaptcha,
bankAccountNumber: this.edbSDT.string,
bankAccountName: c.MVUtils.removeVietnameseTones(this.edbChuTaiKhoan.string).toUpperCase(),
bankCode: this.bank,
transferType: 0
};
var e = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CAST_OUT, this.data, function(n, o) {
if (200 == n) {
e.layoutOTP.getChildByName("lblUsername").getComponent(cc.Label).string = t.data.bankAccountName;
e.layoutOTP.getChildByName("lblReceiveQuay").getComponent(cc.Label).string = c.MVUtils.formatNumber(t.data.transferValue);
e.layoutOTP.getChildByName("lblReason").getComponent(cc.Label).string = t.data.bankAccountNumber + " - " + t.bank;
e.layoutCastOut.active = !1;
e.layoutOTP.active = !0;
e.data.OtpToken = o.OtpToken;
} else lngui.UIPopupManager.instance.showPopup(o);
});
} else lngui.UIPopupManager.instance.showPopup("Nhập mã kiểm tra"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Chủ Tài Khoản"); else lngui.UIPopupManager.instance.showPopup("Vui lòng điền Số Điện Thoại");
};
e.prototype.onClickVerifyOTP = function() {
var t = this;
c.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.CHECK_OTP, {
Otp: this.edbOTPVerify.string,
OtpType: 1,
OtpToken: this.data.OtpToken,
ServiceId: 2005
}, function(e, n) {
if (200 == e) {
lngui.UIPopupManager.instance.showPopup("Tạo lệnh rút tiền thành công");
t.layoutCastOut.active = !0;
t.layoutOTP.active = !1;
lngui.UserManager.instance.mainUserInfo.Money = lngui.UserManager.instance.mainUserInfo.Money - t.data.transferValue;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onClickRefreshCaptcha = function() {
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onEdbChange = function() {
var t = c.MVUtils.toInt(this.edbAmount.string);
t = Math.abs(t);
this.edbAmount.string = c.MVUtils.formatNumber(t);
cc.sys.isBrowser && this.edbAmount.focus();
};
e.prototype.onClickHuy = function() {
this.layoutCastOut.active = !0;
this.layoutOTP.active = !1;
this.sprCaptcha.node.getComponent("CapchaZ").refreshCapcha();
};
e.prototype.onClickSendOTPSMS = function() {};
r([ l(cc.EditBox) ], e.prototype, "edbAmount", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbSDT", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbChuTaiKhoan", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ l(cc.Sprite) ], e.prototype, "sprCaptcha", void 0);
r([ l(cc.EditBox) ], e.prototype, "edbOTPVerify", void 0);
r([ l(cc.Node) ], e.prototype, "layoutCastOut", void 0);
r([ l(cc.Node) ], e.prototype, "layoutOTP", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
HeaderAccountCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "096b2vP0exLPLpcCyZGPD5R", "HeaderAccountCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbNickName = null;
e.nMail = null;
e.lbMail = null;
e.NodeText = [];
e.lbGold = null;
e.lbVippoint = null;
e.listText = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.USER_MAIL, this.requestMail, this);
this.onTextRandom();
};
e.prototype.onDestroy = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME, this.onUpdateInfo, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_GOLD, this.onUpdateGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateTotalGold, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.UPDATE_VIPPOINT, this.onUpDateVipPoint, this);
};
e.prototype.requestMail = function() {
var t = this, e = a.LobbyConst.API.URL + a.LobbyConst.API.GET_UNREAD_MAIL + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken;
lngui.Https.get(e, function(e) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(e));
if (e) if (e.Count) {
lngui.UITextManager.showCenterNotification("Bạn có Mail chưa đọc");
t.nMail.active = !0;
t.lbMail.string = e.Count;
} else {
t.nMail.active = !1;
t.lbMail.string = "";
}
});
};
e.prototype.onUpdateTotalGold = function(t) {
lngui.UserManager.instance.mainUserInfo.Money = t;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpdateGold = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money;
this.lbGold.scheduleProgress(t);
};
e.prototype.onUpDateVipPoint = function() {
var t = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbVippoint.scheduleProgress(t);
};
e.prototype.onUpdateInfo = function() {
var t = lngui.UserManager.instance.mainUserInfo.Money, e = lngui.UserManager.instance.mainUserInfo.VipPoint;
this.lbNickName.string = lngui.UserManager.instance.mainUserInfo.NickName;
this.lbGold.scheduleProgress(t);
e && this.lbVippoint.scheduleProgress(e);
};
e.prototype.onTestUpdateGold = function() {
lngui.ZLog.log("onTestUpdateGold===>");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, 1e6);
};
e.prototype.onTextRandom = function() {
var t = this;
this.schedule(function() {
t.NodeText.forEach(function(t) {
1 == t.active && (t.active = !1);
});
var e = Math.floor(Math.random() * t.NodeText.length);
t.NodeText[e].active = !0;
}, 3);
};
var n;
e._instance = null;
r([ l(cc.Label) ], e.prototype, "lbNickName", void 0);
r([ l(cc.Node) ], e.prototype, "nMail", void 0);
r([ l(cc.Label) ], e.prototype, "lbMail", void 0);
r([ l(cc.Node) ], e.prototype, "NodeText", void 0);
r([ l(c.default) ], e.prototype, "lbGold", void 0);
r([ l(c.default) ], e.prototype, "lbVippoint", void 0);
return n = r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
HeaderCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1a51eW1XyhOt6qP45H4JoA1", "HeaderCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nAccount = null;
e.nLogin = null;
e.nLoginMobile = null;
return e;
}
e.prototype.onEnable = function() {
lngui.ZLog.log("HeaderCtrl ===================" + lngui.GameCoreManager.instance.isLoginSuccess);
this.nAccount.active = lngui.GameCoreManager.instance.isLoginSuccess;
if (cc.sys.isMobile && !cc.sys.isBrowser) {
this.nLoginMobile.active = !lngui.GameCoreManager.instance.isLoginSuccess;
this.nLogin.active = !1;
} else {
this.nLogin.active = !lngui.GameCoreManager.instance.isLoginSuccess;
this.nLoginMobile.active = !1;
}
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSucess, this);
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.onLogout, this);
};
e.prototype.onLoginSucess = function() {
this.nAccount.active = !0;
if (cc.sys.isMobile && !cc.sys.isBrowser) {
this.nLoginMobile.active = !1;
this.nLogin.active = !1;
} else {
this.nLoginMobile.active = !1;
this.nLogin.active = !1;
}
};
e.prototype.onLogout = function() {
this.nAccount.active = !1;
if (cc.sys.isMobile && !cc.sys.isBrowser) {
this.nLoginMobile.active = !0;
this.nLogin.active = !1;
} else {
this.nLoginMobile.active = !1;
this.nLogin.active = !0;
}
};
e.prototype.onClickFacebook = function() {
a.MVUtils.onFacebook();
};
e.prototype.onLogoutClicked = function() {
var t = [ lngui.PopupAction.make("OK", function() {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
}), lngui.PopupAction.make("CLOSE", function() {}) ];
lngui.UIPopupManager.instance.showPopup("Bạn có chắc chắn muốn thoát khỏi trò chơi?", t);
};
r([ p(cc.Node) ], e.prototype, "nAccount", void 0);
r([ p(cc.Node) ], e.prototype, "nLogin", void 0);
r([ p(cc.Node) ], e.prototype, "nLoginMobile", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
IconAnGameScene: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "713c7rEt+dImrqM9bJdxfnG", "IconAnGameScene");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Sắp ra mắt!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconAnGame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2c0fbSn7stCHqz3in00fODx", "IconAnGame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
this.isTest && this._countOpenGame >= this.numOfClick ? t.prototype._onClicked.call(this) : lngui.UIPopupManager.instance.showPopup("Đang bảo trì!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconBanCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "49b12s81Z9HvaYra2eUWGet", "IconBanCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
IconMiniPoker: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "95b79PfFo9Fc6If94sDzKYo", "IconMiniPoker");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTaiXiu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ff069evfzhDJK5I8Yp0OMyo", "IconMiniTaiXiu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconMiniTomCuaCa: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "67e00FaupRPvIof7YcGKiTO", "IconMiniTomCuaCa");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleMiniGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleMiniGame": "BundleMiniGame"
} ],
IconTestGameCards: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0e089P3sfFL1qVUaxzipJ2G", "IconTestGameCards");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./BundleSceneGame"), c = cc._decorator, s = c.ccclass, p = (c.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._countOpenGame = 0;
return e;
}
e.prototype._onClicked = function() {
if (this.isTest && this._countOpenGame >= this.numOfClick) {
t.prototype._onClicked.call(this);
lngui.GameCoreManager.instance.setGameID(this.gameID);
} else lngui.UIPopupManager.instance.showPopup("Game Sắp Ra Mắt!");
this._countOpenGame++;
};
return r([ s ], e);
}(a.default));
n.default = p;
cc._RF.pop();
}, {
"./BundleSceneGame": "BundleSceneGame"
} ],
ItemGiftBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "7ffcdMNs9pMkKnSNkPVasCw", "ItemGiftBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_title = null;
e.label_money = null;
e.icon_gift = null;
e.ls_icon_gift = [];
e.btn_recive = null;
e.ls_rank = [ "Giải nhất", "Giải nhì", "Giải ba" ];
e.dataItem = null;
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t) {
this.dataItem = t;
this.label_title.string = "";
this.icon_gift.spriteFrame = this.ls_icon_gift[t.Type - 1];
1 == t.Type ? this.label_money.string = "" : this.label_money.string = t.PrizeDescription;
this.btn_recive.interactable = !t.IsAward;
};
e.prototype.onClickRecive = function() {
var t = this, e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/RaceDailyVPReward", n = {
token: lngui.UserManager.instance.mainUserInfo.GameToken,
EventPrizeId: this.dataItem.EventPrizeID
};
a.MVUtils.post(e, n, function(e, n) {
console.log("-=ress     ", n);
if (e >= 200 && e < 400 && 1 == n.ResponseCode) {
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
t.btn_recive.interactable = !1;
}
lngui.UIPopupManager.instance.showPopup(n.Message);
});
};
r([ p(cc.Label) ], e.prototype, "label_title", void 0);
r([ p(cc.Label) ], e.prototype, "label_money", void 0);
r([ p(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_icon_gift", void 0);
r([ p(cc.Button) ], e.prototype, "btn_recive", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemMail: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6ee50OxiEBBh5EcEWrRQnEV", "ItemMail");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./GUIAccountMail"), s = t("./MVUtils"), p = cc._decorator, l = p.ccclass, u = p.property, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbTitle = null;
e.btnXoaMail = null;
e.lbTime = null;
e.lbNew = null;
e.idMail = -1;
e.mailType = null;
e.link = null;
e.giftcode = !1;
return e;
}
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.readMail(t.idMail);
});
};
e.prototype.readMail = function(t) {
var e = this, n = {
Type: 2,
MailID: t
};
s.MVUtils.post(a.LobbyConst.API.URL + a.LobbyConst.API.READ_MAIL, n, function(t, n) {
t >= 200 && t < 400 ? 1 == n.ResponseCode ? e.lbNew.node.active = !1 : lngui.UIPopupManager.instance.showPopup(n.Message) : lngui.UIPopupManager.instance.showPopup(n);
});
};
e.prototype.onBtnXoaMail = function(t, e) {
s.MVUtils.post(a.LobbyConst.API.DEL_MAIL, {
Type: -1,
MailID: e
}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UITextManager.showCenterNotification("Xóa thành công!");
c.default.instance.requestMail();
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
e.prototype.initData = function(t) {
this.idMail = t.ID;
this.mailType = t.Type;
1 == t.Status ? this.lbNew.node.active = !0 : this.lbNew.node.active = !1;
this.lbTitle.string = t.Title;
this.lbTime.string = s.MVUtils.formatDateTime(t.CreatedTime);
};
e.prototype.onClickMailDetail = function(t, e) {
c.default.instance.mailList.active = !0;
c.default.instance.mailDetail.active = !0;
c.default.instance.initMailContent(e);
};
r([ u(cc.Label) ], e.prototype, "lbTitle", void 0);
r([ u(cc.Button) ], e.prototype, "btnXoaMail", void 0);
r([ u(cc.Label) ], e.prototype, "lbTime", void 0);
r([ u(cc.Sprite) ], e.prototype, "lbNew", void 0);
return r([ l ], e);
}(cc.Component);
n.default = h;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./GUIAccountMail": "GUIAccountMail",
"./MVUtils": "MVUtils"
} ],
ItemNapX3: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "32e11V+jIBA1bZe3TguE4Eq", "ItemNapX3");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./MVUtils"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.icon = null;
e.label_gold = null;
e.label_reward = null;
e.sp_progress = null;
e.lb_progress = null;
e.btn_confirm = null;
e.lb_status = null;
e.node_gift = null;
e.ls_sf_icon = [];
e.dataItem = {
$id: "3",
Amount: 0,
PrizeValue: 0,
Progress: 0,
RechargeType: 2,
RemainTime: 0,
Status: 0
};
return e;
}
e.prototype.updateInfo = function(t) {
this.dataItem = t;
this.icon.spriteFrame = this.ls_sf_icon[this.dataItem.RechargeType - 1];
this.lb_progress.string = this.dataItem.Progress + "%";
this.sp_progress.fillRange = this.dataItem.Progress / 100;
this.label_gold.string = a.MVUtils.formatNumber(this.dataItem.Amount);
this.label_reward.string = a.MVUtils.formatNumber(this.dataItem.PrizeValue);
this.lb_status.string = [ "Hết hạn", "Chưa hoàn thành", "Đang trong tiến trình", "Hoàn thành", "Đã nhận thưởng" ][this.dataItem.Status + 1];
cc.Tween.stopAllByTarget(this.node_gift);
if (100 == this.dataItem.Progress && 2 == this.dataItem.Status) {
this.node_gift.color = cc.Color.WHITE;
cc.tween(this.node_gift).repeatForever(cc.tween().by(.2, {
y: 10
}, {
easing: cc.easing.sineIn
}).by(.2, {
y: -10
}, {
easing: cc.easing.sineIn
})).start();
} else {
this.node_gift.color = cc.Color.GRAY;
this.btn_confirm.node.color = cc.Color.GRAY;
}
};
e.prototype.onClickConfirm = function() {
var t = this, e = this.dataItem.RechargeType, n = this.dataItem.Status;
if (-1 != n) if (0 != n) if (1 != n) {
if (2 == n) a.MVUtils.post("https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/api/Event/GetX3Reward", {
RechargeType: e
}, function(e, n) {
if (1 == n.ResponseCode) {
t.node_gift.color = cc.Color.GRAY;
t.btn_confirm.node.color = cc.Color.GRAY;
cc.Tween.stopAllByTarget(t.node_gift);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, n.Balance);
}
lngui.UIPopupManager.instance.showPopup(n.Message);
}); else if (3 == n) {
lngui.UITextManager.showCenterNotification("Bạn đã nhận thưởng rồi");
return;
}
} else lngui.UITextManager.showCenterNotification("Hãy hoàn thành tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Hãy bắt đầu tiến trình nạp"); else lngui.UITextManager.showCenterNotification("Phần thưởng đã hết hạn");
};
r([ p(cc.Sprite) ], e.prototype, "icon", void 0);
r([ p(cc.Label) ], e.prototype, "label_gold", void 0);
r([ p(cc.Label) ], e.prototype, "label_reward", void 0);
r([ p(cc.Sprite) ], e.prototype, "sp_progress", void 0);
r([ p(cc.Label) ], e.prototype, "lb_progress", void 0);
r([ p(cc.Button) ], e.prototype, "btn_confirm", void 0);
r([ p(cc.Label) ], e.prototype, "lb_status", void 0);
r([ p(cc.Node) ], e.prototype, "node_gift", void 0);
r([ p([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./MVUtils": "MVUtils"
} ],
ItemRankBigBang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "10769ZX8kFJib/g5p0RYBCs", "ItemRankBigBang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label_rank = null;
e.icon_rank = null;
e.label_name = null;
e.label_point = null;
e.label_gift = null;
e.icon_gift = null;
e.ls_sf_icon_rank = [];
e.ls_sf_icon_gift = [];
return e;
}
e.prototype.start = function() {};
e.prototype.setInfo = function(t, e) {
this.label_rank.string = e + "";
this.icon_rank.node.active = e <= 3;
e <= 3 && (this.icon_rank.spriteFrame = this.ls_sf_icon_rank[e - 1]);
this.label_name.string = t.GameAccountName;
this.label_point.string = t.TotalVPString;
if (t.Type >= 6) {
this.label_gift.string = t.PrizeDescription;
this.icon_gift.node.active = !1;
} else {
this.label_gift.string = "";
this.icon_gift.node.active = !0;
this.icon_gift.spriteFrame = this.ls_sf_icon_gift[t.Type - 1];
}
};
r([ s(cc.Label) ], e.prototype, "label_rank", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_rank", void 0);
r([ s(cc.Label) ], e.prototype, "label_name", void 0);
r([ s(cc.Label) ], e.prototype, "label_point", void 0);
r([ s(cc.Label) ], e.prototype, "label_gift", void 0);
r([ s(cc.Sprite) ], e.prototype, "icon_gift", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_rank", void 0);
r([ s([ cc.SpriteFrame ]) ], e.prototype, "ls_sf_icon_gift", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ItemTopJackpotCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c7e213v/PZHe6KcAMZ6T63a", "ItemTopJackpotCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lbJackpot = null;
e.lbGameName = null;
e.spIcon = null;
e.icontayduky = null;
e.iconankhe = null;
e.iconcunghi = null;
e.iconkbtl = null;
e.iconngulong = null;
e.iconsttt = null;
e.icontw = null;
e.iconthantai = null;
e.iconbaucuato = null;
e.icontrenduoi = null;
e.iconbanca = null;
e.iconMiniPoker = null;
e.iconXeng777 = null;
e.m_IdGame = -1;
return e;
}
e.prototype.updateGoldJackpot = function(t) {
this.lbJackpot.scheduleProgress(t, .5);
};
e.prototype.setData = function(t, e) {
this.m_IdGame = t;
switch (t) {
case a.GAME_IDS.ANKHE:
this.lbGameName.string = "Ăn Khế Trả Vàng";
this.spIcon.spriteFrame = this.iconankhe;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.TDK:
this.lbGameName.string = "Tây Du Ký";
this.spIcon.spriteFrame = this.icontayduky;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.TW:
this.lbGameName.string = "The Witcher";
this.spIcon.spriteFrame = this.icontw;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.THANTAI:
this.lbGameName.string = "Thần Tài";
this.spIcon.spriteFrame = this.iconthantai;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.STTT:
this.lbGameName.string = "Sơn Tinh Thủy Tinh";
this.spIcon.spriteFrame = this.iconsttt;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.KBTL:
this.lbGameName.string = "Kho Báu Tứ Linh";
this.spIcon.spriteFrame = this.iconkbtl;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.NGULONG:
this.lbGameName.string = "Ngũ Long";
this.spIcon.spriteFrame = this.iconngulong;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.MINIPOKER:
this.lbGameName.string = "MiniPoker";
this.spIcon.spriteFrame = this.iconMiniPoker;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.BAUCUATO:
this.lbGameName.string = "Bầu Cua";
this.spIcon.spriteFrame = this.iconbaucuato;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.BANCA:
this.lbGameName.string = "Bắn Cá";
this.spIcon.spriteFrame = this.iconbanca;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.ET:
this.lbGameName.string = "Kim Cương";
this.spIcon.spriteFrame = this.iconXeng777;
this.updateGoldJackpot(e);
break;

case a.GAME_IDS.XEDIEN:
this.lbGameName.string = "Trên Dưới";
this.spIcon.spriteFrame = this.icontrenduoi;
this.updateGoldJackpot(e);
}
};
e.prototype.onShowGameClicked = function() {
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT, this.m_IdGame);
};
r([ l(c.default) ], e.prototype, "lbJackpot", void 0);
r([ l(cc.Label) ], e.prototype, "lbGameName", void 0);
r([ l(cc.Sprite) ], e.prototype, "spIcon", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontayduky", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconankhe", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconcunghi", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconkbtl", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconngulong", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconsttt", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontw", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconthantai", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconbaucuato", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "icontrenduoi", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconbanca", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconMiniPoker", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "iconXeng777", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
JackpotBySlot: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "44997m/iLpMhYzy9a4OvCNb", "JackpotBySlot");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./utils/Lobby_UINumericLabelHelper"), s = cc._decorator, p = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.gameID = a.GAME_IDS.NONE;
e.lbJackpot1 = null;
e.lbJackpot2 = null;
e.lbJackpot3 = null;
e.NodeHistory = null;
e.sprdot = [];
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT, this.updateJackpot, this);
};
e.prototype.updateJackpot = function() {
var t, e = this;
a.LobbyConst.slotByKeys.forEach(function(n, o) {
o != e.gameID || (t = n);
});
if (t) {
if (this.gameID > 90) for (var n = 0; n < t.length; n++) {
t[n] || (t[n] = this.getRandomInt(51231242, 822512512));
4 == t.length ? this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[3], 8) : this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t[2], 8);
1 == n ? this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t[n], 8) : 0 == n && this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t[n], 8);
} else {
this.lbJackpot2 && this.lbJackpot2.scheduleProgress(t.TotalBetValue1 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot1 && this.lbJackpot1.scheduleProgress(t.TotalBetValue2 * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
this.lbJackpot3 && this.lbJackpot3.scheduleProgress(t.JackpotFund * lngui.ConfigManager.instance.ConfigInfo.RateMultiple, 2);
}
this.updateHistory();
}
};
e.prototype.updateHistory = function() {
var t, e = this, n = a.LobbyConst.history;
if (this.NodeHistory) switch (this.gameID) {
case 89:
if (n.TAIXIU) {
t = n.TAIXIU.split(",");
this.NodeHistory.children.forEach(function(n, o) {
e.sprdot[t[o]] && (n.getComponent(cc.Sprite).spriteFrame = e.sprdot[t[o]]);
});
}
break;

case 90:
if (n.TAIXIU_MD5) {
t = n.TAIXIU_MD5.split(",");
this.NodeHistory.children.forEach(function(n, o) {
e.sprdot[t[o]] && (n.getComponent(cc.Sprite).spriteFrame = e.sprdot[t[o]]);
});
}
break;

case 521:
if (n.TAIXIU_LIVE) {
t = n.TAIXIU_LIVE.split(",");
this.NodeHistory.children.forEach(function(n, o) {
e.sprdot[t[o]] && (n.getComponent(cc.Sprite).spriteFrame = e.sprdot[t[o]]);
});
}
break;

case 333:
if (n.XOCDIA) {
t = n.XOCDIA.split(",");
this.NodeHistory.children.forEach(function(n, o) {
e.sprdot[t[o]] && (n.getComponent(cc.Sprite).spriteFrame = e.sprdot[t[o]]);
});
}
break;

case 522:
if (n.XOCDIA_LIVE) {
t = n.XOCDIA_LIVE.split(",");
this.NodeHistory.children.forEach(function(n, o) {
e.sprdot[t[o]] && (n.getComponent(cc.Sprite).spriteFrame = e.sprdot[t[o]]);
});
}
}
};
e.prototype.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t + 1)) + t;
};
r([ l({
type: cc.Enum(a.GAME_IDS)
}) ], e.prototype, "gameID", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot1", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot2", void 0);
r([ l(c.default) ], e.prototype, "lbJackpot3", void 0);
r([ l(cc.Node) ], e.prototype, "NodeHistory", void 0);
r([ l(cc.SpriteFrame) ], e.prototype, "sprdot", void 0);
return r([ p ], e);
}(cc.Component);
n.default = u;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./utils/Lobby_UINumericLabelHelper": "Lobby_UINumericLabelHelper"
} ],
ListAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0fc7K5UWJBqpSTf7mQ58Hg", "ListAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ListSpriteAvatar = [];
return e;
}
r([ s(cc.SpriteFrame) ], e.prototype, "ListSpriteAvatar", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LoadSpriteFromUrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "80af4ZrImBDkL1P3GOpfwXc", "LoadSpriteFromUrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.sprite = null;
e.url = "";
return e;
}
e.prototype.onLoad = function() {
var t = this, e = this.url;
this.loadImageFromUrl(e).then(function(e) {
t.setSpriteFromBase64(e);
}).catch(function(t) {
console.error("Lỗi rồi đại ca ơi: ", t);
});
};
e.prototype.loadImageFromUrl = function(t) {
return new Promise(function(e, n) {
var o = new XMLHttpRequest();
o.open("GET", t, !0);
o.responseType = "arraybuffer";
o.onload = function() {
if (200 === this.status) {
for (var t = this.response, o = new Uint8Array(t), i = "", r = 0; r < o.byteLength; r++) i += String.fromCharCode(o[r]);
var a = "data:image/png;base64," + window.btoa(i);
e(a);
} else n(new Error("Failed to load image. Status: " + this.status));
};
o.onerror = function() {
n(new Error("Failed to load image from URL"));
};
o.send();
});
};
e.prototype.setSpriteFromBase64 = function(t) {
var e = this;
console.log("Load được rồi đại ca ơi");
var n = new Image();
n.src = t;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var o = new cc.SpriteFrame(t);
e.sprite.spriteFrame = o;
};
};
r([ s(cc.Sprite) ], e.prototype, "sprite", void 0);
r([ s ], e.prototype, "url", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbAudioDefined: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "590f2JSWmRPELkqE/Ra6jXp", "LobbAudioDefined");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.music_bgm = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
var n;
e._instance = null;
r([ s(cc.AudioClip) ], e.prototype, "music_bgm", void 0);
return n = r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
LobbyConst: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6b25cz4Ct5PVrB3sRlPhBbp", "LobbyConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.getStringBodyByObject = n.GAME_IDS = n.LobbyConst = n.Platform = void 0;
var o;
(function(t) {
t[t.INVALID = 0] = "INVALID";
t[t.ANDROID = 1] = "ANDROID";
t[t.WINDOWS = 2] = "WINDOWS";
t[t.IOS = 3] = "IOS";
t[t.WEB = 4] = "WEB";
t[t.MAC = 5] = "MAC";
})(o = n.Platform || (n.Platform = {}));
var i = function() {
function t() {}
Object.defineProperty(t, "platform", {
get: function() {
var t = o.INVALID;
cc.sys.isBrowser ? t = o.WEB : cc.sys.os == cc.sys.OS_ANDROID ? t = o.ANDROID : cc.sys.os == cc.sys.OS_IOS ? t = o.IOS : cc.sys.os == cc.sys.OS_WINDOWS ? t = o.WINDOWS : cc.sys.os == cc.sys.OS_OSX ? t = o.MAC : lngui.ZLog.log("Unsupport platform");
return t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t, "OSName", {
get: function() {
return cc.sys.isBrowser ? "web" : cc.sys.os == cc.sys.OS_ANDROID ? "android" : cc.sys.os == cc.sys.OS_OSX || cc.sys.os == cc.sys.OS_IOS ? "ios" : void 0;
},
enumerable: !1,
configurable: !0
});
t.BUILD_VERSION = "v_23_23072021_";
t.usernameRegEx = /^(?:[A-Za-z0-9_.@]{6,32})$/;
t.passwordRegEx = /^(?:[A-Za-z0-9~!@#$%^&*()_+`\-=\[\]{};':"\\|,.<>\/?]{6,35})$/;
t.slotByKeys = new Map();
t.history = [];
t.listEventByDay = [];
t.timerSMS = 30;
t.MERCHANT_GIFTCODE = {
ID: 100011,
KEY: "123456"
};
t.URL = {
Gate: "&gate=" + lngui.ConfigManager.instance.ConfigInfo.Gate
};
t.API = {
URL: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/",
LOGIN: "user/login",
REGISTRY: "user/createAccount",
GET_INFO_ACCOUNT: "Account/Vp",
UPDATE_DISPLAYNAME: "Account/UpdateUserFullName",
UPDATE_AVATAR: "Account/updateAvatar",
CHANGE_PASS: "Account/ChangePass",
CHECK_OTP: "Privacy/VerifyOTP",
GET_INFO_OTP: "Account/GetInfo?",
REGISTER_OTP: "Account/RegisterOTP",
DELETE_MOBILE: "Account/deleteMobile",
UPDATE_MOBILE: "Account/updateMobile",
GET_OTP: "Account/sendOtpTele",
REG_MOBILE: "Account/registerOTP",
GET_OTP_SMS: "Account/getOTPSMS",
GET_OTP_TRANFER: "Account/getOTPSMSTranfer",
GET_FROZEB: "Account/getFrozen?",
FROZEB: "Account/frozen",
GIFT_CODE: "Account/GiftCode",
LOGIN_VIP_CODE: "Account/LoginVipcode",
VIP_POINT_TRADE: "Account/VipPointTrade",
VIP_POINT_RANK: "Account/getRankingVip",
CAST_OUT: "payment/TransferCashout",
DELETE_PHONE: "Account/deleteMobile",
GET_BANK_ACCOUNTINFO: "payment/GetBankAccountInfo",
UPDATE_BANK_ACCOUNTINFO: "payment/MapBankAccount",
LIST_BANK_IN: "payment/GetListBankIn",
LIST_BANK_OUT: "payment/GetListBankOut",
REQUEST_BANK: "payment/BankRequest",
MOMO_REQUEST: "payment/MomoRequest",
RATE_CARD: "payment/GetChargeRate",
REQUEST_CASH_IN: "payment/rechargecard",
REQUEST_CARD: "payment/CardRequest",
CARD_TYPE: "payment/GetCardTypes",
LIST_AGENCY: "Agency/GetAgencies",
REQUEST_TRANSFER: "payment/Transfer",
MOMO_INFO: "payment/MomoGetAccount",
LIST_HISTORY: "payment/UserCashHistory",
LIST_HISTORY_BANKMANUAL: "payment/GetManualBankRequestHistory",
LIST_HISTORY_ALLGAME: "payment/getTransactionLogs",
GET_UNREAD_MAIL: "Mail/MailUnRead",
GET_LIST_MAIL: "Mail/GetUserMail",
READ_MAIL: "Mail/UpdateStatus",
DEL_MAIL: "Mail/UpdateStatus",
MUA_THE: "payment/muaThe",
OTP_RESET_PASSWORD: "Account/GetOTPResetPassword",
RESET_PASSWORD: "Account/ResetPassword"
};
t.EVENT_NAME = {
BUNDLEMINI_DOWNLOAD_SUCCESS: "BUNDLEMINI_DOWNLOAD_SUCCESS",
BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT: "BUNDLE_DOWNLOAD_FROM_ITEM_JACKPOT",
EVENT_UPDATE_JACKPOT: "EVENT_UPDATE_JACKPOT",
CHANGE_TAB_UI: "CHANGE_TAB_UI",
GET_LIST_MAIL: "GET_LIST_MAIL",
GET_DETAIL_MAIL: "GET_DETAIL_MAIL",
EVENT_DETAIL_MAIL: "notify_detail_mail",
USER_MAIL: "UserMail",
NEW_MAIL: "notifyNewMail",
COUNT_MAIL_MAIN: "count_mail0",
SHOW_BANNER_PROMOTION: "SHOW_BANNER_PROMOTION",
REQUEST_EVENT_RANK: "REQUEST_EVENT_RANK",
NOTIFY_SYSTEM: "NOTIFY_SYSTEM"
};
t.SETTING_ID = {
SMSPLUS_REGISTER_TYPE: 1,
SMSPLUS_DEL_OTP_TYPE: 3,
SMSPLUS_INFO: 1,
SMSPLUS_REGISTER: 2,
SMSPLUS_DEL_PHONE: 5,
FROZEN: 1,
UNFROZEN: 2,
GIFT_CODE: 1,
VIP_CODE: 2,
OTP: 3
};
t.StringDefine = {
INPUT_GIFT_CODE: "Vui lòng nhập GiftCode",
INPUT_VIP_CODE: "Vui lòng nhập VipCode",
INPUT_OTP: "Vui lòng nhập mã OTP",
STR_NETWORK_ERROR: "Mạng không ổn định, hãy kiểm tra Wifi hoặc 3G của bạn."
};
return t;
}();
n.LobbyConst = i;
(function(t) {
t[t.NONE = -1] = "NONE";
t[t.THANTAI = 5001] = "THANTAI";
t[t.TDK = 103] = "TDK";
t[t.NGULONG = 514] = "NGULONG";
t[t.CUNGHI = 512] = "CUNGHI";
t[t.STTT = 511] = "STTT";
t[t.XEDIEN = 999] = "XEDIEN";
t[t.ET = 115] = "ET";
t[t.TW = 513] = "TW";
t[t.KBTL = 1235] = "KBTL";
t[t.BIMAT = 515] = "BIMAT";
t[t.MEOTAILOC = 516] = "MEOTAILOC";
t[t.TRENDUOI = 517] = "TRENDUOI";
t[t.CHOTET = 518] = "CHOTET";
t[t.BAUCUATO = 519] = "BAUCUATO";
t[t.AVIATOR = 520] = "AVIATOR";
t[t.LINHCHAUTY = 525] = "LINHCHAUTY";
t[t.BMW = 526] = "BMW";
t[t.BONGDA = 7007] = "BONGDA";
t[t.MINIPOKER = 41] = "MINIPOKER";
t[t.TAIXIU = 89] = "TAIXIU";
t[t.TAIXIUMD5 = 90] = "TAIXIUMD5";
t[t.TAIXIULIVE = 521] = "TAIXIULIVE";
t[t.XOCDIALIVE = 522] = "XOCDIALIVE";
t[t.ANKHE = 5002] = "ANKHE";
t[t.BANCA = 123] = "BANCA";
t[t.XOCDIA = 333] = "XOCDIA";
t[t.GAME_POKER = 107] = "GAME_POKER";
t[t.GAME_TLMN_DL = 100] = "GAME_TLMN_DL";
t[t.GAME_MAUBINH = 7] = "GAME_MAUBINH";
t[t.GAME_BA_CAY = 102] = "GAME_BA_CAY";
t[t.GAME_SAMLOC = 101] = "GAME_SAMLOC";
})(n.GAME_IDS || (n.GAME_IDS = {}));
n.getStringBodyByObject = function(t) {
if (!t) return "";
var e = [];
for (var n in t) e.push(n + "=" + encodeURIComponent(t[n]));
return "?" + e.join("&");
};
cc._RF.pop();
}, {} ],
LobbyCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a3832nwcBdNMKefpx7BqvfH", "LobbyCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./audio/LobbAudioDefined"), s = t("./BannerPromotion"), p = t("./network/NetworkPortal"), l = t("./network/NotificationNetworkHandle"), u = t("./ChangeAvatar/SetAvatar"), h = cc._decorator, f = h.ccclass, d = h.property, y = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfUpdateDisplayName = null;
e.prefabOTP = null;
e.nWidgetIcon = null;
e.NodeActivePhone = null;
e.scrollview = null;
e.NodeDownload = null;
e.nodeLoading = null;
e.Img = [];
e.ImgRandom = null;
e.listEventByDay = [];
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.update = function() {
if (this.node.active) for (var t = cc.rect(-this.scrollview.content.x, -this.scrollview.node.height / 2, this.scrollview.node.width, this.scrollview.node.height), e = 0; e < this.scrollview.content.children.length; e++) {
var n = this.scrollview.content.children[e];
t.intersects(n.getBoundingBox()) ? n.opacity = 255 : n.opacity = 0;
}
};
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.start = function() {};
e.prototype.getGameEventByDay = function() {
var t = new Date();
if (t.getMonth() + 1 >= 13) {
var e = new Array(7);
e[0] = "Sunday";
e[1] = "Monday";
e[2] = "Tuesday";
e[3] = "Wednesday";
e[4] = "Thursday";
e[5] = "Friday";
e[6] = "Saturday";
var n = [];
switch (e[t.getDay()]) {
case "Monday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.LONGVUONG);
break;

case "Tuesday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.ANGRYBIRD);
break;

case "Wednesday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.LIENMINH);
break;

case "Thursday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.LONGVUONG);
break;

case "Friday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.MINIPOKER);
break;

case "Saturday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.RUNGRAM);
break;

case "Sunday":
a.LobbyConst.listEventByDay = n.concat(a.GAME_IDS.TAYDUKY);
}
} else a.LobbyConst.listEventByDay = [ a.GAME_IDS.LONGVUONG, a.GAME_IDS.TAYDUKY, a.GAME_IDS.FROZEN, a.GAME_IDS.SINBAD, a.GAME_IDS.RUNGRAM, a.GAME_IDS.MINIPOKER ];
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION, this.loadBannerPromotion, this);
this._addGUIOTP();
this.getGameEventByDay();
this.ImgRandom.spriteFrame = this.Img[0];
this.onImgRandom();
this._addSoundBGM();
this.nodeLoading.active = !1;
this.getJackPot();
cc.sys.isBrowser && cc.sys.isMobile ? this.NodeDownload.active = !0 : this.NodeDownload.active = !1;
var t = cc.Canvas.instance.getComponent(l.default);
t ? t.mSignalr || t.connect() : cc.Canvas.instance.addComponent(l.default).connect();
var e = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
e && (e.active = !0);
};
e.prototype._addSoundBGM = function() {
lngui.AudioManager.instance.playMusic(c.default.instance.music_bgm);
};
e.prototype.removeBigBangIcon = function() {
cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon") && (cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon").active = !1);
};
e.prototype.loadBannerPromotion = function() {
lngui.UIPopupManager.instance.has(s.default);
};
e.prototype._addWidgetIcon = function() {
if (!lngui.GameCoreManager.instance.nMiniGames.getChildByName("nWidgetIcon")) {
var t = cc.instantiate(this.nWidgetIcon);
t.name = "nWidgetIcon";
lngui.GameCoreManager.instance.nMiniGames.addChild(t);
}
};
e.prototype._addGUIOTP = function() {
var t = {
namePrefab: "GUI_OTP",
prfDefined: this.prefabOTP
};
lngui.CommonAssetDefined.instance.listPrefabDefined.push(t);
};
e.prototype.onDisable = function() {
lngui.AudioManager.instance.pauseMusic();
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.onLoginSuccess, this);
var t = cc.Canvas.instance.node.getChildByName("Prefab_BigBang_Icon");
t && (t.active = !1);
};
e.prototype.getJackPot = function() {
var t = "https://noti." + lngui.ConfigManager.instance.ConfigInfo.Api + "/service/GetJackpotAndHistory";
lngui.Https.get(t, function(t) {
if (t) {
l.default.instance.onGetListJackPot(t.Jackpots);
l.default.instance.onGetHistory(t.Hitories);
}
});
};
e.prototype.onLoginSuccess = function() {
console.log(lngui.UserManager.instance.mainUserInfo);
this._addWidgetIcon();
if (null == lngui.UserManager.instance.mainUserInfo.NickName || "" == lngui.UserManager.instance.mainUserInfo.NickName) {
0 == this.nodeLoading.active && lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName);
(t = cc.Canvas.instance.getComponent(p.default)) ? t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
} else {
var t;
(t = cc.Canvas.instance.getComponent(p.default)) ? t.connect() : cc.Canvas.instance.addComponent(p.default).connect();
u.default.instance.SetAvatar();
}
};
e.prototype.requestCaptcha = function() {
var t = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/RequestCaptcha", e = {
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
lngui.Https.post(t, e, function(t, e) {
e && (a.LobbyConst.CaptchaFirstTime = e);
});
};
e.prototype.checkLoading = function() {
lngui.UserManager.instance.mainUserInfo && (null != lngui.UserManager.instance.mainUserInfo.NickName && "" != lngui.UserManager.instance.mainUserInfo.NickName || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfUpdateDisplayName));
};
e.prototype.activeLoading = function() {
this.nodeLoading.active = !0;
};
e.prototype.onImgRandom = function() {
var t = this;
this.schedule(function() {
t.ImgRandom.spriteFrame = t.Img[Math.floor(Math.random() * t.Img.length)];
}, 10);
};
var n;
e._instance = null;
r([ d(cc.Prefab) ], e.prototype, "prfUpdateDisplayName", void 0);
r([ d(cc.Prefab) ], e.prototype, "prefabOTP", void 0);
r([ d(cc.Prefab) ], e.prototype, "nWidgetIcon", void 0);
r([ d(cc.Node) ], e.prototype, "NodeActivePhone", void 0);
r([ d(cc.ScrollView) ], e.prototype, "scrollview", void 0);
r([ d(cc.Node) ], e.prototype, "NodeDownload", void 0);
r([ d(cc.Node) ], e.prototype, "nodeLoading", void 0);
r([ d(cc.SpriteFrame) ], e.prototype, "Img", void 0);
r([ d(cc.Sprite) ], e.prototype, "ImgRandom", void 0);
return n = r([ f ], e);
}(cc.Component);
n.default = y;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./BannerPromotion": "BannerPromotion",
"./ChangeAvatar/SetAvatar": "SetAvatar",
"./audio/LobbAudioDefined": "LobbAudioDefined",
"./network/NetworkPortal": "NetworkPortal",
"./network/NotificationNetworkHandle": "NotificationNetworkHandle"
} ],
Lobby_MiniGameNavigator: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "17186JZy8dBJp0coDZ023Kr", "Lobby_MiniGameNavigator");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nBg = null;
return e;
}
e.prototype.start = function() {
this.nBg.opacity = 255;
this.nBg.scale = 0;
var t = cc.spawn(cc.scaleTo(.24, 1), cc.rotateBy(.5, 360));
this.nBg.runAction(t);
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
lngui.EventDispatch.instance.add(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
e.prototype.onDisable = function() {
t.prototype.onDisable.call(this);
lngui.EventDispatch.instance.remove(a.LobbyConst.EVENT_NAME.BUNDLEMINI_DOWNLOAD_SUCCESS, this.hide, this);
};
r([ p(cc.Node) ], e.prototype, "nBg", void 0);
return r([ s ], e);
}(lngui.UIPopup);
n.default = l;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst"
} ],
Lobby_UIDraggable: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9be29xRiu5CyJjMEFV1n4r1", "Lobby_UIDraggable");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.draggable = !0;
e.backToStartPosition = !1;
e.autoFitEdge = !1;
return e;
}
r([ s ], e.prototype, "draggable", void 0);
r([ s ], e.prototype, "backToStartPosition", void 0);
r([ s ], e.prototype, "autoFitEdge", void 0);
return r([ c ], e);
}(lngui.UIDraggable);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UINumericLabelHelper: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6aa8bFsEZpNjIqUqHxoX0hf", "Lobby_UINumericLabelHelper");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return r([ c ], e);
}(lngui.UINumericLabelHelper));
n.default = s;
cc._RF.pop();
}, {} ],
Lobby_UIScrollBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a6f97L48btM7LQAKF6khlKX", "Lobby_UIScrollBar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.handle = null;
e.direction = lngui.UIScrollBarDirection.VERTICAL;
e.enableAutoHide = !0;
e.autoHideTime = 1;
return e;
}
r([ s(cc.Sprite) ], e.prototype, "handle", void 0);
r([ s({
type: cc.Enum(lngui.UIScrollBarDirection)
}) ], e.prototype, "direction", void 0);
r([ s(cc.Boolean) ], e.prototype, "enableAutoHide", void 0);
r([ s(cc.Float) ], e.prototype, "autoHideTime", void 0);
return r([ c ], e);
}(lngui.UIScrollBar);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowPopupHelp: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d0169/XWbxHQKww7MnOyWnF", "Lobby_UIShowPopupHelp");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
lngui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UIShowToolTip: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "48d7b9tUTVPYKyHs0k6iVYu", "Lobby_UIShowToolTip");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.text = "";
return e;
}
e.prototype.onEnable = function() {
this.node.getComponent(cc.Button) || this.node.addComponent(cc.Button);
this.node.on(lngui.ControlEvent.Click, this._onClicked, this);
this.node.on(cc.Node.EventType.MOUSE_ENTER, function() {
this.node.runAction(cc.scaleTo(.2, .92, .92));
}.bind(this));
this.node.on(cc.Node.EventType.MOUSE_LEAVE, function() {
this.node.runAction(cc.scaleTo(.2, 1, 1));
}.bind(this));
};
e.prototype.onDisable = function() {
this.node.off(lngui.ControlEvent.Click, this._onClicked, this);
};
e.prototype._onClicked = function() {
lngui.UIPopupManager.instance.showPopup(this.text);
};
r([ s ], e.prototype, "text", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
Lobby_UITableView: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "498cbDOIwhMmZQNxq7SA5ho", "Lobby_UITableView");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./Lobby_UIScrollBar"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.direction = lngui.UIScrollDirection.BOTH;
e.zoomScaleEnabled = !1;
e.maxScale = 1;
e.minScale = 1;
e.content = null;
e.scrollEnabled = !0;
e.touchEnabled = !0;
e.dragChildrenEnabled = !1;
e.easingAutoScroll = !0;
e.movementFactor = .64;
e.horizontalScrollBar = null;
e.verticalScrollBar = null;
e.autoClearAutoScroll = !1;
e.autoClearAutoZoomScale = !1;
e.fillOrder = lngui.UITableViewFillOrder.LEFT_TO_RIGHT__TOP_TO_BOTTOM;
e.interactionMode = lngui.UITableViewInteractionMode.NONE;
e.cellPagingEnabled = !1;
e.numberOfPagingCell = 1;
e.tableCell = null;
e.nEmpty = null;
return e;
}
r([ p({
type: cc.Enum(lngui.UIScrollDirection)
}) ], e.prototype, "direction", void 0);
r([ p ], e.prototype, "zoomScaleEnabled", void 0);
r([ p ], e.prototype, "maxScale", void 0);
r([ p ], e.prototype, "minScale", void 0);
r([ p(cc.Node) ], e.prototype, "content", void 0);
r([ p ], e.prototype, "scrollEnabled", void 0);
r([ p ], e.prototype, "touchEnabled", void 0);
r([ p ], e.prototype, "dragChildrenEnabled", void 0);
r([ p ], e.prototype, "easingAutoScroll", void 0);
r([ p ], e.prototype, "movementFactor", void 0);
r([ p(a.default) ], e.prototype, "horizontalScrollBar", void 0);
r([ p(a.default) ], e.prototype, "verticalScrollBar", void 0);
r([ p ], e.prototype, "autoClearAutoScroll", void 0);
r([ p ], e.prototype, "autoClearAutoZoomScale", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewFillOrder)
}) ], e.prototype, "fillOrder", void 0);
r([ p({
type: cc.Enum(lngui.UITableViewInteractionMode)
}) ], e.prototype, "interactionMode", void 0);
r([ p(cc.Boolean) ], e.prototype, "cellPagingEnabled", void 0);
r([ p(cc.Integer) ], e.prototype, "numberOfPagingCell", void 0);
r([ p(cc.Prefab) ], e.prototype, "tableCell", void 0);
r([ p(cc.Node) ], e.prototype, "nEmpty", void 0);
return r([ s ], e);
}(lngui.UITableView);
n.default = l;
cc._RF.pop();
}, {
"./Lobby_UIScrollBar": "Lobby_UIScrollBar"
} ],
LoginByLanding: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ed3f8QGDo1Jh7D8nmdXAlvf", "LoginByLanding");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = cc._decorator, p = s.ccclass, l = (s.property, 
function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.loginWithToken();
};
e.prototype.loginWithToken = function() {
var t = this;
if (cc.sys.isBrowser) {
var e = window.location.href, n = e.slice("https://web.big79.club/token=".length, e.length);
if (n && !(n.length < 30)) {
var o = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/Getusertication?token=" + n;
lngui.Https.getRaw(o, function(e, o) {
if (200 == e) {
var i = JSON.parse(o);
i.GameToken = n;
lngui.UserManager.instance.mainUserInfo = i;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.NickName = i.UserName;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
t.requestAccount(i);
}
});
}
}
};
e.prototype.requestAccount = function() {
var t = this;
c.MVUtils.get(a.LobbyConst.API.URL + a.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, n) {
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = n.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = n.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
};
e.prototype.requestUnreadMail = function() {
var t = a.LobbyConst.API.URL + a.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
return r([ p ], e);
}(cc.Component));
n.default = l;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./MVUtils": "MVUtils"
} ],
LoginCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "65be4uyy4xF46qG67e6b51q", "LoginCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./autologin/CheckAndSaveToken"), p = t("./LobbyCtrl"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbCaptcha = null;
e.edbOtpLogin = null;
e.Captcha = null;
e.Timeer = null;
e.GuideCaptcha = null;
e.nCapcha = null;
e.PopupOTP = null;
e.BtnGetOTp = null;
e.NodeTimerOtp = null;
e.nButton = null;
e.nEditbox = null;
e.toggleSaveAccount = null;
e.timerOTP = 180;
e.countdownInterval = null;
e.token = null;
e.isRequesting = !1;
return e;
}
e.prototype.onEnable = function() {
var t = lngui.ClientData.getBoolean("SAVE_PASS", !0);
this.toggleSaveAccount.isChecked = t;
this.edbAccount.string = lngui.ClientData.getString("USER_NAME", "");
this.edbPass.string = cc.sys.isNative ? lngui.ClientData.getString("PASSWORD", "") : "";
this.requestCaptcha();
};
e.prototype.onClickLoginFB = function() {};
e.prototype.onClickLogin = function() {
var t = this, e = this.edbAccount.string.trim();
e = e.toLowerCase();
var n = this.edbPass.string.trim(), o = window.md5(e.toLowerCase() + "zxc" + n.toLowerCase());
if (e.length <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập tên tài khoản"); else if (n.length <= 0) lngui.UIPopupManager.instance.showPopup("Bạn chưa nhập mật khẩu"); else {
var i = {
UserName: e,
Password: window.md5(n),
passraw: n,
IpAddress: "",
DeviceName: "Chrome",
PlatformId: a.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
UIID: "",
MerchantId: 1002,
CaptchaText: this.edbCaptcha.string,
CaptchaToken: "",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
otp: this.edbOtpLogin.string,
Sid: o,
token: this.token,
captcha: this.edbCaptcha.string
};
c.MVUtils.postRaw(a.LobbyConst.API.URL + a.LobbyConst.API.LOGIN, i, function(e, n) {
if (e >= 200 && e < 400) {
if (n) {
if (1 == n.IsRemoteOtp) {
t.PopupOTP.active = !0;
lngui.UIWaitingLayout.hideWaiting();
return;
}
if (null == n.GameToken || "" == n.GameToken) {
lngui.UIPopupManager.instance.showPopup("Tài khoản hoặc mật khẩu không đúng");
return;
}
p.default.instance.activeLoading();
t.onLoginSuccess(n, function() {
c.MVUtils.get(a.LobbyConst.API.URL + a.LobbyConst.API.GET_INFO_ACCOUNT, {}, function(e, n) {
lngui.UserManager.instance.mainUserInfo.PassWord = i.Password;
lngui.UserManager.instance.mainUserInfo.UserName = i.UserName;
lngui.UserManager.instance.mainUserInfo.TotalVipPoint = n.TotalVipPoint;
lngui.UserManager.instance.mainUserInfo.VipPoint = n.VipPoint;
lngui.UserManager.instance.mainUserInfo.Level = n.Level;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
t.requestUnreadMail();
});
});
}
} else {
lngui.UIPopupManager.instance.showPopup(n);
t.requestCaptcha();
}
}, !1, !0);
}
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
s.default.saveData(lngui.UserManager.instance.mainUserInfo.GameToken);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_VIPPOINT, lngui.UserManager.instance.mainUserInfo.TotalVipPoint);
this.resetPuOtp();
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.SHOW_BANNER_PROMOTION);
if (this.toggleSaveAccount.isChecked) {
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
} else {
this.edbAccount.string = "";
this.edbPass.string = "";
lngui.ClientData.setString("USER_NAME", this.edbAccount.string);
lngui.ClientData.setString("PASSWORD", this.edbPass.string);
}
e && e();
};
e.prototype.clickHideOtp = function() {
this.PopupOTP.active = !1;
this.resetPuOtp();
};
e.prototype.requestOTP = function() {
var t = this, e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/requestOtp", n = {
username: this.edbAccount.string,
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
lngui.Https.post(e, n, function(e, n) {
n && t.startCountdown();
});
};
e.prototype.requestCaptcha = function() {
var t = this;
if (this.isRequesting) lngui.UITextManager.showCenterNotification("Vui lòng không tạo Mã Xác Thực quá nhanh."); else {
this.isRequesting = !0;
setTimeout(function() {
t.isRequesting = !1;
}, 3e3);
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/user/RequestCaptcha", n = {
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
lngui.Https.post(e, n, function(e, n) {
if (n) {
t.GuideCaptcha.string = n.data.message;
t.loadImgBinary(n.data.b64);
t.token = n.data.token;
} else t.getCaptchaFake();
});
}
};
e.prototype.getCaptchaFake = function() {
var t = this;
lngui.Https.get("https://tai.dsrcgoms.xyz/hit/captchafake.json", function(e) {
if (e) {
var n = e[Math.floor(Math.random() * e.length)];
t.GuideCaptcha.string = n.data.message;
t.loadImgBinary(n.data.b64);
t.token = n.data.token;
}
});
};
e.prototype.startCountdown = function() {
var t = this;
this.countdownInterval && clearInterval(this.countdownInterval);
this.BtnGetOTp.active = !1;
this.NodeTimerOtp.active = !0;
this.Timeer.string = this.longToTime(this.timerOTP);
this.countdownInterval = setInterval(function() {
t.timerOTP--;
if (t.timerOTP >= 0) t.Timeer.string = t.longToTime(t.timerOTP); else {
clearInterval(t.countdownInterval);
t.resetPuOtp();
}
}, 1e3);
};
e.prototype.resetPuOtp = function() {
clearInterval(this.countdownInterval);
this.timerOTP = 180;
this.BtnGetOTp.active = !0;
this.NodeTimerOtp.active = !1;
this.edbOtpLogin.string = "";
};
e.prototype.longToTime = function(t) {
var e = t % 60;
return "0" + parseInt((t / 60).toString()) + ":" + (e < 10 ? "0" : "") + e + "s";
};
e.prototype.setCookie = function() {};
e.prototype.onToggleSavePass = function(t) {
var e = t.isChecked;
lngui.ClientData.setBoolean("SAVE_PASS", e);
};
e.prototype.requestUnreadMail = function() {
var t = a.LobbyConst.API.URL + a.LobbyConst.API.GET_UNREAD_MAIL;
lngui.Https.get(t, function(t) {
lngui.ZLog.log("requestUnreadMail ===" + JSON.stringify(t));
t && t.ResponseCode;
});
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 200;
n.height = 50;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.Captcha.spriteFrame = e;
};
n.src = e;
};
r([ h(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbOtpLogin", void 0);
r([ h(cc.Sprite) ], e.prototype, "Captcha", void 0);
r([ h(cc.Label) ], e.prototype, "Timeer", void 0);
r([ h(cc.Label) ], e.prototype, "GuideCaptcha", void 0);
r([ h(cc.Node) ], e.prototype, "nCapcha", void 0);
r([ h(cc.Node) ], e.prototype, "PopupOTP", void 0);
r([ h(cc.Node) ], e.prototype, "BtnGetOTp", void 0);
r([ h(cc.Node) ], e.prototype, "NodeTimerOtp", void 0);
r([ h(cc.Node) ], e.prototype, "nButton", void 0);
r([ h(cc.Node) ], e.prototype, "nEditbox", void 0);
r([ h(cc.Toggle) ], e.prototype, "toggleSaveAccount", void 0);
return r([ u ], e);
}(lngui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./LobbyCtrl": "LobbyCtrl",
"./MVUtils": "MVUtils",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken"
} ],
MVUtils: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "51eddUDQF1F05VZcf0ZIFjr", "MVUtils");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.MVUtils = void 0;
var o = t("../LobbyConst"), i = function() {
function t() {}
t.formatDateTime = function(t) {
if ("" != t.length && 0 != t.length) {
var e = (t = t.split("T"))[0].split("-");
return e[2] + "/" + e[1] + "/" + e[0] + " - " + t[1].substr(0, 5);
}
};
t.formatNumber = function(t) {
return !t || isNaN(t) ? "0" : t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
t.formatNumberK = function(t) {
return t > 999999999 || t < -999999999 ? (Math.round(t / 1e9 * 100) / 100).toString() + "B" : t > 999999 || t < -999999 ? (Math.round(t / 1e6 * 100) / 100).toString() + "M" : t > 999 || t < -999 ? (Math.round(t / 1e3 * 100) / 100).toString() + "K" : t.toString();
};
t.toInt = function(t) {
if ("" == t) return 0;
cc.log("before==" + t);
var e = t.split(",").join("");
cc.log("after==" + e);
return parseInt(e);
};
t.ToVND = function(t) {
var e = t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
null != e && "NaN" != e || (e = 0);
return e;
};
t.getToken = function() {
return this.getStringBodyByObject({
token: lngui.UserManager.instance.mainUserInfo.GameToken
}, void 0);
};
t.getStringBodyByObject = function(t, e) {
if (!t) return "";
if (null != e && e) return JSON.stringify(t);
var n = [];
for (var o in t) n.push(o + "=" + encodeURIComponent(t[o]));
return "?" + n.join("&");
};
t.getRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
o && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, JSON.parse(a.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, a.responseText);
}
};
a.send();
};
t.postRaw = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("POST", t);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
o && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, JSON.parse(a.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, a.responseText);
}
};
a.send(JSON.stringify(e));
};
t.post = function(t, e, n, i, r, a) {
void 0 === i && (i = !1);
void 0 === r && (r = !1);
void 0 === a && (a = 3e4);
i && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
r && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = a;
c.open("POST", t + this.getToken() + o.LobbyConst.URL.Gate);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
i && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
r && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, JSON.parse(c.responseText));
} else {
r && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.post2 = function(t, e, n, i, r, a) {
void 0 === i && (i = !1);
void 0 === r && (r = !1);
void 0 === a && (a = 3e4);
i && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
r && lngui.UIWaitingLayout.showWaiting();
var c = cc.loader.getXMLHttpRequest();
c.timeout = a;
c.open("POST", t + this.getToken() + o.LobbyConst.URL.Gate);
c.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
c.onreadystatechange = function() {
if (4 == c.readyState) if (c.status >= 200 && c.status < 400) {
i && console.log("ResponseText <=========\nstt=" + c.status + "\ndata=" + c.responseText);
r && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
} else {
r && lngui.UIWaitingLayout.hideWaiting();
n && n(c.status, c.responseText);
}
};
c.send(JSON.stringify(e));
};
t.get = function(t, e, n, o, i, r) {
void 0 === o && (o = !1);
void 0 === i && (i = !1);
void 0 === r && (r = 3e4);
e.token = lngui.UserManager.instance.mainUserInfo.GameToken;
o && console.log("SendRequest =========>\nurl=" + t + "\ndata=" + JSON.stringify(e));
i && lngui.UIWaitingLayout.showWaiting();
var a = cc.loader.getXMLHttpRequest();
a.timeout = r;
a.open("GET", t + this.getStringBodyByObject(e, void 0), !0);
a.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
a.onreadystatechange = function() {
if (4 == a.readyState) if (a.status >= 200 && a.status < 400) {
o && console.log("ResponseText <=========\nstt=" + a.status + "\ndata=" + a.responseText);
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, JSON.parse(a.responseText));
} else {
i && lngui.UIWaitingLayout.hideWaiting();
n && n(a.status, a.responseText);
}
};
a.send();
};
t.getOtpSMS = function() {
this.get("https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Account/getOTPSMS", {}, function(t, e) {
if (t >= 200 && t < 400) {
lngui.UIPopupManager.instance.showPopup("Hệ thống đã gửi mã OTP đến số điện thoại của bạn");
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, lngui.UserManager.instance.mainUserInfo.Money);
} else lngui.UIPopupManager.instance.showPopup(e);
});
};
t.removeVietnameseTones = function(t) {
return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A")).replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E")).replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I")).replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O")).replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U")).replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y")).replace(/Đ/g, "D")).replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "")).replace(/\u02C6|\u0306|\u031B/g, "")).replace(/ + /g, " ")).trim()).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
};
t.onFacebook = function() {
var t = this;
if (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS) if (sdkbox.PluginFacebook.isLoggedIn()) lngui.UserManager.instance.mainUserInfo.facebookToken = sdkbox.PluginFacebook.getAccessToken(); else {
cc.log("FB to Login");
sdkbox.PluginFacebook.login([ "public_profile", "email" ]);
} else if (null != this.sdkFbWeb) {
cc.log("Login fb web");
try {
FB.getLoginStatus(function(e) {
if ("connected" === e.status) {
lngui.UserManager.instance.mainUserInfo.facebookToken = e.authResponse.accessToken;
cc.log("Configs.Login.AccessTokenFB auth:" + JSON.stringify(e));
} else "not_authorized" === e.status || FB.login(t.fbRespone, {
scope: "email,public_profile"
});
});
} catch (t) {}
} else this.sdkFbWeb = new facebookSdk("426698672356843", "email,public_profile", this.fbRespone);
};
t.fbRespone = function(t) {
if ("200" != t.status) "wait" != t.response && cc.log(JSON.stringify(t)); else {
cc.log("fbRespone:" + JSON.stringify(t));
lngui.UserManager.instance.mainUserInfo.facebookToken = t.response.authResponse.accessToken;
lngui.UserManager.instance.mainUserInfo.facebookID = t.response.authResponse.userID;
}
};
t.hideMiddle = function(t, e, n) {
var o = new RegExp("^(\\+?\\d{" + e + "})(\\d+)(\\d{" + n + "})$");
return t.replace(o, function(t, e, n, o) {
return e + "*".repeat(n.length) + o;
});
};
t.isValidString = function(t) {
return !t || "" === t.trim();
};
t.validateInputHasSpace = function(t) {
return t.includes(" ");
};
t.isValidNameWithoutDiacritics = function(t) {
return 0 !== (t = t.trim()).length && /^[A-Za-z]+(\s[A-Za-z]+)+$/.test(t);
};
t.sdkFbWeb = null;
return t;
}();
n.MVUtils = i;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst"
} ],
MoveBulletFakeLobby: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "88cb7JoEjFOzLeAx3Y4ucIZ", "MoveBulletFakeLobby");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.movingNode = null;
e.progressSpeed = .3;
return e;
}
e.prototype.onEnable = function() {
this.progressBar.progress = 0;
};
e.prototype.start = function() {
this.progressBar.progress = 0;
};
e.prototype.update = function(t) {
if (this.progressBar.progress < 1) {
this.progressBar.progress += t * this.progressSpeed;
this.progressBar.progress > 1 && (this.progressBar.progress = 1);
var e = this.progressBar.node.width, n = -e / 2 + e * this.progressBar.progress;
this.movingNode.setPosition(n, this.movingNode.y);
}
};
r([ s(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
r([ s(cc.Node) ], e.prototype, "movingNode", void 0);
r([ s ], e.prototype, "progressSpeed", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NetworkPortal: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "50da5BoJcVFnpPT2A3XGYP/", "NetworkPortal");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "portalHub_net";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
var t = {
hub: "portalHub",
url: "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, t.gate, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(lngui.EVENT_GAMECORE.LOGOUT, this.closeWS, this);
this.closeWS();
};
e.prototype.onResponeData = function(t) {
this.isEmpty(t) || t.s && "error" == t.s || this.onWebSocketCallback(t);
};
e.prototype.isEmpty = function(t) {
for (var e in t) if (t.hasOwnProperty(e)) return !1;
return JSON.stringify(t) === JSON.stringify({});
};
e.prototype.onWebSocketCallback = function(t) {
lngui.ZLog.log("=====================CONNECT WS NOTI===============================" + JSON.stringify(t));
if (("open" == t.s || "reconnect" == t.s || "1" == t.s) && !this.isConnect) {
this.isConnect = !0;
this.connectSuccess();
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
lngui.ZLog.log("onWebSocketCallback: ", o.M + ": " + JSON.stringify(i));
switch (o.M) {
case "playerLeave":
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGOUT);
lngui.UIPopupManager.instance.showPopup("Tài khoản của bạn đã bị đăng nhập ở chỗ khác");
break;

case "topup":
1 == i.Status ? lngui.GameCoreManager.instance.updateTotalGold(i.balance) : lngui.UIPopupManager.instance.showPopup(i.msg);
}
}
}
};
e.prototype.connectSuccess = function() {
lngui.ZLog.log("NotificationNetworkHandle Sucesss");
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
var n;
e._instance = null;
return n = r([ c ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
NhiemVu: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "25446FNLopGOodzM/S5OYMg", "NhiemVu");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeDay = null;
e.NodeChung = null;
e.NodeGuide = null;
e.NodeEv1 = null;
e.NodeEv2 = null;
return e;
}
e.prototype.start = function() {
this.NodeChung.active = !1;
this.NodeDay.active = !0;
this.NodeGuide.active = !1;
};
e.prototype.omClickday = function() {
this.NodeChung.active = !1;
this.NodeDay.active = !0;
};
e.prototype.omClickchung = function() {
this.NodeChung.active = !0;
this.NodeDay.active = !1;
};
e.prototype.onClickGuide = function() {
this.NodeGuide.active = !0;
};
e.prototype.HideGuide = function() {
this.NodeGuide.active = !1;
};
e.prototype.clickChangeEv = function() {
if (1 == this.NodeEv1.active) {
this.NodeEv2.active = !0;
this.NodeEv1.active = !1;
} else {
this.NodeEv1.active = !0;
this.NodeEv2.active = !1;
}
};
e.prototype.onClickTaiXiu = function() {
lngui.BundleManager.instance.getBundle("TaiXiu") && lngui.BundleManager.instance.getPrefabFromBundle("TaiXiuMain", "TaiXiu", function(t) {
lngui.UIWindowManager.instance.showWindowFromPrefab(t);
});
};
r([ s(cc.Node) ], e.prototype, "NodeDay", void 0);
r([ s(cc.Node) ], e.prototype, "NodeChung", void 0);
r([ s(cc.Node) ], e.prototype, "NodeGuide", void 0);
r([ s(cc.Node) ], e.prototype, "NodeEv1", void 0);
r([ s(cc.Node) ], e.prototype, "NodeEv2", void 0);
return r([ c ], e);
}(lngui.UIPopup);
n.default = p;
cc._RF.pop();
}, {} ],
NodeDlAppLogin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "21afbF4jxZAkKKPZEMn2gjS", "NodeDlAppLogin");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.NodeQr = null;
e.QRCode = null;
return e;
}
e.prototype.start = function() {
var t = this;
this.NodeQr.active = !1;
var e = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/captcha/GetQrCode?content=https://hi-link.me/h/app&size=280";
lngui.Https.get(e, function(e) {
if (e) {
var n = e;
n = n.replace(/\r\n/g, "");
t.loadImgBinary(n);
}
});
};
e.prototype.BtnClick = function() {
cc.sys.isBrowser && !cc.sys.isMobile ? this.NodeQr.active = !0 : cc.sys.os === cc.sys.OS_ANDROID ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LinkAppAndroid) : cc.sys.os === cc.sys.OS_IOS && cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LinkAppIos);
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 250;
n.height = 250;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.QRCode.spriteFrame = e;
};
n.src = e;
};
e.prototype.clickhidePu = function() {
this.NodeQr.active = !1;
};
e.prototype.clicksupport = function() {
cc.sys.openURL(this.linksupport);
};
r([ s(cc.Node) ], e.prototype, "NodeQr", void 0);
r([ s(cc.Sprite) ], e.prototype, "QRCode", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NotiRunItem: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ad5ffKiZKdBjqMQvMFTKodO", "NotiRunItem");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.mIsReady = !0;
e.mSpaceX = 15;
e.mSpeed = 90;
e.mNotifySystem = null;
return e;
}
e.prototype.onLoad = function() {
this.node.anchorX = 0;
};
e.prototype.init = function(t) {
this.mNotifySystem = t;
this.setDefault();
};
e.prototype.setDefault = function() {
this.node.active = !1;
this.node.x = 575;
this.content.string = "";
this.mIsReady = !0;
};
e.prototype.setContent = function(t) {
this.content.string = t;
};
e.prototype.setReady = function(t) {
this.mIsReady = t;
};
e.prototype.isReady = function() {
return this.mIsReady;
};
e.prototype.runNoify = function() {
var t = this;
this.mIsReady = !1;
this.node.active = !0;
this.node.stopAllActions();
var e = -this.node.width - this.mSpaceX, n = Math.abs(e) / this.mSpeed, o = -this.node.width - (this.mNotifySystem.nodeContent.width - Math.abs(e)), i = Math.abs(o) / this.mSpeed;
this.node.runAction(cc.sequence(cc.moveBy(n, e, 0), cc.callFunc(function() {
t.mNotifySystem.mIsReady = !0;
t.mNotifySystem.runNotify();
}, this), cc.moveBy(i, o, 0), cc.callFunc(function() {
t.setDefault();
t.mNotifySystem.checkEmptyContent();
}, this)));
};
r([ s(cc.RichText) ], e.prototype, "content", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
NotiRun: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "69b92KAzsFIqLLj/7ibvdgo", "NotiRun");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.NOTIFY_TYPE = n.DataNotify = void 0;
var a, c = t("../network/NotificationNetworkHandle"), s = t("../../LobbyConst"), p = t("./NotiRunItem"), l = cc._decorator, u = l.ccclass, h = l.property, f = function() {
this.content = "";
this.type = 0;
};
n.DataNotify = f;
(function(t) {
t[t.ADMIN = 1] = "ADMIN";
t[t.MONEY_WIN = 2] = "MONEY_WIN";
})(a = n.NOTIFY_TYPE || (n.NOTIFY_TYPE = {}));
var d = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listNotifyItem = [];
e.nodeContent = null;
e.listNotifyMoneyWin = [];
e.listNotifyAdmin = [];
e.mIsReady = !1;
return e;
}
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onDisable = function() {
lngui.EventDispatch.instance.remove(s.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, this.onRunText, this);
};
e.prototype.onRunText = function(t) {
null == t && c.default.instance.sendNotifyRun();
for (var e = 0; e < this.listNotifyItem.length; e++) this.listNotifyItem[e].init(this);
this.updateNotify(t);
};
e.prototype.getGameNameById = function(t) {
var e = "";
switch (t) {
case s.GAME_IDS.MINIPOKER:
e = "MiniPoker";
break;

case s.GAME_IDS.TAIXIU:
e = "Tài Xỉu";
break;

case s.GAME_IDS.TAIXIUMD5:
e = "Tài Xỉu Md5";
break;

default:
e = "Slot";
}
return e;
};
e.prototype.updateNotify = function(t) {
var e = "", n = [ "thắng", "nổ hũ" ];
if (t) {
t = t.Data;
for (var o = 0; o < t.length; o++) {
e = t[o].gameId > 7 ? "<size=20>" + t[o].gameID + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[t[o].NType - 1] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> " + (t.length, 
"") + "</size>" : "<size=20>" + this.getGameNameById(t[o].GameID) + " <color=#FF6600>" + (t[o].UserName, 
t[o].UserName) + "</color> " + n[0] + " <color=#FF0000>" + lngui.StringUtils.formatNumber(t[o].Amount) + "</color> " + (t.length, 
"") + "</size></size>";
var i = new f();
i.content = e;
i.type = a.MONEY_WIN;
this.addNotify(i);
}
}
};
e.prototype.addNotify = function(t) {
t.type == a.MONEY_WIN ? this.listNotifyMoneyWin.push(t) : t.type == a.ADMIN && this.listNotifyAdmin.push(t);
if (!this.mIsReady) {
this.node.active = !0;
this.runNotify();
}
};
e.prototype.getNotifyReady = function() {
for (var t = 0; t < this.listNotifyItem.length; t++) if (this.listNotifyItem[t].isReady()) return this.listNotifyItem[t];
return null;
};
e.prototype.runNotify = function() {
this.mIsReady = !0;
var t = this.getNotifyReady();
if (t) {
var e = null;
this.listNotifyAdmin.length > 0 ? e = this.listNotifyAdmin.shift() : this.listNotifyMoneyWin.length > 0 && (e = this.listNotifyMoneyWin.shift());
if (e && "" != e.content) {
t.setContent(e.content);
t.runNoify();
} else {
this.mIsReady = !1;
c.default.instance.sendNotifyRun();
}
}
};
e.prototype.checkEmptyContent = function() {
for (var t = !1, e = 0; e < this.listNotifyItem.length; e++) if (!this.listNotifyItem[e].isReady()) {
t = !0;
break;
}
this.mIsReady = t;
this.node.active = t;
};
e.instance = null;
r([ h(p.default) ], e.prototype, "listNotifyItem", void 0);
r([ h(cc.Node) ], e.prototype, "nodeContent", void 0);
return r([ u ], e);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../network/NotificationNetworkHandle": "NotificationNetworkHandle",
"./NotiRunItem": "NotiRunItem"
} ],
NotificationNetworkHandle: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d49d4pTbZtBr5HXvzAt99Nj", "NotificationNetworkHandle");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../../LobbyConst"), c = t("../GateJackpotNoti"), s = t("../TimeAndResultMinigame"), p = cc._decorator, l = p.ccclass, u = (p.property, 
function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.mSignalr = null;
e.mListenerKey = "notify_event";
e.isConnect = !1;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
};
e.prototype.connect = function() {
var t = {
hub: "GateHub",
url: "https://noti." + lngui.ConfigManager.instance.ConfigInfo.Api + "/signalr/negotiate",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate
};
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.on(this.mListenerKey, this.onResponeData, this);
cc.systemEvent.off(a.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.on(a.LobbyConst.EVENT_NAME.GET_LIST_MAIL, this.getUnReadMail, this);
cc.systemEvent.off(a.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
cc.systemEvent.on(a.LobbyConst.EVENT_NAME.GET_DETAIL_MAIL, this.getDetailMail, this);
this.mSignalr = new lngui.GateSignalR();
this.mSignalr.connect(this.mListenerKey, t.url, t.hub, t.gate, "", !1);
lngui.GateWebSocketManager.pushSignalR(this.mSignalr);
};
e.prototype.onEnable = function() {
lngui.EventDispatch.instance.add(lngui.EVENT_GAMECORE.LOGIN_SUCCESS, this.connect, this);
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
}
t.R < 0 && lngui.UITextManager.showCenterNotification("Lỗi " + t.R);
if (t.M && Array.isArray(t.M) && 0 != t.M.length) for (var e = t.M.length, n = 0; n < e; ++n) {
var o = t.M[n];
if (o.A && null != o.A[0] && null != o.A[0]) {
var i = o.A[0];
switch (o.M) {
case "jackpots":
this.onGetListJackPot(i);
break;

case "lobbyHitories":
this.onGetHistory(i);
break;

case "UserMail":
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.USER_MAIL, i);
break;

case "notifyNewMail":
break;

case "mailContent":
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.EVENT_DETAIL_MAIL, i);
break;

case "NotifyJackpot":
break;

case "NotifySystem":
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.NOTIFY_SYSTEM, i);
break;

case "txTimeAndResult":
s.default.instance.RemainAndResult(i);
}
}
}
};
e.prototype.getMail = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.getDetailMail = function(t) {
this.sendSignalR("GetUserMailContent", [ t ]);
};
e.prototype.deleteMail = function(t) {
this.sendSignalR("DeleteUserMail", [ t ]);
};
e.prototype.getUnReadMail = function() {
this.sendSignalR("GetUnReadUserMailQuantity", []);
};
e.prototype.connectSuccess = function() {
this.sendSignalR("GetGeneralNotification", []);
this.scheduleOnce(function() {
n.instance.sendNotifyRun();
}, 1);
};
e.prototype.closeWS = function() {
cc.systemEvent.off(this.mListenerKey, this.onResponeData, this);
this.mSignalr.close();
lngui.GateWebSocketManager.removeSignalR(this.mSignalr);
this.mSignalr = null;
};
e.prototype.sendSignalR = function(t, e) {
lngui.ZLog.log("SendSocket==========================>" + t + "==data==" + JSON.stringify(e));
e = e || [];
this.mSignalr && this.mSignalr.send(t, e);
};
e.prototype.sendNotifyRun = function() {
console.log("=====GetSystemNotification -----\x3e");
this.sendSignalR("GetSystemNotification", [ 0 ]);
};
e.prototype.onTestSendSocketClicked = function() {
this.sendSignalR("GetUserMail", []);
};
e.prototype.onGetListJackPot = function(t) {
if (t && Array.isArray(t)) {
for (var e = 0; e < t.length; e++) if (t[e]) {
var n = t[e].GameID;
if (Object.values(a.GAME_IDS).includes(n)) {
var o;
o = 89 === n || 90 === n || 1236 === n ? JSON.parse(t[e].JackpotFund) : t[e].JackpotFund.split("|").map(Number);
a.LobbyConst.slotByKeys.set(n, o);
}
} else {
t.splice(e, 1);
e--;
}
lngui.EventDispatch.instance.emit(a.LobbyConst.EVENT_NAME.EVENT_UPDATE_JACKPOT);
}
};
e.prototype.onGetHistory = function(t) {
a.LobbyConst.history = t;
};
e.prototype.showJackpotNotify = function(t) {
var e = lngui.EBundle_Name.LOBBY;
lngui.BundleManager.instance.getPrefabFromBundle("prefabs/GateJackpotNotify", e, function(e) {
var n = cc.instantiate(e);
lngui.GameCoreManager.instance.nWidgetShowJackpot.addChild(n);
var o = n.getComponent(c.default);
o && o.showJackpot(t);
});
};
var n;
e._instance = null;
return n = r([ l ], e);
}(cc.Component));
n.default = u;
cc._RF.pop();
}, {
"../../LobbyConst": "LobbyConst",
"../GateJackpotNoti": "GateJackpotNoti",
"../TimeAndResultMinigame": "TimeAndResultMinigame"
} ],
OpenUrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "fdad7/FnzVGQIEH3Ihxq/j2", "OpenUrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onBtnClick = function(t, e) {
"BotOtp" == e ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.BotOtp) : "LiveChat" == e ? cc.sys.openURL(lngui.ConfigManager.instance.ConfigInfo.LiveChat) : cc.sys.openURL(e);
};
return r([ c ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
OrientRotation: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ab6c7I0fbxLIq0PCDpiVy4v", "OrientRotation");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeToRotate = null;
return e;
}
e.prototype.onLoad = function() {
console.log("onLoad");
};
r([ s(cc.Node) ], e.prototype, "nodeToRotate", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
RegisterCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9766EnY81CLoCN+Ya8puza", "RegisterCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("../LobbyConst"), c = t("./MVUtils"), s = t("./autologin/CheckAndSaveToken"), p = t("./LobbyCtrl"), l = cc._decorator, u = l.ccclass, h = l.property, f = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.edbAccount = null;
e.edbPass = null;
e.edbRePass = null;
e.edbCaptcha = null;
e.GuideCaptcha = null;
e.Captcha = null;
e.captchafake = [];
e.isRequesting = !1;
return e;
}
e.prototype.onLoad = function() {
this.captchafake = [ {
code: 200,
data: {
b64: "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",
token: "2a3a025f168a394b8432ec129e215737",
message: "Hãy nhập các ký tự màu đen"
}
}, {
code: 200,
data: {
b64: "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",
token: "84dc72b234df0ba2ea46c7572c7881ba",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "70140a3025c672f982d8194bd7ceca64",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "f08e366efcc040e74a0ae8fcf1cedaea",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "0377be3e4790d5f2cd69a8701d5f3dd5",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "7e61e7bb5c4add82354d5fe638e48222",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "9ba04e286ab8d1864beeaf45d7541bd0",
message: "Hãy nhập các ký tự màu xanh"
}
}, {
code: 200,
data: {
b64: "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",
token: "357c1f14071b2472cd02929e91d2b76a",
message: "Hãy nhập các ký tự màu đen"
}
}, {
code: 200,
data: {
b64: "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",
token: "447fc8a278805f174bd9bf92c7a59e30",
message: "Hãy nhập các ký tự màu đỏ"
}
}, {
code: 200,
data: {
b64: "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",
token: "2b830230159b1737768fa68325c2fcb9",
message: "Hãy nhập các ký tự màu đen"
}
} ];
};
e.prototype.onClickReg = function() {
var t = this, e = this.edbAccount.string.trim(), n = this.edbPass.string.trim(), o = this.edbRePass.string.trim(), i = (this.edbCaptcha.string, 
window.md5(e.toLowerCase() + "zxc" + n.toLowerCase()));
if (e.length > 18 || e.length < 6 || e.indexOf(" ") > 0 || e.indexOf("@") > 0) lngui.UIPopupManager.instance.showPopup("Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!"); else if (n.length < 6 || n.length > 18) lngui.UIPopupManager.instance.showPopup("Mật khẩu phải có độ dài từ 6 - 18 ký tự!"); else if (n === o) {
lngui.ZLog.log('======"PlatformID": LobbyConst.platform==============' + a.LobbyConst.platform);
var r = {
username: e,
password: window.md5(n),
passraw: n,
verify: "",
captcha: this.edbCaptcha.string,
Email: "fff",
landingHost: lngui.PlatformInterface.bundleID,
PlatformID: a.LobbyConst.platform,
deviceID: lngui.PlatformInterface.deviceID,
platform: lngui.PlatformInterface.platform,
OSName: lngui.PlatformInterface.OSName,
deviceToken: lngui.PlatformInterface.deviceToken,
phoneNumber: lngui.PlatformInterface.phoneNumber,
OSVersion: lngui.PlatformInterface.OSVersion,
appVersion: lngui.PlatformInterface.appVersion,
versionCode: lngui.PlatformInterface.versionCode,
bundleID: lngui.PlatformInterface.bundleID,
MerchantID: "1",
ServiceID: "1",
gate: lngui.ConfigManager.instance.ConfigInfo.Gate,
Sid: i
};
c.MVUtils.postRaw(a.LobbyConst.API.URL + a.LobbyConst.API.REGISTRY, r, function(e, n) {
if (e >= 200 && e < 400) {
p.default.instance.activeLoading();
t.onLoginSuccess(n, function() {
lngui.Https.get(a.LobbyConst.API.URL + a.LobbyConst.API.GET_INFO_ACCOUNT + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken, function(t) {
lngui.UserManager.instance.mainUserInfo.VipPoint = t.VipPoint;
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.UPDATE_DISPLAYNAME);
lngui.UserManager.instance.mainUserInfo.PassWord = r.password;
});
});
} else {
t.onRefreshCaptchaClicked();
lngui.UIPopupManager.instance.showPopup(n);
}
});
} else lngui.UIPopupManager.instance.showPopup("Mật khẩu nhập lại không trùng với mật khẩu đã nhập.");
};
e.prototype.onLoginSuccess = function(t, e) {
lngui.UserManager.instance.mainUserInfo = t;
s.default.saveData(lngui.UserManager.instance.mainUserInfo.GameToken);
this.hide();
lngui.EventDispatch.instance.emit(lngui.EVENT_GAMECORE.LOGIN_SUCCESS);
e && e();
};
e.prototype.onRefreshCaptchaClicked = function() {
this.getCaptchaFake();
};
e.prototype.getCaptchaFake = function() {
var t = this;
if (this.isRequesting) lngui.UITextManager.showCenterNotification("Vui lòng không tạo Mã Xác Thực quá nhanh."); else {
this.isRequesting = !0;
setTimeout(function() {
t.isRequesting = !1;
}, 3e3);
var e = this.captchafake[Math.floor(Math.random() * this.captchafake.length)];
this.GuideCaptcha.string = e.data.message;
this.loadImgBinary(e.data.b64);
}
};
e.prototype.loadImgBinary = function(t) {
var e = "data:image/png;base64," + t, n = new Image();
n.width = 200;
n.height = 50;
var o = this;
n.onload = function() {
var t = new cc.Texture2D();
t.initWithElement(n);
t.handleLoadedTexture();
var e = new cc.SpriteFrame(t);
o.Captcha.spriteFrame = e;
};
n.src = e;
};
r([ h(cc.EditBox) ], e.prototype, "edbAccount", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbPass", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbRePass", void 0);
r([ h(cc.EditBox) ], e.prototype, "edbCaptcha", void 0);
r([ h(cc.Label) ], e.prototype, "GuideCaptcha", void 0);
r([ h(cc.Sprite) ], e.prototype, "Captcha", void 0);
return r([ u ], e);
}(lngui.UIPopup);
n.default = f;
cc._RF.pop();
}, {
"../LobbyConst": "LobbyConst",
"./LobbyCtrl": "LobbyCtrl",
"./MVUtils": "MVUtils",
"./autologin/CheckAndSaveToken": "CheckAndSaveToken"
} ],
Scale: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "284beHkEZlJppGXAU5YH3Cl", "Scale");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.myNode = null;
return e;
}
e.prototype.onLoad = function() {
var t = cc.scaleTo(.5, 1.25), e = cc.scaleTo(.5, 1), n = cc.sequence(t, e), o = cc.repeatForever(n);
this.myNode.runAction(o);
};
r([ s(cc.Node) ], e.prototype, "myNode", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
ScriptTheThaoLobby: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "bedb23Tb7VMqK+dSeJlmXRU", "ScriptTheThaoLobby");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = (a.property, function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ismobile = null;
e.url = null;
e.Rate = null;
e.amount = 0;
e.amountnhan = null;
e.game = null;
e.listgame = [];
e.portfilio = null;
e.gpid = null;
return e;
}
e.prototype.start = function() {};
e.prototype.LaunchGame = function(t, e) {
switch (e) {
case "AFB SPORT":
this.gpid = 1015;
this.portfilio = "SportsBook";
this.OnClickPlayNow();
break;

case "BTI SPORT":
this.gpid = 1022;
this.portfilio = "SportsBook";
this.OnClickPlayNow();
break;

case "SportsBook":
this.gpid = 10015;
this.portfilio = "SportsBook";
this.OnClickPlayNow();
break;

default:
console.log("Không có case được chọn");
}
};
e.prototype.OnClickPlayNow = function() {
var t = "https://api." + lngui.ConfigManager.instance.ConfigInfo.Api + "/Account3rd/LaunchGames";
this.ismobile = cc.sys.isMobile;
var e = t + "?access_token=" + lngui.UserManager.instance.mainUserInfo.GameToken + "&gpid=" + this.gpid + "&isMobile=" + this.ismobile + "&portfilio=" + this.portfilio;
this.getUrl(e, function(t, e) {
if (e >= 200 && e < 400) {
console.log("vào vào");
cc.sys.openURL(t);
} else lngui.UIPopupManager.instance.showPopup(t);
});
};
e.prototype.getUrl = function(t, e) {
var n = t, o = cc.loader.getXMLHttpRequest();
o.onreadystatechange = function() {
4 === o.readyState && (200 == o.status ? e(o.responseText, o.status) : o.responseText.length > 0 ? e(o.responseText, o.status) : e("error_code : " + o.status, null));
};
o.ontimeout = function() {
e("Hệ thống không phản hồi.", null);
};
o.timeout = 3e4;
o.open("GET", n, !0);
o.setRequestHeader("Content-Type", "application/json");
o.withCredentials = !0;
o.send();
};
return r([ c ], e);
}(cc.Component));
n.default = s;
cc._RF.pop();
}, {} ],
SetAvatar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1ad11Q0v01Ddryjjj+xE13p", "SetAvatar");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./ListAvatar"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SpritetAvatar = null;
e.Avatar = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
this.SpritetAvatar = this.SpritetAvatar;
};
e.prototype.start = function() {
null != lngui.UserManager.instance.mainUserInfo.Avatar && this.SetAvatar();
};
e.prototype.SetAvatar = function() {
var t = this.SpritetAvatar.ListSpriteAvatar;
this.Avatar.spriteFrame = t[lngui.UserManager.instance.mainUserInfo.Avatar];
};
var n;
e._instance = null;
r([ p(a.default) ], e.prototype, "SpritetAvatar", void 0);
r([ p(cc.Sprite) ], e.prototype, "Avatar", void 0);
return n = r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./ListAvatar": "ListAvatar"
} ],
TabTypeGameCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f9205OA5INPFLbKqXgtwJU3", "TabTypeGameCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.listAllGame = null;
e.listGameSlots = [];
e.listMiniGame = [];
e.listCardGame = [];
e.listLive = [];
e.listTheThao = [];
e.taball = null;
e.tabcard = null;
e.tabslot = null;
e.tabmini = null;
e.tablive = null;
e.tabthethao = null;
return e;
}
e.prototype.showAllGame = function() {
var t = this;
this.listAllGame.children.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !0;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showAllSlots = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listGameSlots.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !0;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showMiniGame = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listMiniGame.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !0;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showCardGame = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listCardGame.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !0;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showLive = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listLive.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !0;
t.tabthethao.getChildByName("2").active = !1;
});
};
e.prototype.showTheThao = function() {
var t = this;
this.listAllGame.children.forEach(function(t) {
t && (t.active = !1);
});
this.listTheThao.forEach(function(e) {
e && (e.active = !0);
t.taball.getChildByName("2").active = !1;
t.tabcard.getChildByName("2").active = !1;
t.tabslot.getChildByName("2").active = !1;
t.tabmini.getChildByName("2").active = !1;
t.tablive.getChildByName("2").active = !1;
t.tabthethao.getChildByName("2").active = !0;
});
};
e.prototype.onUITouchEvent = function(t, e) {
switch (e) {
case "showAll":
this.showAllGame();
break;

case "showSlots":
this.showAllSlots();
break;

case "cardgame":
this.showCardGame();
break;

case "minigame":
this.showMiniGame();
break;

case "live":
this.showLive();
break;

case "thethao":
this.showTheThao();
}
};
r([ s(cc.Node) ], e.prototype, "listAllGame", void 0);
r([ s(cc.Node) ], e.prototype, "listGameSlots", void 0);
r([ s(cc.Node) ], e.prototype, "listMiniGame", void 0);
r([ s(cc.Node) ], e.prototype, "listCardGame", void 0);
r([ s(cc.Node) ], e.prototype, "listLive", void 0);
r([ s(cc.Node) ], e.prototype, "listTheThao", void 0);
r([ s(cc.Node) ], e.prototype, "taball", void 0);
r([ s(cc.Node) ], e.prototype, "tabcard", void 0);
r([ s(cc.Node) ], e.prototype, "tabslot", void 0);
r([ s(cc.Node) ], e.prototype, "tabmini", void 0);
r([ s(cc.Node) ], e.prototype, "tablive", void 0);
r([ s(cc.Node) ], e.prototype, "tabthethao", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
TimeAndResultMinigame: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ddb48MAZEhGtYvjd6LTZYFz", "TimeAndResultMinigame");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.RemainBetting = null;
e.nodetime = null;
e.resultTai = null;
e.resultXiu = null;
e.timeremain = null;
return e;
}
n = e;
Object.defineProperty(e, "instance", {
get: function() {
n._instance || (n._instance = new n());
return n._instance;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
n._instance = this;
this.resultTai.active = !1;
this.resultXiu.active = !1;
this.RemainBetting.string = "0";
};
e.prototype.RemainAndResult = function(t) {
if (lngui.GameCoreManager.instance.isLoginSuccess) {
var e = t.Result;
this.timeremain = t.RemainBetting;
var n = this.timeremain;
this.RemainBetting.string = n + "";
if (1 == e && 0 == n) {
this.resultTai.active = !1;
this.resultXiu.active = !0;
} else if (2 == e && 0 == n) {
this.resultTai.active = !0;
this.resultXiu.active = !1;
} else if (-1 == e && n > 0) {
this.resultTai.active = !1;
this.resultXiu.active = !1;
}
this.nodetime.active = n > 3;
}
};
var n;
e._instance = null;
r([ s(cc.Label) ], e.prototype, "RemainBetting", void 0);
r([ s(cc.Node) ], e.prototype, "nodetime", void 0);
r([ s(cc.Node) ], e.prototype, "resultTai", void 0);
r([ s(cc.Node) ], e.prototype, "resultXiu", void 0);
return n = r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ],
WidgetIconBigbang: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3acbcfqXDBEcYeUxomMconC", "WidgetIconBigbang");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./GUIEventBigBang"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfMiniGame = null;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(a.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfMiniGame);
};
r([ p(cc.Prefab) ], e.prototype, "prfMiniGame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./GUIEventBigBang": "GUIEventBigBang"
} ],
WidgetIconCtrl: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3c748uOw7NLXpHZ13WZ9nfN", "WidgetIconCtrl");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = t("./utils/Lobby_MiniGameNavigator"), c = cc._decorator, s = c.ccclass, p = c.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prfPopupMinigame = null;
e.buttonClicked = !0;
e.buttonMoved = cc.Vec2.ZERO;
return e;
}
e.prototype.onClick = function() {
lngui.UIPopupManager.instance.has(a.default) || lngui.UIPopupManager.instance.showPopupFromPrefab(this.prfPopupMinigame);
};
e.prototype.onLoad = function() {
var t = this;
this.node.on(cc.Node.EventType.TOUCH_START, function() {
t.buttonClicked = !0;
t.buttonMoved = cc.Vec2.ZERO;
console.log("TOUCH_START");
}, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
t.buttonMoved = t.buttonMoved.add(e.getDelta());
t.buttonClicked && (Math.abs(t.buttonMoved.x) > 30 || Math.abs(t.buttonMoved.y) > 30) && (t.buttonClicked = !1);
}, this);
this.node.on(cc.Node.EventType.TOUCH_END, function() {
t.buttonClicked && t.onClick();
}, this);
};
r([ p(cc.Prefab) ], e.prototype, "prfPopupMinigame", void 0);
return r([ s ], e);
}(cc.Component);
n.default = l;
cc._RF.pop();
}, {
"./utils/Lobby_MiniGameNavigator": "Lobby_MiniGameNavigator"
} ],
fadeinoutLive: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8e08cqm1dpALqIHE+WG92WQ", "fadeinoutLive");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, c = a.ccclass, s = a.property, p = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.myNode = null;
return e;
}
e.prototype.onLoad = function() {
var t = cc.fadeIn(1), e = cc.fadeOut(1), n = cc.sequence(t, e), o = cc.repeatForever(n);
this.myNode.runAction(o);
};
r([ s(cc.Node) ], e.prototype, "myNode", void 0);
return r([ c ], e);
}(cc.Component);
n.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "LobbyConst", "BannerPromotion", "BetTX", "ChangeAvatar", "ListAvatar", "SetAvatar", "CheckSoDu", "EventEDB", "FavClick", "ForgetPassCtrl", "GUIAccountChangePass", "GUIAccountDetail", "GUIAccountMail", "GUIAccountSafe", "GUIAccountSecurity", "GUIAccountSecurityNew", "GUIEventBigBang", "GUIEventX3Nap", "GUIGiftCode", "GUIOTP", "GUISettingCtrl", "GUITopJackpotCtrl", "GUITopupBank", "GUITopupBankFast", "GUITopupBankManual", "GUITopupCtrl", "GUITopupEWallet", "GUITopupExchange", "GUITopupHistoryAllGame", "GUITopupHistoryBankManual", "GUITopupHistoryNap", "GUITopupHistoryRut", "GUITopupRutBank", "GUITopupTelco", "GUITopupTienAo", "GUITopupTranfers", "GUIUpdateDisplayName", "GateJackpotNoti", "GateSettingPopup", "GetVersion", "GuiTopupRutMomo", "HeaderAccountCtrl", "HeaderCtrl", "ItemGiftBigBang", "ItemMail", "ItemNapX3", "ItemRankBigBang", "ItemTopJackpotCtrl", "JackpotBySlot", "LobbyCtrl", "LoginByLanding", "LoginCtrl", "MVUtils", "NhiemVu", "NodeDlAppLogin", "OpenUrl", "OrientRotation", "RegisterCtrl", "TabTypeGameCtrl", "ScriptTheThaoLobby", "TimeAndResultMinigame", "WidgetIconBigbang", "WidgetIconCtrl", "LobbAudioDefined", "CheckAndSaveToken", "CheckAutoLogin", "FakeLoading", "MoveBulletFakeLobby", "BundleMiniGame", "BundleSceneGame", "IconAnGame", "IconAnGameScene", "IconBanCa", "IconMiniPoker", "IconMiniTaiXiu", "IconMiniTomCuaCa", "IconTestGameCards", "NetworkPortal", "NotificationNetworkHandle", "NotiRun", "NotiRunItem", "AutoDestroyNode", "AutoScroll", "CapchaZ", "LoadSpriteFromUrl", "Lobby_MiniGameNavigator", "Lobby_UIDraggable", "Lobby_UINumericLabelHelper", "Lobby_UIScrollBar", "Lobby_UIShowPopupHelp", "Lobby_UIShowToolTip", "Lobby_UITableView", "Scale", "fadeinoutLive" ]);