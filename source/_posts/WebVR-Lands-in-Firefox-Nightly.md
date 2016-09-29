---
title: WebVR Lands in Firefox Nightly
tags: Platform
permalink: webvr-lands-in-firefox-nightly
id: 3
updated: '2016-02-18 15:45:32'
date: 2016-02-18 15:22:40
---

<p class="intro">We’ve been working on adding VR capabilities to the Web for some months now, with the goal of making VR a first class citizen on the Web. Today, we’re taking another step towards this by adding core VR support directly to our Firefox Nightly builds.</p>

Previously, users and content creators had to download a separate build of Firefox. This one-off build usually lagged behind ongoing development. From now on, VR capabilities will be developed alongside other continuous Firefox improvements.  While Firefox Nightly builds include core WebVR functionality, an additional add-on is needed to integrate with the Oculus Rift headset.

To experience WebVR content with an Oculus Rift Firefox Nightly builds, you’ll need to:

* Install most recent [Firefox Nightly](http://nightly.mozilla.org/).
* Install [WebVR Oculus Rift Enabler](/downloads/webvr-oculus-addon-0.4.4.xpi) add-on.
* Open a non-e10s browser window.

The add-on simply provides the Oculus Rift SDK library so that Firefox can access it. In the future, this functionality may be bundled directly with Firefox, or provided by Oculus Runtime itself. The source for the add-on, as well as build instructions, [can be found on GitHub](https://github.com/MozVR/webvr-oculus-addon).

While VR support will be enabled in our Nightly and Developer Edition (Alpha) builds, it will currently be automatically disabled in Beta and Release builds. We're still making rapid improvements and changes to both the VR interfaces and the necessary platform support pieces.  Once WebVR is more complete, we'll discuss shipping plans to our Beta and Release builds.

Because there is ongoing development on Firefox in many directions, there is one issue to be aware of. Currently, WebVR in Firefox does not work with multiprocess browsing (e10s), which is being tested simultaneously on our Nightly builds. In order to view WebVR content, a non-e10s window must be used.

## Creating non-e10s browser windows

##### Mac
![New Non-e10s (Mac)](/content/images/2016/02/e10s.png "New Non-e10s (Mac)")

##### Windows
![New Non-e10s (Windows) ](/content/images/2016/02/e10s-windows.png "New Non-e10s (Windows)")

You can create a new non-e10s window by going to the File menu and selecting “New Non-e10s Window.” (If instead that menu option says “New e10s Window”, then multiprocess browsing is disabled by default for you and you’re good to go.) It's also possible to disable e10s entirely via the General tab in Preferences. We’re working on resolving this issue in the near future.

Now that we're able to work directly in our Nightly builds, we hope to have Direct-to-Rift support soon, as well as support for Linux, Firefox for Android, and the Cardboard device for mobile VR experiences. We'll also be starting to revisit VR support using CSS and the DOM, to maximize compatibility with existing Web content and Web development knowledge. You'll also soon be able to report bugs to us via [bugzilla.mozilla.org](https://bugzilla.mozilla.org/) in a new WebVR component.  And, as always, please join the discussion on the [web-vr-discuss mailing list](https://mail.mozilla.org/listinfo/web-vr-discuss)!

Finally, today we are launching a new and improved version of [mozvr.com](http://mozvr.com) with more resources for web developers and faster access to demos. Our first tutorial is from Josh Carpenter, on how to create [Quick VR Mockups with Illustrator](/quick-vr-prototypes/). We'll have more to come soon, with the goal of helping make it easier for everyone to create new VR web experiences.
