import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  document.title = "Login - Aplikasi Peminjaman Alat Lab";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggingIn, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !password.trim()) {
      toast.error("Email dan password harus diisi dengan lengkap!", {
        position: "top-center",
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    if (!emailPattern.test(email)) {
      toast.error("Email harus valid, dengan format user@example.com", {
        position: "top-center",
        duration: 4000,
      });
      setLoading(false);
      return;
    }

    setButtonLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email: email,
        password: password,
      });

      const { token, user, permissions, roles } = response.data;

      if (!roles || roles.length === 0) {
        toast.error("Akun tidak memiliki role yang valid", {
          position: "top-center",
          duration: 4000,
        });
        setLoading(false);
        setButtonLoading(false);
        return;
      }

      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      Cookies.set("permissions", JSON.stringify(permissions));
      Cookies.set("role", roles[0]);

      localStorage.setItem("token", token);

      toast.success("Login berhasil!", {
        position: "top-center",
        duration: 4000,
      });

      const userRole = roles[0];

      switch (userRole) {
        case "admin":
          navigate("/Dashboard");
          break;
        case "user":
          navigate("/Dashboarduser");
          break;
        default:
          console.error("Role tidak valid:", userRole);
          navigate("/");
      }
    } catch (error) {
      if (error.response) {
        toast.error("Email atau password salah!", {
          position: "top-center",
          duration: 4000,
        });
      } else if (error.request) {
        toast.error("Kesalahan Jaringan", {
          position: "top-center",
          duration: 4000,
        });
      } else {
        toast.error("Server sedang error", {
          position: "top-center",
          duration: 4000,
        });
      }
    } finally {
      setLoading(false);
      setButtonLoading(false);
    }
  };

  return (
    <div className="grid h-screen w-full">
      <div className="bg-gradient-to-br from-blue-300 to-blue-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg bg-gradient-to-br from-blue-250 to-blue-800 p-8 px-8"
          onSubmit={login}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Login
          </h2>
          <div className="flex flex-col text-dark py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-dark 400 py-2">
            <label>Password</label>
            <input
              className="p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-300 focus:outline-none"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full my-4 py-2 bg-blue-900 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
            type="submit"
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Sedang Login..." : "Login"}
          </button>
          {/* <p>
            belum punya akun? daftar{' '}
            <Link to="/Daftar" className="text-blue-300">
              disini
            </Link>{' '}
          </p> */}
        </form>
      </div>
    </div>
  );
}