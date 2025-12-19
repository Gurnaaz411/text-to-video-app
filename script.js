async function generateVideo() {
  const prompt = document.getElementById("prompt").value;

  document.getElementById("video").src = ""; // clear previous

  const videoEl = document.getElementById("video");
  videoEl.poster = "loading.gif"; // optional loading image

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    videoEl.src = data.videoUrl;
    videoEl.play();

  } catch (err) {
    alert("Video generation failed");
    console.error(err);
  }
}
