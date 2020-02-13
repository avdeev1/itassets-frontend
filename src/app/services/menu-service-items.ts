export interface IMenu {
  title: string;
  link: string;
  children: IMenuChildren[];
}

interface IMenuChildren {
  title: string;
  link: string;
}

export const MENU_NAVBAR_LINK: IMenu[] = [
  {
    title: 'Главная',
    link: 'main',
    children: [],
  },
  {
    title: 'Сотрудники',
    link: '/employee',
    children: [
      {
        title: 'Отдел ITIR',
        link: '/department/name/ITIR',
      },
      {
        title: 'Отдел OVP',
        link: '/department/name/OVP',
      },
      {
        title: 'Отдел PATS',
        link: 'department/name/PATS',
      },
      {
        title: 'Отдел PEL',
        link: '/department/name/PEL',
      },
    ],
  },
  {
    title: 'Компьютеры',
    link: '/computer',
    children: [
      {
        title: 'Настольные ПК',
        link: '/computer/category/PC',
      },
      {
        title: 'Ноутбуки',
        link: '/computer/category/NOTEBOOK',
      },
    ],
  },
  {
    title: 'Железо',
    link: '/hardware',
    children: [
      {
        title: 'Материнская плата',
        link: '/hardware/category/MOTHERBOARD',
      },
      {
        title: 'Оперативная память',
        link: '/hardware/category/RAM',
      },
      {
        title: 'Жесткий диск',
        link: '/hardware/category/ROM',
      },
      {
        title: 'Видеокарта',
        link: '/hardware/category/GPU',
      },
      {
        title: 'Процессор',
        link: '/hardware/category/CPU',
      },
      {
        title: 'Остальное',
        link: '/hardware/category/OTHER',
      },
    ]
  },
  {
    title: 'ПО',
    link: '/software',
    children: [
      {
        title: 'ОС',
        link: '/software/category/OC',
      },
      {
        title: 'Программы',
        link: '/software/category/PROGRAM',
      },
      {
        title: 'Остальное',
        link: '/software/category/OTHER',
      },
    ]
  },
  {
    title: 'Периферические устр.',
    link: '/addon',
    children: [
      {
        title: 'Монитор',
        link: '/addon/category/MONITOR',
      },
      {
        title: 'Клавиатура',
        link: '/addon/category/KEYBOARD',
      },
      {
        title: 'Мышь',
        link: '/addon/category/MOUSE',
      },
      {
        title: 'Остальное',
        link: '/addon/category/OTHER',
      },
    ]
  }
];
