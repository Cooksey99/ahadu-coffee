export default function Footer() {

    return (
        <>
            <footer className="w-full h-48 flex justify-between items-center text-white bg-black px-12">
                <div className="contact-links flex flex-col gap-4">
                    <ul className='sky-100'>Call: (816)600-6068</ul>
                    <ul>Email: ahaducoffee@gmail.com</ul>
                    <ul>Reach out to us on Facebook</ul>
                </div>
                <div>
                    <h3 className="text-lg text-center">FOLLOW US ON SOCIAL!</h3>

                    <div className="flex justify-center">
                        <a target="_blank" href="https://www.instagram.com/ahaducoffee/?hl=en">
                            <img className="w-12 m-auto" src="./img/Instagram-logo.png" alt="Instagram link" /></a>
                        <a target="_blank" href="https://www.facebook.com/pages/category/Coffee-shop/Ahadu-Coffee-903720773161418/">
                            <img className="w-12 m-auto" src="./img/facebook-logo.png" alt="Facebook link" /></a>
                    </div>

                </div>
                <p>Copyright&copy; 2023 Ahadu Coffee</p>
            </footer>
        </>
    )
}
