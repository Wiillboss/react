export const Modal = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-md">
                {children}
            </div>
        </div>
    );
}