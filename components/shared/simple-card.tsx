type Props = {
  title: string;
  description: string;
};
export const SimpleCard = ({ title, description }: Props) => {
  return (
    <div className="flex">
      <div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-2">{description}</p>
      </div>
    </div>
  );
};
