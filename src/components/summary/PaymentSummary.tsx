interface SummaryListProps {
  data: {
    id: number;
    title: string;
    value: string;
  }[];
}

export default function PaymentSummary({ data }: SummaryListProps) {
  return (
    <div className="mt-8">
      <div className="bg-red-700 text-white py-2 px-3 rounded-sm mb-4 font-medium">
        BILL PAYMENT DETAILS
      </div>
      <div className="grid lg:grid-cols-12">
        <ul className="mb-4 lg:col-span-7">
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
        <ul className="mb-4 lg:col-span-5 flex flex-col justify-between">
          <div>
            <li className="grid grid-cols-3 text-slate-700 mb-2 pl-3">
              <span className="font-medium">Discount Rate</span>
              <span className="col-span-2">10%</span>
            </li>
            <li className="grid grid-cols-3 text-slate-700 mb-2 pl-3">
              <span className="font-medium">Discount Amount</span>
              <span className="col-span-2">Rs.283</span>
            </li>
            <li className="grid grid-cols-3 text-slate-700 mb-2 pl-3">
              <span className="font-medium">Amount Received</span>
              <span className="col-span-2">Rs.2,552</span>
            </li>
          </div>

          <li className="grid grid-cols-3 text-slate-700 pt-2 mb-2 pl-3 font-extrabold">
            <span className="">Total Tax</span>
            <span className="col-span-2">Rs.2,552</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
