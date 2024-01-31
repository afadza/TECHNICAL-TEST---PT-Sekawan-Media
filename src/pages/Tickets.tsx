import UserOne from '../images/user/user-01.png';
import { FaFilter } from 'react-icons/fa';
import { FaSortAmountUp } from 'react-icons/fa';
import ModalTicket from '../components/ModalTickets';
import useTickets from '../hooks/useTickets';

const Tickets = () => {
  const {
    handleStatusChange,
    filteredTickets,
    handleFilterChange,
    sortBy,
    handleChange,
  } = useTickets();

  const role = localStorage.getItem('role');
  return (
    <div className="rounded-lg border border-stroke bg-white pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:pb-1">
      <div className="px-4 md:px-10 mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-4 items-center justify-start w-full mb-4 md:mb-0">
          <ModalTicket />
          <p className="text-xl font-semibold text-black dark:text-white">
            All tickets
          </p>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center ">
            <FaSortAmountUp />
            <select
              name=""
              id=""
              className="border-none focus:outline-none bg-transparent dark:bg-boxdark dark:text-white"
              value={sortBy}
              onChange={handleChange}
            >
              <option value="update">Updated</option>
              <option value="high">High to Low</option>
              <option value="low">Low to High</option>
            </select>
          </div>
          <div className="flex items-center ">
            <FaFilter />
            <select
              name=""
              id=""
              className="border-none focus:outline-none bg-transparent  dark:bg-boxdark dark:text-white"
              onChange={handleFilterChange}
            >
              <option value="">All Tickets</option>
              <option value="Open">Open</option>
              <option value="Overdue">Overdue</option>
              <option value="Unresolved">Unresolved</option>
              <option value="On hold">On hold</option>
            </select>
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-[#eee] text-left">
              <th className="min-w-[220px] py-2 px-10   font-medium text-black dark:text-white xl:pl-11">
                Ticket details
              </th>
              <th className="min-w-[150px] py-2 px-4 font-medium text-black dark:text-white">
                Customer name
              </th>
              <th className="min-w-[120px] py-2 px-4 font-medium text-black dark:text-white">
                Date
              </th>
              <th className="py-2 px-4 font-medium text-black dark:text-white">
                Priority
              </th>
              <th className="pl-6 px-4 font-medium text-black dark:text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets()?.map((ticket: any) => (
              <tr key={ticket.id}>
                <td className="border-b border-[#eee] gap-4 flex py-5 px-4 pl-9 items-center dark:border-strokedark xl:pl-11">
                  <img src={UserOne} alt="Brand" className="w-10 h-10" />
                  <div>
                    <h5 className="font-medium text-black dark:text-white">
                      {ticket.description}
                    </h5>
                    <p className="text-sm">1 day ago</p>
                  </div>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {ticket.username}
                  </h5>
                  <p className="text-sm">on 24, 05, 2019</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-sm text-black dark:text-white">May</h5>
                  <p className="text-sm">6:30 PM</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  {ticket.priority === 'normal' ? (
                    <p className="inline-flex rounded-full bg-success bg-opacity-10 py-1 px-3 text-sm font-medium text-success">
                      Normal
                    </p>
                  ) : ticket.priority === 'high' ? (
                    <p className="inline-flex rounded-full bg-danger bg-opacity-10 py-1 px-3 text-sm font-medium text-danger">
                      High
                    </p>
                  ) : (
                    <p className="inline-flex rounded-full bg-warning bg-opacity-10 py-1 px-3 text-sm font-medium text-warning">
                      Low
                    </p>
                  )}
                </td>
                <td className="border-b border-[#eee] py-2 px-4 dark:border-strokedark ">
                  {role === 'admin' ? (
                    <select
                      name=""
                      id=""
                      className="border-none focus:outline-none appearance-none  dark:bg-boxdark dark:text-white"
                      onChange={(e) => handleStatusChange(ticket.id, e)}
                    >
                      <option value="" hidden>
                        {ticket.status}
                      </option>
                      <option value="overdue">overdue</option>
                      <option value="on hold">on hold</option>
                      <option value="open">open</option>
                    </select>
                  ) : (
                    <p>{ticket.status}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
