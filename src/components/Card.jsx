import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function Card({ user }) {
  const { deleteUser } = useContext(UserContext);

  if (!user) {
    return <div className="p-4 border rounded">No user data 🤷‍♂️</div>;
  }

  const { id, name, email, phone, company } = user;

  return (
    <div className="relative p-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 border rounded shadow transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl animate-fade-in flex flex-col justify-between">
      
      
      <Link to={`/user/${id}`} className="flex-1">
        <h2 className="text-lg font-semibold">{name || "Unnamed User"}</h2>
        <p className="text-sm text-gray-200">{email}</p>
        <p className="text-sm">{phone}</p>
        <p className="text-sm font-medium">{company?.name ?? "Freelancer"}</p>
      </Link>

      
      <button
        onClick={() => deleteUser(id)}
        className="absolute bottom-3 right-3  bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded self-start"
      >
        Delete
      </button>
    </div>
  );
}
