import { useState } from "react";


export default function MenuChart() {

    const [page, setPage] = useState([]);

    const hotList = ['hot1', 'hot2', 'hot3'];
    const coldList = ['cold1', 'cold2', 'cold3'];

    const calculatePage = () => {
        return page.map((item, index) => (
            <p key={index}>{index}: {item}</p>
        ))
    };




    return (
        <>
            <section className="w-full h-96 bg-red-400">
                <h1 className="flex justify-center">Our Menu</h1>
                
                <div className="px-6">
                    <div className="flex justify-around gap-3">
                        <button className="cust-button"
                            onClick={() => setPage(hotList)}>Hot</button>
                        <button className="cust-button"
                            onClick={() => setPage(coldList)}>Cold</button>
                        <button className="cust-button">Blended</button>
                        <button className="cust-button">Coffee</button>
                        <button className="cust-button">Non-Coffee</button>
                        <button className="cust-button">Smoothies</button>
                        <button className="cust-button">Tea</button>
                        <button className="cust-button">Bottled</button>
                        <button className="cust-button">Add-ons</button>
                        <button className="cust-button">Bakery</button>
                    </div>
                    <div className="bg-slate-300 w-full h-full">
                        <h1>LIST</h1>
                        {calculatePage()}
                    </div>
                </div>
            </section>
        </>
    )
};