import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: async () => (await import('./pages/home/home.module')).HomeModule },
                        { path: 'faq', loadChildren: async () => (await import('./pages/fqa/fqa.module')).FqaModule },
                        { path: 'page-not-found', loadChildren: async () => (await import('./pages/page404/page404.module')).Page404Module },
                        { path: ':post-slug', loadChildren: async () => (await import('./pages/post/post.module')).PostModule },
                        { path: '**', redirectTo: 'page-not-found' }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
