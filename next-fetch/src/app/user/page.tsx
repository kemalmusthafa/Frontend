import { IUser } from "@/types/user";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UserPage() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <div className="flex justify-center">
        <table className="table-auto mt-20">
          <thead className="p-4 bg-slate-800 text-white">
            <tr>
              <th className="p-2 border min-w-[50px]">No</th>
              <th className="p-2 border min-w-[200px]">Username</th>
              <th className="p-2 border min-w-[200px]">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={item.id} className="hover:bg-gray-300">
                <td className="p-1 border text-center">{idx + 1}</td>
                <td className="p-2 border text-center">{item.username}</td>
                <td className="p-2 border text-start">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
