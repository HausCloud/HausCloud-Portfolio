const fake_persons = new Set(['https://i.imgur.com/U3Be6EU.png', 'https://i.imgur.com/CvyV2wj.png', 'https://i.imgur.com/psWrpJD.png', 'https://i.imgur.com/IwKtl1Q.png', 'https://i.imgur.com/lqDeijo.png', 'https://i.imgur.com/wkPFrol.png', 'https://i.imgur.com/4vRPXSA.png', 'https://i.imgur.com/DKuEIZw.png', 'https://i.imgur.com/eBrxiCe.png', 'https://i.imgur.com/tPxvKGQ.png', 'https://i.imgur.com/uZ9ThXj.png', 'https://i.imgur.com/OooCfSf.png', 'https://i.imgur.com/jB1OZiR.png', 'https://i.imgur.com/BTummWM.png', 'https://i.imgur.com/Vygqk1z.png', 'https://i.imgur.com/wBrhpUV.png', 'https://i.imgur.com/NQmmIvr.png', 'https://i.imgur.com/L2tWyIv.png', 'https://i.imgur.com/3ZFwJYU.png', 'https://i.imgur.com/SdlX3VV.png', 'https://i.imgur.com/dIokPBO.png', 'https://i.imgur.com/9bB0IFL.png', 'https://i.imgur.com/H79zsfR.png', 'https://i.imgur.com/jSteyCK.png', 'https://i.imgur.com/Cy3X2sz.png', 'https://i.imgur.com/MDvAawQ.png', 'https://i.imgur.com/zvYsvfF.png', 'https://i.imgur.com/7LU26oJ.png', 'https://i.imgur.com/7NrYiD1.png', 'https://i.imgur.com/w7gVNZR.png', 'https://i.imgur.com/v1aJ6dm.png', 'https://i.imgur.com/45e6lEY.png', 'https://i.imgur.com/96j5NSE.png', 'https://i.imgur.com/HCMO5rs.png', 'https://i.imgur.com/KhA6TQ1.png', 'https://i.imgur.com/gQCgQ0v.png', 'https://i.imgur.com/OxyUx4h.png', 'https://i.imgur.com/Bmh1ojx.png', 'https://i.imgur.com/DnVmyep.png', 'https://i.imgur.com/rEceP8G.png', 'https://i.imgur.com/PmN5dOV.png', 'https://i.imgur.com/iws6pcZ.png', 'https://i.imgur.com/iDNfRjJ.png', 'https://i.imgur.com/G0GMsz1.png', 'https://i.imgur.com/SXdddOS.png', 'https://i.imgur.com/Gw6jL4Y.png', 'https://i.imgur.com/vrK0D9X.png', 'https://i.imgur.com/Dr4RQJb.png', 'https://i.imgur.com/gsit77L.png', 'https://i.imgur.com/ey80gPa.png', 'https://i.imgur.com/XVUc5Za.png', 'https://i.imgur.com/0QtBAqk.png', 'https://i.imgur.com/Eo9L9O9.png', 'https://i.imgur.com/YD7aJB6.png', 'https://i.imgur.com/0XjNTE0.png', 'https://i.imgur.com/8OtPFwk.png', 'https://i.imgur.com/fGIaIYg.png', 'https://i.imgur.com/SiZyysw.png', 'https://i.imgur.com/RhtTktD.png', 'https://i.imgur.com/OGUIFvo.png', 'https://i.imgur.com/Uk7eREY.png', 'https://i.imgur.com/4FKuycj.png', 'https://i.imgur.com/1I1KCmu.png', 'https://i.imgur.com/4AoK9QJ.png', 'https://i.imgur.com/SdBh2Ia.png', 'https://i.imgur.com/pOiHu4W.png', 'https://i.imgur.com/Az9Wai2.png', 'https://i.imgur.com/J7QERoP.png', 'https://i.imgur.com/5WGbLYJ.png', 'https://i.imgur.com/bQdOAI2.png', 'https://i.imgur.com/EJWC5oB.png', 'https://i.imgur.com/IAjBYE8.png', 'https://i.imgur.com/zj9LSlU.png', 'https://i.imgur.com/0VBUp2o.png', 'https://i.imgur.com/v2Hxlcc.png', 'https://i.imgur.com/QdqhVFP.png', 'https://i.imgur.com/5ARwSVH.png', 'https://i.imgur.com/S2ugQOe.png', 'https://i.imgur.com/vXaesAj.png', 'https://i.imgur.com/b6IzDmW.png']);
const arr = Array.from(fake_persons);
const initial = [arr[0], arr[1], arr[2]];

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue; let
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class JumboTron extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="jumbotron">
        <div id="current-score"><p>{this.props.high_score}</p></div>
        <div id="game-status"><p>{this.props.current_score !== 0 ? 'Game On!' : 'Game Over!'}</p></div>
        <div id="high-score"><p>{this.props.current_score}</p></div>
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.random_person = this.random_person.bind(this);
    this.set_display = this.set_display.bind(this);
    this.adjust_display = this.adjust_display.bind(this);

    this.state = {
      high_score: 0,
      current_score: 0,
      seen: new Set(),
      display: [...initial],
    };
  }

  adjust_display(arr, new_person, stat) {
    let increment = 0;
    if (stat === true) {
      increment = 1;
      this.setState((prevState, props) => ({ display: arr, seen: prevState.seen.add(new_person), current_score: prevState.current_score += increment }));
    } else if (stat === false) {
      this.setState((prevState, props) => ({
        display: arr, seen: new Set(), current_score: 0, high_score: prevState.current_score > prevState.high_score ? prevState.current_score : prevState.high_score,
      }));
    }
  }

  set_display(event) {
    if (this.state.seen.has(event.target.src) || this.state.seen.size === 65) {
      // console.log('End game. You clicked on a image you already clicked on OR you got to the end of all the images.');
      this.adjust_display([...initial], null, false);
    } else {
      const copy = new Set(this.state.seen);
      copy.add(event.target.src);
      const new_display = new Set();
      let x = 1;

      if (copy.size > 1) {
        x = Math.floor(Math.random() * 2) + 1;
      }

      while (x !== 0) {
        const person = this.random_person(fake_persons);
        if (new_display.has(person) === false && copy.has(person) === true) {
          new_display.add(person);
          x -= 1;
        }
      }

      while (new_display.size !== 3) {
        const person = this.random_person(fake_persons);
        if (new_display.has(person) === false && copy.has(person) === false) {
          new_display.add(person);
        }
      }

      this.adjust_display(shuffle(Array.from(new_display)), event.target.src, true);
    }
  }

  random_person(set) {
    if (set.size === 0) {
      return false;
    }
    const items = Array.from(set);
    const person = items[Math.floor(Math.random() * items.length)];
    return person;
  }


  render() {
    return (
      <div>
        <div>
          <JumboTron status={this.state.current_score} high_score={this.state.high_score} current_score={this.state.current_score} />
        </div>
        <div>
          <div id="card-container">
            <img onClick={this.set_display} src={this.state.display[0]} />
          </div>
          <div id="card-container">
            <img onClick={this.set_display} src={this.state.display[1]} />
          </div>
          <div id="card-container">
            <img onClick={this.set_display} src={this.state.display[2]} />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
