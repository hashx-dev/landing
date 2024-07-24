import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { createClient } from '@supabase/supabase-js';

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2dnJrbXZkYmh4aXZteWtzaGhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc2NjYxNTEsImV4cCI6MTk5MzI0MjE1MX0.WB_GvyWcmhypSRBAn4b-CFyYYFEE4I4HLSFFB9wacLE';
const supabaseUrl = 'https://hvvrkmvdbhxivmykshhi.supabase.co';
const supabase = createClient(supabaseUrl, supabaseKey, {
  autoRefreshToken: true,
  persistSession: true,
});

const Verify = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [tokenValid, setTokenValid] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const { data, error } = await supabase
          .from('UserInfo')
          .select("Id")
          .eq("Id", token)
          .single();

          console.log(data);
          console.log(error);
        if (error ) {
          setTokenValid(false);
        }
      } catch (error) {
        setTokenValid(false);
      }
    };

    verifyToken();
  }, [token]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {

      const { error } = await supabase
        .from("Password")
        .update({
          SaltedHash:password,
        })
        .eq("UserInfo", token);
      if (error) {
        setError("Failed to update password. Please try again.");
        return;
      }
      setSuccess("Password updated successfully. Redirecting to Home page...");
      setTimeout(() => {
        history.push("/");
      }
      , 2000
      );
    } catch (error) {
      setError("Failed to update password. Please try again.");
    }
  };

  return (
    <div style={styles.verifyContainer}>
      <h2>Reset Your Password</h2>
      {!tokenValid ? (
        <p>Invalid or expired token. Please request a new link to reset your password.</p>
      ) : (
        <form onSubmit={handlePasswordChange}>
          <div style={styles.formGroup}>
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}
          <button type="submit" style={styles.button}>Reset Password</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  verifyContainer: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
};

export default Verify;
