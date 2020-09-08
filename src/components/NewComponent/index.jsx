import React, { useState } from 'react';
// import Modal from '../Modal';
import Clock from '../Clock';

const NewComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="new-component">
      <button onClick={handleToggleModal}>Show Clock</button>

      {/* {showModal && (
        <Modal onClose={handleToggleModal}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            labore voluptatum. Quibusdam, tempora exercitationem id, consequatur
            consequuntur eligendi ullam beatae tempore impedit adipisci ab omnis
            non, dolores repellat fugiat maiores.
          </p>
          <button onClick={handleToggleModal}>Close</button>
        </Modal>
      )} */}

      {showModal && <Clock />}
    </div>
  );
};

export default NewComponent;
