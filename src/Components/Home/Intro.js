import React from "react";
import { Button } from "react-bootstrap";
import test from "../../assets/test.png";
import "./Intro.css";

function Intro() {
  return (
    <div>
      <div className="introheading">
        <h1>WELCOME TO PAIN CARE</h1>
      </div>
      <div className="content">
        <div className="innercontent">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt eligendi natus dolorem magnam nihil aliquid voluptas voluptatibus voluptates nemo fuga ad sapiente aliquam illum animi iusto ducimus, iure ipsa incidunt reprehenderit tempora veritatis in autem. Ratione, obcaecati voluptatibus? Unde iusto fugiat, impedit soluta error minima nam id cumque vitae doloribus esse sit eveniet expedita necessitatibus sed? Perferendis labore reprehenderit voluptas aspernatur magni nam, qui aliquid beatae porro illum debitis quis et culpa harum sit voluptates ad voluptatibus iusto ratione dolorem? Doloremque illum saepe unde esse nam voluptatem minima! Tempora eius quasi laborum, quo reprehenderit totam quos cumque! Voluptatum culpa exercitationem iste, deleniti, neque possimus dignissimos numquam facere nisi voluptas, asperiores repudiandae? Ab quasi numquam ratione vitae ut ipsam tempora maiores dolorem. Maxime illum voluptatum quo dolorum labore debitis animi. Saepe quidem sed eveniet accusantium officiis explicabo quos doloremque unde modi sint. Numquam aliquam aliquid laboriosam. Aliquam reiciendis aut officia! Cupiditate quidem natus accusamus ducimus at error esse asperiores molestiae quis sed ut deleniti sunt, voluptate reiciendis alias, sequi aut quod. Quisquam necessitatibus quae natus temporibus possimus esse aspernatur id dolor mollitia voluptate. Totam cum voluptatem quidem accusamus, praesentium laborum vitae doloremque unde, sit aperiam quas? Pariatur nihil omnis consequuntur porro.
          </p>
          <div className="readmore">
            <Button variant="secondary">Read More</Button>{" "}
          </div>
        </div>
        <img className="image" src={test} alt=" " />
      </div>
    </div>
  );
}

export default Intro;
