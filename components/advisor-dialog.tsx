"use client";

import { useEffect, useRef } from "react";
import { X } from "@/components/icons";
import type { AdvisorProfile } from "@/lib/team";

type Props = {
  profile: AdvisorProfile;
  open: boolean;
  onClose: () => void;
};

/** Full advisor biography in a native <dialog> so Esc and the backdrop work. */
export function AdvisorDialog({ profile, open, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const titleId = `advisor-profile-title-${profile.firstName}`;

  return (
    <dialog
      ref={ref}
      className="advisor-dialog"
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => {
        // Clicking the backdrop lands on the dialog element itself.
        if (event.target === ref.current) onClose();
      }}
    >
      <div className="advisor-dialog-bar">
        <span>{profile.kicker}</span>
        <button type="button" onClick={onClose} aria-label="ปิดประวัติ">
          <X size={20} />
        </button>
      </div>
      <div className="advisor-profile-body">
        <header className="advisor-profile-heading">
          <span className="advisor-kicker">{profile.kicker}</span>
          <h2 id={titleId}>
            {profile.firstName}
            <br />
            {profile.lastName}
          </h2>
          {profile.thaiName ? (
            <p className="advisor-thai-name">{profile.thaiName}</p>
          ) : null}
          {profile.nickname ? <p>{profile.nickname}</p> : null}
          {profile.expertise.length > 0 ? (
            <div className="advisor-expertise">
              {profile.expertise.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          ) : null}
        </header>

        {profile.quote.length > 0 ? (
          <blockquote>
            {profile.quote.map((line, index) => (
              <span key={line}>
                {index > 0 ? <br /> : null}
                {line}
              </span>
            ))}
          </blockquote>
        ) : null}

        {profile.sections.map((section) => (
          <section
            key={section.heading}
            className={
              section.className
                ? `advisor-section ${section.className}`
                : "advisor-section"
            }
          >
            <h3>{section.heading}</h3>
            {section.paragraphs?.map((paragraph, index) => (
              <p key={`${section.heading}-${index}`}>
                {paragraph.label ? (
                  <>
                    <strong>{paragraph.label}</strong>
                    <br />
                  </>
                ) : null}
                {paragraph.text}
              </p>
            ))}
            {section.credentials ? (
              <dl className="advisor-credentials">
                {section.credentials.map((credential) => (
                  <div key={credential.code}>
                    <dt>
                      {credential.code} <span>{credential.name}</span>
                    </dt>
                    <dd>{credential.description}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </section>
        ))}
      </div>
    </dialog>
  );
}
