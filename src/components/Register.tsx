import { ChangeEvent, FormEvent, useState } from 'react'; 
import { FORM_REGISTER, initialState, FormData } from '../data';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';



const Register = () => {

const navigate = useNavigate();
const [formState, setFormState] = useState<FormData>(initialState);
const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if ((name === 'name' || name === 'surname') && /[^a-zA-Zа-яА-ЯёЁ\s]/.test(value)) {
        return;
      }
  
    
    setFormState((prev) => ({...prev, [name]: value}));
};

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { email, password, duplicate } = formState;

  if (!email || !password || !duplicate) {
    return;
  }

  if (password !== duplicate) {
    alert('Passwords do not match');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered:', userCredential.user);
    navigate('/dashboard'); 
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
    alert(error.message);
  } else {
    console.error('Unknown error:', error);
    alert('Something went wrong');
  }
}
}

    return(
        <div className="flex justify-center p-5 items-center min-h-screen bg-gray-100">
        <form className="max-w-md m-auto w-full p-6 bg-white rounded-2xl shadow-xl space-y-6"
         onSubmit={onSubmit}>
        
        <p className="text-2xl font-semibold text-center ">Registration</p>
        {FORM_REGISTER.map((item) => {
        let error = '';

        if (item.name === 'duplicate' && item.validate?.(formState)) {
          error = item.errorMessage || '';
        }

        if (
          item.name === 'email' &&
          formState.email &&
          !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(formState.email)
        ) {
          error = 'E-mail is invalid';
        }

        if (item.name === 'password' && formState.password.length > 0 && formState.password.length < 6) {
          error = 'Password must be at least 6 characters';
        }

        return (
            <div key={item.name}  className="flex flex-col">
            <Input
            name={item.name}
            placeholder={item.placeholder}
            type={item.type || "text"}
            
            required={item.required || item.reguired}
            value={formState[item.name as keyof FormData] || ""}
            onChange={onChange}
            error={error}
            
            showPassword={
                item.name === 'password' ? showPassword : item.name === 'duplicate' ? showConfirm : undefined
              }
              toggleShowPassword={
                item.name === 'password'
                  ? () => setShowPassword(!showPassword)
                  : item.name === 'duplicate'
                  ? () => setShowConfirm(!showConfirm)
                  : undefined
              }
            />
            </div>
            );
            })}

        <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-300">
        Register
        </button>
        <div className="flex justify-center">
         <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-2 "
      >
        ← Back
      </button>
      </div>
    </form>
    </div>
    )
    
}

type InputProps = {
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
    required?: boolean;
    error?: string;
    showPassword?: boolean;
    toggleShowPassword?: () => void;
    };
 
    const Input = ({
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    required = false,
    error = "",
    showPassword,
    toggleShowPassword,
    }: InputProps) => { 
        const isPasswordType = type === 'password';
   
   return(
   <div className=" w-full ">
    <div className="relative">
        <input
        name={name}
        type={isPasswordType && showPassword !== undefined ? (showPassword ? 'text' : 'password') : type}
        autoComplete="new-password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition border-gray-300 ${
            error ? 'border-red-500' : ''
          }`}
        />

        {isPasswordType && toggleShowPassword && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <FaRegEye size={20} /> : <FaRegEyeSlash size={20}/>  }
        </button>
      )}
      </div>

        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
       )};

export default Register;