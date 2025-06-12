const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://yuvika-backend-production.up.railway.app';

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