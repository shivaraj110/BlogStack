import { useUser } from "@clerk/remix";

export function ProfileCard() {
  const { user } = useUser();

  return (
    <div className="bg-white/60 backdrop-brightness-110 backdrop-blur-sm rounded-xl shadow-md mb-6 h-fit">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">My profile</h2>
      </div>
      <div className="p-6 grid md:grid-cols-[240px_1fr] gap-6">
        <div className="flex flex-col items-center gap-4">
          <img
            src={user?.imageUrl}
            alt="Profile"
            className="w-full aspect-square object-cover rounded-xl"
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Full Name</label>
            <p className="font-medium">{user?.fullName}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Phone Number</label>
            <p className="font-medium">{""}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <p className="font-medium">{user?.emailAddresses.toString()}</p>
          </div>
          <div>
            <label className="text-sm text-gray-500">
              SMS alerts activation
            </label>
            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
