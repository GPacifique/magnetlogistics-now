# Magnet Logistics - Setup Instructions

## Backend Setup (Laravel)

### Prerequisites
- PHP 8.1 or higher
- Composer
- MySQL or MariaDB

### Installation Steps

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Set up environment**
   - The `.env` file is already created
   - Update database credentials in `.env`:
     ```
     DB_DATABASE=magnet_logistics
     DB_USERNAME=root
     DB_PASSWORD=your_password
     ```

4. **Generate application key**
   ```bash
   php artisan key:generate
   ```

5. **Create database**
   - Create a MySQL database named `magnet_logistics`

6. **Run migrations**
   ```bash
   php artisan migrate
   ```

7. **Start the server**
   ```bash
   php artisan serve
   ```
   The backend will run on `http://localhost:8000`

## Frontend Setup (React + Vite)

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation Steps

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   - The `.env` file is already created with API URL
   - Default API URL: `http://localhost:8000/api`

4. **Start development server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication

- **POST** `/api/register` - Register new user
  - Body: `{ name, email, phone, password }`
  
- **POST** `/api/login` - Login user
  - Body: `{ email, password }`
  
- **POST** `/api/logout` - Logout user (requires auth token)

- **GET** `/api/user` - Get current user (requires auth token)

## Features

### Frontend
- ✅ Login & Registration forms
- ✅ API integration with Laravel backend
- ✅ Token-based authentication
- ✅ Error handling
- ✅ Loading states

### Backend
- ✅ Laravel Sanctum authentication
- ✅ User registration endpoint
- ✅ User login endpoint
- ✅ Protected routes
- ✅ CORS configuration for frontend

## Testing

1. Make sure both backend and frontend servers are running
2. Navigate to `http://localhost:3000`
3. Try registering a new account
4. Try logging in with the created account

## Troubleshooting

### CORS Issues
- Ensure the backend CORS config includes `http://localhost:3000`
- Check that Sanctum stateful domains are set correctly

### Database Connection
- Verify MySQL is running
- Check database credentials in backend `.env`
- Ensure the database exists

### API Connection
- Verify backend is running on port 8000
- Check frontend `.env` has correct API URL
- Look for console errors in browser dev tools
