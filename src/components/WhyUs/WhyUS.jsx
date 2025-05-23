import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
     <div className="container mx-auto px-4 relative z-10 pt-[100px]">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-yellow-400 text-xl font-bold">02</span>
            <span className="w-8 h-px bg-yellow-400"></span>
            <span className="text-neutral-400 text-sm font-semibold tracking-widest uppercase">OUR PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We <span className="text-yellow-400">Work</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Our proven development process delivers exceptional results through a streamlined workflow
          </p>
        </div>
       </div>
      <SwapColumnFeatures />
     
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-yellow-400/90 px-3 py-1.5 text-xs font-semibold text-neutral-900 shadow-sm ring-2 ring-yellow-300">
            {featureInView.callout}
          </span>
          <p className="my-3 text-4xl md:text-5xl font-bold text-white drop-shadow">
            {featureInView.title}
          </p>
          <p className="text-neutral-300">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-neutral-900 shadow-2xl border border-neutral-800">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-neutral-800 p-3">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="p-4">
        <p className="font-mono text-[15px] text-neutral-100">
          <span className="text-green-300">~</span> Show a part of your product
          that explains what{" "}
          <span className="inline-block rounded bg-yellow-400/60 px-1 font-semibold text-neutral-900">
            "{featureInView.title}"
          </span>{" "}
          means.
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-yellow-900/30">
        <featureInView.Icon />
      </span>
    </div>
  );
};

export default Example;

const features = [
  {
    id: 1,
    callout: "Step 1",
    title: "Requirement Analysis",
    description:
      "We begin by understanding your goals, audience, and technical needs. Our team collaborates with you to gather detailed requirements, ensuring clarity and alignment from the start.",
    contentPosition: "r",
    Icon: FiEye,
  },
  {
    id: 2,
    callout: "Step 2",
    title: "Planning & Design",
    description:
      "Based on the requirements, we craft a strategic plan and design a user-centric interface. Wireframes and mockups are shared for feedback before development begins.",
    contentPosition: "l",
    Icon: FiSearch,
  },
  {
    id: 3,
    callout: "Step 3",
    title: "Development",
    description:
      "Our developers bring your vision to life using clean, scalable, and modern code. We follow best practices and agile methodology to ensure rapid and reliable delivery.",
    contentPosition: "r",
    Icon: FiPlay,
  },
  {
    id: 4,
    callout: "Step 4",
    title: "Test & Deployment",
    description:
      "Every feature is rigorously tested for functionality, performance, and security. After final approval, we launch your project smoothly and offer post-launch support.",
    contentPosition: "l",
    Icon: FiDollarSign,
  },
];