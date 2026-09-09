"use client";

import { useState } from "react";
import { AdvisorDialog } from "@/components/advisor-dialog";
import { ArrowLeft, ArrowUpRight } from "@/components/icons";
import type { TeamMember } from "@/lib/team";

/**
 * Flip card: the portrait face flips to a summary, which can open the full
 * biography dialog. The hidden face is `inert` so it stays out of tab order.
 */
export function TeamCard({ member }: { member: TeamMember }) {
  const [flipped, setFlipped] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const { portrait } = member;
  const profileId = `profile-${member.slug}`;
  const hasName = Boolean(member.firstName);

  return (
    <article className={`team-card team-flip-card ${flipped ? "is-flipped" : ""}`}>
      <div className="team-flip-inner">
        <div className="team-face team-front" aria-hidden={flipped}>
          <div className="team-portrait">
            {portrait.kind === "photo" ? (
              // eslint-disable-next-line @next/next/no-img-element -- sprite offsets rely on raw % sizing
              <img
                className={portrait.className}
                src={portrait.src}
                alt={portrait.alt}
                loading="lazy"
                style={
                  portrait.left !== undefined
                    ? { left: `${portrait.left}%` }
                    : undefined
                }
              />
            ) : null}
            {portrait.kind === "placeholder" ? (
              <div className="team-placeholder" aria-label={portrait.ariaLabel}>
                <span>{portrait.letter}</span>
                <small>SUPP / OUR TEAM</small>
              </div>
            ) : null}
          </div>
          <div className="team-details">
            <h3>
              {hasName ? (
                <>
                  {member.firstName}
                  <br />
                  {member.lastName}
                </>
              ) : (
                <>
                  <span aria-hidden="true">&nbsp;</span>
                  <br />
                  <span aria-hidden="true">&nbsp;</span>
                </>
              )}
            </h3>
            <button
              className="team-profile-toggle"
              type="button"
              aria-expanded={flipped}
              aria-controls={profileId}
              aria-label={`ดูประวัติและความเชี่ยวชาญของ ${member.firstName || member.slug}`}
              onClick={() => setFlipped(true)}
            >
              <span>
                {member.role}
                <small>ดูประวัติและความเชี่ยวชาญ</small>
              </span>
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="team-face team-back"
          id={profileId}
          aria-hidden={!flipped}
          inert={!flipped}
        >
          <span className="team-profile-label">{member.profileLabel}</span>
          <h3>
            {member.firstName || "[ชื่อ]"}
            <br />
            {member.lastName || "[นามสกุล]"}
          </h3>
          <p className="team-back-role">{member.backRole}</p>

          <div className="team-bio-section team-summary-bio">
            <h4>{member.summaryName}</h4>
            <p>{member.summaryBio}</p>
          </div>
          <div className="team-bio-section team-summary-expertise">
            <h4>ความเชี่ยวชาญ</h4>
            <p>
              {member.summaryExpertise.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <br /> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="team-bio-section team-summary-qualifications">
            <h4>คุณวุฒิและสมาชิกสมาคม</h4>
            <p>{member.summaryQualifications}</p>
          </div>

          <button
            className="advisor-read-more"
            type="button"
            aria-haspopup="dialog"
            onClick={() => setDialogOpen(true)}
          >
            อ่านประวัติฉบับเต็ม <ArrowUpRight size={17} />
          </button>
          <button
            className="team-back-button"
            type="button"
            onClick={() => setFlipped(false)}
          >
            <ArrowLeft size={18} />
            กลับไปดูรูป
          </button>
        </div>
      </div>

      {dialogOpen ? (
        <AdvisorDialog
          profile={member.profile}
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      ) : null}
    </article>
  );
}
