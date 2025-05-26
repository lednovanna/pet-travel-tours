import { ChangeEvent, FormEvent, useState } from 'react';
import { FORM_LOGIN, initialLoginState, LoginFormData } from '../data';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState<LoginFormData>(initialLoginState);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [showPassword, setShowPassword] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormState((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    FORM_LOGIN.forEach((field) => {
      if (field.required && !formState[field.name as keyof LoginFormData]) {
        newErrors[field.name] = 'This field is required';
      } else if (field.pattern) {
        const regex = new RegExp(field.pattern);
        if (!regex.test(formState[field.name as keyof LoginFormData] as string)) {
          newErrors[field.name] = field.errorMessage || 'Invalid input';
        }
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Logging in...', formState);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        {FORM_LOGIN.map((field) => {
          const error = errors[field.name];
          const isPassword = field.name === 'password';

          return (
            <div key={field.name} className="relative mb-4">
              <div className="relative">
                <input
                  name={field.name}
                  type={isPassword && showPassword ? 'text' : field.type || 'text'}
                  placeholder={field.placeholder}
                  value={formState[field.name as keyof LoginFormData] as string}
                  onChange={onChange}
                  required={field.required}
                  className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition border-gray-300 ${
                    error ? 'border-red-500' : ''
                  }`}
                />

                {isPassword && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-gray-500"
                    >
                      {showPassword ? <FaRegEye size={20}/> : <FaRegEyeSlash size={20}/>}
                    </button>
                  </div>
                )}
              </div>
              {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
            </div>
          );
        })}

        {/* Stay logged in */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="stayLoggedIn"
            checked={formState.stayLoggedIn}
            onChange={onChange}
            id="stayLoggedIn"
            className="accent-amber-500"
          />
          <label htmlFor="stayLoggedIn" className="text-sm text-gray-700">
            Stay logged in
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Sign in
        </button>

        <button
          type="button"
          className="block text-center w-full text-blue-600 hover:underline text-sm mt-2"
        >
          Forgot password?
        </button>
        <div className="flex justify-center">
         <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline text-sm mb-2 "
      >
        ← Back
      </button>
      </div>
      </form>
    </div>
  );
};

export default Login;