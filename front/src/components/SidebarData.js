import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
 
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,


  },
  
  {
    title: 'About',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Teacher',
        path: '/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Student',
        path: '/reports/reports2',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Cours',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Niveau',
        path: '/reports/reports4',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Classe',
        path: '/reports/reports5',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Resultat',
        path: '/reports/reports6',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Donation',
        path: '/reports/reports7',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Caisse',
        path: '/reports/reports8',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
 /*  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

/*     subNav: [
      {
        title: 'Message 1',
        path: '/messages/message1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Message 2',
        path: '/messages/message2',
        icon: <IoIcons.IoIosPaper />
      }
    ] 
  }, */

 
 
  
 
];