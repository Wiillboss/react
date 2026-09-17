//explicando o grid responsivo do tailwindcss

export const Grid_Responsivo = () => {
    return (
        <div className="container mx-auto">
            <div className="p-3 rounded-md bg-gray-400">
                <div>
                    <div className=""></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="text-2xl font-bold mt-3">Título da Casa</div>
                <div className="flex gap-2 mt-3">
                    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Campo</div>
                    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Moderno</div>
                    <div className="rounded-full px-3 py-1 text-sm bg-green-700 text-white">Piscina</div>
                </div>
            </div>
        </div>
    );
}

