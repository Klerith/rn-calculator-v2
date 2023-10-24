import { StyleSheet } from 'react-native';


export const colors = {
  darkGray: '#2D2D2D',
  lightGray: '#9B9B9B',
  orange: '#FF9427',
  
  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000000',
}



export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },

  calculatorContainer: {
    flex: 1, 
    padding: 20,
    justifyContent: 'flex-end',
  },



  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400'
  },

  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300'
    
  },

})