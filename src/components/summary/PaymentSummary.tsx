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
      <div className="bg-red-700 text-white py-2 px-3 rounded-sm mb-2 font-medium">
        BILL PAYMENT DETAILS
      </div>
      <div className="grid lg:grid-cols-2">
        <ul className="mb-4">
          {data.map((item) => (
            <li className="grid grid-cols-3 text-slate-700 mb-2 pl-3">
              <span className="font-medium">{item.title}</span>
              <span className="col-span-2">{item.value}</span>
            </li>
          ))}
        </ul>
        <ul className="mb-4">
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
          <li className="grid grid-cols-3 text-slate-700 pt-2 mb-2 pl-3">
            <span className="font-medium">Total Tax</span>
            <span className="col-span-2 font-medium">Rs.2,552</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
