type ButtonProps = {
    type: "button" | "submit";
    title: string;
    variant: string;
 };

const Button = ({ title, variant}: ButtonProps) => {
    return (
        
       <button className={`flex gap-2 hover:text-blue-700 ${variant}`}>
       <label className="cursor-pointer font-bold">{title}</label>
       </button>
       
     );
};

export default Button;