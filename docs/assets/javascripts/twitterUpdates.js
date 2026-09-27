import axios from "axios";

// RapidAPI's twitter-api45 no longer populates author name/handle/avatar (only rest_id)
const OWN_ACCOUNT = {
  rest_id: "927643252332773376",
  name: "Bettina Heidecker",
  screen_name: "BettinaHeideck1",
};

export default class TwitterUpdate {
  constructor() {
    // sessionStorage.removeItem("latestUpdates");
    this.twitterRootElm = document.querySelector("[data-twitter-count]");
    this.tweetCount = Number(this.twitterRootElm.dataset.twitterCount);
    this.ownAvatar = this.twitterRootElm.dataset.twitterAvatar;
    this.twitterWrapperTemplate = document.querySelector("#tmpl-twitter-wrapper");
    this.twitterCardTemplate = document.querySelector("#tmpl-twitter-card");
    if (
      this.twitterRootElm &&
      this.tweetCount > 0 &&
      this.twitterWrapperTemplate &&
      this.twitterCardTemplate
    ) {
      this.getData().then((data) => this.process(data));
    }
  }

  async getData() {
    let data = sessionStorage.getItem("latestUpdates");
    if (data) {
      data = JSON.parse(data);
    } else {
      try {
        const response = await axios.get(window.twitterEndpoint);
        data = response.data;
        sessionStorage.setItem("latestUpdates", JSON.stringify(data));
      } catch (err) {
        console.error(err);
        return {};
      }
    }
    return data;
  }

  process(data) {
    const component = this.twitterWrapperTemplate.content.cloneNode(true);
    const cardList = document.createDocumentFragment();
    data.slice(0, this.tweetCount).forEach(tweet => {
      const card = this.twitterCardTemplate.content.cloneNode(true);
      
      card.querySelector('.selector-twitter-card').addEventListener('click', this._linkToTweet('BettinaHeideck1', tweet.tweet_id));

      const retweetHeaderNode = card.querySelector('.selector-twitter-retweet-header');
      const subtweetCardNode = card.querySelector('.selector-twitter-subtweet-card');
      if (!tweet.retweeted_tweet) retweetHeaderNode.parentNode.removeChild(retweetHeaderNode);
      if (tweet.quoted) {
        this._processSubtweet(subtweetCardNode, tweet.quoted)
      } else {
        subtweetCardNode.parentNode.removeChild(subtweetCardNode);
      }

      const author = this._resolveAuthor(tweet.retweeted_tweet || tweet);
      card.querySelectorAll('.selector-twitter-avatar-img').forEach(x => this._setAvatar(x, author.avatar));
      card.querySelector('.placeholder-twitter-user-name').outerHTML = author.name;
      card.querySelector('.placeholder-twitter-user-handle').outerHTML = this._handlePrefix(author.screenName);
      card.querySelector('.placeholder-twitter-post-date').outerHTML = this._shortDate(tweet.retweeted_tweet?.created_at || tweet.created_at);
      card.querySelector('.placeholder-twitter-post-text').outerHTML = this._rewriteText(tweet.text);

      const verifiedNode = card.querySelector('.selector-twitter-verified');
      if (!author.verified) {
        verifiedNode.parentNode.removeChild(verifiedNode);
      }

      const mediaNode = card.querySelector('.selector-twitter-media');
      const photoUrl = this._extractPhoto(tweet.retweeted_tweet) || this._extractPhoto(tweet);
      if (photoUrl) {
        mediaNode.style.backgroundImage = `url('${photoUrl}')`;
      } else {
        mediaNode.parentNode.removeChild(mediaNode);
      }

      if (tweet.retweeted_tweet) {
        card.querySelector('.selector-twitter-comment-button').addEventListener('click', this._linkToCommentCTA(tweet.retweeted_tweet.tweet_id));
        card.querySelector('.placeholder-twitter-comment-metric').outerHTML = tweet.retweeted_tweet.replies > 0 ? tweet.retweeted_tweet.replies : '';
        
        card.querySelector('.selector-twitter-like-button').addEventListener('click', this._linkToLikeCTA(tweet.retweeted_tweet.tweet_id));
        card.querySelector('.placeholder-twitter-like-metric').outerHTML = tweet.retweeted_tweet.favorites > 0 ? tweet.retweeted_tweet.favorites : '';
      } else {
        card.querySelector('.selector-twitter-comment-button').addEventListener('click', this._linkToCommentCTA(tweet.tweet_id));
        card.querySelector('.placeholder-twitter-comment-metric').outerHTML = tweet.replies > 0 ? tweet.replies : '';
        
        card.querySelector('.selector-twitter-like-button').addEventListener('click', this._linkToLikeCTA(tweet.tweet_id));
        card.querySelector('.placeholder-twitter-like-metric').outerHTML = tweet.favorites > 0 ? tweet.favorites : '';
      }
      
      cardList.appendChild(card);
    })

    const placeholder = component.querySelector('.placeholder-twitter-card');
    placeholder.parentNode.insertBefore(cardList, placeholder);
    placeholder.parentNode.removeChild(placeholder);
    this.twitterRootElm.replaceChildren(component);
  }

