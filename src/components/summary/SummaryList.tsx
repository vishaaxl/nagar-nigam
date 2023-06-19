interface SummaryListProps {
  title: string;
  data: {
    id: number;
    title: string;
    value: string;
  }[];
}

export default function SummaryList({ data, title }: SummaryListProps) {
  return (
    <div>
      <div className="bg-red-700 text-white py-2 px-3 rounded-sm mb-2 font-medium">
        {title}
      </div>
      <ul className="mb-4">
        {data.map((item) => (
          <li
            className="grid grid-cols-3 text-slate-700 mb-2 pl-3"
            key={item.id}
          >
            <span className="font-medium">{item.title}</span>
            <span className="col-span-2">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
