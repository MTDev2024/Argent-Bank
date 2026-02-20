// USER LOGIN

export async function loginUser({ email, password }) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }

  const data = await response.json();
  return data.body.token;
}

// // USER PROFILE
// getUserProfile — POST /user/profile
export async function getUserProfile(access_token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }
  const data = await response.json();
  return data.body;
}

// // USER PROFILE
// updateUserProfile — PUT /user/profile
export async function updateUserProfile(firstName, lastName, access_token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + access_token,
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }
  const data = await response.json();
  return data.body;
}
