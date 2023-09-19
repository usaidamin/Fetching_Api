import {useEffect , useState } from 'react'
import './App.css'
import Cards from "./components/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  
  let [count,setCount] = useState(0)
  let [toggle, setToggle] = useState(true)
  const [data, setData] = useState([]);

  const callProductApi = () => {
    console.log("callProductApi");

    fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((res) => {
      setData(res);
    })
    .catch((error) => {
      console.log("error", error);
    });
  }

  useEffect(() => {
    callProductApi();
  }, []);

  return (
    <>
    <Cards />
    <Container fluid>
    <Row>
      {data.map((products, index) => {
  
        return (
          <Col>
          <Card style={{ width: '18rem' }} key={products.id} className='card' height={"500"}>
      <Card.Img variant="top" src={products.image} width={"250"} height={"250"} />
      <Card.Body>
        <Card.Title>{products.title}</Card.Title>
        <Card.Text>
        price: {products.price}
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
    </Col>
        );
      })}
      </Row>
      </Container>
    </>
  )
}

export default App
