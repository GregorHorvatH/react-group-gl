import React from 'react';

const UserDetails = () => {
  return (
    <div className="user-details">
      <h3>User Details: :id</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
        repudiandae quas excepturi officiis nostrum iste libero quisquam fugiat
        in sed perferendis voluptates ducimus praesentium hic quasi,
        reprehenderit doloremque amet tempora!
      </p>
      <button onClick={() => console.log('Go back')}>&#60;</button>
    </div>
  );
};

export default UserDetails;
