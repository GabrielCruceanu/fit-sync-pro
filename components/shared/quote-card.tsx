export interface Quate {
  body: string;
  author: string;
}

export const QuoteCard = (quote: Quate) => {
  return (
    <div className="border-l-1 border-black pl-3 my-3">
      <div className="flex flex-col">
        <h3 className="text-medium italic">{quote.body}</h3>
        <p className="text-sm font-medium">{quote.author}</p>
      </div>
    </div>
  );
};
