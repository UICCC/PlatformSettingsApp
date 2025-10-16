// Import React to create components
import React from 'react';

// Import basic UI components from React Native
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Define a functional component called IOSButton
// Props: title (button label), onPress (function to run when pressed),
// variant (button style type), disabled (true/false)
const IOSButton = ({title, onPress, variant = 'primary', disabled = false}) => {
  return (
    // TouchableOpacity gives pressable behavior with opacity feedback
    <TouchableOpacity
      // Combine base button style + variant style + disabled style (if true)
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      // Function that runs when button is pressed
      onPress={onPress}
      // Disable press action when disabled is true
      disabled={disabled}
      // Slightly fade when pressed
      activeOpacity={0.7}>
      
      {/* Text inside the button — no uppercase for iOS (matches native iOS style) */}
      <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Define styles specific to iOS design
const styles = StyleSheet.create({
  // Base button style
  button: {
    paddingVertical: 12,        // Top & bottom padding
    paddingHorizontal: 24,      // Left & right padding
    borderRadius: 12,           // Rounded corners (more curved than Android)
    alignItems: 'center',       // Center text horizontally
    // Add iOS-style shadow for depth
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Primary button style (solid blue background)
  primary: {
    backgroundColor: '#007AFF', // Default iOS blue
  },

  // Secondary button (outlined version)
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },

  // Disabled button style (light gray)
  disabled: {
    backgroundColor: '#f2f2f7',
  },

  // Base text style for all buttons
  text: {
    fontSize: 17,               // iOS default button text size
    fontWeight: '600',          // Semi-bold text
    textAlign: 'center',        // Center text
  },

  // Text color for primary button (white)
  primaryText: {
    color: '#ffffff',
  },

  // Text color for secondary button (blue)
  secondaryText: {
    color: '#007AFF',
  },
});

// Export the component so it can be imported and used elsewhere
export default IOSButton;
