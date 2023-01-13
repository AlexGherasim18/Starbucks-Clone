import { DirectoryContainer } from "./directory.styles";
import { BUTTON_TYPE_CLASSES } from "../button.component";
import { lightGreen, starbucksGreen } from "../../variables.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import { CampaignInfo } from "./directory.styles";
const categories = [
  {
    id: 1,
    title: 'Win a thousand Stars',
    descr: `We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg',
    button: BUTTON_TYPE_CLASSES.lightGreen,
    buttonDesc: 'Play to win',
    backgroundColor: lightGreen
  },
  {
    id: 2,
    title: 'Perfectly pumpkin',
    descr: `Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81152.jpg',
    button: BUTTON_TYPE_CLASSES.darkGreen,
    buttonDesc: 'Order now',
    backgroundColor: starbucksGreen
  },
  {
    id: 3,
    title: 'Layers of baked apple yum',
    descr: `Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79282.jpg',
    button: BUTTON_TYPE_CLASSES.darkGreen,
    buttonDesc: 'Learn more',
    backgroundColor: starbucksGreen
  }
]

const Directory = () => {
  return (

      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category}></DirectoryItem>
        ))}
        <CampaignInfo>
          <p>*NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To enter and for Official Rules, visit <a href="/">starbucksstardays.com</a>.</p>
          <p>Entrants can receive a maximum of 2 entries per day.</p>
          <p>**Excludes taxes and gratuities. At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit <a href="/">deltastarbucks.com/terms</a></p>
        </CampaignInfo>
      </DirectoryContainer>

  )
};

export default Directory;