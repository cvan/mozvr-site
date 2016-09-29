---
title: WebVR 1.0 available in Firefox Nightly
permalink: webvr-1-0-available-in-firefox-nightly
id: 15
updated: '2016-08-16 18:45:12'
date: 2016-08-16 16:18:19
tags:
  - Platform
---

The WebVR API is a set of DOM interfaces that enable WebGL rendering into Virtual Reality headsets and access to the various sensors for orientation, positioning, and input controls.

![](/content/images/2016/08/w3c.jpg)

As of today, August 16, 2016, [Firefox Nightly](https://nightly.mozilla.org/) will support the [WebVR 1.0 API](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/). This replaces the earlier WebVR API implementation with the standard proposed by the [WebVR W3C community group](https://w3c.github.io/webvr/). Our [earlier article](https://hacks.mozilla.org/2016/03/introducing-the-webvr-1-0-api-proposal/) on the proposal has some resources to help you get started.

Firefox has been heavily optimized for the best VR experience. The latest updates includes a dedicated VR rendering path that ensures smooth and consistent frame rendering, lower latency and rendering at headsets native frame rate, independent from the user’s main monitor.

This is the same API that has been implemented in the latest [Chromium experimental builds](https://webvr.info/get-chrome) and the [Samsung Gear VR browser](http://developer.samsung.com/technical-doc/view.do?v=T000000270L). In addition to enabling access to the latest WebVR sites, the new API supports new features such as rendering separate content to the user’s main display display for spectator views and the ability to traverse links between WebVR pages.

If you have set preferences to optimize your VR experience in earlier builds, please [create a new browser profile](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles), as the fresh profile will contain the default values to provide optimal performance.

The update fully supports Oculus CV1 and DK2 devices on Windows using the [latest Oculus runtime](https://www.oculus.com/en-us/setup/). [Read here on how to configure Oculus Home to work with Firefox.](https://blog.mozvr.com/oculus-home-rift-cv1-webvr/) Unfortunately, Oculus 0.5 SDK on OS X is no longer supported, and Firefox for Android will support WebVR only through [polyfill libraries](https://github.com/borismus/webvr-polyfill).

[Firefox 50 Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) will continue to support the old WebVR API until September 12, 2016.

Support for [OpenVR](https://en.wikipedia.org/wiki/OpenVR) ([HTC Vive](http://www.htcvive.com/)), [OSVR](http://www.osvr.org/), and positionally tracked motion controllers will be coming soon.

Please [reach out](https://twitter.com/mozillavr) if you have any feedback on how to improve WebVR support in Firefox.

I look forward to visiting all of your worlds through WebVR!