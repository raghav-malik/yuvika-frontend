/**
 * Direct API service with hardcoded backend URL
 * No environment variables, no configuration, just direct calls
 */

// IMPORTANT: Hardcoded backend URL - this is the only place it's defined
const BACKEND_URL = 'https://raghavbackend.onrender.com';

/**
 * Login function
 */
export async function directLogin(username, password) {
  console.log('Making direct login request to:', `${BACKEND_URL}/users/login`);
  
  try {
    const response = await fetch(`${BACKEND_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    
    console.log('Login response status:', response.status);
    const data = await response.json();
    console.log('Login response data:', data);
    
    return data;
  } catch (error) {
    console.error('Direct login error:', error);
    return { 
      success: false, 
      message: `Network error: ${error.message}` 
    };
  }
}

/**
 * Submit grievance function
 */
export async function directSubmitGrievance(grievanceData) {
  console.log('Making direct grievance submission to:', `${BACKEND_URL}/grievance`);
  
  try {
    const response = await fetch(`${BACKEND_URL}/grievance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grievanceData)
    });
    
    console.log('Grievance submission status:', response.status);
    const data = await response.json();
    console.log('Grievance submission data:', data);
    
    return data;
  } catch (error) {
    console.error('Direct grievance submission error:', error);
    return { 
      success: false, 
      message: `Network error: ${error.message}` 
    };
  }
} 