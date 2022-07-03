import {View,Text} from 'react-native'
import SongItem from '../SongItem'

function SongItems(){
    const songItems = [
        {title:'Loading', category:'Hip Hop'},
        {title:'Loading', category:'Hip Hop'},
        {title:'Loading', category:'Hip Hop'},
        {title:'Loading', category:'Hip Hop'},
        {title:'Loading', category:'Hip Hop'},
        {title:'Loading', category:'Hip Hop'},
    ]
    return (
        <View>
            <View>
                <Text>TITLE</Text>
                <Text>CATEGORY</Text>
                <Text>PLAY</Text>
                <Text>ADD TO PLAYLIST</Text>
            </View>
            {songItems.map((songItem, key)=> <SongItem title={songItem.title} category={songItem.category} key={key}/>) }
        </View>
    )
}

export default SongItems