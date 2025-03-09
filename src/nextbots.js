const API_URL = process.env.API_URL || "http://localhost:3000"; // Fallback para localhost se não houver variável de ambiente

const nextbots = [
    { name: "Obunga", dangerLevel: "Agony", icon: `${API_URL}/images/obunga.jpg`, audio: `${API_URL}/audios/obunga_audio.mp3` },
    { name: "Nerd", dangerLevel: "Funny", icon: `${API_URL}/images/nerd.jpg`, audio: `${API_URL}/audios/nerd_audio.mp3` },
    { name: "Bob", dangerLevel: "Agony", icon: `${API_URL}/images/bob.gif`, audio: `${API_URL}/audios/bob_audio.mp3` },
    { name: "Fire in the hole", dangerLevel: "Soft", icon: `${API_URL}/images/fire-in-the-hole.png`, audio: `${API_URL}/audios/fire-in-the-hole_audio.mp3` },
    { name: "Fritzi", dangerLevel: "Cute", icon: `${API_URL}/images/fritzi.jpg`, audio: `${API_URL}/audios/fritzi.mp3` },
    { name: "Kleiner", dangerLevel: "Soft", icon: `${API_URL}/images/kleiner.jpg`, audio: `${API_URL}/audios/kleiner.mp3` },
    { name: "God Tycoon", dangerLevel: "Soft", icon: `${API_URL}/images/god_tycoon.jpg`, audio: `${API_URL}/audios/god_tycoon.mp3` },
    { name: "A HORSE", dangerLevel: "Agony", icon: `${API_URL}/images/A_horse.png`, audio: `${API_URL}/audios/A_Horse.mp3` },
    { name: "Afton", dangerLevel: "HORROR", icon: `${API_URL}/images/Afton.png`, audio: `${API_URL}/audios/Afton.mp3` },
    { name: "Aheno", dangerLevel: "HORROR", icon: `${API_URL}/images/Aheno.png`, audio: `${API_URL}/audios/Aheno.mp3` },
    { name: "Alternate", dangerLevel: "Agony", icon: `${API_URL}/images/Alternate.png`, audio: `${API_URL}/audios/Alternate.mp3` },
    { name: "Ambush", dangerLevel: "Agony", icon: `${API_URL}/images/Ambush.png`, audio: `${API_URL}/audios/Ambush.mp3` },
    { name: "Angry Munci", dangerLevel: "Agony", icon: `${API_URL}/images/AngryMunci.png`, audio: `${API_URL}/audios/AngryMunci.mp3` },
    { name: "Ao Oni", dangerLevel: "Agony", icon: `${API_URL}/images/AoOni.gif`, audio: `${API_URL}/audios/AoOni.mp3` },
    { name: "Apparition", dangerLevel: "RUN!!", icon: `${API_URL}/images/Apparition.gif`, audio: `${API_URL}/audios/Apparition.mp3` },
    { name: "Arkade", dangerLevel: "HORROR", icon: `${API_URL}/images/Arkade.png`, audio: `${API_URL}/audios/Arkade.mp3` },
    { name: "Armstrong", dangerLevel: "RUN!!", icon: `${API_URL}/images/Armstrong.gif`, audio: `${API_URL}/audios/Armstrong.mp3` },
    { name: "Ash Baby", dangerLevel: "Agony", icon: `${API_URL}/images/AshBaby.png`, audio: `${API_URL}/audios/AshBaby.mp3` },
];

module.exports = nextbots;
