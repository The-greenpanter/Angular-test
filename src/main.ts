
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/weather-data.model';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));