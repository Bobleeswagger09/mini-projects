const User = ({ avatar, url, username }) => {
    return ( 
        <div className="user">
            <img src={avatar}  alt={`${username}`}  width="50" height="50" />
            <a href={url} target="_blank" rel="noopener noreferer">
                {username}
            </a>
        </div>
     );
}
 
export default User;

// noopener prevents the newly opened tab from having access to the original page, reducing the risk of malicious code manipulating the original page.

// noreferrer additionally prevents the new page from sending back information to the original page, further protecting user privacy.

// your users' browsing experience more secure and private when they click on links that open in a new tab or window.

