import { Link } from "react-router-dom";
import { TruckCardProps } from "../types/truck.interface";

export default function TruckCard(props: TruckCardProps) {
  return (
    <Link to={props.page}>
      <div className="!mb-20 max-w-[400px] mx-5 my-auto p-2.5 rounded-md border-2 border-gray-400 bg-zinc-950 hover:bg-zinc-900 transition-colors">
        <div className="flex items-center justify-between">
          <div className="">
            <h1 className="text-left text-lg text-white !font-[700]">
              {props.name}
            </h1>
            <h2 className="text-left text-white">{props.type}</h2>
          </div>
          <p className="!font-bold text-white">
            From <span className="text-red-500">{props.startPrice}</span>
          </p>
        </div>
        <div className="flex max-w-[360px] py-4 m-0">
          <img
            alt="Truck from Marcelis"
            className="w-full h-auto min-h-48 max-h-48 object-cover"
            src={props.pictureUrl}
          />
        </div>
        <div className="!mb-2 bg-[#2c2c2c] p-2.5 text-[#c2c2c2] flex align-middle justify-between">
          <p>Energy source</p>
          <p className="p-1 rounded-sm bg-[#465e73]">
            {props.specifications.energySource}
          </p>
        </div>
        <div className="!mb-2 bg-[#2c2c2c] p-2.5 text-[#c2c2c2] flex align-middle justify-between">
          <p>GVWR</p>
          <p className="p-1 rounded-sm bg-[#885c54]">
            {props.specifications.gvwrMin} - {props.specifications.gvwrMax} kg
          </p>
        </div>
        <div className="!mb-2 bg-[#2c2c2c] p-2.5 text-[#c2c2c2] flex align-middle justify-between">
          <p>Payload</p>
          <p className="p-1 rounded-sm bg-[#6d6748]">
            {props.specifications.payloadMin} -{" "}
            {props.specifications.payloadMax} kg
          </p>
        </div>
        <div className="bg-[#2c2c2c] p-2.5 text-[#c2c2c2] flex align-middle justify-between">
          <p>Capacity</p>
          <p className="p-1 rounded-sm bg-[#595294]">
            {props.specifications.capacityMin} -{" "}
            {props.specifications.capacityMax} m3
          </p>
        </div>
      </div>
    </Link>
  );
}
