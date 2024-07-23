import  "./hook.css"
import React,{useState,useRef} from "react"

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
    Container,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink ,TabContent ,TabPane, Card, CardTitle ,CardText
  } from 'reactstrap';
export default function Hook1(){
    const [flag,setFlag]=useState(true)
    const sidebarRef=useRef()
    const [count,setCount]=useState(10)

    const hanhdle_count =()=>{

        // prestate render nhieu lan
        setCount(count -1)
        setCount(prestate=>prestate-1)
        setCount(prestate=>prestate-1)
    }
    

    const [modal, setModal] = useState(false);
    const [unmountOnClose, setUnmountOnClose] = useState(true);

    const toggle = () => setModal(!modal);
    const changeUnmountOnClose = (e) => {
        let { value } = e.target;
        setUnmountOnClose(JSON.parse(value));
      };




    return (
        <>

        
        <h1>{count}</h1>
        <button onClick={hanhdle_count}>count down</button>
        <div className={flag?"hook5 ":"hook5 active" }> 
            <h1 >hook 5</h1>
            <p>Flag : {flag?"true":"flase"}</p>
           
        </div>
        <div  className="meo" ref={sidebarRef}>


        </div>

     <button onClick={()=>{
        
        setFlag(!flag)
        sidebarRef.current.classList.toggle("active")
        }}>change flag</button>




<div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="unmountOnClose">UnmountOnClose value</Label>{' '}
          <Input
            type="select"
            name="unmountOnClose"
            id="unmountOnClose"
            onChange={changeUnmountOnClose}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </Input>
        </FormGroup>{' '}
        <Button color="danger" onClick={toggle}>
          Click Me
        </Button>
      </Form>
      <Modal isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>


        <Container>
            <Row>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>
                <Col lg={3} md={4} sm={6} xs={6} className="border p-5">Row</Col>

            </Row>


        </Container>

    </div>

    <div>
  <Nav tabs>
    <NavItem>
      <NavLink
        className="active"
        onClick={function noRefCheck(){}}
      >
        Tab1
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        className=""
        onClick={function noRefCheck(){}}
      >
        More Tabs
      </NavLink>
    </NavItem>
  </Nav>
  <TabContent activeTab="1">
    <TabPane tabId="1">
      <Row>
        <Col sm="12">
          <h4>
            Tab 1 Contents
          </h4>
        </Col>
      </Row>
    </TabPane>
    <TabPane tabId="2">
      <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Go somewhere
            </Button>
          </Card>
        </Col>
        <Col sm="6">
          <Card body>
            <CardTitle>
              Special Title Treatment
            </CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Go somewhere
            </Button>
          </Card>
        </Col>
      </Row>
    </TabPane>
  </TabContent>
</div>






        </>
    )
    
}