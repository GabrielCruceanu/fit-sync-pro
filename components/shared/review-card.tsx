import { Review } from "@/ts/types/review";
import { StarFilledIcon } from "@radix-ui/react-icons";
type Props = {
  review: Review;
};
export const ReviewCard = ({ review }: Props) => {
  return (
    <div className="p-6 border border-divider rounded">
      <p className="mb-2 font-semibold">{review.description}</p>
      <div className="border-t border-divider my-3"></div>
      <div className="flex ">
        <img
          className="w-12 h-12 rounded"
          src={
            review.client_photo
              ? review.client_photo
              : "https://via.placeholder.com/150"
          }
          alt="profile"
        />
        <div className="ml-4">
          <p className="font-semibold">
            {review.client_first_name + " " + review.client_last_name}
          </p>
          <div className="flex items-center font-semibold">
            <StarFilledIcon className="w-4 h-4 text-yellow-400 mr-2" />
            <p>{review.rating} / 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
