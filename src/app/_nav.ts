import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Dashboard Page'
  },
  {
    name: 'Dashboard',
    url: '/dashboard-client',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Profile'
  },
  {
    name: 'Profile',
    url: '/profile-client',
    icon: 'icon-drop'
  },
  {
    title: true,
    name: 'Campaigns'
  },
  {
    name: 'Campaigns',
    url: '/campaigns-client',
    icon: 'icon-pencil'
  },
  {
    name: 'Add Campaign',
    url: '/add-campaign',
    icon: 'icon-pencil'
  }

]
