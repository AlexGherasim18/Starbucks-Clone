import { Fragment } from "react";
import { SubNav } from "./rewards.styles";
import Button from "../../components/button.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { Content, LinkButton, InstructionsContainer, Title, Instructions, Steps, RewardsContainer, RewardsByPoints, RewardLevel, Reward, RewardContent, RewardButton, RewardsProsContainer, ProsContainer, Benefit, ImageContainer, CardContent, PayingContainer, PayTitle, FlexContainer, FlexItemOne, FlexItem, FlexImgContainer, FlexDiv, StarCodesContainer, InputBox, CustomerServ, TermsGridBox, GridItem } from "./rewards.styles";
import Popup from "../../components/pop-up/popup.components";
import { useState } from "react";
import { accentGreen, coolNeutral } from "../../variables.styles";
import FormInput from "../../components/form-input/form-input.component";

const buttonsArr = [
  {
    id:"0",
    number: 25,
    star: "★"
  },
  {
    id:"1",
    number: 50,
    star: "★"
  },
  {
    id:"2",
    number: 150,
    star: "★"
  },
  {
    id:"3",
    number: 200,
    star: "★"
  },
  {
    id:"4",
    number: 400,
    star: "★"
  }
]

const rewardsArr = [
  {
    id: "0",
    image: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png",
    title: "Customize your drink",
    paragraph: "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
  },
  {
    id: "1",
    image: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png",
    title: "Brewed hot coffee, bakery item or hot tea",
    paragraph: "Pair coffee cake or an almond croissant with your fresh cup of hot brew."
  },
  {
    id: "2",
    image: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png",
    title: "Handcrafted drink, hot breakfast or parfait",
    paragraph: "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink."
  },
  {
    id: "3",
    image: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
    title: "Salad, sandwich or protein box",
    paragraph: "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box."
  },
  {
    id: "4",
    image: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
    title: "Select merchandise or at-home coffee",
    paragraph: "Take home a signature cup, a bag of coffee or your choice of select coffee accessories."
  },
];

const popupCategories = [
  {
    id: "category-1",
    title: "Fun freebies",
    pages: [
      {
        pageNumber: 1,
        image:'https://www.starbucks.com/weblx/images/rewards/benefits/1A.jpg',
        pageTitle: 'Free food, drinks & more',
        pageDesc: 'Redeem your Stars for favorites like a handcrafted cold brew, protein box or even a coffee tumbler.'
      },
      {
        pageNumber: 2,
        image:'https://www.starbucks.com/weblx/images/rewards/benefits/1B.jpg',
        pageTitle: 'Complimentary birthday treat',
        pageDesc: 'Every year on your birthday get a free drink or food item of your choice.'
      },
      {
        pageNumber: 3,
        image:'https://www.starbucks.com/weblx/images/rewards/benefits/1C.jpg',
        pageTitle: 'Brewed coffee & tea refills on us',
        pageDesc: 'More Caffè Verona® Blend, please. We’re happy to refill your hot cup while you’re in the store. Just ask.'
      },
    ]
  },
  {
    id: "category-2",
    title: "Order & pay ahead",
    pages: [
      {
        pageNumber: 1,
        image:'https://www.starbucks.com/weblx/images/rewards/benefits/2A.jpg',
        pageTitle: 'Tap, go.',
        pageDesc: 'Select your menu items in the app along with your store location. Then tell the barista your name when you swing by the pickup area to grab your order.'
      },
      {
        pageNumber: 2,
        image:'https://www.starbucks.com/weblx/images/rewards/benefits/2B.jpg',
        pageTitle: 'Just for you',
        pageDesc: 'Our app lets you customize your order and track an estimated pickup time. Make sure to save your favorites so they’re all ready for your next order.'
      },
    ]
  },
  {
    id: "category-3",
    title: "Get to free faster",
    pages: [
      {
        pageNumber: 1,
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/3A.jpg',
        pageTitle: 'Bonus Star challenges',
        pageDesc: 'Rack up the Stars with regular opportunities to get rewarded for what you love.'
      },
      {
        pageNumber: 2,
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/3B.jpg',
        pageTitle: 'Double Star Days',
        pageDesc: 'Watch for those special days where you’ll earn twice the Stars on almost everything.'
      },
      {
        pageNumber: 3,
        image: 'https://www.starbucks.com/weblx/images/rewards/benefits/3C.jpg',
        pageTitle: 'Member-only games',
        pageDesc: 'Play for a chance to win exclusive prizes, free food and drinks, and more.'
      },
    ]
  }
]

