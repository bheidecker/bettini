import axios from "axios";

export default class TwitterUpdate {
  constructor() {
    // sessionStorage.removeItem("latestUpdates");
    this.twitterRootElm = document.querySelector("[data-twitter-count]");
    this.tweetCount = Number(this.twitterRootElm.dataset.twitterCount);
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

      card.querySelectorAll('.selector-twitter-avatar-img').forEach(x => x.setAttribute('src', tweet.retweeted_tweet?.author?.avatar || tweet.author.avatar));
      card.querySelector('.placeholder-twitter-user-name').outerHTML = tweet.retweeted_tweet?.author?.name || tweet.author.name;
      card.querySelector('.placeholder-twitter-user-handle').outerHTML = '@' + (tweet.retweeted_tweet?.author?.screen_name || tweet.author.screen_name);
      card.querySelector('.placeholder-twitter-post-date').outerHTML = this._shortDate(tweet.retweeted_tweet?.created_at || tweet.created_at);
      card.querySelector('.placeholder-twitter-post-text').outerHTML = this._rewriteText(tweet.text);

      const verifiedNode = card.querySelector('.selector-twitter-verified');
      const isVerified = tweet.retweeted_tweet ? tweet.retweeted_tweet.author.blue_verified : tweet.author.blue_verified;
      if (!isVerified) {
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
    subtweetCardNode.addEventListener('click', this._linkToTweet(subtweetData.author?.screen_name, subtweetData.tweet_id))
    subtweetCardNode.querySelector('.selector-twitter-subtweet-image').setAttribute('src', subtweetData.author?.avatar);
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-user-name').outerHTML = subtweetData.author?.name;
    subtweetCardNode.querySelector('.placeholder-twitter-subtweet-user-handle').outerHTML = '@' + subtweetData.author?.screen_name;
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
