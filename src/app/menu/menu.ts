import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'home',
    title: 'Home',
    type: 'item',
    icon: 'home',
    url: 'home'
  },
  // Others
  {
    id: 'apps',
    type: 'section',
    title: 'Civil Tools',
    icon: 'package',
    children: [
      {
        id: 'Autocad',
        title: 'Autocad',
        type: 'item',
        icon: 'codepen',
        url: 'trans-tools/autocad'
      },
      {
        id: 'Civil 3D',
        title: 'Civil 3D',
        type: 'item',
        icon: 'corner-up-right',
        url: 'trans-tools/civil3d'
      },
      {
        id: 'Aveplan',
        title: 'Aveplan',
        type: 'item',
        icon: 'send',
        url: 'trans-tools/aveplan'
      }
    ]
  },
  // Others
  {
    id: 'apps',
    type: 'section',
    title: 'Our Team',
    icon: 'package',
    children: [
      {
        id: 'Our Team',
        title: 'Legends',
        type: 'item',
        icon: 'users',
        url: 'our-team'
      }
    ]
  }
]
