import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./GamePage.scss";

const GamePage = () => {
  return (
    <div className="game-page page">
      <Header></Header>
      <div className="game-page__content page__content"></div>
      <Footer></Footer>
    </div>
  );
};

export default GamePage;
