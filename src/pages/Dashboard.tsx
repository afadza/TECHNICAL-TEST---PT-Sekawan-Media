import CardFour from '../components/CardFour.tsx';
import CardOne from '../components/CardOne.tsx';
import CardThree from '../components/CardThree.tsx';
import CardTwo from '../components/CardTwo.tsx';
import ChartOne from '../components/ChartOne.tsx';
import ChartThree from '../components/ChartThree.tsx';
import ChartTwo from '../components/ChartTwo.tsx';
import ChartFour from '../components/ChartFour.tsx';
import useTickets from '../hooks/useTickets.tsx';

const Dashboard = () => {
  const { unResolvedTickets, resolvedTickets, onHoldTickets, openTickets } =
    useTickets();
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardOne tickets={unResolvedTickets?.length} />
        <CardTwo tickets={resolvedTickets?.length} />
        <CardThree tickets={openTickets?.length} />
        <CardFour tickets={onHoldTickets?.length} />
      </div>
      <div className="mt-4 grid grid-cols-12">
        <ChartOne />
        <ChartTwo />
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartThree />
        <ChartFour />
      </div>
    </>
  );
};

export default Dashboard;
