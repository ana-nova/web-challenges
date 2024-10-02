import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        <Tag tag={user.roles[0]} />
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;



// "user" dient hier als prob und greift auf die relevanten Informationen (wie name, roles, about) zu, die aus der App-Komponente kommen 

