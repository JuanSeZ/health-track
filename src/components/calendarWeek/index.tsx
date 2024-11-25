import { CalendarDate } from '../calendarDates';
import { HorizontalMoveButton } from '../horizontalMoveButton';

export interface Days {
  day: string;
  number: number;
}

export interface CalendarTabProps {
  pickedDate: number;
  days: Days[];
}

export const CalendarWeek = ({ pickedDate, days }: CalendarTabProps) => {
  const PickedDateValid = (): number => {
    if (pickedDate > 0 && pickedDate < 32) {
      return pickedDate;
    } else {
      return 0;
    }
  };

  return (
    <div className="relative flex items-center justify-center w-[333px]">
      <div className="absolute z-10 left-[-20px]">
        <HorizontalMoveButton variant={'left'} color={'#39AECF'} />
      </div>

      <div className={'flex flex-row gap-4 items-center'}>
        {days.map((day) => (
          <CalendarDate
            key={day.number}
            number={day.number.toString()}
            dayName={day.day}
            variant={
              PickedDateValid() === day.number ? 'selected' : 'unselected'
            }
          ></CalendarDate>
        ))}
      </div>
      <div className="absolute z-10 right-[-20px]">
        <HorizontalMoveButton variant={'right'} color={'#39AECF'}/>
      </div>
    </div>
  );
};
