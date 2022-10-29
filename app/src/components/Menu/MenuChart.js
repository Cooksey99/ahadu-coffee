import './MenuChart.css';
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { MenuItem } from '@mui/material';


export default function MenuChart() {

    return (
        <>
            <section id='menu-container'>

                <div id="menu-chart">
                    <div id="hot-drinks">
                        <h2>Hot</h2>
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
                        <h2>Cold</h2>
                        <p>Cold Brew</p>
                        <p>Iced Latte</p>
                        <p>Iced Mocha</p>
                        <p>Iced Dirty Chai</p>
                    </div>

                    <div id="blended-drinks">
                        <h2>Blended</h2>
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
                </div>
                 
            </section>

            {/* <Grid2 container spacing={2} id='menu-container'>
                <Grid2 xs={8}>
                    <MenuItem>xs=8</MenuItem>
                </Grid2>
                <Grid2 xs={4}>
                    <MenuItem>xs=4</MenuItem>
                </Grid2>
                <Grid2 xs={4}>
                    <MenuItem>xs=4</MenuItem>
                </Grid2>
                <Grid2 xs={8}>
                    <MenuItem>xs=8</MenuItem>
                </Grid2>

            </Grid2> */}
        </>
    )
}
