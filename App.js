import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ActivityIndicator,
  TouchableOpacity

} from 'react-native';

export default function App() {

  const [isLoading, setIsLoading] = useState(false);

  function changeIsLoaging(){

    setIsLoading(true);

  }

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button}
      disabled={isLoading}
      
      onPress={changeIsLoaging}
      
      >
        {!isLoading && (

          <Text style={{fontSize: 20}}>Clique aqui!</Text>

        )}

        {isLoading && (

          <ActivityIndicator 
          
          size={32}
          color="#4285f4"
          
          />

        )}
        
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4285f4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button:{

    alignItems: "center",
    justifyContent: "center",
    width: '95%',
    height: 57, 
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    elevation: 10,
    shadowOpacity: 0.5,
    shadowRadius: 2,

  }

});
