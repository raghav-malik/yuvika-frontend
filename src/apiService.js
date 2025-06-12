// Hard-coded backend URL - no environment variables
const BACKEND_URL = 'https://raghavbackend.onrender.com';

// Login API call
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BACKEND_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': window.location.origin
      },
      credentials: 'include',
      body: JSON.stringify({ username, password })
    });
    
    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Network error: ' + error.message };
  }
};

// Submit grievance API call
export const submitGrievanceData = async (grievanceData) => {
  try {
    const response = await fetch(`${BACKEND_URL}/grievance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Origin': window.location.origin
      },
      credentials: 'include',
      body: JSON.stringify(grievanceData)
    });
    
    return await response.json();
  } catch (error) {
    console.error('Grievance submission error:', error);
    return { success: false, message: 'Network error: ' + error.message };
  }
}; 