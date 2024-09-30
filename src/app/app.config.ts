import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),         
    provideHttpClient(), 
    importProvidersFrom([TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader, //bundle mej chi pahum, hetevabar arag klini
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
     })])
  ]
};


