import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

export default function UserDetails() {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((u) => String(u.id) === id);

  if (!user) {
    return <p className="p-6 text-center text-xl text-red-500 font-semibold"> User not found</p>;
  }

  const { name, email, phone, company, address } = user;

  return (
    <div className="p-6 flex justify-center">
      <div className="w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl shadow-xl p-6 text-white animate-fade-in">
        
        
        <Link 
          to="/" 
          className="text-yellow-300 underline mb-4 inline-block hover:text-yellow-400 transition"
        >
          ← Back to Dashboard
        </Link>

        
        <h1 className="text-3xl font-extrabold mb-6">{name || "Unnamed User"}</h1>

        
        <div className="space-y-4">
          <Detail label=" Email" value={email} />
          <Detail label=" Phone" value={phone} />
          <Detail label=" Company" value={company?.name ?? "N/A"} />
          <Detail 
            label=" Address" 
            value={
              address?.street && address?.city
                ? `${address.street}, ${address.city}`
                : "No address listed"
            } 
          />
          {address?.geo && (
            <Detail 
              label=" Geo Location" 
              value={`Lat: ${address.geo.lat}, Lng: ${address.geo.lng}`} 
            />
          )}
        </div>
      </div>
    </div>
  );
}


function Detail({ label, value }) {
  return (
    <p className="flex items-center justify-between bg-white/20 p-3 rounded-lg shadow hover:shadow-lg transition">
      <span className="font-semibold">{label}:</span>
      <span className="ml-2">{value}</span>
    </p>
  );
}
