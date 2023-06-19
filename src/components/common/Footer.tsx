interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <div className="flex flex-col gap-1 text-sm text-white items-center justify-center py-6 bg-[#00000040]">
      <span>
        {" "}
        Disclaimer - Content on this website is published and managed by Lucknow
        Nagar Nigam.
      </span>
      <span>Contents Provided by Nagar Nigam Lucknow</span>
    </div>
  );
}
