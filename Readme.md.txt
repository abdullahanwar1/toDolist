# System Requirements
 - CPU:intel(R) Core(TM) i5-10210U @ 1.60GHz   2.11 GHz
 - Ram: 16GB
 -Operating System: Windows 11
# React Native Project Setup Guide

## Prerequisites:
Before you begin, make sure you have the following installed:

### Node.js
- React Native requires Node.js.
- Download the latest LTS version from the [Node.js website](https://nodejs.org/).

### Java Development Kit (JDK)
- Required for React Native.
- Download and install from [Oracle's website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Note:** Use Node version 16 or newer. JDK versions above 11 may cause compatibility issues.

## Configuration Steps:

### Android Development Setup:
1. Install **Android Studio** from the [official website](https://developer.android.com/studio).
2. During installation, ensure to select "Android SDK" and "Android Virtual Device".

### Setting Environment Variables:
- Add `ANDROID_HOME` to your environment variables, pointing to your Android SDK directory.
- Add the `platform-tools` to your PATH.

## Project Creation:
1. Open your terminal or command prompt.
2. Navigate to your desired directory.
3. Install npm: `npm install`.
4. Initialize your app: `npx react-native@latest init MyAwesomeApp`.

## Creating a Virtual Device:
1. In Android Studio, go to "more actions" > "Virtual Device Manager".
2. Click "Create Device", select a phone model, and click "Next".
3. Choose a system image for your virtual device.

## Running the Project:
1. Open Android Studio and select "Open" to choose the android folder of your project.
2. Click "Make Project" under the "Build" menu.
3. After a successful build, click "Run" and select your virtual device.

## Troubleshooting:

### Issues with Metro Bundler:
- Clear cache: `npx react-native start --reset-cache`.

### Encountering Build Errors:
- Verify the `ANDROID_HOME` setting.
- Delete `node_modules` and `package-lock.json`, then run `npm install`.

## Additional Resources:
- [Official React Native Documentation](https://reactnative.dev/docs/getting-started)
