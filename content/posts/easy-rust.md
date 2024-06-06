---
title: Easy Rust
eleventyExcludeFromCollections: true
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

## Inference

Rust's inference is smart enough to figure out which type it has to use. Even in a situation like this:

```Rust
let variable_a: f32 = 2.4;
let variable_b = 4.3; // normally floats default to f64

let variable_c = variable_a + variable_b // this works
```

## Shadowing

We use shadowing for when we want to avoid creating multiple new variables but still need to do a lot of computations and reassignments.

## Printing

I didn't know that you can print output to the console in a variety of ways. It seems like there is a good formatting syntax.

## Strings

There are two types of strings in Rust: `&str` and `String`. This ~~seems to be~~ is confusing. Why did they decide to do that? `&str` is a reference and you don't own it. It is fast as it lives on the stack. The stack needs to know its size in advance so we have to give it the `&`. With a `String` things are different. You own it and you have additional possibilities to interact with it.

