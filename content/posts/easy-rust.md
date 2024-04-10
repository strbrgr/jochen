---
title: Easy Rust
tags:
  - code
---

I'm currently reading _Easy Rust_ by David MacLeod. I started with Rust about a year ago, but haven't dedicated too much time up until now. These are some of the things I learned along the way.

## Comments

Similar to how we write comments in JS:

`//` (single line), `/* */` (multi line or inline) and `///` (documentation).

## Types

`i` vs `u` meaning signed (negative and positive) vs unsigned (only positive).
`isize` and `usize` depend on your computer architecture, so for a 32bit system `isize` would be a `i32`.

### Characters

We can cast a number to a char:

```Rust
let number = 100;
println!("{}", number as u8 as char)
```

Characters use single quotes whereas strings use double quotes.

We can use `.chars().count()` to return the length of a string.
