function jinja_data() {
  return userinfo;
}

const user_id = userinfo.sub.replace('auth0|', '');


// Inline SVG for nav
const logout = (
  <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512">
    <g>
      <g>
        <path d="M505.664,243.739l-54.783-38.622c-9.926-6.997-23.645,0.128-23.645,12.26v23.622H164.196
			c-8.284,0-15.001,6.716-15.001,15.001S155.912,271,164.196,271h263.038v23.621c0,12.212,13.792,19.204,23.644,12.26l54.783-38.622
			C514.027,262.365,514.196,249.767,505.664,243.739z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M430.471,352.317c-7.169-4.146-16.347-1.698-20.496,5.474c-35.236,60.916-101.103,101.811-176.372,101.811
			c-112.266,0-203.602-91.336-203.602-203.602S121.337,52.398,233.603,52.398c75.319,0,141.156,40.933,176.371,101.809
			c4.148,7.172,13.328,9.619,20.496,5.474c7.171-4.148,9.621-13.325,5.474-20.496C395.418,69.127,319.729,22.397,233.603,22.397
			C104.49,22.397,0,126.876,0,256c0,129.113,104.479,233.603,233.603,233.603c86.163,0,161.833-46.763,202.342-116.79
			C440.092,365.642,437.642,356.466,430.471,352.317z"
        />
      </g>
    </g>
  </svg>
);

const book = (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 470 470">
    <g>
      <path d="m338.829,0h-320.105c-4.142,0-7.5,3.357-7.5,7.5v455c0,4.143 3.358,7.5 7.5,7.5h320.105c20.678,0 37.5-16.822 37.5-37.5v-395c0-20.678-16.822-37.5-37.5-37.5zm22.5,432.5c0,12.406-10.093,22.5-22.5,22.5h-312.605v-440h312.605c12.407,0 22.5,10.094 22.5,22.5v395z" />
      <path d="m51.224,37.5v305c0,4.143 3.358,7.5 7.5,7.5 4.144-0.002 7.5-3.358 7.5-7.5v-305c0-4.142-3.356-7.498-7.497-7.5-4.145,0-7.503,3.357-7.503,7.5z" />
      <path d="m51.224,372.5v60c0,4.143 3.358,7.5 7.5,7.5 4.144-0.002 7.5-3.358 7.5-7.5v-60c0-4.142-3.356-7.498-7.497-7.5-4.145,0-7.503,3.357-7.503,7.5z" />
      <path d="m298.829,70h-170.105c-4.142,0-7.5,3.357-7.5,7.5v90c0,4.143 3.358,7.5 7.5,7.5h170.105c4.142,0 7.5-3.357 7.5-7.5v-90c5.68434e-14-4.143-3.358-7.5-7.5-7.5zm-7.5,90h-155.105v-75h155.105v75z" />
      <path d="m158.724,115h110.105c4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-110.105c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5 7.5,7.5z" />
      <path d="m158.724,145h110.105c4.142,0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-110.105c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5 7.5,7.5z" />
      <path d="m458.739,127.566c-0.018-0.184-0.05-0.365-0.081-0.545-0.011-0.061-0.016-0.122-0.028-0.183-0.045-0.225-0.102-0.445-0.166-0.662-0.005-0.017-0.008-0.033-0.013-0.05-0.08-0.262-0.173-0.518-0.28-0.767l-19.969-48.034c-1.163-2.798-3.896-4.621-6.925-4.621s-5.762,1.823-6.925,4.621l-19.969,48.034c-0.107,0.249-0.2,0.505-0.28,0.767-0.005,0.017-0.008,0.033-0.013,0.05-0.064,0.217-0.121,0.437-0.166,0.662-0.012,0.061-0.017,0.122-0.028,0.183-0.031,0.18-0.063,0.361-0.081,0.545-0.025,0.248-0.038,0.497-0.038,0.747v319.187c0,12.406 10.093,22.5 22.5,22.5h10c12.407,0 22.5-10.094 22.5-22.5v-319.187c-0.001-0.25-0.014-0.5-0.038-0.747zm-22.463,327.434h-10c-4.136,0-7.5-3.364-7.5-7.5v-12.5h25v12.5c0,4.136-3.364,7.5-7.5,7.5zm7.5-319.187v284.187h-25v-284.187h25zm-21.259-15l8.76-21.07 8.76,21.07h-17.52z" />
    </g>
  </svg>
);

