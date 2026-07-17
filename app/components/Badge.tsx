interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-blue-200
      bg-blue-50
      px-4
      py-2
      text-sm
      font-semibold
      text-blue-700
      "
    >
      {children}
    </span>
  );
}