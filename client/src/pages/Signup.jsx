
import { Link } from 'react-router-dom';

// This is a placeholder component for Signup.jsx
// You can expand this with actual form logic similar to Register.jsx
const Signup = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Signup Page (Placeholder)
        </h2>
        <p className="mt-2 text-sm text-gray-600">Go to <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Register</Link> for actual registration.</p>
      </div>
    </div>
  );
};

export default Signup;