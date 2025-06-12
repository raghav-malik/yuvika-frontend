const BACKEND_URL = 'https://yuiv-backend.onrender.com';

export const login = async (username, password) => {
  const response = await fetch(`${BACKEND_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  return response.json();
};

export const submitGrievance = async (grievanceData) => {
  const response = await fetch(`${BACKEND_URL}/grievance`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(grievanceData)
  });
  return response.json();
}; 