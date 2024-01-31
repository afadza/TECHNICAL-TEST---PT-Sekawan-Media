import React from 'react';

const ChartTwo: React.FC = () => {
  return (
    <div className="col-span-12 xl:rounded-tr-lg rounded-tr-none rounded-br-lg rounded-bl-lg xl:rounded-bl-none border  border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark py-6 px-7.5 text-center items-center flex flex-col justify-center border-b-2 border-stroke rounded-tr-lg">
        <p className="text-sm font-medium text-body dark:text-white mb-2">
          Resolved
        </p>
        <p className="text-xl font-semibold text-black dark:text-white">449</p>
      </div>
      <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark py-6 px-7.5 text-center items-center flex flex-col justify-center border-b-2 border-stroke">
        <p className="text-sm font-medium text-body dark:text-white mb-2">
          Received
        </p>
        <p className="text-xl font-semibold text-black dark:text-white">426</p>
      </div>
      <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark py-6 px-7.5 text-center items-center flex flex-col justify-center border-b-2 border-stroke">
        <p className="text-sm font-medium text-body dark:text-white mb-2">
          Average first response time
        </p>
        <p className="text-xl font-semibold text-black dark:text-white">33m</p>
      </div>
      <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark py-6 px-7.5 text-center items-center flex flex-col justify-center border-b-2 border-stroke">
        <p className="text-sm font-medium text-body dark:text-white mb-2">
          Average response time
        </p>
        <p className="text-xl font-semibold text-black dark:text-white">
          3h 8m
        </p>
      </div>
      <div className="rounded-sm bg-white dark:border-strokedark dark:bg-boxdark py-6 px-7.5 text-center items-center flex flex-col justify-center rounded-br-lg rounded-bl-lg xl:rounded-bl-none">
        <p className="text-sm font-medium text-body dark:text-white mb-2">
          Resolution within SLA
        </p>
        <p className="text-xl font-semibold text-black dark:text-white">94%</p>
      </div>
    </div>
  );
};

export default ChartTwo;
