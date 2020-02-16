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
        title: 'Отдел #1',
        link: '/department/1',
      },
      {
        title: 'Отдел #2',
        link: '/department/2',
      },
      {
        title: 'Отдел #3',
        link: 'department/3',
      },
      {
        title: 'Отдел #4',
        link: '/department/4',
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
        title: 'Блок питания',
        link: '/hardware/category/PS',
      },
    ]
  },
  {
    title: 'ПО',
    link: '/software',
    children: [
      {
        title: 'ОС',
        link: '/software/category/OS',
      },
      {
        title: 'Программы',
        link: '/software/category/PROGRAM',
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
        title: 'Принтеры',
        link: '/addon/category/PRINTER',
      },
    ]
  }
];
