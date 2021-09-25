import React from 'react';
import Profile from './components/Profile/Profile';
import Statistic from './components/Statistic/Statistic';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './data/user.json';
import statisticData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactionsData from './data/transactions.json';

export default function App() {
  return (
    <React.StrictMode>
      <div>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
        <Statistic title="Upload stats" stats={statisticData} />
        <Statistic stats={statisticData} />
        <FriendList friends={friendsData} />
        <TransactionHistory items={transactionsData} />
      </div>
    </React.StrictMode>
  );
}
