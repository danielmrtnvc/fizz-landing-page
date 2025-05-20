export default function Heading({ title, description }) {
  return (
    <div className="heading">
      <h2 className="heading-title">{title}</h2>
      {description && <h3 className="heading-description">{description}</h3>}
    </div>
  );
}
