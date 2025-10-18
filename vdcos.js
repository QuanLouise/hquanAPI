export default function handler(req, res) {
  const videos = [
    "https://i.imgur.com/DJQk6Xp.mp4"
  ];

  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  res.status(200).json({ video: randomVideo });
}
