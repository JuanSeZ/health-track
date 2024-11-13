import Logo from '../assests/logo.svg';
import AddRoundLight from '../assests/add-round-light.svg';
import { CalendarWeek, Days } from '../components/calendarWeek';
import Navbar, { NavBarItemType } from '../components/navbar';
import Card, { CardProps } from '../components/card';
import WaterDropIcon from '../assests/water-drop-icon.tsx';
import FireIcon from '../assests/fire-icon.tsx';
import PillIcon from '../assests/pill-icon.tsx';

const Calendar = () => {
  const calendarDays: Days[] = [
    {
      day: 'M',
      number: 20,
    },
    {
      day: 'T',
      number: 21,
    },
    {
      day: 'W',
      number: 22,
    },
    {
      day: 'T',
      number: 23,
    },
    {
      day: 'F',
      number: 24,
    },
  ];

  const progressCards: CardProps[] = [
    {
      buttonVariant: 'primary' as const,
      percentage: 45,
      progressColor: '#39aecf',
      subtitle: '850ml',
      title: 'Water',
      variant: 'progressBar' as const,
      icon: <WaterDropIcon color={'#39aecf'} />,
      iconBackgroundColor: 'bg-primary-400 bg-opacity-50',
      descriptionColor: 'primary-400',
      headerColor: 'primary-400',
      backgroundColor: 'bg-primary-600 bg-opacity-10',
    },
    {
      buttonVariant: 'primary' as const,
      percentage: 20,
      progressColor: '#FF8100',
      subtitle: '1.2 km',
      title: 'Steps',
      variant: 'progressBar' as const,
      icon: <FireIcon color={'#FF8100'} />,
      iconBackgroundColor: 'bg-secondary-200 bg-opacity-50',
      headerColor: 'secondary-400',
      backgroundColor: 'bg-secondary-100',
    },
    {
      buttonVariant: 'primary' as const,
      percentage: 100,
      progressColor: '#74C476',
      subtitle: 'Tafirol 1g',
      title: 'Pill',
      icon: <PillIcon color={'#74C476'} />,
      variant: 'progressBar' as const,
      iconColor: '#003bff',
      iconBackgroundColor: 'bg-tertiary-300',
      headerColor: 'tertiary-500',
      backgroundColor: 'bg-tertiary-200',
    },
  ];

  return (
    <div className="flex flex-col w-full h-full items-center pt-4 px-4 gap-10">
      <div className={'w-full'}>
        <div className="flex flex-row justify-center w-full mb-4">
          <Logo />
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-h2 font-medium">Calendar</span>
          <AddRoundLight />
        </div>
      </div>
      <div className={'gap-4 w-full'}>
        <div className={''}>
          <CalendarWeek pickedDate={22} days={calendarDays} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {progressCards.map((card, index) => (
            <Card
              key={index}
              variant={card.variant}
              title={card.title}
              subtitle={card.subtitle}
              headerColor={card.headerColor}
              description={card.description}
              descriptionColor={card.descriptionColor}
              backgroundColor={card.backgroundColor}
              iconColor={card.iconColor}
              iconBackgroundColor={card.iconBackgroundColor}
              percentage={card.percentage}
              progressColor={card.progressColor}
              buttonVariant={card.buttonVariant}
              icon={card.icon}
              classname="w-full"
            />
          ))}
        </div>
        <Navbar activeItem={NavBarItemType.Calendar} />
      </div>
    </div>
  );
};

export default Calendar;
