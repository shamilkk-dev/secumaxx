const navLinks = [
  { label: "What We Do", href: "#what-we-do" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const clientLogos = [
  "Hikvision",
  "Matrix",
  "Ajax",
  "Prama",
  "Netgear",
  "Bosch",
  "Honeywell",
  "eSSL",
  "ZKTeco",
];


React.createElement(
  "a",
  { className: "brand", href: "#home", "aria-label": "Secumax home" },
  React.createElement("img", {
    className: "brand-logo",
    src: "./images/logo.png",
    alt: "Secumax logo",
  }),
  React.createElement("span", { className: "brand-and" }, "and"),
  React.createElement("span", { className: "brand-name" }, "Secumax")
)

function Hero() {
  return React.createElement(
    "section",
    { id: "home", className: "hero" },
    React.createElement(
      "div",
      { className: "hero-content" },
      React.createElement("p", { className: "eyebrow" }, "Serving excellence since 2010"),
      React.createElement(
        "h1",
        null,
        "Complete security solutions for homes, businesses, and projects."
      ),
      React.createElement(
        "p",
        { className: "hero-copy" },
        "Secumax Distributors supplies trusted surveillance, access control, networking, fire safety, telecom, and entrance control systems across Kerala with consultation, delivery, installation support, and after-sale service."
      ),
      React.createElement(
        "div",
        { className: "hero-actions" },
        React.createElement("a", { className: "button primary", href: "#contact" }, "Contact Us"),
        React.createElement("a", { className: "button secondary", href: "#quote" }, "Get a Quote")
      )
    ),
    React.createElement(
      "div",
      { className: "hero-visual" },
      React.createElement("div", {
        className: "image-placeholder",
        role: "img",
        "aria-label": "Placeholder for security product or installation image",
      },
      React.createElement("span", null, "Hero image placeholder"),
      React.createElement("small", null, "Aspect ratio 16:10 | Width 620px")
      )
    )
  );
}

function WhatWeDo() {
  return React.createElement(
    "section",
    { id: "what-we-do", className: "section intro-section" },
    React.createElement(
      "div",
      { className: "section-text" },
      React.createElement("p", { className: "eyebrow" }, "What makes Secumax different"),
      React.createElement("h2", null, "One distribution partner for the full security stack."),
      React.createElement(
        "p",
        null,
        "From CCTV and biometric access to structured cabling, alarms, public address systems, smart locks, gate automation, baggage scanners, and fire safety, our team helps dealers and project customers choose the right products and keep every site supported."
      )
    ),
    React.createElement(
      "ul",
      { className: "service-list" },
      React.createElement("li", null, "Pre-sales consultation"),
      React.createElement("li", null, "On-time product delivery"),
      React.createElement("li", null, "Installation support"),
      React.createElement("li", null, "After-sale service")
    )
  );
}

function Clients() {
  return React.createElement(
    "section",
    { id: "clients", className: "section clients-section" },
    React.createElement("p", { className: "eyebrow" }, "Our client logos"),
    React.createElement("h2", null, "Trusted by customers across security, networking, and automation needs."),
    React.createElement(
      "div",
      { className: "logo-grid" },
      clientLogos.map((logo) =>
        React.createElement(
          "a",
          { key: logo, href: "?#", className: "logo-placeholder" },
          React.createElement("span", null, logo),
          React.createElement("small", null, "Logo placeholder | 3:2 | 180px wide")
        )
      )
    )
  );
}

function Footer() {
  return React.createElement(
    "footer",
    { id: "contact", className: "site-footer" },
    React.createElement(
      "div",
      { className: "footer-left" },
      React.createElement(
        "nav",
        { className: "footer-nav", "aria-label": "Footer navigation" },
        navLinks.map((link) =>
          React.createElement("a", { key: link.href, href: link.href }, link.label)
        ),
        React.createElement("a", { id: "quote", href: "?#" }, "Quote")
      ),
      React.createElement(
        "address",
        null,
        React.createElement("strong", null, "Kozhikode"),
        React.createElement("span", null, "Varikoly Tower, B10/B11, UK Sankunni Road, Kozhikode - 673001"),
        React.createElement("strong", null, "Ernakulam"),
        React.createElement("span", null, "Door No. 2825/B, Ground Floor, Ravipuram, Ernakulam South - 682016")
      ),
      React.createElement(
        "div",
        { className: "contact-lines" },
        React.createElement("a", { href: "tel:+918075633046" }, "8075633046"),
        React.createElement("a", { href: "tel:+918330842663" }, "8330842663"),
        React.createElement("a", { href: "mailto:sales@secumaxtech.com" }, "sales@secumaxtech.com")
      ),
      React.createElement(
        "div",
        { className: "social-links", "aria-label": "Social media links" },
        socialLinks.map((item) =>
          React.createElement("a", { key: item.label, href: "?#", "aria-label": item.label }, item.icon)
        )
      )
    ),
    React.createElement(
      "div",
      { className: "footer-company" },
      React.createElement("h2", null, "Secumax Distributors"),
      React.createElement(
        "p",
        null,
        "Authorised distributor for security, surveillance, networking, access control, telecom, fire safety, and entrance control solutions."
      )
    )
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),
    React.createElement("main", null, React.createElement(Hero), React.createElement(WhatWeDo), React.createElement(Clients)),
    React.createElement(Footer)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
