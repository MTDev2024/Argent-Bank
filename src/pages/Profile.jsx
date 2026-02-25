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
    <div
      className={
        isEditing
          ? "bg-gray-200 min-h-screen"
          : "bg-(--color-dark) min-h-screen"
      }
    >
      <div className="flex justify-center">
        {isEditing ? (
          // Mode édition : Inputs + Save + Cancel
          <div className="text-center py-8">
            <h1 className="text-gray-700  font-bold text-3xl pt-6 mb-6">
              Welcome back
            </h1>
            <div className="flex gap-4 justify-center mb-4">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 p-2 text-gray-600 bg-white w-50 h-10 "
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 p-2 text-gray-600 bg-white w-50 h-10"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <button
                className="border border-(--color-violet) text-(--color-violet) font-bold px-6 py-2 w-30 h-10"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="border border-(--color-violet) text-(--color-violet) font-bold px-6 py-2 w-30 h-10"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // Mode normal : nom complet + Edit Name
          <div className="text-center py-8">
            <h1 className="text-white text-3xl">
              Welcome back
              <br />
              {user.firstName} {user.lastName} !
            </h1>
            <button
              className="text-white border border-(--color-green) bg-(--color-green) font-bold p-2.5 mt-4"
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
