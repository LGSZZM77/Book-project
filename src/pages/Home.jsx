"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Home = () => {
  const tabs = [
    { item: "trend", label: "인기" },
    { item: "comic", label: "만화" },
    { item: "novel", label: "소설" },
    { item: "it", label: "IT" },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0].item);

  const tabIcons = {
    trend: "🔥",
    comic: "📚",
    novel: "✍️",
    it: "💻",
  };

  return (
    <div className="flex flex-col items-center flex-1 pt-16">
      <div className="flex gap-4 text-text">
        {tabs.map(({ item, label }) => (
          <motion.button
            key={item}
            onClick={() => setSelectedTab(item)}
            className={`relative px-4 py-2 rounded-md ${item === selectedTab ? "bg-primary text-white" : "bg-tab"}`}
            initial={false}
          >
            {label}
          </motion.button>
        ))}
      </div>
      <div className="mt-16 h-40 flex flex-col items-end justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-8xl"
          >
            {tabIcons[selectedTab].repeat(5)}
          </motion.div>
        </AnimatePresence>
        <button className="text-text bg-bg px-4 py-2 mt-12">더보기</button>
      </div>
    </div>
  );
};

export default Home;
