const Box = ({ className = "h-[330px]" }) => {
  return (
    <div
      className={`bg-black-500 flex items-end justify-start animate-pulse
               p-6 overflow-hidden rounded-2xl ${className} `}
    >
      <p className="font-bold text-base bg-black animate-pulse"></p>
    </div>
  );
};

function Loading({ message, gridCount = "grid-cols-4" }) {
  return (
    <section className="py-8">
      <div className="space-y-6">
        <h1 className="font-bold text-2xl first-letter:uppercase">{message}</h1>

        <div className={`grid ${gridCount} gap-4`}>
          <Box />
          <Box />
          <Box />
          <Box />
        </div>
      </div>
    </section>
  );
}

export default Loading;