const magnifying_glass = (
  <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 513.28 513.28">
    <g>
      <path d="M495.04,404.48L410.56,320c15.36-30.72,25.6-66.56,25.6-102.4C436.16,97.28,338.88,0,218.56,0S0.96,97.28,0.96,217.6s97.28,217.6,217.6,217.6c35.84,0,71.68-10.24,102.4-25.6l84.48,84.48c25.6,25.6,64,25.6,89.6,0C518.08,468.48,518.08,430.08,495.04,404.48z M218.56,384c-92.16,0-166.4-74.24-166.4-166.4S126.4,51.2,218.56,51.2s166.4,74.24,166.4,166.4S310.72,384,218.56,384z" />
    </g>
  </svg>
);
const pen = (
  <svg height="401pt" viewBox="0 -1 401.52289 401" width="401pt">
    <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
    <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
  </svg>
);

const ideas = (
  <svg width="512" height="512" viewBox="0 0 61 60" version="1.1">
    <g id="Page-1" stroke="none" fill="#00000">
      <g
        id="006---Confusion"
        transform="translate(-1.000000, 0.000000)"
      >
        <path
          d="M2.472,37.391 C2.80078202,37.6194083 3.14797678,37.8200989 3.51,37.991 C3.942,38.212 4.667,38.582 4.718,38.841 C4.78091334,39.1828671 4.73980788,39.535747 4.6,39.854 C4.451,40.174 4.295,40.449 4.16,40.686 C3.794,41.333 3.181,42.417 4.105,43.172 C4.321,43.372 4.694,43.661 5.034,43.922 C4.78370505,44.359639 4.67048978,44.8623148 4.709,45.365 C4.76206133,45.7609003 4.97674391,46.1171358 5.302,46.349 C5.524,46.505 5.761,46.641 5.994,46.774 C6.586,47.11 6.817,47.267 6.894,47.581 C6.94956021,47.9834802 6.91541128,48.3932674 6.794,48.781 C6.735,49.048 6.678,49.316 6.644,49.581 C6.54469822,50.4923539 6.65729272,51.4143284 6.973,52.275 C7.42281456,53.8638526 8.85996076,54.9707558 10.511,55 C10.7865929,54.9991845 11.0613714,54.9700312 11.331,54.913 C14.1877778,54.2358183 17.0028445,53.3934018 19.762,52.39 C22.015,53.712 23.438,57.732 23.809,59.241 C23.9197719,59.6870872 24.3203652,60.0002183 24.78,60 L49.88,59.93 C50.198095,59.9293833 50.4969218,59.7774667 50.6848608,59.5208273 C50.8727998,59.2641879 50.9274293,58.9334437 50.832,58.63 C50.584758,57.9524505 50.2437748,57.3128965 49.819,56.73 C49.5792082,56.3843183 49.3630492,56.0228282 49.172,55.648 C48.7190564,54.7315437 48.3414759,53.7797332 48.043,52.802 C47.4716514,50.8692257 47.0757155,48.8888768 46.86,46.885 C46.832,46.654 46.807,46.324 46.787,45.975 C46.858,45.975 46.925,45.996 46.997,45.996 C48.977249,45.9976785 50.6606651,44.5501702 50.9557353,42.5920276 C51.2508055,40.6338849 50.0687035,38.7545752 48.1758946,38.1726273 C46.2830857,37.5906793 44.2493694,38.4812792 43.3933906,40.2669693 C42.5374118,42.0526595 43.116849,44.1958866 44.756,45.307 C44.775,45.962 44.819,46.67 44.874,47.126 C45.1054034,49.2509065 45.5274365,51.3506972 46.135,53.4 C46.4640482,54.4749292 46.879054,55.5216399 47.376,56.53 C47.6041562,56.9828684 47.8630969,57.4195592 48.151,57.837 L48.218,57.937 L25.536,58 C24.8721602,55.6278229 23.6672676,53.4419012 22.016,51.614 L22.916,51.299 C23.586,51.065 24.091,50.889 24.35,50.806 C28.634,49.451 30.776,47.5 30.718,45.006 C30.7050213,44.4537153 30.2467847,44.0165213 29.6945,44.0295 C29.1422153,44.0424787 28.7050213,44.5007153 28.718,45.053 C28.742,46.082 27.899,47.583 23.742,48.898 C23.471,48.985 22.949,49.167 22.256,49.409 C21.513,49.669 20.568,49.999 19.526,50.353 L19.519,50.353 C16.7047997,51.3845725 13.8333482,52.2526858 10.919,52.953 C9.98843633,53.1296801 9.08382639,52.5420363 8.867,51.62 C8.65336419,51.0511056 8.5729723,50.4408114 8.632,49.836 C8.658,49.626 8.706,49.418 8.752,49.209 C8.95576498,48.5176489 8.98564963,47.7866772 8.839,47.081 C8.54814599,46.1623751 7.87220583,45.4156291 6.987,45.035 L6.78,44.917 C6.88797779,44.6989963 7.01691908,44.4920204 7.165,44.299 C7.33275906,44.0864363 7.40714209,43.8149259 7.3711438,43.5465408 C7.33514552,43.2781557 7.19184383,43.0358431 6.974,42.875 C6.734,42.699 6.168,42.275 5.754,41.941 C5.802,41.854 5.854,41.758 5.904,41.671 C6.061,41.396 6.24,41.076 6.415,40.706 C6.73144627,40.0050454 6.82465982,39.2237273 6.682,38.468 C6.442,37.248 5.273,36.65 4.421,36.214 C4.13330073,36.0772824 3.85736569,35.9170729 3.596,35.735 C3.38336862,35.5912941 3.18391862,35.42899 3,35.25 C3,35.098 3.163,34.73 3.925,33.803 C5.71607044,31.4972449 7.2517206,29.0039928 8.505,26.367 C8.73934083,25.9538574 8.87135428,25.4906102 8.89,25.016 C8.78670832,24.0108401 8.25404392,23.0993679 7.429,22.516 C7.029,22.145 6.644,21.795 6.599,21.469 C6.60563423,21.2329751 6.65864086,21.0005614 6.755,20.785 C6.918,20.356 7.106,19.936 7.295,19.515 C7.70505054,18.6694994 8.03256792,17.786408 8.273,16.878 L8.373,16.452 C8.58408599,15.4522697 8.85626318,14.4664205 9.188,13.5 C9.97629737,11.324256 11.1967986,9.33056659 12.776,7.639 C14.689,5.615 17.7,4.183 21.74,3.38 C24.8305901,2.70155325 27.9665949,2.24968514 31.123,2.028 C33.5901746,1.95060066 36.0540371,2.26448999 38.423,2.958 C36.181653,4.68333506 34.5194566,7.05087491 33.658,9.745 C33.2582819,10.9752988 33.4756712,12.3228148 34.242,13.365 C35.1299095,14.5786864 36.6245325,15.1904147 38.1085914,14.9475419 C39.5926502,14.704669 40.8142998,13.6484105 41.269,12.215 C42.1879067,9.26669524 45.1946753,7.49743398 48.2182392,8.12588599 C51.2418031,8.75433799 53.2945045,11.5752172 52.9624398,14.6454979 C52.630375,17.7157786 50.0220142,20.0325428 46.934,20 C45.8834641,19.9949917 44.8721689,20.3987926 44.114,21.126 C43.3994006,21.8279736 42.9978251,22.7882942 43,23.79 L43,32 C43,34.209139 44.790861,36 47,36 C49.209139,36 51,34.209139 51,32 L51,27.418 C56.1015458,25.9174237 59.911409,21.6545223 60.83177,16.417115 C61.752131,11.1797077 59.6238653,5.87330863 55.3395469,2.72336978 C51.0552285,-0.426569058 45.3555883,-0.875443511 40.631,1.565 C37.5515512,0.454060462 34.2902641,-0.0663613016 31.018,0.031 C27.7640828,0.25668862 24.5310865,0.720598351 21.345,1.419 C16.836,2.319 13.559,3.9 11.322,6.264 C9.55741114,8.15217091 8.19304573,10.3778111 7.311,12.807 C6.95086895,13.8522819 6.65498362,14.9186045 6.425,16 L6.325,16.422 C6.1115707,17.2063052 5.82532664,17.9689531 5.47,18.7 C5.27,19.156 5.062,19.612 4.883,20.084 C4.65284498,20.6094053 4.56192334,21.1852424 4.619,21.756 C4.82021123,22.6521932 5.3374331,23.4459531 6.076,23.992 C6.565,24.44 6.886,24.756 6.89,25.031 C6.85421996,25.1830023 6.79697882,25.3291355 6.72,25.465 C5.52247783,27.986227 4.05560327,30.370443 2.345,32.576 C1.62,33.458 0.86,34.487 1.02,35.517 C1.23211923,36.311598 1.75555427,36.9871609 2.472,37.391 Z M47,40 C48.1045695,40 49,40.8954305 49,42 C49,43.1045695 48.1045695,44 47,44 C45.8954305,44 45,43.1045695 45,42 C45,40.8954305 45.8954305,40 47,40 Z M48.371,2.076 C54.1634684,2.73810092 58.6419179,7.46779827 58.9871695,13.2877527 C59.332421,19.107707 55.4445639,24.3337107 49.771,25.676 C49.3190566,25.7823203 48.9997337,26.1857191 49,26.65 L49,32 C49,33.1045695 48.1045695,34 47,34 C45.8954305,34 45,33.1045695 45,32 L45,23.79 C44.9983177,23.3231261 45.1850827,22.8753227 45.518,22.548 C45.9064665,22.1760219 46.429601,21.9781767 46.967,22 L47,22 C51.0065036,22.0428687 54.4119477,19.0824909 54.927,15.109 C55.2480458,12.8154326 54.5594053,10.4952865 53.0390733,8.74825681 C51.5187413,7.00122714 49.3159276,5.99877238 47,6 C43.4924884,5.98640437 40.3891361,8.26945158 39.358,11.622 C39.1275453,12.3330971 38.5182043,12.8551951 37.7801833,12.973911 C37.0421623,13.092627 36.2998294,12.7879554 35.858,12.185 C35.4705127,11.6573578 35.3614083,10.9751761 35.565,10.353 C37.3295805,4.90538462 42.6793003,1.44765931 48.371,2.076 Z"
          id="Shape"
        />
        <path
          d="M12.167,17.793 L12.267,17.348 C12.4422745,16.5166167 12.6649717,15.6959424 12.934,14.89 C13.5362565,13.2205007 14.4695935,11.6898825 15.678,10.39 C16.9740184,9.16800156 18.560379,8.29686276 20.287,7.859 C20.6356132,7.76076066 20.9038574,7.48169775 20.9882433,7.12947458 C21.0726292,6.7772514 20.9599648,6.40693017 20.6937164,6.1613819 C20.4274681,5.91583364 20.0492577,5.83344433 19.705,5.946 C17.6443921,6.48150189 15.7566426,7.53920641 14.224,9.017 C12.8313939,10.5140375 11.7555448,12.2769606 11.061,14.2 C10.7609653,15.0876495 10.5135358,15.9922196 10.32,16.909 L10.22,17.342 C10.0952009,17.8796006 10.4295239,18.4166657 10.967,18.542 C11.0413988,18.5594609 11.1175799,18.5681865 11.194,18.568 C11.6590938,18.5673679 12.0623542,18.2461687 12.167,17.793 Z"
          id="Shape"
        />
        <circle id="Oval" cx="10" cy="21" r="1" />
      </g>
    </g>
  </svg>
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'To be well!',
      prefix: "I'm grateful for",
      mood: '😄',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let emoji = 'exhuberant';
    if (this.state.mood === '😓') {
      emoji = 'nope';
    } else if (this.state.mood === '🙃') {
      emoji = 'unhappy';
    } else if (this.state.mood === '😐') {
      emoji = 'meh';
    } else if (this.state.mood === '🙂') {
      emoji = 'happy';
    } else if (this.state.mood === '😄') {
      emoji = 'exhuberant';
    }

    $.ajax({
      url: 'http://hauscloud.me/api/gratitude_journal/insert',
      data: JSON.stringify({
        user_id, text: [this.state.prefix, this.state.value], mood: emoji, date: new Date().toLocaleString(),
      }),
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      success(data, status, xhr) { console.log(data); },
      error(xhr, ajaxOptions, thrownError) { console.log(`ERROR:${xhr.responseText} - ${thrownError}`); },
    }).done((data) => {
      this.props.show_new_entry();
    });
    e.preventDefault();
  }

  render() {
    return (
      <form id="form-container" onSubmit={this.handleSubmit}>
        <div>
          <select id="form_prefix" onChange={(e) => this.setState({ prefix: e.target.value })}>
            <option>I'm grateful for</option>
            <option>So happy that</option>
            <option>#blessed</option>
          </select>
        </div>
        <div>
          <select id="mood" onChange={(e) => this.setState({ mood: e.target.value })}>
            <option>😄</option>
            <option>🙂</option>
            <option>😐</option>
            <option>🙃</option>
            <option>😓</option>
          </select>
        </div>
        <div>
          <label>
            Entry:
            <input type="text" value={this.state.value} onChange={(e) => { this.setState({ value: e.target.value }); }} />
          </label>
        </div>
        <div>
          <input className="simple-button" type="submit" value="Add to Journal" />
        </div>
      </form>
    );
  }
}

