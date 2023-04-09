# ProjectButton

This is a React Native application built using Expo that features a button that counts how many times it has been clicked, and another button that resets the count to zero.


## Installation

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` and `npm install react-native` to install all the required dependencies.
4. Install the Expo Go app on your phone or the Expo CLI by running `npm install -g expo-cli`.
5. Run `npx expo start` to start up Expo, it will give you options about which emulator you want to use and a QR Code.
6. On the Expo CLI, run and open any of the emulators shown to use the Expo development server.
7. On the phone app, scan the QR Code with your device to lead you to the Expo development server.

## Usage

Once the app is running, you will see a main title that displays "Hi! I'm Button" on the screen alongside with two buttons.
One of the buttons is titled "Reset Button" to reset the count to zero. The other one is "Press Button" once clicked the button counter will go up by increments of one.

## Dependencies

This application was built with the following:
- React Native: A framework for building native apps using React.
- Expo: A platform for building and deploying React Native apps.
- React: A Javascript library for building user interface.
- Props: A mechanism for passing data from one component to another.
- State: A way to store and manage data within a component.
- StyleSheet: A built-in React Native component for styling components.
- View: A built-in React Native component for creating a view.
- Text: A built-in React Native component for displaying text.

## Expo Folder Explanation

> Why do I have a folder named ".expo" in my project?
The ".expo" folder is created when an Expo project is started using "expo start" command.
> What do the files contain?
- "devices.json": contains information about devices that have recently opened this project. This is used to populate the "Development sessions" list in your development builds.
- "settings.json": contains the server configuration that is used to serve the application manifest.
> Should I commit the ".expo" folder?
- "No, you should not share the ".expo" folder. It does not contain any information that is relevant for other developers working on the project, it is specific to your machine.
- "Upon project creation, the ".expo" folder is already added to your ".gitignore" file.
