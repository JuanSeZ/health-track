import Card from '../components/card';
import Logo from '../assests/logo.svg';
import Navbar, { NavBarItemType } from '../components/navbar';
import PillIcon from '../assests/pill-icon.tsx';
import WaterDropIcon from '../assests/water-drop-icon.tsx';
import FireIcon from '../assests/fire-icon.tsx';
import RightArrow from '../assests/rigth-arrow.svg'

export const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col gap-2 w-full pt-4 px-4">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="text-left flex flex-col">
          <span className="text-h3 font-sans font-regular">Good morning,</span>
          <span className="text-h3 font-bold">Sofía</span>
        </div>
      </div>
      <div className="flex flex-col flex-grow overflow-y-auto gap-4 w-full px-4">
        <div
          className="text-center flex flex-col py-3 w-screen -mx-4"
          style={{ backgroundColor: 'rgba(151,71,255,0.15)' }}
        >
          <text className="text-m1" style={{ color: '#9747FF' }}>
            Reminder
          </text>
          <text>Don’t forget to take your pills</text>
        </div>

        <div className="cards-container flex flex-col gap-8">
          <div className="daily-schedule-container flex gap-1.5 flex-col">
            <span className="text-body-bold font-bold text-left">
              Daily Health Schedule
            </span>
            <div className="daily-schedule-card-container flex gap-4 flex-col">
              <Card
                variant="appointment"
                title="Levotiroxina"
                description="12:30"
                icon={<PillIcon color="#238845" />}
                backgroundColor="bg-tertiary-300 bg-opacity-50"
                iconBackgroundColor="bg-tertiary-400 bg-opacity-40"
              />
              <Card
                variant="appointment"
                title="Doctor's appointment"
                description="Hospital Austral, 15:00"
                backgroundColor="bg-grey bg-opacity-30"
                classname="w-full"
              />
              <Card
                variant="appointment"
                title="Tafirol"
                description="18:30"
                icon={<PillIcon color="#238845" />}
                backgroundColor="bg-tertiary-300 bg-opacity-50"
                iconBackgroundColor="bg-tertiary-400 bg-opacity-40"
              />
            </div>
          </div>

          <div className="activity-container flex gap-1.5 flex-col">
            <span className="text-body-bold font-bold text-left">
              Activity & Wellness Tracker
            </span>
            <div className="activity-card-container flex gap-4 flex-col">
              <div className="streak-cards flex flex-row justify-between">
                <Card
                  variant="streakMessage"
                  description="10 days strong! Every step fuels your progress"
                  callToAction={
                    <span className="flex items-center gap-1">
                    Tap for more
                    <RightArrow />
                  </span>
                  }
                  icon={<FireIcon color="#FF8100" />}
                  backgroundColor="bg-secondary-100"
                  iconBackgroundColor="bg-secondary-200 bg-opacity-50"
                  descriptionColor="secondary-400"
                />
                <Card
                  variant="streakMessage"
                  description="You’ve stayed hydrated for 15 days"
                  callToAction={
                    <span className="flex items-center gap-1">
                    Tap for more
                    <RightArrow />
                  </span>
                  }
                  icon={<WaterDropIcon color="#057D9F" />}
                  backgroundColor="bg-primary-500 bg-opacity-10"
                  iconBackgroundColor="bg-primary-300"
                  descriptionColor="primary-600"
                />
              </div>

              <Card
                variant="progressRing"
                title="Water"
                subtitle="850 ml"
                action="Add"
                buttonVariant="primaryOutlined"
                percentage={85}
                progressColor="#057D9F"
                backgroundColor="bg-primary-200"
                headerColor="primary-600"
              />

              <Card
                variant="progressRing"
                title="Steps"
                subtitle="1.2 km"
                action="Add"
                buttonVariant="secondaryOutlined"
                percentage={75}
                progressColor="#FF8100"
                backgroundColor="bg-secondary-100"
                headerColor="secondary-400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex justify-center">
        <Navbar activeItem={NavBarItemType.Home} />
      </div>
    </div>
  );
};

export default Home;
