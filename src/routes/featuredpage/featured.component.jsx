import { Title, CenterItems, GridLayout } from "./featured.styles";
import { BUTTON_TYPE_CLASSES } from "../../components/button.component";
import { errorRed, trueGreen } from "../../variables.styles";
import GridItem from "./featured-items.component";

const categories = [
  {
    id: 1,
    title: 'Iced Sugar Cookie Almondmilk Latte',
    descr: `Starbucks® Blonde Espresso Roast is blended with sugar cookie flavors and almondmilk on ice. For the finishing touch: red and green sprinkles.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81250.jpg',
    button: BUTTON_TYPE_CLASSES.errorRed,
    buttonDesc: 'Order now',
    backgroundColor: errorRed
  },
  {
    id: 2,
    title: 'Caramel Brulée Latte',
    descr: `Espresso, steamed milk and caramel brulée sauce are finished with whipped cream and a crunchy caramel brulée topping.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81251.jpg',
    button: BUTTON_TYPE_CLASSES.errorRed,
    buttonDesc: 'Order now',
    backgroundColor: errorRed
  },
  {
    id: 3,
    title: 'Peppermint Mocha',
    descr: `A blend of espresso, steamed milk, peppermint-flavored syrup and mocha sauce gets topped with whipped cream and dark-chocolate curls.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81248.jpg',
    button: BUTTON_TYPE_CLASSES.trueGreen,
    buttonDesc: 'Order now',
    backgroundColor: trueGreen
  },
  {
    id: 4,
    title: 'Irish Cream Cold Brew',
    descr: `Starbucks® Cold Brew with Irish cream–flavored syrup is finished with vanilla-flavored sweet cream cold foam and a strike of cocoa powder..`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81249.jpg',
    button: BUTTON_TYPE_CLASSES.trueGreen,
    buttonDesc: 'Order now',
    backgroundColor: trueGreen
  },
  {
    id: 5,
    title: 'Toasted White Chocolate Mocha Frappuccino® blended beverage',
    descr: `Coffee, milk and ice are blended with caramelized white chocolate flavors and topped with whipped cream and red sugar sparkles.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82236.jpg',
    button: BUTTON_TYPE_CLASSES.errorRed,
    buttonDesc: 'Order now',
    backgroundColor: errorRed
  },
  {
    id: 6,
    title: 'Signature Hot Chocolate',
    descr: `A holiday classic with steamed milk, whipped cream and chocolaty drizzle.`,
    imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-82237.jpg',
    button: BUTTON_TYPE_CLASSES.errorRed,
    buttonDesc: 'Order now',
    backgroundColor: errorRed
  },
]
const Featured = () => {
  return (
    <CenterItems>
      <Title>Merry everything</Title>
      <GridLayout>
      {categories.map((category) => (
          <GridItem key={category.id} category={category}></GridItem>
        ))}
      </GridLayout>
    </CenterItems>
  )
};

export default Featured;