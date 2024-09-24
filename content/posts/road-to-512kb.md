---
title: Road to 512kB
date: 2024-07-02
tags:
  - post
  - performance
---
A year ago I built my website using SvelteKit as it was the only Frontend framework that I haven't touched. After a bit I revisited my decision.

I'm fascinated by performance and optimizations of systems. My website is and will always be static. I don't need to handle user interaction that exceeds routing. Might SvelteKit and JavaScript be the wrong tools?

## Finding the right tool

Over time I played with the thought of how much I could reduce the build size of my website. At the same time I discovered the [512KB Club](https://512kb.club/). I set myself the goal to get my website to under 10kB.

### First assessment

Every time someone accessed my old website ~140kB were sent from server to client. Most of that fonts and JavaScript:

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

## Getting my build under 10kb

To get to <10kB I needed to prioritize. Yes, 70kB of JavaScript are unnecessary for a static website. Yes, 46kB for fonts don't need to be part of the final build either. I decided to dump both SvelteKit and fonts.

Dumping JavaScript left me with bare CSS and HTML, which are exactly the right tool for my project. To make my life easier I chose 11ty, a static site generator (SSG). Setup was easy and I was productive sooner compared to other SSG alternatives. I am able to write content in `markdown` and have it compile to `html`.

Removing special fonts reduced the build by another 30% for each (uncached) request. The font-sets that I defined are the following and should cover +95% of users due to fallback fonts:

- Regular Text: `Optima, Candara, "Noto Sans", source-sans-pro, sans-serif;`
- Code Blocks: `Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;`

I saved another couple kB's by using an emoji as favicon instead of creating one that takes up additional space. My website is hosted on GitHub with an automatic deploy pipeline. Access from within North America should be fast.

As of now, 07/27/2024, transferred size via [Cloudflare](https://radar.cloudflare.com/scan/63f2b9d8-c74b-47f2-b5cd-7c62dea67755/network) shows the following:
| URL | Size |
| -------------- | ---------- |
| / | 9.07kB |
| **Total Size** | **9.07kB** |

## Next iteration?

To save further, I could avoid serving .html via different routes. Instead content could be rendered dynamically through CSS and html selectors. While this would save separate `GET` requests for content, it would clutter my codebase. I'm not sure if that is a trade-off I'm not willing to take.
