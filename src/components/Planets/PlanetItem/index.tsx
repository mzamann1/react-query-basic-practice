import { IPlanetResult } from '../../../utils/interfaces/IPlanetApiResultResponse';

interface IProps {
    planet : IPlanetResult
}

const PlanetItem = ({planet}:IProps) => {
    return (
        <div className="card">
            <h3>{planet.name}</h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
      );
}
 
export default PlanetItem;