export interface PlanetProps {
  planet: PlanetType;
}

const Planet: React.FC<PlanetProps> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