const defaultSubmitForm = {
  text: ''
}

const Rewards = () => {
  const [current, setCurrent] = useState(buttonsArr[0].id)
  const [buttonPopup, setButtonPopup] = useState('');
  
  const myStyle = {
    width: "110px",
    height: "32px",
    boxShadow: "none",
    fontSize: "1.6rem"
  };

  const [submitForm, setSubmitForm] = useState(defaultSubmitForm);
  const {text} = submitForm;

  const resetSubmitForm = () => {
    setSubmitForm(defaultSubmitForm)
  };

  const handleSubmit = (event) => {
    event.prevenDefault();
    resetSubmitForm()
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setSubmitForm({...submitForm, [name]: value})
  }

  return (
    <Fragment>
      <SubNav>
        <h2>STARBUCKS® REWARDS</h2>
      </SubNav>
      <Fragment>
        <Content>
          <h2>FREE COFFEE IS A TAP AWAY</h2>
          <div>Join now to start earning Rewards.</div>
          <LinkButton to="/sign-up"><Button buttonType={BUTTON_TYPE_CLASSES.signUpButton} style={myStyle}>Join Now</Button></LinkButton>
          <div>Or join in the app for the best experience</div>
        </Content>
        <InstructionsContainer>
          <Title>
            <h2>Getting started is easy</h2>
            <p>Earn Stars and get rewarded in a few easy steps</p>
          </Title>
          <Instructions>
            <Steps>
              <div>
                <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="step-one" />
              </div>
              <h3>Create an account</h3>
              <p>To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits.</p>
            </Steps>

            <Steps>
              <div>
                <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="step-two" />
              </div>
              <h3>Order and pay how you’d like</h3>
              <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
            </Steps>

            <Steps>
              <div>
                <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="step-three" />
              </div>
              <h3>Earn Stars, get Rewards</h3>
              <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </Steps>
          </Instructions>
        </InstructionsContainer>

        <RewardsContainer>
          <Title><h2>Get your favorites for free</h2></Title>
          <RewardsByPoints>
            <RewardLevel>
              {/* <RewardButton id="0" value='false' onClick={handleClick}><span>25<span>★</span></span></RewardButton> */}
              {buttonsArr.map(button => (
                <RewardButton key={button.id} onClick={() => setCurrent(button.id)} style={{borderBottom: current === button.id ? `4px solid ${accentGreen}` : 'none'}}><span>{button.number}<span>{button.star}</span></span></RewardButton>
              ))}
            </RewardLevel>
            <Reward>
                {rewardsArr.map(reward => (
                  current === reward.id && <RewardContent key={reward.id}>
                  <img src={reward.image} alt="reward"/>
                  <div>
                    <h3>{reward.title}</h3>
                    <p>{reward.paragraph}</p>
                  </div>
                </RewardContent>
                ))}
            </Reward>
          </RewardsByPoints>
        </RewardsContainer>
      </Fragment>

      <Fragment>
        <RewardsProsContainer>
          <Title>
            <h2>Endless Extras</h2>
            <p style={{width: "70%"}}>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
          </Title>
          <ProsContainer>
            <Benefit>
              <ImageContainer>
                <img onClick={() => setButtonPopup('category-1')} src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="benefit" />
              </ImageContainer>
              <CardContent>
                <h3>Fun freebies</h3>
                <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                <button onClick={() => setButtonPopup('category-1')}>Learn More</button>
              </CardContent>
            </Benefit>

            <Benefit>
              <ImageContainer>
                <img onClick={() => setButtonPopup('category-2')} src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="benefit" />
              </ImageContainer>
              <CardContent>
                <h3>Order & pay ahead</h3>
                <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                <button onClick={() => setButtonPopup('category-2')}>Learn More</button>
              </CardContent>
            </Benefit>

            <Benefit>
              <ImageContainer>
                <img onClick={() => setButtonPopup('category-3')} src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="benefit" />
              </ImageContainer>
              <CardContent>
                <h3>Get to free faster</h3>
                <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                <button onClick={() => setButtonPopup('category-3')}>Learn More</button>
              </CardContent>
            </Benefit>
          </ProsContainer>
        </RewardsProsContainer>
        {popupCategories.map(category => (
          buttonPopup === category.id && <Popup setTrigger={setButtonPopup} category={category}></Popup>
        ))}
      </Fragment>

      <Fragment>
        <PayingContainer>
          <PayTitle>
            <h2>Cash or card, you earn Stars</h2>
            <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
          </PayTitle>

          <FlexContainer>
            <FlexItemOne>
              <h4>1★ per dollar</h4>
              <p>Pay as you go</p>
            </FlexItemOne>

            <FlexItem>
              <FlexImgContainer>
                <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="flex-img" />
              </FlexImgContainer>
              <FlexDiv>
                <h4>Scan and pay separately</h4>
                <p>Use cash or credit/debit card at the register.</p>
              </FlexDiv>
            </FlexItem>

            <FlexItem>
              <FlexImgContainer>
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="flex-img" />
                </FlexImgContainer>
                <FlexDiv>
                  <h4>Save payment in the app</h4>
                  <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                </FlexDiv>
            </FlexItem>
          </FlexContainer>

          <FlexContainer>
            <FlexItemOne>
              <h4>2★ per dollar</h4>
              <p>Add funds in the app</p>
            </FlexItemOne>

            <FlexItem>
              <FlexImgContainer>
                <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="flex-img" />
              </FlexImgContainer>
              <FlexDiv>
                <h4>Preload</h4>
                <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
              </FlexDiv>
            </FlexItem>

            <FlexItem>
              <FlexImgContainer>
                  <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="flex-img" />
                </FlexImgContainer>
                <FlexDiv>
                  <h4>Register your gift card</h4>
                  <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                </FlexDiv>
            </FlexItem>
          </FlexContainer>
        </PayingContainer>
      </Fragment>

      <Fragment>
        <StarCodesContainer>
          <InputBox>
            <h2>Star Codes</h2>
            <p>Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
            <form onSubmit={handleSubmit}>
              <FormInput type="text" label="* Enter your Star Code" name="text" value={text} onChange={handleChange}></FormInput>
              <div>
                <Button style={{fontSize: "1.6rem"}} type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Submit</Button>
              </div>
            </form>
          </InputBox>
          <CustomerServ>
            <h2>Questions?</h2>
            <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions right over here opens in new window.</p>
          </CustomerServ>
        </StarCodesContainer>
      </Fragment>
      <div style={{background: `${coolNeutral}`}}>
          <TermsGridBox>
            <p>At participating stores. Restrictions apply.</p>

            <GridItem>
              <h3>EARNING STARS</h3>
              <p>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</p>
              <p>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
              <p>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
            </GridItem>

            <GridItem>
              <h3>TERMS OF USE</h3>
              <p>For full program details visit starbucks.com/rewards/terms opens in new window.</p>
              <p>* Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
              <p>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the  Starbucks Store Locator opens in new window and search for locations honoring “Redeem Rewards”.</p>
              <p>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
            </GridItem>

            <GridItem>
              <h3>BENEFITS</h3>
              <p>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
            </GridItem>

            <GridItem>
              <h3>REDEEMING REWARDS</h3>
              <p>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. Not all stores honor tiered Rewards. Select stores redeem 150 Stars for free food or drink items only.</p>
            </GridItem>
          </TermsGridBox>
      </div>
    </Fragment>  
  )
};

export default Rewards;