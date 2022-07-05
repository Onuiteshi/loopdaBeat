import { createStackNavigator } from "@react-navigation/stack";
import SearchByArtist from "./ByArtist";
import SearchByCategory from "./ByCategory";
import SearchBySongs from "./ArtistSongs";

const Stack = createStackNavigator();
function Search() {
  return (
  <Stack.Navigator>

    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SearchByCategory'>
            {(props) => <SearchByCategory {...props} />}
      </Stack.Screen>
      <Stack.Screen name='SearchByArtist'>

            {(props) => <SearchByArtist {...props} />}
      </Stack.Screen>
      <Stack.Screen name='SearchBySongs'>
            {(props) => <SearchBySongs {...props} />}

      </Stack.Screen>

    </Stack.Group>
  </Stack.Navigator>

)
}

export default Search
  