import logo from "assets/images/covid19-tracker.png";
const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2">
      <img src={logo} alt="" />
      <h3 className="font-semibold">
        Global and Country Wise Cases of Corona Virus
      </h3>
      <span className="italic text-sm">(For a Particular country, select a Country from below)</span>
    </div>
  );
};

export default Title;
