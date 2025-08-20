import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { MainP } from '../pages/main-p/main-p';
import path from 'path';

export const routes: Routes = [
    { path: 'login', component: Login }, // <-- ruta login
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // redirección inicial
    { path: "mainP", component: MainP }
];
