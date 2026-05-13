type Props = {
    label: string;
    onclick?: () => void;
}   

export const Custom_Button = ({ label, onclick }: Props) => {

    return (
        <button onClick={onclick} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 m-3">
            {label}
        </button>
    );
}
    
