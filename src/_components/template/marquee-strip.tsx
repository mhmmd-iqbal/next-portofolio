type MarqueeStripProps = {
  items: string[];
};

export default function MarqueeStrip({ items }: MarqueeStripProps) {
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track" id="marquee">
        {[...items, ...items].map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
