import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { token } = useParams();
  const [error, setError] = useState(false);
  const [activated, setActivated] = useState(false);

  const hasActivated = useRef(false); // 🔒 This is the lock

  useEffect(() => {
    const activateSeller = async () => {
      if (token && !hasActivated.current) {
        hasActivated.current = true; // lock it immediately

        try {
          const res = await axios.post(`${server}/shop/activation`, {
            activation_token: token,
          });
          console.log("✅ Activation success:", res.data?.message);
          setActivated(true);
        } catch (error) {
          console.log("❌ Activation error:", error.response?.data?.message);
          setError(true);
        }
      }
    };

    activateSeller();
  }, [token]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    >
      {error ? (
        <p style={{ color: "red" }}>Your token is expired or invalid.</p>
      ) : activated ? (
        <p style={{ color: "green" }}>Your account has been created successfully!</p>
      ) : (
        <p>Activating your account...</p>
      )}
    </div>
  );
};

export default SellerActivationPage;
