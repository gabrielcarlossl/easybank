import logoLight from '@/images/logo.svg'

import payCardsIcon from '../assets/images/icon-online.svg'
import appIcon from '../assets/images/icon-budgeting.svg'
import peopleIcon from '../assets/images/icon-onboarding.svg'
import apiIcon from '../assets/images/icon-api.svg'

import currency from '../assets/images/image-currency.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'
import plane from '../assets/images/image-plane.jpg'
import confetti from '../assets/images/image-confetti.jpg'

export const LogoImage = {
  light: logoLight,
}

export const NavLinks = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Careers',
    url: '/careers',
  },
]

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
    text:
      'Manage your saving, investments, pensions, and much more from one account. Tracking your money has never been easier.',
  },
]

export const blogData = [
  {
    img: currency,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    resume:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    img: restaurant,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    resume:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    img: plane,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    resume:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    img: confetti,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    resume:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
]
