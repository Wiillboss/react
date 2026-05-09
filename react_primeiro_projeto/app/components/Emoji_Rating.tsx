type Props = {
    rating: number;
}

export const Emoji_Rating = ({ rating }: Props) => {
    if(rating >= 5) rating = 5;
    if(rating <= 0) rating = 0;

    const rateInt = Math.floor(rating);
    const rateDecimal = rating - rateInt;

    const fullstars = '⭐'.repeat(rateInt);
    const halfStar = rateDecimal >= 0.5 ? '⭐' : '';
    const emptyStars = '☆'.repeat(5 - rateInt - (halfStar ? 1 : 0));
 

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rating.toFixed(1)}</div>
            <div className="ml-3">{fullstars}{halfStar}{emptyStars}</div>

        </div>
    );
}