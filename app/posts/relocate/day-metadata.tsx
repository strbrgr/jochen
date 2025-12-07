type Props = {
  start?: string;
  stop?: string;
  url: string;
  total: string;
};

export default function DayMetadata({ start, stop, url, total }: Props) {
  const hasStartAndStop = Boolean(start && stop);

  return (
    <div className="mb-6 text-sm text-gray-400 flex flex-col">

      {hasStartAndStop ? (
        <div>
          <span>{start}</span>
          <span>
            <span> to </span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[1px]"
            >
              {stop}
            </a>
          </span>
        </div>
      ) : (
        <div>Did not leave our spot</div>
      )}

      <div>
        Total miles driven: {total}
      </div>
    </div>
  );
}

