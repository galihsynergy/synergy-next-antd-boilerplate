import { OSXFileProps } from '@/components/Reusable/FileUploader/OSXFile';
import { Attachment01, Trash01 } from '@untitled-ui/icons-react';
import clsx from 'clsx';
import React from 'react';

function OSXFileCompact({
  onAction,
  type,
  fileName,
  uid,
  className,
}: OSXFileProps) {
  return (
    <div
      className={clsx(
        'flex font-medium gap-2 text-button-tertiary-fg items-center ',
        className,
      )}
    >
      <Attachment01 width={18} />
      <p className='w-full line-clamp-1'>{fileName}</p>
      {type === 'delete' && (
        <Trash01
          className='cursor-pointer'
          width={18}
          onClick={() => {
            onAction(uid);
          }}
        />
      )}
    </div>
  );
}

export default OSXFileCompact;
