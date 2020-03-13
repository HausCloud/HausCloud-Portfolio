const list = [
    {
	"quote": "Life is not a game of luck. If you wanna win, work hard.",
	"character": "Sora"
    }, {
	"quote": "I'm not stupid. I'm just too lazy to show how smart I am.",
	"character": "Oreki Houtarou"
    }, {
	"quote": "Fake people have an image to maintain. Real people just don't care.",
	"character": "Hachiman Hikigaya"
    }, {
	"quote": "Hyaaaaaaaaaaaaaaaa hnaaaaaaaaaaaaaaaa haaaaaaaaaaaaaaaaaa!",
	"character": "Son Goku"
    }, {
	"quote": "No single thing is perfect by itself. That’s why we’re born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts besides us.",
	"character": "Itachi Uchiha"
    }, {
	"quote": "I have two rules: First, I'm never wrong. Second, if I'm wrong .. back to the first rule.",
	"character": "L Lawliet"
    }, {
	"quote": "You came into my life as a story, you left as a legend.",
	"character": "Reborn"
    }, {
	"quote": "People who don't work hard don't have the right to be envious of the people with talent. People fail because they don't understand the hard work necessary to be successful.",
	"character": "Yukino Yukinoshita"
    }, {
	"quote": "Don’t give up, there’s no shame in falling down! The true shame is to not stand up again!",
	"character": "Shintaro Midorima"
    }, {
	"quote": "If you live life by other people's standards, then your life is no longer yours.",
	"character": "Eddie Lee"
    }, {
	"quote": "I am who I am now because of everything that's happened. If I try to deny my past, I'm denying the person I've become. I don't want to do that.",
	"character": "Iori Nagase"
    }, {
	"quote": "I see now that the circumstances of one's birth are irrelevant. It is what you do with the gift of life that determines who you are.",
	"character": "Mewtwo"
    }, {
	"quote": "It's difficult to change the world on your own, but twisting it a little might not be all that hard.",
	"character": "Shinobu Oshino"
    }, {
	"quote": "The ticket to the future is always open.",
	"character": "Vash"
    }, {
	"quote": "If you wanna climb a mountain, you obviously aim for the top, but you gotta enjoy the scenery too.",
	"character": "Teppei Kiyoshi"
    }, {
	"quote": "Strength begins in understanding your own weakness.",
	"character": "Oz Vessalius"
    }, {
	"quote": "Opportunities wait for no one! If you let an opportunity slip through your fingers with an excuse like, “I wasn't prepared.” You'll never get another opportunity like that again!",
	"character": "Sorata Kanda"
    }, {
	"quote": "When you're ten, they call you a prodigy. When you're fifteen, they call you a genius. Once you hit twenty, you're just an ordinary person.",
	"character": "Haruka Nanase"
    }, {
	"quote": "Did you know every time you sigh, a little bit of happiness escapes?",
	"character": "Senjougahara Hitagi"
    }, {
	"quote": "Once you expect something in return, your good deed is no longer just a good deed.",
	"character": "Kayo Senju"
    }, {
	"quote": "The difference between the novice and the master is that the master has failed more times than the novice has tried.",
	"character": "Korosensei"
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
	this.randomQuote = this.randomQuote.bind(this);
	this.loopQuote = this.loopQuote.bind(this);
    };

    componentDidMount() {
	this.timer = setInterval(() => this.changeQuote(), 4000);
    }
    
    componentWillUnmount() {
	clearInterval(this.timer);
    }
    
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

    loopQuote () {
	if (this.timer === undefined) {
	    this.timer = setInterval(() => this.changeQuote(), 4000);
	}
    };
    
    randomQuote () {
	clearInterval(this.timer);
	this.timer = undefined;
	this.changeQuote();
    };
    
    
    render() {
	return (
		<div id="quote-gen">
		<div>
		<h1>{this.state.quote}</h1>
		<p>- {this.state.character}</p>
		</div>
		<div>
		<button onClick={this.loopQuote}>{this.timer === undefined ? 'Loop' : 'Looping'}</button>
		<button onClick={this.randomQuote}>Random</button>
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
