export const getUsername = () => {
  const myToken = localStorage.getItem("persist:auth");
  if (myToken !== null) {
    // console.log("my token: ", myToken);
    const myParsedToken = JSON.parse(myToken);
    return myParsedToken.username.substr(1, myParsedToken.username.length - 2);
  } else {
    return false;
  }
};

export const createHref = (type, data) => {
  switch (type) {
    case "whatsapp":
      return `https://api.whatsapp.com/send?phone=${data}`;
    case "email":
      return `mailto:${data}`;
    case "address":
      return `https://maps.google.com/maps?daddr=${data}`;
    case "twitter":
      return `https://twitter.com/${data}`;
    case "facebook":
      return `https://www.facebook.com/${data}`;
    case "youtube":
      return `https://www.youtube.com/channel/${data}`;
    case "pinterest":
      return `https://www.pinterest.com/${data}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${data}`;
    case "phone":
      return `tel:${data}`;
    default:
      return `${data}`;
  }
};
