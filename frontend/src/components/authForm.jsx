import { useState } from "react";

export default function AuthForm({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${type === "login" ? "Logging in" : "Registering"} with`, email, password);
    // Add Firebase or backend login/register logic here
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-8 rounded-xl shadow-md w-80">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {type === "login" ? "Login to IntelliMatch" : "Create IntelliMatch Account"}
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-6 border rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-[#1e3a8a] text-white py-2 rounded hover:bg-[#1d4ed8]"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
