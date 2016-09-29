---
title: WebVR Enabled by Default in Firefox Nightly
permalink: webvr-enabled-by-default-in-firefox-nightly
id: 6
updated: '2016-02-19 14:48:01'
date: 2016-02-19 14:18:43
tags: Platform
---

As of 2016-01-05 [Firefox Nightly](https://nightly.mozilla.org/), __WebVR is enabled by default__. If you see any increased choppiness after updating, it may be solved by unchecking the “Enable multi-process Nightly” option in the Preferences.

Also, we are planning to [implement timewarp in Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1237417).

We are focusing on latency over the next couple of months. A temporary solution to make it a bit better is to adjust the following:

1. In `about:config`, set the `layout.frame_rate` preference to `75`.
2. Uncheck the “Enable Multi-process Nightly” option in the Preferences.

__*Tip:*__ You may want to [set up a separate Firefox profile](https://support.mozilla.org/en-US/kb/profile-manager-create-and-remove-firefox-profiles) with these changes so you can easily turn them off when not using WebVR.