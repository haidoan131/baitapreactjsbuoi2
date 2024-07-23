import React  ,{useState,useEffect}from 'react'
import CardTour from './CardTour'
import { Tabs } from 'antd';
import "./cssbaitap.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

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
export default function BaiTap() {
    const [activeTab, setActiveTab] = useState('1');
    useEffect(() => {
      AOS.init({
        duration: 1000
      });
      AOS.refresh();
    }, [activeTab]);
    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };
    const listTour = [
     
   
    ];


    const [list,setList]=useState([
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-1.png",
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-2.png",
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-3.png",
special:true
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "New York",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-4.png",
        },
        {
            id: 5,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "London",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-5.png",
        },
        {
            id: 6,
            title: "Essence of Vietnam South to North",
            category: "London",
            price: 167.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-6.png",
special:true
        },
        {
            id: 7,
            title: "Osa Peninsula to Dominical City Tour",
            category: "London",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-7.png",
        },
        {
            id: 8,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "London",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-8.png",
        },
        {
            id: 9,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Tokyo",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-9.png",
special:true
        },
        {
            id: 10,
            title: "Essence of Vietnam South to North",
            category: "Tokyo",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-10.png",
        },
        {
            id: 11,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Tokyo",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-11.png",
        },
        {
            id: 12,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Tokyo",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-12.png",
special:true
        },
        {
            id: 13,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Los Angeles",
            price: 149.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-13.png",
        },
        {
            id: 14,
            title: "Essence of Vietnam South to North",
            category: "Los Angeles",
            price: 117.19,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-14.png",
        },
        {
            id: 15,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Los Angeles",
            price: 134.99,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-15.png",
        },
        {
            id: 16,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise",
            category: "Los Angeles",
            price: 50.15,
            img: "https://react-bootstrap-lovat.vercel.app/img/tour-16.png",
        },

    ])
  

   
  return (
    <>
    <div>
        {/* jxs nen dungf {} */}
     

        <Nav tabs >
        <NavItem>
          <NavLink
            className={activeTab === '1' ? 'active ' : ''}
            onClick={() => toggleTab('1')}
          >
            New York
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === '2' ? 'active ' : ''}
            onClick={() => toggleTab('2')}
          >
           London
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === '3' ? 'active' : ''}
            onClick={() => toggleTab('3')}
          >
          Tokyo
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={activeTab === '4' ? 'active' : ''}
            onClick={() => toggleTab('4')}
          >
          Los Angeles
          </NavLink>
        </NavItem>
      </Nav>




      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" data-aos={activeTab === '1' ? 'fade-up' : ''} >
          <Row>
            <Col sm="12">
             
         <Container>
            <Row >
                
                {
                list
                .filter((word) => word.category === "New York").map((item,index)=>(<Col mb-4 col-lg-3 col-md-6 ><CardTour   key={index} pro={item} /></Col>))
      
              }

            </Row>
        </Container>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2" data-aos={activeTab === '2' ? 'fade-up' : ''}>
        <Row>
            <Col sm="12">
             
         <Container>
            <Row>
            {
                list
                .filter((word) => word.category === "London").map((item,index)=>(<Col mb-4 col-lg-3 col-md-6 ><CardTour key={index} pro={item} /></Col>))
      
              }

            </Row>
        </Container>
            </Col>
          </Row>
            
        </TabPane>


          <TabPane tabId="3" data-aos={activeTab === '3' ? 'fade-up' : ''}>
        <Row>
            <Col sm="12">
             
         <Container>
            <Row>
            {
                list
                .filter((word) => word.category === "Tokyo").map((item,index)=>(<Col mb-4 col-lg-3 col-md-6 ><CardTour key={index} pro={item} /></Col>))
      
              }

            </Row>
        </Container>
            </Col>
          </Row>
            
        </TabPane>


        <TabPane tabId="4" data-aos={activeTab === '4' ? 'fade-up' : ''}>
        <Row>
            <Col sm="12">
             
         <Container>
            <Row>
            {
                list
                .filter((word) => word.category === "Los Angeles").map((item,index)=>(<Col mb-4 col-lg-3 col-md-6 ><CardTour key={index} pro={item} /></Col>))
      
              }

            </Row>
        </Container>
            </Col>
          </Row>
            
        </TabPane>
      </TabContent>
    




   

    </div>
    </>
  )
}
