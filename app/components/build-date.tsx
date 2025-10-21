import { getFileLastModifiedDate } from "@/utils/getLastModifiedDate";

type BuildDateProps = {
  page: string;
};

export function BuildDate({ page }: BuildDateProps) {
  const dateString = getFileLastModifiedDate(page);

  return (
    <footer className="my-8 text-sm text-gray-400">
      Last updated:{" "}
      <time dateTime={dateString}>
        {new Date(dateString).toLocaleDateString()}
      </time>
    </footer>
  );
}
