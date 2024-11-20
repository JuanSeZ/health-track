export enum Periods {
  DAY = 'D',
  WEEK = 'W',
  MONTH = 'M',
  SIX_MONTHS = '6M',
  YEAR = 'Y',
}

export interface PeriodPickerProps {
  selectedPeriod: Periods;
  selectedPeriodColorBg: string;
  unSelectedPeriodColorBg: string;
  selectedPeriodColorText: string;
  unSelectedPeriodColorText: string;
}

export const PeriodPicker = ({
  selectedPeriod,
  selectedPeriodColorBg,
  unSelectedPeriodColorBg,
  selectedPeriodColorText,
  unSelectedPeriodColorText,
}: PeriodPickerProps) => {
  const periods = Object.values(Periods);

  return (
    <div className="flex">
      {periods.map((period) => (
        <div
          key={period}
          className={`flex rounded-b-lg rounded-t-lg p-2 w-full min-w-[62px] justify-center mx-2 ${
            selectedPeriod === period
              ? `bg-${selectedPeriodColorBg}`
              : `bg-${unSelectedPeriodColorBg}`
          }
          ${selectedPeriod === period ? `text-${selectedPeriodColorText}` : `text-${unSelectedPeriodColorText}`}
          `}
        >
          {period}
        </div>
      ))}
    </div>
  );
};

export default PeriodPicker;
