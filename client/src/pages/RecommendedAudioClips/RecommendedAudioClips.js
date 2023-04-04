import "./RecommendedAudioClips.scss";

export default function RecommendedAudioClips() {
  return (
    <main>
      <h1>This is the RecommendedAudioClips</h1>
      {/* <iframe
        style={{ "border-radius": "12px" }}
        src="https://open.spotify.com/embed/episode/2RpoJhkHbUNHk6WNtoJLyv?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}

      <video controls autoPlay name="media">
        <source
          src="https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17"
          type="audio/mpeg"
        />
      </video>

      <video controls autoPlay name="media">
        <source
          src="https://p.scdn.co/mp3-preview/671c90202a45fcb769e818eaa8fe078eb9d2bc5f"
          type="audio/mpeg"
        />
      </video>

      <video controls autoPlay name="media">
        <source
          src="https://p.scdn.co/mp3-preview/94afe36cf22748cd4d34e7bd259861fa340ec369"
          type="audio/mpeg"
        />
      </video>

      <video controls autoPlay name="media">
        <source
          src="https://p.scdn.co/mp3-preview/57e22f139de2b3b0035d5c59f8f53a620c8948c7"
          type="audio/mpeg"
        />
      </video>
    </main>
  );
}
