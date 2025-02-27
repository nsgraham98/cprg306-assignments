import HomeButton from "../components/HomeButton";
import CitiesComponent from "./citiesComponent";
import AddNewCityComponent from "./addNewCityComponent";
import CounterExample from "./useStateEx";

export default function Page(){

return (
<main>
    <HomeButton/>
    <CounterExample/>
    <CitiesComponent/>
    <AddNewCityComponent/>
</main>
    
  );
}