import MainBlock from "../components/mainBlock";
import SecondBlock from "@/components/secondBlock";
import KeysBlock from "@/components/keysBlock";
import PriceBlock from "@/components/priceBlock";
import Contacts from "@/components/contactBlock";



export default async function Home() {
  
  return (
   <>
    <MainBlock/>
    <SecondBlock/>
    <KeysBlock/>
    <PriceBlock/>
    <Contacts/>
   </>
  );
}
