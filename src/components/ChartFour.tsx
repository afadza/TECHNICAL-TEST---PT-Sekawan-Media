import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import useTask from '../hooks/useTask';

interface Task {
  id: string | number;
  formData: {
    title: string;
    status: string;
  };
}

const ChartFour: React.FC = () => {
  const { tasks, handleInputChange, addTask, formData, deleteTask } = useTask();
  const [newTasks, setNewTasks] = useState<boolean>(false);

  return (
    <div className="col-span-12 rounded-lg border border-stroke bg-white shadow-default pt-7.5 dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="w-full flex justify-between items-center px-7.5">
        <div>
          <p className="text-lg font-medium text-black dark:text-white">Task</p>
          <p className="text-sm font-medium text-body dark:text-white">Today</p>
        </div>
        <p className="text-primary font-medium">View all</p>
      </div>

      <div>
        <div className="flex border-b-2 justify-between w-full items-center border-stroke dark:border-strokedark dark:bg-boxdark p-7.5">
          {newTasks ? (
            <div className="w-[80%] flex">
              <select
                name="status"
                id="status"
                className="bg-white dark:bg-boxdark border-b-2 rounded-bl-lg cursor-pointer rounded-tl-lg border-stroke dark:border-strokedark bg-transparent text-black dark:text-white"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="" hidden>
                  status
                </option>
                <option value="default">DEFAULT</option>
                <option value="urgent">Urgent</option>
                <option value="new">New</option>
              </select>
              <input
                type="text"
                name="title"
                id="newText"
                value={formData.title}
                onChange={handleInputChange}
                className="focus:outline-none border-b-2 rounded-br-lg rounded-tr-lg pl-4 border-stroke dark:border-strokedark w-full bg-transparent text-black dark:text-white"
                placeholder="Add new..."
              />
            </div>
          ) : (
            <button
              onClick={() => setNewTasks(!newTasks)}
              className="text-bodydark dark:text-stroke font-semibold w-full text-start"
            >
              Create new task
            </button>
          )}
          <div className="flex gap-1">
            {newTasks ? (
              <div className="flex gap-2">
                <button
                  onClick={addTask}
                  className="bg-success text-white px-4 py-2 rounded"
                >
                  post
                </button>

                <button
                  onClick={() => setNewTasks(!newTasks)}
                  className="bg-meta-1  text-white px-4 rounded text-center"
                >
                  x
                </button>
              </div>
            ) : (
              <button
                onClick={() => setNewTasks(!newTasks)}
                className="bg-bodydark dark:bg-meta-4 text-white px-1.5 rounded"
              >
                +
              </button>
            )}
          </div>
        </div>
        <div className="h-60 overflow-y-auto">
          {tasks?.map((task: Task) => (
            <div
              key={task.id}
              className="flex border-b-2 justify-between w-full items-center border-stroke dark:border-strokedark dark:bg-boxdark p-7.5"
            >
              <div className="flex gap-2 items-center">
                <button onClick={() => deleteTask(task.id.toString())}>
                  <FaCheckCircle />
                </button>
                <p className="text-black dark:text-white font-semibold">
                  {task.formData?.title}
                </p>
              </div>
              {task.formData?.status === 'urgent' ? (
                <p className="bg-meta-6 text-white px-2 rounded text-[10px]">
                  URGENT
                </p>
              ) : task.formData?.status === 'new' ? (
                <p className="bg-meta-3 text-white px-2 rounded text-[10px]">
                  NEW
                </p>
              ) : (
                <p className="bg-bodydark text-white dark:bg-meta-4 px-2 rounded text-[10px]">
                  DEFAULT
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartFour;
