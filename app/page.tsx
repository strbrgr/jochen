import { HeaderOne, HeaderTwo } from "./components/typography";

const paragraphs: string[] = [
  "I'm a versatile technologist with experience in full software development lifecycle – from inception and design to deployment, operation, and iterative development. My team and I are building event driven, distributed and high-performant microservices within the financial space.",
  "Before transitioning to Software Engineering, I worked in the creative industries across Germany and China, including a brief stint at ChenMan's Studio6.",
  "I love to shred with my skateboard, make pizza, ferment foods, and spend time with my wife, friends and dogs.",
  "Feel free to check out <a href='https://www.linkedin.com/in/strbrgr' target='_blank' rel='noopener noreferrer' style='text-decoration: underline;'>my resume</a>, or find out what I am doing <a href='/now' style='text-decoration: underline;'>now</a>.",
];

export default function Page() {
  return (
    <>
      <HeaderOne text="Hi, I'm Jochen." />
      {paragraphs.map((text, index) => (
        <p
          key={index}
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      ))}
    </>
  );
}
