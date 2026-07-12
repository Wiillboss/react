





type Props = {
    children: React.ReactNode;
}



export const Card = ({ children }: Props) => {
    return (
        <div className="w-96 h-40 bg-green-600 text-black p-3 text-3xl text-center">
            {children}
        </div>
    );
}