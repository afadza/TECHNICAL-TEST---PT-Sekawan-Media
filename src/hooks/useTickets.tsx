import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { SetStateAction, useState } from 'react';
import Swal from 'sweetalert2';
function useTickets() {
  const queryClient = useQueryClient();
  const { data: tickets } = useQuery({
    queryKey: ['tickets'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/tickets');
      const data = await res.json();
      return data;
    },
  });

  const unResolvedTickets = tickets?.filter(
    (ticket: { status: string }) => ticket.status === 'unresolved',
  );

  const resolvedTickets = tickets?.filter(
    (ticket: { status: string }) => ticket.status === 'overdue',
  );

  const onHoldTickets = tickets?.filter(
    (ticket: { status: string }) => ticket.status === 'on hold',
  );

  const openTickets = tickets?.filter(
    (ticket: { status: string }) => ticket.status === 'open',
  );

  const [formData, setFormData] = useState({
    username: '',
    description: '',
    priority: 'normal',
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { mutate: addTicket } = useMutation({
    mutationFn: async () => {
      const res = await fetch('http://localhost:3000/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          description: formData.description,
          priority: formData.priority,
          status: 'unresolved',
        }),
      });
      const data = await res.json();
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tickets'] });
      Swal.fire({
        title: 'Success!',
        text: 'Task added successfully',
        icon: 'success',
      });
      setFormData({
        username: '',
        description: '',
        priority: '',
      });
    },
    onError: (err) => {
      setFormData({
        username: '',
        description: '',
        priority: '',
      });
      console.log(err);
    },
  });

  function confirmAddTicket() {
    if (formData.username === '' || formData.description === '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonText: 'Back',
      });
    } else {
      addTicket();
    }
  }

  const { mutate: updateTicketStatus } = useMutation({
    mutationFn: async ({ ticketId, status }: any) => {
      console.log(ticketId, status);
      const res = await fetch(`http://localhost:3000/tickets/${ticketId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tickets'] });
      Swal.fire({
        title: 'Success!',
        text: 'Ticket status updated successfully',
        icon: 'success',
      });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleStatusChange = (ticketId: any, e: { target: { value: any } }) => {
    const newStatus = e.target.value;
    updateTicketStatus({ ticketId, status: newStatus });
  };

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedFilter(e.target.value);
  };

  function sortTickets(tickets: any[], sortBy: string) {
    const priorityOrder = ['low', 'normal', 'high'];

    if (sortBy === 'high') {
      tickets.sort((a, b) => {
        return (
          priorityOrder.indexOf(b.priority) - priorityOrder.indexOf(a.priority)
        );
      });
    } else if (sortBy === 'low') {
      tickets.sort((a, b) => {
        return (
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
        );
      });
    } else if (sortBy === 'update') {
      window.location.reload();
    }

    return tickets;
  }

  const [sortBy, setSortBy] = useState('');

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSortBy(event.target.value);
  };

  const sortedTickets = sortTickets(tickets, sortBy);

  const filteredTickets = () => {
    switch (selectedFilter) {
      case 'Open':
        return openTickets;
      case 'Overdue':
        return resolvedTickets;
      case 'Unresolved':
        return unResolvedTickets;
      case 'On hold':
        return onHoldTickets;
      default:
        return tickets;
    }
  };

  return {
    tickets,
    unResolvedTickets,
    resolvedTickets,
    onHoldTickets,
    openTickets,
    formData,
    confirmAddTicket,
    handleInputChange,
    handleStatusChange,
    filteredTickets,
    handleFilterChange,
    sortBy,
    handleChange,
  };
}

export default useTickets;
