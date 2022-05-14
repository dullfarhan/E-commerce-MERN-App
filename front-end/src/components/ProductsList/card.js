import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../logo.svg";
import { useNavigate } from "react-router";
import { Base64 } from "js-base64";
export default function CardComp({ product, index }) {
  let navigate = useNavigate();
  const detailsRoute = "/detalis/";
  const cardClick = () => navigate("detail/" + _id);
  let sr = "./../../img/" + index + ".jpg";
  console.log(sr);
  const { price, _id, categories, title, desc, img } = product;
  let image = "";
  if (img) {
    image = "data:image/png;base64," + img;
  } else {
    image = logo;
  }
  //let ima = Base64.atob(img);
  // const featured_image = images.length > 0 ? images[0].src : "";
  return (
    <Card style={{ width: "300px", margin: 15 }} onClick={cardClick}>
      <img style={{ width: "100%", height: "100%" }} src={image} alt={logo} />
      <div style={{ backgroundColor: "rgba(242, 237, 190, 0.33)", padding: 5 }}>
        <Row>
          <h5 style={{ textAlign: "center" }} strong>
            {title}
          </h5>
        </Row>
        <Row>
          <p>{categories}</p>
          <p type="secondary" delete={0}>
            {`Rs: ${price}`}
          </p>
        </Row>
      </div>
    </Card>
  );
}
