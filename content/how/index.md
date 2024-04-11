---
layout: layouts/base.njk
---
# How

I made some basic decisions before re-building this website:

- Built a product that lasts
- Make it simple
- Make it performant

The first two go hand in hand. To make it performant I decided to only use CSS and HTML.

Second, I decided against special fonts.

<!-- That reduced the build by another 1/3 for each (uncached) request. The font-sets that I defined are the following: -->
<!---->
<!-- - Regular Text: `Optima, Candara, "Noto Sans", source-sans-pro, sans-serif;` -->
<!-- - Code Blocks: `Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;` -->

<!-- This means no downloading, no layout shift and no flashes. -->

Further, instead of using a syntax-highlighting solution like Prism, I used CSS styles that distinguish any `<code>` block.

<!-- Third, I focused on my favicon. -->

I plan to write up a bit more content about each step involved, so stay tuned.

Moving forward I make sure to carefully choose what I need on a project by thinking about its benefits and how I can avoid adding each new dependency.
