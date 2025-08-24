import AutoComplete from "../../components/AutoComplete";
const cars = [
  { label: "Audi", value: "audi" },
  { label: "BMW", value: "bmw" },
  { label: "Honda", value: "honda" },
  { label: "Mercedes", value: "mercedes" },
  { label: "Toyota", value: "toyota" },
  { label: "Volkswagen", value: "volkswagen" },
  { label: "Volvo", value: "volvo" },
  { label: "Nissan", value: "nissan" },
  { label: "Mazda", value: "mazda" },
  { label: "Kia", value: "kia" },
  { label: "Hyundai", value: "hyundai" },
  { label: "Chevrolet", value: "chevrolet" },
  { label: "Ford", value: "ford" },
  { label: "Lexus", value: "lexus" },
  { label: "Jaguar", value: "jaguar" },
  { label: "Porsche", value: "porsche" },
  { label: "Ferrari", value: "ferrari" },
  { label: "Lamborghini", value: "lamborghini" },
  { label: "Maserati", value: "maserati" },
  { label: "Bentley", value: "bentley" },
  { label: "Bugatti", value: "bugatti" },
]
const Top = () => {
  return (
    <div className="flex items-center justify-between">
      <AutoComplete options={cars} onChange={(value) => { console.log(value) }}/>
      <button className="dark:bg-light bg-secondary dark:text-secondary hover:bg-primary dark:hover:bg-accent text-light font-work-sans card-hover hover:card-hover theme-transition flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 font-semibold sm:px-4">
        <span className="text-2xl font-medium">+</span>
        <span className="text-lg">New Category</span>
      </button>
    </div>
  );
};

export default Top;
