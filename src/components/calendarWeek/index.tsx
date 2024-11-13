import { CalendarDate } from '../calendarDates';

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
    <div className={'flex flex-row gap-4 '}>
      {days.map((day) => (
        <CalendarDate
          key={day.number}
          number={day.number.toString()}
          dayName={day.day}
          variant={PickedDateValid() === day.number ? 'selected' : 'unselected'}
        ></CalendarDate>
      ))}
    </div>
  );
};
