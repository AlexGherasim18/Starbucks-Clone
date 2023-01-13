import { Fragment } from "react";
import { CenterItems } from "../navigation/navigation.styles";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <Fragment>
      <CenterItems>
        <Directory />
      </CenterItems>
    </Fragment>
  )
}

export default Home;