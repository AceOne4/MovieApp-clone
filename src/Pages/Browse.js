import BrowseContainer from "../Container/BrowseContainer";
import useContent from "../hook/useContent";
import selectionMap from "../utils/selectionMap";
const Browse = function () {
  const { series } = useContent("series");
  const { films } = useContent("films");
  //creating the slide after we arrange em
  const slide = selectionMap({ series, films });

  return <BrowseContainer slides={slide} />;
};
export default Browse;
