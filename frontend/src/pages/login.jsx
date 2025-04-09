import AuthForm from "./components/AuthForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white">
      <AuthForm type="login" />
    </div>
  );
}
