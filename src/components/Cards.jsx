  import "./styles/cards.scss";
  import Stories from "./Stories";
  import Card from './Card';
  
  function Cards() {
    const commentsOne = [
      {
        user: "john doe",
        text: "Woah dude, this is awesome! 🔥",
        id: 1,
      },
      {
        user: "jane doe",
        text: "Like!",
        id: 2,
      },
      {
        user: "jen long",
        text: "Niceeeee!",
        id: 3,
      },
    ];
  
    const commentsTwo = [
      {
        user: "mapvault",
        text: "Amazing content, keep it up!",
        id: 4,
      },
    ];
  
    const commentsThree = [
      {
        user: "dadatlacak",
        text: "Love this!",
        id: 5,
      },
    ];
  
    return (
      <div className="cards">
        <Stories />
  
        <Card
          accountName="john doe"
          storyBorder={true}
          image="https://picsum.photos/800"
          comments={commentsOne}
          likedByText="dadatlacak"
          likedByNumber={89}
          hours={16}
        />
        <Card
          accountName="jeff cliff"
          image="https://picsum.photos/800"
          comments={commentsTwo}
          likedByText="therealadamsavage"
          likedByNumber={47}
          hours={12}
        />
        <Card
          accountName="deez n"
          storyBorder={true}
          image="https://picsum.photos/800/"
          comments={commentsThree}
          likedByText="mapvault"
          likedByNumber={90}
          hours={4}
        />
      </div>
    );
  }
  
  export default Cards;
  