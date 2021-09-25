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
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </React.StrictMode>
  );
}
