import Card from '../components/card';
import WaterDropIcon from '../assests/water-drop-icon.tsx';
import FireIcon from '../assests/fire-icon.tsx';
import Logo from '../assests/logo.svg';
import Navbar, { NavBarItemType } from '../components/navbar';

export const Home = () => {
  return (
    <div className="flex flex-col gap-2 w-full pt-4 px-4">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-h3 font-sans font-regular">Good morning,</span>
        <span className="text-h3 font-bold">Sofía</span>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className="text-center flex flex-col py-1 w-screen -mx-4"
          style={{ backgroundColor: 'rgba(151,71,255,0.15)' }}
        >
          <text className="text-m1" style={{ color: '#9747FF' }}>
            Reminder
          </text>
          <text>Don’t forget to take your pills</text>
        </div>

        <Card
          variant="progressRing"
          title="Water"
          subtitle="850 ml"
          action="Add"
          buttonVariant="primaryOutlined"
          icon={<WaterDropIcon color="#39AECF" />}
          percentage={85}
          progressColor="#39AECF"
          backgroundColor="bg-primary-600 bg-opacity-10"
          iconBackgroundColor="bg-primary-400 bg-opacity-50"
          headerColor="primary-500"
          classname="w-full"
        />
        <Card
          variant="progressRing"
          title="Steps"
          subtitle="1.2 km"
          action="Add"
          buttonVariant="secondaryOutlined"
          icon={<FireIcon color="#FF8100" />}
          percentage={22}
          progressColor="#FF8100"
          backgroundColor="bg-secondary-100"
          iconBackgroundColor="bg-secondary-200 bg-opacity-50"
          headerColor="secondary-400"
          classname="w-full"
        />
        <Card
          variant="appointment"
          title="Doctor's appointment"
          subtitle="Hospital Austral, 15:00"
          backgroundColor="bg-grey bg-opacity-30"
          classname="w-full"
        />
      </div>
      <div className="flex justify-center">
        <Navbar activeItem={NavBarItemType.Home} />
      </div>
    </div>
  );
};

export default Home;
