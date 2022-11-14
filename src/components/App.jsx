import user from '../dataBase/user.json';
import data from '../dataBase/data.json';
import friends from '../dataBase/friends.json';
import transactions from '../dataBase/transactions.json';
import css from './App.module.css';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from 'FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.container}>
      <section className={css.section}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <Statistics title={'Upload stats'} stats={data} />
      <Statistics stats={data} />
      <section className={css.section}>
        <FriendList friends={friends} />
      </section>
      <section className={css.section}>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
};
