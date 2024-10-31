import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axios from "../helpers/axios";

function DetailUserPage() {
  const [user, setUser] = useState<IUser | null>(null);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [user]);
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-red-900 text-white text-4xl font-bold w-20 h-20 rounded-full flex items-center justify-center">
              {user?.username.charAt(0).toLocaleUpperCase()}
            </div>
          </div>
          <h1 className="text-2xl font-thin mb-4">
            Username: {user?.username}
          </h1>
          <h1 className="text-2xl font-thin mb-4">Email: {user?.email}</h1>
          <h1 className="text-2xl font-thin mb-4">Password: {user?.password}</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailUserPage;
