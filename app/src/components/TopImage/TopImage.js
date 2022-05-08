import './TopImage.css'

export default function TopImage() {


    return (
        <>
            <section id='top-image'>
                <div className="back"><img src="https://raw.githubusercontent.com/Cooksey99/ahadu-coffee/master/img/cups-glasses.jpg" />
                    <main className="intro">
                        <div className='intro-background'>
                            <h1>The flavors of the world...<br />right aroung the corner</h1>
                            <p>Ahadu is a new coffee shop in Lee's Summit offering intriguing blends of both coffee and people.</p>
                            {/* <button>Learn More</button> */}
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}
