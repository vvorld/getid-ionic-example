# GetID Ionic example
This repository contains an example of integration native GetID [iOS](https://github.com/vvorld/getid-ios-sdk) and [Android](https://github.com/vvorld/getid-android-sdk) SDKs into an Ionic cross-platform application.

## Setup
In order to start using GetID SDK, you will need an `SDK KEY` and `API URL`. Both can be found and modified either through your GetID admin panel or via contacting our [integration team](mailto:support@getid.ee).

Also, make sure that you've set up the [Ionic CLI](https://ionicframework.com/docs/intro/cli).

## How to run this project
Clone the project, navigate to the project directory and build the project:
```bash
git clone https://github.com/vvorld/getid-ionic-example
cd getid-ionic-example
ionic build
ionic capacitor update
```

Open `src/app/home/home.page.ts` file and set `apiUrl` and `sdkKey`.

### iOS
```bash
ionic capacitor copy ios
```
Then open `ios/App/App.xcworkspace` in Xcode and run the app.

### Android
```bash
ionic capacitor copy android
```
Then open `android` folder in Android Studio and run the app.
