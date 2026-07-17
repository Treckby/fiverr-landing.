"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingBadgeProps {
  icon: LucideIcon;
  title: string;
  value: string;
  className?: string;
}

export default function FloatingBadge({
  icon: Icon,
  title,
  value,
  className = "",
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        rounded-2xl
        border
        border-slate-200
        bg-white/90
        backdrop-blur-xl
        px-5
        py-4
        shadow-2xl
        ${className}
      `}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <Icon
            size={20}
            className="text-blue-600"
          />
        </div>

        <div>
          <p className="text-xs text-slate-500">
            {title}
          </p>

          <h3 className="font-bold text-slate-900">
            {value}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}