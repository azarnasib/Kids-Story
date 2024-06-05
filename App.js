mport React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import OnBoarding from "./src/Screens/OnBoardingScreen/OnBoarding";
//import Login from "./src/Screens/LoginScreen/Login";

const Stack=createNativeStackNavigator ()

const MainNavigator= () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen
         name= "Onboarding"
         component={OnBoarding}
        />
      <Stack.Screen
          name = {"Login"}
          component={Login}
      />
   </Stack.Navigator>
  )


}
function App() {

    
    return (
        <NavigationContainer>
           <MainNavigator/>
        </NavigationContainer>
    )
}

export default App;