// Import React library to use JSX and functional components
import React from 'react';

// Import React Native components for building UI
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// Define a functional component called AndroidButton
// Props: title (button text), onPress (callback function), variant (style type), disabled (bool)
const AndroidButton = ({title, onPress, variant = 'primary', disabled = false}) => {
  return (
    // TouchableOpacity is used to create a button that gives visual feedback when pressed
    <TouchableOpacity
      // Combine multiple styles: base style, variant style, and disabled style if true
      style={[styles.button, styles[variant], disabled && styles.disabled]}
      // Function to handle button press
      onPress={onPress}
      // Disable the button if "disabled" is true
      disabled={disabled}
      // Slightly reduce opacity when pressed for feedback
      activeOpacity={0.7}>
      
      {/* Display the button text, converted to uppercase */}
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

// Define all the styles used in the component
const styles = StyleSheet.create({
  // Base style for all buttons
  button: {
    paddingVertical: 10,        // Top & bottom padding
    paddingHorizontal: 24,      // Left & right padding
    borderRadius: 4,            // Rounded corners
    alignItems: 'center',       // Center the text horizontally
    elevation: 2,               // Adds shadow (Android only)
  },

  // Style for primary button (solid blue background)
  primary: {
    backgroundColor: '#2196F3',
  },

  // Style for secondary button (outlined, no fill)
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2196F3',
    elevation: 0,               // Remove shadow
  },

  // Style for disabled button (gray color, no elevation)
  disabled: {
    backgroundColor: '#e0e0e0',
    elevation: 0,
  },

  // Base text style for all buttons
  text: {
    fontSize: 14,               // Text size
    fontWeight: 'bold',         // Bold font
    textAlign: 'center',        // Center text
    letterSpacing: 1.25,        // Add spacing between letters
  },

  // Text color for primary button (white)
  primaryText: {
    color: '#ffffff',
  },

  // Text color for secondary button (blue)
  secondaryText: {
    color: '#2196F3',
  },
});

// Export this component to use it in other files
export default AndroidButton;
