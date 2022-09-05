import './WhatWeOffer.css';

export default function WhatWeOffer() {


    return (
        <>
            <section className="what-we-offer">
                <div className="offer-content">
                    <h1>What We Offer</h1>
                    <div className='offer-info'>
                        <ul>
                            <h3 className="fa fa-wifi font-size: 38px"> Fast and Free Wifi</h3>
                            <p>Come work or surf at Ahadu, with super fast 5G WiFi.</p>
                        </ul>
                        <ul>
                            <h3>Convenient Location</h3>
                        </ul>
                        <ul>
                            <h3>Free Parking</h3>
                            <p>There's always plenty of parking available for our cozy shop. We're also working on a drive-thru window...coming soon!</p>
                        </ul>
                        <ul className='ul-image'>
                            <img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/coffee-cup.png" alt="coffee" />
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
