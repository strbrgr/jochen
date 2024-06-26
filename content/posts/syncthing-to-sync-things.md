---
title: Syncthing to sync things
tags:
  - code
---
#### tldr

Use Markdown for knowledge management. Sync vaults across devices with Syncthing and symlinks.

# SyncThing to sync things

A few month ago I rolled off one, began work on another account, and had to deal with the outcome of changing domains and stakeholders.
This was demanding, but ultimately positive as I got introduced to new patterns and syntax which inspired me to improve with my note-taking skillset.

## Track solutions

I use Obsidian to track feature work, but haven't captured new language features. Recently, I needed to filter API calls that weren't GET requests. While an `if-else` statement worked, a cleaner approach using `.includes()` in JavaScript was more efficient:

```javascript
if (["PUT", "PATCH"].includes(request.type)) {
  // do something here
}
```

I'd previously used `.includes()` but worried about forgetting it without documentation. I wanted to preserve these types of notes on both my work and personal machines, but lacked a synchronization solution.

## Vault organization

Right now I have the below Vaults:

1. `Code`: Everything related to my own progression. Notes I take on Books, Frameworks, Languages and Platforms.
2. `Life`: Health Documents, Receipts, Green Card / Citizenship.
3. `Work`: 401k docs, Interview questions, Review Documents.

Each Vault has a root folder for assets (screenshots) and templates, along with a "Fleeting" folder for temporary notes that may be discarded or transformed.

## Synchronization strategy

I could use Obsidian Sync or I manually copy files. Obsidian Sync wasn't an option because my use-case is way below than what they offer, so why pay 50$ per year? I know that manually copying files will not be an option because... Well, because I don't have the time and in that case I am lazy. I would rather set up a system once and be done with it. So what is this system?
I saw SyncThing popping up in my feed but never bothered looking at it in more depth until about a month ago and realized that it would be ideal. All I need to do is keep two folders between two machines synchronized. Installation and configuration was a breeze and I had both `Code` vaults connected in no time. Edits on one machine are now reflected on the other.

## Backup strategy

My current backup strategy is basic. Vaults reside under `~/Documents/Vaults`. Only the Code vault is backed up, as I intend to use it across MacBook, iPhone, and iPad. I also created symlinks from the local path to iCloud, enabling vault access on all three devices without Obsidian Sync.

