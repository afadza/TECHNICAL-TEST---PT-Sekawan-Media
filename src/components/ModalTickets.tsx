import { Button, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import useTickets from '../hooks/useTickets';

export default function ModalTickets() {
  const { confirmAddTicket, handleInputChange, formData } = useTickets();
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpenModal(true)}
        className="text-white bg-bodydark"
      >
        +
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add Your Ticket !
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your name" />
              </div>
              <TextInput
                id="username"
                placeholder="Jhon Doe"
                value={formData.username}
                onChange={handleInputChange}
                name="username"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Your ticket" />
              </div>
              <TextInput
                id="description"
                type="text"
                placeholder="Help me!"
                value={formData.description}
                onChange={handleInputChange}
                name="description"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="priority" value="Priority" />
              </div>
              <select
                name="priority"
                id="priority"
                className="bg-white dark:bg-boxdark border-b-2 border-stroke dark:border-strokedark bg-transparent w-full rounded-lg text-black dark:text-white"
                value={formData.priority}
                onChange={handleInputChange}
              >
                <option value="normal">normal</option>
                <option value="low">low</option>
                <option value="high">high</option>
              </select>
            </div>
            <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300 w-full">
              <button
                onClick={() => confirmAddTicket()}
                className="text-white hover:underline dark:text-cyan-500 bg-body w-full py-4 rounded-lg"
              >
                Add ticket
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
