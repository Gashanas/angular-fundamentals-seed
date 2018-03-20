import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { ExampleFormComponent } from './app/example-form/example-form.component';

platformBrowserDynamic().bootstrapModule(AppModule, ExampleFormComponent);


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
//
// platformBrowserDynamic().bootstrapModule(AppModule);
