---
title: Road to 512k
tags:
  - post
  - performance
date: 2024-06-01T00:00:00.000Z
---
When I built my website about a year ago, I decided to give SvelteKit a go as it was the only Frontend framework that I haven't tried out. However, once I had my first release out, I wanted to go one step further.

I'm fascinated by performance and optimizations of systems. My website is and will always be static without the need for handling user interactions that go beyond changing pages. I like to keep it simple. So I realized SvelteKit was the wrong tool.

## Finding the right tool

Over time I played with the thought of how much I could reduce the build size of my website. Pretty much at the same time, I discovered the [512k club](https://512kb.club/), a collection of performance-focused web pages from across the Internet and I set myself the goal to get my website to under 10kB.

### First assessment

Previously every time someone accessed my URL about 140kB got sent from server to client. Most of that came from fonts and custom JavaScript code:

#### text/html

| URL            | Size       |
| -------------- | ---------- |
| /              | 9.44kB     |
| **Total Size** | **9.44kB** |

#### text/css

| URL                                    | Size       |
| -------------------------------------- | ---------- |
| /assets/external/widget.css            | 2.45kB     |
| /\_app/immutable/assets/2.91ea808e.css | 5.88kB     |
| **Total Size**                         | **8.33kB** |

#### application/javascript

| URL                                                | Size        |
| -------------------------------------------------- | ----------- |
| /\_app/immutable/entry/start.46ce8342.js           | 24.72kB     |
| /\_app/immutable/chunks/scheduler.8b5db029.js      | 2.19kB      |
| /\_app/immutable/chunks/singletons.a6259fb6.js     | 2.85kB      |
| /\_app/immutable/chunks/control.f5b05b5f.js        | 252B        |
| /\_app/immutable/entry/app.128da152.js             | 5.33kB      |
| /\_app/immutable/chunks/preload-helper.a4192956.js | 893B        |
| /\_app/immutable/chunks/index.04cb41e1.js          | 7.19kB      |
| /\_app/immutable/nodes/0.d3aafa10.js               | 595B        |
| /\_app/immutable/nodes/2.bf70aaa7.js               | 16.11kB     |
| /\_app/immutable/chunks/each.e59479a4.js           | 87B         |
| /assets/external/widget.js                         | 11kB        |
| /\_app/immutable/nodes/1.d90a7842.js               | 1.03kB      |
| **Total Size**                                     | **70.07kB** |

#### font/woff2

| URL                                                            | Size       |
| -------------------------------------------------------------- | ---------- |
| /\_app/immutable/assets/inter-latin-wght-normal.88df0b5a.woff2 | 46.7kB     |
| **Total Size**                                                 | **46.7kB** |

#### img/favicon

| URL            | Size       |
| -------------- | ---------- |
| /favicon.png   | 3.75kB     |
| **Total Size** | **3.75kB** |

To get to <10kB I need to prioritize. Obviously 70kB of JavaScript are unnecessary for a static website. The 46kB for my preferred font can't be part of the final build either. Dumping both would reduce my build from 140kB to 24kb. Close but not there yet.

## From 24kB to <10kB

Dumping JavaScript left me with bare CSS and HTML, which are exactly the right tool for my simple project. To make my life a bit easier but without falling back into the trap of a Frontend framework, I chose 11ty, a static site generator (SSG) that allowed me to write most of my website content in Markdown and being able to use a templating language like nunjucks. It's pretty easy to set-up and I was productive way faster than when I tried out other SSG alternatives. Another thing I did to save some kB's was to use an emoji as favicon instead of creating one that takes up some more space.

## To the max

One option to spin this a bit further would be to avoid serving .html via different routes and conditionally render content via CSS and html id's. While this would save separate `GET` requests for content, it would clutter my codebase. It's a trade-off I'm not willing to take.

