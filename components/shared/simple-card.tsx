type Props = {
  title: string;
  description: string;
  smallText?: string;
};
export const SimpleCard = ({ title, description, smallText }: Props) => {
  return (
    <div className="p-6 text-center border border-divider rounded">
      <p className="mb-2">{title}</p>
      <h3 className="text-xl font-semibold">{description}</h3>
      {smallText && <p className="text-sm mt-2">{smallText}</p>}
    </div>
  );
};
