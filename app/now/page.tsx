import Link from "next/link";
import { HeaderFour } from "../components/typography";
import {
  booksFinished,
  booksReading,
  current,
  recent,
  tunes,
  upcoming,
} from "./data";
import { getFileLastModifiedDate } from "@/utils/getLastModifiedDate";

export default function Page() {
  const buildDate = getFileLastModifiedDate("app/now/page.tsx");
  return (
    <>
      <p className="mb-4">
        Short notes about what I'm up to, listening to, and reading.
      </p>

      <HeaderFour text="What will I be doing soon?" />
      <ul className="mb-4">
        {upcoming.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>

      <HeaderFour text="What am I doing now?" />
      <ul className="mb-4">
        {current.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>

      <HeaderFour text="What have I done recently?" />
      <ul className="mb-4">
        {recent.map((item, idx) => (
          <li key={idx} className="list-disc list-inside">
            {item}
          </li>
        ))}
      </ul>

      <HeaderFour text="Tunes" />
      <ul className="mb-4">
        {tunes.map((tune, idx) => (
          <li key={idx} className="list-disc list-inside">
            <strong>{tune.artist}</strong> – {tune.title}
          </li>
        ))}
      </ul>

      <HeaderFour text="Books (reading)" />
      <ul className="mb-4">
        {booksReading.map((book, idx) => (
          <li key={idx} className="list-disc list-inside">
            <Link
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[1px]"
            >
              {book.title}
            </Link>{" "}
            by {book.author}
          </li>
        ))}
      </ul>

      <HeaderFour text="Books (finished)" />
      <ul className="mb-4">
        {booksFinished.map((book, idx) => (
          <li key={idx} className="list-disc list-inside">
            <Link
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[1px] "
            >
              {book.title}
            </Link>{" "}
            by {book.author}. {book.note && <span>{book.note}</span>}
          </li>
        ))}
      </ul>

      <footer className="my-8 text-sm text-gray-400">
        Last updated:{" "}
        <time dateTime={buildDate}>
          {new Date(buildDate).toLocaleDateString()}
        </time>
      </footer>
    </>
  );
}
