CPAN 213 – Lab 5: Platform-Specific Development in React Native
📱 Project Overview

This project demonstrates platform-specific UI implementation in React Native by creating customized iOS and Android button components and integrating them into a Settings Screen. The goal is to highlight key differences in styling, behavior, and platform guidelines between iOS and Android applications.

The app dynamically loads platform-specific files using:

Button.ios.js for iOS

Button.android.js for Android

The SettingsScreen component shows how these platform-aware components behave in a realistic app layout.

🧩 Features

✅ Platform-specific button designs:

iOSButton: Rounded corners, subtle shadows, normal text case

AndroidButton: Sharp corners, elevation-based shadows, uppercase text

✅ Settings Screen:

Displays header, sections, and settings rows

Uses Platform.select() for platform-aware shadow and elevation styles

✅ Organized Code Structure:

Components stored under src/components/PlatformButton/

Screens under src/screens/

Utility logic in src/utils/

✅ Works on both:

iOS Simulator

Android Emulator


Install Dependencies
npm install
