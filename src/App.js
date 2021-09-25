import React from 'react';
import Profile from './components/Profile/Profile';
import userData from './data/user.json';

export default function App() {
  return (
    <React.StrictMode>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </React.StrictMode>
  );
}