class MrSuggestor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestion_list: ['A roof over my head and a warm home', 'To be corona-free', 'My friends and family', 'For plenty of drinkable water', 'I can enjoy the small and free pleasures of life', 'For internet access', 'The setbacks that have formed me and made me stronger', 'Making the subway just before the doors close', 'My hairy baby', 'Chocolate.', 'Pay day!', 'New car smell', 'Fuzzy socks', 'Spellcheck', 'Acting like a kid again', 'Good hair days', 'Keyboard Shortcuts', 'Free Samples', 'The Smell of Coffee Brewing', 'Indoor Plumbing', 'The Snooze Button', 'GPS'],
      suggestion: 'To have a roof over my head',
    };
  }

  componentDidMount() {
    this.suggestion = setInterval(() => { this.setState({ suggestion: this.state.suggestion_list[Math.floor(Math.random() * this.state.suggestion_list.length)] }); }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.suggestion);
  }

  render() {
    return (
      <div>
        <div id="suggestion-container">
          <p>{this.state.suggestion}</p>
        </div>
      </div>
    );
  }
}

class LogOut extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="logout-container">
        <h1>Inspired By Kurzgesagt</h1>
        <button onClick={() => { location.href = 'http://www.hauscloud.me/app/gratitude_journal/logout'; }}>Logout</button>
      </div>
    );
  }
}

