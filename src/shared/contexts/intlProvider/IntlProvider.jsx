import { IntlProvider } from "react-intl";

import messagesInEnglish from "../../../../lang/en.json";

export default function CustomIntlProvider({ children }) {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      {children}
    </IntlProvider>
  );
}
