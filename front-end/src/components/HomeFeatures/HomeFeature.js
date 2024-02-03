import FeatureItem from "../FeatureItem/FeatureItem";
import IconChat from "../../assets/images/icon-chat.png";
import IconMoney from "../../assets/images/icon-money.png";
import IconSecurity from "../../assets/images/icon-security.png";


function HomeFeature() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc={IconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        iconSrc={IconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        iconSrc={IconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default HomeFeature;