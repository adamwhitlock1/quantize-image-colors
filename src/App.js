import "./styles.css";
import useImageColor from "./useImageColor";
import { buildRgb } from "./buildRgb";
import CardGuts from "./CardGuts";

const fake_data = [
  {
    id: 1,
    dj: "Alphazap",
    label: "SLK-Class",
    dj_crew: "Cereopsis goose",
    gender: "Genderqueer",
    mix_name: "Mercedes-Benz",
    mix_photo: "https://random.imagecdn.app/800/800"
  },
  {
    id: 2,
    dj: "It",
    label: "STS",
    dj_crew: "Stork, yellow-billed",
    gender: "Male",
    mix_name: "Cadillac",
    mix_photo: "https://random.imagecdn.app/500/800"
  },
  {
    id: 3,
    dj: "Daltfresh",
    label: "Camry",
    dj_crew: "Red-winged hawk (unidentified)",
    gender: "Male",
    mix_name: "Toyota",
    mix_photo: "https://random.imagecdn.app/600/800"
  }
];

export default function App() {
  const { colors } = useImageColor("https://random.imagecdn.app/600/800");

  const renderList = fake_data.map((mix) => (
    <CardGuts key={mix.id} mix={mix} colors={colors} />
  ));
  return (
    <div className="App">
      <p>Mock Data: ${JSON.stringify()}</p>
      {renderList}
    </div>
  );
}