class Entries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'multi',
      single_entry: <div />,
      entries: [],
    };

    this.multi_view = this.multi_view.bind(this);
    this.single_view = this.single_view.bind(this);
    this.emoji = this.emoji.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  deleteEntry(entry_id) {
    $.ajax({
      url: 'http://hauscloud.me/api/gratitude_journal/delete',
      data: JSON.stringify({ user_id: userinfo.sub.replace('auth0|', ''), entry_id }),
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
    }).done((data) => {
      this.fetchData();
      this.setState({ view: 'multi' });
    }).fail(() => { this.setState({ view: 'single', single_entry: <p>Not available</p> }); });
  }

  fetchData() {
    $.ajax({
      url: 'http://hauscloud.me/api/gratitude_journal/all',
      data: JSON.stringify({ user_id }),
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
    }).done((data) => {
      const arr = [];
      data.entries.forEach((item) => {
        arr.push(item);
      });
      this.setState({ entries: arr });
    }).fail(() => { this.setState({ view: 'single', single_entry: <p>Not available</p> }); });
  }

  single_view(entry_data, entry_id) {
    const entry = (
      <div id="single_view">
        <div className="entry">
          <p>{entry_data.text[0]}</p>
          <p>{entry_data.text[1]}</p>
        </div>
        <div className="info">
          <p>{entry_data.date}</p>
          <p>{this.emoji(entry_data.mood)}</p>
          <button className="simple-button" onClick={() => { this.deleteEntry(entry_id); }}>
            Delete
          </button>
          <button
            className="simple-button"
            onClick={() => {
              this.setState({ view: 'multi' });
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
    this.setState({ view: 'single', single_entry: entry });
  }

  emoji(mood_string) {
    if (mood_string === 'nope') {
      return '😓';
    } if (mood_string === 'unhappy') {
      return '🙃';
    } if (mood_string === 'meh') {
      return '😐';
    } if (mood_string === 'happy') {
      return '🙂';
    } if (mood_string === 'exhuberant') {
      return '😄';
    }
    return '?';
  }

  multi_view() {
    return this.state.entries.map((entry) => (
      <div className="group-entries" key={entry[0]}>
        <div className="entry">
          <p>{entry[1].text[0]}</p>
          <p>{entry[1].text[1]}</p>
        </div>
        <div className="info">
          <p>{entry[1].date.split(' ').slice(0, 3).join(' ')}</p>
          <p>{this.emoji(entry[1].mood)}</p>
          <button className="simple-button" onClick={() => this.single_view(entry[1], entry[0])}>Open</button>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div id="entries-container">
        {this.state.view == 'multi'
          ? this.multi_view()
          : this.state.single_entry}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: <Entries />,
      active: [false, true, false, false],
    };

    this.swapDisplay = this.swapDisplay.bind(this);
  }

  swapDisplay() {
    this.setState({ container: <Entries />, active: [false, true, false] });
  }

  render() {
    return (
      <div>
        <div id="main-content">{this.state.container}</div>
        <div id="nav">
          <div
            className={this.state.active[0] ? 'active' : null}
            onClick={() => {
              this.setState({ container: <Form show_new_entry={this.swapDisplay} />, active: [true, false, false] });
            }}
          >
            {pen}
          </div>
          <div
            className={this.state.active[1] ? 'active' : null}
            onClick={() => {
              this.setState({ container: <Entries />, active: [false, true, false, false] });
            }}
          >
            {book}
          </div>
          <div
            className={this.state.active[2] ? 'active' : null}
            onClick={() => {
              this.setState({ container: <MrSuggestor />, active: [false, false, true, false] });
            }}
          >
            {ideas}
          </div>
          <div
            className={this.state.active[3] ? 'active' : null}
            onClick={() => {
              this.setState({ container: <LogOut />, active: [false, false, false, true] });
            }}
          >
            {logout}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
