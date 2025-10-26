import { getFileLastModifiedDate } from "@/utils/getLastModifiedDate";

type Props = {
  created: string;
  page: string;
};

export default function PostMetadata({ page, created }: Props) {
  const dateString = getFileLastModifiedDate(page);

  return (
    <div className="my-2 mb-6 text-sm text-gray-400 flex flex-col">
      <span>
        Created:{" "}
        <time dateTime={created}>{new Date(created).toLocaleDateString()}</time>
      </span>
      <span>
        Last updated:{" "}
        <time dateTime={dateString}>
          {new Date(dateString).toLocaleDateString()}
        </time>
      </span>
    </div>
  );
}
