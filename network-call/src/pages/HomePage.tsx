import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users. Please try again.");
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `Are you sure to delete data ${user.username}?`
    );
    if (confirmSubmit) {
      try {
        await axios.delete(`/users/${user.id}`);
        alert(`Success! Data ${user.username} has been deleted!`);
        getData(); // Re-fetch users after deletion
      } catch (err) {
        console.error("Error deleting user:", err);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center">
      <table className="table-auto mt-20">
        <thead className="p-4 bg-slate-800 text-white">
          <tr>
            <th className="p-2 border min-w-[50px]">No</th>
            <th className="p-2 border min-w-[200px]">Username</th>
            <th className="p-2 border min-w-[200px]">Email</th>
            <th className="p-2 border min-w-[50px]"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, idx) => (
            <tr key={item.id} className="hover:bg-gray-300">
              <td className="p-1 border text-center">{idx + 1}</td>
              <td
                className="p-3 border text-start cursor-pointer"
                onClick={() => navigate(`/${item.id}`)}
              >
                {item.username}
              </td>
              <td className="p-2 border text-start">{item.email}</td>
              <td className="p-2 border text-center flex items-center justify-center">
                <div className="border rounded-full p-1 hover:bg-red-400">
                  <MdOutlineDeleteOutline
                    onClick={() => handleDelete(item)}
                    className="text-red-700 text-[25px] cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
