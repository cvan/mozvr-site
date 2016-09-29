---
title: Experimental HTC Vive Support in Firefox Nightly
permalink: experimental-htc-vive-support-in-firefox-nightly
id: 24
updated: '2016-09-23 19:36:32'
date: 2016-09-23 19:08:30
tags:
  - Platform
  - HTC VIVE
---

As of September 1st, [Firefox Nightly](https://nightly.mozilla.org/) will include experimental support for the [HTC Vive](https://www.htcvive.com/) headsets through the [OpenVR API](https://github.com/ValveSoftware/openvr). This is one of several upcoming hardware support updates that we will be announcing in the coming weeks, including support for the HTC Vive controllers, Oculus Touch controllers, and [OSVR headsets](http://www.osvr.org/hardware/buy/). Firefox will include support for WebVR on Mac and Linux using the OSVR API.

The HTC Vive includes the Lighthouse tracking system, which can track the position and orientation of the VR headset anywhere within a room-sized volume of space. Users can now enter a WebVR site and walk naturally around.

HTC Vive Support is still experimental and support for the controllers [will be added separately](https://bugzilla.mozilla.org/show_bug.cgi?id=1299926) in a later update. To try it out early, follow these steps to enable it in the current [Firefox Nightly](https://nightly.mozilla.org/):

1. It is recommended that you start with a clean profile by [refreshing Firefox](https://support.mozilla.org/en-US/kb/refresh-firefox-reset-add-ons-and-settings). Some preference adjustments needed for earlier WebVR builds will cause problems with the current Nightly build.
2. Download version 1.02 of the `openvr_api.dll` from the [OpenVR GitHub](https://github.com/ValveSoftware/openvr) repository. A 64-bit machine is recommended for WebVR; [download the 64-bit version here](https://github.com/ValveSoftware/openvr/raw/master/bin/win64/openvr_api.dll). If you do not have a 64-bit version, you can [download the 32-bit version](https://github.com/ValveSoftware/openvr/raw/master/bin/win32/openvr_api.dll).
3. Save the <code>openvr_api.dll</code> file somewhere on your computer where the user running Firefox can read it. For example, you could create a directory (e.g., `C:\openvr\`) and place the `DLL` there.
4. In Firefox Nightly, navigate to `about:config`.
  1. Change the value of `dom.vr.openvr.enabled` to `true`.
  2. Change the value of `gfx.vr.openvr-runtime` to the full path of the `openvr_api.dll` that was downloaded (e.g., `C:\openvr\openvr_api.dll`).
7. Restart Firefox Nightly.

To test if it works, try some of the [WebVR 1.0 examples](https://webvr.info/samples/) or sites such as [SketchFab](https://sketchfab.com/) that support room-scale WebVR. To make your own WebVR sites, check out [A-Frame](https://aframe.io/), [three.js](http://threejs.org/), or the [WebVR 1.0 Spec](https://w3c.github.io/webvr/) for details.

### Credits
Special thanks to [Christin Gilbert](https://twitter.com/christingilbert) for the [Vive header photo](https://blog.mozvr.com/content/images/2016/09/1-rppPzXIHehdGoJH6LKSIrg--1-.jpeg).
