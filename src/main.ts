import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { config } from '@onflow/fcl';

config()
  .put('accessNode.api', 'https://access-testnet.onflow.org') // Configure FCL's Access Node
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn') // Configure FCL's Wallet Discovery mechanism
  .put('0xProfile', '0xba1132bc08f82fe2'); // Will let us use `0xProfile` in our Cadence





if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
