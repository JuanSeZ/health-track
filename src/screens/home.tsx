import Card from '../components/card';
import WaterDropIcon from '../assests/water-drop-icon.tsx';
import FireIcon from '../assests/fire-icon.tsx';
import Logo from '../assests/logo.svg';
import Navbar from '../components/navbar';
import { NavBarItemType } from '../components/navbar/Navbar.stories.tsx';

export const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="text-left flex flex-col">
        <span className="text-h3 font-sans font-regular">Good morning,</span>
        <span className="text-h3 font-bold">Sofía</span>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div
          className="w-screen -mx-8 text-center flex flex-col py-4"
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
          backgroundColor="bg-primary-100"
          iconBackgroundColor="bg-primary-200"
          headerColor="primary-400"
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
          iconBackgroundColor="bg-secondary-200"
          headerColor="secondary-400"
        />
        <Card
          variant="default"
          subtitle="Doctor's appointment"
          description="Hospital Austral, 15:00"
          backgroundColor="bg-grey"
        />
        <Navbar activeItem={NavBarItemType.Home} />
      </div>
    </div>
  );
};

export default Home;