  _processSubtweet(subtweetCardNode, subtweetData) {
    const author = this._resolveAuthor(subtweetData);
    // twitter.com/i/status/<id> resolves without knowing the author's handle
    subtweetCardNode.addEventListener('click', this._linkToTweet(author.screenName || 'i', subtweetData.tweet_id))
    this._setAvatar(subtweetCardNode.querySelector('.selector-twitter-subtweet-image'), author.avatar);
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-user-name').outerHTML = author.name;
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-user-handle').outerHTML = this._handlePrefix(author.screenName);
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-post-date').outerHTML = this._shortDate(subtweetData.created_at);
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-post-text').outerHTML = subtweetData.text;

    const mediaNode = subtweetCardNode.querySelector('.selector-twittter-subtweet-media');
    const photoUrl = this._extractPhoto(subtweetData);
    if (photoUrl) {
      mediaNode.style.backgroundImage = `url('${photoUrl}')`;
    } else {
      mediaNode.parentNode.parentNode.removeChild(mediaNode.parentNode);
    }
  }

  _resolveAuthor(data) {
    const author = data?.author || {};
    const own = author.rest_id === OWN_ACCOUNT.rest_id ? { ...OWN_ACCOUNT, avatar: this.ownAvatar } : {};
    const screenName = author.screen_name || own.screen_name || this._screenNameFromMedia(data);
    return {
      name: author.name || own.name || screenName || '',
      screenName,
      avatar: author.avatar || own.avatar,
      verified: author.blue_verified,
    };
  }

  // Media URLs look like https://x.com/<screen_name>/status/<id>/photo/1
  _screenNameFromMedia(data) {
    const url = data?.entities?.media?.[0]?.expanded_url;
    return url?.match(/^https?:\/\/(?:x|twitter)\.com\/(\w+)\/status\//)?.[1];
  }

  _setAvatar(imgNode, url) {
    if (url) {
      imgNode.setAttribute('src', url);
    } else {
      // Keep the avatar's space so the card layout stays aligned
      imgNode.style.visibility = 'hidden';
    }
  }

  _handlePrefix(screenName) {
    return screenName ? `@${screenName} ·` : '';
  }

  _linkFunction(arr) {
    return (e) => {
      e.preventDefault();
      window.open(`https://twitter.com/${arr.join('/')}`, '_blank')
    }
  }

  _linkToTweet(screenName, tweetId) {
    return this._linkFunction([screenName, 'status', tweetId])
  }

  _linkToCommentCTA(tweetId) {
    return this._linkFunction(['intent', `tweet?in_reply_to=${tweetId}`])
  }

  _linkToLikeCTA(tweetId) {
    return this._linkFunction(['intent', `like?tweet_id=${tweetId}`])
  }

  _extractPhoto(data) {
    if (!data || !data.media || data.media instanceof Array) return;
    return data.media.photo?.[0]?.media_url_https
  }

  _shortDate(dateStr) {
    if (!dateStr) return;
    const date = new Date(dateStr);
    return date.toLocaleString('default', { month: 'short' }) + ' ' + date.getDate();
  }

  _rewriteLink(text, link) {
    return `<a 
        class="btn text-sky-500 hover:underline cursor-pointer"
        onClick="event.stopPropagation();"
        href="${link}" 
        target="_blank"
      >
        ${text.trim()}
      </a>`
  }

  _rewriteText(text) {
    text = text.replace(/\n/g, '<br/>');
    text = text.replace(/(https?:\/\/[^,\s]+)/g, match => this._rewriteLink(match, match));
    text = text.replace(/#(\w+)/g, match => this._rewriteLink(match, `https://twitter.com/hashtag/${match.slice(1)}`));
    text = text.replace(/@(\w+)/g, match => this._rewriteLink(match, `https://twitter.com/${match.slice(1)}`));
    return text;
  }
}
