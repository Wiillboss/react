import { Quadrado } from "./Quadrado";
import Square from "./Square";

export const Geo_Form = () => {
    return (
        <div>
            <h3 className="text-2xl font-bold">Formas geométricas</h3>
            <Square />
            <Quadrado />
        </div>
    );
}