import { FC } from 'react';

type BadgeProps = {
  number: number;
};
const Badge: FC<BadgeProps> = ({ number }) => {
  let textColor = number > 0 ? 'text-green' : 'text-red';
  if (number === 0) textColor = 'text-gray-500';

  return (
    <div
      className={`flex shrink-0 items-center px-s py-1 bg-white/50 font-bold rounded-ll ${textColor} text-p3`}
    >
      <p>
        {number > 0 ? '+' : ''}
        {number}%
      </p>
    </div>
  );
};

export default Badge;
