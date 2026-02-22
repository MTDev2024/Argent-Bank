import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice.js";

import { getUserProfile } from "../services/api";

const accounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

/**
 * Page Profile
 */
function Profile() {
  return <h1 className="text-5xl font-medium">Profile</h1>;
}

export default Profile;
