export default async function handler(req, res) {
  const { prompt } = await req.body;

  try {
    const response = await fetch("https://api.pika.art/video", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.PIKA_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    res.status(200).json({ videoUrl: data.video_url });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Video generation failed" });
  }
}
