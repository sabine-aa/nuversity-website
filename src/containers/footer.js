import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>
                        <img height="50px" width="200px" src={require('../../src/images/logo.png')}></img>
                    </Footer.Title>
                    <Footer.Link href="#" >Funding freeium long tail <br/>hypotheses first mover advantage</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-envelope"/>nuversity@gmail.com</Footer.Link>
                    <Footer.Link href="#"><Icon className="fas fa-phone-alt" />+ 12 3456 7890</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" /><Icon className="fab fa-google" /><Icon className="fab fa-twitter" /> </Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>
                        Menu 
                    </Footer.Title>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Careers</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                    <Footer.Link href="#">Admissions</Footer.Link>
                    <Footer.Link href="#">Blogs</Footer.Link>
                </Footer.Column>
                 <Footer.Column>
                    <Footer.Title>
                        Services 
                    </Footer.Title>
                    <Footer.Link href="#">My Account</Footer.Link>
                    <Footer.Link href="#">Classes</Footer.Link>
                    <Footer.Link href="#">Payments</Footer.Link>
                    
                </Footer.Column>
                 <Footer.Column>
                    <Footer.Title>
                        Address 
                    </Footer.Title>
                    <Footer.Link href="#">123 Lorem lpsum<br/> Street Jakarta,<br/> Indonesia</Footer.Link>
                </Footer.Column>
            
                <Footer.Column>
                    <Footer.Title>
                        Subscribe Our NewsLetter
                    </Footer.Title>
                    <Footer.Link href="#">Doubtful for answered one fat indulged margaret sir shutters together</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">2022 Nuversity Education Services, a 2U, Inc. brand.All rights Reserved</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}