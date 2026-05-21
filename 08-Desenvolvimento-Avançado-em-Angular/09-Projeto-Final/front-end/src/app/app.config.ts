import { ApplicationConfig, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS} from '@angular/common/http';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { ErrorInterceptor } from './services/error.handler.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


export const appConfig: ApplicationConfig = {
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },

    provideZoneChangeDetection({
      eventCoalescing: true
    }),

    provideRouter(routes),

    //provideHttpClient(), //Trocando pelo ErrorInterceptor
    provideHttpClient(
      withInterceptorsFromDi()
    ),

    provideAnimations(),

    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),

    // Registro do interceptor estilo Angular 9
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
};
