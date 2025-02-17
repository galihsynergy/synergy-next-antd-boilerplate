import { AlertCircle } from '@untitled-ui/icons-react';
import clsx from 'clsx';
import React from 'react';

export const OSXBannerInfo = ({
  title,
  description,
  customButton,
  wrapperClassName,
  type = 'success',
}: {
  title?: string;
  description?: string;
  customButton?: React.ReactNode;
  wrapperClassName?: string;
  type?: 'error' | 'warning' | 'success' | 'grayed' | 'blue';
}) => {
  const typeBadgeText = {
    error: 'text-utility-error-700',
    warning: 'text-utility-warning-700',
    success: 'text-utility-success-700',
    grayed: 'text-text-disabled',
    blue: 'text-text-brand-secondary',
  };

  const typeBadgeBackground = {
    error: 'bg-bg-error-secondary',
    warning: 'bg-bg-warning-primary',
    success: 'bg-bg-success-secondary',
    grayed: 'bg-bg-secondary_subtle',
    blue: 'bg-brand-primary',
  };

  const typeBadgeBorder = {
    error: 'border-red-500',
    warning: 'border-yellow-500',
    success: 'border-green-500',
    grayed: 'border-border-disabled',
    blue: 'border-blue-500',
  };

  return (
    <div
      className={`flex items-start p-3 rounded-xl border-[1px] ${typeBadgeBorder[type]} ${typeBadgeBackground[type]} self-stretch`}
    >
      <div className='flex items-center gap-3 flex-1 '>
        <div
          className={clsx(
            'flex gap-4 flex-1 w-full items-start',
            wrapperClassName,
          )}
        >
          <AlertCircle className={typeBadgeText[type]} width={24} height={24} />
          <div className='flex flex-col gap-[2px] text-left'>
            <p className={`${typeBadgeText[type]} text-base font-semibold`}>
              {title}
            </p>

            <div className={`text-sm font-[500] ${typeBadgeText[type]}`}>
              {description}
            </div>
            <div className='flex justify-start items-start gap-4 mt-[8px]'>
              {customButton}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
