import { LucideIcon } from "lucide-react";
import Input from "./Input";

interface InputSectionProps {
  id?: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string[];
  editable?: boolean;
  icon?: LucideIcon;
}

const InputField = ({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
  icon: Icon,
}: InputSectionProps) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <label htmlFor={id} className="text-gray-600 flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4 text-gray-500" />} {label}
      </label>
      <label htmlFor={id} className="text-primary text-sm cursor-pointer">
        تحرير
      </label>
    </div>
    <Input
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;
