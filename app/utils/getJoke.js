export default async function getJoke() {
  let response;
  try {
    response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) throw new Error("Failed to fetch joke");
    return response.json();
  } catch (error) {
    console.log("Failed to fetch joke", error);
  }
}
