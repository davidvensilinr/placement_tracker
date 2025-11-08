import Image from "next/image";
import Link from "next/link";
export default function Home(){
  return (<>
  <h1 className="font-serif text-5xl text-center p-4">Placement Tracker</h1>
  <div className="pt-15 flex flex-nowrap">
    
    <div className="p-4 w-1/2 font-sans text-3xl">Welcome to the <span className="font-bold text-amber-300">Placement Tracker</span> where you can organize and evaluate and analyse how you are prepared and progressing towards your placement journey !!!</div>
    <Link href="/pages/bot" className="font-mono text-black transition duration-500 ease-in-out bg-teal-200 hover:bg-amber-400  animate-bounce w-1/2 flex items-center justify-center"> Try our placement predictor </Link>
    </div>

    </>
  );
}
