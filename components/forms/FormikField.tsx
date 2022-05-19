import { CalendarIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { Field } from 'formik';

interface FormikFieldProps {
  className?: string;
  label?: string;
  name: string;
  calendar?: boolean;
  placeholder?: string;
  error?: string;
  type?: string;
  showPassword?: boolean;
  openCalendar?: () => void;
  onShowPassword?: () => void;
}

const FormikField: React.FC<FormikFieldProps> = ({
  className,
  label,
  name,
  calendar,
  placeholder,
  openCalendar,
  error,
  type = 'text',
  showPassword = 'false',
  onShowPassword,
  ...rest
}) => {
  return (
    <>
      <div
        className={`${
          type === 'password' && 'flex'
        } relative py-1 flex items-center justify-center text-center`}
      >
        <Field
          autoComplete="off"
          label={label}
          name={name}
          id={name}
          type={type === 'password' && !showPassword ? type : 'text'}
          placeholder={placeholder}
          // focus:outline-[#0c60fe]
          className={`w-full border border-gray-400 rounded-full py-3 px-4 ${className}`}
          {...rest}
        />
        {type === 'password' && (
          <button
            className="flex items-center justify-center text-center"
            title="show password"
            onClick={onShowPassword}
            type="button"
          >
            {!showPassword ? (
              <EyeOffIcon
                height={20}
                width={20}
                className="text-gray-400 absolute right-2"
              />
            ) : (
              <EyeIcon
                height={20}
                width={20}
                className="text-gray-400 absolute right-2"
              />
            )}
          </button>
        )}
      </div>
      {error && <span className=" px-1 text-red-700 text-xs">{error}</span>}
    </>
  );
};

export default FormikField;
