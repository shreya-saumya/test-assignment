import type { DashboardLeftSidebarItem } from 'src/components/dashboard/types/DashboardTypes';

export const SIDEBAR_ITEMS: DashboardLeftSidebarItem[] = [
  {
    name: 'Home',
    iconSrc: '/assets/common/dashboard-left-sidebar/home.svg',
    mobileIconSrc: '/assets/common/dashboard-left-sidebar/aspire-logo-grey.svg',
    activeIconSrc: '/assets/common/dashboard-left-sidebar/home-active.svg',
    alt: 'home page',
    to: '/',
  },
  {
    name: 'Cards',
    iconSrc: '/assets/common/dashboard-left-sidebar/card.svg',
    mobileIconSrc: '/assets/common/dashboard-left-sidebar/card-grey.svg',
    activeIconSrc: '/assets/common/dashboard-left-sidebar/card-active.svg',
    alt: 'cards page',
    to: '/cards',
  },
  {
    name: 'Payments',
    iconSrc: '/assets/common/dashboard-left-sidebar/payments.svg',
    mobileIconSrc: '/assets/common/dashboard-left-sidebar/payments-grey.svg',
    activeIconSrc: '/assets/common/dashboard-left-sidebar/payments-active.svg',
    alt: 'Payments page',
    to: '/payments',
  },
  {
    name: 'Credit',
    mobileIconSrc: '/assets/common/dashboard-left-sidebar/credit-grey.svg',
    iconSrc: '/assets/common/dashboard-left-sidebar/credit.svg',
    activeIconSrc: '/assets/common/dashboard-left-sidebar/credit-active.svg',
    alt: 'credits page',
    to: '/credit',
  },
  {
    name: 'Settings',
    mobileIconSrc: '/assets/common/dashboard-left-sidebar/account-grey.svg',
    iconSrc: '/assets/common/dashboard-left-sidebar/account.svg',
    activeIconSrc: '/assets/common/dashboard-left-sidebar/account-active.svg',
    alt: 'Settings page',
    to: '/settings',
  },
];
