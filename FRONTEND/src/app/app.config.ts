import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { NgxsModule } from '@ngxs/store';
import { routes } from './app.routes';
import { BasketState } from './shared/states/basket-state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([BasketState])),
  ],
};
