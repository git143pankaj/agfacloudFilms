import { Injectable } from '@angular/core';

export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: Menu[];

}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  collapseSidebar: boolean = false;

  constructor() { }

  //  MENUITEMS: Menu[] = [
  //   { path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', active: true },
  //   { path: '/search', title: 'Search', icon: 'search', type: 'link', active: true },
  //   { path: '/troubleshoot', title: 'TroubleShoot', icon: 'home', type: 'link', active: true },
  //   {
  //     title: 'settings', icon: 'settings', type: 'sub', active: false, children: [
  //       { path: '/settings/profile', title: 'Profile', type: 'link' }
  //     ]
  //   },
  //   { path: '/auth/login', title: 'Logout', icon: 'log-in', type: 'link', active: false }
  // ];



  MENUITEMS: Menu[] = [
    { path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', active: true },
    //{ path: '/search/search', title: 'Search', icon: 'shuffle', type: 'link', active: true },
    { path: '/clouldfilmstatistics/clouldfilmstatistics', title: 'shuffle', icon: 'shuffle', type: 'link', active: true },
    { path: '/troubleshoot/troubleshoot', title: 'TroubleShoot', icon: 'tool', type: 'link', active: true },
    // {
    //   title: 'settings', icon: 'settings', type: 'sub', active: false, children: [
    //     { path: '/settings/profile', title: 'Profile', type: 'link' }
    //   ]
    // },
    //{ path: '/auth/login', title: 'Logout', icon: 'log-in', type: 'link', active: false }
    { path: '/auth/login/sitemanager', title: 'Logout', icon: 'log-in', type: 'link', active: false }
  ];

}
