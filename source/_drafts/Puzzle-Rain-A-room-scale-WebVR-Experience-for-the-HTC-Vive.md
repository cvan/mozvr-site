---
title: 'Puzzle Rain: A room-scale WebVR Experience for the HTC Vive'
permalink: puzzle-rain
id: 14
updated: '2016-09-28 23:20:06'
tags:
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/XOIDXXynmq8" allowfullscreen></iframe>

This project was created to demonstrate what is possible to create with WebVR today.

We compressed the creative and development processes in a seven-week project, in which we used the following techniques:

* [Narrative/visual techniques](#Narrative/visual techniques)
* [Game mechanics](#Game mechanics)
* [UX techniques](#UX techniques)
* [Technical WebVR challenges](#Technical WebVR challenges)

# Narrative/visual techniques

Based on [Pixar](http://www.pixar.com/)'s animated films, we began the concept of informing to the user, which in our case was to make it feel like a conductor of a magical orchestra that comes alive with user interactions. We used colors, music, and various characters for each family of instruments. Here is a color script of the final experience on the [spectator mode](https://mozvr.com/puzzle-rain/?mode=spectator):

<img src="https://cloud.githubusercontent.com/assets/203725/18942091/284169ee-85cb-11e6-81be-025ed750a7e6.jpg" alt="Puzzle Rain – Color script" title="Puzzle Rain – Color script">

# Game mechanics

Because VR is an interactive medium, we have made an experience with the following features:

* Movement with user interaction
* Variable duration depending on how fast the user moves
* Different endings depending on what the user does

And, this was a huge challenge to coordinate the storytelling stages with the musical soundtrack (composed by [Guillermo Laporta](http://guillermolaporta.com/)) for each stage.

<img src="https://cloud.githubusercontent.com/assets/203725/18942652/4eefc636-85cf-11e6-8890-2208783e2979.jpg" alt="Puzzle Rain – Interactive Script" title="Puzzle Rain – Interactive Script">

# UX techniques

We focused on the following UX challenges to create a uniquely VR experience:

* Interactivity (user agency)
* Perspective (first-person point of view)
* Room-scale (optimized for the HTC Vive)

Below are the initial sketches of the room-scaled game area, which was proportionally subdivided into quadrants:

<img src="https://cloud.githubusercontent.com/assets/203725/18942928/30153e42-85d1-11e6-9b50-245fc4448fab.jpg" alt="Puzzle Rain – Gameplay area" title="Puzzle Rain – Gameplay area">

# Technical WebVR challenges

We achieved a stable 90 frames-per-second stable frame rate with the minimum PC specifications for the Vive (NVIDIA GTX 970, Intel i5-4590, and 8GB RAM) with: