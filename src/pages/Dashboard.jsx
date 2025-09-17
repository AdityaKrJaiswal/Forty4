import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Card from "../components/Card";
import Form from "../components/Form";


export default function Dashboard() {
  const { users } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState(""); 

  
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      
      <input
        type="text"
        placeholder="Search by name..."
        className="border p-2 mb-4 w-full md:w-1/2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      
      <Form />

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((person) => (
            <Card key={person.id} user={person} />
          ))
        ) : (
          <p className="text-gray-500">No users found</p>
        )}
      </div>
    </div>
  );
}
