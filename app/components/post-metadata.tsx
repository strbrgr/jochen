type Props = {
  created: string;
};

export default function PostMetadata({ created }: Props) {

  return (
    <div className="my-2 mb-6 text-sm text-gray-400 flex flex-col">
      <span>
        Created:{" "}
        <time dateTime={created}>{new Date(created).toLocaleDateString()}</time>
      </span>
    </div>
  );
}
