import Image from "next/image";
import { AccordionDemo } from "./accordian";
import { AlertDialogDemo } from "./alertDialog";

export default function Home() {
    return(
        <div>
        <h1 className="text-center text-3xl pt-5">Shadcn ui</h1>
        <div className="p-10">{/* <AccordionDemo/> */}
        <AlertDialogDemo/>
        </div>
        </div>
    );
}