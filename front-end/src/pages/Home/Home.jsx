

import Feature from "../../components/Feature/Feature";
import Banner from "../../components/Banner/Banner";
import { dataFeatures } from "../../data/data"

function Home() {

    return (
        <div className="App">
            <Banner />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {dataFeatures.map((feature, index) => {
                    return <Feature data={feature} key={index} />
                })
                }
            </section>
        </div>
    );
}

export default Home;