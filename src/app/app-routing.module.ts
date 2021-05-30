import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidatorComponent } from './Fibonacci/components/validator/validator.component';

const routes: Routes = [
  { path: 'validator-fibonacci', component: ValidatorComponent},
  { path: '', redirectTo: 'validator-fibonacci', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
