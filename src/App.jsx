import React, { useState, useEffect } from "react";
import {
  useIntl,
  IntlProvider,
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedRelativeTime,
  FormattedNumber,
  FormattedList,
} from "react-intl";

let initLocale = "en";
if (navigator.language === "es-MX") {
  initLocale = "es-MX";
} else if (navigator.language === "ar") {
  initLocale = "ar";
}

function loadMessages(locale) {
  switch (locale) {
    case "ar":
      return import("./lang/ar.json");
    case "en":
      return import("./lang/en.json");
    case "es-MX":
      return import("./lang/es-MX.json");
    default:
      return import("./lang/en.json");
  }
}

function getDirection(locale) {
  switch (locale) {
    case "ar":
      return "rtl";
    case "en":
      return "ltr";
    case "es-MX":
      return "ltr";
    default:
      return "ltr";
  }
}

function LocalizationWrapper() {
  const [locale, setLocale] = useState(initLocale);
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    loadMessages(locale).then((data) => setMessages(data.default));
  }, [locale]);

  return messages ? (
    <IntlProvider locale={locale} messages={messages}>
      <App locale={locale} direction={getDirection(locale)} onLocaleChange={(locale) => setLocale(locale)} />
    </IntlProvider>
  ) : null;
}
export default LocalizationWrapper;

function App({ locale, direction, onLocaleChange }) {
  const intl = useIntl();

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <select value={locale} onChange={(e) => onLocaleChange(e.target.value)}>
          <option value="en">en</option>
          <option value="es-MX">es-MX</option>
          <option value="ar">ar</option>
        </select>
      </div>

      <div dir={direction} style={{ padding: 20 }} data-testid="examples">
        <h3>Declarative examples</h3>
        <FormattedMessage id="message.simple" />
        <br />
        <FormattedMessage id="message.argument" values={{ name: "John" }} />
        <br />
        <FormattedMessage id="message.plural" values={{ count: 6 }} />
        <br />
        <FormattedMessage id="message.select" values={{ gender: "female" }} />
        <br />
        <FormattedMessage id="message.text-format" values={{ b: (value) => <b>{value}</b> }} />
        <br />
        <FormattedMessage id="message.number-format" values={{ num: 7500 }} />
        <br />
        <FormattedMessage id="message.currency-format" values={{ amount: 7.5 }} />
        <br />
        <FormattedNumber value={7500} />
        <br />
        <FormattedNumber value={7.5} style="currency" currency="USD" /> {/* eslint-disable-line */}
        <br />
        <FormattedDate value={Date.now()} year="numeric" month="long" day="2-digit" />
        <br />
        <FormattedTime value={Date.now()} />
        <br />
        <FormattedRelativeTime value={0} numeric="auto" updateIntervalInSeconds={1} />
        <br />
        <FormattedList type="conjunction" value={["foo", "bar", "baz"]} />

        <h3>Imperative examples</h3>
        {intl.formatMessage({ id: "message.simple" })}
        <br />
        {intl.formatMessage({ id: "message.argument" }, { name: "John" })}
        <br />
        {intl.formatMessage({ id: "message.plural" }, { count: 5 })}
        <br />
        {intl.formatMessage({ id: "message.select" }, { gender: "female" })}
        <br />
        {intl.formatMessage({ id: "message.text-format" }, { b: (value) => <b>{value}</b> })}
        <br />
        {intl.formatMessage({ id: "message.number-format" }, { num: 7500 })}
        <br />
        {intl.formatMessage({ id: "message.currency-format" }, { amount: 7.5 })}
        <br />
        {intl.formatNumber(7500)}
        <br />
        {intl.formatNumber(7.5, { style: "currency", currency: "USD" })}
        <br />
        {intl.formatDate(Date.now(), { year: "numeric", month: "long", day: "2-digit" })}
        <br />
        {intl.formatTime(Date.now())}
        <br />
        {intl.formatRelativeTime(-5, "second", { style: "narrow" })}
        <br />
        {intl.formatList(["foo", "bar", "baz"], { type: "conjunction" })}
      </div>

      <div style={{ textAlign: "center", marginTop: 60, marginBottom: 20 }}>
        For more details, please see the full <a href="https://localizely.com/blog/react-intl-tutorial/"> post</a> on
        Localizely.
      </div>
    </div>
  );
}
