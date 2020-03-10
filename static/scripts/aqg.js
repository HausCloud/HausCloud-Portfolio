const list = [
    {
	"quote": "Life is not a game of luck. If you wanna win, work hard.",
	"character": "Thomas Edison"
    }, {
	"quote": "You can observe a lot just by watching.",
	"character": "Yogi Berra"
    }, {
	"quote": "A house divided against itself cannot stand.",
	"character": "Abraham Lincoln"
    }, {
	"quote": "Difficulties increase the nearer we get to the goal.",
	"character": "Johann Wolfgang von Goethe"
    }
];

class SuperUltraAtomicQuoteGenerator3000 extends React.Component {
    constructor(props) {
    	super(props);
	let i = Math.floor(Math.random() * list.length);
    	this.state = {
	    quote: list[i].quote,
	    character: list[i].character
	};
	this.changeQuote = this.changeQuote.bind(this);
    };

    changeQuote () {
	this.setState(prevState => {
	    let x = Math.floor(Math.random() * list.length);

	    // Prevent loading the same quote
	    if (list[x].quote === prevState.quote) {
		let i = 0;

		while (i < list.length) {
		    if (i !== x) {
			break;
		    };
		    i++;
		};
		return {quote: list[i].quote, character: list[i].character};
	    } else {
		return {quote: list[x].quote, character: list[x].character};
	    };
	});
    };
    
    render() {
	return (
		<div id="quote-gen">
		<div>
		{this.state.quote}
	    </div>
		<div>
		{this.state.character}
	    </div>
		<div>
		<button onClick={this.changeQuote}>Click Me!</button>
		</div>
		</div>
	)
    };
};

class App extends React.Component {
    constructor(props) {
	super(props);
    };
    
    render () {
	return (
		<div>
		<SuperUltraAtomicQuoteGenerator3000/>
		</div>
	)
    };
};

ReactDOM.render(<App />, document.getElementById('root'));
