import { Inter } from "next/font/google";
import { useEffect } from "react";
import getConfig from "next/config";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    console.log("process.env.openAiKey", process.env.openAiKey);
    console.log(getConfig());

    // return () => {
    //   //
    // };
  }, []);

  return <pre>Hi</pre>;
}
