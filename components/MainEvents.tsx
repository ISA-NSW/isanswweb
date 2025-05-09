import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Link from 'next/link';

const MainEvents = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        ISA <span className="text-red">Main Events</span>
      </h1>
      {/* remove bg-white dark:bg-black */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {/* add des prop */}
        <Card
          title="Unity"
          icon={<AceternityIcon order="NSW CUP" logo="/acaraBesar/nsw-cup.png" />}
          des="An annual flagship event hosted by ISA NSW, a three-day event celebrating Indonesian Independence Day. This includes multiple events ranging from traditional cultural games to sports competitions, where Indonesian get to bond through various activities. Celebrating our cultural heritage through sportsmanship is one of the ways Indonesians get to immerse themselves in our rich Indonesian culture."
          eventlink="https://www.instagram.com/isa_nsw"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
            containerClassName="bg-blue-700 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Kilau Diaspora"
          icon={<AceternityIcon order="Link n Connect" logo="/acaraBesar/lnC.png" />}
          des="An annual flagship event hosted by ISA NSW, held by inviting various companies operating in Australia that will provide career opportunities for Indonesian students in Australia, as well as featuring prominent guest speakers in the fields of technology, media industry. "
          eventlink="https://www.instagram.com/isalnc/"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-yellow-100 rounded-3xl overflow-hidden"
            colors={[
              // change the colors of the
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          {/* remove this one */}
          {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="COMING"
          icon={<AceternityIcon order="Senoparty" logo="/acaraBesar/Senoparty.png" />}
          des=" An annual flagship event hosted by ISA NSW, a one night gathering of Indonesian students to promote Indonesian culture through music. As one of the most popular events held by ISA NSW, Indonesian students get to experience their Indonesian culture through music and immerse themselves in our proud and diverse Indonesian culture."
          eventlink="https://www.instagram.com/isa_senoparty/"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-red rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default MainEvents;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
  eventlink,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  eventlink: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(10,16,38))",
        backgroundColor:
          "linear-gradient(90deg, rgba(10,16,38,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <Link href={eventlink} passHref legacyBehavior>
        <div className="relative z-20 px-10">
          <div
              // add this for making it center
              // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
          >
            {icon}
          </div>
          <h2
            // change text-3xl, add text-center
            className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          >
            {title}
          </h2>
          {/* add this one for the description */}
          <p
            className="text-sm opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#E4ECFF" }}
          >
            {des}
          </p>
        </div>
      </Link>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order, logo }: { order: string, logo:string }) => {
  return (
    <div className=" flex flex-col gap-4">
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <img src={logo} alt={order} className="w-100 h-100 rounded-xl" />
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#92140C_0%,#ABD3D4_50%,#D8A543_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-yellow-200 backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
