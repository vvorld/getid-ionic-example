import { Component } from '@angular/core';

import { registerPlugin } from '@capacitor/core';

interface GetIDSDKInput {
  apiUrl: string;
  token: string;
  flowName: string;
}

interface GetIDPlugin {
  startVerificationFlow(options: { input: GetIDSDKInput }): Promise<void>;
}

const getID = registerPlugin<GetIDPlugin>('GetID');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Note: Don't use your SDK key in the client-side code in the production environment.
   */
  apiUrl = 'API_URL';
  sdkKey = 'SDK_KEY';
  flowName = 'getid-doc-selfie';

  constructor() {}

  start() {
    const getToken = () => fetch(this.apiUrl + '/sdk/v2/token', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json', 'Content-Type': 'application/json',
        'x-sdk-key': this.sdkKey
      }
    });

    getToken()
      .then((response) => response.json())
      .then((json) => {
        const input = {
          apiUrl: this.apiUrl,
          token: json.token,
          flowName: this.flowName
        };
        const promise = getID.startVerificationFlow({ input });
        promise.then((result) => console.log(result));
      });
  }
}
