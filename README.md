# React Native Template (Without Redux)

Base dependencies
- [axios](https://github.com/axios/axios) for networking.

- [prop-types](https://github.com/facebook/prop-types) to type-check our components exposed properties.

- [react-native-config](https://github.com/luggit/react-native-config) to manage envionments.

- [react-navigation](https://reactnavigation.org/) navigation library.

- [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) for string localization.

- [react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/) as storage solution.

- [jest](https://jestjs.io/) for testing.

## Usage

Create your project and then copy the `/src` folder (which has all the code of your application) and update your `index.js`.

## Folder structure

This template follows a very simple project structure:

  

  

-  `src`: This folder is the main container of all the code inside your application.

  

-  `assets`: Asset folder to store all images, fonts, etc.

  

-  `components`: Folder to store any common component that you use through your app (such as a button)

  

-  `constants`: Folder to store any kind of constant that you have.

  

-  `controllers`: Folder to store all your network logic (You should have one controller per resource).

  

-  `localization`: Folder to store the languages files.

  

-  `navigation`: Folder to store the navigators.

  

-  `screens`: Folder that contains all your application screens/features.

  

-  `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.

  

-  `Screen.js`

  

-  `Screen.styles.js`

  

-  `Screen.test.js`

  

-  `storage`: Folder that contains the application storage logic.

  

-  `theme`: Folder to store all the styling concerns related to the application theme.

  

-  `App.js`: Main component that starts your whole app.

  

-  `index.js`: Entry point of your application as per React-Native standards.

 - `networking`:  To keep the networking layer simple, the template uses a single Axios instance in the  `httpClient.js`. It uses interceptors to define common side effects for the responses. When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a controller file, please keep all of those inside the controllers' folder.


### Run the app

-For Android: `yarn android`  or  `npx react-native run-android`
-For iOS: `yarn ios`  or  `npx react-native run-ios`