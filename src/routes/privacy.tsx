import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | JuleCo" },
      { name: "description", content: "How JuleCo handles personal information under South Africa's POPIA." },
      { property: "og:title", content: "Privacy Policy | JuleCo" },
      { property: "og:description", content: "How JuleCo collects, uses, protects and deletes personal information." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how JuleCo (Pty) Ltd handles personal information when you contact us or use this website."
    >
      <h2>What we collect</h2>
      <p>
        We collect only the personal information that you choose to send us by email. This may
        include your name, email address, organisation, and any details you include in your message
        or attachments.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use this information to respond to your enquiry, discuss possible work, provide services
        you have requested, and maintain necessary business records. We process personal information
        only for these legitimate purposes and in line with the Protection of Personal Information
        Act, 2013 (POPIA).
      </p>

      <h2>Sharing and selling</h2>
      <p>
        We do not sell personal information. We share it only when necessary to provide an agreed
        service, meet a legal obligation, or protect our rights. Where another service provider
        handles information for us, we expect it to be protected appropriately.
      </p>

      <h2>Cookies and tracking</h2>
      <p>
        This website does not use tracking or advertising cookies. We do not use the site to build
        advertising profiles or monitor visitors across other websites.
      </p>

      <h2>Retention and security</h2>
      <p>
        We keep personal information only for as long as it is reasonably needed for the purpose for
        which it was collected, or as required by law. We take reasonable steps to protect it from
        loss, misuse, unauthorised access or disclosure.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to applicable law, you may ask whether we hold personal information about you and
        request access to it. You may also ask us to correct inaccurate information or delete
        information that we no longer need to keep.
      </p>

      <h2>Privacy requests</h2>
      <p>
        For a privacy request or question, email us at{" "}
        <a href="mailto:admin@juleco.co.za">admin@juleco.co.za</a>. We will respond within a
        reasonable time and may need to confirm your identity before acting on a request.
      </p>
    </LegalPage>
  );
}
