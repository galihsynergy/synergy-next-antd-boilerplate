import { ReactNode } from 'react';

interface InputWrapperProps {
  children: ReactNode;
  label: string;
  desc?: string;
  isRequired?: boolean;
}
export default function OSXFieldWrapper({
  children,
  label,
  desc,
  isRequired,
}: InputWrapperProps) {
  return (
    <div className='flex flex-col lg:flex-row gap-1'>
      <div className='flex-[4]'>
        <p className='font-medium text-utility-gray-700'>
          {label}
          {isRequired && <span className='text-text-error-primary'>*</span>}
        </p>
        {desc && <p className='text-xs text-utility-gray-600'>{desc}</p>}
      </div>
      <div className='flex-[8]'>{children}</div>
    </div>
  );
}
