import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Swal from 'sweetalert2';

function useTask() {
  const queryClient = useQueryClient();
  const { data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/tasks');
      const data = await res.json();
      return data;
    },
  });

  const [formData, setFormData] = useState({
    status: '',
    title: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate: handleSubmit } = useMutation({
    mutationFn: async () => {
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
        }),
      });
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      Swal.fire({
        title: 'Success!',
        text: 'Task added successfully',
        icon: 'success',
      });
      setFormData({
        status: '',
        title: '',
      });
    },
    onError: (err) => {
      setFormData({
        status: '',
        title: '',
      });
      console.log(err);
    },
  });

  async function addTask() {
    if (formData.status === '' || formData.title === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonText: 'Back',
      });
    } else {
      handleSubmit();
    }
  }

  const { mutate: deleteTask } = useMutation({
    mutationFn: async (id: string) => {
      try {
        const res = await fetch(`http://localhost:3000/tasks/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Task not found');
        }
      } catch (error) {
        throw new Error(`Failed to delete task: ${error}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      Swal.fire({
        title: 'Success!',
        text: 'Task deleted successfully',
        icon: 'success',
      });
    },
    onError: (err) => {
      setFormData({
        status: '',
        title: '',
      });
      console.error(err);
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
      });
    },
  });

  return {
    tasks,
    formData,
    handleInputChange,
    addTask,
    deleteTask,
  };
}

export default useTask;
