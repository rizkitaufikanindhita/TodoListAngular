import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',

    loadChildren: () =>
      import('./layout/main/main.module').then((mod) => mod.MainModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
