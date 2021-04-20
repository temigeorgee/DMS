import React from 'react';
import { RiDashboardFill, RiFileChartFill } from 'react-icons/ri';
import { FaBuilding, FaCreditCard, FaUser, FaList } from 'react-icons/fa';
import { GrStackOverflow } from 'react-icons/gr';
// import { IoSettings } from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Dashboard',
    icon: <RiDashboardFill />,
    link: '/dashboard',
  },
  {
    title: 'Companies',
    icon: <FaBuilding />,
    link: '/companies',
  },
  {
    title: 'Order Pool',
    icon: <FaList />,
    link: '/order-pool',
  },
  {
    title: 'Order History',
    icon: <GrStackOverflow />,
    link: '/order-history',
  },
  {
    title: 'Subscriptions',
    icon: <FaCreditCard />,
    link: '/subscriptions',
  },
  {
    title: 'Earnings',
    icon: <FaCreditCard />,
    link: '/earnings',
  },
  {
    title: 'Reports',
    icon: <RiFileChartFill />,
    link: '/reports',
  },
  //   {
  //     title: 'Settings',
  //     icon: <IoSettings />,
  //     laink '/settings',
  //   },
  {
    title: 'Supports',
    icon: <FaUser />,
    link: '/supports',
  },
];
