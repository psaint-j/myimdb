import { StarIcon } from "@/components/Icons";


type Props = {
  vote: number;
};

const Rating = ({ vote }: Props) => {
  const roundedVote = vote !== undefined ? Math.round(vote * 10) / 10 : null;
  return (
    <div className="flex items-center h-auto gap-2">
      <StarIcon className="fill-yellow-500 size-6" />
      {roundedVote} / 10
    </div>
  );
};

export default Rating;
