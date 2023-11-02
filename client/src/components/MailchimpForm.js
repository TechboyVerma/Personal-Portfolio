import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const REACT_APP_MAILCHIMP="https://gmail.us21.list-manage.com/subscribe/post";
  const REACT_U="e14dd316a04af8c3ec6236168";
  const REACT_ID="273fe07d9c";
  const postUrl = `${REACT_APP_MAILCHIMP}?u=${REACT_U}&id=${REACT_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
