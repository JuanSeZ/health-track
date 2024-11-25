import RightChevron from '../../assests/right-chevron.tsx';

export interface HorizontalMoveButtonProps {
  variant: 'left' | 'right';
  color: string;
}

export const HorizontalMoveButton = ({ variant, color }: HorizontalMoveButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center w-[25px] h-[87px] bg-white bg-opacity-75 ${
        variant === 'left' ? 'rotate-180' : 'rotate-0'
      }`}
    >
      <RightChevron strokeColor={color}/>
    </button>
  );
};