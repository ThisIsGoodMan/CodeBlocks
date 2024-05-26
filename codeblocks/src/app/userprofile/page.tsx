import React from 'react';

interface UserProfileProps {
  username: string | null;
}

const UserProfile: React.FC<UserProfileProps> = ({ username }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {username ? username : 'Guest'}</p>
    </div>
  );
};

export default UserProfile;
