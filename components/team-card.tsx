"use client";

import Image from "next/image";
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

  return (
    <article className={`team-card team-flip-card ${flipped ? "is-flipped" : ""}`}>
      <div className="team-flip-inner">
        {/* The whole face is a mouse/touch target; the toggle button below is
            the keyboard path, so the face itself stays out of tab order. */}
        <div
          className="team-face team-front"
          aria-hidden={flipped}
          onClick={() => setFlipped(true)}
        >
          <div className="team-portrait">
            {portrait.kind === "photo" ? (
              <Image
                className={portrait.className}
                src={portrait.src}
                alt={portrait.alt}
                width={660}
                height={950}
                sizes="(max-width: 700px) 45vw, (max-width: 1050px) 30vw, 20vw"
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
              {member.firstName}
              <br />
              {member.lastName}
            </h3>
            <button
              className="team-profile-toggle"
              type="button"
              aria-expanded={flipped}
              aria-controls={profileId}
              aria-label={`ดูประวัติและความเชี่ยวชาญของ ${member.firstName}`}
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
            {member.firstName}
            <br />
            {member.lastName}
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
            <h4>{member.qualificationsHeading ?? "คุณวุฒิและสมาชิกสมาคม"}</h4>
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
