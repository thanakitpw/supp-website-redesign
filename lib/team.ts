/**
 * SUPP advisor roster.
 *
 * The first twelve advisors come from the client's team doc ("supp team",
 * Google Docs, Oct 2026), in the doc's order. Karunyaporn's awards are not in
 * the doc and are kept from the old site. The last four (Jakaphan, Sahathon,
 * Wanravee, Sakkasem) are not in the doc; they keep the old-site popup data
 * until the client says whether they stay.
 *
 * Portraits are the old site's own photos, re-framed to the card's 660×950 and
 * served from `/images/team/`. `kind: "placeholder"` shows the initial tile for
 * an advisor with no usable photo yet.
 */

export type Portrait =
  | { kind: "photo"; src: string; alt: string; className?: string }
  | { kind: "placeholder"; letter: string; ariaLabel: string };

export type Credential = { code: string; name: string; description: string };

export type ProfileParagraph = { label?: string; text: string };

export type ProfileSection = {
  heading: string;
  className?: string;
  paragraphs?: ProfileParagraph[];
  credentials?: Credential[];
};

export type AdvisorProfile = {
  kicker: string;
  firstName: string;
  lastName: string;
  thaiName: string;
  nickname: string;
  expertise: string[];
  quote: string[];
  sections: ProfileSection[];
};

export type TeamMember = {
  slug: string;
  portrait: Portrait;
  firstName: string;
  lastName: string;
  role: string;
  profileLabel: string;
  backRole: string;
  summaryName: string;
  summaryBio: string;
  summaryExpertise: string[];
  summaryQualifications: string;
  /** Card heading over `summaryQualifications`; defaults to "คุณวุฒิและสมาชิกสมาคม". */
  qualificationsHeading?: string;
  profile: AdvisorProfile;
};

