import { useState, useEffect } from "react";

const userTableData = [
  {
    id: "1",
    teamId: "A",
    name: "Jan",
  },
  {
    id: "2",
    teamId: "B",
    name: "Amy",
  },
  {
    id: "3",
    teamId: "B",
    name: "Min",
  },
];
const teamTableData = [
  {
    id: "A",
    leader: "1",
  },
  {
    id: "B",
    leader: "3",
  },
];

const teamLeaderData = {
  A: {
    id: "1",
    teamId: "A",
    name: "Jan",
  },
  B: {
    id: "3",
    teamId: "B",
    name: "Min",
  },
};

let j = 0;
userLeaderMap = userTableData.reduce((acc, cur) => {
  if (teamTableData[j]?.leader === cur.id) {
    const teamId = cur.teamId;
    j += 1;
    acc[teamId] = cur;
  }
  return acc;
}, {});

// const teamLeaderData = {
//   1: {
//     id: "1",
//     teamId: "A",
//     name: "Jan",
//   },
//   2: {
//     id: "3",
//     teamId: "B",
//     name: "Min",
//   },
//   3: {
//     id: "3",
//     teamId: "B",
//     name: "Min",
//   },
// };

// const teamLeaderObj = {};

// userLeaderMap = userTableData.reduce((acc, cur, i) => {
//   if (teamTableData[i]?.leader === cur.teamId) {
//     const userId = cur.id;
//     acc[id] = cur;
//   }
//   return acc;
// }, {});

// const leaderMap = {};

// leaderFilter = userTableData.reduce((acc, cur, i) => {
//   const { id, teamId } = cur;

//   if (!!teamTableData[i]?.id) {
//     leaderMap[teamTableData[i]["leader"]] = teamTableData[i];
//   }

//   if (leaderMap[id] && acc[id] === undefined) {
//     acc[id] = cur;
//   }

//   return acc;
// }, {});

// console.log(leaderFilter);

const handleShowYourLeaderInformation =
  (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const targetTeam = userTableData.find((user) => user.id === id)?.teamId;

    let j = 0;
    const userLeaderMap = userTableData.reduce((acc, cur) => {
      if (teamTableData[j]?.leader === cur.id) {
        j += 1;
        acc[cur.teamId] = cur;
      }
      return acc;
    }, {});

    alert(userLeaderMap[targetTeam]);
  };

// const handleShowYourLeaderInformation =
//   (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
const targetUser = userTableData.find((user) => user.id === id);
//     const targetTeam = teamTableData.find(
//       (team) => team.id === targetUser.teamId
//     );

//     const leader = userTableData.find((user) => user.id === targetTeam.leader);

//     alert(leader);
//   };

// const handleShowYourLeaderInformation =
// (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
//   e.preventDefault();
//   let teamLeaderId: string;

//   userTableData.forEach((user) => {
//     if (user.id === id) {
//       teamLeaderId = teamTableData.find(
//         (team) => team.id === user.teamId
//       ).leader;
//       return;
//     }
//   });
//   let leader = userTableData.find((user) => user.id === teamLeaderId);
//   alert(leader);
// };
