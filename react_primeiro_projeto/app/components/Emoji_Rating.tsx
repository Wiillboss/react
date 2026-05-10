type Props = {
    rating: number;
}

export const Emoji_Rating = ({ rating }: Props) => {
    if(rating >= 5) rating = 5;
    if(rating <= 0) rating = 0;

    //mostrando cinco emojis diferentes para cada avaliação, mas não é a melhor forma de fazer isso, pois se a avaliação for 4.5, por exemplo, ele vai mostrar 4 emojis e meio, e não 5 emojis diferentes.
    const emojis = ['😡', '😞', '😐', '😊', '😍'];

    const rateInt = Math.floor(rating);
    const rateDecimal = rating - rateInt;
    //colocando um emoji para cada avaliação, mas se a avaliação for 4.5, por exemplo, ele vai mostrar 4 emojis e meio, e não 5 emojis diferentes.
    const stars = emojis[rateInt - 1] || emojis[0];
    const halfStar = rateDecimal >= 0.5 ? '⭐' : '';
    const emptyStars = ''.repeat(5 - rateInt - (halfStar ? 1 : 0));
    // const fullstars = '⭐'.repeat(rateInt);
    // const halfStar = rateDecimal >= 0.5 ? '⭐' : '';
    // const emptyStars = ''.repeat(5 - rateInt - (halfStar ? 1 : 0));
 

    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rating.toFixed(1)}</div>
            <div className="ml-3">{stars}{halfStar}{emptyStars}</div>

        </div>
    );
}