import React from 'react';
import UserData from './WorkData';

export default ({ data, update, parent }) => {
  if (!data) { return (<p>Loading...</p>); }

  const users = data.map((user, index) => {
    return (<UserData user={user} key={`user-${index}`} index={index} update={update} />);
  });

  return (
    <p>Выберите тип работ:&nbsp;
        <select id="WorkList" onChange={()=> parent.showId()}>
            {users}
        </select>
    </p>
  );
};
