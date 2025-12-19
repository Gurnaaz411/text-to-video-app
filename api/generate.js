export default async function handler(req, res) {
  const { prompt } = req.body;

  // TEMP response
  res.status(200).json({
    videoUrl: "https://sample-videos.com/video123/mp4/480/asdasdas.mp4"
  });
}
