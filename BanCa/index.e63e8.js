window.__require = function t(e, o, i) {
function n(a, r) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var h = o[a] = {
exports: {}
};
e[a][0].call(h.exports, function(t) {
return n(e[a][1][t] || t);
}, h, h.exports, t, e, o, i);
}
return o[a].exports;
}
for (var s = "function" == typeof __require && __require, a = 0; a < i.length; a++) n(i[a]);
return n;
}({
App: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cfec1QXFOdOErN41dQfGm4E", "App");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../../framework/common/AlertDialog"), r = t("../../../../../framework/common/ConfirmDialog"), c = t("../../../../../framework/common/BroadcastReceiver"), l = t("./Configs"), h = cc._decorator, u = h.ccclass, p = h.property, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.designResolution = new cc.Size(1280, 720);
e.loading = null;
e.loadingIcon = null;
e.loadingLabel = null;
e.alertDialog = null;
e.confirmDialog = null;
e.sprFrameAvatars = new Array();
e.buttonMiniGameNode = null;
e.miniGame = null;
e.lastWitdh = 0;
e.lastHeight = 0;
e.timeOutLoading = null;
e.isFisrtNetworkConnected = !1;
e.subpackageLoaded = {};
return e;
}
o = e;
e.prototype.onLoad = function() {
console.log("App onLoad");
if (null == o.instance) {
o.instance = this;
cc.game.addPersistRootNode(o.instance.node);
this.buttonMiniGame = this.buttonMiniGameNode.getComponent(ButtonMiniGame);
c.default.register(c.default.USER_LOGOUT, function() {}, this);
} else this.node.destroy();
};
e.prototype.start = function() {
this.updateSize();
MiniGameNetworkClient.getInstance().addListener(function(t) {
var e = new InPacket(t);
cmd;
switch (e.getCmdId()) {
case cmd.Code.GET_MONEY_USE:
var o = new cmd.ResGetMoneyUse(t);
l.default.Login.Coin = o.moneyUse;
c.default.send(c.default.USER_UPDATE_COIN);
}
}, this);
};
e.prototype.showLoading = function(t, e) {
void 0 === e && (e = 15);
};
e.prototype.showErrLoading = function(t) {
cc.warn(t);
fzgui.UIWaitingLayout.hideWaiting();
};
e.prototype.update = function() {
this.updateSize();
};
e.prototype.updateSize = function() {
var t = cc.view.getFrameSize();
if (this.lastWitdh !== t.width || this.lastHeight !== t.height) {
this.lastWitdh = t.width;
this.lastHeight = t.height;
var e = cc.Size.ZERO;
e = this.designResolution.width / this.designResolution.height > t.width / t.height ? cc.size(this.designResolution.width, this.designResolution.width * (t.height / t.width)) : cc.size(this.designResolution.height * (t.width / t.height), this.designResolution.height);
this.node.setContentSize(e);
this.node.setPosition(cc.v2(e.width / 2, e.height / 2));
}
};
e.prototype.getAvatarSpriteFrame = function(t) {
var e = parseInt(t);
return isNaN(e) || e < 0 || e >= this.sprFrameAvatars.length ? this.sprFrameAvatars[0] : this.sprFrameAvatars[e];
};
e.prototype.loadScene = function(t) {
var e = this;
cc.director.preloadScene(t, function(t, o) {
e.showErrLoading("Đang tải..." + parseInt("" + t / o * 100) + "%");
}, function() {
e.showLoading(!1);
cc.director.loadScene(t);
});
};
e.prototype.loadSceneInSubpackage = function(t, e) {
var o = this;
if (this.subpackageLoaded.hasOwnProperty(t) && this.subpackageLoaded[t]) cc.director.preloadScene(e, function(t, e) {
o.showErrLoading("Đang tải..." + parseInt("" + t / e * 100) + "%");
}, function() {
o.showLoading(!1);
cc.director.loadScene(e);
}); else {
this.showLoading(!0, -1);
SubpackageDownloader.downloadSubpackage(t, function(i, n) {
if ("progress" != i) {
o.showLoading(!1);
if (i) o.alertDialog.showMsg(i); else {
o.showLoading(!0, -1);
o.subpackageLoaded[t] = !0;
cc.director.preloadScene(e, function(t, e) {
o.showErrLoading("Đang tải..." + parseInt("" + t / e * 100) + "%");
}, function() {
o.showLoading(!1);
cc.director.loadScene(e);
});
}
} else o.showErrLoading("Đang tải..." + parseInt("" + 100 * n) + "%");
});
}
};
e.prototype.loadPrefabInSubpackage = function(t, e, o) {
var i = this;
if (this.subpackageLoaded.hasOwnProperty(t) && this.subpackageLoaded[t]) {
this.showLoading(!0, -1);
cc.loader.loadRes(e, cc.Prefab, function(t, e) {
i.showErrLoading("Đang tải..." + parseInt("" + t / e * 100) + "%");
}, function(t, e) {
i.showLoading(!1);
o(null == t ? null : t.message, e);
});
} else {
this.showLoading(!0, -1);
SubpackageDownloader.downloadSubpackage(t, function(n, s) {
if ("progress" != n) {
i.showLoading(!1);
if (n) i.alertDialog.showMsg(n); else {
i.subpackageLoaded[t] = !0;
cc.loader.loadRes(e, cc.Prefab, function(t, e) {
i.showErrLoading("Đang tải..." + parseInt("" + t / e * 100) + "%");
}, function(t, e) {
i.showLoading(!1);
o(null == t ? null : t.message, e);
});
}
} else i.showErrLoading("Đang tải..." + parseInt("" + 100 * s) + "%");
});
}
};
var o;
e.instance = null;
s([ p ], e.prototype, "designResolution", void 0);
s([ p(cc.Node) ], e.prototype, "loading", void 0);
s([ p(cc.Node) ], e.prototype, "loadingIcon", void 0);
s([ p(cc.Label) ], e.prototype, "loadingLabel", void 0);
s([ p(a.default) ], e.prototype, "alertDialog", void 0);
s([ p(r.default) ], e.prototype, "confirmDialog", void 0);
s([ p([ cc.SpriteFrame ]) ], e.prototype, "sprFrameAvatars", void 0);
s([ p(cc.Node) ], e.prototype, "buttonMiniGameNode", void 0);
s([ p(cc.Node) ], e.prototype, "miniGame", void 0);
return o = s([ u ], e);
}(cc.Component);
o.default = d;
cc._RF.pop();
}, {
"../../../../../framework/common/AlertDialog": void 0,
"../../../../../framework/common/BroadcastReceiver": void 0,
"../../../../../framework/common/ConfirmDialog": void 0,
"./Configs": "Configs"
} ],
BanCaLoading: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "37afdj+bEdJH5Jl8nZViqEB", "BanCaLoading");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, c = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progressBar = null;
e.NodeBg = null;
e.isFull = !1;
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
e.prototype.update = function() {
if (this.progressBar.node.parent.active && this.progressBar.progress >= 1 && !this.isFull) {
this.isFull = !0;
this.onJoinRoom();
}
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
e.prototype.actBack = function() {
fzgui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.actHonors = function() {};
e.prototype.actHistory = function() {};
e.prototype.onJoinRoom = function() {
setTimeout(function() {
fzgui.UIScreenManager.instance.popToRootScreen();
fzgui.UIPopupManager.instance.showPopup("Phòng đầy!");
}, 500);
};
var o;
e._instance = null;
s([ c(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
s([ c(cc.Node) ], e.prototype, "NodeBg", void 0);
return o = s([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
"Common.AudioManager": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9c58eVGTfpNv4SVKoyD4ACZ", "Common.AudioManager");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./BroadcastReceiver"), r = t("../ShootFish.Helper"), c = cc._decorator, l = c.ccclass, h = (c.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audioSource = null;
e.isOnMusic = !0;
e.isOnSound = !0;
return e;
}
o = e;
e.getInstance = function() {
if (null == this.instance) {
var t = new cc.Node("AudioManager");
this.instance = t.addComponent(o);
this.instance.audioSource = t.addComponent(cc.AudioSource);
cc.game.addPersistRootNode(t);
}
return this.instance;
};
e.prototype.start = function() {
var t = this;
a.default.register(a.default.ON_AUDIO_CHANGED, function() {
console.log(r.default.getIsSound(), r.default.getIsMusic());
t.isOnMusic = r.default.getIsSound();
t.isOnSound = r.default.getIsMusic();
t.audioSource.mute = !t.isOnMusic;
t.isOnSound || cc.audioEngine.stopAllEffects();
}, this);
this.isOnMusic = r.default.getIsSound();
this.isOnSound = r.default.getIsMusic();
this.audioSource.mute = !this.isOnMusic;
};
e.prototype.playEffect = function(t, e) {
void 0 === e && (e = 1);
null != t ? this.isOnSound && e > 0 && cc.audioEngine.play(t, !1, e) : cc.warn("AudioManager playEffect audioClip is null");
};
e.prototype.playBackgroundMusic = function(t, e, o) {
void 0 === e && (e = !0);
void 0 === o && (o = 1);
if (null != t) {
this.audioSource.stop();
this.audioSource.clip = t;
this.audioSource.volume = o;
this.audioSource.mute = !this.isOnMusic;
this.audioSource.loop = e;
this.audioSource.play();
} else cc.warn("AudioManager playBackgroundMusic audioClip is null");
};
e.prototype.stopBackgroundMusic = function() {
this.audioSource.stop();
};
var o;
e.instance = null;
return o = s([ l ], e);
}(cc.Component));
o.default = h;
cc._RF.pop();
}, {
"../ShootFish.Helper": "ShootFish.Helper",
"./BroadcastReceiver": void 0
} ],
Configs: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d7952Lc8TFNHIwov0wrfI6D", "Configs");
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = function() {
function t() {}
t.Login = {
CoinFish: 0,
UsernameFish: "",
PasswordFish: "",
UserIdFish: "",
FishConfigs: null,
Coin: 0,
Username: "",
Password: "",
Nick: "",
Token: "",
Platform: 0,
Balance: 0,
isLogined: !1
};
t.App = {
USE_WSS: !0,
HOST_SHOOT_FISH: {
host: "fish." + fzgui.ConfigManager.instance.ConfigInfo.Api,
gate: "?gate=Web-go88.top",
port: 2053
},
Password: "",
IsSound: !0,
IsMusic: !0,
Debug: !1
};
t.CPName = "";
return t;
}();
o.default = i;
cc._RF.pop();
}, {} ],
Dialog1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bc502T066hI+ZvoWgtY1SS2", "Dialog1");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, c = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isAnimated = !0;
e.bg = null;
e.container = null;
e.showScale = 1.1;
e.startScale = .7;
return e;
}
e.prototype.show = function() {
var t = this;
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.node.active = !0;
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 0;
cc.tween(this.bg).to(.2, {
opacity: 128
}).start();
this.container.stopAllActions();
this.container.opacity = 0;
this.container.scale = this.startScale;
var e = cc.tween;
e(this.container).parallel(e().to(.2, {
scale: this.showScale
}), e().to(.2, {
opacity: 255
})).to(.1, {
scale: 1
}).call(function() {
t._onShowed();
}).start();
};
e.prototype.dismiss = function() {
var t = this;
this.bg || (this.bg = this.node.getChildByName("Bg"));
this.container || (this.container = this.node.getChildByName("Container"));
this.isAnimated = !1;
this.bg.stopAllActions();
this.bg.opacity = 128;
cc.tween(this.bg).to(.2, {
opacity: 0
}).start();
this.container.stopAllActions();
this.container.opacity = 255;
this.container.scale = 1;
var e = cc.tween;
e(this.container).to(.1, {
scale: this.showScale
}).parallel(e().to(.2, {
scale: this.startScale
}), e().to(.2, {
opacity: 0
})).call(function() {
t._onDismissed();
}).start();
};
e.prototype._onShowed = function() {
this.isAnimated = !0;
};
e.prototype._onDismissed = function() {
this.node.active = !1;
this.isAnimated = !0;
};
return s([ r ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
DisableClick: [ function(t, e) {
"use strict";
cc._RF.push(e, "022871odKZJBKwguzFsPlHn", "DisableClick");
cc.Class({
extends: cc.Component,
onEnable: function() {
this.node.on("touchstart", function(t) {
t.stopPropagation();
});
this.node.on("touchend", function(t) {
t.stopPropagation();
});
},
onDisable: function() {
this.node.off("touchstart", function(t) {
t.stopPropagation();
});
this.node.off("touchend", function(t) {
t.stopPropagation();
});
}
});
cc._RF.pop();
}, {} ],
MoveBulletBanCa: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bf90fCasc9CXa9dOkY8n1Ze", "MoveBulletBanCa");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, c = a.property, l = function(t) {
n(e, t);
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
this.movingNode.setPosition(e - 15, this.movingNode.y);
}
};
s([ c(cc.ProgressBar) ], e.prototype, "progressBar", void 0);
s([ c(cc.Node) ], e.prototype, "movingNode", void 0);
s([ c ], e.prototype, "progressSpeed", void 0);
return s([ r ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
SetIconCoinByServiceId: [ function(t, e) {
"use strict";
cc._RF.push(e, "62aafufcsJCRac9N9sVyADE", "SetIconCoinByServiceId");
(function() {
cc.SetIconCoinByServiceId = cc.Class({
extends: cc.Component,
properties: {
spriteChips: [ cc.Sprite ],
sfChips: [ cc.SpriteFrame ]
},
onEnable: function() {
var t = this;
this.spriteChips.forEach(function(e) {
e.spriteFrame = t.sfChips[0];
});
}
});
}).call(void 0);
cc._RF.pop();
}, {} ],
"ShootFish.Alert": [ function(t, e) {
"use strict";
cc._RF.push(e, "12622SvGP5AIptLnu3Byu/n", "ShootFish.Alert");
cc.Class({
extends: cc.Component,
properties: {
content: cc.Label
},
onLoad: function() {
this.node.x = cc.winSize.width / 2;
this.node.y = cc.winSize.height / 2;
},
start: function() {},
show: function(t) {
this.content.string = t;
},
closePopup: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
"ShootFish.Bullet": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "36d2bcC+d9JWLYn26kehzX6", "ShootFish.Bullet");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/Utils"), r = t("./ShootFish.Play"), c = cc._decorator, l = c.ccclass, h = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.bullet = null;
e.fishNet = null;
e.id = "";
e.targetFishId = -1;
e.worldSize = cc.size(1280, 720);
e.exploreDuration = .8;
e.vX = 0;
e.vY = 0;
e.collisionCount = 4;
e.isExplored = !1;
e.isExploring = !1;
e.curExplore = 0;
e.circle = null;
return e;
}
e.prototype.run = function() {
var t = Number(r.default.SERVER_CONFIG.BulletSpeed);
(isNaN(t) || 0 == t) && (t = 1400);
var e = a.default.degreesToVec2(-this.node.angle);
this.vX = e.x * t;
this.vY = e.y * t;
this.collisionCount = 4;
this.isExplored = !1;
this.isExploring = !1;
this.bullet.active = !0;
this.fishNet.active = !1;
this.circle = new SAT.Circle(new SAT.Vector(this.node.position.x, this.node.position.y), Number(r.default.SERVER_CONFIG.BulletRadius));
};
e.prototype.updateRealTime = function(t) {
if (!this.isExplored) if (this.isExploring) {
this.curExplore -= t;
if (this.curExplore <= 0) {
this.isExplored = !0;
this.node.active = !1;
}
} else {
var e = this.node.position;
e.x += this.vX * t;
e.y += this.vY * t;
this.node.position = e;
if (Math.abs(e.x) > this.worldSize.width / 2) {
this.vX *= -1;
var o = Math.atan2(this.vY, this.vX) * a.default.Rad2Deg;
this.node.angle = -o;
e.x = (e.x < 0 ? -1 : 1) * this.worldSize.width / 2;
this.node.position = e;
this.collisionCount--;
} else if (Math.abs(e.y) > this.worldSize.height / 2) {
this.vY *= -1;
o = Math.atan2(this.vY, this.vX) * a.default.Rad2Deg;
this.node.angle = -o;
e.y = (e.y < 0 ? -1 : 1) * this.worldSize.height / 2;
this.node.position = e;
this.collisionCount--;
}
this.circle.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
this.collisionCount < 0 && (this.node.active = !1);
}
};
e.prototype.explore = function() {
this.isExploring = !0;
this.curExplore = this.exploreDuration;
this.bullet.active = !1;
this.fishNet.active = !0;
this.fishNet.opacity = 0;
this.fishNet.angle = 0;
this.fishNet.scale = 0;
this.fishNet.stopAllActions();
var t = cc.tween;
t(this.fishNet).parallel(t().to(.3, {
scale: 1.1
}).delay(.07).to(.3, {
scale: 1
}), t().to(.1, {
opacity: 255
}), t().delay(.25).to(.5, {
angle: -35
}), t().delay(.4).to(.3, {
opacity: 0
})).start();
};
e.prototype.getCircle = function() {
return this.circle;
};
s([ h(cc.Node) ], e.prototype, "bullet", void 0);
s([ h(cc.Node) ], e.prototype, "fishNet", void 0);
return s([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0,
"./ShootFish.Play": "ShootFish.Play"
} ],
"ShootFish.CoinEffect": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f3de4Savp5BHqfZYOvwMNmn", "ShootFish.CoinEffect");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/Utils"), r = cc._decorator, c = r.ccclass, l = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lblCoin = null;
e.coinExplore = null;
e.coin0 = null;
e.coin1 = null;
e.coin2 = null;
return e;
}
e.prototype.run = function(t, e, o) {
var i = this;
this.coinExplore.node.position = e;
this.coin0.stopAllActions();
this.coin0.position = e.clone().add(cc.v2(a.default.randomRange(80, -80), a.default.randomRange(80, -80)));
this.coin0.scale = 0;
this.coin1.stopAllActions();
this.coin1.position = e.clone().add(cc.v2(a.default.randomRange(80, -80), a.default.randomRange(80, -80)));
this.coin1.scale = 0;
this.coin2.stopAllActions();
this.coin2.position = e.clone().add(cc.v2(a.default.randomRange(80, -80), a.default.randomRange(80, -80)));
this.coin2.scale = 0;
this.lblCoin.string = a.default.formatNumber(t);
this.lblCoin.node.position = e;
this.lblCoin.node.stopAllActions();
this.lblCoin.node.opacity = 0;
this.lblCoin.node.scale = 0;
var n = cc.tween;
n(this.lblCoin.node).parallel(n().to(.2, {
opacity: 255
}), n().to(.2, {
scale: 1
})).by(.1, {
position: cc.v2(0, 5)
}).by(.1, {
position: cc.v2(0, -5)
}).by(.1, {
position: cc.v2(0, 5)
}).by(.1, {
position: cc.v2(0, -5)
}).by(.1, {
position: cc.v2(0, 5)
}).by(.1, {
position: cc.v2(0, -5)
}).by(.1, {
position: cc.v2(0, 5)
}).by(.1, {
position: cc.v2(0, -5)
}).to(.15, {
opacity: 0
}).start();
this.coinExplore.setAnimation(0, "Idle", !1);
cc.tween(this.coin0).to(.15, {
scale: a.default.randomRange(.7, 1)
}).delay(.4).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).to(.7, {
position: o
}).to(.15, {
scale: 0
}).start();
cc.tween(this.coin1).to(.15, {
scale: a.default.randomRange(.7, 1)
}).delay(.55).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).to(.7, {
position: o
}).to(.15, {
scale: 0
}).start();
cc.tween(this.coin2).to(.15, {
scale: a.default.randomRange(.7, 1)
}).delay(.7).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).by(.1, {
position: cc.v2(0, 50)
}).by(.1, {
position: cc.v2(0, -50)
}).to(.7, {
position: o
}).to(.15, {
scale: 0
}).call(function() {
i.node.active = !1;
}).start();
};
s([ l(cc.Label) ], e.prototype, "lblCoin", void 0);
s([ l(sp.Skeleton) ], e.prototype, "coinExplore", void 0);
s([ l(cc.Node) ], e.prototype, "coin0", void 0);
s([ l(cc.Node) ], e.prototype, "coin1", void 0);
s([ l(cc.Node) ], e.prototype, "coin2", void 0);
return s([ c ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0
} ],
"ShootFish.Confirm": [ function(t, e) {
"use strict";
cc._RF.push(e, "8a74edbPZBMJqeLeGX4cxFU", "ShootFish.Confirm");
cc.Class({
extends: cc.Component,
properties: {
content: cc.Label,
close: cc.Node,
ok: cc.Node
},
onLoad: function() {
this.node.x = cc.winSize.width / 2;
this.node.y = cc.winSize.height / 2;
},
start: function() {},
showMessage: function(t, e, o) {
var i = this;
void 0 === e && (e = null);
void 0 === o && (o = null);
this.content.string = t;
this.close.on("click", function() {
i.node.active = !1;
null != e && e("ok");
});
this.ok.on("click", function() {
i.node.active = !1;
null != o && o("ok");
});
},
closePopup: function() {
this.node.active = !1;
}
});
cc._RF.pop();
}, {} ],
"ShootFish.Dialog": [ function(t, e) {
"use strict";
cc._RF.push(e, "47d5aYvdB1AY5jTm/LbylLr", "ShootFish.Dialog");
cc.Class({
extends: cc.Component,
properties: {},
init: function() {
this.actionShow = cc.spawn(cc.scaleTo(.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(.5, 255));
this.objShow = null;
this.objTmp = null;
},
onClickBack: function() {
cc.RedT.audio.playUnClick();
this.onBack();
},
onBack: function() {
if (null != this.objShow) if (null == this.objShow.previous || null == this.objShow.previous) {
this.objShow.active = !1;
this.node.active = !1;
this.objShow = null;
} else {
this.objTmp = this.objShow;
this.objShow = this.objShow.previous;
this.objTmp.previous = null;
this.objTmp.active = !1;
this.objShow.active = !0;
this.objTmp = null;
} else this.node.active = !1;
},
onClosePrevious: function(t) {
if (void 0 !== t.previous && null !== t.previous) {
this.onClosePrevious(t.previous);
delete t.previous;
}
t.active = !1;
},
onCloseDialog: function() {
if (null != this.objShow) if (null == this.objShow.previous || null == this.objShow.previous) {
this.objShow.active = this.node.active = !1;
this.objShow = null;
} else {
this.onClosePrevious(this.objShow.previous);
this.objShow.active = this.node.active = !1;
delete this.objShow.previous;
this.objShow = null;
} else this.node.active = !1;
},
resetSizeDialog: function(t) {
t.stopAllActions();
t.scale = .5;
t.opacity = 0;
},
showHistory: function() {
this.history.node.previous = this.objShow;
this.node.active = this.history.node.active = !0;
this.objShow = this.history.node;
},
showTop: function() {
this.node.active = this.top.node.active = !0;
this.objShow = this.top.node;
},
showSetting: function() {
cc.log("test");
this.node.active = this.setting.node.active = !0;
this.objShow = this.setting.node;
}
});
cc._RF.pop();
}, {} ],
"ShootFish.EffectBigWin": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3e4a4YbN9FGnbtYmPvTrs9e", "ShootFish.EffectBigWin");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/Utils"), r = cc._decorator, c = r.ccclass, l = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeleton = null;
e.lblNickname = null;
e.lblServiceName = null;
e.lblCoin = null;
return e;
}
e.prototype.show = function(t, e, o, i) {
var n = this;
void 0 === e && (e = null);
void 0 === o && (o = 0);
void 0 === i && (i = 0);
this.node.stopAllActions();
if (t) {
var s = "";
switch (i) {
case 1:
s = "[B1]";
break;

case 2:
s = "[B2]";
break;

case 3:
s = "[B3]";
}
this.lblCoin.string = a.default.formatNumber(o);
this.lblCoin.node.active = !1;
this.lblNickname.string = e;
this.lblServiceName.string = s;
this.lblNickname.node.active = !1;
this.skeleton.setAnimation(0, "animation", !1);
this.node.active = !0;
cc.tween(this.node).delay(.7).call(function() {
n.lblNickname.node.active = !0;
n.lblCoin.node.active = !0;
cc.tween(n.node).delay(3).call(function() {
n.node.active = !1;
}).start();
}).start();
} else this.node.active = !1;
};
s([ l(sp.Skeleton) ], e.prototype, "skeleton", void 0);
s([ l(cc.Label) ], e.prototype, "lblNickname", void 0);
s([ l(cc.Label) ], e.prototype, "lblServiceName", void 0);
s([ l(cc.Label) ], e.prototype, "lblCoin", void 0);
return s([ c ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0
} ],
"ShootFish.EffectJackpot": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ce53aga3XZMIaymrxUZy+Ja", "ShootFish.EffectJackpot");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/Utils"), r = cc._decorator, c = r.ccclass, l = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeletons = [];
e.lblNickname = null;
e.lblServiceName = null;
e.lblCoin = null;
return e;
}
e.prototype.show = function(t, e, o, i) {
var n = this;
void 0 === e && (e = null);
void 0 === o && (o = 0);
void 0 === i && (i = 0);
this.node.stopAllActions();
if (t) {
var s = "";
switch (i) {
case 1:
s = "[B1]";
break;

case 2:
s = "[B2]";
break;

case 3:
s = "[B3]";
}
this.lblCoin.string = a.default.formatNumber(o);
this.lblCoin.node.active = !1;
this.lblNickname.string = e;
this.lblServiceName.string = s;
this.lblNickname.node.active = !1;
for (var r = 0; r < this.skeletons.length; r++) this.skeletons[r].setAnimation(0, "Idle", !1);
this.node.active = !0;
this.node.runAction(cc.sequence(cc.delayTime(.7), cc.callFunc(function() {
n.lblNickname.node.active = !0;
n.lblCoin.node.active = !0;
}), cc.delayTime(5), cc.callFunc(function() {
n.node.active = !1;
})));
} else this.node.active = !1;
};
s([ l([ sp.Skeleton ]) ], e.prototype, "skeletons", void 0);
s([ l(cc.Label) ], e.prototype, "lblNickname", void 0);
s([ l(cc.Label) ], e.prototype, "lblServiceName", void 0);
s([ l(cc.Label) ], e.prototype, "lblCoin", void 0);
return s([ c ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0
} ],
"ShootFish.Fish": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8dcf1d04CtOE75piBWi/t9b", "ShootFish.Fish");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ShootFish.Play"), r = t("../../../../framework/common/Utils"), c = t("./networks/ShootFishNetworkClient"), l = cc._decorator, h = l.ccclass, u = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.anim = null;
e.lblId = null;
e.isDie = !1;
e.type = -1;
e.polygon = null;
e.dataPointsUpdate = [];
e.currentStep = 0;
e.currentTimeStep = -1;
e.currentVStepX = 0;
e.currentVStepY = 0;
return e;
}
e.prototype.setData = function(t) {
this.id = t.id;
this.lblId.string = this.id.toString();
if (t.h <= 0 || 0 == t.path.length) {
this.die();
t.path.length;
} else {
if (this.type != t.t) {
this.type = t.t;
this.anim.removeAllChildren();
cc.instantiate(a.default.instance.getFishAnimByType(this.type)).parent = this.anim;
var e = t.H, o = t.w;
this.polygon = new SAT.Box(new SAT.Vector(0, 0), e, o).toPolygon();
this.polygon.translate(-e / 2, -o / 2);
this.node.width = e;
this.node.height = o;
}
var i = Number(t.dx), n = Number(t.dy), s = Number(t.px), l = Number(t.py), h = t.path, u = c.default.serverCurrentTimeMillis();
this.node.angle = -Math.atan2(n, i) * r.default.Rad2Deg;
for (var p = [], d = 0; d < h.length; d++) {
var f = {
t: Number(h[d].t)
};
f.p = cc.v2(Number(h[d].x), Number(h[d].y));
switch (a.default.instance.mePlayer.serverPos) {
case 1:
f.p = cc.v2(-Number(h[d].x), Number(h[d].y));
break;

case 2:
f.p = cc.v2(-Number(h[d].x), -Number(h[d].y));
break;

case 3:
f.p = cc.v2(Number(h[d].x), -Number(h[d].y));
}
p.push(f);
}
this.node.position = cc.v2(s, l);
switch (a.default.instance.mePlayer.serverPos) {
case 1:
this.node.position = cc.v2(-s, l);
break;

case 2:
this.node.position = cc.v2(-s, -l);
break;

case 3:
this.node.position = cc.v2(s, -l);
}
var g = !0, y = -1;
this.dataPointsUpdate.length = 0;
for (var v = 1; v < p.length; v++) {
var b = p[v - 1], m = p[v], S = b.p, F = m.p, C = b.t, w = m.t;
if (u - w < 0) {
y < 0 && (y = v);
var _ = F.clone().sub(S), I = Math.atan2(_.y, _.x) * r.default.Rad2Deg, k = 0;
if (g) {
k = (w - u) / 1e3;
g = !1;
} else k = (w - C) / 1e3;
this.dataPointsUpdate.push({
p: F,
t: k,
a: I,
tms: w
});
}
}
this.currentTimeStep = -1;
this.currentStep = 0;
this.currentVStepX = 0;
this.currentVStepY = 0;
if (this.dataPointsUpdate.length > 0) {
this.currentTimeStep = this.dataPointsUpdate[this.currentStep].t;
_ = this.dataPointsUpdate[this.currentStep].p.sub(this.node.position);
this.currentVStepX = _.x / this.currentTimeStep;
this.currentVStepY = _.y / this.currentTimeStep;
this.node.angle = -this.dataPointsUpdate[this.currentStep].a;
}
this.isDie = !1;
this.node.active = !0;
}
};
e.prototype.updateRealTime = function(t) {
if (this.node.active && !this.isDie && this.dataPointsUpdate.length > 0 && this.currentTimeStep >= 0) {
var e = this.node.position;
this.currentTimeStep -= t;
if (this.currentTimeStep < 0) {
this.currentStep++;
if (this.currentStep < this.dataPointsUpdate.length) {
this.currentTimeStep = this.dataPointsUpdate[this.currentStep].t + Math.abs(this.currentTimeStep);
this.node.angle = -this.dataPointsUpdate[this.currentStep].a;
this.polygon.angle = -this.node.angle * r.default.Deg2Rad;
var o = this.dataPointsUpdate[this.currentStep].p.sub(e);
this.currentVStepX = o.x / this.currentTimeStep;
this.currentVStepY = o.y / this.currentTimeStep;
}
}
e.x += this.currentVStepX * t;
e.y += this.currentVStepY * t;
this.node.position = e;
}
};
e.prototype.die = function() {
this.isDie = !0;
this.node.active = !1;
};
e.prototype.getPolygon = function() {
this.polygon.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
return this.polygon;
};
e.prototype.hurt = function() {
if (0 != this.anim.children.length && 0 != this.anim.children[0].children.length) {
this.anim.children[0].children[0].stopActionByTag(99);
cc.sequence(cc.tintTo(.05, 255, 54, 54), cc.delayTime(.1), cc.tintTo(.05, 255, 255, 255)).setTag(99);
cc.tween(this.anim.children[0].children[0]).to(.05, {
color: new cc.Color(255, 54, 54)
}).delay(.1).to(.05, {
color: new cc.Color(255, 255, 255)
}).start();
}
};
s([ u(cc.Node) ], e.prototype, "anim", void 0);
s([ u(cc.Label) ], e.prototype, "lblId", void 0);
return s([ h ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0,
"./ShootFish.Play": "ShootFish.Play",
"./networks/ShootFishNetworkClient": "ShootFishNetworkClient"
} ],
"ShootFish.Helper": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d4d75J35RJGwqg2V+LjD47k", "ShootFish.Helper");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = cc._decorator, r = a.ccclass, c = (a.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.getIsSound = function() {
return this.isSound;
};
e.getIsMusic = function() {
return this.isMusic;
};
e.setSound = function(t) {
cc.log("setSound: " + t);
this.isSound = t;
};
e.setMusic = function(t) {
cc.log("setMusic: " + t);
this.isMusic = t;
};
e.isSound = !0;
e.isMusic = !0;
return s([ r ], e);
}(cc.Component));
o.default = c;
cc._RF.pop();
}, {} ],
"ShootFish.Lobby": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4378bty4U5E8KWt2uwkMkhd", "ShootFish.Lobby");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ShootFish.Play"), r = t("./common/Configs"), c = t("./ShootFish.PopupCoinTransfer"), l = t("./ShootFish.Dialog"), h = t("../../../../framework/common/Utils"), u = t("../../../../framework/common/BroadcastReceiver"), p = t("./networks/ShootFishNetworkClient"), d = t("./common/Common.AudioManager"), f = cc._decorator, g = f.ccclass, y = f.property, v = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.playNode = null;
e.lblBalance = null;
e.popupCoinTransfer = null;
e.dialog = null;
e.clipBgm = null;
e.clipClick = null;
e.play = null;
return e;
}
o = e;
e.prototype.onLoad = function() {
var t = this;
console.log(fzgui.UserManager.instance.mainUserInfo);
r.default.Login.Token = fzgui.UserManager.instance.mainUserInfo.UserName + fzgui.UserManager.instance.mainUserInfo.PassWord + fzgui.UserManager.instance.mainUserInfo.Money;
console.log("Configs.Login.Token: ", r.default.Login.Token);
r.default.Login.Username = fzgui.UserManager.instance.mainUserInfo.UserName;
r.default.Login.Nick = fzgui.UserManager.instance.mainUserInfo.UserName;
r.default.Login.Password = fzgui.UserManager.instance.mainUserInfo.PassWord;
r.default.Login.Coin = fzgui.UserManager.instance.mainUserInfo.Money;
o.instance = this;
this.play = this.playNode.getComponent(a.default);
this.play.node.active = !1;
this.lblBalance.string = h.default.formatNumber(r.default.Login.CoinFish);
u.default.register(u.default.USER_UPDATE_COIN, function() {
t.lblBalance.string = h.default.formatNumber(r.default.Login.CoinFish);
}, this);
this.connectToServer();
d.default.getInstance().playBackgroundMusic(this.clipBgm);
};
e.prototype.onData = function() {
console.log("onData");
};
e.prototype.onDestroy = function() {
p.default.getInstance().disconnect();
d.default.getInstance().stopBackgroundMusic();
cc.find("Control") && cc.find("Control").getComponent("Control").startSound();
};
e.prototype.connectToServer = function() {
var t = this;
p.default.getInstance().disconnect();
cc.log(p.default.getInstance());
p.default.getInstance().checkConnect(function(e) {
Global.isLogin = e;
if (e) {
a.default.SERVER_CONFIG = r.default.Login.FishConfigs;
u.default.send(u.default.USER_UPDATE_COIN);
if (r.default.Login.CoinFish <= 0) {
fzgui.UITextManager.showCenterNotification("Tiền trong Bắn Cá của bạn đã hết, vui lòng chuyển vào thêm!");
t.popupCoinTransfer.show();
}
} else fzgui.UITextManager.showCenterNotification("Đăng nhập thất bại, vui lòng thử lại.");
});
p.default.getInstance().addOnClose(function() {
fzgui.UITextManager.showCenterNotification("Mất kết nối, đang thử kết nối lại...");
}, this);
};
e.prototype.actBack = function() {
fzgui.GameCoreManager.instance.onBackToLobby();
fzgui.EventDispatch.instance.emit(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, fzgui.UserManager.instance.mainUserInfo.Money);
};
e.prototype.actHonors = function() {};
e.prototype.actRoom1 = function() {
this.show(!1);
d.default.getInstance().playEffect(this.clipClick);
this.play.show(!0, 1);
};
e.prototype.actRoom2 = function() {
this.show(!1);
d.default.getInstance().playEffect(this.clipClick);
this.play.show(!0, 2);
};
e.prototype.actRoom3 = function() {
this.show(!1);
d.default.getInstance().playEffect(this.clipClick);
this.play.show(!0, 3);
};
e.prototype.show = function(t) {
this.node.active = t;
u.default.send(u.default.USER_UPDATE_COIN);
};
var o;
e.instance = null;
s([ y(cc.Node) ], e.prototype, "playNode", void 0);
s([ y(cc.Label) ], e.prototype, "lblBalance", void 0);
s([ y(c.default) ], e.prototype, "popupCoinTransfer", void 0);
s([ y(l.default) ], e.prototype, "dialog", void 0);
s([ y({
type: cc.AudioClip
}) ], e.prototype, "clipBgm", void 0);
s([ y({
type: cc.AudioClip
}) ], e.prototype, "clipClick", void 0);
return o = s([ g ], e);
}(cc.Component);
o.default = v;
cc._RF.pop();
}, {
"../../../../framework/common/BroadcastReceiver": void 0,
"../../../../framework/common/Utils": void 0,
"./ShootFish.Dialog": "ShootFish.Dialog",
"./ShootFish.Play": "ShootFish.Play",
"./ShootFish.PopupCoinTransfer": "ShootFish.PopupCoinTransfer",
"./common/Common.AudioManager": "Common.AudioManager",
"./common/Configs": "Configs",
"./networks/ShootFishNetworkClient": "ShootFishNetworkClient"
} ],
"ShootFish.PanelMenu": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ebbaXYFItGA4MRPRT0exe9", "ShootFish.PanelMenu");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/BroadcastReceiver"), r = t("./ShootFish.Helper"), c = cc._decorator, l = c.ccclass, h = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.arrow = null;
e.sfSettingdOn = null;
e.sfSettingOff = null;
e.btnSound = null;
e.sfSoundOn = null;
e.sfSoundOff = null;
e.btnMusic = null;
e.sfMusicOn = null;
e.sfMusicOff = null;
e.isShow = !1;
return e;
}
e.prototype.show = function(t) {
this.isShow = t;
if (this.isShow) {
this.arrow.getComponent(cc.Sprite).spriteFrame = this.sfSettingdOn;
cc.tween(this.node).to(.3, {
position: cc.v2(-115, 0)
}).start();
} else {
this.arrow.getComponent(cc.Sprite).spriteFrame = this.sfSettingOff;
cc.tween(this.node).to(.3, {
position: cc.v2(0, 0)
}).start();
}
this.btnSound.getComponent(cc.Sprite).spriteFrame = r.default.getIsSound() ? this.sfSoundOn : this.sfSoundOff;
this.btnMusic.getComponent(cc.Sprite).spriteFrame = r.default.getIsMusic() ? this.sfMusicOn : this.sfMusicOff;
};
e.prototype.toggleShow = function() {
this.show(!this.isShow);
};
e.prototype.toggleSound = function() {
r.default.getIsSound() ? r.default.setSound(!1) : r.default.setSound(!0);
this.btnSound.getComponent(cc.Sprite).spriteFrame = r.default.getIsSound() ? this.sfSoundOn : this.sfSoundOff;
a.default.send(a.default.ON_AUDIO_CHANGED);
};
e.prototype.toggleMusic = function() {
r.default.getIsMusic() ? r.default.setMusic(!1) : r.default.setMusic(!0);
this.btnMusic.getComponent(cc.Sprite).spriteFrame = r.default.getIsMusic() ? this.sfMusicOn : this.sfMusicOff;
a.default.send(a.default.ON_AUDIO_CHANGED);
};
s([ h(cc.Node) ], e.prototype, "arrow", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfSettingdOn", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfSettingOff", void 0);
s([ h(cc.Button) ], e.prototype, "btnSound", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfSoundOn", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfSoundOff", void 0);
s([ h(cc.Button) ], e.prototype, "btnMusic", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfMusicOn", void 0);
s([ h(cc.SpriteFrame) ], e.prototype, "sfMusicOff", void 0);
return s([ l ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {
"../../../../framework/common/BroadcastReceiver": void 0,
"./ShootFish.Helper": "ShootFish.Helper"
} ],
"ShootFish.Player": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "720d1dsYhpMV5P3msI2r43M", "ShootFish.Player");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("../../../../framework/common/Utils"), r = cc._decorator, c = r.ccclass, l = r.property, h = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.localPos = 0;
e.lblNickname = null;
e.lblServiceName = null;
e.lblCoin = null;
e.lblBet = null;
e.gunRotate = null;
e.sprGunBar = null;
e.sprFramesGunBar = [];
e.guns = [];
e.id = 0;
e.username = "";
e.nickname = "";
e.serviceId = 0;
e.coin = 0;
e.avatar = "";
e.serverPos = -1;
e.gun = null;
e.curGunIdx = -1;
return e;
}
e.prototype.set = function(t, e, o, i, n, s) {
this.id = t;
this.username = e;
this.nickname = o;
this.coin = i;
this.avatar = n;
this.gunRotate.angle = 0;
this.node.active = !0;
var r = "";
switch (s) {
case 1:
r = "[B1]";
break;

case 2:
r = "[B2]";
break;

case 3:
r = "[B3]";
}
this.lblServiceName.string = r;
var c = this.nickname;
c && (c = c.length > 6 ? c.substring(0, 6) + ".." : c.substring(0, 6));
this.lblNickname.string = c;
this.lblCoin.string = a.default.formatNumber(i);
switch (this.localPos) {
case 0:
case 1:
this.gunRotate.angle = -90;
break;

case 2:
case 3:
this.gunRotate.angle = 90;
}
this.setGun(0);
};
e.prototype.updateCash = function(t) {
this.lblCoin.string = a.default.formatNumber(t);
};
e.prototype.leave = function() {
this.id = -1;
this.nickname = "";
this.coin = 0;
this.avatar = "";
this.node.active = !1;
};
e.prototype.setGun = function(t) {
t >= this.guns.length && (t = 0);
if (this.curGunIdx != t) {
this.curGunIdx = t;
for (var e = 0; e < this.guns.length; e++) this.guns[e].node.active = e == t;
this.gun = this.guns[t];
}
};
e.prototype.rotateGun = function(t) {
var e = this.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO), o = t.sub(e), i = Math.atan2(o.y, o.x) * a.default.Rad2Deg;
this.gunRotate.angle = -i;
};
e.prototype.shoot = function() {
this.gun.setAnimation(0, "Attack-1", !1);
this.gun.addAnimation(0, "Idle", !0);
this.gun.setAnimation(0, "2", !1);
this.gun.addAnimation(0, "1", !0);
};
s([ l ], e.prototype, "localPos", void 0);
s([ l(cc.Label) ], e.prototype, "lblNickname", void 0);
s([ l(cc.Label) ], e.prototype, "lblServiceName", void 0);
s([ l(cc.Label) ], e.prototype, "lblCoin", void 0);
s([ l(cc.Label) ], e.prototype, "lblBet", void 0);
s([ l(cc.Node) ], e.prototype, "gunRotate", void 0);
s([ l(cc.Sprite) ], e.prototype, "sprGunBar", void 0);
s([ l([ cc.SpriteFrame ]) ], e.prototype, "sprFramesGunBar", void 0);
s([ l([ sp.Skeleton ]) ], e.prototype, "guns", void 0);
return s([ c ], e);
}(cc.Component);
o.default = h;
cc._RF.pop();
}, {
"../../../../framework/common/Utils": void 0
} ],
"ShootFish.Play": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5fa1efbhuJLl5N2iupithus", "ShootFish.Play");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./ShootFish.Player"), r = t("./ShootFish.Bullet"), c = t("../../../../framework/common/Utils"), l = t("./ShootFish.Fish"), h = t("./common/Configs"), u = t("../../../../framework/common/Tween"), p = t("./ShootFish.CoinEffect"), d = t("./ShootFish.EffectJackpot"), f = t("./ShootFish.Lobby"), g = t("./ShootFish.PanelMenu"), y = t("./ShootFish.PopupGuide"), v = t("./ShootFish.EffectBigWin"), b = t("./networks/ShootFishNetworkClient"), m = t("./common/Common.AudioManager"), S = cc._decorator, F = S.ccclass, C = S.property, w = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lobby = null;
e.loading = null;
e.touchPad = null;
e.sprFramesBullet = [];
e.bulletTemplate = null;
e.players = [];
e.fishsAnim = [];
e.fishsNode = null;
e.fishTemplate = null;
e.coinEffectTemplate = null;
e.lblJackpot = null;
e.toggleAuto = null;
e.target = null;
e.waveState = null;
e.btnFastShoot = null;
e.progressFastShoot = null;
e.lblFastShootTime = null;
e.btnTargetFish = null;
e.progressTargetFish = null;
e.lblTargetFishTime = null;
e.effectJackpot = null;
e.effectBigWin = null;
e.effectMegaWin = null;
e.panelMenu = null;
e.popupGuide = null;
e.lblPing = null;
e.lblServerTime = null;
e.clipClick = null;
e.clipHit = null;
e.clipCoin = null;
e.clipJackpot = null;
e.mePlayer = null;
e.bullets = [];
e.fishs = [];
e.coinEffects = [];
e.isStateGeted = !1;
e.inited = !1;
e.lastUpdateTime = -1;
e.roomId = 0;
e.listBet = [];
e.listJackpot = [];
e.betIdx = 0;
e.mapPlayersIdx = [ [ 0, 1, 2, 3 ], [ 1, 0, 3, 2 ], [ 2, 3, 0, 1 ], [ 3, 2, 1, 0 ] ];
e.shootInterval = .25;
e.fastShootInterval = .13;
e.curShootInterval = 0;
e.isShoot = !1;
e.isFastShoot = !1;
e.isTargetFish = !1;
e.targetFish = null;
e.intervalFindTargetFish = 2;
e.curIntervalFindTargetFish = 0;
e.curTimeFastShootCountdown = 0;
e.curTimeTargetFishCountdown = 0;
e.tweens = new Array();
return e;
}
o = e;
e.prototype.init = function() {
this.inited || (this.mePlayer = this.players[0]);
};
e.prototype.onLoad = function() {
o.instance = this;
};
e.prototype.start = function() {
var t = this;
this.bulletTemplate.active = !1;
this.touchPad.on(cc.Node.EventType.TOUCH_START, function(e) {
var o = e.getLocation();
t.mePlayer.rotateGun(o);
t.isShoot = !0;
}, this.touchPad);
this.touchPad.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
var o = e.getLocation();
t.mePlayer.rotateGun(o);
}, this.touchPad);
this.touchPad.on(cc.Node.EventType.TOUCH_END, function() {
t.isShoot = !1;
}, this.touchPad);
this.touchPad.on(cc.Node.EventType.TOUCH_CANCEL, function() {
t.isShoot = !1;
}, this.touchPad);
this.toggleAuto.node.on("toggle", function() {
t.playClickSound();
if (t.toggleAuto.isChecked) {
t.touchPad.active = !1;
t.curIntervalFindTargetFish = t.intervalFindTargetFish;
t.isShoot = !0;
t.findTargetFishInWorld();
} else t.stopAutoShoot();
});
b.default.getInstance().addListener(function(e, o) {
if (t.node.active && t.isStateGeted) switch (e) {
case "OnUpdateJackpot":
t.listJackpot.length = 0;
t.listJackpot.push(o[t.roomId + "1"]);
t.listJackpot.push(o[t.roomId + "2"]);
t.listJackpot.push(o[t.roomId + "3"]);
t.listJackpot.push(o[t.roomId + "4"]);
u.default.numberTo(t.lblJackpot, t.listJackpot[t.betIdx], .3);
break;

case "OnEnterPlayer":
var i = o.data, n = t.mapPlayersIdx[t.mePlayer.serverPos][i.posIndex];
(f = t.players[n]).set(i.id, i.playerId, i.nickname, i.cash, i.avatar, i.serviceId);
f.serverPos = i.posIndex;
f.lblBet.string = c.default.formatNumberMin(t.listBet[t.betIdx]);
break;

case "OnLeavePlayer":
if ((a = o.playerId) == h.default.Login.UsernameFish) {
1 == o.reason && fzgui.UIPopupManager.instance.showPopup("Bạn được mời ra khỏi phòng do không thao tác trong thời gian dài.");
t.back();
}
if (null == (f = t.getPlayerByUsername(a))) break;
f.leave();
break;

case "OnUpdateObject":
var s = o.id;
if (null == (p = t.getFishById(s))) break;
p.setData(o);
break;

case "OnUpdateCash":
var a = o.playerId, r = Number(o.cash), l = o.scr;
a == h.default.Login.UsernameFish && (h.default.Login.CoinFish = r);
if (null == (f = t.getPlayerByUsername(a))) break;
f.coin = r;
f.lblCoin.string = c.default.formatNumber(r);
switch (l) {
case 2:
t.effectBigWin.show(!1);
t.effectMegaWin.show(!1);
t.effectJackpot.show(!0, f.nickname, r, f.serviceId);
m.default.getInstance().playEffect(t.clipJackpot);
}
break;

case "OnObjectDie":
s = o.id, r = o.value;
var p, d = o.playerId;
if (null == (p = t.getFishById(s))) break;
p.die();
if (p == t.targetFish) {
t.exploreAllBulletWithTargetFishId(t.targetFish.id);
t.target.active = !1;
t.targetFish = null;
t.curIntervalFindTargetFish = 0;
}
if (null == (f = t.getPlayerByUsername(d))) break;
t.getCoinEffect().run(r, p.node.position, f.node.position);
switch (p.type) {
case 15:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
t.effectJackpot.node.active || t.effectMegaWin.show(!0, f.nickname, r, f.serviceId);
break;

case 22:
case 23:
case 24:
t.effectJackpot.node.active || t.effectBigWin.show(!0, f.nickname, r, f.serviceId);
}
break;

case "OnShoot":
a = o.playerId;
var f, g = Number(o.type) - 1, y = o.rad, v = Number(o.target), b = Number(o.cash);
if (a == h.default.Login.UsernameFish) break;
if (null == (f = t.getPlayerByUsername(a))) break;
"#BOT" === a.substring(0, 4) && f.updateCash(b);
var S = y;
switch (t.mePlayer.serverPos) {
case 0:
S = y;
break;

case 1:
S = Math.PI - y;
break;

case 2:
S = y - Math.PI;
break;

case 3:
S = -y;
}
f.lblBet.string = c.default.formatNumberMin(t.listBet[g]);
f.gunRotate.angle = -S * c.default.Rad2Deg;
f.setGun(g);
f.shoot();
var F = t.getBullet();
F.targetFishId = v;
F.bullet.getComponent(cc.Sprite).spriteFrame = t.sprFramesBullet[g];
F.node.angle = f.gunRotate.angle;
var C = F.node.parent.convertToNodeSpaceAR(f.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
C.x += 90 * c.default.degreesToVec2(-F.node.angle).x;
C.y += 90 * c.default.degreesToVec2(-F.node.angle).y;
F.node.position = C;
F.run();
m.default.getInstance().playEffect(t.clipHit);
break;

case "OnChat":
break;

case "OnNewState":
switch (o.state) {
case 3:
t.waveState.stopAllActions();
t.waveState.active = !0;
var w = t.waveState.position;
w.x = 1400;
t.waveState.position = w;
w.x = -1400;
cc.tween(t.waveState).to(1, {
position: w
}).call(function() {
t.waveState.active = !1;
}).start();
}
break;

case "OnJackpot":
o.nickname;
var _ = o.value;
switch (o.tableIndex) {
case 2:
"Phòng 2";
break;

case 3:
"Phòng 3";
}
c.default.formatNumber(_);
}
}, this);
this.init();
};
e.prototype.onDisable = function() {
this.tweens.forEach(function(t) {
t.stop();
});
};
e.prototype.onDestroy = function() {
this.tweens.forEach(function(t) {
t.stop();
});
};
e.prototype.update = function(t) {
null != this.lblPing && (this.lblPing.string = b.default.PING + "ms");
null != this.lblServerTime && this.lblServerTime.node.active && (this.lblServerTime.string = "t: " + b.default.systemCurrentTimeMillis() + " d: " + b.default.TIME_DISTANCE + " mp: " + b.default.MIN_PING);
var e = b.default.systemCurrentTimeMillis();
this.isStateGeted && this.lastUpdateTime > 0 && e - this.lastUpdateTime > 500 && this.getState(!1);
this.lastUpdateTime = e;
if (this.curTimeFastShootCountdown > 0) {
this.curTimeFastShootCountdown = Math.max(0, this.curTimeFastShootCountdown - t);
this.lblFastShootTime.string = Math.round(this.curTimeFastShootCountdown) + "s";
if (0 == this.curTimeFastShootCountdown) {
this.lblFastShootTime.node.active = !1;
this.btnFastShoot.enabled = !0;
}
}
if (this.curTimeTargetFishCountdown > 0) {
this.curTimeTargetFishCountdown = Math.max(0, this.curTimeTargetFishCountdown - t);
this.lblTargetFishTime.string = Math.round(this.curTimeTargetFishCountdown) + "s";
if (0 == this.curTimeTargetFishCountdown) {
this.lblTargetFishTime.node.active = !1;
this.btnTargetFish.enabled = !0;
}
}
this.updateShoot(t);
for (var o = 0, i = this.bullets.length; o < i; o++) this.bullets[o].updateRealTime(t);
var n = new Array();
for (o = 0, i = this.fishs.length; o < i; o++) {
var s = this.fishs[o];
s.updateRealTime(t);
s.node.active && Math.abs(s.node.x) < 704 && Math.abs(s.node.y) < 360 * 1.1 ? n.push(s.getPolygon()) : n.push(null);
}
o = 0;
for (var a = this.bullets.length; o < a; o++) {
var r = this.bullets[o];
if (r.node.active && !r.isExploring && !r.isExplored) for (var c = r.getCircle(), l = 0, h = this.fishs.length; l < h; l++) {
var u = this.fishs[l];
if (null != n[l] && !(r.targetFishId > 0 && r.targetFishId != u.id) && SAT.testCirclePolygon(c, n[l])) {
r.explore();
u.hurt();
break;
}
}
}
n.length = 0;
};
e.prototype.play = function() {
var t = this;
this.isStateGeted = !1;
this.resetView();
b.default.getInstance().ping(function() {
b.default.getInstance().ping(function() {
b.default.getInstance().ping(function() {
b.default.getInstance().request("play", {
playerId: h.default.Login.UsernameFish,
password: h.default.Login.PasswordFish,
index: t.roomId,
access_token: h.default.Login.Token
}, function(e) {
if (e.ok) t.getState(!0); else {
switch (e.err) {
case 4:
fzgui.UIPopupManager.instance.showPopup("Số dư không đủ vui lòng nạp thêm.");
break;

case 1:
b.default.getInstance().request("quit", null, function() {}, t);
fzgui.UIPopupManager.instance.showPopup("Lỗi " + e.err + ", vui lòng thử lại.");
break;

default:
fzgui.UIPopupManager.instance.showPopup("Lỗi " + e.err + ", không xác định.");
}
t.show(!1);
t.lobby.getComponent(f.default).show(!0);
}
}, t);
}, t);
}, t);
}, this);
};
e.prototype.resetView = function() {
this.betIdx = 0;
for (var t = 0; t < this.players.length; t++) this.players[t].leave();
for (t = 0; t < this.fishs.length; t++) this.fishs[t].node.removeFromParent();
this.fishs.length = 0;
for (t = 0; t < this.bullets.length; t++) this.bullets[t].node.active = !1;
for (t = 0; t < this.coinEffects.length; t++) this.coinEffects[t].node.active = !1;
this.effectBigWin.show(!1);
this.effectMegaWin.show(!1);
this.effectJackpot.show(!1);
this.popupGuide.active = !1;
this.waveState.stopAllActions();
this.waveState.active = !1;
};
e.prototype.getJackpot = function() {
var t = this;
b.default.getInstance().request("getJackpot", null, function(e) {
if (e.ok) {
t.listJackpot.length = 0;
t.listJackpot.push(e.data[t.roomId + "1"]);
t.listJackpot.push(e.data[t.roomId + "2"]);
t.listJackpot.push(e.data[t.roomId + "3"]);
t.listJackpot.push(e.data[t.roomId + "4"]);
u.default.numberTo(t.lblJackpot, t.listJackpot[t.betIdx], .3);
}
}, this);
};
e.prototype.getState = function(t) {
var e = this;
t || fzgui.UIWaitingLayout.showWaiting();
this.isStateGeted = !1;
this.resetView();
b.default.getInstance().request("state", null, function(i) {
t || fzgui.UIWaitingLayout.hideWaiting();
for (var n = i.players, s = null, a = 0, r = 0; r < n.length; r++) if (n[r].playerId == h.default.Login.UsernameFish) {
a = n[r].posIndex;
s = n[r];
h.default.Login.CoinFish = n[r].cash;
break;
}
for (r = 0; r < n.length; r++) {
var u = e.mapPlayersIdx[a][n[r].posIndex], p = n[r], d = e.players[u];
d.set(p.id, p.playerId, p.nickname, p.cash, p.avatar, p.serviceId);
d.serverPos = p.posIndex;
d.lblBet.string = c.default.formatNumberMin(e.listBet[e.betIdx]);
}
var f = i.objects.concat(i.sobjects);
for (r = 0; r < f.length; r++) {
var g = cc.instantiate(e.fishTemplate).getComponent(l.default);
g.node.parent = e.fishsNode;
g.setData(f[r]);
e.fishs.push(g);
}
var y = i.time - s.rfire, v = o.SERVER_CONFIG.FastFireCoolDownS;
e.progressFastShoot.progress = 0;
if (y > v) {
e.btnFastShoot.enabled = !0;
e.lblFastShootTime.node.active = !1;
} else {
e.btnFastShoot.enabled = !1;
e.curTimeFastShootCountdown = y;
e.lblFastShootTime.string = e.curTimeFastShootCountdown + "s";
e.lblFastShootTime.node.active = !0;
}
var b = i.time - s.snipe, m = o.SERVER_CONFIG.SnipeCoolDownS;
e.progressTargetFish.progress = 0;
if (b > m) {
e.btnTargetFish.enabled = !0;
e.lblFastShootTime.node.active = !1;
} else {
e.btnTargetFish.enabled = !1;
e.curTimeTargetFishCountdown = b;
e.lblTargetFishTime.string = e.curTimeTargetFishCountdown + "s";
e.lblTargetFishTime.node.active = !0;
}
e.isStateGeted = !0;
e.getJackpot();
t && (e.loading.active = !1);
}, this);
};
e.prototype.updateShoot = function(t) {
if (this.toggleAuto.isChecked || this.isTargetFish) if (null != this.targetFish) {
var e = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO), o = this.targetFish.node.convertToWorldSpaceAR(cc.v2(this.targetFish.node.width / 2, 0)), i = c.default.v2Distance(o, e);
if (Math.abs(this.targetFish.node.x) > 512 || Math.abs(this.targetFish.node.y) > 288 || i < 135) {
this.exploreAllBulletWithTargetFishId(this.targetFish.id);
this.target.active = !1;
this.targetFish = null;
this.curIntervalFindTargetFish = 0;
} else {
var n = o.sub(e), s = Math.atan2(n.y, n.x) * c.default.Rad2Deg;
this.mePlayer.gunRotate.angle = -s;
this.target.position = this.target.parent.convertToNodeSpaceAR(o);
}
} else if (!this.isTargetFish) {
this.curIntervalFindTargetFish = Math.max(0, this.curIntervalFindTargetFish - t);
0 == this.curIntervalFindTargetFish && this.findTargetFishInWorld();
}
if (this.curShootInterval > 0) this.curShootInterval = Math.max(0, this.curShootInterval - t); else if (this.isShoot) {
this.curShootInterval = this.isFastShoot ? this.fastShootInterval : this.shootInterval;
if (h.default.Login.CoinFish < this.listBet[this.betIdx]) {
fzgui.UIPopupManager.instance.showPopup("Số dư không đủ, vui lòng nạp thêm.");
this.isShoot = !1;
this.toggleAuto.isChecked && this.stopAutoShoot();
return;
}
if ((this.toggleAuto.isChecked || this.isTargetFish) && null == this.targetFish) return;
h.default.Login.CoinFish = Math.max(0, h.default.Login.CoinFish - this.listBet[this.betIdx]);
this.mePlayer.coin = h.default.Login.CoinFish;
this.mePlayer.lblCoin.string = c.default.formatNumber(h.default.Login.CoinFish);
this.mePlayer.shoot();
var a = -this.mePlayer.gunRotate.angle, r = this.getBullet();
r.bullet.getComponent(cc.Sprite).spriteFrame = this.sprFramesBullet[this.betIdx];
r.targetFishId = null != this.targetFish ? this.targetFish.id : -1;
r.node.angle = -a;
var l = r.node.parent.convertToNodeSpaceAR(this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO));
l.x += 90 * c.default.degreesToVec2(-r.node.angle).x;
l.y += 90 * c.default.degreesToVec2(-r.node.angle).y;
r.node.position = l;
r.run();
m.default.getInstance().playEffect(this.clipHit);
var u = a * c.default.Deg2Rad;
switch (this.mePlayer.serverPos) {
case 0:
u = u;
break;

case 1:
u = Math.PI - u;
break;

case 2:
u -= Math.PI;
break;

case 3:
u = -u;
}
b.default.getInstance().notify("shoot", {
rad: u,
type: this.betIdx + 1,
target: null != this.targetFish ? this.targetFish.id : -1,
rapidFire: this.isFastShoot,
auto: !1
});
}
};
e.prototype.findTargetFishInWorld = function() {
this.curIntervalFindTargetFish = this.intervalFindTargetFish;
for (var t = [], e = this.mePlayer.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO), o = 0; o < this.fishs.length; o++) {
var i = this.fishs[o].node;
if (i.active && Math.abs(i.position.x) <= 512 && Math.abs(i.position.y) <= 288) {
var n = i.convertToWorldSpaceAR(cc.Vec2.ZERO), s = c.default.v2Distance(e, n);
s >= 135 && t.push({
fish: this.fishs[o],
distance: s
});
}
}
if (t.length > 0) {
this.targetFish = t[c.default.randomRangeInt(0, t.length)].fish;
this.target.active = !0;
this.target.position = this.targetFish.node.position;
}
};
e.prototype.stopAutoShoot = function() {
this.isShoot = !1;
this.toggleAuto.isChecked = !1;
this.target.active = !1;
this.touchPad.active = !0;
this.curIntervalFindTargetFish = 0;
this.targetFish = null;
};
e.prototype.getBullet = function() {
for (var t = null, e = 0; e < this.bullets.length; e++) if (!this.bullets[e].node.active) {
t = this.bullets[e];
break;
}
if (null == t) {
var o = cc.instantiate(this.bulletTemplate);
o.parent = this.bulletTemplate.parent;
t = o.getComponent(r.default);
this.bullets.push(t);
}
t.node.active = !0;
t.targetFishId = -1;
return t;
};
e.prototype.exploreAllBulletWithTargetFishId = function(t) {
for (var e = 0; e < this.bullets.length; e++) this.bullets[e].node.active && this.bullets[e].targetFishId >= 0 && this.bullets[e].targetFishId == t && (this.bullets[e].targetFishId = -1);
};
e.prototype.getCoinEffect = function() {
for (var t = null, e = 0; e < this.coinEffects.length; e++) if (!this.coinEffects[e].node.active) {
t = this.coinEffects[e];
break;
}
if (null == t) {
var o = cc.instantiate(this.coinEffectTemplate);
o.parent = this.coinEffectTemplate.parent;
t = o.getComponent(p.default);
this.coinEffects.push(t);
}
t.node.active = !0;
t.node.setSiblingIndex(t.node.parent.children.length - 1);
m.default.getInstance().playEffect(this.clipCoin);
return t;
};
e.prototype.getFishById = function(t) {
for (var e = 0; e < this.fishs.length; e++) if (this.fishs[e].id == t) return this.fishs[e];
return null;
};
e.prototype.getPlayerById = function(t) {
if (t <= 0) return null;
for (var e = 0; e < this.players.length; e++) if (this.players[e].id > 0 && this.players[e].id == t) return this.players[e];
return null;
};
e.prototype.getPlayerByUsername = function(t) {
if (null == t || "" == t) return null;
for (var e = 0; e < this.players.length; e++) if (null != this.players[e].username && "" != this.players[e].username && this.players[e].username == t) return this.players[e];
return null;
};
e.prototype.getFishAnimByType = function(t) {
var e = "";
switch (t) {
case 0:
e = "fish0";
break;

case 1:
e = "fish1";
break;

case 2:
e = "fish2";
break;

case 3:
e = "fish3";
break;

case 4:
e = "fish4";
break;

case 5:
e = "fish5";
break;

case 6:
e = "fish6";
break;

case 7:
e = "fish7";
break;

case 8:
case 9:
e = "fish9";
break;

case 10:
e = "fish10";
break;

case 11:
e = "fish11";
break;

case 12:
e = "fish12";
break;

case 13:
e = "fish13";
break;

case 14:
e = "fish14";
break;

case 15:
e = "fish15";
break;

case 16:
e = "fish16";
break;

case 17:
e = "fish17";
break;

case 18:
e = "fish18";
break;

case 19:
e = "fish19";
break;

case 20:
e = "fish20";
break;

case 21:
e = "fish21";
break;

case 22:
e = "fish22";
break;

case 23:
e = "fish23";
break;

case 24:
e = "fish24";
}
for (var o = 0; o < this.fishsAnim.length; o++) if (null != this.fishsAnim[o].name && "" != this.fishsAnim[o].name && this.fishsAnim[o].name == e) return this.fishsAnim[o];
return this.fishsAnim[0];
};
e.prototype.actGetState = function() {
this.getState(!1);
};
e.prototype.actBetUp = function() {
if (this.betIdx < this.listBet.length - 1) {
this.betIdx++;
this.mePlayer.lblBet.string = c.default.formatNumberMin(this.listBet[this.betIdx]);
this.mePlayer.setGun(this.betIdx);
u.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], .3);
}
m.default.getInstance().playEffect(this.clipClick);
};
e.prototype.actBetDown = function() {
if (this.betIdx > 0) {
this.betIdx--;
this.mePlayer.lblBet.string = c.default.formatNumberMin(this.listBet[this.betIdx]);
this.mePlayer.setGun(this.betIdx);
u.default.numberTo(this.lblJackpot, this.listJackpot[this.betIdx], .3);
}
m.default.getInstance().playEffect(this.clipClick);
};
e.prototype.actBack = function() {
this.back();
m.default.getInstance().playEffect(this.clipClick);
};
e.prototype.actFastShoot = function() {
var t = this;
this.isFastShoot = !0;
this.btnFastShoot.enabled = !1;
var e = o.SERVER_CONFIG.FastFireDuration;
this.progressFastShoot.progress = 1;
this.tweens.push(cc.tween(this.progressFastShoot).to(e, {
progress: 0
}).call(function() {
t.isFastShoot = !1;
t.curTimeFastShootCountdown = o.SERVER_CONFIG.FastFireCoolDownS;
t.lblFastShootTime.string = t.curTimeFastShootCountdown + "s";
t.lblFastShootTime.node.active = !0;
}).start());
m.default.getInstance().playEffect(this.clipClick);
};
e.prototype.actTargetFish = function() {
var t = this;
this.isShoot = !0;
this.isTargetFish = !0;
this.btnTargetFish.enabled = !1;
var e = o.SERVER_CONFIG.SnipeDurationS;
this.progressTargetFish.progress = 1;
this.tweens.push(cc.tween(this.progressTargetFish).to(e, {
progress: 0
}).call(function() {
t.isTargetFish = !1;
t.targetFish = null;
t.target.active = !1;
t.curTimeTargetFishCountdown = o.SERVER_CONFIG.SnipeCoolDownS;
t.lblTargetFishTime.string = t.curTimeTargetFishCountdown + "s";
t.lblTargetFishTime.node.active = !0;
t.fishs.forEach(function(t) {
t.getComponent(cc.Button).enabled = !1;
});
t.isShoot = t.toggleAuto.isChecked;
t.touchPad.active = !t.toggleAuto.isChecked;
}).start());
this.touchPad.active = !1;
this.fishs.forEach(function(e) {
e.getComponent(cc.Button).enabled = !0;
e.node.off("click");
e.node.on("click", function() {
t.targetFish = e;
t.target.active = !0;
});
});
m.default.getInstance().playEffect(this.clipClick);
};
e.prototype.back = function() {
var t = this;
this.isStateGeted = !1;
this.stopAutoShoot();
fzgui.UIWaitingLayout.showWaiting();
b.default.getInstance().request("quit", null, function() {
fzgui.UIWaitingLayout.hideWaiting();
t.resetView();
t.show(!1);
t.lobby.getComponent(f.default).show(!0);
}, this);
};
e.prototype.actEffectJackpotTest = function() {
this.effectJackpot.show(!0, "Test nickname", 54032423);
};
e.prototype.actEffectBigWinTest = function() {
this.effectBigWin.show(!0, "Test nickname", 54032423);
};
e.prototype.actEffectMegaWinTest = function() {
this.effectMegaWin.show(!0, "Test nickname", 54032423);
};
e.prototype.show = function(t, e) {
void 0 === e && (e = 0);
if (t) {
if (!helper.getInfo()) {
this.lobby.getComponent(f.default).show(!0);
fzgui.UIPopupManager.instance.showPopup("Bạn chưa đăng nhập.");
return;
}
this.node.active = !0;
this.loading.active = !0;
this.roomId = e;
this.stopAutoShoot();
this.panelMenu.show(!1);
this.listBet.length = 0;
this.listBet.push(o.SERVER_CONFIG.TypeToValue.Bullet1 * o.SERVER_CONFIG.TableBulletValueRate[this.roomId]);
this.listBet.push(o.SERVER_CONFIG.TypeToValue.Bullet2 * o.SERVER_CONFIG.TableBulletValueRate[this.roomId]);
this.listBet.push(o.SERVER_CONFIG.TypeToValue.Bullet3 * o.SERVER_CONFIG.TableBulletValueRate[this.roomId]);
this.listBet.push(o.SERVER_CONFIG.TypeToValue.Bullet4 * o.SERVER_CONFIG.TableBulletValueRate[this.roomId]);
this.shootInterval = 1 / o.SERVER_CONFIG.FIRE_RATE;
this.fastShootInterval = this.shootInterval / o.SERVER_CONFIG.FastFireRate;
this.play();
} else {
this.popupGuide.active && this.popupGuide.getComponent(y.default).dismiss();
this.node.active = !1;
}
};
e.prototype.playClickSound = function() {
m.default.getInstance().playEffect(this.clipClick);
};
var o;
e.instance = null;
e.SERVER_CONFIG = null;
s([ C(cc.Node) ], e.prototype, "lobby", void 0);
s([ C(cc.Node) ], e.prototype, "loading", void 0);
s([ C(cc.Node) ], e.prototype, "touchPad", void 0);
s([ C([ cc.SpriteFrame ]) ], e.prototype, "sprFramesBullet", void 0);
s([ C(cc.Node) ], e.prototype, "bulletTemplate", void 0);
s([ C([ a.default ]) ], e.prototype, "players", void 0);
s([ C([ cc.Node ]) ], e.prototype, "fishsAnim", void 0);
s([ C(cc.Node) ], e.prototype, "fishsNode", void 0);
s([ C(cc.Node) ], e.prototype, "fishTemplate", void 0);
s([ C(cc.Node) ], e.prototype, "coinEffectTemplate", void 0);
s([ C(cc.Label) ], e.prototype, "lblJackpot", void 0);
s([ C(cc.Toggle) ], e.prototype, "toggleAuto", void 0);
s([ C(cc.Node) ], e.prototype, "target", void 0);
s([ C(cc.Node) ], e.prototype, "waveState", void 0);
s([ C(cc.Button) ], e.prototype, "btnFastShoot", void 0);
s([ C(cc.ProgressBar) ], e.prototype, "progressFastShoot", void 0);
s([ C(cc.Label) ], e.prototype, "lblFastShootTime", void 0);
s([ C(cc.Button) ], e.prototype, "btnTargetFish", void 0);
s([ C(cc.ProgressBar) ], e.prototype, "progressTargetFish", void 0);
s([ C(cc.Label) ], e.prototype, "lblTargetFishTime", void 0);
s([ C(d.default) ], e.prototype, "effectJackpot", void 0);
s([ C(v.default) ], e.prototype, "effectBigWin", void 0);
s([ C(v.default) ], e.prototype, "effectMegaWin", void 0);
s([ C(g.default) ], e.prototype, "panelMenu", void 0);
s([ C(cc.Node) ], e.prototype, "popupGuide", void 0);
s([ C(cc.Label) ], e.prototype, "lblPing", void 0);
s([ C(cc.Label) ], e.prototype, "lblServerTime", void 0);
s([ C({
type: cc.AudioClip
}) ], e.prototype, "clipClick", void 0);
s([ C({
type: cc.AudioClip
}) ], e.prototype, "clipHit", void 0);
s([ C({
type: cc.AudioClip
}) ], e.prototype, "clipCoin", void 0);
s([ C({
type: cc.AudioClip
}) ], e.prototype, "clipJackpot", void 0);
return o = s([ F ], e);
}(cc.Component);
o.default = w;
cc._RF.pop();
}, {
"../../../../framework/common/Tween": void 0,
"../../../../framework/common/Utils": void 0,
"./ShootFish.Bullet": "ShootFish.Bullet",
"./ShootFish.CoinEffect": "ShootFish.CoinEffect",
"./ShootFish.EffectBigWin": "ShootFish.EffectBigWin",
"./ShootFish.EffectJackpot": "ShootFish.EffectJackpot",
"./ShootFish.Fish": "ShootFish.Fish",
"./ShootFish.Lobby": "ShootFish.Lobby",
"./ShootFish.PanelMenu": "ShootFish.PanelMenu",
"./ShootFish.Player": "ShootFish.Player",
"./ShootFish.PopupGuide": "ShootFish.PopupGuide",
"./common/Common.AudioManager": "Common.AudioManager",
"./common/Configs": "Configs",
"./networks/ShootFishNetworkClient": "ShootFishNetworkClient"
} ],
"ShootFish.PopupCoinTransfer": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bcd88coqOBPF7ZC2zQEsAhZ", "ShootFish.PopupCoinTransfer");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TabCashOut = o.TabCashIn = void 0;
var a = t("./common/Dialog1"), r = t("../../../../framework/common/BroadcastReceiver"), c = t("../../../../framework/common/Utils"), l = t("./common/Configs"), h = t("./networks/ShootFishNetworkClient"), u = cc._decorator, p = u.ccclass, d = u.property, f = function() {
function t() {
this.lblBalance = null;
this.edbCoin = null;
this.quickButtons = null;
this.popup = null;
this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
}
t.prototype.start = function(t) {
var e = this;
this.popup = t;
this.edbCoin.node.on("editing-did-ended", function() {
var t = c.default.stringToInt(e.edbCoin.string);
e.edbCoin.string = c.default.formatNumber(t);
});
for (var o, i = function(t) {
o = n.quickButtons.children[t];
var i = n.values[t];
o.getComponentInChildren(cc.Label).string = c.default.formatNumber(i);
o.on("click", function() {
e.edbCoin.string = c.default.formatNumber(i);
});
}, n = this, s = 0; s < this.quickButtons.childrenCount; s++) i(s);
};
t.prototype.submit = function() {
var t = this, e = c.default.stringToInt(this.edbCoin.string);
if (e <= 0) fzgui.UIPopupManager.instance.showPopup("Số tiền đã nhập không hợp lệ."); else if (e < 1e4) fzgui.UIPopupManager.instance.showPopup("Số tiền tối thiểu là 10,000."); else {
fzgui.UIWaitingLayout.showWaiting();
h.default.getInstance().request("xxengCashin", {
ccash: e,
access_token: l.default.Login.Token,
username: l.default.Login.Username,
nick: l.default.Login.Nick,
password: l.default.Login.Password
}, function(o) {
console.log(o);
fzgui.UIWaitingLayout.hideWaiting();
if (o.ok) {
l.default.Login.CoinFish = o.newCash;
l.default.Login.Coin -= e;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money - e;
r.default.send(r.default.USER_UPDATE_COIN);
t.reset();
} else fzgui.UIPopupManager.instance.showPopup("Vui lòng nạp thêm tiền.");
}, this.popup);
}
};
t.prototype.reset = function() {
this.edbCoin.string = "";
this.lblBalance.string = c.default.formatNumber(l.default.Login.Coin);
};
s([ d(cc.Label) ], t.prototype, "lblBalance", void 0);
s([ d(cc.EditBox) ], t.prototype, "edbCoin", void 0);
s([ d(cc.Node) ], t.prototype, "quickButtons", void 0);
return s([ p("PopupCoinTransfer.TabCashIn") ], t);
}();
o.TabCashIn = f;
var g = function() {
function t() {
this.lblBalance = null;
this.edbCoin = null;
this.quickButtons = null;
this.popup = null;
this.values = [ 5e4, 1e5, 2e5, 5e5, 1e6, 2e6, 5e6, 1e7, 2e7 ];
}
t.prototype.start = function(t) {
var e = this;
this.popup = t;
this.edbCoin.node.on("editing-did-ended", function() {
var t = c.default.stringToInt(e.edbCoin.string);
e.edbCoin.string = c.default.formatNumber(t);
});
for (var o, i = function(t) {
o = n.quickButtons.children[t];
var i = n.values[t];
o.getComponentInChildren(cc.Label).string = c.default.formatNumber(i);
o.on("click", function() {
e.edbCoin.string = c.default.formatNumber(i);
});
}, n = this, s = 0; s < this.quickButtons.childrenCount; s++) i(s);
};
t.prototype.submit = function() {
var t = this, e = c.default.stringToInt(this.edbCoin.string);
if (e <= 0) fzgui.UIPopupManager.instance.showPopup("Số Cá đã nhập không hợp lệ."); else if (e < 1e4) fzgui.UIPopupManager.instance.showPopup("Số Cá tối thiểu là 10,000 Cá."); else {
fzgui.UIWaitingLayout.showWaiting();
h.default.getInstance().request("xxengCashin", {
ccash: -e,
access_token: l.default.Login.Token,
username: l.default.Login.Username,
nick: l.default.Login.Nick,
password: l.default.Login.Password
}, function(o) {
console.log(o);
fzgui.UIWaitingLayout.hideWaiting();
if (o.ok) {
l.default.Login.CoinFish = o.newCash;
l.default.Login.Coin += e;
fzgui.UserManager.instance.mainUserInfo.Money = fzgui.UserManager.instance.mainUserInfo.Money + e;
r.default.send(r.default.USER_UPDATE_COIN);
t.reset();
} else fzgui.UIPopupManager.instance.showPopup("Số Sao không đủ để rút ra.");
}, this.popup);
}
};
t.prototype.reset = function() {
this.edbCoin.string = "";
this.lblBalance.string = c.default.formatNumber(l.default.Login.CoinFish);
};
s([ d(cc.Label) ], t.prototype, "lblBalance", void 0);
s([ d(cc.EditBox) ], t.prototype, "edbCoin", void 0);
s([ d(cc.Node) ], t.prototype, "quickButtons", void 0);
return s([ p("PopupCoinTransfer.TabCashOut") ], t);
}();
o.TabCashOut = g;
var y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tabs = null;
e.tabContents = null;
e.tabCashIn = null;
e.tabCashOut = null;
e.tabSelectedIdx = 0;
return e;
}
e.prototype.start = function() {
for (var t = this, e = function(e) {
o.tabs.toggleItems[e].node.on("toggle", function() {
t.tabSelectedIdx = e;
t.onTabChanged();
});
}, o = this, i = 0; i < this.tabs.toggleItems.length; i++) e(i);
r.default.register(r.default.USER_UPDATE_COIN, function() {
t.tabCashIn.lblBalance.string = c.default.formatNumber(l.default.Login.Coin);
t.tabCashOut.lblBalance.string = c.default.formatNumber(l.default.Login.CoinFish);
}, this);
this.tabCashIn.start(this);
this.tabCashOut.start(this);
};
e.prototype.onEnable = function() {
this.tabCashOut.lblBalance.string = c.default.formatNumber(l.default.Login.CoinFish);
};
e.prototype.show = function() {
t.prototype.show.call(this);
this.tabSelectedIdx = 0;
this.tabs.toggleItems[this.tabSelectedIdx].isChecked = !0;
this.onTabChanged();
};
e.prototype.onTabChanged = function() {
for (var t = 0; t < this.tabContents.childrenCount; t++) this.tabContents.children[t].active = t == this.tabSelectedIdx;
for (var e = 0; e < this.tabs.toggleItems.length; e++) this.tabs.toggleItems[e].node.getComponentInChildren(cc.LabelOutline).color = e == this.tabSelectedIdx ? cc.Color.BLACK.fromHEX("#AA5F00") : cc.Color.BLACK.fromHEX("#4677F3");
switch (this.tabSelectedIdx) {
case 0:
this.tabCashIn.reset();
break;

case 1:
this.tabCashOut.reset();
}
};
e.prototype.actSubmitCashIn = function() {
this.tabCashIn.submit();
};
e.prototype.actSubmitCashOut = function() {
this.tabCashOut.submit();
};
e.prototype.actClearCashIn = function() {
this.tabCashIn.edbCoin.string = "0";
};
e.prototype.actClearCashOut = function() {
this.tabCashOut.edbCoin.string = "0";
};
s([ d(cc.ToggleContainer) ], e.prototype, "tabs", void 0);
s([ d(cc.Node) ], e.prototype, "tabContents", void 0);
s([ d(f) ], e.prototype, "tabCashIn", void 0);
s([ d(g) ], e.prototype, "tabCashOut", void 0);
return s([ p ], e);
}(a.default);
o.default = y;
cc._RF.pop();
}, {
"../../../../framework/common/BroadcastReceiver": void 0,
"../../../../framework/common/Utils": void 0,
"./common/Configs": "Configs",
"./common/Dialog1": "Dialog1",
"./networks/ShootFishNetworkClient": "ShootFishNetworkClient"
} ],
"ShootFish.PopupGuide": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bab5aIcJEpPB53KA3RPsstw", "ShootFish.PopupGuide");
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
}), s = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var a = t("./common/Dialog1"), r = t("./ShootFish.Play"), c = cc._decorator, l = c.ccclass, h = c.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.grid = null;
e.itemTemplate = null;
e.items = [];
e.mapFishType = {
0: [ "Cuttle", 1 ],
1: [ "GoldFish", 1 ],
2: [ "LightenFish", 1 ],
3: [ "Mermaid", 1 ],
4: [ "Octopus", 1 ],
5: [ "PufferFish", 1 ],
6: [ "SeaFish", 1 ],
7: [ "Shark", 1 ],
8: [ "Stringray", 1 ],
9: [ "Turtle", 1 ],
10: [ "CaThanTai", 1 ],
11: [ "FlyingFish", 1 ],
12: [ "GoldenFrog", .2 ],
13: [ "SeaTurtle", 1 ],
14: [ "MerMan", 1 ],
15: [ "Phoenix", .7 ],
16: [ "MermaidBig", .6 ],
17: [ "MermaidSmall", .6 ],
18: [ "BombFish", .6 ],
19: [ "Fish19", .6 ],
20: [ "Fish20", .6 ],
21: [ "Fish21", .4 ],
22: [ "Fish22", .3 ],
23: [ "Fish23", .3 ],
24: [ "Fish24", .3 ]
};
return e;
}
e.prototype.show = function() {
t.prototype.show.call(this);
this.itemTemplate.active = !1;
};
e.prototype._onShowed = function() {
t.prototype._onShowed.call(this);
r.default.SERVER_CONFIG;
};
e.prototype.dismiss = function() {
this.items.forEach(function(t) {
t.removeFromParent();
});
t.prototype.dismiss.call(this);
};
s([ h(cc.Node) ], e.prototype, "grid", void 0);
s([ h(cc.Node) ], e.prototype, "itemTemplate", void 0);
return s([ l ], e);
}(a.default);
o.default = u;
cc._RF.pop();
}, {
"./ShootFish.Play": "ShootFish.Play",
"./common/Dialog1": "Dialog1"
} ],
"ShootFish.Scale": [ function(t, e) {
"use strict";
cc._RF.push(e, "5ae2a4GixJArbmsMtorCtPs", "ShootFish.Scale");
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
this.node.scale = cc.winSize.height / 720;
cc.find("header_login").active = !1;
}
});
cc._RF.pop();
}, {} ],
ShootFishNetworkClient: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "67b32TSLuBDyITpP+LjS3tz", "ShootFishNetworkClient");
var i = this && this.__decorate || function(t, e, o, i) {
var n, s = arguments.length, a = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (a = (s < 3 ? n(a) : s > 3 ? n(e, o, a) : n(e, o)) || a);
return s > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var n = t("../common/Configs"), s = cc._decorator, a = s.ccclass, r = (s.property, 
function(t, e) {
this.target = t;
this.callback = e;
}), c = function(t, e) {
this.target = t;
this.callback = e;
}, l = function(t, e) {
this.target = t;
this.callback = e;
}, h = function() {
function t() {
this.isUseWSS = n.default.App.USE_WSS;
this.isAutoReconnect = !0;
this.ws = null;
this.host = n.default.App.HOST_SHOOT_FISH.host;
this.port = n.default.App.HOST_SHOOT_FISH.port;
this.isForceClose = !1;
this.onOpenes = [];
this.onCloses = [];
this.xorKey = "dmVyeSBzZWNyZXQ";
this.requests = new Object();
this.intervalPing = -1;
this.listeners = new Array();
this.isLogining = !1;
this.isLogined = !1;
this.onLogined = null;
}
e = t;
t.serverCurrentTimeMillis = function() {
return Date.now() - this.TIME_DISTANCE + Math.round(e.MIN_PING / 2);
};
t.systemCurrentTimeMillis = function() {
return Date.now();
};
t.getInstance = function() {
null == this.instance && (this.instance = new e());
return this.instance;
};
t.prototype.checkConnect = function(t) {
this.onLogined = t;
this.isConnected() ? this.isLogined ? this.onLogined(this.isLogined) : this.login() : this.connect();
};
t.prototype.getPlatform = function() {
return cc.sys.isNative ? cc.sys.os === cc.sys.OS_IOS ? 3 : 2 : 1;
};
t.prototype.login = function() {
var t = this;
if (!this.isLogining) {
this.isLogining = !0;
this.request("xxenglogin", {
username: n.default.Login.Username,
nick: n.default.Login.Username,
password: n.default.Login.Password,
platform: this.getPlatform(),
access_token: n.default.Login.Token
}, function(e) {
console.log(e);
t.isLogining = !1;
if (e.ok) {
t.isLogined = !0;
n.default.Login.CoinFish = e.cash;
n.default.Login.UsernameFish = e.nickname;
n.default.Login.PasswordFish = e.password;
n.default.Login.UserIdFish = e.userId;
n.default.Login.FishConfigs = e.config;
n.default.Login.isLogined = !0;
null != t.onLogined && t.onLogined(!0);
} else null != t.onLogined && t.onLogined(!1);
}, e.NODE_FIXED);
}
};
t.prototype.onOpen = function() {
var t = this;
this.intervalPing = setInterval(function() {
return t.ping();
}, 3e3);
this.ping();
for (var e = 0; e < this.onOpenes.length; e++) {
var o = this.onOpenes[e];
if (o.target && o.target instanceof Object && o.target.node) o.callback(); else {
this.onOpenes.splice(e, 1);
e--;
}
}
null != this.onLogined && this.login();
};
t.prototype.onMessage = function(t) {
var e = new Uint8Array(t.data);
e = this.doXOR(e, 0, e.length);
var o = msgpack.decode(e);
if (o.hasOwnProperty("msgId")) if (0 == o.msgId) {
n.default.App.Debug && console.log(o.route, o.data);
for (var i = 0; i < this.listeners.length; i++) if ((s = this.listeners[i]).target && s.target instanceof Object && s.target.node) s.callback(o.route, o.data); else {
this.listeners.splice(i, 1);
i--;
}
} else {
n.default.App.Debug && console.log(o.data);
if (this.requests.hasOwnProperty(o.msgId)) {
var s;
(s = this.requests[o.msgId]).target && s.target instanceof Object && s.target.node && s.callback(o.data);
delete this.requests[o.msgId];
}
}
};
t.prototype.onError = function() {};
t.prototype.onClose = function() {
var t = this;
this.intervalPing > 0 && clearInterval(this.intervalPing);
for (var e = 0; e < this.onCloses.length; e++) {
var o = this.onCloses[e];
if (o.target && o.target instanceof Object && o.target.node) o.callback(); else {
this.onCloses.splice(e, 1);
e--;
}
}
this.isAutoReconnect && !this.isForceClose && setTimeout(function() {
t.isForceClose || t.connect();
}, 2e3);
};
t.prototype.send = function(t) {
if (this.isConnected()) {
n.default.App.Debug && console.log("msg", t);
var e = msgpack.encode(t);
e = this.doXOR(e, 0, e.length);
this.ws.send(e);
}
};
t.prototype.doXOR = function(t, e, o) {
for (var i = 0, n = e + o, s = e; s < n; s++) {
t[s] = t[s] ^ Number(this.xorKey.charAt(i % this.xorKey.length));
i++;
}
return t;
};
t.prototype.connect = function() {
console.log("start connect: " + this.host + ":" + this.port);
this.isForceClose = !1;
if (null == this.ws) {
cc.sys.os == cc.sys.OS_ANDROID ? this.ws = new WebSocket("wss://" + this.host + ":" + this.port, [], cc.url.raw("resources/cacert.pem")) : this.ws = new WebSocket("wss://" + this.host + ":" + this.port);
this.ws.binaryType = "arraybuffer";
this.ws.onopen = this.onOpen.bind(this);
this.ws.onmessage = this.onMessage.bind(this);
this.ws.onerror = this.onError.bind(this);
this.ws.onclose = this.onClose.bind(this);
} else if (this.ws.readyState !== WebSocket.OPEN) {
this.ws.close();
this.ws = null;
this.connect();
}
};
t.prototype.disconnect = function() {
this.isForceClose = !0;
if (null !== this.ws) {
this.ws.close();
this.ws = null;
}
};
t.prototype.addOnOpen = function(t, e) {
this.onOpenes.push(new l(e, t));
};
t.prototype.addOnClose = function(t, e) {
this.onCloses.push(new l(e, t));
};
t.prototype.close = function() {
this.isForceClose = !0;
this.ws && this.ws.close();
};
t.prototype.isConnected = function() {
return !!this.ws && this.ws.readyState == WebSocket.OPEN;
};
t.prototype.addListener = function(t, e) {
this.listeners.push(new r(e, t));
};
t.prototype.request = function(t, o, i, n) {
e.reqId++;
e.reqId > 64999 && (e.reqId = 1);
this.requests[e.reqId] = new c(n, i);
this.send({
data: "object" == typeof o && null != o && o ? o : {},
msgId: e.reqId,
route: t
});
};
t.prototype.notify = function(t, e) {
this.send({
data: "object" == typeof e && null != e && e ? e : {},
msgId: 0,
route: t
});
};
t.prototype.ping = function(t, o) {
void 0 === t && (t = null);
void 0 === o && (o = null);
var i = Date.now();
this.request("ping", null, function(o) {
e.PING = Date.now() - i;
if (e.MIN_PING < 0 || e.PING < e.MIN_PING) {
e.MIN_PING = e.PING;
e.TIME_DISTANCE = Date.now() - o.time;
}
null != t && t();
}, null != o ? o : e.NODE_FIXED);
};
var e;
t.reqId = 0;
t.MIN_PING = -1;
t.PING = 0;
t.TIME_DISTANCE = 0;
t.NODE_FIXED = new cc.Node().addComponent(cc.Sprite);
return e = i([ a ], t);
}();
o.default = h;
cc._RF.pop();
}, {
"../common/Configs": "Configs"
} ],
helper: [ function(t, e) {
"use strict";
cc._RF.push(e, "840a2Qb/OtEoZ7WoJBRKijq", "helper");
window.helper = {
showAlert: function(t) {
var e = cc.find("BanCaMainLayer/notice");
if (e) {
e.active = !0;
e.getComponent("ShootFish.Alert").show(t);
}
},
showConfirm: function(t, e, o) {
void 0 === e && (e = null);
void 0 === o && (o = null);
var i = cc.find("BanCaMainLayer/confirm");
if (i) {
i.active = !0;
i.getComponent("ShootFish.Confirm").showMessage(t, function() {
e && e();
}, function() {
o && o();
});
}
},
isSound: function(t) {
return t;
},
isMusic: function(t) {
return t;
},
setSound: function(t) {
cc.log("setSound: " + t);
this.isSound(t);
},
setMusic: function(t) {
cc.log("setMusic: " + t);
this.isMusic(t);
},
changeScene: function(t, e, o) {
cc.director.preloadScene(t, function(e) {
if (e) console.log("err", e); else {
o && o();
cc.director.loadScene(t, function() {});
}
});
},
showLoading: function() {
var t = cc.find("BanCaMainLayer/loading");
t && (t.active = !0);
},
hideLoading: function() {
var t = cc.find("BanCaMainLayer/loading");
t && (t.active = !1);
},
updateCoin: function(t) {
if (!Global.isLogin) return !1;
fzgui.UserManager.instance.mainUserInfo.Money = t;
},
getInfo: function() {
console.log(Global.isLogin);
return !!Global.isLogin && {
username: Global.AccountInfo.UserName,
password: Global.AccountInfo.PassWord,
nick: Global.AccountInfo.accountFullName,
gold: fzgui.UserManager.instance.mainUserInfo.Money
};
},
getToken: function() {
return Global.AccountInfo.UserName + Global.AccountInfo.PassWord + fzgui.UserManager.instance.mainUserInfo.Money;
}
};
cc._RF.pop();
}, {} ]
}, {}, [ "BanCaLoading", "MoveBulletBanCa", "DisableClick", "SetIconCoinByServiceId", "ShootFish.Alert", "ShootFish.Bullet", "ShootFish.CoinEffect", "ShootFish.Confirm", "ShootFish.Dialog", "ShootFish.EffectBigWin", "ShootFish.EffectJackpot", "ShootFish.Fish", "ShootFish.Helper", "ShootFish.Lobby", "ShootFish.PanelMenu", "ShootFish.Play", "ShootFish.Player", "ShootFish.PopupCoinTransfer", "ShootFish.PopupGuide", "ShootFish.Scale", "App", "Common.AudioManager", "Configs", "Dialog1", "helper", "ShootFishNetworkClient" ]);