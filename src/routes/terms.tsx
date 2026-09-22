import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Juleco" },
      { name: "description", content: "Terms governing your use of the Juleco informational website." },
      { property: "og:title", content: "Terms of Service | Juleco" },
      { property: "og:description", content: "The terms that apply when you access and use the Juleco website." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms apply when you access or use the Juleco website."
    >
      <h2>General information</h2>
      <p>
        This website provides general information about [Juleco (Pty) Ltd] and its services. The
        content is not professional, legal, financial or other specialist advice, and should not be
        treated as a substitute for advice based on your particular circumstances.
      </p>

      <h2>Use of this website</h2>
      <p>
        You may use this website for lawful informational purposes. While we take reasonable care to
        keep its content useful and current, we do not promise that every item will always be
        complete, accurate or available.
      </p>

      <h2>Ownership</h2>
      <p>
        Unless stated otherwise, the website and its content belong to Juleco. You may view and share
        links to the site, but you may not copy, publish or use its content commercially without our
        written permission.
      </p>

      <h2>Liability</h2>
      <p>
        To the extent permitted by law, Juleco is not liable for loss or damage arising from reliance
        on this website's general content, or from the website being unavailable. Nothing in these
        terms excludes liability that cannot lawfully be excluded.
      </p>

      <h2>External links</h2>
      <p>
        This website may link to websites operated by others. Those links are provided for
        convenience and do not mean that Juleco endorses or controls the linked website, its content
        or its practices.
      </p>

      <h2>Applicable law</h2>
      <p>
        These terms are governed by the laws of South Africa. Any dispute will be handled by the
        courts with appropriate jurisdiction in South Africa.
      </p>

      <h2>Contact</h2>
      <p>
        If you have a question about these terms, email{" "}
        <a href="mailto:admin@juleco.co.za">admin@juleco.co.za</a>.
      </p>
    </LegalPage>
  );
}