import React from 'react';

export default function FileImage({ type = '' }: { type?: string } = {}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 40 40'
      height='40'
      width='40'
    >
      <path
        strokeWidth='1.5'
        stroke='#D0D5DD'
        fill='#fff'
        d='M35 39.25H11A3.25 3.25 0 0 1 7.75 36V4A3.25 3.25 0 0 1 11 .75h16c.121 0 .238.048.323.134l10.793 10.793a.457.457 0 0 1 .134.323v24A3.25 3.25 0 0 1 35 39.25Z'
      ></path>
      <path
        strokeWidth='1.5'
        stroke='#D0D5DD'
        d='M27 .5V8a4 4 0 0 0 4 4h7.5'
      ></path>
      <text
        textAnchor='middle'
        fill='#6e7687'
        fontWeight='bold'
        fontSize='12'
        y='25'
        x='23'
      >
        {type}
      </text>
    </svg>
  );
}
