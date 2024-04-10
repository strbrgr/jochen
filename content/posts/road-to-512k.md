---
title: Road to 512k
eleventyExcludeFromCollections: true
tags: 
  - post
  - performance
---

When I built my website about a year ago, I decided to give SvelteKit a go as it was the only frontend framework that I haven't tried out. I love SvelteKit but once I had my first release out, I wanted to go one step further. 

I was always interested in performance and optimizations of systems and never a fan of slow user interfaces. My website is and will always be static without the need for handling user interactions. Because of that, I realized that choosing SvelteKit was not the right tool.

## Finding the right tool

That got me thinking into how much I can reduce the build size of my website and I discovered the [512k club](https://512kb.club/), a collection of performance-focused web pages from across the Internet. After that, I set myself the goal of getting my website to under 10kB.

### First assessment

Before the remake of my website, every time someone accessed my URL, about 140kB did get sent over. Most of that came from fonts and custom JavaScript code:

#### text/html

| URL                                                               | Size   |
|-------------------------------------------------------------------|--------|
| https://www.stierberger.com/                                      | 9.44kB |
| **Total Size**                                                    | **9.44kB** |

#### text/css

| URL                                                               | Size   |
|-------------------------------------------------------------------|--------|
| https://assets.calendly.com/assets/external/widget.css            | 2.45kB |
| https://www.stierberger.com/_app/immutable/assets/2.91ea808e.css  | 5.88kB |
| **Total Size**                                                    | **8.33kB** |

#### application/javascript

| URL                                                                  | Size    |
|----------------------------------------------------------------------|---------|
| https://www.stierberger.com/_app/immutable/entry/start.46ce8342.js  | 24.72kB |
| https://www.stierberger.com/_app/immutable/chunks/scheduler.8b5db029.js | 2.19kB  |
| https://www.stierberger.com/_app/immutable/chunks/singletons.a6259fb6.js | 2.85kB  |
| https://www.stierberger.com/_app/immutable/chunks/control.f5b05b5f.js | 252B    |
| https://www.stierberger.com/_app/immutable/entry/app.128da152.js    | 5.33kB  |
| https://www.stierberger.com/_app/immutable/chunks/preload-helper.a4192956.js | 893B    |
| https://www.stierberger.com/_app/immutable/chunks/index.04cb41e1.js | 7.19kB  |
| https://www.stierberger.com/_app/immutable/nodes/0.d3aafa10.js      | 595B    |
| https://www.stierberger.com/_app/immutable/nodes/2.bf70aaa7.js      | 16.11kB |
| https://www.stierberger.com/_app/immutable/chunks/each.e59479a4.js  | 87B     |
| https://assets.calendly.com/assets/external/widget.js              | 11kB    |
| https://www.stierberger.com/_app/immutable/nodes/1.d90a7842.js      | 1.03kB  |
| **Total Size**                                                     | **70.07kB** |

#### font/woff2

| URL                                                               | Size   |
|-------------------------------------------------------------------|--------|
| https://www.stierberger.com/_app/immutable/assets/inter-latin-wght-normal.88df0b5a.woff2 | 46.7kB |
| **Total Size**                                                    | **46.7kB** |

#### img/favicon

| URL                                                               | Size   |
|-------------------------------------------------------------------|--------|
| https://www.stierberger.com/favicon.png                          | 3.75kB |
| **Total Size**                                                   | **3.75kB** |

Now to get to <10kB I need to prioritize and it's obvious that 70kB of JavaScript and 46kB for my preferred font can't be part of the final build. Dumping both would reduce my build from 140kB to 24kb. Close but not there yet.

## From 24kB to <10kB

Dumping JavaScript obviously left me with bare CSS and HTML. While those are exactly the right tool, I chose 11ty, a static site generator that let's me write most of my website content in markdown, while still being able to use a templating language like nunjucks. It's pretty easy to set-up and I was productive way faster than when I tried out other SSG alternatives.
