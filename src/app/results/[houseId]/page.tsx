import PaymentSummary from "@/components/summary/PaymentSummary";
import SummaryList from "@/components/summary/SummaryList";
import Image from "next/image";

interface pageProps {}

const houseDetails = [
  { id: 1, title: "House Number", value: "628L/G-079" },
  { id: 2, title: "Zone Name", value: "ZONE 7" },
  { id: 3, title: "Ward Name", value: "LAL BAHADUR SHASTRI SECOND" },
  { id: 4, title: "Annual Value", value: "18,700.00" },
  { id: 5, title: "Locality", value: "SARVODAYA NAGAR" },
];

const ownerDetails = [
  { id: 11, title: "Occupier Name", value: "ANAND RAJAMANI" },
  { id: 21, title: "Father's Name", value: "PRASANNA RAJAMANI" },
  { id: 31, title: "Mobile Number", value: "9876543286" },
  {
    id: 41,
    title: "Correspondence Ad.",
    value: "G-79, LIBERTY COLONY NEAR RLB SCHOOL",
  },
  { id: 51, title: "Email ID", value: "anandrajamaNi@gmail.com" },
];

const paymentDetails = [
  { id: 111, title: "Current Tax Due", value: "Rs. 2,835" },
  { id: 211, title: "Arrear Due", value: "0" },
  { id: 311, title: "Interest Due", value: "0" },
  {
    id: 411,
    title: "Mode of Payment",
    value: "Online",
  },
  { id: 511, title: "Transaction Date", value: "11/04/2023" },
  { id: 512, title: "Transaction Number", value: "D8793/2023-24/CS/0736288" },
];

export default function ResultHouseId({}: pageProps) {
  return (
    <>
      <div className="container bg-white p-4">
        <div className="text-red-700 font-medium text-lg mb-4">
          House Tax Submission
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-slate-700">House ID: 9157D90585</span>
          <span className="text-slate-700">Financial Year: 2023-24</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-7">
            <SummaryList data={houseDetails} title="HOUSE DETAILS" />
            <SummaryList data={ownerDetails} title="OWNER DETAILS" />
          </div>
          <Image
            src="/images/house.png"
            height={200}
            width={200}
            alt=""
            className="object-cover w-full rounded-md shadow-md lg:col-span-5"
          />
        </div>
        <PaymentSummary data={paymentDetails} />
      </div>
      <div className="py-6 flex gap-2 justify-center items-center bg-slate-200">
        <button className="min-w-[150px] flex justify-center py-2 px-4 bg-blue-800 rounded-sm text-white">
          Print Receipt
        </button>{" "}
      </div>
    </>
  );
}
