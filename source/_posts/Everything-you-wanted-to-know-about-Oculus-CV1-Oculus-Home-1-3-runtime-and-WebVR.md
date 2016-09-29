---
title: >-
  Everything you wanted to know about Oculus CV1, Oculus Home, 1.3 runtime and
  WebVR
permalink: oculus-home-rift-cv1-webvr
id: 9
updated: '2016-05-24 13:08:08'
date: 2016-05-18 20:49:26
tags: Oculus
---

There have been questions how [WebVR](https://webvr.info/) will work with the recently released [Oculus Rift consumer headset](https://www.oculus.com/rift/), Oculus Home, and the new [1.3 version of the Oculus SDK/runtime](https://developer.oculus.com/downloads/pc/1.3.0/Oculus_SDK_for_Windows/). This post covers what we learned in the past week since its release and how to best work with WebVR using the latest updates.

## Oculus 1.3 runtime support in Firefox Nightly and experimental Chromium builds

Updates to [Firefox Nightly](https://nightly.mozilla.org/) and [experimental VR-enabled Chromium builds](webvr.info/get-chrome/) are now available and working with the new Oculus 1.3 SDK/runtime, after enabling “Unknown Sources” from the Oculus Settings. Fortunately, you will need need to do this only once.

## Enabling Unknown Sources

![](/content/images/2016/05/settings.gif)

In an effort to protect users from applications that have not been reviewed by Oculus (for comfort, content, or health/safety), Oculus by default will not display content from apps obtained outside of the Oculus Store. There are plenty of interesting experiences to try from trustworthy developers… including content from the Web!

When launching WebVR from within the browser, you will be presented with an “Unknown Source” screen that initially blocks WebVR content from being displayed.

![](/content/images/2016/05/unknown-sources.jpg)

To resolve this, you will need to check the “Enable Unknown Sources” option. You can access this from the Oculus settings.

1. Oculus Application Settings.
2. General settings.
3. Toggle the “Unknown Sources” icon.

Once done, you will now be able to from Firefox or Chromium and launch WebVR content directly into the headset. There are no changes to how this works, and WebVR experiences continue to be launched from the desktop browser application.

## Compatibility with Consumer Oculus Rift (CV1)

With 1.3 compatibility comes support for the consumer shipping versions of the Oculus Rift headset. This of course means that your content can now fully utilize the enhanced resolution, refresh rates, and tracking offered by the new headset.

## Setting up Firefox and Chromium for WebVR

Once your computer is setup and running with the [latest Oculus Runtime](https://developer.oculus.com/downloads/).

### Using Firefox Nightly with WebVR

1. [Download VR-enabled version of Firefox Nightly](https://nightly.mozilla.org/)
2. [Download and Install WebVR enabler](https://addons.mozilla.org/en-US/firefox/addon/mozilla-webvr-enabler/)
3. You are now ready to use WebVR.

### Using experimental Chromium builds

1. [Download VR-enabled Oculus build of Chromium](https://webvr.info/get-chrome/) (you will need [7-Zip](http://www.7-zip.org/download.html) installed to extract).
2. [Enable WebVR](https://docs.google.com/document/d/1g02qHfX85vSRSOkWm9k33I0b7VuyN79md9U9t6MIa4E/edit) flag in `chrome://flags`.
3. You are now ready to use WebVR content.
Only WebVR 1.0 API is supported with the Oculus 1.3 runtime.

## Viewing WebVR content

To view WebVR content, start up your WebVR-enabled browser from your desktop and navigate to a [WebVR enabled page](https://mozvr.com/). Launch content into the headset by pressing the “Enter VR” button on the page.

![](/content/images/2016/05/mozvr.png)

It should also be noted that your headset will display a black loading screen until content is launched using the “Enter VR” button. You will also be presented with a health and safety warning that will need to be dismissed before content is displayed.

If Oculus Home is being displayed into the headset, the launched WebVR content will replace Home. With Oculus Home off, WebVR content is launched directly into the headset by-passing Oculus Home. Closing the browser will return the user back to Oculus Home.

## Not yet integrated with Oculus Home

The most significant change with the latest runtime updates for the Rift is the addition of Oculus Home, which is a central hub for launching Oculus-compatible VR applications. The main benefit is that the Oculus Home interface is accessible from both the desktop and within VR: a nice convenience that allows users to not have to take off the headset to navigate and launch into another application.

![](/content/images/2016/05/home.png)

Oculus Home is unfortunately not yet integrated with the current desktop-browser based WebVR implementations since neither Firefox or Chromium currently implements a UI that can be rendered in VR. All navigation is done using the traditional desktop interface, and without VR UI, it won’t be possible for users to navigate the browser in VR.

This is something that we are actively investigating solutions for.

## Not much changes for WebVR

Although Oculus Home changes how most users will access VR content, existing WebVR content continues to run without any modifications and the experience for both users and developers are mostly unchanged.

There certainly needs to be some consideration how this will change down the road, but for now, having WebVR compatible with the latest Oculus headset is a major win!

## Wait, I still have questions! 

**Will Oculus runtime 1.3 continues to work with the Oculus DK2 developer kit?**

Yes, the Oculus DK2 developer kit continues to work with WebVR using the 1.3 runtime.

**Why do I see an hourglass loading indicator in the headset?**

As soon as content requests access to a VR device, the Rift will display a hourglass loading indicator. Content is not presented into the headset until the user clicks an “Enter VR” button.

**I’m having trouble upgrading to the 1.3 runtime version.**

If you are upgrading from a pre-1.3 runtime, you will need to manually uninstall the sensor application, followed by the runtime, before installing the 1.3 runtime.

![](/content/images/2016/05/uninstall.png)
