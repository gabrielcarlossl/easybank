import logoLight from "@/images/logo.svg"

import payCardsIcon from '../assets/images/icon-online.svg'
import appIcon from '../assets/images/icon-budgeting.svg'
import peopleIcon from '../assets/images/icon-onboarding.svg'
import apiIcon from '../assets/images/icon-api.svg'

export const LogoImage = {
  light: logoLight,
};

export const NavLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Careers",
    url: "/careers",
  },
];

export const cardData = [
  {
    img: payCardsIcon,
    title: 'Online Banking',
    text:
      'Our modern and Mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    img: appIcon,
    title: 'Online Banking',
    text:
      'See exactly where your money goes each month. Receive notifications when youre close to your hitting limits.',
  },
  {
    img: peopleIcon,
    title: 'Online Banking',
    text:
      'We dont do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    img: apiIcon,
    title: 'Online Banking',
    text: 'Manage your saving, investments, pensions, and much more from one account. Tracking your money has never been easier.',
  },
]
