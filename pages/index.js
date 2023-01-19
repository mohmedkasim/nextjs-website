import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import cons from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <Head>
        <title>Mohamed Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900 transition-colors duration-500 ">
        <section className="min-h-screen">
          <nav className="flex justify-between py-10 mb-12">
            <h1 className="transition duration-300 hover:scale-110 font-pacifico font-bold text-3xl text-teal-600">
              Medo
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li className="transition duration-300 hover:scale-110">
                <a
                  href="#"
                  className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500 "
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="py-2 text-5xl font-bold text-teal-600 md:text-6xl">
              Mohamed Kasim
            </h2>
            <h3 className="py-2 text-2xl md:text-3xl dark:text-white">
              Developer and Product Desinger
            </h3>
            <p className="py-5 leading-8 text-gray-800 text-md md:text-xl max-w-xl mx-auto dark:text-white">
              Freelancer providiner services for programming and product design.{" "}
              <br />
              Check me down below my previous work
            </p>
          </div>
          <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-white">
            <AiFillTwitterCircle />
            <AiFillYoutube />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto mt-20 overflow-hidden rounded-full bg-gradient-to-b from-green-900 w-80 h-80 md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 dark:text-white pt-20 text-center font-bold">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-xl text-center mx-auto">
              Since the beginning of my journey as a freelance desiner and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies</span> consulted for
              <span class="text-teal-500"> startups</span> and collaborated with
              talanted people to create digital products for both business and
              consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white max-w-xl text-center mx-auto">
              I offer from a wide range of services, including brand design,
              programming & teaching.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 content-center dark:bg-white">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-3xl pt-8 pb-2 font-bold">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <img
                src="https://skillicons.dev/icons?i=photoshop,illustrator,xd"
                width={"50%"}
                height="300"
                className="mx-auto"
              />
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 content-center dark:bg-white">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 content-center dark:bg-white">
              <Image src={cons} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Adobe XD</p>
            </div>
          </div>
        </section>
        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance desiner and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies</span> consulted for
              <span class="text-teal-500"> startups</span> and collaborated with
              talanted people to create digital products for both business and
              consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I offer from a wide range of services, including brand design,
              programming & teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"%100"}
                height={"%100"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
