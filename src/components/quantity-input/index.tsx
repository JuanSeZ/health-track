import LessIcon from '../../assests/less-icon.svg';
import PlusIcon from '../../assests/black-plus-icon.svg';
import { useState } from 'react';

interface QuantityInputProps {
  initialQuantity?: number;
  disableLess?: boolean;
}

const QuantityInput = ({
  initialQuantity = 0,
  disableLess = false,
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className="w-[145px] h-[62px] px-3.5 py-[19px] bg-white rounded-md border border-black justify-between items-center inline-flex">
      <div className="w-[117px] self-stretch justify-between items-center flex">
        <div onClick={() => !disableLess && setQuantity(quantity - 1)}>
          <LessIcon />
        </div>
        {quantity}
        <div onClick={() => setQuantity(quantity + 1)}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};

export default QuantityInput;
