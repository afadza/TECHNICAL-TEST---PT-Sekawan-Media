import React from 'react';
import useTickets from '../hooks/useTickets';

const ChartThree: React.FC = () => {
  const { unResolvedTickets } = useTickets();
  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white shadow-default pt-7.5 dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="w-full flex justify-between items-center px-7.5">
        <div>
          <p className="text-lg font-medium text-black dark:text-white">
            {' '}
            Unresolved tickets
          </p>
          <p className="text-sm font-medium text-body dark:text-white">
            Group: <span className="text-black dark:text-white">Support</span>
          </p>
        </div>
        <p className="text-primary font-medium">View details</p>
      </div>

      <div className="h-60 overflow-y-auto">
        {unResolvedTickets?.map((ticket: any) => (
          <div
            key={ticket.id}
            className="flex border-b-2 justify-between w-full items-center border-stroke dark:border-strokedark dark:bg-boxdark p-7.5"
          >
            <p className="text-black dark:text-white font-semibold">
              {ticket.description}
            </p>
            <p>{unResolvedTickets?.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartThree;
