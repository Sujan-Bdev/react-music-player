import { v4 as uuidv4 } from "uuid";


function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: ["Aso", "Middle School", "Aviino"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      length: "3.45",
      rank: 1,
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: ["Aiguille"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      rank: 2,
      length: "3.45",

      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: ["Swørn"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      length: "3.45",

      rank: 3,

      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/Chillhop-Essentials-Summer-2020-tag-300x300.jpg",
      artist: ["Aiguille"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",

      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      length: "2:38",

      rank: 4,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: ["Swørn"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      length: "3.45",

      rank: 5,

      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: ["Aso", "Middle School", "Aviino"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      length: "3.45",

      rank: 6,

      active: false,
    },
  ];
}

export const artists = [
  {
    id: uuidv4(),
    name: "Travis scott",
    image:
      "https://chillhop.com/wp-content/uploads/2021/02/168a37665f18f73c43e333260619ca28a150dbb0-1024x1024.jpg",
  },
  {
    id: uuidv4(),
    name: "Cardi B",
    image:
      "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
  },
  {
    id: uuidv4(),
    name: "Post Malone",
    image:
      "https://chillhop.com/wp-content/uploads/2020/06/Chillhop-Radio-v2-300x300.jpg",
  },
  {
    id: uuidv4(),
    name: "Billie Ellish",
    image:
      "https://chillhop.com/wp-content/uploads/2021/02/380ce32bb4477e4c20035ce481a0a57e88043278-1024x1024.jpg",
  },
  {
    id: uuidv4(),
    name: "Bruno Mars",
    image:
      "https://chillhop.com/wp-content/uploads/2020/06/Chillhop-Essentials-Summer-2020-tag-300x300.jpg",
  },
  {
    id: uuidv4(),
    name: "Ed Sheeran",
    image:
      "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-1024x1024.jpg",
  },
];

export default chillHop;
