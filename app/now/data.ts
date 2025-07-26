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

const upcoming: string[] = [
  "Starting a Master in Computer Science at Georgia Tech",
];

const current: string[] = ["Enjoying summer and going for 6am swims"];

const recent: string[] = [
  "Headed to Portugal to celebrate being married to my wife",
  "Became a Citizen",
  "Went to Colombia",
];

const tunes: TuneEntry[] = [
  { artist: "Restraining Order", title: "Fight Back" },
  { artist: "Pestpocken", title: "Ueber 20 Jahre" },
  { artist: "Bootlicker", title: "Conventional Life" },
];

const booksReading: BookEntry[] = [
  {
    title: "A Cool Breeze on the Underground",
    author: "Don Winslow",
    url: "https://www.goodreads.com/book/show/243362.A_Cool_Breeze_on_the_Underground",
  },
  {
    title: "The Trigger Point Therapy Workbook",
    author: "Clair Davies",
    url: "https://www.goodreads.com/book/show/137795.The_Trigger_Point_Therapy_Workbook",
  },
];

const booksFinished: BookEntry[] = [
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
    note: "Enjoying it so far. Hacking just for the sake of it.",
  },
  {
    title: "Sandworm",
    author: "Andy Greenberg",
    url: "https://www.goodreads.com/book/show/41436213-sandworm",
    note: "Zero-days and hackers — I like it but wish there was more insight into the actual malware.",
  },
  {
    title: "The Three-Body Problem",
    author: "Cixin Liu",
    url: "https://www.goodreads.com/book/show/20518872-the-three-body-problem?ref=nav_sb_ss_1_18",
    note: "Not too much of a sci-fi geek but it was a pretty good read.",
  },
];

export { upcoming, current, recent, tunes, booksReading, booksFinished };