export const team: TeamMember[] = [
  {
    "slug": "karunyaporn",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/karunyaporn.webp",
      "alt": "Karunyaporn Thanomsap",
      "className": "team-photo"
    },
    "firstName": "Karunyaporn",
    "lastName": "Thanomsap",
    "role": "Founder",
    "profileLabel": "PROFILE / JJAY",
    "backRole": "Founder",
    "summaryName": "JJay · กรัณยพร ถนอมทรัพย์",
    "summaryBio": "นำประสบการณ์ด้านการขาย การตลาด และการวางแผนธุรกิจมาสร้าง SUPP เพื่อช่วยให้เรื่องเงินเข้าใจง่าย พร้อมความมั่นใจและเครื่องมือที่เหมาะกับชีวิตจริง",
    "summaryExpertise": [
      "Financial Planning",
      "Risk Management"
    ],
    "summaryQualifications": "MFA · FChFP · MDRT",
    "profile": {
      "kicker": "FOUNDER",
      "firstName": "Karunyaporn",
      "lastName": "Thanomsap",
      "thaiName": "กรัณยพร ถนอมทรัพย์",
      "nickname": "JJay",
      "expertise": [
        "Financial Planning",
        "Risk Management"
      ],
      "quote": [
        "ทุกแผนเริ่มจากการเข้าใจชีวิตคุณอย่างรอบด้าน",
        "ไม่มีแผนสำเร็จรูป มีแต่แผนที่ออกแบบมาเพื่อคุณ"
      ],
      "sections": [
        {
          "heading": "รู้จัก JJay",
          "paragraphs": [
            {
              "text": "มีประสบการณ์ด้านการขาย การตลาด และการวางแผนธุรกิจ ก่อนก่อตั้งและบริหาร SUPP โดยมุ่งสร้างแนวทางการให้คำปรึกษาทางการเงินที่ช่วยให้เรื่องการเงินที่ซับซ้อนเข้าใจง่าย และสามารถนำไปประยุกต์ใช้กับชีวิตจริงได้"
            },
            {
              "text": "เชื่อว่าการวางแผนการเงินที่ดีไม่ควรมีเพียงความรู้ แต่ควรช่วยสร้างความมั่นใจและมีเครื่องมือที่เหมาะสม เพื่อให้ลูกค้าสามารถวางแผนและเดินไปสู่เป้าหมายทางการเงินของตนเองได้อย่างชัดเจน"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "ปัจจุบันดำรงตำแหน่ง Founder & CEO ของ SUPP และมีประสบการณ์ด้าน Sales, Marketing และ Sales Planning จากองค์กรชั้นนำ ก่อนนำประสบการณ์ด้านธุรกิจ การตลาด และการบริหารมาพัฒนา SUPP เพื่อสร้างแนวทางการวางแผนการเงินที่ช่วยให้ลูกค้าสามารถจัดการเรื่องการเงินได้อย่างมีประสิทธิภาพและสอดคล้องกับเป้าหมายชีวิต"
            },
            {
              "label": "Sales Executive & Marketing",
              "text": "Neo Asia Co., Ltd."
            },
            {
              "label": "Sales Planning",
              "text": "Honda Automobile (Thailand) Co., Ltd."
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Executives, Business Owners และ Family Office",
              "text": ""
            },
            {
              "text": "เชี่ยวชาญด้านการดูแลลูกค้าที่ต้องการวางแผนการเงินอย่างเป็นระบบ ครอบคลุมทั้งการบริหารความเสี่ยง การจัดโครงสร้างทางการเงิน และการวางแผนเพื่อสร้างความมั่นคงในระยะยาว"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Master’s Degree in Marketing",
              "text": "University of Leeds, United Kingdom"
            },
            {
              "label": "Bachelor’s Degree in Marketing",
              "text": "Bangkok University International College"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "MFA",
              "name": "Master Financial Advisor",
              "description": "Professional Designation จาก LIMRA"
            },
            {
              "code": "FChFP",
              "name": "Fellow Chartered Financial Practitioner",
              "description": "Professional Designation ภายใต้ Asia Pacific Financial Services Association (APFinSA)"
            },
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "รางวัลและผลงาน",
          "paragraphs": [
            {
              "label": "MDRT Agent of the Year",
              "text": "2 TOT · 5 COT · 3 MDRT"
            },
            {
              "label": "FA of the Year",
              "text": "และ CI of the Year (2 ครั้ง)"
            },
            {
              "label": "GAMA Awards",
              "text": "2022–2024"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 5001031173"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
              "name": "",
              "description": "เลขทะเบียน 069117"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "akasit",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/akasit.webp",
      "alt": "Akasit Assawamongkolpun",
      "className": "team-photo"
    },
    "firstName": "Akasit",
    "lastName": "Assawamongkolpun",
    "role": "Co-Founder",
    "profileLabel": "PROFILE / HAM",
    "backRole": "Co-Founder",
    "summaryName": "Ham · เอกสิทธิ์ อัศวมงคลพันธุ์",
    "summaryBio": "ประสบการณ์ในสายการเงินกว่า 14 ปี ช่วยผู้บริหาร Professionals และเจ้าของธุรกิจวางแผนจากเป้าหมายชีวิต และตัดสินใจเรื่องเงินได้ชัดเจนขึ้น",
    "summaryExpertise": [
      "Financial Planning",
      "Retirement Planning"
    ],
    "summaryQualifications": "MFA · FChFP · MDRT",
    "profile": {
      "kicker": "CO-FOUNDER",
      "firstName": "Akasit",
      "lastName": "Assawamongkolpun",
      "thaiName": "เอกสิทธิ์ อัศวมงคลพันธุ์",
      "nickname": "Ham",
      "expertise": [
        "Financial Planning",
        "Retirement Planning"
      ],
      "quote": [
        "การตัดสินใจทางการเงินที่ดี",
        "เริ่มต้นจากความชัดเจน"
      ],
      "sections": [
        {
          "heading": "รู้จัก Ham",
          "paragraphs": [
            {
              "text": "มีประสบการณ์ในสายการเงินมากกว่า 14 ปี ปัจจุบันให้คำปรึกษาด้าน Financial Planning และ Retirement Planning โดยมุ่งช่วยให้ Professionals ผู้บริหาร และเจ้าของธุรกิจมีความชัดเจนในการตัดสินใจทางการเงินที่สำคัญ ผ่านการวางแผนที่เริ่มต้นจากเป้าหมายชีวิตและออกแบบให้เหมาะกับแต่ละบุคคล"
            },
            {
              "text": "เชื่อว่าการวางแผนการเงินที่ดีควรเริ่มจากชีวิตของลูกค้า ไม่ใช่ผลิตภัณฑ์ เพื่อให้ทุกการตัดสินใจทางการเงินเชื่อมโยงกับสิ่งที่ลูกค้าต้องการบรรลุในระยะยาว"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 14 ปีในอุตสาหกรรมการเงิน ครอบคลุมทั้งธุรกิจประกันชีวิต การให้คำปรึกษาทางการเงิน การลงทุนและบริหารความมั่งคั่ง รวมถึงเทคโนโลยีด้าน Financial Planning โดยมีประสบการณ์ร่วมงานกับ AIA Thailand, Phillip Capital, FINNOMENA และ GoalsMapper"
            },
            {
              "text": "ประสบการณ์จากหลากหลายด้านช่วยให้สามารถนำองค์ความรู้จาก Risk Management, Investment, Wealth Management และ Financial Technology มาประยุกต์ใช้ในการออกแบบแผนที่เชื่อมโยงกับเป้าหมายชีวิตและสถานการณ์ของลูกค้าแต่ละคนได้อย่างเป็นระบบ"
            },
            {
              "label": "Agency Development Executive",
              "text": "AIA Thailand"
            },
            {
              "label": "Independent Financial Advisor",
              "text": "Phillip Capital"
            },
            {
              "label": "Financial Advisor",
              "text": "FINNOMENA"
            },
            {
              "label": "Financial Planning Technology",
              "text": "GoalsMapper"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Senior Executives, Professionals และ Business Owners",
              "text": ""
            },
            {
              "text": "โดยเฉพาะผู้บริหารและผู้มีรายได้สูงที่ต้องการวางแผนเกษียณ มองหาความชัดเจนว่าเงินและทรัพย์สินที่สะสมไว้จะเพียงพอต่อการรักษามาตรฐานชีวิตหรือไม่ และต้องการออกแบบกระแสเงินสดให้เหมาะสมตลอดช่วงชีวิตหลังเกษียณ"
            },
            {
              "text": "รวมถึงเจ้าของธุรกิจที่ต้องการมองภาพรวมระหว่างทรัพย์สินส่วนบุคคล ครอบครัว และธุรกิจ เพื่อวางโครงสร้างทางการเงินและเตรียมความพร้อมสำหรับเป้าหมายในระยะยาว"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Arts in English",
              "text": "Bangkok University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "MFA",
              "name": "Master Financial Advisor",
              "description": "Professional Designation จาก LIMRA"
            },
            {
              "code": "FChFP",
              "name": "Fellow Chartered Financial Practitioner",
              "description": "Professional Designation ภายใต้ Asia Pacific Financial Services Association (APFinSA)"
            },
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 5801069149"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
              "name": "",
              "description": "เลขทะเบียน 073943"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "chatchai",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/chatchai.webp",
      "alt": "Chatchai Unrasmeewong",
      "className": "team-photo"
    },
    "firstName": "Chatchai",
    "lastName": "Unrasmeewong",
    "role": "Senior Financial Life Partner",
    "profileLabel": "PROFILE / FAIR",
    "backRole": "Senior Financial Life Partner",
    "summaryName": "Fair · ฉัตรชัย อุ่นรัศมีวงศ์",
    "summaryBio": "ช่วยให้ลูกค้ามองเห็นเป้าหมายทางการเงินของตนเองได้ชัดเจนขึ้น พร้อมวางแผน กำหนดกรอบเวลา และเดินไปด้วยกันอย่างเป็นระบบจนถึงเป้าหมายที่ต้องการ",
    "summaryExpertise": [
      "Financial Planning",
      "Retirement Planning"
    ],
    "summaryQualifications": "AFPT™ · MDRT",
    "profile": {
      "kicker": "SENIOR FINANCIAL LIFE PARTNER",
      "firstName": "Chatchai",
      "lastName": "Unrasmeewong",
      "thaiName": "ฉัตรชัย อุ่นรัศมีวงศ์",
      "nickname": "Fair",
      "expertise": [
        "Financial Planning",
        "Retirement Planning"
      ],
      "quote": [
        "เป้าหมายที่ชัดเจน แผนที่เหมาะกับชีวิต",
        "และเพื่อนคู่คิดที่พร้อมเดินไปด้วยกันตลอดเส้นทาง"
      ],
      "sections": [
        {
          "heading": "รู้จัก Fair",
          "paragraphs": [
            {
              "text": "แฟร์เป็นที่ปรึกษาการเงินที่เชื่อว่าทุกคนสามารถบรรลุเป้าหมายทางการเงินที่ต้องการได้ หากรู้ว่าตนเองต้องการอะไรอย่างแท้จริง และมีแผนพร้อมกรอบเวลาที่ชัดเจน"
            },
            {
              "text": "แนวทางการดูแลลูกค้าจึงเริ่มจากการทำความเข้าใจเป้าหมาย วางแผนให้สามารถนำไปปฏิบัติได้จริง และทำหน้าที่เป็นเพื่อนคู่คิดที่คอยช่วยทบทวนและปรับแผนไปด้วยกันในแต่ละช่วงของชีวิต"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์ทั้งจากการทำงานใกล้ชิดกับผู้บริหาร และการทำงานด้านบริการในสายการบิน ซึ่งช่วยพัฒนาทักษะด้านการวิเคราะห์ การจัดลำดับความสำคัญ การสื่อสาร และการเข้าใจความต้องการของผู้คนที่มีพื้นฐานแตกต่างกัน"
            },
            {
              "text": "เมื่อนำประสบการณ์เหล่านี้มาต่อยอดกับการวางแผนการเงิน จึงให้ความสำคัญกับการรับฟัง ทำความเข้าใจเป้าหมายของลูกค้า และช่วยเปลี่ยนเป้าหมายในชีวิตให้กลายเป็นแผนที่ชัดเจน สามารถนำไปปฏิบัติและติดตามผลได้จริง"
            },
            {
              "label": "Assistant to President",
              "text": "Double A (1991) Public Company Limited"
            },
            {
              "label": "Cabin Crew",
              "text": "Thai Airways International Public Company Limited"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "พนักงานบริษัทที่มีรายได้ประจำ และผู้ที่เกษียณอายุแล้ว",
              "text": ""
            },
            {
              "text": "เชี่ยวชาญด้านการดูแลพนักงานบริษัทที่ต้องการเตรียมความพร้อมเพื่อการเกษียณอย่างเป็นระบบ รวมถึงผู้ที่เกษียณอายุแล้วที่ต้องการบริหารเงินและวางแผนการใช้ชีวิตหลังเกษียณให้มีความมั่นคงและสอดคล้องกับเป้าหมายของตนเอง"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Business Administration in Finance",
              "text": "Kasetsart University, Thailand"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "AFPT™",
              "name": "Associate Financial Planner Thailand",
              "description": "Professional Qualification ด้านการวางแผนการเงิน"
            },
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6301045040"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 1",
              "name": "",
              "description": "เลขทะเบียน 115658"
            },
            {
              "code": "ผู้วางแผนการลงทุน (IP License)",
              "name": "",
              "description": "เลขทะเบียน 115658"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "chalermkwan",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/chalermkwan.webp",
      "alt": "Chalermkwan Chanprasert",
      "className": "team-photo"
    },
    "firstName": "Chalermkwan",
    "lastName": "Chanprasert",
    "role": "Senior Financial Life Partner",
    "profileLabel": "PROFILE / JEFF",
    "backRole": "Senior Financial Life Partner",
    "summaryName": "Jeff · เฉลิมขวัญ ชั้นประเสริฐ",
    "summaryBio": "นำประสบการณ์กว่า 15 ปีในสถาบันการเงิน ทั้งด้านบริหารความเสี่ยงและการดูแลลูกค้ากลุ่มผู้บริหาร มาช่วยวางแผนการเงิน ความคุ้มครอง และจัดการภาษีให้สอดคล้องกับเป้าหมายชีวิตของลูกค้า",
    "summaryExpertise": [
      "Risk Management & Insurance Planning",
      "Tax Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "SENIOR FINANCIAL LIFE PARTNER",
      "firstName": "Chalermkwan",
      "lastName": "Chanprasert",
      "thaiName": "เฉลิมขวัญ ชั้นประเสริฐ",
      "nickname": "Jeff",
      "expertise": [
        "Risk Management & Insurance Planning",
        "Tax Planning"
      ],
      "quote": [
        "วางแผนการเงินวันนี้ให้ชัดเจน",
        "เพื่อสร้างชีวิตในอนาคตที่มั่นคงและเป็นไปอย่างที่ตั้งใจ"
      ],
      "sections": [
        {
          "heading": "รู้จัก Jeff",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 15 ปีในสถาบันการเงิน ครอบคลุมทั้งด้านการบริหารความเสี่ยงและกระบวนการดูแลลูกค้ากลุ่มผู้บริหาร ทำให้มีมุมมองทั้งด้านการบริหารความมั่งคั่ง การจัดการความเสี่ยง และการวางแผนทางการเงินระยะยาว"
            },
            {
              "text": "ปัจจุบันให้คำปรึกษาด้านการเงินและการประกันชีวิต โดยให้ความสำคัญกับการทำความเข้าใจเป้าหมายของลูกค้า ก่อนออกแบบแผนด้านความคุ้มครอง การบริหารความเสี่ยง การออม และการจัดการภาษีเพื่อช่วยให้เงินที่มีอยู่ในวันนี้สามารถรองรับชีวิตที่ต้องการในอนาคตได้อย่างเหมาะสม"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 15 ปีในสถาบันการเงิน ทั้งด้าน Risk Management และ Private Banking Strategy ซึ่งช่วยให้เข้าใจทั้งมุมของการบริหารความเสี่ยง การวางกลยุทธ์ทางการเงิน และความต้องการของลูกค้า"
            },
            {
              "text": "ประสบการณ์ดังกล่าวถูกนำมาต่อยอดในการดูแลลูกค้าแบบองค์รวม โดยมองทั้งความมั่นคงในปัจจุบัน การป้องกันความเสี่ยง และความพร้อมทางการเงินในอนาคต ก่อนออกแบบแนวทางที่เหมาะกับเป้าหมายและบริบทของแต่ละคน"
            },
            {
              "label": "Private Banking Strategy",
              "text": "SCB"
            },
            {
              "label": "Risk Management",
              "text": "KBank"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Working Women & Families",
              "text": ""
            },
            {
              "text": "ดูแลผู้หญิงวัยทำงานและครอบครัวที่ต้องการวางแผนการเงินอย่างเป็นระบบ ทั้งด้านการสร้างความคุ้มครอง การบริหารความเสี่ยง การเตรียมเงินเพื่อการเกษียณ และการวางแผนอนาคตของครอบครัว"
            },
            {
              "text": "โดยให้ความสำคัญกับการช่วยให้ลูกค้ามองเห็นภาพรวมทางการเงินของตนเอง และสามารถจัดลำดับเป้าหมายระหว่างความต้องการในวันนี้กับความมั่นคงในระยะยาวได้อย่างเหมาะสม"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Master of Science in Applied Statistics (Information Systems Management)",
              "text": "National Institute of Development Administration (NIDA)"
            },
            {
              "label": "Bachelor of Science in Statistics",
              "text": "Thammasat University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6201000648"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารทั่วไป",
              "name": "",
              "description": "เลขทะเบียน 115160"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "ratchakorn",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/sujira.webp",
      "alt": "Ratchakorn Chanthanakan",
      "className": "team-photo"
    },
    "firstName": "Ratchakorn",
    "lastName": "Chanthanakan",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / G",
    "backRole": "Financial Life Partner",
    "summaryName": "G · รัชกร ชาญธนากานต์",
    "summaryBio": "ช่วยออกแบบกลยุทธ์ทางการเงินที่เชื่อมโยงการเกษียณ การสร้างความมั่งคั่ง และการบริหารความเสี่ยงเข้ากับชีวิตที่ลูกค้าต้องการ เพื่อให้ทุกการตัดสินใจทางการเงินเดินไปในทิศทางเดียวกัน",
    "summaryExpertise": [
      "Retirement Planning",
      "Wealth Accumulation"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Ratchakorn",
      "lastName": "Chanthanakan",
      "thaiName": "รัชกร ชาญธนากานต์",
      "nickname": "G",
      "expertise": [
        "Retirement Planning",
        "Wealth Accumulation"
      ],
      "quote": [
        "ให้การเงินเป็นเครื่องมือที่ช่วยพาคุณไปสู่ชีวิตที่อยากมี"
      ],
      "sections": [
        {
          "heading": "รู้จัก G",
          "paragraphs": [
            {
              "text": "จีเชื่อว่าการวางแผนการเงินที่ดีไม่ใช่การเลือกผลิตภัณฑ์ที่ดีที่สุด แต่คือการออกแบบกลยุทธ์ที่เหมาะกับ “ชีวิตที่ลูกค้าอยากมี” เพื่อให้เงิน การลงทุน และการบริหารความเสี่ยงทำงานไปในทิศทางเดียวกัน"
            },
            {
              "text": "โดยให้ความสำคัญเป็นพิเศษกับการช่วยลูกค้าวางแผนเกษียณ สร้างความมั่งคั่ง และเตรียมความพร้อมรับมือกับความไม่แน่นอนในอนาคต เพื่อให้สามารถตัดสินใจเรื่องเงินได้อย่างชัดเจนและมั่นใจมากขึ้น"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์จากสถาบันการเงินระดับสากล ทั้งในด้าน Private Banking Compliance และ Global Banking Client Service ทำให้มีความเข้าใจทั้งเรื่องการดูแลลูกค้า กระบวนการทางการเงิน การบริหารความเสี่ยง และมาตรฐานการให้บริการลูกค้าที่มีความต้องการทางการเงินซับซ้อน"
            },
            {
              "text": "ประสบการณ์เหล่านี้ถูกนำมาต่อยอดในการวางแผนการเงิน โดยให้ความสำคัญกับการเข้าใจสถานการณ์ของลูกค้าอย่างรอบด้าน ก่อนออกแบบแนวทางด้านการเกษียณ การสะสมความมั่งคั่ง และการบริหารความเสี่ยงให้สอดคล้องกับเป้าหมายชีวิตของแต่ละคน"
            },
            {
              "label": "AML/KYC Compliance Officer",
              "text": "SCB Julius Baer Securities Co., Ltd."
            },
            {
              "label": "Client Service Manager — Global Banking",
              "text": "HSBC Thailand"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Executives & Professionals Approaching Retirement",
              "text": ""
            },
            {
              "text": "ดูแลผู้บริหารและ Professionals ที่กำลังเข้าใกล้วัยเกษียณ และต้องการตอบคำถามสำคัญว่า “ต้องมีเงินเท่าไหร่ จึงจะสามารถใช้ชีวิตหลังเกษียณได้อย่างมั่นใจ” พร้อมวางแผนทั้งเงินลงทุน กระแสเงินสด และความเสี่ยงให้รองรับมาตรฐานชีวิตที่ต้องการในระยะยาว"
            },
            {
              "label": "Women Building Financial Independence",
              "text": ""
            },
            {
              "text": "ดูแลผู้หญิงที่ต้องการสร้างความมั่นคงและอิสระทางการเงินของตนเอง ผ่านการวางแผนการลงทุน การเตรียมความพร้อมเพื่อการเกษียณ และการบริหารความเสี่ยง โดยออกแบบแผนให้สอดคล้องกับชีวิตและเป้าหมายที่ต้องการในอนาคต"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Business Administration",
              "text": "Naresuan University, Thailand"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6601031504"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
              "name": "",
              "description": "เลขทะเบียน 126749"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "teshin",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/teshin.webp",
      "alt": "Teshin Kerdpornputhamon",
      "className": "team-photo"
    },
    "firstName": "Teshin",
    "lastName": "Kerdpornputhamon",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / VAN",
    "backRole": "Financial Life Partner",
    "summaryName": "Van · เตชินท์ เกิดพรพุทธมนต์",
    "summaryBio": "มีพื้นฐานการศึกษาด้านนิเทศศาสตร์จากจุฬาลงกรณ์มหาวิทยาลัย และประสบการณ์ด้านการตลาดและการทำงานโครงการกับ Marketing Bear, Plus 1 และ MAKEiO",
    "summaryExpertise": [
      "Risk Management & Insurance Planning",
      "Investment Planning"
    ],
    "summaryQualifications": "MDRT",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Teshin",
      "lastName": "Kerdpornputhamon",
      "thaiName": "เตชินท์ เกิดพรพุทธมนต์",
      "nickname": "Van",
      "expertise": [
        "Risk Management & Insurance Planning",
        "Investment Planning"
      ],
      "quote": [
        "วางแผนการเงินให้ครบทุกมิติ",
        "เพื่อให้ทุกเป้าหมายชีวิตเดินไปในทิศทางเดียวกัน"
      ],
      "sections": [
        {
          "heading": "รู้จัก Van",
          "paragraphs": [
            {
              "text": "แวนมีประสบการณ์ด้านการวางแผนการเงิน โดยให้คำปรึกษาลูกค้าในมุมมองแบบองค์รวม ครอบคลุมทั้งการเตรียมความพร้อมเพื่อการเกษียณ การโอนย้ายความเสี่ยง และการวางแผนการลงทุน"
            },
            {
              "text": "เชื่อว่าการวางแผนการเงินที่ดีไม่ควรมองแต่เรื่องใดเรื่องหนึ่งแยกออกจากกัน แต่ควรเชื่อมโยงทั้งความคุ้มครอง การสะสมความมั่งคั่ง และเป้าหมายชีวิตเข้าด้วยกัน เพื่อให้ลูกค้าสามารถตัดสินใจทางการเงินได้อย่างมีทิศทางมากขึ้น"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "ก่อนเข้าสู่สายงานวางแผนการเงิน มีประสบการณ์ด้าน Marketing, International Marketing และ Project Management ซึ่งช่วยพัฒนาทักษะด้านการสื่อสาร การทำความเข้าใจความต้องการของผู้คน และการวางแผนอย่างเป็นระบบ"
            },
            {
              "text": "ประสบการณ์เหล่านี้ถูกนำมาต่อยอดในการดูแลลูกค้า โดยให้ความสำคัญกับการทำความเข้าใจเป้าหมายและบริบทของแต่ละคน ก่อนออกแบบแผนด้านความเสี่ยงและการลงทุนให้เหมาะสมกับชีวิตจริง"
            },
            {
              "label": "Project Executive",
              "text": "Marketing Bear"
            },
            {
              "label": "International Marketing Executive",
              "text": "Plus 1"
            },
            {
              "label": "Junior Marketing Executive",
              "text": "MAKEiO"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Young Professionals และ Executives",
              "text": ""
            },
            {
              "text": "ดูแลกลุ่มคนทำงานรุ่นใหม่และผู้บริหารที่ต้องการเริ่มจัดระบบการเงินอย่างจริงจัง ทั้งด้านการบริหารความเสี่ยง การสร้างความคุ้มครอง และการลงทุนเพื่อสะสมความมั่งคั่งในระยะยาว"
            },
            {
              "text": "โดยเฉพาะลูกค้าที่มีรายได้และศักยภาพในการเติบโต แต่ต้องการเปลี่ยนรายได้ในวันนี้ให้กลายเป็นความมั่นคงและทางเลือกทางการเงินที่มากขึ้นในอนาคต"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Communication Arts",
              "text": "Advertising and Brand Communications, Chulalongkorn University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6701020768"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
              "name": "",
              "description": "เลขทะเบียน 132094"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "pawan",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/pawan.webp",
      "alt": "Pawan Pui-ot",
      "className": "team-photo"
    },
    "firstName": "Pawan",
    "lastName": "Pui-ot",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / TUI",
    "backRole": "Financial Life Partner",
    "summaryName": "Tui · ภาวรรณ ปุยอ๊อต",
    "summaryBio": "นำประสบการณ์ด้านการวางแผนการเงินและประกันกว่า 6 ปี มาช่วยครอบครัววางแผนความคุ้มครองและเตรียมความพร้อมเพื่อชีวิตหลังเกษียณ โดยออกแบบแผนให้เหมาะกับเป้าหมายและจังหวะชีวิตของแต่ละคน",
    "summaryExpertise": [
      "Risk Management & Insurance Planning",
      "Retirement Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Pawan",
      "lastName": "Pui-ot",
      "thaiName": "ภาวรรณ ปุยอ๊อต",
      "nickname": "Tui",
      "expertise": [
        "Risk Management & Insurance Planning",
        "Retirement Planning"
      ],
      "quote": [
        "แต่ละชีวิตมีจังหวะที่แตกต่างกัน",
        "แผนการเงินจึงควรออกแบบให้เหมาะกับแต่ละคน"
      ],
      "sections": [
        {
          "heading": "รู้จัก Tui",
          "paragraphs": [
            {
              "text": "ตุ๊ยมีประสบการณ์ด้านการวางแผนการเงินและประกันมากกว่า 6 ปี ควบคู่กับประสบการณ์การทำงานเป็นพนักงานต้อนรับบนเครื่องบินกว่า 14 ปี ซึ่งทำให้ได้ดูแลและเข้าใจผู้คนที่มีพื้นฐานและความต้องการแตกต่างกัน"
            },
            {
              "text": "เชื่อว่าทุกคนมีเป้าหมายและจังหวะชีวิตที่ไม่เหมือนกัน การวางแผนการเงินจึงควรเริ่มจากการเข้าใจชีวิตของลูกค้า ก่อนออกแบบแนวทางที่เหมาะสม และพร้อมทบทวนปรับแผนไปด้วยกันในแต่ละช่วงชีวิต โดยเฉพาะการสร้างความมั่นคงให้คนที่เรารักและการเตรียมความพร้อมเพื่อชีวิตหลังเกษียณ"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 14 ปีในสายงานบริการการบิน ซึ่งช่วยพัฒนาทักษะด้านการสื่อสาร การรับฟัง การเข้าใจความต้องการของผู้คน และการดูแลในสถานการณ์ที่หลากหลาย"
            },
            {
              "text": "เมื่อนำประสบการณ์ดังกล่าวมาผสานกับประสบการณ์ด้านการวางแผนการเงินและประกัน จึงให้ความสำคัญกับการเข้าใจบริบทของลูกค้าแต่ละคนอย่างรอบด้าน เพื่อออกแบบแผนด้านความคุ้มครองและการเกษียณที่สามารถปรับเปลี่ยนไปพร้อมกับชีวิตได้"
            },
            {
              "label": "Cabin Crew",
              "text": "Bangkok Airways"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Families & Couples Planning for Long-Term Security",
              "text": ""
            },
            {
              "text": "ดูแลครอบครัวที่ต้องการวางแผนปกป้องรายได้และสร้างความมั่นคงให้คนที่รัก โดยให้ความสำคัญกับการเตรียมความคุ้มครองที่เหมาะสมกับภาระและความรับผิดชอบของแต่ละครอบครัว"
            },
            {
              "text": "รวมถึงคู่รักหรือครอบครัวที่ไม่มีลูก ซึ่งต้องการให้ความสำคัญกับการสะสมทรัพย์สิน การเตรียมเงินเพื่อการเกษียณ และการออกแบบชีวิตในอนาคตให้สามารถรักษาคุณภาพชีวิตที่ต้องการได้อย่างมั่นคง"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Science in Sports Science",
              "text": "Chulalongkorn University"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6301039804"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารทั่วไป",
              "name": "",
              "description": "เลขทะเบียน 118043"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "warapat",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/warapat.webp",
      "alt": "Warapat Kaewtip",
      "className": "team-photo"
    },
    "firstName": "Warapat",
    "lastName": "Kaewtip",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / POOM",
    "backRole": "Financial Life Partner",
    "summaryName": "Phum · วรภัทร แก้วทิพย์",
    "summaryBio": "นำประสบการณ์กว่า 12 ปีในการดูแลผู้คนจากหลากหลายพื้นฐาน และประสบการณ์ในธุรกิจประกันกว่า 5 ปี มาช่วยลูกค้าวางแผนความมั่นคงทางการเงินอย่างเป็นระบบ โดยเริ่มจากการเข้าใจชีวิต เป้าหมาย และความกังวลของแต่ละคนก่อนออกแบบแนวทางที่เหมาะสม",
    "summaryExpertise": [
      "Tax Planning",
      "Risk Management & Insurance Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Warapat",
      "lastName": "Kaewtip",
      "thaiName": "วรภัทร แก้วทิพย์",
      "nickname": "Phum",
      "expertise": [
        "Tax Planning",
        "Risk Management & Insurance Planning"
      ],
      "quote": [
        "แผนที่ดีต้องเป็นแผนที่ทำได้จริง"
      ],
      "sections": [
        {
          "heading": "รู้จัก Phum",
          "paragraphs": [
            {
              "text": "ภูมิมีประสบการณ์กว่า 12 ปีในสายการบิน ซึ่งเปิดโอกาสให้ได้พบและดูแลผู้คนที่มีทั้งความต้องการ รูปแบบชีวิต และมุมมองที่แตกต่างกัน ประสบการณ์นี้ช่วยพัฒนาทักษะด้านการรับฟัง การสื่อสาร และการทำความเข้าใจผู้คนอย่างเป็นธรรมชาติ ก่อนนำมาต่อยอดกับประสบการณ์ในธุรกิจประกันและการวางแผนการเงิน"
            },
            {
              "text": "ภูมิเชื่อว่าการวางแผนที่ดีไม่ควรเริ่มจากผลิตภัณฑ์ แต่ควรเริ่มจากการเข้าใจชีวิต เป้าหมาย ความกังวล และความสามารถในการรับภาระของลูกค้า แล้วจึงออกแบบแนวทางร่วมกัน เพื่อให้ลูกค้าเข้าใจว่าแต่ละแผนมีไว้เพื่ออะไร และสามารถตัดสินใจได้อย่างสบายใจ"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 12 ปีในสายการบิน และกว่า 5 ปีในธุรกิจประกัน ทำให้มีทั้งมุมมองด้านการดูแลผู้คนและความเข้าใจเรื่องการบริหารความเสี่ยงทางการเงิน"
            },
            {
              "text": "ประสบการณ์จากงานบริการช่วยให้ภูมิให้ความสำคัญกับการรับฟังและสร้างบรรยากาศที่ลูกค้าสามารถพูดคุยเรื่องเงินได้อย่างเป็นธรรมชาติ ขณะที่ประสบการณ์ด้านประกันช่วยต่อยอดสู่การวางแผนความคุ้มครอง ภาษี การเกษียณ และความมั่นคงของครอบครัวอย่างเป็นระบบ"
            },
            {
              "label": "Cabin Crew",
              "text": "Thai Airways International Public Company Limited"
            },
            {
              "label": "Insurance Industry",
              "text": "ประสบการณ์ในธุรกิจประกันกว่า 5 ปี"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Couples, Private Sector Employees & Self-Employed Professionals",
              "text": ""
            },
            {
              "text": "ดูแลคู่รัก พนักงานบริษัท และผู้ประกอบวิชาชีพอิสระที่ต้องการจัดระบบการเงิน เพื่อสร้างความมั่นคงให้กับชีวิตในระยะยาว โดยเฉพาะผู้ที่เริ่มมีรายได้ ภาระ และเป้าหมายทางการเงินหลายด้านพร้อมกัน"
            },
            {
              "text": "ให้ความสำคัญกับการช่วยลูกค้าวางแผนครอบคลุมทั้งการบริหารความเสี่ยง สุขภาพ ภาษี การเตรียมความพร้อมเพื่อการเกษียณ และการสร้างความมั่นคงให้คนที่รัก โดยออกแบบแผนให้เหมาะกับสถานการณ์และสามารถทำต่อเนื่องได้จริง"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Master’s Degree in Business Administration",
              "text": "College of Management, Mahidol University (CMMU)"
            },
            {
              "label": "Bachelor’s Degree in Political Science",
              "text": "Chulalongkorn University"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6401017675"
            },
            {
              "code": "ผู้แนะนำการลงทุน",
              "name": "",
              "description": "เลขทะเบียน 118394"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "panadda",
    "portrait": {
      "kind": "placeholder",
      "letter": "P",
      "ariaLabel": "พื้นที่สำหรับภาพ Panadda"
    },
    "firstName": "Panadda",
    "lastName": "Buddaken",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / JOY",
    "backRole": "Financial Life Partner",
    "summaryName": "Joy · ปนัดดา บุดดาเคน",
    "summaryBio": "นำประสบการณ์ด้านการทดลอง และพัฒนาผลิตภัณฑ์มาต่อยอดสู่การวางแผนการเงิน โดยให้ความสำคัญกับการเข้าใจเป้าหมายและจังหวะชีวิตของแต่ละคน ก่อนออกแบบแนวทางการเงินที่เรียบง่าย ใช้ได้จริง และยั่งยืน",
    "summaryExpertise": [
      "Financial Planning",
      "Insurance Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Panadda",
      "lastName": "Buddaken",
      "thaiName": "ปนัดดา บุดดาเคน",
      "nickname": "Joy",
      "expertise": [
        "Financial Planning",
        "Insurance Planning"
      ],
      "quote": [
        "เข้าใจชีวิตก่อนออกแบบการเงิน",
        "เรียบง่าย ทำได้จริง และยั่งยืน"
      ],
      "sections": [
        {
          "heading": "รู้จัก Joy",
          "paragraphs": [
            {
              "text": "จอยมีประสบการณ์ด้านการทดลองและพัฒนาผลิตภัณฑ์ทางการเกษตร ก่อนต่อยอดเข้าสู่งานที่ปรึกษาทางการเงิน โดยเชื่อว่าการออกแบบที่ดีควรเริ่มจากการเข้าใจผลลัพธ์ที่ต้องการและคนที่เรากำลังออกแบบให้"
            },
            {
              "text": "แนวทางการดูแลลูกค้าจึงเริ่มจากการทำความเข้าใจเป้าหมาย จังหวะชีวิต และความรับผิดชอบของแต่ละคน ก่อนออกแบบแผนการเงินและความคุ้มครองที่เหมาะสม ด้วยแนวคิดที่เรียบง่าย สามารถลงมือทำได้จริง และเติบโตไปกับชีวิตในระยะยาว"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 2 ปีด้านการทดลองและพัฒนาผลิตภัณฑ์ทางการเกษตร ซึ่งช่วยพัฒนากระบวนการคิดเชิงวิเคราะห์ การทดลอง การประเมินผลลัพธ์ และการปรับแนวทางให้เหมาะกับความต้องการที่แตกต่างกัน"
            },
            {
              "text": "เมื่อนำประสบการณ์ดังกล่าวมาต่อยอดสู่การวางแผนการเงิน จึงให้ความสำคัญกับการเข้าใจโจทย์ของลูกค้าก่อนเลือกแนวทางแก้ไข และออกแบบแผนที่ไม่ซับซ้อนเกินความจำเป็น แต่สามารถนำไปใช้และปรับเปลี่ยนตามชีวิตจริงได้"
            },
            {
              "label": "Agricultural Product Research & Development",
              "text": "ประสบการณ์ด้านการทดลองและพัฒนาผลิตภัณฑ์ทางการเกษตร"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Young Professionals & Early Wealth Builders",
              "text": ""
            },
            {
              "text": "ดูแลมนุษย์เงินเดือนและคนทำงานรุ่นใหม่ที่กำลังสร้างตัว เมื่อรายได้และเป้าหมายในชีวิตเพิ่มขึ้น พร้อมกับภาระและความรับผิดชอบที่มากขึ้น จึงต้องการเริ่มจัดระบบการเงินของตนเองอย่างจริงจัง"
            },
            {
              "text": "โดยช่วยวางพื้นฐานตั้งแต่การจัดลำดับเป้าหมาย การสร้างความคุ้มครอง และการวางแผนทางการเงิน เพื่อสร้างความมั่นคงให้ทั้งตนเองและคนที่รักในระยะยาว"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Science in Horticulture (Vegetable Crops)",
              "text": "Maejo University, Thailand"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6701057821"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารทั่วไป",
              "name": "",
              "description": "เลขทะเบียน 136956"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "worawut",
    "portrait": {
      "kind": "placeholder",
      "letter": "W",
      "ariaLabel": "พื้นที่สำหรับภาพ Worawut"
    },
    "firstName": "Worawut",
    "lastName": "Premkamonmas",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / BENZ",
    "backRole": "Financial Life Partner",
    "summaryName": "Benz · วรวุฒิ เปรมกมลมาศ",
    "summaryBio": "นำประสบการณ์ด้าน Business Analysis และ Technology มาช่วยย่อยเรื่องการเงินที่ซับซ้อนให้เข้าใจง่าย พร้อมออกแบบแนวทางด้านการเกษียณและภาษีให้พนักงานบริษัทสามารถนำไปใช้ได้จริงและสอดคล้องกับเป้าหมายชีวิต",
    "summaryExpertise": [
      "Retirement Planning",
      "Tax Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License · Investment Consultant License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Worawut",
      "lastName": "Premkamonmas",
      "thaiName": "วรวุฒิ เปรมกมลมาศ",
      "nickname": "Benz",
      "expertise": [
        "Retirement Planning",
        "Tax Planning"
      ],
      "quote": [
        "เปลี่ยนเรื่องการเงินที่ซับซ้อน",
        "ให้กลายเป็นแผนที่เข้าใจง่ายและทำได้จริง"
      ],
      "sections": [
        {
          "heading": "รู้จัก Benz",
          "paragraphs": [
            {
              "text": "เบ็นซ์มีพื้นฐานด้านการวิเคราะห์ธุรกิจและเทคโนโลยี โดยเชี่ยวชาญในการเปลี่ยนข้อมูลและเรื่องที่ซับซ้อนให้กลายเป็นแนวทางที่เข้าใจง่ายและสามารถนำไปใช้ได้จริง"
            },
            {
              "text": "แนวทางเดียวกันนี้ถูกนำมาใช้ในการดูแลด้านการเงิน โดยให้ความสำคัญกับการช่วยลูกค้ามองเห็นภาพรวม เข้าใจเหตุผลเบื้องหลังแต่ละการตัดสินใจ และออกแบบแผนด้านการเกษียณและภาษีให้เหมาะกับเป้าหมายในแต่ละช่วงชีวิต โดยเฉพาะพนักงานบริษัทเอกชนที่ต้องการวางแผนอนาคตอย่างเป็นระบบ"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 14 ปีในด้าน Business Analysis, Business Information Technology และ Digital Transformation ซึ่งช่วยพัฒนาทักษะด้านการวิเคราะห์ข้อมูล การแก้ปัญหาอย่างเป็นระบบ และการเชื่อมโยงข้อมูลหลายด้านเพื่อใช้ประกอบการตัดสินใจ"
            },
            {
              "text": "เมื่อนำประสบการณ์เหล่านี้มาต่อยอดกับการวางแผนการเงิน เบ็นซ์จึงให้ความสำคัญกับการทำให้เรื่องที่ซับซ้อนกลายเป็นภาพที่ลูกค้าเข้าใจได้ง่าย พร้อมช่วยจัดลำดับทางเลือกและออกแบบแผนที่สามารถนำไปปฏิบัติได้จริง"
            },
            {
              "label": "Associate Director, Business Analyst",
              "text": "Orbit Digital Co., Ltd."
            },
            {
              "label": "Deputy General Manager, Business Information Technology Department",
              "text": "CPPC Public Co., Ltd."
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Private Sector Employees",
              "text": ""
            },
            {
              "text": "ดูแลพนักงานบริษัทเอกชนที่ต้องการวางแผนการเงินให้เป็นระบบ โดยเฉพาะผู้ที่เริ่มมองเห็นความสำคัญของการเตรียมตัวเพื่อการเกษียณ การบริหารภาษี และการจัดสรรเงินให้เหมาะกับเป้าหมายระยะยาว"
            },
            {
              "text": "ให้ความสำคัญกับการช่วยลูกค้าเข้าใจว่าเงินที่มีอยู่ในวันนี้ควรถูกจัดวางอย่างไร เพื่อให้สามารถสร้างความมั่นคงในอนาคตได้โดยไม่กระทบกับคุณภาพชีวิตในปัจจุบัน"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Master of Business Administration — Young Executive Program",
              "text": "Faculty of Commerce and Accountancy, Chulalongkorn University"
            },
            {
              "label": "Bachelor of Engineering in Computer Engineering, First Class Honours",
              "text": "Faculty of Engineering, Kasetsart University"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6801016462"
            },
            {
              "code": "ผู้แนะนำการลงทุนตราสารซับซ้อนประเภท 2",
              "name": "",
              "description": "เลขทะเบียน 136397"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "nicharat",
    "portrait": {
      "kind": "placeholder",
      "letter": "N",
      "ariaLabel": "พื้นที่สำหรับภาพ Nicharat"
    },
    "firstName": "Nicharat",
    "lastName": "Kiatkornlak",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / FANG",
    "backRole": "Financial Life Partner",
    "summaryName": "Fang · ณิชารัศม์ เกียรติกรลักษณ์",
    "summaryBio": "นำประสบการณ์กว่า 6 ปีในสายธนาคารและสินเชื่อมาต่อยอดสู่การวางแผนการเงิน โดยเชื่อว่าการเตรียมความพร้อมตั้งแต่วันนี้ ช่วยให้ลูกค้าจัดการความเสี่ยงและตัดสินใจเรื่องเงินได้ดีกว่าการรอแก้ปัญหาที่ปลายเหตุ",
    "summaryExpertise": [
      "Risk Management",
      "Tax Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Nicharat",
      "lastName": "Kiatkornlak",
      "thaiName": "ณิชารัศม์ เกียรติกรลักษณ์",
      "nickname": "Fang",
      "expertise": [
        "Risk Management",
        "Tax Planning"
      ],
      "quote": [
        "วางแผนก่อนปัญหาเกิด",
        "เพื่อให้ทุกการตัดสินใจเรื่องเงินมั่นใจขึ้น"
      ],
      "sections": [
        {
          "heading": "รู้จัก Fang",
          "paragraphs": [
            {
              "text": "จุดเริ่มต้นของการเปลี่ยนจากสายงานธนาคารมาสู่การเป็นที่ปรึกษาการเงิน เกิดจากประสบการณ์ทำงานด้านสินเชื่อที่ทำให้ฟางได้เห็นพฤติกรรมและความท้าทายทางการเงินของผู้คนในหลากหลายรูปแบบ"
            },
            {
              "text": "จากประสบการณ์นั้น ฟางเชื่อว่าการช่วยให้คนเข้าใจและวางแผนการเงินตั้งแต่ก่อนเกิดปัญหา ย่อมดีกว่าการรอแก้ไขเมื่อภาระทางการเงินเกิดขึ้นแล้ว จึงให้ความสำคัญกับการช่วยลูกค้าจัดระบบการเงิน บริหารความเสี่ยง และเตรียมความพร้อมสำหรับเป้าหมายในอนาคตอย่างเป็นระบบ"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์กว่า 6 ปีในสายงานธนาคาร โดยเฉพาะงานที่เกี่ยวข้องกับสินเชื่อ ซึ่งทำให้ได้เห็นทั้งพฤติกรรมการใช้เงิน ภาระหนี้ และผลกระทบของการตัดสินใจทางการเงินที่มีต่อชีวิตของลูกค้า"
            },
            {
              "text": "ประสบการณ์ดังกล่าวถูกนำมาต่อยอดในการวางแผนการเงิน โดยให้ความสำคัญกับการป้องกันปัญหาก่อนเกิดขึ้น ผ่านการบริหารความเสี่ยง การจัดโครงสร้างทางการเงิน และการเตรียมความพร้อมสำหรับเป้าหมายในระยะยาว"
            },
            {
              "label": "Banking & Lending",
              "text": "UOB Thailand"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "Working Professionals, Business Owners & Family Breadwinners",
              "text": ""
            },
            {
              "text": "ดูแลคนทำงานประจำและเจ้าของกิจการที่เป็นเสาหลักของครอบครัว ซึ่งต้องการวางแผนการเงินเพื่อสร้างความมั่นคงให้ทั้งตนเองและคนที่รัก"
            },
            {
              "text": "โดยช่วยวางโครงสร้างด้านการบริหารความเสี่ยง ภาษี และการเตรียมความพร้อมทางการเงิน เพื่อให้ลูกค้าสามารถใช้ชีวิตตามไลฟ์สไตล์ที่ต้องการได้ทั้งในปัจจุบันและหลังเกษียณ โดยไม่ต้องกังวลกับภาระทางการเงินที่อาจเกิดขึ้นในอนาคต"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor’s Degree in Finance",
              "text": "Burapha University, Thailand"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6901025915"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "taneeya",
    "portrait": {
      "kind": "placeholder",
      "letter": "T",
      "ariaLabel": "พื้นที่สำหรับภาพ Taneeya"
    },
    "firstName": "Taneeya",
    "lastName": "Sukitpiriyaphan",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / KUNG",
    "backRole": "Financial Life Partner",
    "summaryName": "Kung · ฐณียา สุกิจพิริยพันธุ์",
    "summaryBio": "นำประสบการณ์ด้านการบริหารธุรกิจ บัญชี และการเงิน มาช่วยเจ้าของกิจการ SME วางแผนความคุ้มครองทั้งส่วนตัวและธุรกิจ พร้อมเตรียมความมั่นคงให้ครอบครัวและเป้าหมายด้านการศึกษาของบุตร",
    "summaryExpertise": [
      "Risk Management & Insurance Planning"
    ],
    "summaryQualifications": "Life Insurance Agent License",
    "qualificationsHeading": "คุณวุฒิและใบอนุญาต",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Taneeya",
      "lastName": "Sukitpiriyaphan",
      "thaiName": "ฐณียา สุกิจพิริยพันธุ์",
      "nickname": "Kung",
      "expertise": [
        "Risk Management & Insurance Planning"
      ],
      "quote": [
        "ดูแลทั้งความมั่นคงของธุรกิจ",
        "และอนาคตของครอบครัวไปพร้อมกัน"
      ],
      "sections": [
        {
          "heading": "รู้จัก Kung",
          "paragraphs": [
            {
              "text": "กุงมีประสบการณ์ด้านการจัดการและบริหารธุรกิจ โดยเฉพาะการดูแลเรื่องบัญชีและการเงิน ซึ่งทำให้เข้าใจว่าการเงินของเจ้าของกิจการมักเชื่อมโยงทั้งเรื่องธุรกิจ ครอบครัว และความรับผิดชอบหลายด้านเข้าด้วยกัน"
            },
            {
              "text": "แนวทางการดูแลลูกค้าจึงให้ความสำคัญกับการมองภาพรวมของชีวิตและธุรกิจ ก่อนออกแบบแผนบริหารความเสี่ยงและความคุ้มครองที่เหมาะสม เพื่อช่วยให้เจ้าของกิจการสามารถดูแลทั้งสิ่งที่สร้างมาและคนสำคัญในครอบครัวได้อย่างมั่นคง"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "มีประสบการณ์ด้านการบริหารธุรกิจ การจัดการบัญชีและการเงิน รวมถึงการดำเนินธุรกิจด้านการผลิตและจำหน่ายสินค้า ทำให้มีความเข้าใจโดยตรงถึงความท้าทายของเจ้าของกิจการ ทั้งเรื่องรายรับรายจ่าย ต้นทุน การบริหารเงิน และความเสี่ยงที่อาจส่งผลต่อธุรกิจและครอบครัว"
            },
            {
              "text": "ประสบการณ์เหล่านี้ช่วยให้สามารถมองโจทย์ของลูกค้า SME ได้ทั้งในมุมส่วนตัวและมุมธุรกิจ และนำมาต่อยอดในการวางแผนความคุ้มครองและความมั่นคงในระยะยาว"
            },
            {
              "label": "Business Owner / Business Management",
              "text": "ผู้ผลิตและจำหน่ายผ้าไตรและสังฆทาน รวมถึงบริการงานปักคอมพิวเตอร์และงาน Transfer Printing"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "SME Business Owners with Families",
              "text": ""
            },
            {
              "text": "ดูแลเจ้าของกิจการ SME ที่มีครอบครัวและบุตร ซึ่งต้องรับผิดชอบทั้งความต่อเนื่องของธุรกิจและความมั่นคงของคนในครอบครัว"
            },
            {
              "text": "โดยให้ความสำคัญกับการวางแผนบริหารความเสี่ยงทั้งส่วนบุคคลและธุรกิจ พร้อมเตรียมเงินสำหรับเป้าหมายสำคัญในอนาคต โดยเฉพาะการศึกษาของบุตร เพื่อให้แผนของครอบครัวยังคงเดินต่อได้แม้เกิดเหตุการณ์ไม่คาดคิด"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor’s Degree in Home Economics",
              "text": "Suan Dusit University, Thailand"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "ตัวแทนประกันชีวิต",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6901001151"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "jakaphan",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/jakaphan.webp",
      "alt": "Jakaphan Sathavirapong",
      "className": "team-photo"
    },
    "firstName": "Jakaphan",
    "lastName": "Sathavirapong",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / JAKAPHAN",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "จบการศึกษาด้านบริหารธุรกิจ สาขาการตลาด จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์กับ Thai Airways และ Asiasoft",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "MFA · MDRT",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Jakaphan",
      "lastName": "Sathavirapong",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก Jakaphan",
          "paragraphs": [
            {
              "text": "สำเร็จการศึกษาด้านบริหารธุรกิจ สาขาการตลาด จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์ทำงานในตำแหน่ง Cabin Crew ที่ Thai Airways และ Assistant Marketing Manager ที่ Asiasoft พร้อมคุณวุฒิ MFA และสมาชิก MDRT"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "label": "Cabin Crew",
              "text": "Thai Airways PCL Co., Ltd."
            },
            {
              "label": "Assistant Marketing Manager",
              "text": "Asiasoft Co., Ltd."
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลกลุ่มลูกค้าหลักที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor’s Degree: Business Administration in Marketing",
              "text": "Kasetsart University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "MFA",
              "name": "Master Financial Advisor",
              "description": "Professional designation จาก LIMRA"
            },
            {
              "code": "MDRT",
              "name": "Million Dollar Round Table",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "Investment Consultant License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 117233"
            },
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6401000572"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "sahathon",
    "portrait": {
      "kind": "placeholder",
      "letter": "S",
      "ariaLabel": "พื้นที่สำหรับภาพ Sahathon"
    },
    "firstName": "Sahathon",
    "lastName": "Srimanop",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / SAHATHON",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "จบการศึกษาด้านการบัญชีจากมหาวิทยาลัยหอการค้าไทย มีประสบการณ์ด้านการเงินและบัญชีองค์กรกับ Siam Cement Group, Thai Union และ Deloitte",
    "summaryExpertise": [
      "Corporate Finance",
      "Accounting · Audit"
    ],
    "summaryQualifications": "[รอเพิ่มเติมคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Sahathon",
      "lastName": "Srimanop",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "Corporate Finance",
        "Accounting · Audit"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก Sahathon",
          "paragraphs": [
            {
              "text": "สำเร็จการศึกษาบัญชีบัณฑิตจาก University of the Thai Chamber of Commerce (International College) มีประสบการณ์ด้านการเงินและบัญชีองค์กรครอบคลุมงานบริหารการเงิน การควบคุมต้นทุน งานบัญชี และงานตรวจสอบ จาก M2 Animation Studio, VNU Exhibition Asia Pacific, Thai Union, Siam Cement Group และ Deloitte"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "label": "Finance Manager",
              "text": "M2 Animation Studio"
            },
            {
              "label": "Senior Finance Manager",
              "text": "VNU Exhibition Asia Pacific"
            },
            {
              "label": "Cost Controller",
              "text": "Thai Union"
            },
            {
              "label": "Chief Accounting Officer",
              "text": "Siam Cement Group"
            },
            {
              "label": "Audit Assistant",
              "text": "Deloitte"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลกลุ่มลูกค้าหลักที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor of Accountancy",
              "text": "University of the Thai Chamber of Commerce (International College)"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมคุณวุฒิวิชาชีพและสมาชิกสมาคม]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6501018126"
            },
            {
              "code": "Investment Consultant License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 123379"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "wanravee",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/wanravee.webp",
      "alt": "Wanravee Techanonrungrueng",
      "className": "team-photo"
    },
    "firstName": "Wanravee",
    "lastName": "Techanonrungrueng",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / WANRAVEE",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "จบการศึกษาด้านวิศวกรรมศาสตร์จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์ด้านกลยุทธ์และนวัตกรรมกับ B.Grimm และงานวิศวกรรมกับ Bangchak",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "[รอเพิ่มเติมคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Wanravee",
      "lastName": "Techanonrungrueng",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก Wanravee",
          "paragraphs": [
            {
              "text": "สำเร็จการศึกษาด้านวิศวกรรมศาสตร์จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์ด้านกลยุทธ์และนวัตกรรมในตำแหน่ง Associate Manager of Strategy and Innovation ที่ B.Grimm Joint Venture และงานวิศวกรรมตรวจสอบและการกัดกร่อนที่ Bangchak Refinery"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "label": "Associate Manager of Strategy and Innovation",
              "text": "B.Grimm Joint Venture"
            },
            {
              "label": "Inspection and Corrosion Engineer",
              "text": "Bangchak Refinery"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลกลุ่มลูกค้าหลักที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Bachelor’s of Engineering",
              "text": "Kasetsart University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมคุณวุฒิวิชาชีพและสมาชิกสมาคม]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "Investment Consultant License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 127782"
            },
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6601017320"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "sakkasem",
    "portrait": {
      "kind": "photo",
      "src": "/images/team/sakkasem.webp",
      "alt": "Sakkasem Suwandee",
      "className": "team-photo"
    },
    "firstName": "Sakkasem",
    "lastName": "Suwandee",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / SAKKASEM",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "จบการศึกษาด้านสถาปัตยกรรมศาสตร์จากมหาวิทยาลัยศิลปากร มีประสบการณ์งานออกแบบและพัฒนาอสังหาริมทรัพย์",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "[รอเพิ่มเติมคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Sakkasem",
      "lastName": "Suwandee",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก Sakkasem",
          "paragraphs": [
            {
              "text": "สำเร็จการศึกษาจากคณะสถาปัตยกรรมศาสตร์ มหาวิทยาลัยศิลปากร มีประสบการณ์งานออกแบบในตำแหน่งสถาปนิกที่ Bloc Space Design และงานพัฒนาอสังหาริมทรัพย์ที่ Quick Property"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "label": "Architect",
              "text": "Bloc Space Design"
            },
            {
              "label": "Real Estate Developer",
              "text": "Quick Property"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลกลุ่มลูกค้าหลักที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Faculty of Architecture",
              "text": "Silpakorn University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมคุณวุฒิวิชาชีพและสมาชิกสมาคม]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6701038809"
            },
            {
              "code": "Investment Consultant License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 134001"
            }
          ]
        }
      ]
    }
  }
];
