import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";
import { toast } from "react-toastify";

const SellerActivationPage = () => {
  const { token: activation_token } = useParams();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (activation_token) {
      const activateAccount = async () => {
        try {
          const res = await axios.post(`${server}/shop/activation`, {
            activation_token,
          });
          console.log("✅ Activation success:", res.data);
          setStatus("success");
          toast.success("🎉 Account created successfully!");
        } catch (err) {
          console.log("❌ Activation error:", err.response?.data?.message);
          const msg = err.response?.data?.message;

          if (msg === "User already exists") {
            toast.error("⚠️ Account already exists!");
            setStatus("exists");
          } else if (msg === "Invalid token") {
            toast.error("⚠️ Token expired!");
            setStatus("expired");
          } else {
            toast.error("❌ Something went wrong!");
            setStatus("error");
          }
        }
      };

      activateAccount();
    }
  }, [activation_token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {status === "loading" && <p>Activating your account...</p>}
      {status === "success" && <p>Your account has been created successfully!</p>}
      {status === "exists" && <p>⚠️ This account already exists!</p>}
      {status === "expired" && <p>⚠️ Token has expired!</p>}
      {status === "error" && <p>❌ Something went wrong. Please try again.</p>}
    </div>
  );
};

export default SellerActivationPage;
