// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Helper function to get auth token
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Helper function to handle API responses
const handleResponse = async (response) => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.message || 'An error occurred');
  }
  
  return data;
};

// Auth API calls
export const authAPI = {
  // Register new user
  register: async (userData) => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
      }),
    });
    
    return handleResponse(response);
  },

  // Login user
  login: async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    return handleResponse(response);
  },

  // Logout user
  logout: async () => {
    const token = getAuthToken();
    
    if (!token) {
      return { message: 'No active session' };
    }

    const response = await fetch(`${API_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return handleResponse(response);
  },

  // Get current user
  getCurrentUser: async () => {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('Not authenticated');
    }

    const response = await fetch(`${API_URL}/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return handleResponse(response);
  },
};

export default authAPI;
