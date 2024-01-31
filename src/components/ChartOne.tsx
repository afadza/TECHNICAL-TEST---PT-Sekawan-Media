import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'smooth',
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: Array.from({ length: 22 }, (_, i) => String(i + 1)),
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (val) {
        return String(val);
      },
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
    opposite: true,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const ChartOne: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: 'Product One',
        data: [
          23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45, 23, 11, 22, 27, 13,
          22, 37, 21, 44, 22,
        ],
      },
      {
        name: 'Product Two',
        data: [
          30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51, 30, 25, 36, 30, 45,
          35, 64, 52, 59, 36,
        ],
      },
    ],
  });

  return (
    <div className="col-span-12 rounded-tl-lg rounded-tr-lg xl:rounded-tr-none xl:rounded-bl-lg rounded-bl-none border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <div className="w-full">
              <p className="font-semibold text-black-2 dark:text-white">
                Today's trends
              </p>
              <p className="text-sm font-medium">as of 25 May 2019, 09:41 PM</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end gap-4">
          <div className="flex items-center gap-2">
            <div className="border-[#3056D3] border-b-2  w-6" />
            <p>Today</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="border-stroke border-b-2  w-4" />
            <p>Yesterday</p>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 w-[105%]">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={420}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
