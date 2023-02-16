import React from 'react'
import HeroInternal from './HeroInternal'
import Container from 'react-bootstrap/Container'
import "../css/Recipe.css";
import kimsandra from "../images/kimsandra.png"
import wiebke from "../images/wiebke.png"
import rodrigo from "../images/rodrigo.png"
import ahmet from "../images/ahmet.png"


function About() {
  return (
    <div>
      <HeroInternal />
      <Container>
        <div className='post-header background_0'>
        <h2 className="lora-font">About us</h2>
        <p className="lora-font">We are 4 Students from WBS Coding School, and we were happy to work together on this React Project usind Contentful as a Headless CMS Solution.</p>
        <div className='row'>
          <div className='col-xs-12 col-md-6 col-lg-3 text-center'>
            <img src={kimsandra} alt="Kimsandra" className='thumbnail' />
            <p className='names'>Sandra</p>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-3  text-center'>
          <img src={wiebke} alt="Wiebke" className='thumbnail' />
          <p className='names'>Wiebke</p>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-3  text-center'>
          <img src={rodrigo} alt="Rodrigo" className='thumbnail' />
          <p className='names'>Rodrigo</p>
          </div>
          <div className='col-xs-12 col-md-6 col-lg-3  text-center'>
          <img src={ahmet} alt="Ahmet" className='thumbnail' />
          <p className='names'>Ahmet</p>
          </div>
        </div>
        <br /><br />
        <div className='row text-center'>
          <img src="https://giffiles.alphacoders.com/150/150759.gif" alt="Candle" />
          
          <h2 className='mt-3'>In respect to our Brothers and Sisters in Turkey:</h2>
          <p>
          To the families who have lost loved ones in the devastating earthquake in Turkey, our hearts go out to you during this incredibly difficult time. We offer our deepest condolences to you and your community, and we stand in solidarity with you as you mourn your losses.</p>

          <p>We know that no words can ease the pain of losing a family member or friend. The loss of a loved one is a profound and lasting sorrow that can never be fully healed. But we hope that you can find some comfort in knowing that you are not alone in your grief. The entire world is standing with you, offering support, prayers, and love during this heartbreaking time.</p>

          <p>We also want to express our admiration for your strength and resilience in the face of such a devastating tragedy. We know that the road ahead will be difficult, but we believe in your ability to persevere and rebuild. We are here to support you in any way we can, whether that means providing aid and resources, or simply offering a listening ear.</p>

          <p>As you begin to pick up the pieces and rebuild your lives, please know that you are not forgotten. Your loved ones will always be remembered, and their memory will continue to inspire us to work towards a better and more compassionate world. We send our love and support to you, and we hope that you can find peace and healing in the days and weeks to come.
          </p>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default About
