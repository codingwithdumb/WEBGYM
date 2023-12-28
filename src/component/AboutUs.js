import React from 'react'
import Nav from '../common/Nav'
import Footer from '../common/Footer'
import AboutMainImg from '../img/AboutMainImg1.jpg'
const AboutUs = () => {
  return (
    <div>
      <div className="main-about-page">
        <Nav/>
        <div className="inner-about-age">
            <div className="caraousel">
                <img src={AboutMainImg} alt="" />
            </div>
            <div className="header-abouts">
                About Fit & Sexy
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique quidem enim temporibus, non eius, facilis ratione commodi ut minima iusto delectus amet atque veniam placeat totam autem sed explicabo provident. Mollitia ipsum eius error culpa voluptatem assumenda voluptate possimus saepe voluptates enim nesciunt ratione nisi reprehenderit corrupti est cumque ipsam recusandae, totam modi! Distinctio, deserunt velit!lorem45
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam consequatur recusandae quia provident nostrum ut repellendus sunt nisi, architecto commodi quae qui voluptatum soluta quibusdam molestias, unde, voluptates reiciendis. Nemo quibusdam distinctio quisquam ducimus rerum. Doloribus eos unde quia aut molestias eligendi qui dicta reiciendis velit accusamus sed voluptatum alias quasi laudantium, voluptatibus nisi.</p>
        </div>
        <div className="our-mission">
            <div className="header-mission">
                Our Misson
            </div>
            <p>At Muscle & Strength our mission is to build a platform that provides people with the knowledge, tools and products to reach their fitness and physique goals. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quam error libero fugiat dolores perspiciatis. Rerum laudantium odit accusamus exercitationem quo. Quasi quas ratione, sed ab vero eius delectus, id, consectetur distinctio veniam cum esse quo laborum accusantium incidunt ipsam fugit. Voluptatibus quis vel nemo!</p>
        </div>
        <div className="our-history">
            <div className="header-history">History</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum architecto officia eveniet molestiae similique repellendus dolores doloribus ducimus quos esse quod quisquam, consequatur provident recusandae eaque non illum inventore nesciunt porro aut tempore quibusdam accusamus! Aperiam sunt doloribus voluptas quas architecto dolorum facilis quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id fugit error quis omnis, reiciendis ad sed labore dolorum magnam quisquam, obcaecati deleniti eos, voluptatibus soluta eius expedita! Qui autem optio ipsa accusantium, minus amet quisquam, reprehenderit cumque impedit sequi excepturi numquam provident! Quis illum dicta molestias pariatur mollitia voluptate. Nam delectus optio corrupti! Saepe perspiciatis magnam veritatis odio odit dolor nesciunt debitis eos tenetur?</p>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
