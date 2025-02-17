'use client';

import { ArrowNarrowLeft, ArrowNarrowRight } from '@untitled-ui/icons-react';

import { PaginationProps } from 'antd';

const OSXPagination: PaginationProps['itemRender'] = (
  _,
  type,
  originalElement,
) => {
  if (type === 'prev') {
    return (
      <a className='flex items-center gap-[5px] h-[40px] px-[8px] py-[10px] rounded-[8px] transition-all  text-sm font-semibold'>
        <div>
          <ArrowNarrowLeft className='w-[18px]' />
        </div>
        <div className='hidden md:block'>Previous</div>
      </a>
    );
  }
  if (type === 'next') {
    return (
      <a className='flex items-center gap-[5px] h-[40px] px-[8px] py-[10px] rounded-[8px] transition-all text-sm font-semibold'>
        <div className='hidden md:block'>Next</div>
        <div>
          <ArrowNarrowRight className='w-[18px]' />
        </div>
      </a>
    );
  }
  return (
    <div className='h-[40px] w-[40px] flex items-center justify-center text-sm font-semibold text-text-tertiary'>
      {originalElement}
    </div>
  );
};

export default OSXPagination;
