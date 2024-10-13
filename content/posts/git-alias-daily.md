---
title: Git alias' I use on a daily basis
date: 2024-09-27
tags:
  - post
  - code
---
> "I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it."

Whether or not this quote can be attributed to Bill Gates or Walter Chrysler doesn't matter.[^1] What matters is that if I have to do something repetitive frequently, I’ll find ways to make my life easier.

Most of us who write code for a living use version control, often interacting with our repositories through the command line. While I’m aware of applications like GitHub Desktop, if I can accomplish the task with a terminal, I prefer to use it.

I have typed commands like `git checkout`, `git merge`, and `git commit xyz` more times than I can count. It feels like a waste of time, so why not find a shortcut? Setting up our Git configuration can make a huge difference. While Git provides default behaviors for many tasks, it also allows you to set your own preferences. With `git alias`, we can create short, vim-inspired mnemonics that save us from repetitive typing.

All you need to do is add these, or your own, to your `~/.gitconfig`:
```bash
[alias]
	ga = git add
	gcm = git checkout app-main
	gc- = git checkout -
    gaa = git add --all
    gcb = git checkout -b
    gco = git checkout
    gll = git log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
    gld = git log --pretty=format:"%C(yellow)%h\\ %C(green)%ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --graph
    gls = git log --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=relative
    gst = git status --short --branch
   [color]  
    diff = auto  
    status = auto  
   [branch]  
    autosetuprebase = always
```


[^1]: https://quoteinvestigator.com/2014/02/26/lazy-job/
