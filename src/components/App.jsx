import user from 'components/Profile/user.json';
import friends from 'components/FriendList/friends.json'
import transactions from 'components/TransactionHistory/transactions.json'
import { Profile } from './Profile/Profile';
import { StatsBlock } from './Statistics/StatsBlock';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Profile avatar={user.avatar} username={user.username} tag={user.tag} location={user.location} stats={user.stats} />
      <StatsBlock/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};