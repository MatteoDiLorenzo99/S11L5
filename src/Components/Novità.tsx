import React, { useEffect, useState } from "react";
import "./Css/Novità.css";
import img1 from "./../Assets/images/1a.png";
import img2 from "./../Assets/images/1b.png";
import img3 from "./../Assets/images/1c.png";
import img4 from "./../Assets/images/2a.png";
import img5 from "./../Assets/images/2b.png";
import img6 from "./../Assets/images/2c.png";
import img7 from "./../Assets/images/2d.png";
import img8 from "./../Assets/images/2e.png";

// Tipi per le canzoni e gli artisti
interface Song {
  title: string;
  artist: {
    name: string;
  };
  md5_image: string; // L'ID per l'immagine della copertina
}

const Novità: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]); // Stato per le canzoni
  const [loading, setLoading] = useState<boolean>(true); // Stato di caricamento

  // Fetch di 8 canzoni casuali dall'API di Deezer
  useEffect(() => {
    const fetchSongs = async () => {
      const artists = [
        "Queen",
        "Salmo",
        "Ed Sheeran",
        "The Beatles",
        "Coldplay",
        "Adele",
        "Drake",
        "Taylor Swift",
      ]; // Array di artisti

      try {
        const promises = artists.map((artist) =>
          fetch(
            `https://striveschool-api.herokuapp.com/api/deezer/search?q=${encodeURIComponent(
              artist
            )}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Errore API per artista: ${artist}`);
              }
              return response.json();
            })
            .then((data) => (data.data && data.data[0] ? data.data[0] : null)) // Prendi la prima canzone
        );

        const results = await Promise.all(promises);
        const filteredResults = results.filter((song) => song !== null); // Filtra i risultati nulli
        setSongs(filteredResults as Song[]); // Tipizza correttamente l'array di canzoni
      } catch (error) {
        console.error("Errore durante il fetch delle canzoni:", error);
      } finally {
        setLoading(false); // Disattiva il caricamento
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="novità-container">
      {/* Header principale */}
      <div className="novità-header">
        <h1>Novità</h1>
      </div>

      {/* Cards principali */}
      <div className="novità-main">
        {/* Card sinistra */}
        <div className="novità-card">
          <p className="novità-label">NUOVA STAZIONE RADIO</p>
          <h2>Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</h2>
          <div
            className="novità-image"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
        </div>

        {/* Card destra */}
        <div className="novità-card">
          <p className="novità-label">NUOVA STAZIONE RADIO</p>
          <h2>Ecco la nuova casa della musica latina</h2>
          <div
            className="novità-image"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
        </div>
      </div>

      {/* Nuovi episodi radio */}
      <div className="novità-subheader">
        <h3>Nuovi episodi radio</h3>
        <a href="#" className="link">
          ›
        </a>
      </div>

      {/* Cards degli episodi */}
      <div className="novità-episodi">
        {/* Episodio 1 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img3})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 1</p>
          <p className="episodio-subtitle">Sottotitolo episodio 1</p>
        </div>

        {/* Episodio 2 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img4})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 2</p>
          <p className="episodio-subtitle">Sottotitolo episodio 2</p>
        </div>

        {/* Episodio 3 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img5})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 3</p>
          <p className="episodio-subtitle">Sottotitolo episodio 3</p>
        </div>

        {/* Episodio 4 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img6})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 4</p>
          <p className="episodio-subtitle">Sottotitolo episodio 4</p>
        </div>

        {/* Episodio 5 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img7})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 5</p>
          <p className="episodio-subtitle">Sottotitolo episodio 5</p>
        </div>

        {/* Episodio 6 */}
        <div className="episodio-card">
          <div
            className="episodio-image"
            style={{ backgroundImage: `url(${img8})` }}
          ></div>
          <p className="episodio-title">Titolo episodio 6</p>
          <p className="episodio-subtitle">Sottotitolo episodio 6</p>
        </div>
      </div>

      {/* Nuove uscite */}
      <div className="novità-section">
        <h3>Nuove uscite</h3>
        <div className="novità-grid">
          {loading ? (
            <p>Caricamento canzoni...</p>
          ) : songs.length > 0 ? (
            songs.map((song, index) => (
              <div key={index} className="song-card">
                <div
                  className="song-image"
                  style={{
                    backgroundImage: `url(https://e-cdns-images.dzcdn.net/images/cover/${song.md5_image})`, // Link completo per l'immagine
                }}
                ></div>
                <p className="song-title">{song.title}</p>
                <p className="artist-name">{song.artist.name}</p>
              </div>
            ))
          ) : (
            <p>Nessuna canzone trovata.</p>
          )}
        </div>
      </div>

      {/* Altro da esplorare */}
      <div className="explore-section">
        <h3>Altro da esplorare</h3>
        <div className="explore-buttons">
          {[
            "Esplora per genere",
            "Worldwide",
            "Video musicali",
            "Decenni",
            "Classifiche",
            "Nuovi artisti",
            "Attività e stati d'animo",
            "Audio spaziale",
            "Hit del passato",
          ].map((text, index) => (
            <a key={index} href="#" className="explore-button">
              {text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Novità;
