import React from "react";
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class VideoItem extends React.Component {
  render() {
    let video = this.props.video;
    return (
      <View style={styles.containter}>
        <Image
          source={{ uri: video.snippet.thumbnails.medium.url }}
          style={{ height: 180 }}
        />
        <View style={styles.descContainer}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/thumb/men/83.jpg"
            }}
            style={{ height: 26 }}
          />
          <View style={styles.vidDetails}>
            <Text style={styles.vidTitle}>{video.snippet.title}</Text>
            <Text style={styles.vidStats}>
              {video.snippet.channelTitle + ' · ' + video.statistics.viewCount}
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="more-vert" size={20} color="#999999" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  descContainer: {
    flexDirection: "row",
    paddingTop: 15
  },
  vidTitle: {
    fontSize: 16,
    color: "#3C3C3C"
  },
  vidStats: {
    fontSize: 14,
    paddingTop: 3
  },
  vidDetails: {
    paddingHorizontal: 15,

    flex: 1
  }
});
