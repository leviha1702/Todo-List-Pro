import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import axios from "axios";
import { GoogleClientId } from "../../configs/googleConfig";

const LoginGoogle = () => {
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log(userInfo, "Hello");

        console.log("User info:", userInfo.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  return (
    <button className="google-btn" onClick={() => loginGoogle()}>
      <i className="fab fa-google" /> Google
    </button>
  );
};

export default LoginGoogle;
