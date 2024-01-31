const CardOne = ({ tickets }: { tickets: number }) => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 text-center items-center flex flex-col justify-center shadow-default dark:border-strokedark dark:bg-boxdark">
      <p className="text-lg font-medium text-body dark:text-white mb-2">
        Unresolved
      </p>
      <p className="text-3xl font-semibold text-black dark:text-white">
        {tickets}
      </p>
    </div>
  );
};

export default CardOne;
