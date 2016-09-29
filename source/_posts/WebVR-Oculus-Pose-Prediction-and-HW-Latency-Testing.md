---
title: WebVR Oculus Pose Prediction and HW Latency Testing
tags:
  - Platform
  - Oculus
permalink: webvr-oculus-pose-prediction-and-hw-latency-testing
id: 7
updated: '2016-02-24 16:05:24'
date: 2016-02-24 15:58:30
---

<p class="intro">Oculus Pose prediction and hardware latency testing support has <strong>landed in the 2016-02-24 <a href="https://nightly.mozilla.org/">Firefox Nightly</a></strong>. The effect will only be seen by Windows users with Oculus 0.8 runtime or newer. Existing WebVR content will take advantage of this automatically, without any modifications.</p>

The HMD pose and frame numbers submitted with each frame were not consistently associated with the frame that the sensors were sampled on. This update corrects this, enabling the Oculus HUD to show accurate latency information. Providing the accurate pose information to the Oculus runtime also results in a perceived lower latency and smoother HMD tracking.

Pose prediction has also been implemented behind a preference, which is disabled by default for now. Pose prediction offsets the effects of latency by returning a predicted future HMD pose instead of the instantaneous HMD pose. The prediction is dependent on the accurate measurement of latency, through the hardware latency tester. Through use of the latency tester, we have identified a reduction of frame latency uniformity when using e10s (multi-process). I recommend that you disable `Enable multi-process Nightly` in `about:preferences` / General before enabling pose prediction until we have improved the latency uniformity.

If you wish to try pose prediction early, from `about:config` set the `dom.vr.poseprediction.enabled` preference to `true`.

Additionally, it is recommended to set the `layout.frame_rate` preference to match the frame rate of your hardware. This should be set to `75` for Oculus DK2 and `90` for Oculus CV1.

More exciting updates for WebVR are coming soon. Stay tuned!
