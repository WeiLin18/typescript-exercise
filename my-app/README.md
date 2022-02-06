```
import { useEffect, useState } from "react";

const EffectExample: React.VFC = () => {
  const [count, setCount] = useState(0);
  const [tick, setTick] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      console.log({ count }); //A
    }, 0);
  });
  useEffect(() => {
    console.log({ count }); // B
  }, [tick]);
  useEffect(() => {
    setTimeout(() => {
      console.log({ count }); //C
      setTick((tick) => tick + 1);
    }, 20);
  }, []);
  useEffect(() => {
    console.log({ tick }); // D
  }, [count, tick]);
  useEffect(() => {
    console.log({ count }); // E
  }, [count]);
  return (
    <p
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      Component
    </p>
  );
};

export default EffectExample;

```

### 請說明下列兩個時機點的 A-E 的執行順序

- 1. 元件載入時:

執行順序：
B （ render 後, 上至下
D （ render 後, 上至下
E （ render 後, 上至下
A （當 call stack 為空時, event loop 從 callback queue 丟進 stack 執行
C （約 20ms 後, event loop 從 callback queue 丟進 stack 執行
B (執行 C setTick 更新 tick value(re-render), 觸發執行, 上至下
D (執行 C setTick 更新 tick value(re-render), 觸發執行, 上至下
A (每 re-render, call stack 為空時, 丟進 stack 執行

- 2. 按下按鈕時:

執行順序：
D （點擊事件, setCount 更新 count value(re-render), 觸發執行, 上至下
E （點擊事件, setCount 更新 count value(re-render), 觸發執行, 上至下
A （每 re-render, call stack 為空時, 丟進 stack 執行


```
const Table: React.FC = () => {
  const [userTableData, setUserTableData] = useState<UserTableData>([]);
  const [teamTableData, setTeamTableData] = useState<TeamTableData>([]);
  useEffect(function getDataFromAPI() {
    const fetchData = async () => {
      const users: UserTableData = await getAllUsersData();
      const teams: TeamTableData = await getAllTeamsData();
      setUserTableData(users);
      setTeamTableData(teams);
    };
    fetchData();
  }, []);
  const handleShowYourLeaderInformation =
    (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      userTableData.forEach((user) => {
        const teamId = user.teamId;
        teamTableData.forEach((team) => {
          if (teamId === team.id) {
            const teamLeaderId = team.leader;
            const teamLeaderData = userTableData.find((u) => {
              return u.id === teamLeaderId;
            });
            if (id === user.id) alert(teamLeaderData);
          }
        });
      });
    };
  return (
    <SomeTableIterationStructute>
      <button onClick={handleShowYourLeaderInformation(userId)}>
        Show team leader info
      </button>
    </SomeTableIterationStructute>
  );
};
export default Table;

const userTeamId = user.teamId = userTableData.find((user) => {
  const user.id === id;
});

const userTableDataWithLeaderId =  userTableData.map(user => {
  const leaderId = teamTableData.find(team => team.id === user.teamId)
  return { id:user.id,leaderId}
})

```