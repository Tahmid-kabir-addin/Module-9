import getJoke from "./utils/getJoke";

export default async function page() {
  const joke = await getJoke();
  console.log("🚀 ~ page ~ joke:", joke)
  return (
    <h1 className="text-3xl flex justify-center items-center h-screen">
      {joke.value}
    </h1>
  );
}
