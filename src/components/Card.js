import { useSelector } from "react-redux";
import CountUp from "react-countup";
import moment from "moment";
const Card = () => {
  const data = useSelector((state) => state.data);
  const selectedCountry = useSelector((state) => state.selectedCountry);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div className="bg-[#B0D7FD] rounded-md p-5 flex flex-col gap-y-2 border-b-[11px] border-blue-500">
        <div className="flex flex-col">
          <h6 className="text-xl font-medium">Confirmed</h6>
          <span className="font-normal text-lg">
            <CountUp
              start={0}
              end={data.confirmed.value}
              duration={2}
              separator=","
            />
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Last Updated at:</h6>
          <span className="font-normal text-lg">
            {moment(data.lastUpdate).format("LL")}
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Number of infect cases of COVID-19</h6>
          {selectedCountry.iso2 !== "Global" && (
            <span className="font-normal text-lg">{selectedCountry.name}</span>
          )}
        </div>
      </div>
      <div className="bg-[#DDF6E2] rounded-md p-5 flex flex-col gap-y-2 border-b-[11px] border-[#6EFA70]">
        <div className="flex flex-col">
          <h6 className="text-xl font-medium">Recovered</h6>
          <span className="font-normal text-lg">
            <CountUp
              start={0}
              end={data.recovered.value}
              duration={2}
              separator=","
            />
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Last Updated at:</h6>
          <span className="font-normal text-lg">
            {moment(data.lastUpdate).format("LL")}
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Number of infect cases of COVID-19</h6>
          {selectedCountry.iso2 !== "Global" && (
            <span className="font-normal text-lg">{selectedCountry.name}</span>
          )}
        </div>
      </div>

      <div className="bg-[#F4D6D6] rounded-md p-5 flex flex-col gap-y-2 border-b-[11px] border-[#F96A6A]">
        <div className="flex flex-col">
          <h6 className="text-xl font-medium">Deaths</h6>
          <span className="font-normal text-lg">
            <CountUp
              start={0}
              end={data.deaths.value}
              duration={2}
              separator=","
            />
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Last Updated at:</h6>
          <span className="font-normal text-lg">
            {moment(data.lastUpdate).format("LL")}
          </span>
        </div>
        <div className="flex flex-col ">
          <h6 className="font-medium">Number of infect cases of COVID-19</h6>
          {selectedCountry.iso2 !== "Global" && (
            <span className="font-normal text-lg">{selectedCountry.name}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
