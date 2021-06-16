const lists = [
  {
    id: 1,
    name: "list 1",
  },
  {
    id: 2,
    name: "list 2",
  },
];

const tasks = [
  {
    id: 0,
    id_list: 1,
    content: "Di hoc",
    done: false,
    priority: "low",
  },
  {
    id: 1,
    id_list: 2,
    content: "Di lam",
    done: true,
    priority: "medium",
  },
];

export { lists, tasks };
