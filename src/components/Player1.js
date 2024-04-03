import React from 'react'
import Player from "@madzadev/audio-player";

const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];
  const colors = {
    tagsBackground: "#FFFFFF",
    tagsText: "#008080",
    tagsBackgroundHoverActive: "#6e65f1",
    tagsTextHoverActive: "#ffffff",
    searchBackground: "#dc143c",
    searchText: "#0000FF",
    searchPlaceHolder: "#FFF0F5",
    playerBackground: "#18191f",
    titleColor: "#4B0082",
    timeColor: "#FFFFE0",
    progressSlider: "#FAF0E6",
    progressUsed: "#FAF0E6",
    progressLeft: "#800000",
    bufferLoaded: "#800000",
    volumeSlider: "#FAF0E6",
    volumeUsed: "#FAF0E6",
    volumeLeft: "#FAF0E6",
    playlistBackground: "#18191f",
    playlistText: "#575a77",
    playlistBackgroundHoverActive: "##FAF0E6",
    playlistTextHoverActive: "#FAF0E6",
  };

const Player1 = () => {
  return (
    <div>
        <Player 
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
        customColorScheme={colors}
        />
    </div>
  )
}

export default Player1