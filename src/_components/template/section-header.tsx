type SectionHeaderProps = {
  number: string;
  title: string;
  titleId: string;
};

export default function SectionHeader({ number, title, titleId }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      <span className="sec-num">{number}</span>
      <h2 className="sec-title" id={titleId}>
        {title}
      </h2>
      <div className="sec-line"></div>
    </div>
  );
}
