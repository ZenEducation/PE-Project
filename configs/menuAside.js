import {
  mdiAccountCircle,
  mdiMonitor,
  mdiHelpCircle,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiMenuOpen,
  mdiTelevisionGuide,
  mdiBarcode,
  mdiPalette,
  mdiCardAccountDetailsOutline,
  mdiOpenInNew,
  mdiFormDropdown,
  mdiBallot,
  mdiViewQuilt,
  mdiMessage,
  mdiFastForwardOutline,
  mdiBook,
} from '@mdi/js'

const allLinks = [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Home',
  },
  {
    to: '/dashboard',
    label: 'UI Base',
    icon: mdiTelevisionGuide,
  },
  {
    to: '/pps/tablesListsView',
    label: 'Tables & Lists',
    icon: mdiTable,
    updateMark: 'warning',
  },

  {
    to: '/pps/FormsView',
    label: 'Forms Advanced',
    icon: mdiBallot,
  },

  {
    to: '/pps/uiView',
    label: 'UI Advanced',
    icon: mdiViewQuilt,
  },
  {
    to: '/pps/styleView',
    label: 'Stylize',
    icon: mdiPalette,
  },
  {
    to: '/pps/pricingView',
    label: 'Pricing layout',
    icon: mdiBarcode,
  },
  {
    label: 'Dropdown',
    icon: mdiFormDropdown,
    menu: [
      {
        label: 'Dropdown item Uno',
      },
      {
        label: 'Dropdown item Dos',
      },
    ],
  },
  {
    to: '/pps/profileView',
    label: 'Profile',
    icon: mdiAccountCircle,
  },
  {
    to: '/auth/login',
    label: 'Login',
    icon: mdiLock,
  },
  {
    to: '/auth/register',
    label: 'Register',
    icon: mdiSquareEditOutline,
  },
  {
    // Key should be unique for each submenus object
    // It is required for open/close logic
    key: 'submenus-1',
    label: 'Sub',
    icon: mdiMenuOpen,
    menuSecondary: [
      {
        to: '/profile/profileView',
        label: 'Sample RouterLink',
        icon: mdiCardAccountDetailsOutline,
      },
      {
        label: 'External link',
        href: '',
        icon: mdiOpenInNew,
        target: '_blank',
      },
      {
        label: 'Dropdown',
        icon: mdiFormDropdown,
        menu: [
          {
            label: 'Dropdown item One',
          },
          {
            label: 'Dropdown item Two',
          },
        ],
      },
      {
        to: '/whiteboard',
        label: 'Whiteboard',
        icon: mdiOpenInNew,
      },
    ],
  },
  {
    to: '/profile/messages',
    label: 'Messages',
    icon: mdiMessage,
  },
  {
    to: '/auth/auth',
    label: 'Authenticator',
    icon: mdiHelpCircle,
  },
  {
    to: '/admin/tasks',
    label: 'AdminTasks',
    icon: mdiFastForwardOutline,
  },
  {
    to: '/pe/syllabus',
    label: 'Syllabus',
    icon: mdiBook,
  },
  {
    to: '/pe/tasks',
    label: 'PE Tasks',
    icon: mdiHelpCircle,
  },
  {
    href: '',
    label: 'About',
    icon: mdiHelpCircle,
  },
]
// educator
const educatorLinks = [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Educator Link 1',
  },
  {
    to: '/dashboard',
    label: 'Educator Link 2',
    icon: mdiTelevisionGuide,
  },
  {
    to: '/pps/tablesListsView',
    label: 'Educator Link 3',
    icon: mdiTable,
    updateMark: 'warning',
  },
]
// employees
const employeesLinks = [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Employee Link 1',
  },
  {
    to: '/dashboard',
    label: 'Employee Link 2',
    icon: mdiTelevisionGuide,
  },
  {
    to: '/pps/tablesListsView',
    label: 'Employee Link 3',
    icon: mdiTable,
    updateMark: 'warning',
  },
]
// freelancer
const freelancerLinks = [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Home',
  },
  {
    to: '/dashboard',
    label: 'UI Base',
    icon: mdiTelevisionGuide,
  },
  {
    to: '/pps/tablesListsView',
    label: 'Tables & Lists',
    icon: mdiTable,
    updateMark: 'warning',
  },
]
// garduian
// learner
// superadmin
// vendor

// todo implement aside menu list
// get profile from store
// userprofile = useUserstor();
// let links = [];
// based on type populate links array and then export that array
// if(userprofile === 's'){
//  links = [...]
// }

export default allLinks
export { educatorLinks, employeesLinks, freelancerLinks }
