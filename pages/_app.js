import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  const animalCounts = animals.map((animal) => animal.count); //z.B. [3,0,3,5]
  const countSum = animalCounts.reduce((a, b) => a + b);
  const countAverage = countSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  function handleAdd(id) {
    setAnimals(
      animals.map((animal) =>
        //z.B.: 1 === 1  ? {id: 1, name: "Cats", count: 3, count: 4} : {id: 1, name: "Cats", count: 3}
        animal.id === id ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }
  function handleSubtract(id) {
    const newArray = animals.map((animal) =>
      animal.id === id
        ? { ...animal, count: Math.max(0, animal.count - 1) }
        : animal
    );
    setAnimals(newArray); //die setter-function ersetzt immer KOMPLETT den vorigen State (hier ein Array)
  }

  return (
    <>
      <GlobalStyle />
      <Layout countSum={countSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          countSum={countSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
