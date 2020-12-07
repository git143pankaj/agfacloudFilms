import { Injectable } from '@angular/core';

export interface Menuadmin {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: Menuadmin[];

}


@Injectable({
  providedIn: 'root'
})
export class AdminnavService {

  constructor() { }

  MENUITEMS_ADMIN: Menuadmin[] = [
    { path: '/admindashboard/defaultAdmin', title: 'Dashboard', icon: 'home', type: 'link', active: true },
    { path: '/coudfilmstatisicsadmin/coudfilmstatisicsadmin', title: 'Cloud Films Statisics', icon: 'shuffle', type: 'link', active: true },
    //{ path: '/searchadmin/searchadmin', title: 'Search', icon: 'search', type: 'link', active: true },
    { path: '/globalconfig/globalconfig', title: 'Globalconfiguration', icon: 'globe', type: 'link', active: true },
    { path: '/hospitalmanagement/hospitalmanagement', title: 'Hospital Management', icon: 'layers', type: 'link', active: true },
    { path: '/auth/login/admin', title: 'Logout', icon: 'log-in', type: 'link', active: false }
  ];
}

