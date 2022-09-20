import { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { Col} from "react-bootstrap";

export const Banner = () => {

    const [loopNum, setLoppNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        } ,delta)
        return () => {clearInterval(ticker)}; 
    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1)
   
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoppNum(loopNum+1);
            setDelta(500);
        }

    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1> {"Hi I'm Samet Aslan "} <span className="wrap"> {text} </span> </h1>
                        <p>My name is Abdulsamed Aslan. I'm Computer Engineering student at Gebze Teknik University. I try to improve myself in Web Development</p>
                        <button onClick={() => console.log('connect')}> Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}