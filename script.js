async function generateVideo() {
  const prompt = document.getElementById("prompt").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await response.json();
  document.getElementById("video").src = data.videoUrl;
}
