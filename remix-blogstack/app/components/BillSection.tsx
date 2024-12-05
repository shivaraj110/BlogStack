export function BillsSection() {
  return (
    <div className="bg-white/60 backdrop-brightness-110 backdrop-blur-sm rounded-xl shadow-md mt-6">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">My Collaborations</h2>
        <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          Filter by
        </button>
      </div>
      <div className="p-1 space-y-4">
        <div className="flex justify-between">
          <div className="pl-5">author</div>
          <div className="pr-5">Status</div>
        </div>
        <BillItem title="Krish Tasood" status="published" />
        <BillItem title="Krish Tasood" status="draft" />
        <BillItem title="Krish Tasood" status="published" />
      </div>
    </div>
  );
}

function BillItem({
  title,
  status,
}: {
  title: string;
  status: "published" | "draft";
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border">
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full ${
            status === "published" ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <span className="font-medium">{title}</span>
      </div>
      <span
        className={`px-2 py-1 text-xs font-medium rounded-full ${
          status === "published"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}>
        {status === "published" ? "published" : "draft"}
      </span>
    </div>
  );
}