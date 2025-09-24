type TuneEntry = {
  artist: string;
  title: string;
};

type BookEntry = {
  title: string;
  author: string;
  url: string;
  note?: string;
};

const upcoming: string[] = ["Not much happening right now due to below"];

const current: string[] = ["Started my Masters"];

const recent: string[] = ["Went to Vegas"];

const tunes: TuneEntry[] = [
  { artist: "Blackout", title: "Turnstile" },
  { artist: "Restraining Order", title: "Fight Back" },
  { artist: "Pestpocken", title: "Ueber 20 Jahre" },
];

const booksReading: BookEntry[] = [
  {
    title: "There's No Such Thing as an Easy Job",
    author: "Kikuko Tsumura",
    url: "https://www.goodreads.com/book/show/52692515-there-s-no-such-thing-as-an-easy-job",
  },
  {
    title: "Rust for Rustaceans",
    author: "Jon Gjengset",
    url: "https://www.goodreads.com/book/show/58244064-rust-for-rustaceans",
  },
];

const booksFinished: BookEntry[] = [
  {
    title: "An Astronaut's Guide to Life on Earth",
    author: "Chris Hadfield",
    url: "https://www.goodreads.com/book/show/18170143-an-astronaut-s-guide-to-life-on-earth",
  },
  {
    title:
      "Understanding Distributed Systems: What every developer should know about large distributed applications",
    author: "Roberto Vitillo",
    url: "https://www.goodreads.com/book/show/56977420-understanding-distributed-systems",
    note: "Highly recommend, great introduction to Distributed Systems.",
  },
  {
    title: "The Force",
    author: "Don Winslow",
    url: "https://www.goodreads.com/book/show/32075859-the-force",
    note: "Pretty solid novel.",
  },
  {
    title: "The Outsiders",
    author: "S. E. Hinton",
    url: "https://www.goodreads.com/book/show/192566704-the-outsiders",
    note: "I don't care if it's a YA novel, but I liked it!",
  },
  {
    title: "The Software Engineer's Guidebook",
    author: "Gergely Orosz",
    url: "https://www.goodreads.com/book/show/201545491-the-software-engineer-s-guidebook",
    note: "It's all right.",
  },
  {
    title: "Hard Rain Falling",
    author: "Don Carpenter",
    url: "https://www.goodreads.com/book/show/6553843-hard-rain-falling",
    note: "Was looking for something along the lines of Bukowski.",
  },
  {
    title: "Butcher's Crossing",
    author: "John Williams",
    url: "https://www.goodreads.com/book/show/457228.Butcher_s_Crossing",
    note: "Western classic, beautiful language.",
  },
  {
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    url: "https://www.goodreads.com/book/show/10256723-ghost-in-the-wires",
    note: "Enjoyed it. Hacking just for the sake of it.",
  },
  {
    title: "Sandworm",
    author: "Andy Greenberg",
    url: "https://www.goodreads.com/book/show/41436213-sandworm",
    note: "Zero-days and hackers — I liked it but wish there was more insight into the actual malware.",
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    url: "https://www.goodreads.com/book/show/20518872-the-three-body-problem?ref=nav_sb_ss_1_18",
    note: "Not too much of a sci-fi geek but it was a pretty good read.",
  },
];

export { upcoming, current, recent, tunes, booksReading, booksFinished };
