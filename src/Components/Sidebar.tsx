import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaPodcast, FaNewspaper, FaSearch } from "react-icons/fa";
import axios from "axios";  // Importa Axios per fare le richieste HTTP
import "./Css/Sidebar.css"; 
import logo from './../Assets/logos/music.svg';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");  // Stato per la query di ricerca
  const [searchResults, setSearchResults] = useState<any[]>([]);  // Stato per i risultati della ricerca

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Funzione per eseguire la ricerca
  const handleSearch = async (query: string) => {
    try {
      if (query.trim() === "") {
        setSearchResults([]);  // Se la query è vuota, resetta i risultati
        return;
      }

      // Fai una richiesta all'API di Deezer
      const response = await axios.get(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      setSearchResults(response.data.data);  // Imposta i risultati della ricerca
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  // Gestisci il cambiamento nel campo di input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);  // Esegui la ricerca mentre l'utente digita
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Barra di ricerca */}
        <div className="searchbar">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            value={searchQuery} 
            onChange={handleInputChange} 
          />
        </div>

        {/* Visualizza i risultati della ricerca */}
        {searchQuery && searchResults.length > 0 && (
          <div className="search-results">
            {searchResults.map((result) => (
              <div key={result.id} className="result-item">
                <img src={result.album.cover} alt={result.title} className="result-image" />
                <div className="result-info">
                  <p className="result-title">{result.title}</p>
                  <p className="result-artist">{result.artist.name}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="links">
          <div className="link-item">
            <FaHome className="icon" /> <a href="#">Home</a>
          </div>
          <div className="link-item">
            <FaNewspaper className="icon" /> <a href="#">News</a>
          </div>
          <div className="link-item">
            <FaPodcast className="icon" /> <a href="#">Podcast</a>
          </div>
        </div>
      </div>

      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Sidebar;
