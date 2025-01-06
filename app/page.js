import Image from "next/image";
import styles from "../components/mainBlock.module.css";

import MainBlock from "../components/mainBlock";
import SecondBlock from "@/components/secondBlock";
import KeysBlock from "@/components/keysBlock";
import PriceBlock from "@/components/priceBlock";
import Contacts from "@/components/contactBlock";


export default function Home() {
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
