import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice.js";

import { getUserProfile, updateUserProfile } from "../services/api";

import AccountCard from "../components/AccountCard.jsx";

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
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  useEffect(() => {
    // 1. appeler getUserProfile avec le token
    getUserProfile(token).then((data) => {
      // 2. dispatcher les données reçues
      dispatch(setUser(data));
    });
  }, [token, dispatch]);

  const handleSave = async () => {
    await updateUserProfile(firstName, lastName, token);
    dispatch(setUser({ firstName, lastName }));
    setIsEditing(false);
  };

  return (
    <div className="bg-[#12002b] min-h-screen">
      <div className="flex justify-center">
        {isEditing ? (
          // Mode édition : inputs + Save + Cancel
          <div>
            <h1>Welcome back</h1>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border border-gray-300 p-1"
            />
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border border-gray-300 p-1"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        ) : (
          // Mode normal : nom complet + Edit Name
          <div className="text-center py-8">
            <h1 className="text-white text-3xl">
              Welcome back
              <br />
              {user.firstName} {user.lastName}!
            </h1>
            <button
              className="text-white border border-[#00bc77] bg-[#00bc77] font-bold p-2.5 mt-4"
              onClick={() => setIsEditing(true)}
            >
              Edit Name
            </button>
          </div>
        )}
      </div>

      {/* Cards de compte */}
      <div className="mt-8">
        {accounts.map((account) => (
          <AccountCard
            key={account.title}
            title={account.title}
            amount={account.amount}
            description={account.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Profile;
