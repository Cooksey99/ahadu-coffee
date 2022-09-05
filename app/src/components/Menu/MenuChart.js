import './MenuChart.css'

export default function MenuChart() {

    return (
        <>
            <section id="menu-chart">
                <div id="hot-drinks">
                    <h3>Hot</h3>
                    {/* only 8 oz */}
                    <p>Espresso</p>
                    <p>Macchiato</p>
                    <p>Ahadu Macchiato</p>
                    <p>Campana</p>

                    {/* all sizes */}
                    <p>Ahadu Special</p>
                    <p>Americano</p>
                    <p>Cappuncino</p>
                    <p>Latte</p>
                    <p>Mocha</p>
                    <p>Dirty Chai</p>
                </div>

                <div id="iced-drinks">
                    <h3>Cold</h3>
                    <p>Cold Brew</p>
                    <p>Iced Latte</p>
                    <p>Iced Mocha</p>
                    <p>Iced Dirty Chai</p>
                </div>

                <div id="blended-drinks">
                    <h3>Blended</h3>
                    <p>Ahadu Freeze</p>
                    <p>Frozen Latte</p>
                    <p>Blender</p>
                    <p>Fruit Smoothie</p>
                </div>

                <div id="add-ins">
                    <h4>Add-Ins</h4>
                    <div>
                        <h5>Milks</h5>
                        <p>Almond</p>
                        <p>Oat</p>
                        <p>Soy</p>
                        <p>Coconut</p>
                    </div>
                </div>
            </section>
        </>
    )
}