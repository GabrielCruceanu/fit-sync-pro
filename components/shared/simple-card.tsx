type Props = {
  title: string;
  description: string;
};
export const SimpleCard = ({ title, description }: Props) => {
  return (
    <div className="p-6 text-center border border-divider rounded">
      <p className="mb-2">{title}</p>
      <h3 className="text-xl font-semibold">{description}</h3>
    </div>
  );
};
