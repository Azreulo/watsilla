// ==UserScript==
// @name           Web Thunder Helper
// @namespace      http://www.quchao.com/entry/web-thunder-helper/
// @author         Qū Chāo <chappell.wat#gmail.com>
// @description    To register web thunder as a possible handler for the following protocols: thunder, flashget, qqdl, magnet & ed2k.
// @include        http://lixian.vip.xunlei.com/*
// @version        1.1.0
// ==/UserScript==
// ver 1.0.0 @ 2011-02-24
//  Initialize release
// ver 1.1.0 @ 2012-03-06
//  Fixed a bug that cannot login automatically, and added a HowTo guide.
//
// How to use:
// 1. Install this userscript and enable it;
// 2. Goto http://lixian.vip.xunlei.com/task.html, make sure you're *NOT* logon yet;
// 3. You'll see a notification which requests your permissions to register Web Thunder as a protocol handler, just allow it;
// 4. Disable (or delete) the script, then enjoy it.
//

(function(a){"registerProtocolHandler"in a?["thunder","flashget","qqdl","magnet","ed2k"].forEach(function(b){a.registerProtocolHandler(b,"http://lixian.vip.xunlei.com/lixian_login.html?furl=%s","\u8fc5\u96f7\u79bb\u7ebf\u4e0b\u8f7d")}):alert("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u8be5\u7279\u6027")})(navigator);
