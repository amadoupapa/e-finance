import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { DepotFormComponent } from './components/transaction/depot-form/depot-form.component';
import { BlocageFormComponent } from './components/transaction/blocage-form/blocage-form.component';
import { AnnulerFormComponent } from './components/transaction/annuler-form/annuler-form.component';
import { ClientComponent } from './pages/client/client.component';
import { AjouterFormComponent } from './components/client/ajouter-form/ajouter-form.component';
import { ModifierFormComponent } from './components/client/modifier-form/modifier-form.component';
import { ListClientsComponent } from './components/client/list-clients/list-clients.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'clients',
    component: ClientComponent,
    children: [
        {
            path: 'liste',
            component: ListClientsComponent,
          },
      {
        path: 'inscription',
        component: AjouterFormComponent,
      },
      {
        path: 'modification',
        component: ModifierFormComponent,
      },
    ],
  },
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      { path: 'depot', component: DepotFormComponent },
      { path: 'blocage', component: BlocageFormComponent },
      { path: 'deblocage', component: DepotFormComponent },
      { path: 'annulation', component: AnnulerFormComponent },
    ],
  },
];
