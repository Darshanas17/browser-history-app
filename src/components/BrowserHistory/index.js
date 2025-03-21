import "./index.css";
import { Component } from "react";

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: "07:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/instagram-img.png",
    title: "Instagram",
    domainUrl: "instagram.com",
  },
  {
    id: 1,
    timeAccessed: "05:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/twitter-img.png",
    title: "Twitter. It’s what’s happening / Twitter",
    domainUrl: "twitter.com",
  },
  {
    id: 2,
    timeAccessed: "04:35 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/facebook-img.png",
    title: "Facebook – log in or sign up",
    domainUrl: "facebook.com",
  },
  {
    id: 3,
    timeAccessed: "04:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/linkedin-img.png",
    title: "LinkedIn: Log In or Sign Up",
    domainUrl: "linkedin.com",
  },
  {
    id: 4,
    timeAccessed: "04:00 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/hashnode-img.png",
    title: "Hashnode: Everything you need to start blogging as a developer!",
    domainUrl: "hashnode.com",
  },
  {
    id: 5,
    timeAccessed: "03:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/github-img.png",
    title: "GitHub: Where the world builds software · GitHub",
    domainUrl: "github.com",
  },

  {
    id: 6,
    timeAccessed: "02:45 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/react-img.png",
    title: "React – A JavaScript library for building user interfaces",
    domainUrl: "reactjs.org",
  },
  {
    id: 7,
    timeAccessed: "01:25 PM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png",
    title: "Stack Overflow - Where Developers Learn, Share, & Build Careers",
    domainUrl: "stackoverflow.com",
  },

  {
    id: 8,
    timeAccessed: "09:25 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/gmail-img.png",
    title: "Gmail",
    domainUrl: "mail.google.com",
  },
  {
    id: 9,
    timeAccessed: "09:00 AM",
    logoUrl: "https://assets.ccbp.in/frontend/react-js/google-img.png",
    title: "Google",
    domainUrl: "google.com",
  },
];
const ListItem = (props) => {
  const { item, DeleteHistory } = props;
  const { id, timeAccessed, logoUrl, title, domainUrl } = item;

  return (
    <li className="h-list">
      <p className="h-time">{timeAccessed}</p>
      <div className="h-cont">
        <img src={logoUrl} className="h-logo" alt="domain logo" />
        <p className="h-title">{title}</p>
        <p className="h-domainUrl">{domainUrl}</p>
      </div>

      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={() => DeleteHistory(id)}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="h-delete-logo"
        />
      </button>
    </li>
  );
};

class BrowserHistory extends Component {
  state = {
    searchInput: "",
    historyList: initialHistoryList,
  };

  onChangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onDeleteHistory = (id) => {
    this.setState((prevState) => ({
      historyList: prevState.historyList.filter((each) => each.id !== id),
    }));
  };

  render() {
    const { searchInput, historyList } = this.state;
    const searchResults = historyList.filter((each) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="bg-cont">
        <nav className="nav-bar">
          <div className="app-logo-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="app-logo-img"
              alt="app logo"
            />
          </div>

          <div className="search-bar-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-logo"
              alt="search"
            />

            <input
              type="search"
              className="input"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </nav>

        {searchResults.length === 0 ? (
          <div className="empty-history-cont">
            <p>There is no history to show</p>
          </div>
        ) : (
          <div className="cont">
            <ul className="history-cont">
              {searchResults.map((each) => (
                <ListItem
                  key={each.id}
                  item={each}
                  DeleteHistory={this.onDeleteHistory}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default BrowserHistory;
