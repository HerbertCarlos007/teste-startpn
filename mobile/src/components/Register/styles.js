import { StyleSheet, StatusBar } from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    paddingStart: 20,
    paddingEnd: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topSection: {
    position: 'relative',
    right: 70
  },

  title: {
    fontSize: 24,
    color: '#476EE6',
    paddingTop: 20,
    fontWeight: '500'
  },

  containerForm: {
    paddingTop: 20
  },

  containerInputs: {
    
  },

  textName: {
    paddingTop: 10,
  },

  input: {
    width: 324,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D7D7D7',
    marginTop: 10,
    paddingLeft: 10,
  },

  containerTerms: {
    marginTop: 20,
  },

  textTermPrivacy: {
    color: '#000000',
    fontWeight: '600',
  },

  contentTerms: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10
    
    
  },

  checkbox: {
    borderRadius: 4,
    width: 25,
    height: 25,
    marginBottom: 5
  },

  textTerm: {
    fontSize: 13,
    color: '#000000'
  },

  LinkTerms: {
    color: '#476EE6',
    marginTop: 10,
    marginLeft: 35,

  },
  
  button: {
    marginTop: 30
  },

  button: {
    width: 324,
    height: 45,
    backgroundColor: '#476EE6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
   marginTop: 20
 },

  text: {
     fontSize: 18,
     color: '#FFFFFF'
  },

  textLogin: {
   marginTop: 10,
   color: '#476EE6'
  }


});
