import { useState } from "react";


export default function MenuChart() {

    const [page, setPage] = useState([]);

    const hotList = [
        "Espresso",
        "Macchiato",
        "Ahadu Macchiato",
        "Campana",
        "Ahadu Special",
        "Americano",
        "Cappucino",
        "Latte",
        "Mocha",
        "Dirty Chai"
      ];
      const icedList = [
        "Cold Brew",
        "Iced Latte",
        "Iced Mocha",
        "Iced Dirty Chai"
      ];
    const bakeryList = [
        "Red Velvet Muffins",
        "Cranberry Orange Muffins",
        "Chocolate Chip Muffins",
        "Healthy Harvest Muffins",
        "Blueberry Muffins",
        "Banana Nut Muffins",
        "Gooey Butter Cookies",
        "Plain Bagels",
        "Everything Bagels",
        "Blueberry Bagels",
        "Cinnamon Raisin Bagels",
        "Chocolate Chip Supreme Cookie",
        "Chocolate Chip Coffee Cake"
      ];
      const blendedList = [
        "Ahadu Freeze",
        "Frozen Latte",
        "Blender",
        "Fruit Smoothie"
      ];
      const coffeeList = [
        "Drip",
        "Cafe Au Lait",
        "Shot In The Dark",
        "Pour Over",
        "Chemex",
        "French Press"
      ];
      const nonCoffeeList = [
        "Homestyle Tea",
        "Italian Soda",
        "Chocolate Milk",
        "Iced/Hot Tea",
        "London Fog",
        "Chai Tea Latte (Hot or Iced)",
        "Hot Chocolate"
      ];
      const smoothiesList = [
        "Strawberry",
        "Strawberry Banana",
        "Peach",
        "Raspberry",
        "Blueberry Pomegranate",
        "Wild Berry",
        "Mango"
      ];
      const teaList = [
        "Black",
        "Green",
        "Earl Grey",
        "Lemongrass",
        "Ginger Peach",
        "Mango Ceylon",
        "Ginger Peach Decaf",
        "Mint Decaf",
        "Cranberry Blood Orange",
        "Passion Fruit",
        "Vanilla Almond",
        "Caramel Apple Decaf",
        "House Chai",
        "More Decaf Options..."
      ];
      const bottledList = [
        "Smart Water",
        "Jarritos (Mandarin, Guava, Pineapple, Lime)",
        "Coca-Cola",
        "Vitamin Water (XXX)",
        "Vitamin Water Zero (Squeezed Lemonade)"
      ];
      const addOnsList = [
        "Milk - Almond, Oat, Skim, Soy Coconut",
        "Sauce - Chocolate, Sugar Free Chocolate, White Chocolate, Caramel",
        "Syrup - Vanilla, Caramel, Almond, Coconut, Hazelnut, Irish Cream, Almond Roca, Brown Sugar & Cinnamon, Amaretto, Cherry, Tangerine, Blackberry, Raspberry, Sugar Free Vanilla, Strawberry, Peach, Sugar Free Caramel, Sugar Free Chocolate",
        "Extra Espresso (2 Shots)"
        ];

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
                            onClick={() => setPage(icedList)}>Cold</button>
                        <button className="cust-button"
                            onClick={() => setPage(blendedList)}>Blended</button>
                        <button className="cust-button"
                            onClick={() => setPage(coffeeList)}>Coffee</button>
                        <button className="cust-button"
                            onClick={() => setPage(nonCoffeeList)}>Non-Coffee</button>
                        <button className="cust-button"
                            onClick={() => setPage(smoothiesList)}>Smoothies</button>
                        <button className="cust-button"
                            onClick={() => setPage(teaList)}>Tea</button>
                        <button className="cust-button"
                            onClick={() => setPage(bottledList)}>Bottled</button>
                        <button className="cust-button"
                            onClick={() => setPage(addOnsList)}>Add-ons</button>
                        <button className="cust-button"
                            onClick={() => setPage(bakeryList)}>Bakery</button>
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