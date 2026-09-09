/**
 * SUPP advisor roster.
 *
 * Portraits: `team-reference.png` is a three-up sprite — `left` is the percent
 * offset that slides the right face into the frame (the CSS scales the sprite
 * to 303.333% of the card width). Cards with `kind: "placeholder"` show the
 * initial tile, `kind: "empty"` reserves a slot for an advisor still to come.
 */

export type Portrait =
  | { kind: "photo"; src: string; alt: string; left?: number; className?: string }
  | { kind: "placeholder"; letter: string; ariaLabel: string }
  | { kind: "empty" };

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
  profile: AdvisorProfile;
};

export const team: TeamMember[] = [
  {
    "slug": "karunyaporn",
    "portrait": {
      "kind": "photo",
      "src": "/images/team-reference.png",
      "alt": "Karunyaporn Thanomsap",
      "left": -3.939393939393939
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
        "สร้างความมั่นใจ",
        "ด้วยเครื่องมือที่เหมาะกับชีวิต"
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
              "text": "ปัจจุบันดำรงตำแหน่ง Founder & CEO, SUPP และมีประสบการณ์ด้าน Sales, Marketing และ Sales Planning จากองค์กรชั้นนำ ก่อนนำประสบการณ์ด้านธุรกิจ การตลาด และการบริหารมาพัฒนา SUPP เพื่อสร้างแนวทางการวางแผนการเงินที่ช่วยให้ลูกค้าสามารถจัดการเรื่องการเงินได้อย่างมีประสิทธิภาพและสอดคล้องกับเป้าหมายชีวิต"
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
              "description": "Professional designation จาก LIMRA"
            },
            {
              "code": "FChFP",
              "name": "Fellow Chartered Financial Practitioner",
              "description": "Professional designation ภายใต้ Asia Pacific Financial Services Association (APFinSA)"
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
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
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
      "src": "/images/team-reference.png",
      "alt": "Akasit Assawamongkolpun",
      "left": -103.93939393939394
    },
    "firstName": "Akasit",
    "lastName": "Assawamongkolpun",
    "role": "Co-Founder",
    "profileLabel": "PROFILE / HAM",
    "backRole": "Co-Founder",
    "summaryName": "แฮม · เอกสิทธิ์ อัศวมงคลพันธุ์",
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
      "nickname": "Ham (แฮม)",
      "expertise": [
        "Financial Planning",
        "Retirement Planning"
      ],
      "quote": [
        "Better financial decisions",
        "begin with clarity."
      ],
      "sections": [
        {
          "heading": "รู้จักแฮม",
          "paragraphs": [
            {
              "text": "มีประสบการณ์ในสายการเงินมากกว่า 14 ปี ปัจจุบันให้คำปรึกษาด้าน Financial Planning และ Retirement Planning โดยมุ่งช่วยให้ Professionals และเจ้าของธุรกิจมีความชัดเจนในการตัดสินใจทางการเงินที่สำคัญ ผ่านการวางแผนที่เริ่มต้นจากเป้าหมายชีวิตและออกแบบให้เหมาะกับแต่ละบุคคล"
            },
            {
              "text": "เชื่อว่าการวางแผนการเงินที่ดีควรเริ่มจากชีวิตของลูกค้า ไม่ใช่ผลิตภัณฑ์"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "ประสบการณ์กว่า 14 ปีในอุตสาหกรรมการเงิน ครอบคลุมธุรกิจประกันชีวิต การให้คำปรึกษาทางการเงิน การลงทุนและบริหารความมั่งคั่ง รวมถึงเทคโนโลยีด้าน Financial Planning โดยมีประสบการณ์ร่วมงานกับ AIA Thailand, Phillip Capital, FINNOMENA และ GoalsMapper"
            },
            {
              "text": "นำองค์ความรู้จาก Risk Management, Investment, Wealth Management และ Financial Technology มาประยุกต์ใช้ในการออกแบบแผนที่เหมาะกับเป้าหมายชีวิตของลูกค้าแต่ละคน"
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
              "text": "โดยเฉพาะผู้บริหารและผู้มีรายได้สูงที่ต้องการวางแผนเกษียณ มองหาความชัดเจนว่าเงินและทรัพย์สินที่สะสมไว้จะเพียงพอต่อการรักษามาตรฐานชีวิต และสามารถบริหารเป็นกระแสเงินสดได้อย่างเหมาะสมตลอดช่วงชีวิตหลังเกษียณ"
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
              "description": "Professional designation จาก LIMRA"
            },
            {
              "code": "FChFP",
              "name": "Fellow Chartered Financial Practitioner",
              "description": "Professional designation ภายใต้ Asia Pacific Financial Services Association (APFinSA)"
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
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
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
      "src": "/images/team-reference.png",
      "alt": "Chatchai Unrasmeewong",
      "left": -203.93939393939397
    },
    "firstName": "Chatchai",
    "lastName": "Unrasmeewong",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / CHATCHAI",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "จบการศึกษาด้านบริหารธุรกิจ สาขาการเงิน จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์กับ Thai Airways และ Double A 1991",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "AFPT · MDRT",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Chatchai",
      "lastName": "Unrasmeewong",
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
          "heading": "รู้จัก Chatchai",
          "paragraphs": [
            {
              "text": "สำเร็จการศึกษาด้านบริหารธุรกิจ สาขาการเงิน จากมหาวิทยาลัยเกษตรศาสตร์ มีประสบการณ์ทำงานในตำแหน่ง Cabin Crew ที่ Thai Airways และ Assistant to President ที่ Double A 1991 พร้อมคุณวุฒิ AFPT และใบอนุญาต Investment Planner และ Insurance License"
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
              "label": "Assistant to President",
              "text": "Double A 1991 PCL Co., Ltd."
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
              "label": "Bachelor’s Degree: Business Administration in Finance",
              "text": "Kasetsart University"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "AFPT MDRT",
              "name": "Associate Financial Planner Thailand",
              "description": "Member of Million Dollar Round Table — The Premier Association of Financial Professionals®"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "credentials": [
            {
              "code": "Investment Planner License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 115658"
            },
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6301045040"
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
      "src": "/images/chalermkwan-reference.png",
      "alt": "Chalermkwan Chanprasert",
      "className": "chalermkwan-portrait"
    },
    "firstName": "Chalermkwan",
    "lastName": "Chanprasert",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / CHALERMKWAN",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "มีประสบการณ์ด้านการปรับปรุงกระบวนการธุรกิจ Private Banking การวิเคราะห์ข้อมูลด้านบริหารความเสี่ยง และการวางแผนตรวจสอบระบบสารสนเทศ จาก SCB, TMB และ KBANK",
    "summaryExpertise": [
      "Business Process Improvement",
      "Risk Management · IT Audit"
    ],
    "summaryQualifications": "MDRT",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Chalermkwan",
      "lastName": "Chanprasert",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "Business Process Improvement",
        "Risk Management",
        "IT Audit"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก Chalermkwan",
          "paragraphs": [
            {
              "text": "มีพื้นฐานการศึกษาด้านสถิติและการจัดการระบบสารสนเทศ พร้อมประสบการณ์ในสถาบันการเงิน ครอบคลุมการปรับปรุงกระบวนการธุรกิจ Private Banking การวิเคราะห์ข้อมูลด้านบริหารความเสี่ยง และกลยุทธ์และการวางแผนตรวจสอบระบบสารสนเทศ"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "label": "Business Process Improvement (Private Banking)",
              "text": "SCB"
            },
            {
              "label": "Data Analyst (Risk Management)",
              "text": "TMB"
            },
            {
              "label": "Audit Strategy and Planning (IT Audit)",
              "text": "KBANK"
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
              "label": "Master of Science in Applied Statistics (Information System Management)",
              "text": "NIDA"
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
              "code": "Investment Consultant License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 115160"
            },
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6201000648"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "ratchakorn",
    "portrait": {
      "kind": "placeholder",
      "letter": "R",
      "ariaLabel": "พื้นที่สำหรับภาพ Ratchakorn"
    },
    "firstName": "Ratchakorn",
    "lastName": "Chanthanakarn",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / จี",
    "backRole": "Financial Life Partner",
    "summaryName": "จี · รัชกร ชาญธนากานต์",
    "summaryBio": "[รอเพิ่มเติมประวัติย่อ]",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "[รอเพิ่มเติมคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "Ratchakorn",
      "lastName": "Chanthanakarn",
      "thaiName": "รัชกร ชาญธนากานต์",
      "nickname": "จี",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จักจี",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "teshin",
    "portrait": {
      "kind": "placeholder",
      "letter": "T",
      "ariaLabel": "พื้นที่สำหรับภาพ Teshin"
    },
    "firstName": "Teshin",
    "lastName": "Kerdpornputhamon",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / TESHIN",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "มีพื้นฐานการศึกษาด้านนิเทศศาสตร์จากจุฬาลงกรณ์มหาวิทยาลัย และประสบการณ์ด้านการตลาดและการทำงานโครงการกับ Marketing Bear, Plus 1 และ MAKEiO",
    "summaryExpertise": [
      "[รอเพิ่มเติมข้อมูลความเชี่ยวชาญ]"
    ],
    "summaryQualifications": "[รอเพิ่มเติมคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "FINANCIAL LIFE PARTNER",
      "firstName": "Teshin",
      "lastName": "Kerdpornputhamon",
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
          "heading": "รู้จัก Teshin",
          "paragraphs": [
            {
              "text": "มีพื้นฐานการศึกษาจากคณะนิเทศศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย พร้อมประสบการณ์ทำงานด้านการตลาดและการทำงานโครงการกับ Marketing Bear, Plus 1 และ MAKEiO"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
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
              "text": "[รอเพิ่มเติมข้อมูลกลุ่มลูกค้าหลักที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "Faculty of Communication Arts",
              "text": "Chulalongkorn University"
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
              "description": "เลขที่ใบอนุญาต 132094"
            },
            {
              "code": "Insurance License",
              "name": "",
              "description": "เลขที่ใบอนุญาต 6701020768"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-1",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-2",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-3",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-4",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-5",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  },
  {
    "slug": "partner-6",
    "portrait": {
      "kind": "empty"
    },
    "firstName": "",
    "lastName": "",
    "role": "Financial Life Partner",
    "profileLabel": "PROFILE / โครงตัวอย่าง",
    "backRole": "Financial Life Partner",
    "summaryName": "[ชื่อเล่น · ชื่อ–นามสกุลภาษาไทย]",
    "summaryBio": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]",
    "summaryExpertise": [
      "[ความเชี่ยวชาญด้านที่ 1]",
      "[ความเชี่ยวชาญด้านที่ 2]"
    ],
    "summaryQualifications": "[เพิ่มคุณวุฒิและสมาชิกสมาคม]",
    "profile": {
      "kicker": "Financial Life Partner / โครงตัวอย่าง",
      "firstName": "[ชื่อภาษาอังกฤษ]",
      "lastName": "[นามสกุลภาษาอังกฤษ]",
      "thaiName": "[ชื่อ–นามสกุลภาษาไทย]",
      "nickname": "[ชื่อเล่น]",
      "expertise": [
        "[ความเชี่ยวชาญด้านที่ 1]",
        "[ความเชี่ยวชาญด้านที่ 2]"
      ],
      "quote": [
        "[แนวคิดในการดูแลลูกค้า]"
      ],
      "sections": [
        {
          "heading": "รู้จัก [ชื่อเล่น]",
          "paragraphs": [
            {
              "text": "[เพิ่มประวัติย่อและแนวทางการดูแลลูกค้า]"
            }
          ]
        },
        {
          "heading": "ประสบการณ์ที่เชื่อมมุมมองการเงินรอบด้าน",
          "paragraphs": [
            {
              "text": "[เพิ่มประสบการณ์ บทบาทงาน และองค์กรที่เคยร่วมงาน]"
            }
          ]
        },
        {
          "heading": "กลุ่มลูกค้าหลักที่ดูแล",
          "paragraphs": [
            {
              "label": "[กลุ่มลูกค้าหลัก]",
              "text": ""
            },
            {
              "text": "[เป้าหมายหรือโจทย์ของลูกค้าที่ดูแล]"
            }
          ]
        },
        {
          "heading": "การศึกษา",
          "className": "advisor-education",
          "paragraphs": [
            {
              "label": "[วุฒิการศึกษาและสาขา]",
              "text": "[สถาบันการศึกษา]"
            }
          ]
        },
        {
          "heading": "คุณวุฒิวิชาชีพและสมาชิกสมาคม",
          "credentials": [
            {
              "code": "[ชื่อย่อคุณวุฒิ]",
              "name": "[ชื่อคุณวุฒิเต็ม]",
              "description": "[สถาบันผู้ออกคุณวุฒิ / รายละเอียดสมาชิก]"
            }
          ]
        },
        {
          "heading": "ใบอนุญาต",
          "paragraphs": [
            {
              "text": "[รอเพิ่มเติมข้อมูลใบอนุญาต]"
            }
          ]
        }
      ]
    }
  }
];
