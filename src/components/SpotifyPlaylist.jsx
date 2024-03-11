import React from "react";
import "./SpotifyPlaylist.css";

function SpotifyPlaylist() {
  return (
    <iframe
      style={{ border: "0", borderRadius: "20px"}}
      src="https://open.spotify.com/embed/playlist/3LFIBdP7eZXJKqf3guepZ1?utm_source=generator&theme=0"
      width="100%"
      height="500px"
      allowFullScreen="false"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyPlaylist;
