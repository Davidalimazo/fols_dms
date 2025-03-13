const Pill = ({ text }: { text: string }) => (
  <div className="py-2 px-2 rounded-md bg-[#EAF6FF] font-bold text-primary-dark text-xs">
    {text}
  </div>
);

const routeTitles = [
  {
    route: "/get-started",
    title: "Get Started",
  },
  {
    route: "/get-started/services",
    render: (
      <div className="hidden lg:flex gap-4 items-center">
        <h3 className="text-sm lg:text-2xl font-semibold">Select Products</h3>
      </div>
    ),
    showBackCta: true,
  },
  {
    route: "/get-started/kyc",
    render: (
      <div className="hidden lg:flex gap-4 items-center">
        <h3 className="text-sm lg:text-2xl font-semibold">
          Activate Your business
        </h3>
        <Pill text="5 minutes average completion time" />
      </div>
    ),
    showBackCta: true,
  },
  {
    route: "/dashboard",
    title: "Dashboard",
  },
  {
    route: "/settings",
    title: "Settings",
  },
];

export default routeTitles;
