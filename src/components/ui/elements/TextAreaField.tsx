import TextArea from "./Textarea";

interface TextAreaFieldProps {
    id?: string;
    name: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string[];
}

const TextAreaField = ({
    id,
    name,
    label,
    placeholder,
    value,
    onChange,
}: TextAreaFieldProps) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <label htmlFor={id} className="text-gray-600">
                {label}
            </label>
            <button className="text-primary text-sm">Edit</button>
        </div>
        <TextArea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

export default TextAreaField;
