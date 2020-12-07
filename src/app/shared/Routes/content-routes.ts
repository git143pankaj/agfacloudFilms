import { Routes } from "@angular/router";

export const contentRoutes: Routes = [
    { path: 'main', loadChildren: () => import('../../Components/main/main.module').then(m => m.MainModule) }

];
