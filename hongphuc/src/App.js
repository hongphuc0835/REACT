import logo from "./logo.svg";
import "./App.css";
import "./style.css"
import Product from "./product";

function App() {
  return (
    <div>
      <h1>CUỘC THI SẮC ĐẸP</h1>
      <div className="App">
        <Product
          img="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/401076257_304226425813360_1958069102803817421_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9PZOr508OFoAX9dsUxv&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBup4qmUiE0IFOKMEhfi2KT7_I4SsLaU07tFKIC14QxVQ&oe=6553420A&w=300&h=300&dpr=1"
          name="Nguyễn Tuân"
          desc="The new product of Nike"
          price="$200"
        />
        <Product
          img="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/401076257_304226425813360_1958069102803817421_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9PZOr508OFoAX9dsUxv&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBup4qmUiE0IFOKMEhfi2KT7_I4SsLaU07tFKIC14QxVQ&oe=6553420A"
          name="Nguyễn Tuân"
          desc="The new product of Nike"
          price="$200"
        />
        <Product
          img="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/401076257_304226425813360_1958069102803817421_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9PZOr508OFoAX9dsUxv&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBup4qmUiE0IFOKMEhfi2KT7_I4SsLaU07tFKIC14QxVQ&oe=6553420A"
          name="Nguyễn Tuân"
          desc="The new product of Nike"
          price="$200"
        />
      </div>
    </div>
  );
}
export default App;