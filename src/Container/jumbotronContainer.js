import Jumpotron from "../Component/jumbotron/index";
import JumboData from "../fexture/jumbo.json";

const JumbotronContaienr = function () {
  return (
    <>
      {JumboData.map((item) => {
        return (
          <Jumpotron key={item.id} direction={item.direction}>
            <Jumpotron.Pane>
              <Jumpotron.Title>{item.title}</Jumpotron.Title>
              <Jumpotron.Subtitle>{item.subTitle}</Jumpotron.Subtitle>
            </Jumpotron.Pane>
            <Jumpotron.Pane>
              <Jumpotron.Image src={item.image} alt={item.alt} />
            </Jumpotron.Pane>
          </Jumpotron>
        );
      })}
    </>
  );
};
export default JumbotronContaienr;
